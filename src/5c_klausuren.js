
        // ==========================================
        // PROBEKLAUSUREN (ab dem Mathe-Kapitel; ein Fach bekommt sie über SUBJECTS[fach].exams)
        // Antworten: Zahl eintippen ("num"), Antwort antippen ("choice") oder Lücke auswählen ("select").
        // Lösungsweg erst nach dem Antworten (Prüfen) bzw. nach dem Abgeben. Timer mit Countdown und „Stift weg!“.
        // Eingaben werden nie als HTML eingesetzt; gespeichert wird nur der Bestwert im Browser.
        // ==========================================
        const EXAM_STORE = 'edumaster_exam_best';
        let examState = null;     // aktuell geöffnete Klausur
        let examTimer = null;     // { examKey, end, total, handle, warned5, warned1 }

        function examList() { return (currentSubject && SUBJECTS[currentSubject].exams) || []; }
        function examKey(subj, id) { return `${subj}:${id}`; }
        function examBest() { return readJSON(EXAM_STORE, {}) || {}; }
        function examTotal(ex) { return ex.tasks.reduce((s, t) => s + t.points, 0); }

        // Notenschlüssel (übliche Orientierung, Prozent der Punkte)
        function examGrade(pct) {
            if (pct >= 92) return { note: '1', text: 'sehr gut', cls: 'text-emerald-600' };
            if (pct >= 81) return { note: '2', text: 'gut', cls: 'text-emerald-600' };
            if (pct >= 67) return { note: '3', text: 'befriedigend', cls: 'text-blue-600' };
            if (pct >= 50) return { note: '4', text: 'ausreichend', cls: 'text-amber-600' };
            if (pct >= 30) return { note: '5', text: 'mangelhaft', cls: 'text-rose-600' };
            return { note: '6', text: 'ungenügend', cls: 'text-rose-700' };
        }

        // ---------- Übersicht ----------
        function renderExams() {
            const box = $('exams-content');
            if (!box) return;
            if (examState && examState.subj === currentSubject) { renderExam(); return; }
            const list = examList();
            const best = examBest();
            box.innerHTML = `
                <div class="glass-card p-6 rounded-3xl space-y-6">
                    <div>
                        <span class="chip">Finale der Roadmap</span>
                        <h2 class="text-2xl font-extrabold text-slate-800 mt-3 flex items-center gap-2"><i class="fa-solid fa-stopwatch accent-text"></i> Probeklausuren</h2>
                        <p class="text-slate-600 text-sm mt-1">Wie eine echte Klassenarbeit – und bewusst nicht ganz leicht. Wer eine Probe schafft, ist auf dem Weg zur Eins. Starte den Timer oder übe ohne Zeit. Zahlen tippst du ein, Terme und Gleichungen wählst du aus.</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        ${list.map((ex, i) => {
                            const b = best[examKey(currentSubject, ex.id)];
                            const total = examTotal(ex);
                            return `
                                <article class="ex-card flex flex-col gap-3">
                                    <div class="flex items-center justify-between gap-2">
                                        <span class="chip">Probe ${i + 1}</span>
                                        <span class="text-xs font-bold text-slate-500"><i class="fa-regular fa-clock"></i> ${ex.minutes} min · ${total} P.</span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-extrabold text-slate-900">${ex.title}</h3>
                                        <p class="text-xs font-bold accent-text mt-0.5">${ex.subtitle}</p>
                                    </div>
                                    <p class="text-sm text-slate-600 flex-1">${ex.tasks.length} Aufgaben: ${ex.tasks.map(t => t.topic.replace(/ \(LU \d+\)/, '')).filter((v, k, a) => a.indexOf(v) === k).join(' · ')}</p>
                                    <div class="text-xs font-bold ${b ? 'text-emerald-700' : 'text-slate-400'}">${b ? `<i class="fa-solid fa-trophy text-amber-400"></i> Bestwert: ${b.points} / ${b.total} P. (Note ${examGrade(b.points / b.total * 100).note})` : 'Noch nicht geschrieben'}</div>
                                    <button type="button" class="btn btn-primary w-full" onclick="openExam('${ex.id}')">Klausur öffnen <i class="fa-solid fa-arrow-right"></i></button>
                                </article>`;
                        }).join('')}
                    </div>
                    <p class="text-[11px] text-slate-500">Notenschlüssel zur Orientierung: ab 92 % sehr gut · ab 81 % gut · ab 67 % befriedigend · ab 50 % ausreichend · ab 30 % mangelhaft. Deine Lehrkraft kann anders bewerten.</p>
                </div>
            `;
        }

        function openExam(id) {
            const ex = examList().find(e => e.id === id);
            if (!ex) return;
            if (examTimer && examTimer.examKey !== examKey(currentSubject, id)) {
                showToast('⏱ Es läuft noch eine andere Probeklausur. Gib sie zuerst ab.');
                return;
            }
            if (!examState || examState.key !== examKey(currentSubject, id)) newExamState(ex);
            renderExam();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function newExamState(ex) {
            examState = {
                subj: currentSubject, id: ex.id, key: examKey(currentSubject, ex.id), ex,
                answers: {}, checked: {}, submitted: false, result: null, openSol: {},
                orders: ex.tasks.map(t => t.parts.map(p => (p.options && !p.keepOrder) ? shuffle(p.options.map((_, i) => i)) : (p.options || []).map((_, i) => i)))
            };
        }

        function closeExam() {
            if (examTimer) { showToast('⏱ Der Timer läuft noch – gib die Klausur zuerst ab.'); return; }
            examState = null;
            renderExams();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function restartExam() {
            if (examTimer) return;
            if (!window.confirm('Klausur neu beginnen? Deine Antworten werden gelöscht.')) return;
            newExamState(examState.ex);
            renderExam();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ---------- Bewertung ----------
        function parseNum(raw) {
            let s = String(raw == null ? '' : raw).trim().replace(/\s+/g, '').replace(/[−–]/g, '-').replace(',', '.');
            const m = s.match(/^([+-]?\d*\.?\d+)(?:\/(\d*\.?\d+))?/);
            if (!m) return NaN;
            const v = m[2] !== undefined ? +m[1] / +m[2] : +m[1];
            return isFinite(v) ? v : NaN;
        }
        function partAnswered(t, p) {
            const v = examState.answers[`${t}-${p}`];
            return v !== undefined && String(v).trim() !== '';
        }
        function partCorrect(t, p) {
            const part = examState.ex.tasks[t].parts[p];
            const v = examState.answers[`${t}-${p}`];
            if (v === undefined || String(v).trim() === '') return false;
            if (part.type === 'num') return Math.abs(parseNum(v) - part.answer) <= (part.tol != null ? part.tol : 0.005);
            return +v === part.correct;
        }
        function taskScore(t) {
            return examState.ex.tasks[t].parts.reduce((s, p, i) => s + (partCorrect(t, i) ? p.points : 0), 0);
        }
        function taskComplete(t) { return examState.ex.tasks[t].parts.every((_, i) => partAnswered(t, i)); }
        function isLocked(t) { return examState.submitted || !!examState.checked[t]; }

        // ---------- Ansicht einer Klausur ----------
        function renderExam() {
            const st = examState, ex = st.ex;
            const total = examTotal(ex);
            const running = !!(examTimer && examTimer.examKey === st.key);
            const answeredParts = ex.tasks.reduce((s, t, ti) => s + t.parts.filter((_, pi) => partAnswered(ti, pi)).length, 0);
            const allParts = ex.tasks.reduce((s, t) => s + t.parts.length, 0);
            $('exams-content').innerHTML = `
                <div class="space-y-5">
                    <div class="glass-card p-6 rounded-3xl space-y-4">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <button type="button" class="btn btn-ghost btn-sm" onclick="closeExam()" ${running ? 'disabled' : ''}><i class="fa-solid fa-arrow-left"></i> Alle Probeklausuren</button>
                            <span class="chip">${ex.minutes} Minuten · ${total} Punkte</span>
                        </div>
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-800">${ex.title}</h2>
                            <p class="text-sm font-bold accent-text">${ex.subtitle}</p>
                            <p class="text-sm text-slate-600 mt-2">${ex.intro}</p>
                        </div>
                        ${st.submitted ? examResultHTML() : `
                        <div class="exam-start-row">
                            ${running ? `
                                <div class="flex items-center gap-3 flex-wrap">
                                    <span class="exam-live"><span class="dot"></span> Timer läuft</span>
                                    <span class="text-sm text-slate-600">${answeredParts} von ${allParts} Antworten eingetragen</span>
                                </div>
                                <button type="button" class="btn btn-primary" onclick="finishExam(false)"><i class="fa-solid fa-flag-checkered"></i> Abgeben</button>
                            ` : `
                                <button type="button" class="exam-start-btn" onclick="startExamTimer()">
                                    <span class="exam-start-icon"><i class="fa-solid fa-stopwatch"></i></span>
                                    <span class="text-left"><span class="block font-extrabold text-base">Timer starten</span><span class="block text-xs opacity-90">${ex.minutes}:00 Minuten wie in der echten Arbeit</span></span>
                                </button>
                                <span class="text-xs text-slate-500">…oder ohne Zeit üben: Jede Aufgabe kannst du prüfen, sobald alles ausgefüllt ist.</span>
                            `}
                        </div>`}
                    </div>
                    ${ex.tasks.map((_, ti) => `<div id="exam-task-${ti}">${examTaskHTML(ti)}</div>`).join('')}
                    <div class="glass-card p-5 rounded-3xl flex flex-wrap items-center justify-between gap-3">
                        ${st.submitted ? `
                            <span class="text-sm font-bold text-slate-600">Ergebnis: ${st.result.points} / ${total} Punkte</span>
                            <div class="flex flex-wrap gap-2">
                                <button type="button" class="btn btn-ghost" onclick="restartExam()"><i class="fa-solid fa-arrows-rotate"></i> Neu versuchen</button>
                                <button type="button" class="btn btn-primary" onclick="closeExam()">Zur Übersicht</button>
                            </div>` : `
                            <span class="text-sm text-slate-600">${answeredParts} von ${allParts} Antworten eingetragen</span>
                            <button type="button" class="btn btn-primary" onclick="finishExam(false)"><i class="fa-solid fa-flag-checkered"></i> Klausur abgeben</button>`}
                    </div>
                </div>
            `;
            examFillInputs();
        }

        function examResultHTML() {
            const r = examState.result, total = examTotal(examState.ex);
            const pct = Math.round(r.points / total * 100);
            const g = examGrade(r.points / total * 100);
            return `
                <div class="exam-result">
                    <div class="flex flex-wrap items-center gap-5">
                        <div class="exam-grade ${g.cls}">${g.note}</div>
                        <div class="flex-1 min-w-[12rem] space-y-2">
                            <div class="text-lg font-extrabold">${r.points} von ${total} Punkten · ${pct} % · ${g.text}</div>
                            <div class="bar"><span style="width:${pct}%"></span></div>
                            <div class="text-xs text-slate-500">${r.timeText ? `Bearbeitungszeit: ${r.timeText} · ` : ''}Öffne bei jeder Aufgabe den ausführlichen Lösungsweg.</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
                        ${examState.ex.tasks.map((t, ti) => `<div class="exam-mini ${taskScore(ti) === t.points ? 'ok' : taskScore(ti) === 0 ? 'bad' : ''}"><span>Aufgabe ${ti + 1}</span><strong>${taskScore(ti)} / ${t.points}</strong></div>`).join('')}
                    </div>
                </div>`;
        }

        function examTaskHTML(ti) {
            const st = examState, t = st.ex.tasks[ti];
            const locked = isLocked(ti);
            const running = !!(examTimer && examTimer.examKey === st.key);
            const score = locked ? taskScore(ti) : null;
            const complete = taskComplete(ti);
            return `
                <article class="ex-card space-y-4">
                    <div class="flex items-center justify-between gap-2 flex-wrap">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="chip">Aufgabe ${ti + 1}</span>
                            <span class="text-xs font-bold text-slate-500">${t.topic}</span>
                        </div>
                        <span class="exam-points ${locked ? (score === t.points ? 'ok' : score === 0 ? 'bad' : 'mid') : ''}">${locked ? `${score} / ${t.points} P.` : `${t.points} P.`}</span>
                    </div>
                    <h3 class="font-extrabold text-slate-900 text-base">${t.title}</h3>
                    <div class="text-sm text-slate-700 leading-relaxed">${t.prompt}</div>
                    ${t.fig ? examFigure(t.fig) : ''}
                    <div class="space-y-4">${t.parts.map((p, pi) => examPartHTML(ti, pi)).join('')}</div>
                    <div class="flex flex-wrap items-center gap-2 pt-1">
                        ${locked ? `
                            <button type="button" class="btn btn-soft btn-sm" onclick="toggleExamSolution(${ti})">${st.openSol[ti] ? '🔍 Lösungsweg ausblenden' : '🔍 Ausführlichen Lösungsweg anzeigen'}</button>
                        ` : running ? `
                            <span class="text-xs font-bold text-slate-500"><i class="fa-solid fa-lock"></i> Lösungen gibt es nach dem Abgeben.</span>
                        ` : `
                            <button type="button" class="btn btn-primary btn-sm" onclick="checkExamTask(${ti})" ${complete ? '' : 'disabled'}><i class="fa-solid fa-check-double"></i> Antworten prüfen</button>
                            <span class="text-xs text-slate-500">${complete ? 'Danach siehst du den ausführlichen Lösungsweg.' : 'Erst alle Teilaufgaben beantworten – dann kannst du prüfen.'}</span>
                        `}
                    </div>
                    ${locked && st.openSol[ti] ? `
                        <div class="solution">
                            <div class="font-extrabold mb-3">Ausführlicher Lösungsweg:</div>
                            <ol class="steps">${t.solution.map((s, i) => `<li class="step"><span class="step-n">${i + 1}</span><div class="flex-1">${s}</div></li>`).join('')}</ol>
                        </div>` : ''}
                </article>`;
        }

        function examPartHTML(ti, pi) {
            const st = examState, p = st.ex.tasks[ti].parts[pi];
            const key = `${ti}-${pi}`, val = st.answers[key];
            const locked = isLocked(ti);
            const ok = locked ? partCorrect(ti, pi) : null;
            const mark = locked ? `<span class="exam-mark ${ok ? 'ok' : 'bad'}"><i class="fa-solid ${ok ? 'fa-circle-check' : 'fa-circle-xmark'}"></i> ${ok ? `+${p.points}` : '0'} P.</span>` : `<span class="text-[11px] font-bold text-slate-400">${p.points} P.</span>`;
            let control = '';
            if (p.type === 'num') {
                control = `
                    <div class="flex flex-wrap items-center gap-2">
                        ${p.prefix ? `<span class="font-mono-letter font-bold">${p.prefix}</span>` : ''}
                        <input type="text" inputmode="${p.answer < 0 ? 'text' : 'decimal'}" autocomplete="off" spellcheck="false" aria-label="Antwort"
                               class="exam-input ${locked ? (ok ? 'is-ok' : 'is-bad') : ''}" ${locked ? 'disabled' : ''}
                               data-key="${key}" oninput="examInput(this)" placeholder="Zahl">
                        ${p.unit ? `<span class="text-sm text-slate-600">${p.unit}</span>` : ''}
                        ${locked && !ok ? `<span class="text-sm font-bold text-emerald-700">richtig: ${String(p.answer).replace('.', ',').replace('-', '−')}${p.unit ? ' ' + p.unit : ''}</span>` : ''}
                    </div>`;
            } else if (p.type === 'select') {
                const order = st.orders[ti][pi];
                control = `
                    <div class="flex flex-wrap items-center gap-2">
                        <select class="exam-select ${locked ? (ok ? 'is-ok' : 'is-bad') : ''}" ${locked ? 'disabled' : ''} data-key="${key}" onchange="examInput(this)" aria-label="Auswahl">
                            <option value="">– bitte wählen –</option>
                            ${order.map(oi => `<option value="${oi}" ${String(val) === String(oi) ? 'selected' : ''}>${p.options[oi]}</option>`).join('')}
                        </select>
                        ${locked && !ok ? `<span class="text-sm font-bold text-emerald-700">richtig: ${p.options[p.correct]}</span>` : ''}
                    </div>`;
            } else {
                const order = st.orders[ti][pi];
                const keys = 'ABCDEF';
                control = `<div class="grid sm:grid-cols-2 gap-2">${order.map((oi, pos) => {
                    let cls = String(val) === String(oi) ? 'picked' : '';
                    if (locked) cls = oi === p.correct ? 'correct' : (String(val) === String(oi) ? 'wrong' : 'dim');
                    return `<button type="button" class="opt ${cls}" ${locked ? 'disabled' : ''} onclick="examPick(${ti},${pi},${oi})"><span class="key">${keys[pos]}</span><span class="flex-1 text-left">${p.options[oi]}</span></button>`;
                }).join('')}</div>`;
            }
            return `
                <div class="exam-part">
                    <div class="flex items-start justify-between gap-3 mb-2">
                        <div class="text-sm font-bold text-slate-800">${p.label}</div>
                        ${mark}
                    </div>
                    ${control}
                </div>`;
        }

        // Werte in Zahlenfelder setzen (nie als HTML)
        function examFillInputs(root) {
            (root || $('exams-content')).querySelectorAll('input.exam-input').forEach(inp => {
                const v = examState.answers[inp.dataset.key];
                inp.value = v == null ? '' : v;
            });
        }

        function rerenderExamTask(ti) {
            const box = $('exam-task-' + ti);
            if (!box) return;
            box.innerHTML = examTaskHTML(ti);
            examFillInputs(box);
        }

        function examInput(el) {
            if (!examState) return;
            const ti = +el.dataset.key.split('-')[0];
            if (isLocked(ti)) return;
            examState.answers[el.dataset.key] = String(el.value).slice(0, 40);
            // nur Prüfen-Knopf und Zähler aktualisieren – das Feld behält den Fokus
            const box = $('exam-task-' + ti);
            const btn = box && box.querySelector('button[onclick^="checkExamTask"]');
            if (btn) {
                const complete = taskComplete(ti);
                btn.disabled = !complete;
                const hint = btn.nextElementSibling;
                if (hint) hint.textContent = complete ? 'Danach siehst du den ausführlichen Lösungsweg.' : 'Erst alle Teilaufgaben beantworten – dann kannst du prüfen.';
            }
        }

        function examPick(ti, pi, oi) {
            if (!examState || isLocked(ti)) return;
            examState.answers[`${ti}-${pi}`] = String(oi);
            rerenderExamTask(ti);
        }

        function checkExamTask(ti) {
            if (!examState || examTimer || !taskComplete(ti)) return;
            examState.checked[ti] = true;
            examState.openSol[ti] = true;
            rerenderExamTask(ti);
            const t = examState.ex.tasks[ti];
            if (taskScore(ti) === t.points && typeof confetti === 'function') confetti({ particleCount: 40, spread: 55, origin: { y: 0.7 }, zIndex: 9999 });
        }

        function toggleExamSolution(ti) {
            examState.openSol[ti] = !examState.openSol[ti];
            rerenderExamTask(ti);
        }

        // ---------- Abbildungen ----------
        function examFigure(fig) {
            if (fig.type === 'graph') return `<figure class="panel p-2">${examGraphSVG(fig, true)}</figure>`;
            if (fig.type === 'graphs') {
                return `<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">${fig.items.map(it => `<figure class="panel p-2"><div class="text-xs font-extrabold text-slate-600 mb-1">Graph ${it.label}</div>${examGraphSVG(it, false)}</figure>`).join('')}</div>`;
            }
            return '';
        }

        function examGraphSVG(g, withNumbers) {
            const w = withNumbers ? 560 : 160, h = withNumbers ? 300 : 120;
            const L = withNumbers ? 46 : 10, B = h - (withNumbers ? 34 : 10), R = w - (withNumbers ? 14 : 6), T = withNumbers ? 14 : 6;
            const sx = x => L + x / g.xmax * (R - L), sy = y => B - y / g.ymax * (B - T);
            let segs = g.segs || [];
            if (g.fn === 'inv40') { const pts = []; for (let x = 1; x <= 10; x += 0.25) pts.push([x, 40 / x]); segs = [pts]; }
            let grid = '', labels = '';
            if (withNumbers) {
                for (let x = 0; x <= g.xmax + 1e-9; x += g.xstep) { grid += `<line x1="${sx(x)}" y1="${T}" x2="${sx(x)}" y2="${B}" />`; labels += `<text x="${sx(x)}" y="${B + 17}" text-anchor="middle">${x}</text>`; }
                for (let y = 0; y <= g.ymax + 1e-9; y += g.ystep) { grid += `<line x1="${L}" y1="${sy(y)}" x2="${R}" y2="${sy(y)}" />`; labels += `<text x="${L - 7}" y="${sy(y) + 4}" text-anchor="end">${y}</text>`; }
            } else {
                for (let i = 1; i <= 5; i++) { const x = L + i * (R - L) / 5; grid += `<line x1="${x}" y1="${T}" x2="${x}" y2="${B}" />`; }
                for (let i = 1; i <= 4; i++) { const y = B - i * (B - T) / 4; grid += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" />`; }
            }
            const lines = segs.map(seg => `<polyline points="${seg.map(p => sx(p[0]).toFixed(1) + ',' + sy(p[1]).toFixed(1)).join(' ')}" />`).join('');
            return `<svg viewBox="0 0 ${w} ${h}" class="w-full h-auto block" role="img" aria-label="Graph" style="font-size:12px;font-family:inherit">
                <g stroke="#e2e8f0" stroke-width="1">${grid}</g>
                <g fill="#64748b">${labels}</g>
                <g stroke="#475569" stroke-width="1.5" fill="#475569"><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" /><line x1="${L}" y1="${B}" x2="${L}" y2="${T}" />
                <polygon points="${R},${B} ${R - 7},${B - 3.5} ${R - 7},${B + 3.5}" /><polygon points="${L},${T} ${L - 3.5},${T + 7} ${L + 3.5},${T + 7}" /></g>
                ${withNumbers ? `<text x="${R}" y="${h - 4}" text-anchor="end" fill="#334155" font-weight="700">${g.xLabel}</text><text x="${L + 6}" y="${T + 4}" fill="#334155" font-weight="700">${g.yLabel}</text>` : ''}
                <g fill="none" stroke="#e11d48" stroke-width="${withNumbers ? 3 : 2.4}" stroke-linecap="round" stroke-linejoin="round">${lines}</g>
            </svg>`;
        }

        // ---------- Timer ----------
        function fmtClock(ms) {
            const s = Math.max(0, Math.ceil(ms / 1000));
            return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
        }

        function startExamTimer() {
            if (!examState || examState.submitted || examTimer) return;
            const st = examState;
            // Countdown-Animation: Bereit? 3 – 2 – 1 – Los!
            const ov = examOverlay('<div class="exam-ov-box"><div class="exam-ring"></div><div class="exam-ready">Bereit?</div></div>');
            const steps = ['3', '2', '1'];
            steps.forEach((n, i) => setTimeout(() => {
                ov.innerHTML = `<div class="exam-ov-box"><div class="exam-ring" key="${n}"></div><div class="exam-count">${n}</div></div>`;
            }, 700 + i * 850));
            setTimeout(() => {
                ov.innerHTML = '<div class="exam-ov-box"><div class="exam-go">Los geht\'s! <span class="inline-block exam-pen-wiggle">✍️</span></div><div class="exam-ov-sub">Viel Erfolg!</div></div>';
                if (typeof confetti === 'function') confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 }, zIndex: 10000 });
            }, 700 + steps.length * 850);
            setTimeout(() => {
                ov.classList.add('out');
                setTimeout(() => ov.remove(), 350);
                const total = st.ex.minutes * 60000;
                examTimer = { examKey: st.key, subj: st.subj, start: Date.now(), end: Date.now() + total, total, warned5: false, warned1: false, handle: null };
                examTimer.handle = setInterval(tickExamTimer, 250);
                ensureTimerPill();
                tickExamTimer();
                if (currentSubject === st.subj && activeTab === 'exams') renderExam();
            }, 700 + steps.length * 850 + 1100);
        }

        function examOverlay(inner) {
            const ov = document.createElement('div');
            ov.className = 'exam-overlay';
            ov.setAttribute('role', 'alert');
            ov.innerHTML = inner;
            document.body.appendChild(ov);
            return ov;
        }

        function ensureTimerPill() {
            let pill = $('exam-timer-pill');
            if (!pill) {
                pill = document.createElement('div');
                pill.id = 'exam-timer-pill';
                pill.className = 'exam-timer';
                pill.innerHTML = `
                    <button type="button" class="exam-timer-main" onclick="goToRunningExam()" aria-label="Zur laufenden Klausur">
                        <svg viewBox="0 0 36 36" class="exam-timer-ring"><circle cx="18" cy="18" r="15.5" class="bg" /><circle cx="18" cy="18" r="15.5" class="fg" id="exam-timer-arc" /></svg>
                        <span id="exam-timer-text" class="font-mono-letter">00:00</span>
                    </button>
                    <button type="button" class="exam-timer-stop" onclick="finishExam(false)" aria-label="Klausur abgeben"><i class="fa-solid fa-flag-checkered"></i> Abgeben</button>`;
                document.body.appendChild(pill);
            }
            pill.classList.remove('hidden');
        }

        function tickExamTimer() {
            if (!examTimer) return;
            const left = examTimer.end - Date.now();
            const txt = $('exam-timer-text'), arc = $('exam-timer-arc'), pill = $('exam-timer-pill');
            if (txt) txt.textContent = fmtClock(left);
            if (arc) { const C = 2 * Math.PI * 15.5; arc.style.strokeDasharray = C; arc.style.strokeDashoffset = C * (1 - Math.max(0, left) / examTimer.total); }
            if (pill) {
                pill.classList.toggle('warn', left <= 5 * 60000 && left > 60000);
                pill.classList.toggle('danger', left <= 60000);
            }
            if (left <= 5 * 60000 && !examTimer.warned5 && examTimer.total > 5 * 60000) { examTimer.warned5 = true; showToast('⏱ Noch 5 Minuten – kontrolliere deine Antworten!'); }
            if (left <= 60000 && !examTimer.warned1) { examTimer.warned1 = true; showToast('⏱ Noch 1 Minute!'); }
            if (left <= 0) finishExam(true);
        }

        function goToRunningExam() {
            if (!examTimer) return;
            if (currentSubject !== examTimer.subj) selectSubject(examTimer.subj);
            switchTab('exams');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function finishExam(auto) {
            if (!examState || examState.submitted) return;
            const running = !!(examTimer && examTimer.examKey === examState.key);
            if (!auto) {
                const st = examState, allParts = st.ex.tasks.reduce((s, t) => s + t.parts.length, 0);
                const answered = st.ex.tasks.reduce((s, t, ti) => s + t.parts.filter((_, pi) => partAnswered(ti, pi)).length, 0);
                const msg = answered < allParts
                    ? `Klausur abgeben? ${allParts - answered} Antwort(en) sind noch leer und zählen dann 0 Punkte.`
                    : 'Klausur jetzt abgeben und auswerten?';
                if (!window.confirm(msg)) return;
            }
            let timeText = '';
            if (running) {
                const used = Math.min(Date.now(), examTimer.end) - examTimer.start;
                timeText = fmtClock(used) + ' min';
                clearInterval(examTimer.handle);
                examTimer = null;
                const pill = $('exam-timer-pill');
                if (pill) pill.classList.add('hidden');
            }
            const doSubmit = () => {
                const st = examState;
                st.submitted = true;
                st.ex.tasks.forEach((_, ti) => { st.checked[ti] = true; });
                const points = st.ex.tasks.reduce((s, _, ti) => s + taskScore(ti), 0);
                const total = examTotal(st.ex);
                st.result = { points, timeText };
                const best = examBest();
                const prev = best[st.key];
                if (!prev || points > prev.points) { best[st.key] = { points, total, date: new Date().toISOString().slice(0, 10) }; writeJSON(EXAM_STORE, best); }
                if (currentSubject !== st.subj) selectSubject(st.subj);
                if (activeTab !== 'exams') switchTab('exams'); else renderExam();
                examFillInputs();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (points / total >= 0.81 && typeof confetti === 'function') setTimeout(() => confetti({ particleCount: 140, spread: 90, origin: { y: 0.5 }, zIndex: 9999 }), 300);
            };
            // „Stift weg!“-Animation (bei Zeitablauf und beim Abgeben)
            const ov = examOverlay(`
                <div class="exam-ov-box">
                    <div class="exam-pen-drop"><i class="fa-solid fa-pen"></i></div>
                    <div class="exam-stift">Stift weg!</div>
                    <div class="exam-ov-sub">${auto ? 'Die Zeit ist um – jetzt wird ausgewertet …' : 'Abgegeben – jetzt wird ausgewertet …'}</div>
                </div>`);
            ov.classList.add('stop');
            setTimeout(() => { ov.classList.add('out'); setTimeout(() => ov.remove(), 350); doSubmit(); }, 2600);
        }
