
        // ==========================================
        // FACH-KONFIGURATION
        // Neue Fächer werden nur hier eingetragen.
        // ==========================================
        // Reihenfolge nie ändern – neue Fächer nur hinten anhängen (der Fortschritts-Code hängt davon ab).
        const SUBJECT_ORDER = ['erdkunde', 'deutsch', 'chemie', 'mathe'];
        const SECTION_IDS = ['roadmap', 'visuals', 'analysis', 'exercises', 'puzzle', 'cheatsheet', 'notes'];

        const SUBJECTS = {
            erdkunde: {
                ready: true,
                name: 'Erdkunde', short: 'Geo', emoji: '🇮🇳',
                icon: 'fa-earth-asia', headerIcon: 'fa-compass',
                title: 'Indien Geo-Profi 🇮🇳', subtitle: 'Klassenarbeit-Trainer Erdkunde',
                chip: '6 Level • 60 Fragen',
                desc: 'Naturräume, Monsunphysik (ITC, Luv/Lee), Wirtschaftssektoren, Landflucht, Dharavi Slum-Lösungen und Hightech Bangalore.',
                cta: 'Geo-Roadmap öffnen',
                heroTitle: 'Deine Erdkunde Turbo-Roadmap 🚀',
                heroDesc: 'Klicke dich durch die 6 Level. Jedes Level erklärt ein Thema aus deinem Buch in einfachen Worten mit Videos, Beispielen und 10 Quizfragen für Sterne!',
                levels: erdkundeLevels,
                exercises: null,
                puzzle: puzzleData.erdkunde,
                cheatsheet: cheatsheetData.erdkunde,
                tabs: [
                    ['roadmap', 'fa-map', 'Roadmap'],
                    ['visuals', 'fa-chart-column', 'Visuelles Geo-Labor'],
                    ['puzzle', 'fa-puzzle-piece', 'Match-Puzzle'],
                    ['cheatsheet', 'fa-file-invoice', 'Spickzettel'],
                    ['notes', 'fa-pen-to-square', 'Notizen']
                ],
                renderVisuals: () => renderErdkundeLabor(0)
            },
            deutsch: {
                ready: true,
                name: 'Deutsch', short: 'Deutsch', emoji: '📝',
                icon: 'fa-file-signature', headerIcon: 'fa-pen-nib',
                title: 'Deutsch Bewerbung 📝', subtitle: 'P.A.U.L. D. 8 & AZUBIYO Spezialist',
                chip: '6 Level • 60 Fragen',
                desc: 'Interaktiver DIN 5008 Brief-Trainer, Unterlagen-Analyse (Elias & Magdalena vs Philipp Schulz), 20 Praxis-Übungen & Stilregeln.',
                cta: 'Deutsch-Roadmap öffnen',
                heroTitle: 'Deine Deutsch Bewerbungs-Roadmap 🚀',
                heroDesc: 'Lerne die 12 Bausteine nach DIN 5008, meistere 20 Schreib-Übungen und analysiere Real-Bewerbungen aus Azubiyo für deine Klausur!',
                levels: deutschLevels,
                exercises: deutschExercises,
                exercisesBadge: 'Klausur-Vorbereitung Deutsch',
                exercisesTitle: '20 Praxis-Übungen zum Anschreiben & DIN 5008',
                exercisesDesc: 'Löse die Aufgaben schriftlich und überprüfe deine Antworten mit der aufklappbaren Musterlösung. Übung 20 enthält die große Klausur-Aufgabe!',
                puzzle: puzzleData.deutsch,
                cheatsheet: cheatsheetData.deutsch,
                tabs: [
                    ['roadmap', 'fa-map', 'Roadmap'],
                    ['visuals', 'fa-envelope-open-text', 'DIN 5008 Trainer'],
                    ['analysis', 'fa-magnifying-glass-chart', 'Unterlagen-Analyse'],
                    ['exercises', 'fa-pen-ruler', '20 Übungen'],
                    ['puzzle', 'fa-puzzle-piece', 'Match-Puzzle'],
                    ['cheatsheet', 'fa-file-invoice', 'Spickzettel'],
                    ['notes', 'fa-pen-to-square', 'Notizen']
                ],
                renderVisuals: () => renderDeutschDinTrainer()
            },
            chemie: {
                ready: chemieLevels.length > 0,
                name: 'Chemie', short: 'Chemie', emoji: '🧪',
                icon: 'fa-flask', headerIcon: 'fa-flask',
                title: 'Chemie 🧪', subtitle: 'Stoffe & Teilchen • Reinstoffe & Gemische',
                chip: chemieLevels.length > 0 ? `${chemieLevels.length} Level • ${chemieLevels.reduce((s, l) => s + l.questions.length, 0)} Fragen` : 'In Vorbereitung',
                exam: CHEMIE_EXAM,
                desc: 'Sicherheit & Piktogramme, Stoffeigenschaften & Dichte, Teilchenmodell, Diffusion & Lösevorgang, Reinstoffe & Gemischtypen.',
                cta: 'Chemie-Roadmap öffnen',
                heroTitle: 'Deine Chemie-Roadmap 🚀',
                heroDesc: 'Sieben Level nach deinem Buch (S. 52–65) und deiner Themenliste: einfache Erklärung, Fachwissen, Alltagsbeispiel, Erklärvideo und ein Quiz mit Verständnisfragen.',
                levels: chemieLevels,
                exercises: chemieExercises,
                exercisesBadge: 'Klausur-Vorbereitung Chemie',
                exercisesTitle: '20 Praxis-Übungen: von Grundlagen bis Klausur',
                exercisesDesc: 'Löse jede Aufgabe zuerst schriftlich. Die Musterlösung deckst du danach Schritt für Schritt auf. Die Farbe zeigt den Schwierigkeitsgrad: Grundlagen → Anwenden → Transfer → Klausur.',
                puzzle: chemiePuzzle,
                cheatsheet: chemieCheatsheet,
                tabs: [
                    ['roadmap', 'fa-map', 'Roadmap'],
                    ['visuals', 'fa-flask-vial', 'Chemie-Labor'],
                    ['exercises', 'fa-pen-ruler', '20 Übungen'],
                    ['puzzle', 'fa-puzzle-piece', 'Match-Puzzle'],
                    ['cheatsheet', 'fa-file-invoice', 'Spickzettel'],
                    ['notes', 'fa-pen-to-square', 'Notizen']
                ],
                renderVisuals: () => renderChemieLabor(0)
            },
            mathe: {
                ready: matheLevels.length > 0,
                name: 'Mathe', short: 'Mathe', emoji: '📐',
                icon: 'fa-square-root-variable', headerIcon: 'fa-calculator',
                title: 'Mathe 📐', subtitle: 'Graphen • Terme & Gleichungen • Linien im Dreieck',
                chip: `${matheLevels.length} Level • ${matheLevels.reduce((s, l) => s + l.questions.length, 0)} Fragen`,
                exam: MATHE_EXAM,
                desc: 'Graphen lesen & zuordnen, Terme vereinfachen, Gleichungen lösen (Knack die Box), Terme aufstellen, Umkreis, Inkreis, Höhen & Seitenhalbierende – plus Trapeze als Zusatz.',
                cta: 'Mathe-Roadmap öffnen',
                heroTitle: 'Deine Mathe-Roadmap 🚀',
                heroDesc: 'Sieben Level nach deinem Buch (S. 18–19, 26–33) und deiner Checkliste: einfache Erklärung, Fachwissen, Beispiel, Erklärvideo und ein Quiz mit Verständnisfragen. Level 7 (Trapeze) ist Zusatz.',
                levels: matheLevels,
                exercises: matheExercises,
                exercisesBadge: 'Klausur-Vorbereitung Mathe',
                exercisesTitle: '20 Übungen: von Grundlagen bis Klausur',
                exercisesDesc: 'Rechne jede Aufgabe zuerst selbst im Heft. Die Musterlösung deckst du danach Schritt für Schritt auf. Die Farbe zeigt den Schwierigkeitsgrad: Grundlagen → Anwenden → Transfer → Klausur.',
                puzzle: mathePuzzle,
                cheatsheet: matheCheatsheet,
                tabs: [
                    ['roadmap', 'fa-map', 'Roadmap'],
                    ['visuals', 'fa-shapes', 'Mathe-Labor'],
                    ['exercises', 'fa-pen-ruler', '20 Übungen'],
                    ['puzzle', 'fa-puzzle-piece', 'Match-Puzzle'],
                    ['cheatsheet', 'fa-file-invoice', 'Spickzettel'],
                    ['notes', 'fa-pen-to-square', 'Notizen']
                ],
                renderVisuals: () => renderMatheLabor(0)
            }
        };

        let currentSubject = null;
        let activeLevel = null;
        let activeTab = 'roadmap';

        // ==========================================
        // SPEICHER (localStorage, abgesichert für Safari/Privatmodus)
        // ==========================================
        const STORE_KEY = 'roadmap_app_progress';
        const NOTES_PREFIX = 'edumaster_notes_';
        const EX_DONE_KEY = 'edumaster_exercises_done';

        function readJSON(key, fallback) {
            try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
        }
        function writeJSON(key, value) {
            try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* Speicher nicht verfügbar */ }
        }
        function readText(key) {
            try { return localStorage.getItem(key) || ''; } catch (e) { return ''; }
        }
        function writeText(key, value) {
            try { localStorage.setItem(key, value); } catch (e) { /* Speicher nicht verfügbar */ }
        }

        function loadProgress() {
            let p = readJSON(STORE_KEY, null);
            if (!p || typeof p !== 'object') p = {};
            SUBJECT_ORDER.forEach(k => {
                if (!p[k] || typeof p[k] !== 'object') p[k] = { completed: [], stars: {} };
                if (!Array.isArray(p[k].completed)) p[k].completed = [];
                if (!p[k].stars || typeof p[k].stars !== 'object') p[k].stars = {};
            });
            return p;
        }
        let userProgress = loadProgress();
        function saveProgress() { writeJSON(STORE_KEY, userProgress); }

        // Alte gemeinsame Notizen (vor dem Update) in die Fächer übernehmen – nichts geht verloren
        function migrateNotes() {
            const old = readText('user_roadmap_notes');
            if (old && !readText('edumaster_notes_migrated')) {
                ['erdkunde', 'deutsch'].forEach(k => { if (!readText(NOTES_PREFIX + k)) writeText(NOTES_PREFIX + k, old); });
                writeText('edumaster_notes_migrated', '1');
            }
        }

        // ==========================================
        // HILFSFUNKTIONEN
        // ==========================================
        const $ = id => document.getElementById(id);

        function shuffle(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
        function escapeAttr(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
        function slug(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-'); }

        // Sterne: 3 Stufen bei 30 %, 70 % und 100 % (bei 10 Fragen: 3 / 7 / 10 – wie bisher)
        function starThresholds(n) { return [Math.ceil(n * 0.3), Math.ceil(n * 0.7), n]; }
        function starIcons(score, n) {
            return starThresholds(n).map(t => `<i class="${score >= t ? 'fa-solid' : 'fa-regular'} fa-star"></i>`).join('');
        }

        function subjectStats(key) {
            const s = SUBJECTS[key];
            const p = userProgress[key];
            const levels = s.levels || [];
            const maxStars = levels.reduce((sum, l) => sum + (l.questions ? l.questions.length : 0), 0);
            let stars = 0;
            levels.forEach(l => { stars += Math.min(+p.stars[l.id] || 0, l.questions ? l.questions.length : 0); });
            const done = levels.filter(l => p.completed.includes(l.id)).length;
            const next = levels.find(l => !p.completed.includes(l.id)) || null;
            return { n: levels.length, maxStars, stars, done, next, pct: levels.length ? Math.round(done / levels.length * 100) : 0 };
        }
        function totalStats() {
            const t = { n: 0, maxStars: 0, stars: 0, done: 0 };
            SUBJECT_ORDER.filter(k => SUBJECTS[k].ready).forEach(k => {
                const s = subjectStats(k);
                t.n += s.n; t.maxStars += s.maxStars; t.stars += s.stars; t.done += s.done;
            });
            t.pct = t.n ? Math.round(t.done / t.n * 100) : 0;
            return t;
        }

        function applyTheme(key) {
            document.body.classList.remove('t-home', ...SUBJECT_ORDER.map(k => 't-' + k));
            document.body.classList.add(key ? 't-' + key : 't-home');
        }
        function replayAnimation(el) {
            el.classList.remove('view-anim');
            void el.offsetWidth;
            el.classList.add('view-anim');
        }

        let toastTimer = null;
        function showToast(msg) {
            const t = $('toast');
            t.innerHTML = msg;
            t.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => t.classList.remove('show'), 3400);
        }

        function updateHeaderStars() {
            const t = totalStats();
            $('total-stars').innerHTML = `${t.stars}<span class="stars-max"> / ${t.maxStars}</span>`;
        }

        // ==========================================
        // DASHBOARD
        // ==========================================
        function showDashboard() {
            closeLevelModal();
            if (typeof stopLaborAnimations === 'function') stopLaborAnimations();
            currentSubject = null;
            applyTheme(null);
            document.body.classList.remove('in-subject');
            $('view-dashboard').classList.remove('hidden');
            $('view-subject').classList.add('hidden');
            $('btn-back-dashboard').classList.add('hidden');
            $('subject-switch').classList.add('hidden');
            $('nav-tabs-wrap').classList.add('hidden');
            $('brand-title').textContent = 'EduMaster';
            $('brand-icon').className = 'fa-solid fa-graduation-cap';
            renderDashboard();
            updateHeaderStars();
            replayAnimation($('view-dashboard'));
            window.scrollTo({ top: 0 });
        }

        function renderDashboard() {
            const t = totalStats();
            const C = 2 * Math.PI * 52;
            const ring = $('ring-progress');
            ring.style.strokeDasharray = C;
            requestAnimationFrame(() => { ring.style.strokeDashoffset = C * (1 - t.pct / 100); });
            $('dash-total-pct').textContent = `${t.pct}%`;
            $('dash-total-levels').textContent = `${t.done} von ${t.n} Level gemeistert`;
            $('dash-total-stars').textContent = `${t.stars} / ${t.maxStars}`;
            $('dash-greeting').textContent = t.stars > 0 ? 'Schön, dass du wieder da bist 👋' : 'Willkommen bei EduMaster 👋';
            $('subject-cards').innerHTML = SUBJECT_ORDER.map(subjectCard).join('');
        }

        function subjectCard(key) {
            const s = SUBJECTS[key];
            if (!s.ready) {
                return `
                    <div class="subject-card glass t-${key} is-locked" role="button" tabindex="0" aria-disabled="true"
                         onclick="selectSubject('${key}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectSubject('${key}')}">
                        <div class="flex items-start justify-between gap-3">
                            <span class="icon-tile"><i class="fa-solid ${s.icon}"></i></span>
                            <span class="chip">${s.chip}</span>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-xl font-extrabold">${s.title}</h3>
                            <p class="text-xs font-bold text-slate-500 mt-1">${s.subtitle}</p>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed mt-3 flex-1">${s.desc}</p>
                        <div class="mt-5 space-y-3">
                            <div class="locked-box"><i class="fa-solid fa-hourglass-half"></i> Wartet auf deine Arbeitsblätter & Buchseiten</div>
                            <span class="btn btn-ghost w-full is-disabled"><i class="fa-solid fa-lock"></i> Bald verfügbar</span>
                        </div>
                    </div>
                `;
            }
            const st = subjectStats(key);
            const nextText = st.next ? `${st.next.badge}: ${st.next.title}` : 'Alle Level geschafft 🎉';
            return `
                <div class="subject-card glass t-${key}" role="button" tabindex="0"
                     onclick="selectSubject('${key}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectSubject('${key}')}">
                    <div class="flex items-start justify-between gap-3">
                        <span class="icon-tile"><i class="fa-solid ${s.icon}"></i></span>
                        <span class="chip">${s.chip}</span>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-xl font-extrabold">${s.title}</h3>
                        <p class="text-xs font-bold text-slate-500 mt-1">${s.subtitle}</p>
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3 flex-1">${s.desc}</p>
                    ${s.exam ? `<div class="mt-3 inline-flex items-center gap-2 self-start text-xs font-extrabold text-rose-700 bg-rose-50 border border-rose-200 rounded-full px-3 py-1"><i class="fa-regular fa-calendar"></i> ${s.exam}</div>` : ''}
                    <div class="mt-5 space-y-3">
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs font-bold text-slate-500">
                                <span><i class="fa-solid fa-star text-amber-400"></i> ${st.stars} / ${st.maxStars}</span>
                                <span>${st.pct}% fertig</span>
                            </div>
                            <div class="bar"><span style="width:${st.pct}%"></span></div>
                        </div>
                        <div class="next-up"><i class="fa-solid fa-forward-step accent-text mr-1"></i> Als Nächstes: <strong>${nextText}</strong></div>
                        <span class="btn btn-primary w-full">${s.cta} <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            `;
        }

        // ==========================================
        // FACH ÖFFNEN & WECHSELN
        // ==========================================
        function selectSubject(key) {
            const s = SUBJECTS[key];
            if (!s) return;
            if (!s.ready) {
                showToast(`${s.emoji} ${s.name} wird gerade vorbereitet – sobald deine Unterlagen da sind, geht es hier los!`);
                return;
            }
            currentSubject = key;
            applyTheme(key);
            document.body.classList.add('in-subject');
            $('view-dashboard').classList.add('hidden');
            $('view-subject').classList.remove('hidden');
            $('btn-back-dashboard').classList.remove('hidden');
            $('subject-switch').classList.remove('hidden');
            $('nav-tabs-wrap').classList.remove('hidden');
            $('brand-title').textContent = s.title;
            $('brand-icon').className = 'fa-solid ' + s.headerIcon;

            renderSubjectSwitch();
            renderNavTabs();
            renderSubjectHero();
            renderRoadmap();
            renderCheatsheet();
            initPuzzleGame();
            loadCustomNotes();
            updateGlobalStats();
            switchTab('roadmap');
            replayAnimation($('view-subject'));
            window.scrollTo({ top: 0 });
        }

        function switchSubject(key) { selectSubject(key); }

        function renderSubjectSwitch() {
            $('subject-switch').innerHTML = SUBJECT_ORDER.map(k => {
                const s = SUBJECTS[k];
                const active = k === currentSubject;
                return `
                    <button type="button" class="seg-btn t-${k} ${active ? 'active' : ''} ${s.ready ? '' : 'is-locked'}"
                            onclick="switchSubject('${k}')" title="${s.name}${s.ready ? '' : ' (in Vorbereitung)'}" aria-pressed="${active}">
                        <span>${s.emoji}</span><span class="hidden lg:inline">${s.short}</span>
                        ${s.ready ? '' : '<i class="fa-solid fa-lock text-[9px]"></i>'}
                    </button>
                `;
            }).join('');
        }

        function renderNavTabs() {
            const s = SUBJECTS[currentSubject];
            $('nav-tabs-container').innerHTML = s.tabs.map(([id, icon, label]) => `
                <button type="button" role="tab" id="tab-${id}" class="tab" onclick="switchTab('${id}')">
                    <i class="fa-solid ${icon}"></i><span>${label}</span>
                </button>
            `).join('');
        }

        function renderSubjectHero() {
            const s = SUBJECTS[currentSubject];
            $('hero-title').textContent = s.heroTitle;
            $('hero-desc').textContent = s.heroDesc;
            $('hero-badge').innerHTML = s.exam ? `<i class="fa-regular fa-calendar"></i> ${s.exam}` : 'Klassenarbeit-Vorbereitung';
        }

        function switchTab(tId) {
            if (typeof stopLaborAnimations === 'function') stopLaborAnimations();
            const s = SUBJECTS[currentSubject];
            if (!s.tabs.some(t => t[0] === tId)) tId = 'roadmap';
            activeTab = tId;
            SECTION_IDS.forEach(id => {
                const sec = $('sec-' + id);
                if (sec) sec.classList.toggle('hidden', id !== tId);
                const btn = $('tab-' + id);
                if (btn) {
                    btn.classList.toggle('active', id === tId);
                    btn.setAttribute('aria-selected', id === tId ? 'true' : 'false');
                }
            });
            const activeBtn = $('tab-' + tId);
            if (activeBtn) {
                const bar = $('nav-tabs-container');
                bar.scrollTo({ left: activeBtn.offsetLeft - bar.clientWidth / 2 + activeBtn.clientWidth / 2, behavior: 'smooth' });
            }
            replayAnimation($('sec-' + tId));

            if (tId === 'visuals') s.renderVisuals();
            else if (tId === 'analysis') renderAnalysisTab('elias');
            else if (tId === 'exercises') renderExercises();
        }

        function updateGlobalStats() {
            if (!currentSubject) { updateHeaderStars(); return; }
            const st = subjectStats(currentSubject);
            $('overall-progress-bar').style.width = `${st.pct}%`;
            $('overall-progress-pct').textContent = `${st.pct}%`;
            $('overall-progress-meta').innerHTML = `${st.done} von ${st.n} Level · <i class="fa-solid fa-star text-amber-400"></i> ${st.stars} / ${st.maxStars} Sterne`;
            updateHeaderStars();
        }

        // ==========================================
        // ROADMAP (Zeitleiste)
        // ==========================================
        function renderRoadmap() {
            const s = SUBJECTS[currentSubject];
            const progress = userProgress[currentSubject];
            $('levels-container').innerHTML = s.levels.map((level, idx) => {
                const isCompleted = progress.completed.includes(level.id);
                const n = level.questions ? level.questions.length : 0;
                const best = Math.min(+progress.stars[level.id] || 0, n);
                return `
                    <div class="zz-item ${idx % 2 === 0 ? 'zz-left' : 'zz-right'}">
                        <button type="button" onclick="openLevelModal(${level.id})" class="tl-node zz-node bg-gradient-to-br ${level.color} ${isCompleted ? 'is-done' : ''}" aria-label="${escapeAttr(level.badge + ' öffnen')}">
                            <i class="fa-solid ${isCompleted ? 'fa-check' : level.icon}"></i>
                        </button>
                        <div class="glass level-card zz-card">
                            <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
                                <span class="chip">${level.badge}</span>
                                <div class="flex items-center gap-2">
                                    ${isCompleted ? `<span class="status-done"><i class="fa-solid fa-check"></i> ${best} / ${n}</span>` : ''}
                                    <span class="stars-row" title="Bestwert: ${best} von ${n}">${starIcons(best, n)}</span>
                                </div>
                            </div>
                            <h3 class="text-lg font-extrabold leading-snug">${level.title}</h3>
                            <p class="text-xs font-bold accent-text mb-1.5">${level.subtitle}</p>
                            <p class="text-sm text-slate-600 leading-relaxed line-clamp-2">${level.summary}</p>
                            <button type="button" onclick="openLevelModal(${level.id})" class="btn w-full mt-4 text-white bg-gradient-to-r ${level.color} shadow-md hover:brightness-105">
                                ${isCompleted ? 'Wiederholen & Video schauen' : 'Level starten'} <i class="fa-solid fa-arrow-right text-xs"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // ==========================================
        // LEVEL-FENSTER
        // ==========================================
        function openLevelModal(lId) {
            const s = SUBJECTS[currentSubject];
            activeLevel = s.levels.find(l => l.id === lId);
            if (!activeLevel) return;

            $('modal-header').className = `modal-head bg-gradient-to-br ${activeLevel.color}`;
            $('modal-badge').textContent = activeLevel.badge;
            $('modal-title').textContent = activeLevel.title;
            $('modal-subtitle').textContent = activeLevel.subtitle || '';
            $('modal-icon').className = `fa-solid ${activeLevel.icon}`;
            $('modal-tab-quiz-label').textContent = `2. Quiz (${activeLevel.questions.length} Fragen)`;
            $('modal-content-learn').innerHTML = renderLearnContent(activeLevel);
            if (typeof afterLearnRender === 'function') afterLearnRender($('modal-content-learn'));
            if (typeof matheAfterRender === 'function') matheAfterRender($('modal-content-learn'));

            buildModalQuiz();
            switchModalSubTab('learn');
            $('level-modal').classList.remove('hidden');
            document.body.classList.add('modal-open');
        }

        function closeLevelModal() {
            stopVideos();
            $('level-modal').classList.add('hidden');
            document.body.classList.remove('modal-open');
        }

        function switchModalSubTab(tab) {
            const learn = tab === 'learn';
            if (!learn) stopVideos();
            $('modal-content-learn').classList.toggle('hidden', !learn);
            $('modal-content-quiz').classList.toggle('hidden', learn);
            $('modal-tab-learn').classList.toggle('active', learn);
            $('modal-tab-quiz').classList.toggle('active', !learn);
            $('modal-body').scrollTop = 0;
            const btn = $('modal-foot-btn');
            if (learn) {
                $('modal-foot-hint').textContent = 'Tipp: Lies zuerst den Lern-Teil vor dem Quiz!';
                btn.innerHTML = 'Weiter zum Quiz <i class="fa-solid fa-arrow-right"></i>';
                btn.onclick = () => switchModalSubTab('quiz');
            } else {
                $('modal-foot-hint').textContent = 'Unsicher? Im Lern-Teil steht alles Wichtige.';
                btn.innerHTML = '<i class="fa-solid fa-book-open"></i> Zum Lern-Teil';
                btn.onclick = () => switchModalSubTab('learn');
            }
        }

        function renderLearnContent(l) {
            const videos = l.videos || (l.video ? [l.video] : []);
            return `
                <div class="space-y-5">
                    <div class="lesson lesson-simple">
                        <div class="lesson-title"><span>💡</span> Einfache Erklärung – Was bedeutet das?</div>
                        <p class="lesson-text">${l.simple}</p>
                    </div>
                    ${l.merke ? `
                    <div class="lesson lesson-merke">
                        <div class="lesson-title"><span>🧠</span> Merksatz</div>
                        <p class="lesson-text font-semibold">${l.merke}</p>
                    </div>` : ''}
                    <div class="lesson lesson-plain">
                        <div class="lesson-title"><span>📖</span> Ausführliches Fachwissen</div>
                        <div class="lesson-rich">${l.text}</div>
                    </div>
                    <div class="lesson lesson-example">
                        <div class="lesson-title"><span>📌</span> Konkretes Praxis-Beispiel</div>
                        <p class="lesson-text">${l.example}</p>
                    </div>
                    ${videos.length ? `
                    <div class="space-y-3">
                        <div class="lesson-title px-1 !mb-0"><span>🎬</span> Passendes Erklärvideo</div>
                        ${videos.map(videoCard).join('')}
                    </div>` : ''}
                </div>
            `;
        }

        // ==========================================
        // YOUTUBE: neuer Tab + Kopier-Fallback (Safari / iPad)
        // ==========================================
        function videoCard(v) {
            const url = videoUrl(v.id);
            return `
                <div class="video-card" id="vc-${v.id}">
                    <button type="button" class="video-thumb" onclick="playVideo('${v.id}')" aria-label="${escapeAttr('Video abspielen: ' + v.title)}">
                        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy" referrerpolicy="no-referrer">
                        <span class="play"><i class="fa-solid fa-play text-sm ml-0.5"></i></span>
                    </button>
                    <div class="video-slot hidden" id="vs-${v.id}"></div>
                    <div class="flex-1 min-w-0 space-y-1.5">
                        <span class="yt-chip"><i class="fa-brands fa-youtube"></i> Lernvideo</span>
                        <h5 class="font-bold text-sm leading-snug text-slate-900">${v.title}</h5>
                        <p class="text-xs text-slate-500">Kanal: ${v.channel}</p>
                        <div class="flex flex-wrap gap-2 pt-1">
                            <button type="button" class="btn btn-yt btn-sm" id="vp-${v.id}" onclick="playVideo('${v.id}')"><i class="fa-solid fa-play"></i> Hier abspielen</button>
                            <a class="btn btn-ghost btn-sm" href="${url}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> In neuem Tab</a>
                            <button type="button" class="btn btn-ghost btn-sm" onclick="copyVideoLink('${v.id}', this)"><i class="fa-regular fa-copy"></i> Link kopieren</button>
                        </div>
                        <p class="text-[11px] text-slate-400 leading-snug">Startet das Video nicht? Öffne es „In neuem Tab“ – EduMaster bleibt dabei in diesem Tab geöffnet.</p>
                    </div>
                </div>
            `;
        }

        function videoUrl(id) { return 'https://www.youtube.com/watch?v=' + encodeURIComponent(id); }

        // Spielt das Video direkt in der App ab (datensparsamer Player von youtube-nocookie.com).
        function playVideo(id) {
            if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
            stopVideos();
            const card = $('vc-' + id), slot = $('vs-' + id);
            if (!card || !slot) return;
            const frame = document.createElement('div');
            frame.className = 'video-frame';
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
            iframe.title = 'Lernvideo';
            iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.loading = 'lazy';
            frame.appendChild(iframe);
            slot.innerHTML = '';
            slot.appendChild(frame);
            slot.classList.remove('hidden');
            card.classList.add('is-playing');
            const btn = $('vp-' + id);
            if (btn) { btn.innerHTML = '<i class="fa-solid fa-stop"></i> Video schließen'; btn.onclick = () => stopVideos(); }
            if (location.protocol === 'file:') showToast('Hinweis: Als lokale Datei spielt YouTube oft nicht ab – online klappt es. Sonst „In neuem Tab“.');
        }

        // Beendet laufende Videos (z. B. beim Schließen des Level-Fensters), damit nichts im Hintergrund weiterläuft.
        function stopVideos() {
            document.querySelectorAll('.video-card.is-playing').forEach(card => {
                const id = card.id.slice(3);
                const slot = $('vs-' + id);
                if (slot) { slot.innerHTML = ''; slot.classList.add('hidden'); }
                card.classList.remove('is-playing');
                const btn = $('vp-' + id);
                if (btn) { btn.innerHTML = '<i class="fa-solid fa-play"></i> Hier abspielen'; btn.onclick = () => playVideo(id); }
            });
        }

        function copyVideoLink(id, btn) {
            const url = videoUrl(id);
            const done = () => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Kopiert!';
                showToast('🔗 Link kopiert – jetzt in Safari oder der YouTube-App einfügen.');
                setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i> Link kopieren'; }, 2200);
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(url).then(done).catch(() => fallbackCopy(url, done));
            } else {
                fallbackCopy(url, done);
            }
        }

        function fallbackCopy(text, done) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.top = '0';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            ta.setSelectionRange(0, text.length);
            let ok = false;
            try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
            document.body.removeChild(ta);
            if (ok) done();
            else window.prompt('Link zum Kopieren (gedrückt halten → Kopieren):', text);
        }

        // ==========================================
        // QUIZ (eine Frage pro Seite, Antworten gemischt)
        // ==========================================
        let quiz = null;

        function buildModalQuiz() {
            const qs = activeLevel.questions || [];
            quiz = {
                order: qs.map(q => shuffle(q.options.map((_, i) => i))),
                answers: {},
                cur: 0,
                done: false,
                score: 0,
                prevBest: 0
            };
            renderQuiz();
        }

        function quizScore() {
            return activeLevel.questions.reduce((sum, q, i) => sum + (quiz.answers[i] === q.correct ? 1 : 0), 0);
        }
        function answeredCount() { return Object.keys(quiz.answers).length; }
        function findNextOpen(from) {
            const n = activeLevel.questions.length;
            for (let k = 1; k <= n; k++) {
                const j = (from + k) % n;
                if (quiz.answers[j] === undefined) return j;
            }
            return from;
        }

        function renderQuiz() {
            const c = $('modal-content-quiz');
            if (quiz.done) { c.innerHTML = renderQuizResult(); return; }

            const qs = activeLevel.questions;
            const n = qs.length;
            const i = quiz.cur;
            const q = qs[i];
            const answered = quiz.answers[i] !== undefined;
            const isCorrect = answered && quiz.answers[i] === q.correct;
            const count = answeredCount();
            const keys = 'ABCDEFGH';

            const dots = qs.map((qq, k) => {
                const a = quiz.answers[k];
                const state = a === undefined ? '' : (a === qq.correct ? 'ok' : 'bad');
                return `<button type="button" class="qdot ${state} ${k === i ? 'current' : ''}" onclick="gotoQuestion(${k})" aria-label="Frage ${k + 1}">${k + 1}</button>`;
            }).join('');

            const opts = quiz.order[i].map((optIdx, pos) => {
                let state = '';
                if (answered) {
                    if (optIdx === q.correct) state = 'correct';
                    else if (optIdx === quiz.answers[i]) state = 'wrong';
                    else state = 'dim';
                }
                const icon = state === 'correct' ? '<i class="fa-solid fa-circle-check text-emerald-500"></i>'
                           : state === 'wrong' ? '<i class="fa-solid fa-circle-xmark text-rose-500"></i>' : '';
                return `
                    <button type="button" class="opt ${state}" ${answered ? 'disabled' : ''} onclick="checkQuizAnswer(${i}, ${optIdx})">
                        <span class="key">${keys[pos]}</span><span class="flex-1">${q.options[optIdx]}</span>${icon}
                    </button>
                `;
            }).join('');

            const feedback = answered ? `
                <div class="feedback ${isCorrect ? 'ok' : 'bad'}">
                    <div class="font-extrabold mb-1">${isCorrect ? '<i class="fa-solid fa-circle-check"></i> Richtig!' : '<i class="fa-solid fa-circle-xmark"></i> Nicht ganz.'}</div>
                    ${isCorrect ? '' : `<div class="mb-1">Richtige Antwort: <strong>${q.options[q.correct]}</strong></div>`}
                    <div>${q.exp}</div>
                </div>` : '';

            let nav = '';
            if (answered) {
                if (count === n) {
                    nav = `<button type="button" class="btn btn-primary" onclick="finishQuiz()">Quiz auswerten & Sterne speichern ⭐</button>`;
                } else {
                    const next = findNextOpen(i);
                    nav = `<button type="button" class="btn btn-primary" onclick="gotoQuestion(${next})">${next === i + 1 ? 'Nächste Frage' : 'Zur nächsten offenen Frage'} <i class="fa-solid fa-arrow-right"></i></button>`;
                }
            } else {
                nav = `<span class="text-xs font-semibold text-slate-400">Wähle eine Antwort aus</span>`;
            }

            c.innerHTML = `
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between text-xs font-bold text-slate-500">
                            <span>Frage ${i + 1} von ${n}</span>
                            <span>${count} beantwortet · <span class="text-emerald-600">${quizScore()} richtig</span></span>
                        </div>
                        <div class="bar mt-2"><span style="width:${count / n * 100}%"></span></div>
                        <div class="qdots mt-3">${dots}</div>
                    </div>
                    <div class="question-card">
                        ${q.type ? `<span class="chip mb-3">${q.type}</span>` : ''}
                        <h4 class="text-base md:text-lg font-extrabold leading-snug text-slate-900">${q.q}</h4>
                        <div class="space-y-2 mt-4">${opts}</div>
                        ${feedback}
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        ${i > 0 ? `<button type="button" class="btn btn-ghost btn-sm" onclick="gotoQuestion(${i - 1})"><i class="fa-solid fa-arrow-left"></i> Zurück</button>` : '<span></span>'}
                        ${nav}
                    </div>
                </div>
            `;
        }

        function gotoQuestion(k) {
            quiz.cur = k;
            renderQuiz();
            $('modal-body').scrollTop = 0;
        }

        function checkQuizAnswer(i, optIdx) {
            if (quiz.answers[i] !== undefined) return;
            quiz.answers[i] = optIdx;
            renderQuiz();
            const fb = $('modal-content-quiz').querySelector('.feedback');
            if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function finishQuiz() {
            const n = activeLevel.questions.length;
            if (answeredCount() < n) { gotoQuestion(findNextOpen(quiz.cur)); return; }
            const score = quizScore();
            const prog = userProgress[currentSubject];
            const prevBest = +prog.stars[activeLevel.id] || 0;
            if (!prog.completed.includes(activeLevel.id)) prog.completed.push(activeLevel.id);
            prog.stars[activeLevel.id] = Math.max(prevBest, score);
            saveProgress();

            quiz.done = true;
            quiz.score = score;
            quiz.prevBest = prevBest;
            renderQuiz();
            $('modal-body').scrollTop = 0;
            if (score >= starThresholds(n)[1] && typeof confetti === 'function') {
                confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 }, zIndex: 9999 });
            }
            updateGlobalStats();
            renderRoadmap();
        }

        function renderQuizResult() {
            const n = activeLevel.questions.length;
            const sc = quiz.score;
            const [t1, t2] = starThresholds(n);
            const msg = sc === n ? 'Perfekt! Alle Fragen richtig – du bist bereit für die Klassenarbeit! 🏆'
                      : sc >= t2 ? 'Stark! Schau dir die falsch beantworteten Fragen unten noch einmal an.'
                      : sc >= t1 ? 'Guter Anfang! Lies den Lern-Teil noch einmal und versuche es erneut.'
                      : 'Nicht schlimm! Lies den Lern-Teil in Ruhe durch und starte das Quiz dann neu.';
            const wrong = activeLevel.questions.map((q, i) => ({ q, i })).filter(x => quiz.answers[x.i] !== x.q.correct);
            return `
                <div class="question-card text-center space-y-4 py-6">
                    <div class="result-stars">${starIcons(sc, n)}</div>
                    <div>
                        <div class="text-4xl font-extrabold">${sc} / ${n}</div>
                        <div class="text-sm text-slate-500 font-semibold">richtige Antworten${quiz.prevBest > sc ? ` · dein Bestwert bleibt ${quiz.prevBest}` : ''}</div>
                    </div>
                    <p class="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">${msg}</p>
                    ${wrong.length ? `
                    <div class="text-left panel p-4 space-y-2 max-w-lg mx-auto">
                        <div class="text-xs font-extrabold uppercase tracking-wider text-rose-600">Das solltest du nochmal anschauen</div>
                        ${wrong.map(x => `
                            <button type="button" class="w-full text-left text-sm font-semibold text-slate-700 hover:text-slate-900 flex gap-2 py-1" onclick="reviewQuestion(${x.i})">
                                <span class="text-rose-500 font-extrabold">${x.i + 1}.</span><span class="flex-1">${x.q.q}</span><i class="fa-solid fa-chevron-right text-slate-300 mt-1"></i>
                            </button>`).join('')}
                    </div>` : ''}
                    <div class="flex flex-wrap justify-center gap-2 pt-2">
                        <button type="button" class="btn btn-ghost" onclick="buildModalQuiz()"><i class="fa-solid fa-rotate-right"></i> Quiz wiederholen</button>
                        <button type="button" class="btn btn-primary" onclick="closeLevelModal()">Fertig <i class="fa-solid fa-check"></i></button>
                    </div>
                </div>
            `;
        }

        function reviewQuestion(i) {
            quiz.done = false;
            gotoQuestion(i);
        }

        // ==========================================
        // ÜBUNGEN (Musterlösung verdeckt, optional Schritt für Schritt)
        // ==========================================
        let exDone = readJSON(EX_DONE_KEY, {});
        if (!exDone || typeof exDone !== 'object') exDone = {};

        function renderExercises() {
            const s = SUBJECTS[currentSubject];
            const list = s.exercises || [];
            $('ex-badge').textContent = s.exercisesBadge || 'Klausur-Vorbereitung';
            $('ex-title-text').textContent = s.exercisesTitle || 'Praxis-Übungen';
            $('ex-desc').textContent = s.exercisesDesc || '';
            const done = new Set(exDone[currentSubject] || []);
            $('exercises-container').innerHTML = list.length
                ? list.map(ex => exerciseCard(ex, list.length, done.has(ex.id))).join('')
                : `<p class="text-sm text-slate-500">Noch keine Übungen vorhanden.</p>`;
            updateExerciseCounter();
        }

        function updateExerciseCounter() {
            const list = SUBJECTS[currentSubject].exercises || [];
            const done = (exDone[currentSubject] || []).filter(id => list.some(e => e.id === id)).length;
            $('ex-counter').innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> ${done} / ${list.length} erledigt`;
        }

        function exerciseCard(ex, total, isDone) {
            const diff = ex.level ? `<span class="diff diff-${slug(ex.level)}">${ex.level}</span>` : '';
            const sol = Array.isArray(ex.steps) ? renderSteps(ex) : ex.sol;
            return `
                <article class="ex-card ${isDone ? 'is-done' : ''}" id="ex-card-${ex.id}">
                    <div class="flex items-center justify-between gap-2 flex-wrap">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="chip">Übung ${ex.id} von ${total}</span>
                            ${diff}
                        </div>
                        <button type="button" id="ex-done-${ex.id}" class="done-toggle ${isDone ? 'on' : ''}" onclick="toggleExerciseDone(${ex.id})">
                            ${doneToggleInner(isDone)}
                        </button>
                    </div>
                    <h4 class="font-extrabold text-slate-900 text-base mt-3">${ex.title}</h4>
                    <div class="task-box">${ex.task}</div>
                    <button type="button" onclick="toggleExerciseSol(${ex.id})" id="ex-btn-${ex.id}" class="btn btn-soft btn-sm">🔍 Musterlösung anzeigen</button>
                    <div id="ex-sol-${ex.id}" class="solution hidden">${sol}</div>
                </article>
            `;
        }

        function doneToggleInner(isDone) {
            return isDone ? '<i class="fa-solid fa-circle-check"></i> Erledigt' : '<i class="fa-regular fa-circle"></i> Als erledigt markieren';
        }

        function renderSteps(ex) {
            const many = ex.steps.length > 1;
            return `
                <div class="font-extrabold mb-3">Musterlösung – Schritt für Schritt:</div>
                <ol class="steps">
                    ${ex.steps.map((st, i) => `<li class="step ${i === 0 ? '' : 'hidden'}"><span class="step-n">${i + 1}</span><div class="flex-1">${st}</div></li>`).join('')}
                </ol>
                ${many ? `
                <div class="flex flex-wrap gap-2 mt-4" id="ex-stepnav-${ex.id}">
                    <button type="button" class="btn btn-ghost btn-sm" onclick="nextStep(${ex.id})">Nächster Schritt <i class="fa-solid fa-arrow-down"></i></button>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="allSteps(${ex.id})">Alle Schritte zeigen</button>
                </div>` : ''}
            `;
        }

        function nextStep(id) {
            const hidden = $('ex-sol-' + id).querySelectorAll('.step.hidden');
            if (hidden[0]) hidden[0].classList.remove('hidden');
            if (hidden.length <= 1) { const nav = $('ex-stepnav-' + id); if (nav) nav.remove(); }
        }

        function allSteps(id) {
            $('ex-sol-' + id).querySelectorAll('.step.hidden').forEach(el => el.classList.remove('hidden'));
            const nav = $('ex-stepnav-' + id);
            if (nav) nav.remove();
        }

        function toggleExerciseSol(id) {
            const sol = $('ex-sol-' + id);
            const btn = $('ex-btn-' + id);
            const nowHidden = sol.classList.toggle('hidden');
            btn.innerHTML = nowHidden ? '🔍 Musterlösung anzeigen' : '🙈 Musterlösung ausblenden';
        }

        function toggleExerciseDone(id) {
            const list = new Set(exDone[currentSubject] || []);
            if (list.has(id)) list.delete(id); else list.add(id);
            exDone[currentSubject] = [...list];
            writeJSON(EX_DONE_KEY, exDone);
            const on = list.has(id);
            const btn = $('ex-done-' + id);
            btn.classList.toggle('on', on);
            btn.innerHTML = doneToggleInner(on);
            $('ex-card-' + id).classList.toggle('is-done', on);
            updateExerciseCounter();
        }

        // ==========================================
        // MATCH-PUZZLE MIT PFEIL-KARTEN
        // ==========================================
        let selectedTerm = null;
        let selectedExp = null;
        let matchedCount = 0;

        function initPuzzleGame() {
            selectedTerm = null;
            selectedExp = null;
            matchedCount = 0;
            const pairs = SUBJECTS[currentSubject].puzzle || [];
            $('match-score').textContent = 0;
            $('match-total').textContent = pairs.length;
            $('puzzle-arrow-cards').innerHTML = `<p class="text-sm text-slate-400 italic">Noch keine Paare verknüpft.</p>`;

            const terms = shuffle(pairs.map((p, i) => ({ id: i, text: p.term })));
            const exps = shuffle(pairs.map((p, i) => ({ id: i, text: p.exp })));
            $('puzzle-board').innerHTML = `
                <div class="space-y-2">
                    <h4 class="col-head">Begriffe</h4>
                    ${terms.map(t => `<button type="button" id="p-term-${t.id}" class="pz pz-term" onclick="selectPuzzleItem('term', ${t.id}, this)"><span>${t.text}</span><i class="fa-regular fa-circle"></i></button>`).join('')}
                </div>
                <div class="space-y-2">
                    <h4 class="col-head">Erklärungen</h4>
                    ${exps.map(e => `<button type="button" id="p-exp-${e.id}" class="pz pz-exp" onclick="selectPuzzleItem('exp', ${e.id}, this)"><span>${e.text}</span><i class="fa-regular fa-circle"></i></button>`).join('')}
                </div>
            `;
        }

        function selectPuzzleItem(type, id, btn) {
            if (btn.disabled) return;
            const group = type === 'term' ? '.pz-term' : '.pz-exp';
            document.querySelectorAll(`#puzzle-board ${group}.pz-sel`).forEach(b => b.classList.remove('pz-sel'));
            btn.classList.add('pz-sel');
            if (type === 'term') selectedTerm = { id, btn }; else selectedExp = { id, btn };

            if (!selectedTerm || !selectedExp) return;
            const t = selectedTerm, e = selectedExp;
            selectedTerm = null;
            selectedExp = null;

            if (t.id === e.id) {
                [t.btn, e.btn].forEach(b => {
                    b.classList.remove('pz-sel');
                    b.classList.add('pz-done');
                    b.disabled = true;
                    b.querySelector('i').className = 'fa-solid fa-circle-check';
                });
                const pairs = SUBJECTS[currentSubject].puzzle;
                const pair = pairs[t.id];
                const box = $('puzzle-arrow-cards');
                if (matchedCount === 0) box.innerHTML = '';
                box.insertAdjacentHTML('beforeend', `
                    <div class="arrow-card">
                        <span class="arrow-term">${pair.term}</span>
                        <span class="arrow">➔</span>
                        <span class="arrow-exp">${pair.exp}</span>
                    </div>
                `);
                matchedCount++;
                $('match-score').textContent = matchedCount;
                if (matchedCount === pairs.length) {
                    if (typeof confetti === 'function') confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
                    showToast('🎉 Super – alle Paare richtig verbunden!');
                }
            } else {
                [t.btn, e.btn].forEach(b => b.classList.add('pz-wrong'));
                setTimeout(() => [t.btn, e.btn].forEach(b => b.classList.remove('pz-wrong', 'pz-sel')), 550);
            }
        }

        // ==========================================
        // SPICKZETTEL (aufklappbar)
        // ==========================================
        function renderCheatsheet() {
            const items = SUBJECTS[currentSubject].cheatsheet || [];
            $('cheatsheet-accordion').innerHTML = items.map(item => `
                <details class="acc">
                    <summary><span>${item.q}</span><i class="fa-solid fa-chevron-down"></i></summary>
                    <div class="acc-body">${item.a}</div>
                </details>
            `).join('');
            $('cheat-toggle-all').innerHTML = '<i class="fa-solid fa-expand"></i> Alle öffnen';
        }

        function toggleAllCheats() {
            const all = [...document.querySelectorAll('#cheatsheet-accordion details')];
            const open = all.some(d => !d.open);
            all.forEach(d => { d.open = open; });
            $('cheat-toggle-all').innerHTML = open ? '<i class="fa-solid fa-compress"></i> Alle schließen' : '<i class="fa-solid fa-expand"></i> Alle öffnen';
        }

        // ==========================================
        // EIGENE NOTIZEN (pro Fach)
        // ==========================================
        function loadCustomNotes() {
            if (!currentSubject) return;
            $('custom-notes-text').value = readText(NOTES_PREFIX + currentSubject);
            $('notes-subject-label').textContent = 'jedes Fach';
            updateNotesMeta('<i class="fa-solid fa-floppy-disk mr-1"></i> Automatisch gespeichert');
        }

        function saveCustomNotes() {
            if (!currentSubject) return;
            writeText(NOTES_PREFIX + currentSubject, $('custom-notes-text').value);
            updateNotesMeta('<i class="fa-solid fa-check text-emerald-600 mr-1"></i> Gespeichert!');
        }

        function updateNotesMeta(msg) {
            $('notes-status-msg').innerHTML = msg;
            const words = ($('custom-notes-text').value.trim().match(/\S+/g) || []).length;
            $('notes-count').textContent = `${words} ${words === 1 ? 'Wort' : 'Wörter'}`;
        }

        function clearCustomNotes() {
            if (!currentSubject) return;
            if (!window.confirm(`Willst du deine ${SUBJECTS[currentSubject].name}-Notizen wirklich löschen?`)) return;
            try { localStorage.removeItem(NOTES_PREFIX + currentSubject); } catch (e) { /* ignorieren */ }
            $('custom-notes-text').value = '';
            updateNotesMeta('Gelöscht!');
        }

        // ==========================================
        // FORTSCHRITTS-CODE (sichern & wiederherstellen)
        // Aufbau: EDU-1-<Level je Fach …>-<Übungen je Fach …>-<Prüfzeichen>, Fächer in SUBJECT_ORDER-Reihenfolge.
        // Level-Zeichen: 0 = offen, sonst (Bestwert + 1) zur Basis 36. Übungen: Bitmaske zur Basis 36.
        // Ältere Codes mit weniger Fächern (z. B. ohne Mathe) bleiben gültig – fehlende Fächer werden nicht angefasst.
        // ==========================================
        const CODE_VERSION = '1';

        function codeChecksum(str) {
            let h = 7;
            for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 1296;
            return h.toString(36).toUpperCase().padStart(2, '0');
        }

        function buildProgressCode() {
            const levelParts = SUBJECT_ORDER.map(k => {
                const levels = SUBJECTS[k].levels || [];
                const p = userProgress[k];
                const s = levels.map(l => p.completed.includes(l.id) ? Math.min((+p.stars[l.id] || 0) + 1, 35).toString(36) : '0').join('');
                return s || 'X';
            });
            const exParts = SUBJECT_ORDER.map(k => {
                const list = SUBJECTS[k].exercises || [];
                const done = new Set(exDone[k] || []);
                let mask = 0;
                list.forEach((ex, i) => { if (done.has(ex.id) && i < 30) mask += Math.pow(2, i); });
                return mask.toString(36);
            });
            const payload = [CODE_VERSION, ...levelParts, ...exParts].join('-').toUpperCase();
            return `EDU-${payload}-${codeChecksum(payload)}`;
        }

        function parseProgressCode(raw) {
            const code = String(raw || '').trim().toUpperCase().replace(/\s+/g, '');
            const parts = code.split('-');
            const nSub = (parts.length - 3) / 2;
            if (!['EDU', 'EM8'].includes(parts[0]) || !Number.isInteger(nSub) || nSub < 3 || nSub > SUBJECT_ORDER.length) return { error: 'Das sieht nicht wie ein EduMaster-Code aus. Er beginnt mit „EDU-“.' };
            const payload = parts.slice(1, -1).join('-');
            if (codeChecksum(payload) !== parts[parts.length - 1]) return { error: 'Der Code ist unvollständig oder hat einen Tippfehler (Prüfzeichen stimmt nicht).' };
            if (parts[1] !== CODE_VERSION) return { error: 'Dieser Code stammt aus einer anderen Version.' };
            const progress = {};
            const done = {};
            SUBJECT_ORDER.forEach((k, si) => {
                if (si >= nSub) return; // Fach gab es beim Erstellen des Codes noch nicht
                const levels = SUBJECTS[k].levels || [];
                const chars = parts[2 + si] === 'X' ? '' : parts[2 + si];
                progress[k] = { completed: [], stars: {} };
                levels.forEach((l, i) => {
                    const v = i < chars.length ? parseInt(chars[i], 36) : 0;
                    if (v > 0) { progress[k].completed.push(l.id); progress[k].stars[l.id] = v - 1; }
                });
                const list = SUBJECTS[k].exercises || [];
                let mask = parseInt(parts[2 + nSub + si], 36) || 0;
                done[k] = [];
                list.forEach((ex, i) => { if (i < 30 && Math.floor(mask / Math.pow(2, i)) % 2 === 1) done[k].push(ex.id); });
            });
            return { progress, done };
        }

        function openCodeModal() {
            $('code-out').value = buildProgressCode();
            $('code-in').value = '';
            $('code-msg').innerHTML = '';
            const t = totalStats();
            $('code-summary').textContent = `${t.done} von ${t.n} Level · ${t.stars} Sterne`;
            $('code-modal').classList.remove('hidden');
            document.body.classList.add('modal-open');
        }

        function closeCodeModal() {
            $('code-modal').classList.add('hidden');
            if ($('level-modal').classList.contains('hidden')) document.body.classList.remove('modal-open');
        }

        function copyProgressCode(btn) {
            const code = $('code-out').value;
            const done = () => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Kopiert!';
                setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i> Kopieren'; }, 2000);
            };
            if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(code).then(done).catch(() => fallbackCopy(code, done));
            else fallbackCopy(code, done);
        }

        function restoreProgressCode() {
            const res = parseProgressCode($('code-in').value);
            if (res.error) {
                $('code-msg').innerHTML = `<div class="feedback bad !mt-0"><i class="fa-solid fa-circle-xmark"></i> ${res.error}</div>`;
                return;
            }
            if (!window.confirm('Fortschritt wiederherstellen? Dein aktueller Fortschritt (Sterne, Level, erledigte Übungen) wird dabei ersetzt.')) return;
            userProgress = Object.assign(loadProgress(), res.progress);
            exDone = Object.assign({}, exDone, res.done);
            saveProgress();
            writeJSON(EX_DONE_KEY, exDone);
            $('code-out').value = buildProgressCode();
            const t = totalStats();
            $('code-summary').textContent = `${t.done} von ${t.n} Level · ${t.stars} Sterne`;
            $('code-msg').innerHTML = `<div class="feedback ok !mt-0"><i class="fa-solid fa-circle-check"></i> Fortschritt wiederhergestellt!</div>`;
            if (currentSubject) {
                renderRoadmap();
                updateGlobalStats();
                if (activeTab === 'exercises') renderExercises();
            } else {
                renderDashboard();
            }
            updateHeaderStars();
            if (typeof confetti === 'function') confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 }, zIndex: 9999 });
        }

        // ==========================================
        // START
        // ==========================================
        document.addEventListener('keydown', e => {
            if (e.key !== 'Escape') return;
            if (!$('code-modal').classList.contains('hidden')) closeCodeModal();
            else if (!$('level-modal').classList.contains('hidden')) closeLevelModal();
        });

        if (window.Chart) {
            Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, sans-serif";
            Chart.defaults.color = '#475569';
        }

        migrateNotes();
        showDashboard();
