"""Prüft EduMaster vor jeder Veröffentlichung (auch Test-Befehl der Werkbank).

    python tools/check_app.py

Baut index.html neu und prüft dann:
  * JavaScript ist fehlerfrei lesbar (node --check, falls Node vorhanden)
  * Lerndaten sind vollständig (je Level mind. 10 Fragen, richtige Antwort vorhanden, Übungen lückenlos …)
  * Sicherheit: Content-Security-Policy vorhanden, keine Schlüssel/Tokens im Code, kein window.open/eval,
    App sendet selbst nichts übers Netz, Video-IDs sauber, iPad-Anpassungen vorhanden
  * Name ist „EduMaster“ (ohne 8)
Rückgabewert 0 = alles grün, 1 = mindestens eine Prüfung rot.
"""
from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build import ROOT, BuildError, render  # noqa: E402

WERKBANK_MODE = "--werkbank" in sys.argv

results: list[tuple[bool, str]] = []


def check(ok: bool, text: str) -> None:
    results.append((bool(ok), text))


def main() -> int:
    try:
        html = render(ROOT)
    except BuildError as e:
        print(f"ROT  Build: {e}")
        return 1
    index = ROOT / "index.html"
    stale = not index.exists() or index.read_bytes() != html.encode("utf-8")
    if stale:
        index.write_bytes(html.encode("utf-8"))
    if WERKBANK_MODE:
        # Die Werkbank merkt sich den Stand beim Teststart. Wurde index.html hier erst neu gebaut, stimmt er nicht
        # mehr – darum ist dieser Lauf rot und der nächste (mit fertiger index.html) grün.
        check(not stale, "index.html ist aktuell" + (" – wurde gerade neu gebaut, bitte Tests noch einmal starten" if stale else ""))
    else:
        check(True, "index.html neu gebaut" if stale else "index.html ist aktuell")
    m = re.search(r"<script>\n([\s\S]*)</script>\s*</body>", html)
    script = m.group(1) if m else ""
    check(bool(script), "Haupt-Skript gefunden")
    check(len(html) < 3_000_000, f"Dateigröße {len(html) // 1024} KB (< 3 MB)")

    # --- Name ---
    check("EduMaster 8" not in html, "Name ist „EduMaster“ (kein „EduMaster 8“)")
    check("<title>EduMaster" in html, "Seitentitel beginnt mit „EduMaster“")

    # --- Sicherheit ---
    csp = re.search(r'<meta http-equiv="Content-Security-Policy" content="([^"]+)"', html)
    check(bool(csp), "Content-Security-Policy vorhanden")
    if csp:
        c = csp.group(1)
        for part in ("object-src 'none'", "base-uri 'none'", "form-action 'none'", "frame-src https://www.youtube-nocookie.com"):
            check(part in c, f"CSP enthält {part}")
        check("connect-src 'self';" in c, "CSP: Seite darf nur mit sich selbst Daten tauschen (connect-src 'self')")
    secret_patterns = [
        r"RELAY_TOKEN\s*[=:]\s*['\"][^'\"]{6,}",
        r"Bearer\s+[A-Za-z0-9._~+/-]{16,}",
        r"\bsk-[A-Za-z0-9]{20,}",
        r"\bghp_[A-Za-z0-9]{20,}",
        r"\bgithub_pat_[A-Za-z0-9_]{20,}",
        r"AKIA[0-9A-Z]{16}",
    ]
    leaks = [p for p in secret_patterns if re.search(p, html)]
    check(not leaks, "keine Schlüssel/Tokens im Code" + (f" – Treffer: {leaks}" if leaks else ""))
    check("window.open(" not in script, "kein window.open (Videos über Link mit neuem Tab bzw. eingebettet)")
    check(not re.search(r"\beval\s*\(|new Function\s*\(", script), "kein eval / new Function")
    repo = re.search(r'const FEEDBACK_GITHUB_REPO = "([^"]*)";', script)
    check(bool(repo) and (repo.group(1) == "" or re.fullmatch(r"[A-Za-z0-9-]+/[A-Za-z0-9._-]+", repo.group(1))), "GitHub-Repo für Feedback leer oder gültig")
    check(not re.search(r"\bfetch\s*\(|XMLHttpRequest|sendBeacon", script), "App sendet selbst nichts übers Netz (kein fetch/XHR/Beacon)")
    check("navigator.share" in script, "Feedback über das Teilen-Menü (iPad)")
    check("apple-mobile-web-app-capable" in html, "iPad: Home-Bildschirm-Unterstützung")
    check("@media (pointer: coarse)" in html, "iPad: Touch-Anpassungen (16-px-Eingaben, 44-px-Tippflächen)")
    ids = set(re.findall(r'\{\s*id:\s*"([^"]+)",\s*title:', script))
    bad_ids = [i for i in ids if not re.fullmatch(r"[A-Za-z0-9_-]{11}", i)]
    check(ids and not bad_ids, f"{len(ids)} Video-IDs sauber" + (f" – fehlerhaft: {bad_ids}" if bad_ids else ""))
    check('target="_blank" rel="noopener noreferrer"' in script, "Video-Link öffnet neuen Tab mit noopener")
    check("youtube-nocookie.com/embed/" in script, "Videos werden in der App eingebettet")

    # --- JavaScript-Syntax und Lerndaten (mit Node) ---
    node = shutil.which("node")
    if not node:
        check(True, "Node nicht gefunden – Syntax- und Datenprüfung übersprungen")
    else:
        with tempfile.TemporaryDirectory() as tmp:
            js = Path(tmp) / "app.js"
            js.write_text(script, encoding="utf-8")
            r = subprocess.run([node, "--check", str(js)], capture_output=True, text=True, encoding="utf-8", errors="replace")
            check(r.returncode == 0, "JavaScript-Syntax fehlerfrei" + (f": {r.stderr.strip()[:300]}" if r.returncode else ""))

            data_js = "".join((ROOT / "src" / n).read_text(encoding="utf-8") for n in ("2_data_original.js", "3_data_chemie.js", "3c_data_mathe.js"))
            harness = Path(tmp) / "data.cjs"
            harness.write_text(data_js + "\nmodule.exports = { erdkundeLevels, deutschLevels, chemieLevels, matheLevels, deutschExercises, chemieExercises, matheExercises, puzzleData, chemiePuzzle, mathePuzzle, cheatsheetData, chemieCheatsheet, matheCheatsheet };\n"
                               "if (require.main === module) process.stdout.write(JSON.stringify(module.exports));\n", encoding="utf-8")
            r = subprocess.run([node, str(harness)], capture_output=True, text=True, encoding="utf-8", errors="replace")
            if r.returncode != 0:
                check(False, f"Lerndaten lesbar: {r.stderr.strip()[:300]}")
            else:
                d = json.loads(r.stdout)
                for key, min_q in (("erdkundeLevels", 10), ("deutschLevels", 10), ("chemieLevels", 10), ("matheLevels", 10)):
                    problems = []
                    for lv in d[key]:
                        qs = lv.get("questions", [])
                        if len(qs) < min_q:
                            problems.append(f"Level {lv.get('id')}: nur {len(qs)} Fragen")
                        for i, q in enumerate(qs):
                            if not (isinstance(q.get("correct"), int) and 0 <= q["correct"] < len(q.get("options", []))):
                                problems.append(f"Level {lv.get('id')} Frage {i + 1}: richtige Antwort fehlt")
                            if not str(q.get("exp", "")).strip():
                                problems.append(f"Level {lv.get('id')} Frage {i + 1}: Erklärung fehlt")
                        for f in ("title", "simple", "text", "example"):
                            if not str(lv.get(f, "")).strip():
                                problems.append(f"Level {lv.get('id')}: Feld {f} leer")
                    check(not problems, f"{key}: {len(d[key])} Level vollständig" + (f" – {problems[:5]}" if problems else ""))
                levels_ok = {"Grundlagen", "Anwenden", "Transfer", "Klausur"}
                for key in ("deutschExercises", "chemieExercises", "matheExercises"):
                    ex = d[key]
                    ids_ok = [e["id"] for e in ex] == list(range(1, len(ex) + 1))
                    sol_ok = all(e.get("sol") or e.get("steps") for e in ex)
                    check(ids_ok and sol_ok, f"{key}: {len(ex)} Übungen lückenlos mit Musterlösung")
                for name, pre in (("Chemie", "chemie"), ("Mathe", "mathe")):
                    ex = d[pre + "Exercises"]
                    check(15 <= len(ex) <= 20 and all(e.get("level") in levels_ok for e in ex), f"{name}: 15–20 Übungen mit Schwierigkeitsgrad")
                    check(all(p["term"] and p["exp"] for p in d[pre + "Puzzle"]), f"{name}-Puzzle: {len(d[pre + 'Puzzle'])} Paare")
                    check(len(d[pre + "Cheatsheet"]) >= 5, f"{name}-Spickzettel: {len(d[pre + 'Cheatsheet'])} Karten")

    width = max(len(t) for _, t in results)
    for ok, text in results:
        print(("GRÜN " if ok else "ROT  ") + text)
    failed = sum(1 for ok, _ in results if not ok)
    print("-" * min(width, 80))
    print(f"{len(results) - failed} von {len(results)} Prüfungen grün" + (" – alles in Ordnung." if not failed else f" – {failed} rot."))
    return 0 if not failed else 1


if __name__ == "__main__":
    sys.exit(main())
