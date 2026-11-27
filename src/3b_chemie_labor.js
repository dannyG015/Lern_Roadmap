
        // ==========================================
        // CHEMIE: TEILCHENBILDER (chemische Lupe) – Symbole wie im Buch
        // ==========================================
        function seededRandom(seed) {
            let a = seed >>> 0;
            return function () {
                a = (a + 0x6D2B79F5) >>> 0;
                let t = a;
                t = Math.imul(t ^ (t >>> 15), t | 1);
                t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
                return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
            };
        }

        const PARTICLE_INFO = {
            wasser: { name: 'Wasser-Teilchen' },
            zucker: { name: 'Zucker-Teilchen' },
            aroma: { name: 'Aromastoff-Teilchen' },
            eisen: { name: 'Eisen-Teilchen' },
            sauerstoff: { name: 'Sauerstoff-Teilchen' },
            stickstoff: { name: 'Stickstoff-Teilchen' },
            tusche: { name: 'Tusche-Teilchen' },
            fett: { name: 'Fett-Teilchen' },
            russ: { name: 'Ruß-Teilchen' },
            kupfer: { name: 'Kupfer-Teilchen' },
            zink: { name: 'Zink-Teilchen' },
            kmno4: { name: 'Kaliumpermanganat-Teilchen' },
            gewuerz1: { name: 'Gewürz A' },
            gewuerz2: { name: 'Gewürz B' },
            gewuerz3: { name: 'Gewürz C' }
        };

        function polyPoints(cx, cy, r, n, rotDeg) {
            const pts = [];
            for (let i = 0; i < n; i++) {
                const a = (rotDeg + i * 360 / n) * Math.PI / 180;
                pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1));
            }
            return pts.join(' ');
        }

        // Zeichnet ein Teilchen als SVG-Element
        function particle(type, x, y, s, rot) {
            rot = rot || 0;
            const tr = `transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"`;
            switch (type) {
                case 'wasser': return `<polygon points="${polyPoints(x, y, s * 0.62, 3, -90)}" fill="#d6edf2" stroke="#6b97a3" stroke-width="1.1" stroke-linejoin="round" ${tr}/>`;
                case 'zucker': return `<rect x="${(x - s * 0.62).toFixed(1)}" y="${(y - s * 0.2).toFixed(1)}" width="${(s * 1.24).toFixed(1)}" height="${(s * 0.4).toFixed(1)}" rx="1.5" fill="#f4cd4f" stroke="#b28d1b" stroke-width="1" ${tr}/>`;
                case 'fett': return `<rect x="${(x - s * 0.42).toFixed(1)}" y="${(y - s * 0.24).toFixed(1)}" width="${(s * 0.84).toFixed(1)}" height="${(s * 0.48).toFixed(1)}" rx="1.5" fill="#f2cf55" stroke="#b5921f" stroke-width="1" ${tr}/>`;
                case 'aroma': return `<polygon points="${polyPoints(x, y, s * 0.5, 8, 22.5)}" fill="#ecc86f" stroke="#a5822b" stroke-width="1"/>`;
                case 'kmno4': return `<polygon points="${polyPoints(x, y, s * 0.5, 8, 22.5)}" fill="#ec5b92" stroke="#b02f68" stroke-width="1"/>`;
                case 'eisen': return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(s * 0.48).toFixed(1)}" fill="url(#gEisen)" stroke="#6b7280" stroke-width="0.8"/>`;
                case 'kupfer': return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(s * 0.48).toFixed(1)}" fill="url(#gKupfer)" stroke="#8a4a36" stroke-width="0.8"/>`;
                case 'zink': return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(s * 0.48).toFixed(1)}" fill="url(#gZink)" stroke="#8b97a1" stroke-width="0.8"/>`;
                case 'sauerstoff': return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(s * 0.55).toFixed(1)}" ry="${(s * 0.32).toFixed(1)}" fill="#e14b4b" stroke="#a52a2a" stroke-width="0.8" ${tr}/>`;
                case 'stickstoff': return `<polygon points="${polyPoints(x, y, s * 0.55, 4, 0)}" fill="#b9d3df" stroke="#5f8496" stroke-width="1" ${tr}/>`;
                case 'tusche': return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(s * 0.5).toFixed(1)}" ry="${(s * 0.36).toFixed(1)}" fill="#3f9a4a" stroke="#256b2f" stroke-width="0.8"/>`;
                case 'russ': return `<polygon points="${polyPoints(x, y, s * 0.55, 6, 30)}" fill="#a3a8ad" stroke="#5f6469" stroke-width="1"/>`;
                case 'gewuerz1': return `<polygon points="${polyPoints(x, y, s * 0.5, 5, -90)}" fill="#e7d9b0" stroke="#9c8a52" stroke-width="1"/>`;
                case 'gewuerz2': return `<rect x="${(x - s * 0.12).toFixed(1)}" y="${(y - s * 0.5).toFixed(1)}" width="${(s * 0.24).toFixed(1)}" height="${(s).toFixed(1)}" rx="1" fill="#c9ccd0" stroke="#7d8287" stroke-width="0.8"/>`;
                case 'gewuerz3': return `<polygon points="${polyPoints(x, y, s * 0.5, 8, 22.5)}" fill="#6f7479" stroke="#3f4448" stroke-width="1"/>`;
                default: return '';
            }
        }

        const LUPE_R = 90;
        function insideLupe(x, y, pad) { return Math.hypot(x - 100, y - 100) < LUPE_R - (pad || 6); }

        // dicht gepackte, ungeordnete Flüssigkeit; skip(x,y) blendet Bereiche aus
        function denseFill(rng, type, s, gap, skip) {
            let out = '';
            for (let y = 14; y < 190; y += gap) {
                for (let x = 14; x < 190; x += gap) {
                    const px = x + (rng() - 0.5) * gap * 0.55;
                    const py = y + (rng() - 0.5) * gap * 0.55;
                    if (!insideLupe(px, py, 8) || (skip && skip(px, py))) continue;
                    out += particle(type, px, py, s, rng() * 360);
                }
            }
            return out;
        }
        function latticeFill(type, s, gap, x0, y0, x1, y1, offsetRows) {
            let out = '';
            let row = 0;
            for (let y = y0; y <= y1; y += gap * 0.88) {
                const off = offsetRows && row % 2 ? gap / 2 : 0;
                for (let x = x0 + off; x <= x1; x += gap) {
                    if (insideLupe(x, y, 8)) out += particle(type, x, y, s, 0);
                }
                row++;
            }
            return out;
        }
        function scatterFill(rng, items, minDist) {
            const placed = [];
            let out = '';
            items.forEach(type => {
                for (let tries = 0; tries < 200; tries++) {
                    const x = 20 + rng() * 160, y = 20 + rng() * 160;
                    if (!insideLupe(x, y, 14)) continue;
                    if (placed.some(p => Math.hypot(p.x - x, p.y - y) < minDist)) continue;
                    placed.push({ x, y });
                    out += particle(type, x, y, 15, rng() * 360);
                    break;
                }
            });
            return { svg: out, placed };
        }
        function clusterPacked(type, cx, cy, cols, rows, gap) {
            let out = '';
            for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
                out += particle(type, cx + (c - (cols - 1) / 2) * gap + (r % 2 ? gap / 2 : 0), cy + (r - (rows - 1) / 2) * gap * 0.86, gap * 0.95, 0);
            }
            return out;
        }
        function clusterLoose(rng, type, cx, cy, radius, n, s) {
            let out = '';
            for (let i = 0; i < n; i++) {
                const a = rng() * Math.PI * 2, d = Math.sqrt(rng()) * radius;
                out += particle(type, cx + Math.cos(a) * d, cy + Math.sin(a) * d, s, rng() * 360);
            }
            return out;
        }
        function arrow(x, y, dx, dy) {
            return `<line x1="${x}" y1="${y}" x2="${x + dx}" y2="${y + dy}" stroke="#475569" stroke-width="1.4" marker-end="url(#mArrow)"/>`;
        }

        const LUPE_KINDS = {
            fest: { title: 'fest (s)', legend: ['wasser'] },
            fluessig: { title: 'flüssig (l)', legend: ['wasser'] },
            gas: { title: 'gasförmig (g)', legend: ['wasser'] },
            reinstoff: { title: 'Reinstoff: Zucker', legend: ['zucker'] },
            loesung: { title: 'Zuckerlösung', legend: ['wasser', 'zucker'] },
            tee: { title: 'Lösung: Tee', legend: ['wasser', 'aroma'] },
            suspension: { title: 'Suspension: Wasserfarbe', legend: ['wasser', 'tusche'] },
            emulsion: { title: 'Emulsion: Milch', legend: ['wasser', 'fett'] },
            nebel: { title: 'Nebel', legend: ['wasser', 'sauerstoff', 'stickstoff'] },
            rauch: { title: 'Rauch', legend: ['russ', 'sauerstoff', 'stickstoff'] },
            gemenge: { title: 'Gemenge: Würzmischung', legend: ['gewuerz1', 'gewuerz2', 'gewuerz3'] },
            legierung: { title: 'Legierung: Messing', legend: ['kupfer', 'zink'] },
            gasgemisch: { title: 'Gasgemisch: Luft', legend: ['sauerstoff', 'stickstoff'] },
            kmno4_1: { title: '1 · Kristall im Wasser', legend: ['wasser', 'kmno4'] },
            kmno4_2: { title: '2 · Teilchen werden herausgestoßen', legend: ['wasser', 'kmno4'] },
            kmno4_3: { title: '3 · vollständig gelöst', legend: ['wasser', 'kmno4'] }
        };

        function lupeSVG(kind, seed) {
            const rng = seededRandom(seed || (kind.length * 977 + 13));
            let body = '';
            switch (kind) {
                case 'fest': body = latticeFill('wasser', 17, 18, 16, 18, 184, 184, true); break;
                case 'fluessig': body = denseFill(rng, 'wasser', 16, 17); break;
                case 'gas': {
                    const pts = [[60, 62, 14, 6], [132, 54, -10, 12], [96, 108, 12, -10], [52, 140, 10, 10], [146, 136, -12, -6], [110, 160, 14, 2]];
                    pts.forEach(p => { body += particle('wasser', p[0], p[1], 17, rng() * 360) + arrow(p[0] + p[2] * 0.6, p[1] + p[3] * 0.6, p[2], p[3]); });
                    break;
                }
                case 'reinstoff': body = latticeFill('zucker', 19, 21, 14, 16, 186, 186, true); break;
                case 'loesung':
                case 'tee': {
                    const solute = kind === 'tee' ? 'aroma' : 'zucker';
                    const spots = [[62, 58], [128, 50], [96, 92], [48, 112], [146, 104], [84, 140], [124, 150], [66, 168], [150, 72], [104, 64]];
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => spots.some(p => Math.hypot(p[0] - x, p[1] - y) < 11));
                    spots.forEach(p => { body += particle(solute, p[0], p[1], 18, rng() * 360); });
                    break;
                }
                case 'suspension': {
                    const cl = [[70, 66], [136, 92], [82, 140]];
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => cl.some(c => Math.hypot(c[0] - x, c[1] - y) < 27));
                    cl.forEach(c => { body += clusterPacked('tusche', c[0], c[1], 4, 4, 11); });
                    break;
                }
                case 'emulsion': {
                    const cl = [[72, 70, 26], [138, 100, 24], [86, 146, 22]];
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => cl.some(c => Math.hypot(c[0] - x, c[1] - y) < c[2] + 4));
                    cl.forEach(c => { body += clusterLoose(rng, 'fett', c[0], c[1], c[2], 18, 13); });
                    break;
                }
                case 'nebel': {
                    const drops = [[78, 78], [130, 128]];
                    drops.forEach(d => { body += clusterLoose(rng, 'wasser', d[0], d[1], 17, 12, 13); });
                    const items = ['stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff'];
                    // Gas-Teilchen nicht in die Tröpfchen setzen
                    const rng2 = seededRandom(4242);
                    const placed = [];
                    items.forEach(t => {
                        for (let k = 0; k < 300; k++) {
                            const x = 22 + rng2() * 156, y = 22 + rng2() * 156;
                            if (!insideLupe(x, y, 14) || drops.some(d => Math.hypot(d[0] - x, d[1] - y) < 30) || placed.some(p => Math.hypot(p.x - x, p.y - y) < 26)) continue;
                            placed.push({ x, y });
                            body += particle(t, x, y, 15, rng2() * 360);
                            break;
                        }
                    });
                    break;
                }
                case 'rauch': {
                    body += clusterPacked('russ', 96, 96, 3, 3, 15);
                    const items = ['stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff'];
                    const rng2 = seededRandom(777);
                    const placed = [];
                    items.forEach(t => {
                        for (let k = 0; k < 300; k++) {
                            const x = 22 + rng2() * 156, y = 22 + rng2() * 156;
                            if (!insideLupe(x, y, 14) || Math.hypot(96 - x, 96 - y) < 40 || placed.some(p => Math.hypot(p.x - x, p.y - y) < 26)) continue;
                            placed.push({ x, y });
                            body += particle(t, x, y, 15, rng2() * 360);
                            break;
                        }
                    });
                    break;
                }
                case 'gemenge': {
                    for (let y = 16; y < 190; y += 12) for (let x = 14; x < 190; x += 13) {
                        const xx = x + (Math.floor(y / 12) % 2 ? 6 : 0);
                        if (!insideLupe(xx, y, 8)) continue;
                        const region = (xx > 112 && y < 110) ? 'gewuerz2' : (xx > 100 && y >= 110) ? 'gewuerz1' : 'gewuerz3';
                        body += particle(region, xx, y, region === 'gewuerz2' ? 12 : 12, 0);
                    }
                    break;
                }
                case 'legierung': {
                    const rngL = seededRandom(99);
                    let row = 0;
                    for (let y = 14; y < 190; y += 15.5) {
                        const off = row % 2 ? 9 : 0;
                        for (let x = 12 + off; x < 192; x += 18) {
                            if (!insideLupe(x, y, 7)) continue;
                            body += particle(rngL() < 0.28 ? 'zink' : 'kupfer', x, y, 17, 0);
                        }
                        row++;
                    }
                    break;
                }
                case 'gasgemisch': {
                    const items = ['stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'sauerstoff', 'stickstoff', 'stickstoff', 'stickstoff', 'stickstoff'];
                    body = scatterFill(rng, items, 30).svg;
                    break;
                }
                case 'kmno4_1': {
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => y > 112);
                    body += latticeFill('kmno4', 15, 16, 14, 122, 186, 190, true);
                    break;
                }
                case 'kmno4_2': {
                    const free = [[70, 60], [120, 46], [150, 80], [94, 88], [52, 98], [138, 112]];
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => (y > 134 && Math.abs(x - 100) < 58) || free.some(p => Math.hypot(p[0] - x, p[1] - y) < 10));
                    body += latticeFill('kmno4', 15, 16, 46, 142, 154, 190, true);
                    free.forEach(p => { body += particle('kmno4', p[0], p[1], 15, 0); });
                    break;
                }
                case 'kmno4_3': {
                    const free = [[60, 52], [118, 40], [152, 70], [92, 80], [44, 96], [136, 104], [78, 120], [162, 128], [110, 140], [56, 150], [130, 168], [90, 170], [100, 108], [150, 154]];
                    body = denseFill(rng, 'wasser', 15, 17, (x, y) => free.some(p => Math.hypot(p[0] - x, p[1] - y) < 10));
                    free.forEach(p => { body += particle('kmno4', p[0], p[1], 15, 0); });
                    break;
                }
            }
            return uniquifySVG(`
                <svg viewBox="0 0 200 200" class="w-full h-auto" role="img" aria-label="Teilchenbild: ${LUPE_KINDS[kind] ? LUPE_KINDS[kind].title : kind}">
                    <defs>
                        <clipPath id="clip-${kind}"><circle cx="100" cy="100" r="${LUPE_R}"/></clipPath>
                        <radialGradient id="gEisen" cx="35%" cy="35%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#9ca3af"/></radialGradient>
                        <radialGradient id="gKupfer" cx="35%" cy="35%"><stop offset="0%" stop-color="#f3c1ad"/><stop offset="100%" stop-color="#b35f45"/></radialGradient>
                        <radialGradient id="gZink" cx="35%" cy="35%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#b7c1c9"/></radialGradient>
                        <marker id="mArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
                    </defs>
                    <circle cx="100" cy="100" r="${LUPE_R}" fill="#ffffff"/>
                    <g clip-path="url(#clip-${kind})">${body}</g>
                    <circle cx="100" cy="100" r="${LUPE_R}" fill="none" stroke="#d9826b" stroke-width="4"/>
                </svg>
            `);
        }

        // Jede Grafik bekommt eigene IDs (sonst stören sich mehrere SVGs auf einer Seite)
        let svgUid = 0;
        function uniquifySVG(svg) {
            const u = ++svgUid;
            return svg.replace(/(id="|url\(#)(gEisen|gKupfer|gZink|mArrow|clip-[a-z0-9_]+)/g, (m, pre, id) => pre + id + '-' + u);
        }

        function legendHTML(types) {
            return `<div class="flex flex-wrap gap-2">${types.map(t => `
                <span class="inline-flex items-center gap-1.5 bg-white/80 border border-slate-200 rounded-full pl-1 pr-2.5 py-1 text-[11px] font-bold text-slate-600">
                    ${uniquifySVG(`<svg viewBox="0 0 24 24" width="20" height="20"><defs><radialGradient id="gEisen" cx="35%" cy="35%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#9ca3af"/></radialGradient><radialGradient id="gKupfer" cx="35%" cy="35%"><stop offset="0%" stop-color="#f3c1ad"/><stop offset="100%" stop-color="#b35f45"/></radialGradient><radialGradient id="gZink" cx="35%" cy="35%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#b7c1c9"/></radialGradient></defs>${particle(t, 12, 12, 16, 0)}</svg>`)}
                    ${PARTICLE_INFO[t] ? PARTICLE_INFO[t].name : t}
                </span>`).join('')}</div>`;
        }

        function lupeFigure(kind, small) {
            const k = LUPE_KINDS[kind] || { title: kind, legend: [] };
            return `
                <figure class="panel p-3 text-center">
                    <div class="${small ? 'max-w-[150px]' : 'max-w-[220px]'} mx-auto">${lupeSVG(kind)}</div>
                    <figcaption class="text-xs font-extrabold text-slate-700 mt-2">${k.title}</figcaption>
                </figure>
            `;
        }

        // ==========================================
        // GHS-PIKTOGRAMME (vereinfachte Nachzeichnung)
        // ==========================================
        const GHS_DATA = [
            { code: 'GHS01', name: 'Explodierende Bombe', mean: 'explosiv', detail: 'Der Stoff kann explodieren, z. B. durch Funken, Reibung, Schlag oder Hitze.', schutz: 'Von Zündquellen fernhalten, nicht schlagen oder reiben.', buch: 'Kommt in deinen Praktika nicht vor.' },
            { code: 'GHS02', name: 'Flamme', mean: 'entzündbar', detail: 'Der Stoff (oder sein Dampf) kann sich leicht entzünden.', schutz: 'Von Flammen, Funken und heißen Oberflächen fernhalten (P210).', buch: 'Ethanol, Aceton, Isopropanol, Waschbenzin (Praktikum „Der Fleck muss weg“).' },
            { code: 'GHS03', name: 'Flamme über einem Kreis', mean: 'brandfördernd (oxidierend)', detail: 'Der Stoff kann einen Brand verursachen oder verstärken.', schutz: 'Von brennbaren Stoffen fernhalten.', buch: 'Kommt in deinen Praktika nicht vor (Beispiel: Sauerstoff-Gasflasche).' },
            { code: 'GHS04', name: 'Gasflasche', mean: 'Gas unter Druck', detail: 'Enthält Gas unter Druck; kann bei Erwärmung explodieren.', schutz: 'Vor Hitze und Sonnenlicht schützen.', buch: 'Kommt in deinen Praktika nicht vor (Beispiel: Gasflaschen).' },
            { code: 'GHS05', name: 'Ätzwirkung', mean: 'ätzend', detail: 'Kann Haut und Augen schwer schädigen und Metalle angreifen.', schutz: 'Schutzbrille und ggf. Handschuhe tragen (P280).', buch: 'Weinsäure (Brausepulver), Zinkchlorid („Vergolden“ einer Münze).' },
            { code: 'GHS06', name: 'Totenkopf', mean: 'akut giftig', detail: 'Schon kleine Mengen können zu schweren Vergiftungen oder zum Tod führen.', schutz: 'Nicht einatmen, nicht verschlucken, Hautkontakt vermeiden.', buch: 'Kommt in deinen Praktika nicht vor.' },
            { code: 'GHS07', name: 'Ausrufezeichen', mean: 'gesundheitsschädlich / reizend', detail: 'Kann z. B. Haut oder Augen reizen oder beim Verschlucken schaden.', schutz: 'Schutzbrille tragen, Hautkontakt vermeiden.', buch: 'Citronensäure, Azorubin, Chromalaun, Zinkchlorid, Ethanol, Aceton.' },
            { code: 'GHS08', name: 'Gesundheitsgefahr', mean: 'schwere Gesundheitsschäden', detail: 'Kann schwere oder langfristige Gesundheitsschäden verursachen (z. B. an Lunge oder Organen).', schutz: 'Nicht einatmen, nicht verschlucken.', buch: 'Waschbenzin.' },
            { code: 'GHS09', name: 'Umwelt', mean: 'umweltgefährlich (Gewässer)', detail: 'Giftig für Wasserorganismen wie Fische und Pflanzen.', schutz: 'Nie in den Ausguss – in den Sammelbehälter.', buch: 'Zinkchlorid, Waschbenzin.' }
        ];

        function ghsSVG(code, size) {
            const sym = {
                GHS01: '<circle cx="44" cy="60" r="11" fill="#111"/><path d="M50 50 L56 44" stroke="#111" stroke-width="3"/><g stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M62 38 L68 30"/><path d="M60 34 L60 26"/><path d="M65 42 L73 40"/><path d="M57 30 L52 25"/><path d="M68 47 L74 50"/></g><g fill="#111"><circle cx="30" cy="44" r="2.5"/><circle cx="62" cy="68" r="2.5"/><circle cx="36" cy="74" r="2"/></g>',
                GHS02: '<path d="M50 28 C59 38 65 45 63 56 C61 65 56 69 50 69 C43 69 37 64 37 56 C37 49 42 45 44 39 C46 45 48 47 50 48 C51 42 48 35 50 28 Z" fill="#111"/><rect x="34" y="71" width="32" height="4" fill="#111"/>',
                GHS03: '<path d="M50 24 C56 31 60 36 58 43 C57 48 54 50 50 50 C46 50 42 47 42 43 C42 38 45 35 46 31 C48 35 49 36 50 37 C51 33 49 29 50 24 Z" fill="#111"/><circle cx="50" cy="61" r="9" fill="none" stroke="#111" stroke-width="4"/><rect x="34" y="73" width="32" height="4" fill="#111"/>',
                GHS04: '<rect x="28" y="47" width="38" height="18" rx="9" fill="#111"/><rect x="65" y="51" width="7" height="10" rx="2" fill="#111"/><rect x="72" y="49" width="4" height="14" rx="1" fill="#111"/>',
                GHS05: '<g fill="#111"><rect x="33" y="27" width="6" height="16" rx="2" transform="rotate(-25 36 35)"/><rect x="60" y="27" width="6" height="16" rx="2" transform="rotate(25 63 35)"/><circle cx="40" cy="48" r="2.2"/><circle cx="41" cy="54" r="2"/><circle cx="60" cy="48" r="2.2"/><circle cx="59" cy="54" r="2"/><path d="M28 64 h18 v8 h-18 z"/><path d="M28 60 h3 v4 h-3 z M33 59 h3 v5 h-3 z M38 59 h3 v5 h-3 z"/><path d="M54 62 h18 v10 h-18 z"/></g><path d="M55 62 l3 4 l3 -4 l3 4 l3 -4" stroke="#fff" stroke-width="2" fill="none"/>',
                GHS06: '<circle cx="50" cy="42" r="12" fill="#111"/><rect x="43" y="50" width="14" height="8" rx="2" fill="#111"/><circle cx="45" cy="41" r="3.2" fill="#fff"/><circle cx="55" cy="41" r="3.2" fill="#fff"/><g stroke="#111" stroke-width="5" stroke-linecap="round"><path d="M34 60 L66 74"/><path d="M66 60 L34 74"/></g>',
                GHS07: '<rect x="45.5" y="27" width="9" height="28" rx="3" fill="#111"/><circle cx="50" cy="64" r="5" fill="#111"/>',
                GHS08: '<circle cx="50" cy="30" r="6" fill="#111"/><path d="M33 74 L33 50 Q33 39 50 39 Q67 39 67 50 L67 74 Z" fill="#111"/><polygon points="' + polyPoints(50, 57, 9, 10, -90).split(' ').map((p, i) => { if (i % 2 === 0) return p; const [x, y] = p.split(','); return ((+x - 50) * 0.45 + 50).toFixed(1) + ',' + ((+y - 57) * 0.45 + 57).toFixed(1); }).join(' ') + '" fill="#fff"/>',
                GHS09: '<g stroke="#111" stroke-width="3" stroke-linecap="round" fill="none"><path d="M36 70 L36 40"/><path d="M36 50 L28 42"/><path d="M36 46 L44 38"/><path d="M36 58 L44 52"/><path d="M26 71 L74 71"/></g><ellipse cx="60" cy="64" rx="9" ry="4.5" fill="#111"/><path d="M69 64 L75 60 L75 68 Z" fill="#111"/><circle cx="56" cy="63" r="1.2" fill="#fff"/>'
            }[code] || '';
            return `<svg viewBox="0 0 100 100" width="${size || 64}" height="${size || 64}" role="img" aria-label="${code}"><polygon points="50,5 95,50 50,95 5,50" fill="#fff" stroke="#e11d2e" stroke-width="6" stroke-linejoin="round"/>${sym}</svg>`;
        }

        function ghsGridHTML(clickable) {
            return `<div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">${GHS_DATA.map((g, i) => `
                <${clickable ? 'button type="button" onclick="showGhsDetail(' + i + ')"' : 'div'} id="ghs-card-${i}" class="panel p-2 text-center hover:shadow-md transition">
                    <div class="flex justify-center">${ghsSVG(g.code, 56)}</div>
                    <div class="text-[10px] font-extrabold text-slate-500 mt-1">${g.code}</div>
                    <div class="text-[11px] font-bold text-slate-800 leading-tight">${g.mean}</div>
                </${clickable ? 'button' : 'div'}>`).join('')}</div>`;
        }

        // Teilchenbilder & Piktogramme in die Lerntexte einsetzen
        function afterLearnRender(root) {
            root.querySelectorAll('[data-lupe]').forEach(el => {
                const kinds = el.getAttribute('data-lupe').split(',');
                el.style.display = 'grid';
                el.style.gridTemplateColumns = `repeat(${Math.min(kinds.length, 3)}, minmax(0, 1fr))`;
                el.style.gap = '.5rem';
                el.style.margin = '.5rem 0';
                el.innerHTML = kinds.map(k => lupeFigure(k, true)).join('');
            });
            root.querySelectorAll('[data-legend]').forEach(el => {
                el.innerHTML = legendHTML(el.getAttribute('data-legend').split(','));
            });
            root.querySelectorAll('[data-ghs-grid]').forEach(el => { el.innerHTML = ghsGridHTML(false); });
        }

        // ==========================================
        // CHEMIE-LABOR
        // ==========================================
        let chemRAF = null;
        function stopLaborAnimations() {
            if (chemRAF) cancelAnimationFrame(chemRAF);
            chemRAF = null;
        }

        const CHEM_LAB_TABS = [
            ['fa-temperature-half', 'Aggregatzustände'],
            ['fa-droplet', 'Lösevorgang & Diffusion'],
            ['fa-magnifying-glass', 'Gemisch-Detektiv'],
            ['fa-triangle-exclamation', 'Piktogramme'],
            ['fa-scale-balanced', 'Dichte-Rechner'],
            ['fa-chart-line', 'Löslichkeitskurve']
        ];

        function renderChemieLabor(idx) {
            idx = idx || 0;
            stopLaborAnimations();
            const c = document.getElementById('visuals-tab-content');
            c.innerHTML = `
                <div class="glass-card p-6 rounded-3xl space-y-5">
                    <div>
                        <span class="chip">Interaktives Chemie-Labor</span>
                        <h2 class="text-2xl font-extrabold text-slate-800 mt-3">Experimentieren & Teilchen sichtbar machen</h2>
                        <p class="text-slate-600 text-sm mt-1">Alles passend zu deinen Buchseiten – probiere die Regler aus und beobachte die Teilchen.</p>
                    </div>
                    <div class="flex flex-wrap gap-2 border-b border-slate-200/80 pb-3">
                        ${CHEM_LAB_TABS.map((t, i) => `<button type="button" onclick="renderChemieLabor(${i})" class="${i === idx ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}"><i class="fa-solid ${t[0]}"></i> ${t[1]}</button>`).join('')}
                    </div>
                    <div id="chem-lab-body"></div>
                </div>
            `;
            [labStates, labDissolve, labMixtures, labGhs, labDensity, labSolubility][idx]();
        }

        function setupCanvas(canvas) {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = canvas.clientWidth || 600;
            const h = Math.round(w * 0.55);
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.height = h + 'px';
            const ctx = canvas.getContext('2d');
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            return { ctx, w, h };
        }
        function drawTri(ctx, x, y, s, rot, fill, stroke) {
            ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
            ctx.beginPath();
            for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / 3; ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s); }
            ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = 1.2; ctx.stroke();
            ctx.restore();
        }
        function drawOct(ctx, x, y, s, fill, stroke) {
            ctx.beginPath();
            for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; ctx.lineTo(x + Math.cos(a) * s, y + Math.sin(a) * s); }
            ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = 1; ctx.stroke();
        }
        function isVisible(el) { return el && el.isConnected && el.offsetParent !== null; }

        // ---------- 1. Aggregatzustände ----------
        const STATE_TEXT = {
            fest: { name: 'fest (s) – Eis', stoff: 'Feststoffe behalten ihre Form und lassen sich nicht zusammenpressen. Viele Feststoffe bilden regelmäßig geformte Kristalle.', teil: 'Die Teilchen sind dicht gepackt und regelmäßig in einem Gitter angeordnet. Sie ziehen sich stark an und schwingen nur um ihre Gitterplätze.' },
            fluessig: { name: 'flüssig (l) – Wasser', stoff: 'Flüssigkeiten passen sich der Form des Gefäßes an. Sie sind verformbar, lassen sich aber kaum zusammenpressen.', teil: 'Die Anziehung ist teilweise überwunden, das Gitter ist zusammengebrochen. Die Teilchen liegen ungeordnet nebeneinander und sind gegeneinander verschiebbar.' },
            gas: { name: 'gasförmig (g) – Wasserdampf', stoff: 'Gase breiten sich sehr schnell aus, nehmen den ganzen Raum ein und lassen sich gut zusammenpressen.', teil: 'Die Anziehung ist vollständig überwunden. Einzelne Teilchen bewegen sich frei und schnell, mit sehr großen Abständen. Der Raum dazwischen ist leer.' }
        };

        function labStates() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="grid lg:grid-cols-5 gap-5 items-start">
                    <div class="lg:col-span-3 space-y-3">
                        <div class="panel p-2"><canvas id="state-canvas" class="w-full block rounded-xl"></canvas></div>
                        <div class="panel p-4 space-y-3">
                            <div class="flex items-center justify-between text-sm font-extrabold">
                                <span><i class="fa-solid fa-temperature-half accent-text"></i> Temperatur</span>
                                <span id="state-temp" class="text-lg">20 °C</span>
                            </div>
                            <input id="state-slider" type="range" min="-20" max="130" value="20" class="w-full accent-teal-600">
                            <div class="flex flex-wrap gap-2">
                                <button type="button" class="btn btn-ghost btn-sm" onclick="setStateTemp(-10)">🧊 Eis −10 °C</button>
                                <button type="button" class="btn btn-ghost btn-sm" onclick="setStateTemp(20)">💧 Wasser 20 °C</button>
                                <button type="button" class="btn btn-ghost btn-sm" onclick="setStateTemp(115)">♨️ Dampf 115 °C</button>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-3">
                        <div class="panel p-4">
                            <div class="eyebrow">Aggregatzustand</div>
                            <div id="state-name" class="text-xl font-extrabold mt-1">flüssig</div>
                            <div id="state-change" class="text-xs font-bold text-slate-500 mt-1"></div>
                        </div>
                        <div class="lesson lesson-simple"><div class="lesson-title">👀 Stoffebene (Beobachtung)</div><p id="state-stoff" class="lesson-text"></p></div>
                        <div class="lesson lesson-plain"><div class="lesson-title">🔬 Teilchenebene (Erklärung)</div><p id="state-teil" class="lesson-text"></p></div>
                        <p class="text-[11px] text-slate-500">Wasser: Schmelztemperatur 0 °C, Siedetemperatur 100 °C. Die Wasser-Teilchen (Dreiecke) bleiben immer gleich – nur Anordnung und Bewegung ändern sich.</p>
                    </div>
                </div>
            `;
            const canvas = document.getElementById('state-canvas');
            const { ctx, w, h } = setupCanvas(canvas);
            const N = 42, cols = 7, gap = Math.min(26, w / 18);
            const lattice = [];
            for (let r = 0; r < 6; r++) for (let c = 0; c < cols; c++) lattice.push({ x: w / 2 + (c - (cols - 1) / 2) * gap, y: h - 18 - r * gap * 0.9 });
            const ps = lattice.map(p => ({ x: p.x, y: p.y - 60 + Math.random() * 40, vx: 0, vy: 0, rot: 0, vr: 0, tx: p.x, ty: p.y }));
            let T = 20, lastState = null;
            const slider = document.getElementById('state-slider');
            const stateOf = t => t < 0 ? 'fest' : (t < 100 ? 'fluessig' : 'gas');
            function updateInfo() {
                const s = stateOf(T);
                document.getElementById('state-temp').textContent = `${T} °C`;
                document.getElementById('state-name').textContent = STATE_TEXT[s].name;
                document.getElementById('state-stoff').textContent = STATE_TEXT[s].stoff;
                document.getElementById('state-teil').textContent = STATE_TEXT[s].teil;
                if (lastState && lastState !== s) {
                    const names = { 'fest>fluessig': 'Schmelzen bei 0 °C', 'fluessig>fest': 'Erstarren bei 0 °C', 'fluessig>gas': 'Sieden bei 100 °C', 'gas>fluessig': 'Kondensieren bei 100 °C', 'fest>gas': 'Schmelzen und Sieden', 'gas>fest': 'Kondensieren und Erstarren' };
                    document.getElementById('state-change').innerHTML = `<i class="fa-solid fa-arrow-right-arrow-left"></i> Übergang: ${names[lastState + '>' + s]}`;
                }
                lastState = s;
            }
            window.setStateTemp = t => { slider.value = t; T = t; updateInfo(); };
            slider.oninput = () => { T = +slider.value; updateInfo(); };
            updateInfo();
            const size = Math.max(7, gap * 0.42);
            function step() {
                if (!isVisible(canvas)) { chemRAF = null; return; }
                const s = stateOf(T);
                const sf = 0.35 + (T + 20) / 150 * 3.2;
                for (const p of ps) {
                    if (s === 'fest') {
                        const amp = 0.4 + (T + 20) / 20 * 1.2;
                        p.vx = (p.tx - p.x) * 0.12; p.vy = (p.ty - p.y) * 0.12;
                        p.x += p.vx + (Math.random() - 0.5) * amp; p.y += p.vy + (Math.random() - 0.5) * amp;
                        p.rot *= 0.85;
                    } else {
                        if (s === 'fluessig') { p.vy += 0.12; p.vx += (Math.random() - 0.5) * 0.5 * sf; p.vy += (Math.random() - 0.5) * 0.5 * sf; p.vx *= 0.9; p.vy *= 0.9; p.vr = (Math.random() - 0.5) * 0.2; }
                        else {
                            const sp = Math.hypot(p.vx, p.vy) || 1, target = 1.2 * sf;
                            if (sp < 0.2) { const a = Math.random() * Math.PI * 2; p.vx = Math.cos(a) * target; p.vy = Math.sin(a) * target; }
                            else { p.vx *= (0.96 + 0.04 * target / sp); p.vy *= (0.96 + 0.04 * target / sp); }
                            p.vr = 0.05;
                        }
                        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
                    }
                    if (p.x < size) { p.x = size; p.vx = Math.abs(p.vx); }
                    if (p.x > w - size) { p.x = w - size; p.vx = -Math.abs(p.vx); }
                    if (p.y < size) { p.y = size; p.vy = Math.abs(p.vy); }
                    if (p.y > h - size) { p.y = h - size; p.vy = -Math.abs(p.vy) * (s === 'gas' ? 1 : 0.3); }
                }
                if (s !== 'fest') {
                    const minD = size * 2.1;
                    for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
                        const a = ps[i], b = ps[j], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
                        if (d > 0 && d < minD) {
                            const push = (minD - d) / 2, nx = dx / d, ny = dy / d;
                            a.x -= nx * push; a.y -= ny * push; b.x += nx * push; b.y += ny * push;
                            if (s === 'gas') { const t1 = a.vx; a.vx = b.vx; b.vx = t1; const t2 = a.vy; a.vy = b.vy; b.vy = t2; }
                        }
                    }
                }
                ctx.clearRect(0, 0, w, h);
                const g = ctx.createLinearGradient(0, 0, 0, h);
                g.addColorStop(0, '#f8fbff'); g.addColorStop(1, '#eef6f8');
                ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
                for (const p of ps) drawTri(ctx, p.x, p.y, size, p.rot, '#d6edf2', '#5e8d99');
                chemRAF = requestAnimationFrame(step);
            }
            chemRAF = requestAnimationFrame(step);
        }

        // ---------- 2. Lösevorgang & Diffusion ----------
        function labDissolve() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="grid lg:grid-cols-5 gap-5 items-start">
                    <div class="lg:col-span-3 space-y-3">
                        <div class="panel p-2"><canvas id="diss-canvas" class="w-full block rounded-xl"></canvas></div>
                        <div class="panel p-4 space-y-3">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="text-sm font-extrabold mr-1">Wassertemperatur:</span>
                                <button type="button" id="diss-cold" class="btn btn-sm" onclick="setDissTemp('kalt')">❄️ kalt</button>
                                <button type="button" id="diss-warm" class="btn btn-sm" onclick="setDissTemp('warm')">🔥 warm</button>
                                <button type="button" class="btn btn-ghost btn-sm ml-auto" onclick="labDissolve()"><i class="fa-solid fa-rotate-right"></i> Neuer Kristall</button>
                            </div>
                            <div>
                                <div class="flex justify-between text-xs font-bold text-slate-500"><span>gelöste Kaliumpermanganat-Teilchen</span><span id="diss-pct">0 %</span></div>
                                <div class="bar mt-1"><span id="diss-bar" style="width:0%"></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-2" id="diss-steps">
                        ${['Im festen Kaliumpermanganat bilden die Teilchen ein Teilchengitter.', 'Die sich stark bewegenden Wasser-Teilchen stoßen Kaliumpermanganat-Teilchen von ihren Gitterplätzen.', 'Durch weitere Zusammenstöße werden die Teilchen immer weiter verteilt und durchmischt (Diffusion).', 'Alle Teilchen liegen ungeordnet nebeneinander – der Kristall ist vollständig gelöst.'].map((t, i) => `
                            <div class="panel p-3 flex gap-3 items-start transition" id="diss-step-${i}">
                                <span class="step-n !bg-slate-300" id="diss-n-${i}">${i + 1}</span><p class="text-sm text-slate-700 leading-relaxed">${t}</p>
                            </div>`).join('')}
                        <p class="text-[11px] text-slate-500 pt-1">Tipp: Vergleiche „kalt“ und „warm“. Im warmen Wasser bewegen sich die Teilchen schneller – der Kristall löst sich schneller und die Farbe verteilt sich schneller.</p>
                    </div>
                </div>
            `;
            const canvas = document.getElementById('diss-canvas');
            const { ctx, w, h } = setupCanvas(canvas);
            const ws = Math.max(5, w / 70);
            const water = [];
            for (let i = 0; i < 150; i++) water.push({ x: Math.random() * w, y: Math.random() * h, vx: 0, vy: 0, rot: Math.random() * 6 });
            const cols = 7, rows = 5, g = ws * 2.1;
            const crystal = [];
            for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) crystal.push({ r, c, x: w / 2 + (c - (cols - 1) / 2) * g, y: h - ws - 4 - r * g * 0.9, bound: true, vx: 0, vy: 0 });
            const grid = {};
            crystal.forEach(p => { grid[p.r + ',' + p.c] = p; });
            let temp = 'kalt', allFreeAt = null, start = performance.now();
            window.setDissTemp = t => {
                temp = t;
                document.getElementById('diss-cold').className = 'btn btn-sm ' + (t === 'kalt' ? 'btn-primary' : 'btn-ghost');
                document.getElementById('diss-warm').className = 'btn btn-sm ' + (t === 'warm' ? 'btn-primary' : 'btn-ghost');
            };
            setDissTemp('kalt');
            function exposed(p) {
                const n = [[p.r + 1, p.c], [p.r, p.c - 1], [p.r, p.c + 1]];
                return n.some(([r, c]) => { const q = grid[r + ',' + c]; return !q || !q.bound; });
            }
            function setStep(k) {
                for (let i = 0; i < 4; i++) {
                    const el = document.getElementById('diss-step-' + i), n = document.getElementById('diss-n-' + i);
                    if (!el) return;
                    el.style.borderColor = i === k ? 'var(--ac)' : '';
                    el.style.boxShadow = i === k ? '0 0 0 3px var(--ac-soft-2)' : '';
                    n.style.background = i <= k ? '#16a34a' : '#cbd5e1';
                }
            }
            function move(p, sf, kick) {
                p.vx += (Math.random() - 0.5) * kick * sf; p.vy += (Math.random() - 0.5) * kick * sf;
                p.vx *= 0.92; p.vy *= 0.92;
                p.x += p.vx; p.y += p.vy;
                if (p.x < ws) { p.x = ws; p.vx *= -1; } if (p.x > w - ws) { p.x = w - ws; p.vx *= -1; }
                if (p.y < ws) { p.y = ws; p.vy *= -1; } if (p.y > h - ws) { p.y = h - ws; p.vy *= -1; }
            }
            function step(now) {
                if (!isVisible(canvas)) { chemRAF = null; return; }
                const sf = temp === 'warm' ? 2.3 : 0.8;
                water.forEach(p => { move(p, sf, 1.6); p.rot += 0.02 * sf; });
                const elapsed = (now - start) / 1000;
                crystal.forEach(p => {
                    if (p.bound) {
                        if (elapsed > 1 && exposed(p) && Math.random() < 0.0035 * sf * sf) { p.bound = false; p.vy = -1.2; }
                    } else move(p, sf, 0.9);
                });
                const free = crystal.filter(p => !p.bound).length;
                const pct = Math.round(free / crystal.length * 100);
                document.getElementById('diss-pct').textContent = pct + ' %';
                document.getElementById('diss-bar').style.width = pct + '%';
                if (free === crystal.length && !allFreeAt) allFreeAt = now;
                setStep(free === 0 ? 0 : (free < crystal.length * 0.5 ? 1 : (!allFreeAt || now - allFreeAt < 5000 ? 2 : 3)));
                ctx.clearRect(0, 0, w, h);
                ctx.fillStyle = '#f5fbfd'; ctx.fillRect(0, 0, w, h);
                // leichte violette Färbung je nach Verteilung
                ctx.fillStyle = `rgba(236, 91, 146, ${0.12 * free / crystal.length})`; ctx.fillRect(0, 0, w, h);
                water.forEach(p => drawTri(ctx, p.x, p.y, ws, p.rot, '#d6edf2', '#6b97a3'));
                crystal.forEach(p => drawOct(ctx, p.x, p.y, ws * 0.95, '#ec5b92', '#b02f68'));
                chemRAF = requestAnimationFrame(step);
            }
            chemRAF = requestAnimationFrame(step);
        }

        // ---------- 3. Gemisch-Detektiv ----------
        const MIX_EXAMPLES = [
            { kind: 'reinstoff', icon: '🍬', name: 'Zucker', type: 'Reinstoff', art: 'Reinstoff', agg: 'nur ein Stoff (fest)', stoff: 'Weißer Zucker besteht nur aus einem Stoff – es sind keine weiteren Bestandteile enthalten.', teil: 'Es gibt nur eine Teilchenart: Zucker-Teilchen. Im Feststoff sind sie regelmäßig angeordnet.' },
            { kind: 'tee', icon: '🍵', name: 'Tee', type: 'Lösung', art: 'homogen', agg: 'Feststoff, Flüssigkeit oder Gas in Flüssigkeit', stoff: 'Homogenes Gemisch eines Feststoffs, einer Flüssigkeit oder eines Gases in einer Flüssigkeit.', teil: 'Einzelne Teilchen eines Stoffes befinden sich zwischen den Teilchen einer Flüssigkeit.' },
            { kind: 'legierung', icon: '🔩', name: 'Messing', type: 'Legierung', art: 'homogen', agg: 'Metall + Metall (fest)', stoff: 'Homogenes Gemisch von verschiedenen Metallen.', teil: 'Einzelne Teilchen eines Metalls befinden sich zwischen den Teilchen eines anderen Metalls.' },
            { kind: 'gasgemisch', icon: '☁️', name: 'Luft', type: 'Gasgemisch', art: 'homogen', agg: 'Gas + Gas', stoff: 'Homogenes Gemisch von verschiedenen Gasen.', teil: 'Einzelne Teilchen eines Gases befinden sich zwischen den Teilchen eines anderen Gases.' },
            { kind: 'suspension', icon: '🎨', name: 'Wasserfarben', type: 'Suspension', art: 'heterogen', agg: 'Feststoff in Flüssigkeit', stoff: 'Heterogenes Gemisch eines Feststoffs in einer Flüssigkeit.', teil: 'Gruppen von Teilchen eines Feststoffes befinden sich zwischen den Teilchen einer Flüssigkeit.' },
            { kind: 'emulsion', icon: '🥛', name: 'Milch', type: 'Emulsion', art: 'heterogen', agg: 'Flüssigkeit in Flüssigkeit', stoff: 'Heterogenes Gemisch einer Flüssigkeit in einer anderen Flüssigkeit.', teil: 'Gruppen von Teilchen einer Flüssigkeit befinden sich zwischen den Teilchen einer anderen Flüssigkeit.' },
            { kind: 'nebel', icon: '🌫️', name: 'Nebel im Gebirge', type: 'Nebel', art: 'heterogen', agg: 'Flüssigkeit in Gas', stoff: 'Heterogenes Gemisch einer Flüssigkeit in einem Gas.', teil: 'Gruppen von Teilchen einer Flüssigkeit befinden sich zwischen den Teilchen eines Gases.' },
            { kind: 'rauch', icon: '🔥', name: 'Rauch bei einem Brand', type: 'Rauch', art: 'heterogen', agg: 'Feststoff in Gas', stoff: 'Heterogenes Gemisch eines Feststoffs in einem Gas.', teil: 'Gruppen von Teilchen eines Feststoffs befinden sich zwischen den Teilchen eines Gases.' },
            { kind: 'gemenge', icon: '🌶️', name: 'Würzmischung', type: 'Gemenge', art: 'heterogen', agg: 'verschiedene Feststoffe', stoff: 'Heterogenes Gemisch von verschiedenen Feststoffen.', teil: 'Gruppen von Teilchen verschiedener Feststoffe liegen nebeneinander vor.' }
        ];
        let mixQuiz = { on: false, idx: 0, score: 0, total: 0, answered: false };

        function labMixtures() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="flex flex-wrap gap-2 mb-4">
                    <button type="button" id="mix-mode-explore" class="btn btn-sm btn-primary" onclick="setMixMode(false)"><i class="fa-solid fa-book-open"></i> Erkunden</button>
                    <button type="button" id="mix-mode-quiz" class="btn btn-sm btn-ghost" onclick="setMixMode(true)"><i class="fa-solid fa-circle-question"></i> Quiz: Welcher Typ ist das?</button>
                </div>
                <div id="mix-body"></div>
            `;
            setMixMode(false);
        }

        function setMixMode(quiz) {
            mixQuiz.on = quiz;
            document.getElementById('mix-mode-explore').className = 'btn btn-sm ' + (quiz ? 'btn-ghost' : 'btn-primary');
            document.getElementById('mix-mode-quiz').className = 'btn btn-sm ' + (quiz ? 'btn-primary' : 'btn-ghost');
            if (quiz) { mixQuiz.score = 0; mixQuiz.total = 0; nextMixQuestion(); }
            else showMixExample(1);
        }

        function showMixExample(i) {
            const m = MIX_EXAMPLES[i];
            const badge = m.art === 'homogen' ? 'bg-teal-50 text-teal-700 border-teal-200' : m.art === 'heterogen' ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-amber-50 text-amber-700 border-amber-200';
            document.getElementById('mix-body').innerHTML = `
                <div class="grid lg:grid-cols-5 gap-5 items-start">
                    <div class="lg:col-span-2 grid grid-cols-3 lg:grid-cols-2 gap-2">
                        ${MIX_EXAMPLES.map((x, k) => `<button type="button" onclick="showMixExample(${k})" class="panel p-2.5 text-left text-xs font-bold transition ${k === i ? 'ring-2 ring-teal-400 bg-teal-50' : 'hover:bg-white'}"><span class="text-lg">${x.icon}</span><br>${x.name}</button>`).join('')}
                    </div>
                    <div class="lg:col-span-3 grid sm:grid-cols-2 gap-4 items-start">
                        <div class="panel p-3"><div class="max-w-[240px] mx-auto">${lupeSVG(m.kind)}</div><div class="mt-2">${legendHTML(LUPE_KINDS[m.kind].legend)}</div></div>
                        <div class="space-y-3">
                            <div>
                                <div class="eyebrow">${m.icon} ${m.name}</div>
                                <div class="text-2xl font-extrabold mt-1">${m.type}</div>
                                <div class="flex flex-wrap gap-1.5 mt-2">
                                    <span class="text-[11px] font-extrabold px-2 py-1 rounded-full border ${badge}">${m.art}</span>
                                    <span class="text-[11px] font-bold px-2 py-1 rounded-full border bg-white text-slate-600 border-slate-200">${m.agg}</span>
                                </div>
                            </div>
                            <div class="lesson lesson-simple !p-3"><div class="lesson-title">👀 Stoffebene</div><p class="text-sm text-slate-700">${m.stoff}</p></div>
                            <div class="lesson lesson-plain !p-3"><div class="lesson-title">🔬 Teilchenebene</div><p class="text-sm text-slate-700">${m.teil}</p></div>
                        </div>
                    </div>
                </div>
            `;
        }

        function nextMixQuestion() {
            let i;
            do { i = 1 + Math.floor(Math.random() * (MIX_EXAMPLES.length - 1)); } while (i === mixQuiz.idx && MIX_EXAMPLES.length > 2);
            mixQuiz.idx = i; mixQuiz.answered = false;
            const m = MIX_EXAMPLES[i];
            const types = MIX_EXAMPLES.slice(1).map(x => x.type);
            document.getElementById('mix-body').innerHTML = `
                <div class="grid md:grid-cols-2 gap-5 items-start">
                    <div class="panel p-3"><div class="max-w-[260px] mx-auto">${lupeSVG(m.kind)}</div><div class="mt-2">${legendHTML(LUPE_KINDS[m.kind].legend)}</div></div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center"><span class="chip">Punkte: ${mixQuiz.score} / ${mixQuiz.total}</span></div>
                        <h4 class="font-extrabold text-lg">Welcher Gemischtyp ist hier im Teilchenmodell dargestellt?</h4>
                        <div class="grid grid-cols-2 gap-2">${types.map(t => `<button type="button" class="opt !py-2.5" data-type="${t}" onclick="answerMix(this, '${t}')">${t}</button>`).join('')}</div>
                        <div id="mix-feedback"></div>
                    </div>
                </div>
            `;
        }

        function answerMix(btn, t) {
            if (mixQuiz.answered) return;
            mixQuiz.answered = true;
            const m = MIX_EXAMPLES[mixQuiz.idx];
            const ok = t === m.type;
            mixQuiz.total++; if (ok) mixQuiz.score++;
            document.querySelectorAll('#mix-body .opt').forEach(b => {
                b.disabled = true;
                if (b.dataset.type === m.type) b.classList.add('correct'); else if (b === btn) b.classList.add('wrong'); else b.classList.add('dim');
            });
            document.getElementById('mix-feedback').innerHTML = `
                <div class="feedback ${ok ? 'ok' : 'bad'}">
                    <div class="font-extrabold mb-1">${ok ? 'Richtig!' : 'Nicht ganz – richtig ist: ' + m.type}</div>
                    ${m.art} · ${m.agg}. ${m.teil} (Beispiel: ${m.name})
                </div>
                <button type="button" class="btn btn-primary btn-sm mt-3" onclick="nextMixQuestion()">Nächstes Bild <i class="fa-solid fa-arrow-right"></i></button>
            `;
        }

        // ---------- 4. Piktogramme ----------
        let ghsQuiz = { idx: -1, answered: false, score: 0, total: 0 };
        function labGhs() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="space-y-4">
                    <p class="text-sm text-slate-600">Tippe auf ein Piktogramm. <span class="text-slate-400">(vereinfachte Nachzeichnungen der GHS-Symbole)</span></p>
                    ${ghsGridHTML(true)}
                    <div id="ghs-detail"></div>
                    <div class="panel p-4 space-y-3">
                        <div class="flex items-center justify-between"><h4 class="font-extrabold">🎯 Teste dich: Was bedeutet das Piktogramm?</h4><span class="chip" id="ghs-score">0 / 0</span></div>
                        <div id="ghs-quiz"></div>
                    </div>
                </div>
            `;
            showGhsDetail(1);
            ghsQuiz = { idx: -1, answered: false, score: 0, total: 0 };
            nextGhsQuestion();
        }
        function showGhsDetail(i) {
            const g = GHS_DATA[i];
            GHS_DATA.forEach((_, k) => { const el = document.getElementById('ghs-card-' + k); if (el) el.style.boxShadow = k === i ? '0 0 0 3px var(--ac-soft-2)' : ''; });
            document.getElementById('ghs-detail').innerHTML = `
                <div class="panel p-4 flex flex-col sm:flex-row gap-4 items-start">
                    <div class="shrink-0">${ghsSVG(g.code, 96)}</div>
                    <div class="space-y-1.5 text-sm">
                        <div class="eyebrow">${g.code} · ${g.name}</div>
                        <div class="text-xl font-extrabold">${g.mean}</div>
                        <p class="text-slate-700">${g.detail}</p>
                        <p><strong>🛡️ Schutz:</strong> ${g.schutz}</p>
                        <p><strong>📗 In deinen Praktika:</strong> ${g.buch}</p>
                    </div>
                </div>
            `;
        }
        function nextGhsQuestion() {
            let i;
            do { i = Math.floor(Math.random() * GHS_DATA.length); } while (i === ghsQuiz.idx);
            ghsQuiz.idx = i; ghsQuiz.answered = false;
            const others = shuffle(GHS_DATA.filter((_, k) => k !== i)).slice(0, 3);
            const opts = shuffle([GHS_DATA[i], ...others]);
            document.getElementById('ghs-score').textContent = `${ghsQuiz.score} / ${ghsQuiz.total}`;
            document.getElementById('ghs-quiz').innerHTML = `
                <div class="flex flex-col sm:flex-row gap-4 items-center">
                    <div class="shrink-0">${ghsSVG(GHS_DATA[i].code, 88)}</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 w-full">${opts.map(o => `<button type="button" class="opt !py-2.5" data-code="${o.code}" onclick="answerGhs(this, '${o.code}')">${o.mean}</button>`).join('')}</div>
                </div>
                <div id="ghs-fb"></div>
            `;
        }
        function answerGhs(btn, code) {
            if (ghsQuiz.answered) return;
            ghsQuiz.answered = true;
            const g = GHS_DATA[ghsQuiz.idx], ok = code === g.code;
            ghsQuiz.total++; if (ok) ghsQuiz.score++;
            document.getElementById('ghs-score').textContent = `${ghsQuiz.score} / ${ghsQuiz.total}`;
            document.querySelectorAll('#ghs-quiz .opt').forEach(b => {
                b.disabled = true;
                if (b.dataset.code === g.code) b.classList.add('correct'); else if (b === btn) b.classList.add('wrong'); else b.classList.add('dim');
            });
            document.getElementById('ghs-fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><strong>${g.code} – ${g.name}:</strong> ${g.mean}. ${g.detail}</div><button type="button" class="btn btn-primary btn-sm mt-3" onclick="nextGhsQuestion()">Nächstes Piktogramm <i class="fa-solid fa-arrow-right"></i></button>`;
        }

        // ---------- 5. Dichte-Rechner ----------
        const DENSITY_TABLE = [
            ['Ethanol', 0.79], ['Speiseöl', 0.92], ['Wasser', 1.00], ['Aluminium', 2.70],
            ['Eisen', 7.87], ['Kupfer', 8.96], ['Blei', 11.34], ['Gold', 19.32]
        ];
        const fmt = (n, d) => n.toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d });
        let densTask = null;

        function labDensity() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="grid lg:grid-cols-2 gap-5 items-start">
                    <div class="panel p-4 space-y-3">
                        <h4 class="font-extrabold">🧮 Dichte berechnen: ρ = m / V</h4>
                        <div class="grid grid-cols-2 gap-3">
                            <label class="text-xs font-bold text-slate-600">Masse m (in g)<input id="d-m" type="number" step="any" inputmode="decimal" value="54" class="notes-area !min-h-0 !py-2 !px-3 mt-1"></label>
                            <label class="text-xs font-bold text-slate-600">Volumen V (in cm³)<input id="d-v" type="number" step="any" inputmode="decimal" value="20" class="notes-area !min-h-0 !py-2 !px-3 mt-1"></label>
                        </div>
                        <details class="text-xs text-slate-600"><summary class="cursor-pointer font-bold">Volumen mit dem Messzylinder bestimmen</summary>
                            <div class="grid grid-cols-2 gap-3 mt-2">
                                <label class="font-bold">Wasser vorher (ml)<input id="d-v1" type="number" step="any" value="50" class="notes-area !min-h-0 !py-2 !px-3 mt-1"></label>
                                <label class="font-bold">Wasser nachher (ml)<input id="d-v2" type="number" step="any" value="70" class="notes-area !min-h-0 !py-2 !px-3 mt-1"></label>
                            </div>
                            <button type="button" class="btn btn-ghost btn-sm mt-2" onclick="useCylinder()">Volumen übernehmen</button>
                        </details>
                        <div id="d-result"></div>
                    </div>
                    <div class="space-y-4">
                        <div class="panel p-4">
                            <h4 class="font-extrabold mb-2">📋 Dichte-Tabelle (g/cm³, gerundet)</h4>
                            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">${DENSITY_TABLE.map(d => `<div class="flex justify-between border-b border-slate-100 py-1"><span>${d[0]}</span><strong>${fmt(d[1], 2)}</strong></div>`).join('')}</div>
                        </div>
                        <div class="panel p-4 space-y-3">
                            <h4 class="font-extrabold">🎲 Übungsaufgabe</h4>
                            <div id="d-task"></div>
                        </div>
                    </div>
                </div>
            `;
            ['d-m', 'd-v'].forEach(id => document.getElementById(id).addEventListener('input', calcDensity));
            calcDensity();
            newDensityTask();
        }
        function useCylinder() {
            const v = (+document.getElementById('d-v2').value) - (+document.getElementById('d-v1').value);
            document.getElementById('d-v').value = Math.round(v * 100) / 100;
            calcDensity();
        }
        function nearestSubstance(rho) {
            let best = null;
            DENSITY_TABLE.forEach(d => { const diff = Math.abs(d[1] - rho) / d[1]; if (diff < 0.04 && (!best || diff < best.diff)) best = { name: d[0], diff }; });
            return best;
        }
        function calcDensity() {
            const m = parseFloat(document.getElementById('d-m').value), v = parseFloat(document.getElementById('d-v').value);
            const out = document.getElementById('d-result');
            if (!(m > 0) || !(v > 0)) { out.innerHTML = '<p class="text-sm text-slate-500">Gib Masse und Volumen ein (beide größer als 0).</p>'; return; }
            const rho = m / v, hit = nearestSubstance(rho);
            out.innerHTML = `
                <div class="solution !mt-0 space-y-1">
                    <div><strong>Gegeben:</strong> m = ${fmt(m, 2)} g; V = ${fmt(v, 2)} cm³ · <strong>Gesucht:</strong> ρ</div>
                    <div><strong>Formel:</strong> ρ = m / V</div>
                    <div><strong>Rechnung:</strong> ρ = ${fmt(m, 2)} g : ${fmt(v, 2)} cm³ = <strong>${fmt(rho, 2)} g/cm³</strong></div>
                    <div><strong>Antwort:</strong> ${hit ? `Die Dichte passt zu <strong>${hit.name}</strong>.` : 'Kein Stoff aus der Tabelle passt genau.'} ${rho < 1 ? 'Der Stoff schwimmt auf Wasser.' : 'Der Stoff geht in Wasser unter.'}</div>
                </div>
            `;
        }
        function newDensityTask() {
            const d = DENSITY_TABLE[Math.floor(Math.random() * DENSITY_TABLE.length)];
            const v = 2 + Math.floor(Math.random() * 24);
            const m = Math.round(d[1] * v * 10) / 10;
            densTask = { name: d[0], rho: d[1], v, m };
            document.getElementById('d-task').innerHTML = `
                <p class="text-sm text-slate-700">Ein Stoff hat die Masse <strong>${fmt(m, 1)} g</strong> und das Volumen <strong>${v} cm³</strong>. Berechne die Dichte und bestimme den Stoff.</p>
                <div class="flex flex-wrap gap-2 items-center">
                    <input id="d-ans" type="number" step="any" inputmode="decimal" placeholder="ρ in g/cm³" class="notes-area !min-h-0 !py-2 !px-3 !w-36">
                    <select id="d-sub" class="notes-area !min-h-0 !py-2 !px-3 !w-40"><option value="">Stoff wählen …</option>${DENSITY_TABLE.map(x => `<option>${x[0]}</option>`).join('')}</select>
                    <button type="button" class="btn btn-primary btn-sm" onclick="checkDensityTask()">Prüfen</button>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="newDensityTask()">Neue Aufgabe</button>
                </div>
                <div id="d-task-fb"></div>
            `;
        }
        function checkDensityTask() {
            const ans = parseFloat(String(document.getElementById('d-ans').value).replace(',', '.'));
            const sub = document.getElementById('d-sub').value;
            const t = densTask, rho = t.m / t.v;
            const okNum = Math.abs(ans - rho) <= 0.05 * rho, okSub = sub === t.name;
            document.getElementById('d-task-fb').innerHTML = `
                <div class="feedback ${okNum && okSub ? 'ok' : 'bad'}">
                    <div class="font-extrabold mb-1">${okNum && okSub ? 'Richtig gerechnet und erkannt! 🎉' : 'Schau dir den Rechenweg an:'}</div>
                    ρ = m / V = ${fmt(t.m, 1)} g : ${t.v} cm³ ≈ ${fmt(rho, 2)} g/cm³ → <strong>${t.name}</strong> (Tabelle: ${fmt(t.rho, 2)} g/cm³)
                </div>
            `;
        }

        // ---------- 6. Löslichkeitskurve ----------
        const SOL_T = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const SOL_DATA = {
            'Kaliumnitrat': { color: '#16a34a', v: [13, 21, 32, 48, 64, 86, 110, 138, 169, 202, 246] },
            'Alaun': { color: '#f59e0b', v: [6, 8, 11, 16, 24, 37, 60, 110, 200, 330, null] },
            'Kochsalz': { color: '#2563eb', v: [35.7, 35.8, 35.8, 36.1, 36.4, 36.7, 37.1, 37.5, 38.0, 38.5, 39.2] },
            'Rohrzucker': { color: '#c2a14d', v: [180, 190, 197, 215, 238, 260, null, null, null, null, null] }
        };
        function solAt(name, t) {
            const v = SOL_DATA[name].v;
            const i = Math.min(Math.floor(t / 10), 9), f = (t - i * 10) / 10;
            if (v[i] == null || v[i + 1] == null) return v[i] != null && f === 0 ? v[i] : null;
            return v[i] + (v[i + 1] - v[i]) * f;
        }
        function labSolubility() {
            const body = document.getElementById('chem-lab-body');
            body.innerHTML = `
                <div class="grid lg:grid-cols-5 gap-5 items-start">
                    <div class="lg:col-span-3 panel p-3"><div class="h-72 md:h-80 relative"><canvas id="sol-chart"></canvas></div>
                        <p class="text-[11px] text-slate-500 mt-2">Ungefähre Werte wie in Abb. 4 (Buch S. 64). Löslichkeit in g pro 100 g Wasser.</p></div>
                    <div class="lg:col-span-2 space-y-3">
                        <div class="panel p-4 space-y-3">
                            <label class="text-xs font-bold text-slate-600 block">Stoff
                                <select id="sol-sub" class="notes-area !min-h-0 !py-2 !px-3 mt-1">${['Kaliumnitrat', 'Alaun', 'Kochsalz'].map(s => `<option>${s}</option>`).join('')}</select>
                            </label>
                            <div><div class="flex justify-between text-xs font-bold text-slate-600"><span>Temperatur</span><span id="sol-t-l">60 °C</span></div><input id="sol-t" type="range" min="0" max="100" value="60" class="w-full accent-teal-600"></div>
                            <div><div class="flex justify-between text-xs font-bold text-slate-600"><span>zugegebene Masse in 100 g Wasser</span><span id="sol-m-l">150 g</span></div><input id="sol-m" type="range" min="0" max="250" value="150" class="w-full accent-teal-600"></div>
                        </div>
                        <div id="sol-out"></div>
                        <div class="panel p-3 text-xs text-slate-600 space-y-1">
                            <div>📍 <strong>auf</strong> der Kurve: genau gesättigt</div>
                            <div>⬆️ <strong>oberhalb</strong>: gesättigt + Bodenkörper</div>
                            <div>⬇️ <strong>unterhalb</strong>: nicht gesättigt – alles löst sich</div>
                        </div>
                    </div>
                </div>
            `;
            if (window.solChart) { try { window.solChart.destroy(); } catch (e) { /* ignorieren */ } }
            const datasets = Object.keys(SOL_DATA).map(n => ({ label: n, data: SOL_DATA[n].v, borderColor: SOL_DATA[n].color, backgroundColor: SOL_DATA[n].color, tension: 0.35, pointRadius: 0, borderWidth: 3, spanGaps: false }));
            datasets.push({ label: 'Dein Punkt', type: 'scatter', data: [{ x: 60, y: 150 }], backgroundColor: '#0f172a', pointRadius: 7, pointHoverRadius: 8, borderColor: '#fff', borderWidth: 2 });
            window.solChart = new Chart(document.getElementById('sol-chart').getContext('2d'), {
                type: 'line',
                data: { labels: SOL_T, datasets },
                options: {
                    responsive: true, maintainAspectRatio: false, animation: false,
                    scales: {
                        x: { type: 'linear', min: 0, max: 100, title: { display: true, text: 'Temperatur in °C' }, ticks: { stepSize: 10 } },
                        y: { min: 0, max: 250, title: { display: true, text: 'Löslichkeit in g / 100 g Wasser' } }
                    },
                    plugins: { legend: { labels: { boxWidth: 12, filter: i => i.text !== 'Dein Punkt' } } }
                }
            });
            // x-Werte für die Kurven setzen (lineare Achse)
            window.solChart.data.datasets.forEach((ds, k) => { if (k < 4) ds.data = SOL_T.map((t, i) => ({ x: t, y: ds.data[i] })); });
            window.solChart.update();
            ['sol-sub', 'sol-t', 'sol-m'].forEach(id => document.getElementById(id).addEventListener('input', updateSolubility));
            updateSolubility();
        }
        function updateSolubility() {
            const sub = document.getElementById('sol-sub').value;
            const t = +document.getElementById('sol-t').value, m = +document.getElementById('sol-m').value;
            document.getElementById('sol-t-l').textContent = t + ' °C';
            document.getElementById('sol-m-l').textContent = m + ' g';
            const max = solAt(sub, t);
            const pt = window.solChart.data.datasets[4];
            pt.data = [{ x: t, y: m }];
            pt.backgroundColor = SOL_DATA[sub].color;
            window.solChart.update();
            let html;
            if (max == null) html = '<p class="text-sm text-slate-500">Für diesen Bereich gibt es keine Werte im Diagramm.</p>';
            else {
                const diff = m - max;
                const state = Math.abs(diff) <= 2 ? 'auf' : (diff > 0 ? 'ober' : 'unter');
                html = `
                    <div class="feedback ${state === 'unter' ? 'ok' : 'bad'} !mt-0">
                        <div class="font-extrabold mb-1">${state === 'unter' ? '⬇️ Nicht gesättigt' : state === 'auf' ? '📍 Genau gesättigt' : '⬆️ Gesättigt mit Bodenkörper'}</div>
                        Bei ${t} °C lösen sich höchstens <strong>ca. ${fmt(max, 0)} g ${sub}</strong> in 100 g Wasser.
                        ${state === 'ober' ? ` Von ${m} g bleiben etwa <strong>${fmt(diff, 0)} g als Bodenkörper</strong> liegen.` : state === 'unter' ? ` Die ${m} g lösen sich vollständig.` : ''}
                    </div>`;
            }
            document.getElementById('sol-out').innerHTML = html;
        }
