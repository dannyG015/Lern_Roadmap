@echo off
rem EduMaster veroeffentlichen: pruefen, committen, zu GitHub (Pages) hochladen. Doppelklick.
chcp 65001 >nul
setlocal
cd /d "%~dp0"
set "PY=python"
where py >/dev/null 2>/dev/null && set "PY=py -3"
echo Pruefe EduMaster ...
%PY% tools\check_app.py
if errorlevel 1 (
  echo.
  echo Mindestens eine Pruefung ist rot - es wird NICHTS hochgeladen.
  pause
  exit /b 1
)
git remote get-url origin >/dev/null 2>nul
if errorlevel 1 (
  echo.
  echo Noch kein GitHub-Repo verbunden. Einmalig im Ordner ausfuehren:
  echo   git remote add origin https://github.com/BESITZER/REPO.git
  echo Anleitung: README.md, Abschnitt "Veroeffentlichen".
  pause
  exit /b 1
)
git add -A
git diff --cached --quiet && (
  echo Keine Aenderungen - online ist schon der aktuelle Stand.
  pause
  exit /b 0
)
for /f %%d in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set "STAMP=%%d"
git commit -m "EduMaster-Update %STAMP%" || goto :fail
git push -u origin HEAD || goto :fail
echo.
echo Hochgeladen. In 1-2 Minuten ist die neue Version auf GitHub Pages online.
pause
exit /b 0
:fail
echo.
echo Hochladen fehlgeschlagen - bitte die Meldung oben pruefen (Anmeldung bei GitHub?).
pause
exit /b 1
