
        // ==========================================
        // FEEDBACK → TICKETS IN DER WERKBANK (ohne eigenen Server)
        // Zwei Wege, beide ohne Zugangsdaten in der App:
        //  1. „Per Nachricht senden“: Teilen-Menü des iPads (iMessage, WhatsApp …). Die Nachricht enthält einen
        //     Feedback-Code (EMFB1.…), den die Werkbank mit edumaster-feedback.bat als Ticket übernimmt.
        //  2. Optional „Als GitHub-Issue“: öffnet das Feedback-Formular im eigenen GitHub-Repo in einem neuen Tab
        //     (nur wenn FEEDBACK_GITHUB_REPO beim Bauen gesetzt ist). Die Werkbank holt diese Issues ab.
        // Die App schickt selbst nichts übers Netz (connect-src 'self'), Eingaben werden nie als HTML eingesetzt.
        // ==========================================
        const FB_MAX = 1000;
        let fbKind = { kind: 'bug', label: 'Fehler' };
        const FB_KIND_TEXT = { Fehler: 'Etwas funktioniert nicht', Inhalt: 'Inhalt stimmt nicht', Wunsch: 'Idee / Wunsch', Frage: 'Frage' };

        function feedbackContext() {
            const ctx = { version: APP_VERSION, viewport: `${window.innerWidth}x${window.innerHeight}` };
            if (currentSubject) {
                const s = SUBJECTS[currentSubject];
                ctx.subject = s.name;
                const tab = s.tabs.find(t => t[0] === activeTab);
                if (tab) ctx.tab = tab[2];
            }
            if (activeLevel && !$('level-modal').classList.contains('hidden')) ctx.level = `${activeLevel.badge}: ${activeLevel.title}`;
            return ctx;
        }

        function feedbackContextLabel(ctx) {
            return [ctx.subject, ctx.tab, ctx.level].filter(Boolean).join(' · ') || 'Startseite';
        }

        let fbOpenContext = null;

        function openFeedback() {
            fbOpenContext = feedbackContext();
            $('fb-form').classList.remove('hidden');
            $('fb-done').classList.add('hidden');
            $('fb-done').innerHTML = '';
            $('fb-msg').innerHTML = '';
            $('fb-text').value = '';
            $('fb-website').value = '';
            $('fb-context').checked = true;
            $('fb-context-text').textContent = feedbackContextLabel(fbOpenContext);
            const gh = !!FEEDBACK_GITHUB_REPO;
            $('fb-github').classList.toggle('hidden', !gh);
            $('fb-share').className = 'btn flex-1 ' + (gh ? 'btn-ghost' : 'btn-primary');
            $('fb-hint').textContent = gh
                ? '„Feedback senden“ öffnet das fertig ausgefüllte Formular auf GitHub in einem neuen Tab – dort nur noch auf „Submit new issue“ tippen. Beim ersten Mal einmal bei GitHub anmelden. Das Feedback ist öffentlich sichtbar, also bitte keine persönlichen Daten. Ohne GitHub-Konto: „Per Nachricht senden“.'
                : '„Per Nachricht senden“ öffnet das Teilen-Menü (z. B. iMessage oder WhatsApp). Die Nachricht enthält einen Code, den die Werkbank direkt als Ticket übernimmt.';
            updateFeedbackCount();
            $('feedback-modal').classList.remove('hidden');
            document.body.classList.add('modal-open');
        }

        function closeFeedback() {
            $('feedback-modal').classList.add('hidden');
            if ($('level-modal').classList.contains('hidden') && $('code-modal').classList.contains('hidden')) document.body.classList.remove('modal-open');
        }

        function pickFeedbackKind(btn) {
            document.querySelectorAll('#fb-kinds .fb-kind').forEach(b => b.classList.toggle('active', b === btn));
            fbKind = { kind: btn.dataset.kind, label: btn.dataset.label };
        }

        function updateFeedbackCount() {
            $('fb-count').textContent = `${$('fb-text').value.length} / ${FB_MAX}`;
        }

        function feedbackMessage(text) {
            const box = document.createElement('div');
            box.className = 'feedback bad !mt-0';
            box.textContent = text;
            $('fb-msg').innerHTML = '';
            $('fb-msg').appendChild(box);
        }

        // Liest das Formular. Gibt null zurück (mit Hinweis), wenn etwas fehlt.
        function readFeedback() {
            const text = $('fb-text').value.trim().slice(0, FB_MAX);
            if ($('fb-website').value) return null; // Bot-Falle
            if (text.length < 5) { feedbackMessage('Bitte schreib etwas mehr (mindestens 5 Zeichen).'); return null; }
            const ctx = $('fb-context').checked ? (fbOpenContext || feedbackContext()) : { version: APP_VERSION };
            return { kind: fbKind.kind, category: fbKind.label, text, context: ctx };
        }

        // Feedback-Code: EMFB1.<base64url(JSON)> – die Werkbank liest ihn ein.
        function feedbackCode(p) {
            const json = JSON.stringify({ v: 1, k: p.kind, c: p.category, t: p.text, x: p.context, ts: new Date().toISOString() });
            const bytes = new TextEncoder().encode(json);
            let bin = '';
            bytes.forEach(b => { bin += String.fromCharCode(b); });
            return 'EMFB1.' + btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        }

        function feedbackPlainText(p) {
            const where = feedbackContextLabel(p.context);
            return `EduMaster-Feedback – ${FB_KIND_TEXT[p.category] || p.category}\n\n${p.text}\n\nOrt in der App: ${where}\n\nCode für die Werkbank:\n${feedbackCode(p)}`;
        }

        function shareFeedback() {
            const p = readFeedback();
            if (!p) return;
            const text = feedbackPlainText(p);
            if (navigator.share) {
                navigator.share({ title: 'EduMaster-Feedback', text })
                    .then(() => showFeedbackDone('Danke! Dein Feedback ist unterwegs.'))
                    .catch(err => { if (!err || err.name !== 'AbortError') copyFeedbackText(text); });
            } else {
                copyFeedbackText(text);
            }
        }

        function copyFeedback() {
            const p = readFeedback();
            if (p) copyFeedbackText(feedbackPlainText(p));
        }

        function copyFeedbackText(text) {
            const done = () => showFeedbackDone('Kopiert! Füge den Text jetzt in eine Nachricht ein und schicke ihn ab.');
            if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done).catch(() => showFeedbackText(text));
            else showFeedbackText(text);
        }

        // Öffnet das Feedback-Formular im GitHub-Repo (neuer Tab) – vorausgefüllt, inklusive Code.
        function prepareFeedbackIssue(a) {
            const p = readFeedback();
            if (!p || !/^[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/.test(FEEDBACK_GITHUB_REPO)) return false;
            const first = p.text.split('\n')[0].slice(0, 70);
            const q = new URLSearchParams({
                template: 'feedback.yml',
                title: `[Feedback] ${first}`,
                art: FB_KIND_TEXT[p.category] || p.category,
                beschreibung: p.text,
                ort: feedbackContextLabel(p.context),
                code: feedbackCode(p)
            });
            a.href = `https://github.com/${FEEDBACK_GITHUB_REPO}/issues/new?${q.toString()}`;
            setTimeout(() => showFeedbackDone('Das Formular auf GitHub ist in einem neuen Tab geöffnet. Dort noch auf „Submit new issue“ tippen – EduMaster bleibt hier offen.'), 300);
            return true;
        }

        function showFeedbackDone(message) {
            $('fb-form').classList.add('hidden');
            const done = $('fb-done');
            done.classList.remove('hidden');
            done.innerHTML = `
                <div class="text-center space-y-3 py-4">
                    <div class="text-5xl">💌</div>
                    <h4 class="text-xl font-extrabold">Danke für dein Feedback!</h4>
                    <p class="text-sm text-slate-600" id="fb-done-text"></p>
                    <button type="button" class="btn btn-primary" onclick="closeFeedback()">Schließen</button>
                </div>`;
            $('fb-done-text').textContent = message;
        }

        // Rückfall, wenn weder Teilen noch Kopieren möglich ist: Text zum Markieren anzeigen.
        function showFeedbackText(text) {
            $('fb-form').classList.add('hidden');
            const done = $('fb-done');
            done.classList.remove('hidden');
            done.innerHTML = `
                <div class="space-y-3">
                    <p class="text-sm text-slate-700">Markiere den Text (lange tippen → „Alles auswählen“ → „Kopieren“) und schicke ihn per Nachricht.</p>
                    <textarea id="fb-plain" readonly rows="8" class="notes-area !min-h-0 text-xs" onclick="this.select()"></textarea>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="openFeedback()"><i class="fa-solid fa-arrow-left"></i> Zurück</button>
                </div>`;
            $('fb-plain').value = text;
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !$('feedback-modal').classList.contains('hidden')) closeFeedback();
        });
