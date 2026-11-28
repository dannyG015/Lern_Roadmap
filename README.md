# EduMaster

Lern-App für die 8. Klasse (Erdkunde · Deutsch · Chemie · Mathe) – gelernt wird **auf dem iPad**, online über **GitHub Pages**.
Gepflegt wird sie mit der **Werkbank** (`D:\Apps\Werkbank`, App-Kennung `edumaster`).

## Aufbau

```
EduMaster\
├── index.html              die fertige App (wird gebaut – nicht von Hand bearbeiten)
├── src\                    Quelle in fester Reihenfolge (siehe tools/build.py)
│   ├── 1_shell_top.html    Kopf, Design, Sicherheitsregeln (CSP), Oberfläche
│   ├── 2_data_original.js  Erdkunde & Deutsch (Inhalte nicht umschreiben)
│   ├── 3_data_chemie.js    Chemie: 7 Level, 20 Übungen, Puzzle, Spickzettel (Buch S. 52–65)
│   ├── 3b_chemie_labor.js  Chemie-Labor (Teilchenbilder, Simulationen, Piktogramme …)
│   ├── 3c_data_mathe.js    Mathe: 7 Level, 20 Übungen, Puzzle, Spickzettel (Buch S. 18–19, 26–33 + Checkliste)
│   ├── 3d_mathe_labor.js   Mathe-Labor (Graph-Detektiv, Knack die Box, Gleichungs-/Term-Trainer, Dreiecke, Trapez)
│   ├── 3e_data_mathe_klausuren.js  Mathe: 3 Probeklausuren (je 45 min, 40 Punkte, mit Lösungswegen)
│   ├── 4_labor_original.js Geo-Labor, DIN-5008-Trainer, Unterlagen-Analyse
│   ├── 5_app.js            Navigation, Roadmap, Quiz, Videos, Fortschritts-Code
│   ├── 5b_feedback.js      Feedback-Dialog
│   ├── 5c_klausuren.js     Probeklausuren: Timer mit Countdown, „Stift weg!“, Auswertung mit Note
│   └── 6_shell_bottom.html
├── tools\build.py          baut index.html aus src\
├── tools\check_app.py      Prüfung vor jeder Veröffentlichung (auch Test der Werkbank)
├── edumaster.config.json   Einstellungen (GitHub-Repo für Feedback-Issues, Version)
├── .github\ISSUE_TEMPLATE\feedback.yml   Feedback-Formular im GitHub-Repo
└── veroeffentlichen.bat    prüfen, committen, zu GitHub hochladen
```

## Bauen und prüfen

```
python tools\build.py        # nur bauen
python tools\check_app.py    # bauen + 37 Prüfungen (Daten, Syntax, Sicherheit, iPad)
```

## Veröffentlichen (GitHub Pages)

