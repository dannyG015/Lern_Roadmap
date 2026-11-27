"""Baut EduMaster: setzt die Quellteile aus src/ zu einer einzigen index.html zusammen.

    python tools/build.py

Einstellungen stehen in edumaster.config.json:
  feedback_github_repo  optional "besitzer/repo" – dann zeigt der Feedback-Dialog zusätzlich „Als GitHub-Issue“
                        (Formular .github/ISSUE_TEMPLATE/feedback.yml). Leer = nur „Per Nachricht senden“.
  version               Versionsangabe, die im Feedback mitgeschickt wird (leer = heutiges Datum)

In index.html landen nie Schlüssel oder Passwörter – die App braucht keine.
"""
from __future__ import annotations

import datetime as dt
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ORDER = [
    "1_shell_top.html",
    "2_data_original.js",
    "3_data_chemie.js",
    "3b_chemie_labor.js",
    "4_labor_original.js",
    "5_app.js",
    "5b_feedback.js",
    "6_shell_bottom.html",
]
REPO_RE = re.compile(r"^[A-Za-z0-9-]{1,39}/[A-Za-z0-9._-]{1,100}$")


class BuildError(RuntimeError):
    pass


def load_config(root: Path = ROOT) -> dict:
    p = root / "edumaster.config.json"
    cfg = json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}
    repo = str(cfg.get("feedback_github_repo") or "").strip()
    if repo and not REPO_RE.match(repo):
        raise BuildError(f"feedback_github_repo muss die Form \"besitzer/repo\" haben: {repo!r}")
    version = str(cfg.get("version") or "").strip() or dt.date.today().isoformat()
    if not re.match(r"^[A-Za-z0-9._ -]{1,40}$", version):
        raise BuildError(f"version enthält unerlaubte Zeichen: {version!r}")
    return {"feedback_github_repo": repo, "version": version}


def render(root: Path = ROOT) -> str:
    """Setzt index.html im Speicher zusammen, ohne etwas zu schreiben."""
    cfg = load_config(root)
    parts = []
    for name in ORDER:
        f = root / "src" / name
        if not f.exists():
            raise BuildError(f"Quellteil fehlt: src/{name}")
        parts.append(f.read_text(encoding="utf-8"))
    if not parts[0].rstrip().endswith("<script>"):
        raise BuildError("src/1_shell_top.html muss mit einem öffnenden <script> enden.")
    snippet = (
        "\n        // Vom Build eingesetzt (edumaster.config.json) – hier stehen nie Schlüssel.\n"
        f"        const FEEDBACK_GITHUB_REPO = {json.dumps(cfg['feedback_github_repo'])};\n"
        f"        const APP_VERSION = {json.dumps(cfg['version'])};\n"
    )
    return (parts[0] + snippet + "".join(parts[1:])).replace("\r\n", "\n")


def build(root: Path = ROOT, out: Path | None = None) -> Path:
    """Baut und schreibt index.html (nur wenn sich etwas geändert hat)."""
    html = render(root)
    target = out or (root / "index.html")
    if not target.exists() or target.read_bytes() != html.encode("utf-8"):
        target.write_bytes(html.encode("utf-8"))
    return target


if __name__ == "__main__":
    try:
        p = build()
    except BuildError as e:
        print(f"FEHLER: {e}", file=sys.stderr)
        sys.exit(1)
    print(f"gebaut: {p} ({p.stat().st_size // 1024} KB)")
