        // ==========================================
        // VISUELLES GEO-LABOR (5 TABS)
        // ==========================================
        function renderErdkundeLabor(subTabIdx = 0) {
            const container = document.getElementById('visuals-tab-content');
            const tabs = ["Bevölkerungspyramide", "Klimadiagramm Mumbai", "Kasten-Pyramide", "Altersstruktur", "Südasiens Daten"];

            let tabsHtml = tabs.map((t, idx) => `
                <button onclick="renderErdkundeLabor(${idx})" class="px-4 py-2 rounded-xl text-xs font-bold transition ${subTabIdx === idx ? 'bg-amber-600 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
                    ${t}
                </button>
            `).join('');

            container.innerHTML = `
                <div class="glass-card p-6 rounded-3xl space-y-6">
                    <div>
                        <span class="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Visuelles Geo-Labor</span>
                        <h2 class="text-2xl font-bold text-slate-800 mt-2">Diagramme & Grafiken für die Erdkunde-Klausur</h2>
                    </div>

                    <div class="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                        ${tabsHtml}
                    </div>

                    <div id="geo-labor-body" class="pt-2"></div>
                </div>
            `;

            const body = document.getElementById('geo-labor-body');
            if (subTabIdx === 0) {
                body.innerHTML = `
                    <div class="space-y-4">
                        <h4 class="font-bold text-slate-800 text-sm">Bevölkerungspyramiden im Vergleich</h4>
                        <div class="flex space-x-2 text-xs font-bold">
                            <button onclick="renderPyramid('indien2018')" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white">Indien 2018 (Dreieck)</button>
                            <button onclick="renderPyramid('de2018')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">Deutschland (Urne)</button>
                        </div>
                        <div class="h-64 relative"><canvas id="pyramidCanvas"></canvas></div>
                    </div>
                `;
                renderPyramid('indien2018');
            } else if (subTabIdx === 1) {
                body.innerHTML = `
                    <div class="space-y-4">
                        <h4 class="font-bold text-slate-800 text-sm">Klimadiagramm Mumbai (Tropischer Sommermonsun)</h4>
                        <div class="h-64 relative"><canvas id="klimaCanvas"></canvas></div>
                    </div>
                `;
                initKlimaChart();
            } else if (subTabIdx === 2) {
                body.innerHTML = `
                    <div class="space-y-4">
                        <h4 class="font-bold text-slate-800 text-sm">Das Kastensystem in Indien (Klicke eine Schicht an!)</h4>
                        <div class="max-w-md mx-auto space-y-2">
                            <div onclick="showKaste('Brahmanen', 'Priester & Gelehrte')" class="bg-amber-500 text-white font-bold p-3 text-center rounded-t-xl cursor-pointer text-xs">Brahmanen (Priester)</div>
                            <div onclick="showKaste('Kshatriyas', 'Krieger & Herrscher')" class="bg-amber-400 text-slate-900 font-bold p-3 text-center cursor-pointer text-xs">Kshatriyas (Krieger)</div>
                            <div onclick="showKaste('Vaishyas', 'Kaufleute & Bauern')" class="bg-amber-300 text-slate-900 font-bold p-3 text-center cursor-pointer text-xs">Vaishyas (Händler)</div>
                            <div onclick="showKaste('Shudras', 'Dienstboten & Arbeiter')" class="bg-amber-200 text-slate-900 font-bold p-3 text-center rounded-b-xl cursor-pointer text-xs">Shudras (Arbeiter)</div>
                            <div onclick="showKaste('Dalits', 'Kastenlose / Unberührbare')" class="bg-slate-700 text-white font-bold p-3 text-center rounded-xl cursor-pointer text-xs mt-3">Dalits (Kastenlose)</div>
                        </div>
                        <div id="kaste-out" class="p-4 bg-slate-50 rounded-xl border text-xs font-semibold text-slate-700">Klicke oben eine Schicht an!</div>
                    </div>
                `;
            } else if (subTabIdx === 3) {
                body.innerHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-xl border text-center">
                            <h5 class="font-bold text-xs mb-2">🇮🇳 Indien (Junge Bevölkerung)</h5>
                            <div class="h-44 relative"><canvas id="pieIndien"></canvas></div>
                        </div>
                        <div class="bg-white p-4 rounded-xl border text-center">
                            <h5 class="font-bold text-xs mb-2">🇩🇪 Deutschland (Alternde Gesellschaft)</h5>
                            <div class="h-44 relative"><canvas id="pieDE"></canvas></div>
                        </div>
                    </div>
                `;
                initPieCharts();
            } else if (subTabIdx === 4) {
                body.innerHTML = `
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs bg-white rounded-xl border border-slate-200">
                            <thead class="bg-slate-800 text-white">
                                <tr><th class="p-2.5">Land</th><th class="p-2.5">Einwohner (Mio.)</th><th class="p-2.5">Fläche (km²)</th></tr>
                            </thead>
                            <tbody class="divide-y text-slate-700 font-semibold">
                                <tr><td class="p-2.5 font-bold">🇮🇳 Indien</td><td class="p-2.5">1.430 Mio.</td><td class="p-2.5">3.287.263</td></tr>
                                <tr><td class="p-2.5 font-bold">🇵🇰 Pakistan</td><td class="p-2.5">240 Mio.</td><td class="p-2.5">881.913</td></tr>
                                <tr><td class="p-2.5 font-bold">🇧🇩 Bangladesch</td><td class="p-2.5">173 Mio.</td><td class="p-2.5">148.460</td></tr>
                            </tbody>
                        </table>
                    </div>
                `;
            }
        }

        function showKaste(title, desc) {
            document.getElementById('kaste-out').innerHTML = `<strong>${title}:</strong> ${desc}`;
        }

        function renderPyramid(type) {
            const ctx = document.getElementById('pyramidCanvas').getContext('2d');
            if (window.pyChart) window.pyChart.destroy();
            let dataM = (type === 'indien2018') ? [-30, -22, -12, -5, -2] : [-9, -12, -16, -15, -5];
            let dataF = (type === 'indien2018') ? [28, 21, 12, 6, 3] : [9, 12, 16, 15, 6];

            window.pyChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['0-19', '20-39', '40-59', '60-79', '80+'],
                    datasets: [
                        { label: 'Männer (%)', data: dataM, backgroundColor: '#3b82f6' },
                        { label: 'Frauen (%)', data: dataF, backgroundColor: '#ec4899' }
                    ]
                },
                options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false }
            });
        }

        function initKlimaChart() {
            const ctx = document.getElementById('klimaCanvas').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                    datasets: [
                        { type: 'bar', label: 'Regen (mm)', data: [15, 5, 5, 15, 125, 650, 870, 540, 320, 90, 15, 5], backgroundColor: '#0ea5e9' },
                        { type: 'line', label: 'Temp (°C)', data: [24, 24, 26, 28, 30, 29, 27, 27, 27, 28, 27, 25], borderColor: '#ef4444', fill: false }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        function initPieCharts() {
            new Chart(document.getElementById('pieIndien').getContext('2d'), {
                type: 'doughnut',
                data: { labels: ['0-14 J.', '15-64 J.', '65+ J.'], datasets: [{ data: [26, 67, 7], backgroundColor: ['#f59e0b', '#10b981', '#6366f1'] }] },
                options: { responsive: true, maintainAspectRatio: false }
            });
            new Chart(document.getElementById('pieDE').getContext('2d'), {
                type: 'doughnut',
                data: { labels: ['0-14 J.', '15-64 J.', '65+ J.'], datasets: [{ data: [14, 64, 22], backgroundColor: ['#f59e0b', '#10b981', '#6366f1'] }] },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        // ==========================================
        // INTERAKTIVER DIN 5008 BRIEF-TRAINER (FULL LETTER MODEL)
        // ==========================================
        function renderDeutschDinTrainer() {
            const container = document.getElementById('visuals-tab-content');
            container.innerHTML = `
                <div class="glass-card p-6 rounded-3xl space-y-6">
                    <div>
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Interaktiver Musterbrief</span>
                        <h2 class="text-2xl font-bold text-slate-800 mt-2">DIN 5008 Brief-Trainer: Klicke auf die Bausteine!</h2>
                        <p class="text-slate-600 text-sm">Der Brief unten ist wie in deiner Klassenarbeit aufgebaut. Klicke ein umrandetes Feld an, um die genauen Regeln, Normabstände und Formulierungstipps zu sehen!</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <!-- FULL LETTER DISPLAY WITH 12 CLICKABLE ZONES -->
                        <div class="lg:col-span-7 bg-white p-6 border-2 border-slate-300 rounded-3xl shadow-md font-mono-letter text-xs text-slate-800 space-y-4">
                            <!-- Zone 1: Absender -->
                            <div onclick="showDinZoneInfo(1)" class="zone-highlight p-3 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 1: Absenderdaten</span>
                                <div><strong>Philipp Schulz</strong><br>Musterstraße 12 • 22083 Hamburg<br>Telefon: 040 / 123 45 67 • E-Mail: philipp.schulz@email.de</div>
                            </div>

                            <!-- Zone 2: Empfänger -->
                            <div onclick="showDinZoneInfo(2)" class="zone-highlight p-3 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 2: Empfängerfeld (Fensterkuvert)</span>
                                <div>Super Car GmbH<br>z. Hd. Herrn Becker<br>Industriestraße 5<br>22041 Hamburg</div>
                            </div>

                            <!-- Zone 3: Ort & Datum -->
                            <div onclick="showDinZoneInfo(3)" class="zone-highlight text-right p-2 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 right-2">Baustein 3: Ort & Datum</span>
                                <div>Hamburg, 15. November 2026</div>
                            </div>

                            <!-- Zone 4: Betreffzeile -->
                            <div onclick="showDinZoneInfo(4)" class="zone-highlight p-2 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative font-bold text-slate-900">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 4: Betreffzeile (Ohne 'Betreff:')</span>
                                <div>Bewerbung um einen Ausbildungsplatz als Kraftfahrzeugmechatroniker zum 01.08.2025</div>
                            </div>

                            <!-- Zone 5: Anrede -->
                            <div onclick="showDinZoneInfo(5)" class="zone-highlight p-2 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 5: Anrede</span>
                                <div>Sehr geehrter Herr Becker,</div>
                            </div>

                            <!-- Zone 6 & 7 & 8: Einleitung & Hauptteil -->
                            <div onclick="showDinZoneInfo(6)" class="zone-highlight p-3 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative space-y-2">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Bausteine 6-8: Einleitung & 3 Kernfragen (Hauptteil)</span>
                                <p>mit großem Interesse habe ich Ihr Stellenangebot auf Azubiyo gelesen. Da mich moderne Fahrzeugtechnik begeistert, bewerbe ich mich bei Ihnen um eine Ausbildungsstelle.</p>
                                <p>Derzeit besuche ich die 8. Klasse der Stadtteilschule Hamburg. Meine Stärken liegen im Fach Technik. In meiner Freizeit warte ich eigenständig mein Mofa und konstruiere technische Modelle.</p>
                                <p>Die Super Car GmbH zeichnet sich durch erstklassige Ausbildungsqualität aus. Sehr gerne möchte ich meine Fähigkeiten in Ihr Werkstatt-Team einbringen.</p>
                            </div>

                            <!-- Zone 9: Schlusssatz -->
                            <div onclick="showDinZoneInfo(9)" class="zone-highlight p-2 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 9: Schlusssatz (Konjunktiv-Verbot!)</span>
                                <div>Über die Gelegenheit zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.</div>
                            </div>

                            <!-- Zone 10 & 11: Grußformel & Unterschrift -->
                            <div onclick="showDinZoneInfo(10)" class="zone-highlight p-3 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative space-y-2">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Bausteine 10-11: Grußformel & Unterschrift</span>
                                <div>Mit freundlichen Grüßen</div>
                                <div class="font-serif italic text-indigo-800 text-sm py-1">Philipp Schulz</div>
                                <div>Philipp Schulz</div>
                            </div>

                            <!-- Zone 12: Anlagenvermerk -->
                            <div onclick="showDinZoneInfo(12)" class="zone-highlight p-2 border-2 border-dashed border-indigo-400 bg-indigo-50/50 rounded-xl cursor-pointer hover:bg-indigo-100/70 relative font-bold text-slate-600">
                                <span class="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded absolute -top-2.5 left-2">Baustein 12: Anlagenvermerk</span>
                                <div>Anlagen</div>
                            </div>
                        </div>

                        <!-- INFO DETAIL BOX FOR CLICKED ZONE -->
                        <div id="din-zone-detail" class="lg:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-3xl space-y-4 shadow-sm">
                            <div class="flex items-center space-x-2 text-indigo-600">
                                <i class="fa-solid fa-circle-info text-lg"></i>
                                <h4 class="font-bold text-slate-800 text-sm">Detail-Info zum Baustein</h4>
                            </div>
                            <p class="text-xs text-slate-600">Klicke links auf ein Feld im Brief, um Norm-Abstände, Regeln und Dos & Don'ts nach DIN 5008 zu sehen!</p>
                        </div>
                    </div>
                </div>
            `;
            showDinZoneInfo(1);
        }

        function showDinZoneInfo(zoneNum) {
            const detailEl = document.getElementById('din-zone-detail');
            const data = {
                1: { title: "Baustein 1: Absenderdaten", rules: "Ganz oben am linken Briefrand. Enthält vollständigen Namen, Straße, PLZ, Ort, Telefonnummer und eine <strong>seriöse E-Mail-Adresse</strong>.", norm: "Oberer Rand: 2,5 cm. Linker Rand: 2,5 cm.", dos: "Vorname.Nachname@provider.de nutzen.", donts: "Fantasie-E-Mails wie 'partyqueen2009@web.de' verwenden." },
                2: { title: "Baustein 2: Anschrift des Empfängers", rules: "Exakt im Sichtfenster des Briefumschlags platziert. Enthält Firmenname, Ansprechpartner ('z. Hd. Herrn Becker'), Straße, PLZ und Ort.", norm: "Exakt 3 Leerzeilen unter den Absenderdaten.", dos: "Namen des Personalleiters immer korrekt schreiben!", donts: "Den Ansprechpartner weglassen." },
                3: { title: "Baustein 3: Ort und Datum", rules: "Steht IMMER rechtsbündig auf Höhe des Empfängerfeldes oder kurz darunter.", norm: "Format nach DIN: '15. November 2026' oder '2026-11-15'.", dos: "Ortsname mit Komma voranstellen ('Hamburg, 15...').", donts: "Platzhalter wie 'TT.MM.JJJJ' in der Abgabe stehen lassen." },
                4: { title: "Baustein 4: Betreffzeile", rules: "Gibt kurz und präzise den Grund des Schreibens und das Ausbildungsdatum an. Wird <strong>FETT</strong> gedruckt.", norm: "Exakt 2 Leerzeilen unter dem Datum.", dos: "Stellenbezeichnung & Ausbildungsbeginn nennen.", donts: "Das Wort 'Betreff:' davor schreiben (seit DIN 5008 entfallen!)." },
                5: { title: "Baustein 5: Anrede", rules: "Höfliche direkte Anrede der Kontaktperson. Auf die Anrede folgt IMMER ein Komma!", norm: "2 Leerzeilen unter der Betreffzeile.", dos: "'Sehr geehrte Frau X / Sehr geehrter Herr Y,'", donts: "Umgangssprachliche Anreden wie 'Hallo Herr X' oder 'Hey'." },
                6: { title: "Bausteine 6-8: Hauptteil & 3 Kernfragen", rules: "Das Herzstück des Briefes. Das erste Wort nach der Anrede wird KLEIN geschrieben.<br>Beantwortet 3 Fragen: 1. Warum Beruf? 2. Warum ICH? (Stärken belegen) 3. Warum DIESE Firma?", norm: "1 Leerzeile zwischen den Absätzen.", dos: "Stärken mit Hobbys/Praktikum begründen (Mofa, Fischertechnik).", donts: "Floskeln aufzählen ohne Belege." },
                9: { title: "Baustein 9: Schlusssatz", rules: "Drückt die Freude auf das persönliche Gespräch selbstbewusst aus.", norm: "Im Präsens formulieren.", dos: "'Über eine Einladung freue ich mich sehr.'", donts: "Konjunktiv nutzen: 'Ich würde mich freuen' (wirkt unsicher!)." },
                10: { title: "Bausteine 10-11: Grußformel & Unterschrift", rules: "Förmlicher Gruß gefolgt von der handschriftlichen Unterschrift und dem gedruckten Namen.", norm: "KEIN Komma nach 'Mit freundlichen Grüßen'!", dos: "Mit blauem oder schwarzem Stift unterschreiben.", donts: "Ein Komma nach der Grußformel setzen!" },
                12: { title: "Baustein 12: Anlagenvermerk", rules: "Das Wort 'Anlagen' steht ganz unten links als Übersicht für Lebenslauf & Zeugnisse.", norm: "Exakt 1 Leerzeile unter dem gedruckten Namen.", dos: "Einfach fett oder normal 'Anlagen' schreiben.", donts: "Vergessen, auf Anlagen hinzuweisen." }
            };

            const item = data[zoneNum];
            detailEl.innerHTML = `
                <div class="space-y-3">
                    <span class="bg-indigo-100 text-indigo-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">Klausur-Regel DIN 5008</span>
                    <h4 class="font-bold text-slate-800 text-base">${item.title}</h4>
                    <p class="text-xs text-slate-700 leading-relaxed">${item.rules}</p>
                    
                    <div class="bg-white p-3 rounded-2xl border border-slate-200 text-xs space-y-1">
                        <strong class="text-indigo-900 block">📐 Norm-Abstand:</strong>
                        <span class="text-slate-600">${item.norm}</span>
                    </div>

                    <div class="grid grid-cols-1 gap-2 pt-1 text-xs">
                        <div class="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-emerald-950">
                            <strong>✅ So ist es richtig:</strong> ${item.dos}
                        </div>
                        <div class="bg-rose-50 p-2.5 rounded-xl border border-rose-200 text-rose-950">
                            <strong>❌ Typischer Fehler:</strong> ${item.donts}
                        </div>
                    </div>
                </div>
            `;
        }

        // ==========================================
        // UNTERLAGEN-ANALYSE BLOCK (EXCLUSIVELY FOR DEUTSCH)
        // ==========================================
        function renderAnalysisTab(tabKey) {
            const body = document.getElementById('analysis-tab-body');
            
            // Highlight Subtabs
            ['elias', 'magdalena', 'philipp', 'lena', 'normen'].forEach(k => {
                const btn = document.getElementById('atab-' + k);
                if (btn) {
                    if (k === tabKey) {
                        btn.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-indigo-600 text-white shadow";
                    } else {
                        btn.className = "px-4 py-2 rounded-xl text-xs font-bold transition bg-slate-100 text-slate-700 hover:bg-slate-200";
                    }
                }
            });

            if (tabKey === 'elias') {
                body.innerHTML = `
                    <div class="space-y-5">
                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-2xl">
                            <h4 class="font-bold text-rose-950 text-sm">❌ Negativbeispiel 1: Analyse Anschreiben Elias Klein</h4>
                            <p class="text-xs text-rose-800 mt-1">Elias hat in seiner Bewerbung fast alle Regeln verletzt. Hier ist die detaillierte Fehler-Aufdeckung für deine Klausur:</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-rose-600 block text-sm">1. Unangemessene Gehaltsforderung:</strong>
                                <p class="text-slate-700">Elias schreibt in ein Schüler-Anschreiben: <em>'Mein Wunschgehalt liegt bei 26.000 € plus Firmenwagen.'</em></p>
                                <span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold block">Fehler: Schüler nennen NIE Gehaltswünsche!</span>
                            </div>

                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-rose-600 block text-sm">2. Saloppe Anrede & Grüße:</strong>
                                <p class="text-slate-700">Er schreibt <em>'Hey Herr Weiß'</em> und schließt mit <em>'Tschüssi'</em>.</p>
                                <span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold block">Fehler: Absolute umgangssprachliche No-Gos.</span>
                            </div>

                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-rose-600 block text-sm">3. Datums-Platzhalter vergessen:</strong>
                                <p class="text-slate-700">Im Kopf des Briefes steht noch <em>'Hamburg, TT.MM.JJJJ'</em>.</p>
                                <span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold block">Fehler: Vorlage nicht ausgefüllt.</span>
                            </div>

                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-rose-600 block text-sm">4. Fehlende Unterschrift & Konjunktiv:</strong>
                                <p class="text-slate-700">Keine handschriftliche Unterschrift und Satz: <em>'Ich würde mich freuen.'</em></p>
                                <span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold block">Fehler: Rechtsungültig & unsicher.</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (tabKey === 'magdalena') {
                body.innerHTML = `
                    <div class="space-y-5">
                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-2xl">
                            <h4 class="font-bold text-rose-950 text-sm">❌ Negativbeispiel 2: Analyse Lebenslauf Magdalena Klein</h4>
                            <p class="text-xs text-rose-800 mt-1">Magdalenas Lebenslauf enthält klassische Fettnäpfchen, die heute streng untersagt sind:</p>
                        </div>

                        <div class="space-y-3 text-xs">
                            <div class="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
                                <div class="bg-rose-100 text-rose-700 p-2 rounded-xl font-bold">1</div>
                                <div>
                                    <strong class="text-slate-800 block">Veraltete Elternberufe genannt:</strong>
                                    <p class="text-slate-600">Magdalena gibt an: <em>'Vater: Karl Klein, Bäckermeister / Mutter: Hausfrau'</em>. Das gehört seit Jahren NICHT mehr in den Lebenslauf!</p>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
                                <div class="bg-rose-100 text-rose-700 p-2 rounded-xl font-bold">2</div>
                                <div>
                                    <strong class="text-slate-800 block">Unseriöse E-Mail & Urlaubs-Selfie:</strong>
                                    <p class="text-slate-600">Verwendung von <code>süße.schnecke@oal.com</code> und einem unscharfen Party-Foto mit Sonnenbrille.</p>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
                                <div class="bg-rose-100 text-rose-700 p-2 rounded-xl font-bold">3</div>
                                <div>
                                    <strong class="text-slate-800 block">Irrelevante Hobbys ohne Nutzen:</strong>
                                    <p class="text-slate-600">Angabe von <em>'Sims 4 zocken, auf TikTok scrollen, Shoppen'</em> signalisiert fehlende Einsatzbereitschaft.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (tabKey === 'philipp') {
                body.innerHTML = `
                    <div class="space-y-5">
                        <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-2xl">
                            <h4 class="font-bold text-emerald-950 text-sm">✅ Vorbild: Analyse Anschreiben Philipp Schulz</h4>
                            <p class="text-xs text-emerald-800 mt-1">Philipp macht in seiner Bewerbung zum Kraftfahrzeugmechatroniker alles richtig. Seine Erfolgsfaktoren:</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-emerald-700 block font-bold">Präziser Stellenbezug:</strong>
                                <p class="text-slate-600">Nennt genau das Portal (Azubiyo / aubiplus.de) und das exakte Startdatum (01.08.2025).</p>
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-emerald-700 block font-bold">Stärken durch Hobbys belegt:</strong>
                                <p class="text-slate-600">Beweist technisches Geschick durch Wartung des eigenen Mofas und Bau von Fischertechnik-Modellen.</p>
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                                <strong class="text-emerald-700 block font-bold">Schulprojekte eingebunden:</strong>
                                <p class="text-slate-600">Erwähnt die erfolgreiche Teilnahme am Bobbycar-Seifenkisten-Wettbewerb der Schule.</p>
                            </div>
                        </div>
                    </div>
                `;
            } else if (tabKey === 'lena') {
                body.innerHTML = `
                    <div class="space-y-5">
                        <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-2xl">
                            <h4 class="font-bold text-indigo-950 text-sm">🌟 Praxisbeispiel: Lena Meier (Medizin & Pflege)</h4>
                            <p class="text-xs text-indigo-800 mt-1">Analyse des Anschreibens für ein Schülerpraktikum in der Kinder-Onkologie:</p>
                        </div>

                        <div class="bg-white p-4 rounded-2xl border border-slate-200 text-xs space-y-3">
                            <strong class="text-slate-800 block text-sm">Warum Lenas Bewerbung überzeugt:</strong>
                            <ul class="list-disc pl-5 space-y-1 text-slate-700">
                                <li><strong>Ehrenamtlicher Beleg:</strong> Lena engagiert sich im Jugend-Rotkreuz und kennt erste Erste-Hilfe-Maßnahmen.</li>
                                <li><strong>Verantwortungsbewusstsein:</strong> Sie hebt ihr Verständnis für strenge Hygienevorschriften und Fingerspitzengefühl hervor.</li>
                                <li><strong>Perfekte DIN 5008 Form:</strong> Einwandfreie Einhaltung aller 12 Bausteine und Ränder.</li>
                            </ul>
                        </div>
                    </div>
                `;
            } else if (tabKey === 'normen') {
                body.innerHTML = `
                    <div class="space-y-5">
                        <div class="bg-slate-800 text-white p-5 rounded-3xl space-y-2">
                            <h4 class="font-bold text-base">📐 DIN 5008 Normen-Matrix auf einen Blick</h4>
                            <p class="text-xs text-slate-300">Merke dir diese Zahlen für deine Deutsch-Klausur!</p>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
                            <div class="bg-white p-4 rounded-2xl border border-slate-200">
                                <span class="text-slate-400 block font-bold">Linker Rand</span>
                                <strong class="text-indigo-600 text-lg block mt-1">2,5 cm</strong>
                                <span class="text-[10px] text-slate-500">Platz für Lochung</span>
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-200">
                                <span class="text-slate-400 block font-bold">Rechter Rand</span>
                                <strong class="text-indigo-600 text-lg block mt-1">2,0 cm</strong>
                                <span class="text-[10px] text-slate-500">Sauberer Rahmen</span>
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-200">
                                <span class="text-slate-400 block font-bold">Absender -> Empfänger</span>
                                <strong class="text-indigo-600 text-lg block mt-1">3 Leerzeilen</strong>
                                <span class="text-[10px] text-slate-500">Fensterkuvert</span>
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-slate-200">
                                <span class="text-slate-400 block font-bold">Datum -> Betreff</span>
                                <strong class="text-indigo-600 text-lg block mt-1">2 Leerzeilen</strong>
                                <span class="text-[10px] text-slate-500">Optische Trennung</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