Repo: **[dannyG015/Lern_Roadmap](https://github.com/dannyG015/Lern_Roadmap)** – online unter
**https://dannyg015.github.io/Lern_Roadmap/**. Dieser Ordner ist bereits damit verbunden (`origin`, Branch `main`).

Bei jedem Update: **`veroeffentlichen.bat`** doppelklicken. Das Skript prüft die App, und nur wenn alles grün ist,
committet es und lädt hoch (`git push`). Nach 1–2 Minuten ist die neue Version online.

## Probeklausuren (ab dem Mathe-Kapitel)

Jedes neue Kapitel bekommt am Ende der Roadmap **2–3 Probeklausuren** (Reiter „Probeklausuren“, in `SUBJECTS[fach].exams`).
Erdkunde, Deutsch und Chemie bleiben bewusst ohne.

- Antworten iPad-tauglich: **Zahlen eintippen** (`num`), Terme/Gleichungen/Begriffe **auswählen** (`choice`, `select`).
- **Abgeben jederzeit** – auch mit leeren oder falschen Antworten (eigener Dialog „Klausur jetzt abgeben?“).
- **Prüfen** einer Aufgabe, sobald alles ausgefüllt ist. Der **Lösungsweg** lässt sich jederzeit aufklappen; vor dem Prüfen wird
  das als „👀 Lösung angesehen“ vermerkt, und so ein Durchgang zählt nicht als Bestwert.
- **💡 Tipps** neben schwierigen Teilaufgaben (`hint` in den Daten), die Anzahl genutzter Tipps steht im Ergebnis.
- **Timer:** Countdown-Animation (3 – 2 – 1 – Los!), **Pause/Weiter**, **Neu starten** (Antworten bleiben), Anzeige unten rechts –
  auch beim Fachwechsel. Bei Zeitablauf oder beim Abgeben kommt „Stift weg!“, danach Punkte, Note (ab 92 % sehr gut) und
  alle Lösungswege.
- Gespeichert wird nur der Bestwert im Browser (`edumaster_exam_best`).

## Updates mit der Werkbank

1. Werkbank starten (`D:\Apps\Werkbank\start-werkbank-windows.bat`), links die App **EduMaster** wählen.
2. Ticket öffnen → Auftrag / Prompt-Paket → Änderung im Staging (`staging/edumaster`).
3. **Tests** starten. War `index.html` noch nicht neu gebaut, ist der erste Lauf rot („bitte noch einmal starten“) –
   der zweite Lauf ist dann grün.
4. **Deployment** – die Werkbank kopiert den geprüften Stand hierher.
5. `veroeffentlichen.bat` – damit geht das Update online aufs iPad.

## Feedback → Tickets in der Werkbank

Die App hat oben in der Kopfzeile einen **Feedback-Knopf**. Die App selbst schickt nichts übers Netz und enthält keine
Zugangsdaten – es gibt zwei Wege:

| Weg | So geht's auf dem iPad | So kommt es in die Werkbank |
|---|---|---|
| **Feedback senden** (Hauptweg) | Knopf „Feedback“ oben in der Kopfzeile → öffnet das fertig ausgefüllte Formular im Repo in einem neuen Tab → „Submit new issue“ tippen. Braucht ein in Safari angemeldetes GitHub-Konto; das Issue ist **öffentlich sichtbar**. | **Automatisch** über den Ticket-Eingang der Werkbank: beim Start, alle 5 Minuten und beim Öffnen der Oberfläche; sofort mit „Jetzt abholen“ im Reiter Tickets. Jedes Issue wird genau einmal übernommen. |
| **Per Nachricht** (ohne GitHub-Konto) | „Per Nachricht senden“ öffnet das Teilen-Menü (iMessage, WhatsApp …). Die Nachricht enthält einen Code `EMFB1.…`. | In der Werkbank: Reiter Tickets → „Feedback-Code aus einer Nachricht einfügen“ (oder `edumaster-feedback.bat`) → je Code ein Ticket |

Eingerichtet ist: `"feedback_github_repo": "dannyG015/Lern_Roadmap"` in `edumaster.config.json` und in der Werkbank
`apps.json → edumaster → inbox` (`github_issues`, Repo `dannyG015/Lern_Roadmap`, Code-Präfix `EMFB1`). Das Formular liegt
unter `.github/ISSUE_TEMPLATE/feedback.yml` im Repo.

Optional: Im Repo ein Label **`feedback`** anlegen (*Issues → Labels → New label*) – dann bekommen die Issues es automatisch.
Die Werkbank erkennt Feedback aber auch ohne Label (Titel „[Feedback] …“ bzw. Code im Text).

Auf dem iPad einmalig: In Safari auf github.com mit einem GitHub-Konto anmelden (Mindestalter bei GitHub: 13 Jahre).
Erledigte Issues schließt du auf GitHub – die Werkbank liest dort nur, sie ändert nichts.

## iPad

- **Videos** laufen direkt in der App (datensparsamer Player von youtube-nocookie.com). Alternativ „In neuem Tab“ –
  EduMaster bleibt im eigenen Tab offen. Als lokale Datei geöffnet spielt YouTube oft nicht ab, online schon.
- **Als App auf den Home-Bildschirm:** in Safari *Teilen → Zum Home-Bildschirm*. EduMaster startet dann wie eine App.
- Eingabefelder haben 16 px Schrift (kein ungewolltes Hineinzoomen), Knöpfe sind mindestens 44 px groß.
- **Neues Fach anhängen:** in `SUBJECT_ORDER` (src/5_app.js) immer nur hinten anfügen – dann bleiben alte
  Fortschritts-Codes gültig (fehlende Fächer werden beim Wiederherstellen nicht angefasst).
- **Fortschritt sichern:** Safari kann gespeicherte Daten von Websites löschen, die länger nicht geöffnet wurden.
  Darum ab und zu über den 🔑-Knopf einen **Fortschritts-Code** erzeugen und aufheben.

## Sicherheit (online)

- Content-Security-Policy: Skripte nur von den festen CDNs, Videos nur von YouTube, **keine Verbindungen** zu fremden
  Servern (`connect-src 'self'`), keine Formulare, keine Plugins.
- CDN-Dateien mit fester Version und Prüfsumme (Subresource Integrity), wo möglich.
- Eingaben (Notizen, Codes, Feedback) werden nie als HTML eingesetzt; gespeichert wird nur im Browser des iPads.
- `tools/check_app.py` bricht ab, wenn Schlüssel/Tokens, `fetch`, `eval` oder `window.open` im Code auftauchen.
