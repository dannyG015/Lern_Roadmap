
        // ==========================================
        // MATHE-LABOR (Graphen, Boxen, Gleichungen, Terme, Dreiecke, Trapeze)
        // Alles rein lokal im Browser – kein Netz, keine Eingabe wird als HTML eingesetzt.
        // ==========================================

        // ---------- Hilfen ----------
        function mRound(v) { const r = Math.round(v * 1e9) / 1e9; return Object.is(r, -0) ? 0 : r; }
        function mFmt(n) {
            if (!isFinite(n)) return '?';
            let r = Math.round(n * 10000) / 10000;
            if (Object.is(r, -0)) r = 0;
            return String(r).replace('.', ',').replace('-', '−');
        }
        function mEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
        function mPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
        function mShuffle(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
            return a;
        }
        // lineare Seite a·x + b als Text
        function mLin(a, b) {
            a = mRound(a); b = mRound(b);
            let s = '';
            if (a !== 0) s = (a === 1 ? '' : a === -1 ? '−' : mFmt(a)) + 'x';
            if (b !== 0 || a === 0) s = s ? s + (b < 0 ? ' − ' + mFmt(-b) : ' + ' + mFmt(b)) : mFmt(b);
            return s;
        }

        // ==========================================
        // DATEN: Wertetabellen A–I (Buch S. 19) und die passenden Graphen 1–9 (S. 18)
        // ==========================================
        const M_X10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const M_TABLES = {
            A: { x: [0, 1, 1.01, 2, 2.01, 3, 3.01, 4, 4.01, 5, 5.01], y: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6], g: 5, why: 'y bleibt gleich und springt bei 1,01 / 2,01 / … plötzlich um 1 → Treppe.' },
            B: { x: M_X10, y: [0, 2.5, 5, 7.5, 8.3, 9.1, 9.9, 10.7, 11.5, 12.3, 13.1], g: 3, why: 'erst + 2,5 pro Schritt, ab x = 3 nur noch + 0,8 → erst steil, dann flacher.' },
            C: { x: M_X10, y: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], g: 6, why: 'y ist immer 4 mehr als x → Gerade, die bei 4 beginnt.' },
            D: { x: [90, 60, 40, 30, 20, 15, 12, 10, 6, 4, 3], y: [4, 6, 9, 12, 18, 24, 30, 36, 60, 90, 120], g: 4, why: 'x · y ist immer 360 → je größer x, desto kleiner y: fallende Kurve.' },
            E: { x: M_X10, y: [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6], g: 7, why: 'steigt gleichmäßig bis 6, danach bleibt y bei 6 → Knick in die Waagrechte.' },
            F: { x: M_X10, y: [0, 2, 4, 4, 6, 8, 8, 10, 12, 12, 14], g: 9, why: '+ 2, + 2, + 0, + 2, + 2, + 0 … → Treppe mit schrägen Stufen.' },
            G: { x: M_X10, y: [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8], g: 1, why: 'bis x = 2 ist y = 0, dann + 1 pro Schritt → Gerade, die erst später beginnt.' },
            H: { x: M_X10, y: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], g: 8, why: 'y ist immer 8 → waagrechte Linie.' },
            I: { x: M_X10, y: [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15], g: 2, why: 'y = 1,5 · x, Start bei 0 → Gerade durch den Nullpunkt.' }
        };
        function mTableOfGraph(g) { return Object.keys(M_TABLES).find(k => M_TABLES[k].g === g); }

        function mSeries(key) {
            const t = M_TABLES[key];
            if (key === 'D') {
                const pts = [];
                for (let x = 3; x <= 95; x += 0.5) pts.push([x, 360 / x]);
                return { segs: [pts], xmax: 100, ymax: 130 };
            }
            const segs = [];
            let cur = [];
            t.x.forEach((x, i) => {
                const y = t.y[i];
                if (cur.length) {
                    const [px, py] = cur[cur.length - 1];
                    if (x - px < 0.05 && y !== py) { segs.push(cur); cur = []; }
                }
                cur.push([x, y]);
            });
            if (key === 'A') cur.push([6, 6]);
            segs.push(cur);
            return { segs, xmax: key === 'A' ? 6.5 : 10.5, ymax: Math.max(...t.y) * 1.15 };
        }

        function mValueAt(key, x) {
            if (key === 'D') return 360 / x;
            if (key === 'A') return x <= 1 ? 1 : Math.ceil(x - 1e-9);
            const t = M_TABLES[key];
            const i = Math.min(9, Math.floor(x));
            const f = x - i;
            return t.y[i] + (t.y[i + 1] - t.y[i]) * f;
        }

        // kleines Diagramm wie im Buch (ohne Zahlen)
        function mMiniGraph(key, w, h) {
            w = w || 150; h = h || 110;
            const s = mSeries(key);
            const L = 10, B = h - 10, R = w - 6, T = 6;
            const sx = x => L + x / s.xmax * (R - L), sy = y => B - y / s.ymax * (B - T);
            let grid = '';
            for (let i = 1; i <= 6; i++) { const x = L + i * (R - L) / 6; grid += `<line x1="${x}" y1="${T}" x2="${x}" y2="${B}" />`; }
            for (let i = 1; i <= 5; i++) { const y = B - i * (B - T) / 5; grid += `<line x1="${L}" y1="${y}" x2="${R}" y2="${y}" />`; }
            const lines = s.segs.map(seg => `<polyline points="${seg.map(p => sx(p[0]).toFixed(1) + ',' + sy(p[1]).toFixed(1)).join(' ')}" />`).join('');
            return `<svg viewBox="0 0 ${w} ${h}" class="w-full h-auto block" role="img" aria-label="Graph">
                <g stroke="#e2e8f0" stroke-width="1">${grid}</g>
                <g stroke="#64748b" stroke-width="1.4" fill="#64748b"><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" /><line x1="${L}" y1="${B}" x2="${L}" y2="${T}" />
                <polygon points="${R},${B} ${R - 6},${B - 3} ${R - 6},${B + 3}" /><polygon points="${L},${T} ${L - 3},${T + 6} ${L + 3},${T + 6}" /></g>
                <g fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${lines}</g>
            </svg>`;
        }

        // großes Diagramm mit Zahlen und Ablese-Linien
        function mBigGraph(key, xr) {
            const w = 560, h = 300, L = 44, B = h - 30, R = w - 12, T = 12;
            const s = mSeries(key);
            const xmax = key === 'D' ? 100 : (key === 'A' ? 6 : 10);
            const ymax = key === 'D' ? 130 : Math.ceil(s.ymax);
            const sx = x => L + x / xmax * (R - L), sy = y => B - y / ymax * (B - T);
            const xstep = key === 'D' ? 10 : 1;
            const ystep = ymax <= 10 ? 1 : ymax <= 20 ? 2 : 20;
            let grid = '', labels = '';
            for (let x = 0; x <= xmax + 1e-9; x += xstep) { grid += `<line x1="${sx(x)}" y1="${T}" x2="${sx(x)}" y2="${B}" />`; labels += `<text x="${sx(x)}" y="${B + 17}" text-anchor="middle">${mFmt(x)}</text>`; }
            for (let y = 0; y <= ymax + 1e-9; y += ystep) { grid += `<line x1="${L}" y1="${sy(y)}" x2="${R}" y2="${sy(y)}" />`; labels += `<text x="${L - 7}" y="${sy(y) + 4}" text-anchor="end">${mFmt(y)}</text>`; }
            const lines = s.segs.map(seg => `<polyline points="${seg.filter(p => p[0] <= xmax + 1e-9).map(p => sx(p[0]).toFixed(1) + ',' + sy(p[1]).toFixed(1)).join(' ')}" />`).join('');
            let read = '';
            if (xr !== undefined) {
                const yv = mValueAt(key, xr);
                read = `<g stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5 4" fill="none">
                        <line x1="${sx(xr)}" y1="${B}" x2="${sx(xr)}" y2="${sy(yv)}" /><line x1="${sx(xr)}" y1="${sy(yv)}" x2="${L}" y2="${sy(yv)}" /></g>
                        <circle cx="${sx(xr)}" cy="${sy(yv)}" r="5.5" fill="#2563eb" stroke="#fff" stroke-width="2" />`;
            }
            return `<svg viewBox="0 0 ${w} ${h}" class="w-full h-auto block" role="img" aria-label="Graph zu Tabelle ${key}" style="font-size:12px;font-family:inherit">
                <g stroke="#e2e8f0" stroke-width="1">${grid}</g>
                <g fill="#64748b">${labels}</g>
                <g stroke="#475569" stroke-width="1.5"><line x1="${L}" y1="${B}" x2="${R}" y2="${B}" /><line x1="${L}" y1="${B}" x2="${L}" y2="${T}" /></g>
                <g fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${lines}</g>
                ${read}
            </svg>`;
        }

        // ==========================================
        // DREIECKS-GEOMETRIE (für Labor und Lernbilder)
        // ==========================================
        const mP = (x, y) => ({ x, y });
        const mSub = (p, q) => mP(p.x - q.x, p.y - q.y);
        const mAdd = (p, q) => mP(p.x + q.x, p.y + q.y);
        const mMul = (p, k) => mP(p.x * k, p.y * k);
        const mLen = p => Math.hypot(p.x, p.y);
        const mMid = (p, q) => mP((p.x + q.x) / 2, (p.y + q.y) / 2);
        const mUnit = p => { const l = mLen(p) || 1; return mP(p.x / l, p.y / l); };
        const mDot = (p, q) => p.x * q.x + p.y * q.y;
        function mCircum(A, B, C) {
            const d = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
            if (Math.abs(d) < 1e-9) return null;
            const a2 = A.x * A.x + A.y * A.y, b2 = B.x * B.x + B.y * B.y, c2 = C.x * C.x + C.y * C.y;
            return mP((a2 * (B.y - C.y) + b2 * (C.y - A.y) + c2 * (A.y - B.y)) / d, (a2 * (C.x - B.x) + b2 * (A.x - C.x) + c2 * (B.x - A.x)) / d);
        }
        function mFoot(P, A, B) {
            const ab = mSub(B, A);
            const t = mDot(mSub(P, A), ab) / mDot(ab, ab);
            return { p: mAdd(A, mMul(ab, t)), t };
        }
        function mAngle(V, P, Q) {
            const u = mSub(P, V), v = mSub(Q, V);
            return Math.acos(Math.max(-1, Math.min(1, mDot(u, v) / (mLen(u) * mLen(v))))) * 180 / Math.PI;
        }
        function mTriInfo(A, B, C) {
            const a = mLen(mSub(B, C)), b = mLen(mSub(C, A)), c = mLen(mSub(A, B));
            const U = mCircum(A, B, C);
            const G = mMul(mAdd(mAdd(A, B), C), 1 / 3);
            const I = mMul(mAdd(mAdd(mMul(A, a), mMul(B, b)), mMul(C, c)), 1 / (a + b + c));
            const area = Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y)) / 2;
            const r = 2 * area / (a + b + c);
            const H = U ? mSub(mAdd(mAdd(A, B), C), mMul(U, 2)) : null;
            const angles = [mAngle(A, B, C), mAngle(B, C, A), mAngle(C, A, B)];
            return { a, b, c, U, G, I, r, H, R: U ? mLen(mSub(A, U)) : 0, angles, area };
        }
        // Lage eines Punktes: 'innen' | 'außen' | 'Rand'
        function mWhere(P, A, B, C) {
            const s = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
            const tri = s(A, B, C);
            const d = [[A, B], [B, C], [C, A]].map(([p, q]) => {
                const f = mFoot(P, p, q);
                return (f.t >= -0.01 && f.t <= 1.01) ? mLen(mSub(P, f.p)) : Infinity;
            });
            if (Math.min(...d) < 3) return 'Rand';
            const s1 = s(A, B, P) * tri, s2 = s(B, C, P) * tri, s3 = s(C, A, P) * tri;
            return (s1 > 0 && s2 > 0 && s3 > 0) ? 'innen' : 'außen';
        }

        const M_COL = { ms: '#e11d48', wh: '#d97706', ho: '#059669', sh: '#7c3aed', smd: '#0284c7' };

        // zeichnet ein Dreieck mit den gewünschten Linien (als SVG-Inhalt)
        function mTriInner(A, B, C, o) {
            const inf = mTriInfo(A, B, C);
            const G = inf.G;
            const far = 2000;
            const line = (p, q, col, extra) => `<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}" stroke="${col}" ${extra || 'stroke-width="2"'} />`;
            const dot = (p, col, label) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" fill="${col}" stroke="#fff" stroke-width="1.5" />` + (label ? `<text x="${(p.x + 8).toFixed(1)}" y="${(p.y - 8).toFixed(1)}" fill="${col}" font-weight="800">${label}</text>` : '');
            let s = `<polygon points="${[A, B, C].map(p => p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ')}" fill="rgba(37,99,235,.07)" stroke="#1e3a8a" stroke-width="2.4" stroke-linejoin="round" />`;
            const sides = [[B, C], [C, A], [A, B]];
            if (o.smd) {
                const M = sides.map(([p, q]) => mMid(p, q));
                s += `<polygon points="${M.map(p => p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ')}" fill="rgba(2,132,199,.08)" stroke="${M_COL.smd}" stroke-width="2" stroke-dasharray="6 4" />`;
            }
            if (o.ms) {
                sides.forEach(([p, q]) => {
                    const M = mMid(p, q), n = mUnit(mP(-(q.y - p.y), q.x - p.x));
                    s += line(mAdd(M, mMul(n, -far)), mAdd(M, mMul(n, far)), M_COL.ms, 'stroke-width="1.8" stroke-dasharray="7 5"');
                    s += `<rect x="${(M.x - 3).toFixed(1)}" y="${(M.y - 3).toFixed(1)}" width="6" height="6" fill="${M_COL.ms}" />`;
                });
                if (inf.U) s += `<circle cx="${inf.U.x.toFixed(1)}" cy="${inf.U.y.toFixed(1)}" r="${inf.R.toFixed(1)}" fill="none" stroke="${M_COL.ms}" stroke-width="2.2" />` + dot(inf.U, M_COL.ms, 'U');
            }
            if (o.wh) {
                [[A, B, C, inf.b, inf.c], [B, C, A, inf.c, inf.a], [C, A, B, inf.a, inf.b]].forEach(([V, P, Q]) => {
                    const lp = mLen(mSub(P, V)), lq = mLen(mSub(Q, V));
                    const D = mMul(mAdd(mMul(P, lq), mMul(Q, lp)), 1 / (lp + lq));
                    s += line(V, D, M_COL.wh, 'stroke-width="1.8"');
                });
                const fI = mFoot(inf.I, A, B).p;
                s += `<circle cx="${inf.I.x.toFixed(1)}" cy="${inf.I.y.toFixed(1)}" r="${inf.r.toFixed(1)}" fill="none" stroke="${M_COL.wh}" stroke-width="2.2" />`;
                s += line(inf.I, fI, M_COL.wh, 'stroke-width="1.5" stroke-dasharray="3 3"') + dot(inf.I, M_COL.wh, 'I');
            }
            if (o.ho) {
                [[A, B, C], [B, C, A], [C, A, B]].forEach(([V, P, Q]) => {
                    const f = mFoot(V, P, Q);
                    if (f.t < 0 || f.t > 1) s += line(f.t < 0 ? P : Q, f.p, '#94a3b8', 'stroke-width="1.5" stroke-dasharray="4 4"');
                    s += line(V, f.p, M_COL.ho, 'stroke-width="2"');
                    const u = mUnit(mSub(Q, P)), v = mUnit(mSub(V, f.p));
                    const k = 9, c1 = mAdd(f.p, mMul(u, f.t > 0.5 ? -k : k)), c2 = mAdd(c1, mMul(v, k)), c3 = mAdd(f.p, mMul(v, k));
                    s += `<polyline points="${[c1, c2, c3].map(p => p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ')}" fill="none" stroke="${M_COL.ho}" stroke-width="1.4" />`;
                });
                if (inf.H) {
                    if (mWhere(inf.H, A, B, C) === 'außen') {
                        [[A, B, C], [B, C, A], [C, A, B]].forEach(([V, P, Q]) => {
                            const f = mFoot(V, P, Q);
                            if (f.t < 0 || f.t > 1) s += line(V, inf.H, M_COL.ho, 'stroke-width="1.3" stroke-dasharray="3 4"');
                        });
                    }
                    s += dot(inf.H, M_COL.ho, 'H');
                }
            }
            if (o.sh) {
                [[A, B, C], [B, C, A], [C, A, B]].forEach(([V, P, Q]) => { s += line(V, mMid(P, Q), M_COL.sh, 'stroke-width="2"'); });
                s += dot(G, M_COL.sh, 'S');
            }
            // Beschriftung
            const lab = (V, t) => { const p = mAdd(V, mMul(mUnit(mSub(V, G)), 19)); return `<text x="${p.x.toFixed(1)}" y="${(p.y + 5).toFixed(1)}" text-anchor="middle" font-weight="800" fill="#0f172a" font-size="16">${t}</text>`; };
            const sideLab = (p, q, t) => { const M = mMid(p, q); const n = mUnit(mSub(M, G)); const z = mAdd(M, mMul(n, 15)); return `<text x="${z.x.toFixed(1)}" y="${(z.y + 5).toFixed(1)}" text-anchor="middle" font-style="italic" fill="#334155" font-size="14">${t}</text>`; };
            const angLab = (V, t) => { const p = mAdd(V, mMul(mUnit(mSub(G, V)), 30)); return `<text x="${p.x.toFixed(1)}" y="${(p.y + 5).toFixed(1)}" text-anchor="middle" fill="#475569" font-size="13">${t}</text>`; };
            if (o.labels !== false) {
                s += lab(A, 'A') + lab(B, 'B') + lab(C, 'C');
                s += sideLab(B, C, 'a') + sideLab(C, A, 'b') + sideLab(A, B, 'c');
                if (o.angles) s += angLab(A, 'α') + angLab(B, 'β') + angLab(C, 'γ');
            }
            if (o.handles) [A, B, C].forEach(p => { s += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="11" fill="rgba(37,99,235,.18)" stroke="#2563eb" stroke-width="2" />`; });
            return { svg: s, inf };
        }

        function mTriFigure(o, caption) {
            const A = mP(60, 250), B = mP(380, 250), C = mP(250, 50);
            const r = mTriInner(A, B, C, o);
            // Bildausschnitt: Dreieck (+ Umkreis, falls gezeigt) mit Rand
            let x0 = Math.min(A.x, B.x, C.x), x1 = Math.max(A.x, B.x, C.x), y0 = Math.min(A.y, B.y, C.y), y1 = Math.max(A.y, B.y, C.y);
            if (o.ms && r.inf.U) { x0 = Math.min(x0, r.inf.U.x - r.inf.R); x1 = Math.max(x1, r.inf.U.x + r.inf.R); y0 = Math.min(y0, r.inf.U.y - r.inf.R); y1 = Math.max(y1, r.inf.U.y + r.inf.R); }
            const pad = 32, vb = `${(x0 - pad).toFixed(0)} ${(y0 - pad).toFixed(0)} ${(x1 - x0 + 2 * pad).toFixed(0)} ${(y1 - y0 + 2 * pad).toFixed(0)}`;
            return `<figure class="panel p-3 my-2"><svg viewBox="${vb}" class="w-full h-auto block mx-auto" style="max-height:320px;font-family:inherit" role="img" aria-label="${mEsc(caption)}">${r.svg}</svg><figcaption class="text-[11px] text-slate-500 mt-1">${caption}</figcaption></figure>`;
        }

        // ==========================================
        // BOXEN & HÖLZCHEN
        // ==========================================
        function mBoxesHTML(boxes, sticks, small) {
            const bw = small ? 13 : 22, bh = small ? 20 : 34, sw = small ? 3 : 4;
            let h = '';
            for (let i = 0; i < boxes; i++) h += `<span class="inline-block rounded-[4px]" style="width:${bw}px;height:${bh}px;background:#b91c1c;box-shadow:inset 0 -3px 0 rgba(0,0,0,.18)"></span>`;
            if (boxes && sticks) h += `<span class="inline-block" style="width:${small ? 4 : 8}px"></span>`;
            for (let i = 0; i < sticks; i++) {
                h += `<span class="inline-block rounded-sm" style="width:${sw}px;height:${bh}px;background:#1e293b"></span>`;
                if ((i + 1) % 5 === 0 && i + 1 < sticks) h += `<span class="inline-block" style="width:${small ? 3 : 7}px"></span>`;
            }
            if (!boxes && !sticks) h = `<span class="text-slate-400 text-xs italic">leer</span>`;
            return `<span class="inline-flex flex-wrap items-end gap-[3px]">${h}</span>`;
        }

        // ==========================================
        // LERNBILDER in den Level-Texten (data-mfig="…")
        // ==========================================
        function matheAfterRender(root) {
            root.querySelectorAll('[data-mfig]').forEach(el => {
                const k = el.getAttribute('data-mfig');
                if (k === 'graph9') {
                    el.innerHTML = `<div class="grid grid-cols-3 gap-2 my-2">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(g => `<div class="panel p-2"><div class="text-[11px] font-extrabold text-slate-600 mb-1">Graph ${g} · Tabelle ${mTableOfGraph(g)}</div>${mMiniGraph(mTableOfGraph(g))}</div>`).join('')}</div><p class="text-[11px] text-slate-500">Nachgezeichnet nach den Wertetabellen von S. 19. Im Mathe-Labor („Graph-Detektiv“) kannst du die Zuordnung selbst üben.</p>`;
                } else if (k === 'pfeile') {
                    const row = (y, parts, res) => {
                        const xs = [20, 52, 76, 100, 130, 160, 186];
                        let t = parts.map((p, i) => `<text x="${xs[i]}" y="${y}" text-anchor="middle">${p}</text>`).join('');
                        t += `<text x="214" y="${y}">= ${res}</text>`;
                        const arrow = (x1, x2, hgt) => `<path d="M ${x1} ${y - 18} Q ${(x1 + x2) / 2} ${y - 18 - hgt} ${x2} ${y - 20}" fill="none" stroke="#2563eb" stroke-width="2" /><polygon points="${x2},${y - 16} ${x2 - 6},${y - 25} ${x2 + 5},${y - 26}" fill="#2563eb" />`;
                        return t + arrow(xs[0], xs[3], 26) + arrow(xs[0], xs[5], 50);
                    };
                    el.innerHTML = `<figure class="panel p-3 my-2"><svg viewBox="0 0 420 180" class="w-full h-auto block" style="max-height:200px;font-family:'Fira Code',ui-monospace,monospace;font-size:20px" role="img" aria-label="Distributivgesetz mit Pfeilen">
                        ${row(80, ['3', '·', '(', 'x', '+', '2', ')'], '3x + 6')}
                        ${row(160, ['−2', '·', '(', 'x', '−', '4', ')'], '−2x + 8')}
                    </svg><figcaption class="text-[11px] text-slate-500 mt-1">Jeder Pfeil ist eine Multiplikation: 3 · x und 3 · 2 · (−2) · x und (−2) · (−4) = +8.</figcaption></figure>`;
                } else if (k === 'boxen') {
                    const rows = [[4, 8, 2, 14, '4x + 8 = 2x + 14'], [2, 8, 0, 14, '2x + 8 = 14'], [2, 0, 0, 6, '2x = 6'], [1, 0, 0, 3, 'x = 3']];
                    el.innerHTML = `<div class="panel p-3 my-2 space-y-2">${rows.map((r, i) => `<div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-extrabold text-slate-500 w-24">Anordnung ${i + 1}</span>${mBoxesHTML(r[0], r[1], true)}<span class="font-extrabold text-slate-500">=</span>${mBoxesHTML(r[2], r[3], true)}<span class="font-mono-letter text-xs text-blue-800 ml-auto">${r[4]}</span></div>`).join('')}<p class="text-[11px] text-slate-500">Rote Box = x (gleich viele Hölzchen in jeder Box). Probiere es im Mathe-Labor unter „Knack die Box“.</p></div>`;
                } else if (k === 'umkreis') {
                    el.innerHTML = mTriFigure({ ms: true, angles: false }, 'Mittelsenkrechten (rot gestrichelt) schneiden sich in U – der Umkreis geht durch A, B und C.');
                } else if (k === 'inkreis') {
                    el.innerHTML = mTriFigure({ wh: true, angles: true }, 'Winkelhalbierende (orange) schneiden sich in I – der Radius ist das Lot von I auf eine Seite (gepunktet).');
                } else if (k === 'hoehe-sh') {
                    el.innerHTML = `<div class="grid sm:grid-cols-2 gap-2">${mTriFigure({ ho: true }, 'Höhen (grün) mit rechtem Winkel – Schnittpunkt H.')}${mTriFigure({ sh: true, smd: true }, 'Seitenhalbierende (violett) – Schnittpunkt S (Schwerpunkt); blau gestrichelt: Seitenmittendreieck.')}</div>`;
                } else if (k === 'trapez') {
                    el.innerHTML = `<figure class="panel p-3 my-2"><svg viewBox="0 0 440 220" class="w-full h-auto block" style="max-height:240px;font-family:inherit" role="img" aria-label="Trapez ABCD">${mTrapezInner(8, 5, 3.5, 1.2, 0, { labels: true, scale: 40, ox: 50, oy: 185 })}</svg><figcaption class="text-[11px] text-slate-500 mt-1">Trapez ABCD: g₁ ∥ g₂, Schenkel s₁ und s₂, Höhe h senkrecht zu den parallelen Seiten.</figcaption></figure>`;
                }
            });
        }

        // ==========================================
        // LABOR-RAHMEN
        // ==========================================
        const MATHE_LAB_TABS = [
            ['fa-chart-line', 'Graph-Detektiv'],
            ['fa-box', 'Knack die Box'],
            ['fa-scale-balanced', 'Gleichungs-Trainer'],
            ['fa-square-root-variable', 'Term-Trainer'],
            ['fa-draw-polygon', 'Dreiecks-Labor'],
            ['fa-shapes', 'Trapez (Zusatz)']
        ];

        function renderMatheLabor(idx) {
            idx = idx || 0;
            if (typeof stopLaborAnimations === 'function') stopLaborAnimations();
            const c = document.getElementById('visuals-tab-content');
            c.innerHTML = `
                <div class="glass-card p-6 rounded-3xl space-y-5">
                    <div>
                        <span class="chip">Interaktives Mathe-Labor</span>
                        <h2 class="text-2xl font-extrabold text-slate-800 mt-3">Ausprobieren, umformen, konstruieren</h2>
                        <p class="text-slate-600 text-sm mt-1">Alles passend zu deinen Buchseiten (S. 18–19, 26–33). Tippe, ziehe und rechne – die App prüft sofort.</p>
                    </div>
                    <div class="flex flex-wrap gap-2 border-b border-slate-200/80 pb-3">
                        ${MATHE_LAB_TABS.map((t, i) => `<button type="button" onclick="renderMatheLabor(${i})" class="${i === idx ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}"><i class="fa-solid ${t[0]}"></i> ${t[1]}</button>`).join('')}
                    </div>
                    <div id="mathe-lab-body"></div>
                </div>
            `;
            [mLabGraphs, mLabBoxes, mLabEquations, mLabTerms, mLabTriangle, mLabTrapez][idx]();
        }

        // ---------- 1. Graph-Detektiv ----------
        const mGraphState = { key: 'A', solved: {}, order: null, xr: 4 };
        function mLabGraphs() {
            if (!mGraphState.order) mGraphState.order = mShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const body = document.getElementById('mathe-lab-body');
            body.innerHTML = `
                <div class="space-y-4">
                    <div class="panel p-4 space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="eyebrow">Aufgabe 3 (S. 19): Welche Wertetabelle passt zu welchem Graphen?</div>
                            <div class="text-xs font-extrabold text-slate-500"><i class="fa-solid fa-trophy text-amber-400"></i> <span id="mg-score"></span> / 9 zugeordnet</div>
                        </div>
                        <div class="flex flex-wrap gap-2" id="mg-keys"></div>
                        <div id="mg-table" class="overflow-x-auto"></div>
                        <p class="text-xs text-slate-500">Tippe auf den Graphen, der zu dieser Tabelle passt.</p>
                        <div id="mg-grid" class="grid grid-cols-3 gap-2"></div>
                        <div id="mg-feedback"></div>
                    </div>
                    <div class="panel p-4 space-y-3">
                        <div class="eyebrow">Werte ablesen</div>
                        <div id="mg-big"></div>
                        <div class="flex items-center gap-3">
                            <span class="text-sm font-extrabold whitespace-nowrap">x =</span>
                            <input id="mg-slider" type="range" class="w-full accent-blue-600">
                            <span id="mg-read" class="text-sm font-extrabold whitespace-nowrap min-w-[8rem] text-right"></span>
                        </div>
                        <p class="text-[11px] text-slate-500">So liest du ab: x auf der x-Achse suchen → senkrecht hoch zum Graphen → waagrecht zur y-Achse.</p>
                    </div>
                </div>
            `;
            mGraphRender();
        }
        function mGraphRender() {
            const st = mGraphState, t = M_TABLES[st.key];
            document.getElementById('mg-score').textContent = Object.keys(st.solved).length;
            document.getElementById('mg-keys').innerHTML = Object.keys(M_TABLES).map(k => `<button type="button" onclick="mGraphPick('${k}')" class="btn btn-sm ${k === st.key ? 'btn-primary' : 'btn-ghost'}">${st.solved[k] ? '<i class="fa-solid fa-check"></i> ' : ''}Tabelle ${k}</button>`).join('');
            document.getElementById('mg-table').innerHTML = `<table class="text-sm font-mono-letter border-collapse"><tr><th class="px-2 py-1 text-left bg-amber-100 rounded-l-lg">x</th>${t.x.map(v => `<td class="px-2 py-1 text-right bg-amber-100">${mFmt(v)}</td>`).join('')}</tr><tr><th class="px-2 py-1 text-left bg-amber-50">y</th>${t.y.map(v => `<td class="px-2 py-1 text-right bg-amber-50">${mFmt(v)}</td>`).join('')}</tr></table>`;
            document.getElementById('mg-grid').innerHTML = st.order.map(g => {
                const done = Object.keys(st.solved).find(k => M_TABLES[k].g === g);
                return `<button type="button" onclick="mGraphGuess(${g})" class="panel p-2 text-left hover:shadow-md transition ${done ? 'ring-2 ring-emerald-400' : ''}">
                    <div class="text-[11px] font-extrabold text-slate-600 mb-1">Graph ${g}${done ? ` · <span class="text-emerald-600">Tabelle ${done}</span>` : ''}</div>${mMiniGraph(mTableOfGraph(g))}</button>`;
            }).join('');
            const sl = document.getElementById('mg-slider');
            if (st.key === 'D') { sl.min = 3; sl.max = 90; sl.step = 1; if (st.xr < 3) st.xr = 10; }
            else { sl.min = 0; sl.max = st.key === 'A' ? 6 : 10; sl.step = 0.5; if (st.xr > +sl.max) st.xr = 4; }
            sl.value = st.xr;
            sl.oninput = () => { st.xr = +sl.value; mGraphRead(); };
            mGraphRead();
        }
        function mGraphRead() {
            const st = mGraphState;
            document.getElementById('mg-big').innerHTML = mBigGraph(st.key, st.xr);
            const y = mValueAt(st.key, st.xr);
            document.getElementById('mg-read').textContent = `x = ${mFmt(st.xr)} → y ≈ ${mFmt(Math.round(y * 100) / 100)}`;
        }
        function mGraphPick(k) { mGraphState.key = k; document.getElementById('mg-feedback').innerHTML = ''; mGraphRender(); }
        function mGraphGuess(g) {
            const st = mGraphState, t = M_TABLES[st.key];
            const fb = document.getElementById('mg-feedback');
            if (t.g === g) {
                st.solved[st.key] = true;
                fb.innerHTML = `<div class="feedback ok"><strong><i class="fa-solid fa-circle-check"></i> Richtig – Tabelle ${st.key} gehört zu Graph ${g}.</strong><br>${t.why}</div>`;
                const next = Object.keys(M_TABLES).find(k => !st.solved[k]);
                if (!next && typeof confetti === 'function') confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, zIndex: 9999 });
                mGraphRender();
                if (next) fb.innerHTML += `<button type="button" class="btn btn-ghost btn-sm mt-2" onclick="mGraphPick('${next}')">Weiter mit Tabelle ${next} <i class="fa-solid fa-arrow-right"></i></button>`;
                else fb.innerHTML += `<div class="feedback ok">🎉 Alle neun Tabellen zugeordnet!</div>`;
            } else {
                const other = mTableOfGraph(g);
                fb.innerHTML = `<div class="feedback bad"><strong><i class="fa-solid fa-circle-xmark"></i> Noch nicht.</strong> Graph ${g} passt zu einer Tabelle, in der gilt: ${M_TABLES[other].why}<br>Schau noch einmal, wie sich y in Tabelle ${st.key} verändert.</div>`;
            }
        }

        // ---------- 2. Knack die Box ----------
        const M_BOX_TASKS = [
            { name: 'Aufg. 1: 2x + 4 = x + 6', L: [2, 4], R: [1, 6] },
            { name: 'Aufg. 1: 5x + 3 = 3x + 7', L: [5, 3], R: [3, 7] },
            { name: 'Aufg. 1: 2x + 1 = 5', L: [2, 1], R: [0, 5] },
            { name: 'Anordnung 1: 4x + 8 = 2x + 14', L: [4, 8], R: [2, 14] },
            { name: 'Gleichung 1: 4x + 6 = 2x + 12', L: [4, 6], R: [2, 12] },
            { name: 'Gleichung 2: 4x + 10 = 6x + 2', L: [4, 10], R: [6, 2] },
            { name: 'Gleichung 3: 6x + 2 = 2x + 14', L: [6, 2], R: [2, 14] },
            { name: 'Gleichung 4: 5x + 3 = 2x + 15', L: [5, 3], R: [2, 15] }
        ];
        let mBox = null;
        function mBoxStart(i) {
            const t = M_BOX_TASKS[i];
            mBox = { i, L: t.L.slice(), R: t.R.slice(), hist: [], undo: [] };
            mBoxRender();
        }
        function mLabBoxes() {
            const body = document.getElementById('mathe-lab-body');
            body.innerHTML = `
                <div class="space-y-4">
                    <div class="panel p-4 space-y-2">
                        <div class="eyebrow">Knack die Box (S. 26)</div>
                        <p class="text-sm text-slate-600">In jeder Box liegen gleich viele Hölzchen. Auf beiden Seiten liegen gleich viele Hölzchen. Nimm auf beiden Seiten dasselbe weg, bis eine Box allein dasteht.</p>
                        <div class="flex flex-wrap gap-2" id="mb-tasks"></div>
                    </div>
                    <div id="mb-main"></div>
                </div>
            `;
            document.getElementById('mb-tasks').innerHTML = M_BOX_TASKS.map((t, i) => `<button type="button" class="btn btn-ghost btn-sm" id="mb-t-${i}" onclick="mBoxStart(${i})">${t.name}</button>`).join('');
            mBoxStart(mBox ? mBox.i : 3);
        }
        function mBoxEq(L, R) { return `${mLin(L[0], L[1])} = ${mLin(R[0], R[1])}`; }
        function mBoxRender() {
            const b = mBox, t = M_BOX_TASKS[b.i];
            M_BOX_TASKS.forEach((_, i) => { const el = document.getElementById('mb-t-' + i); if (el) el.className = 'btn btn-sm ' + (i === b.i ? 'btn-primary' : 'btn-ghost'); });
            const [lb, ls] = b.L, [rb, rs] = b.R;
            const solvedVal = (lb === 1 && ls === 0 && rb === 0) ? rs : (rb === 1 && rs === 0 && lb === 0) ? ls : null;
            const canBox = lb >= 1 && rb >= 1;
            const canStick = ls >= 1 && rs >= 1;
            const canHalf = [lb, ls, rb, rs].every(v => v % 2 === 0) && (lb + ls + rb + rs) > 0;
            let divN = 0;
            if (lb >= 2 && ls === 0 && rb === 0 && rs % lb === 0) divN = lb;
            if (rb >= 2 && rs === 0 && lb === 0 && ls % rb === 0) divN = rb;
            const btn = (ok, fn, label, why) => `<button type="button" class="btn btn-sm ${ok ? 'btn-ghost' : 'btn-ghost is-disabled'}" ${ok ? `onclick="${fn}"` : `disabled title="${why}"`}>${label}</button>`;
            const orig = t.L.concat(t.R);
            document.getElementById('mb-main').innerHTML = `
                <div class="panel p-4 space-y-4">
                    <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        <div class="rounded-2xl bg-slate-50 border border-slate-200 p-3 min-h-[64px] flex items-center justify-center">${mBoxesHTML(lb, ls)}</div>
                        <div class="text-2xl font-extrabold text-slate-500">=</div>
                        <div class="rounded-2xl bg-slate-50 border border-slate-200 p-3 min-h-[64px] flex items-center justify-center">${mBoxesHTML(rb, rs)}</div>
                    </div>
                    <div class="text-center font-mono-letter text-xl font-bold text-blue-900">${mBoxEq(b.L, b.R)}</div>
                    <div class="flex flex-wrap gap-2 justify-center">
                        ${btn(canBox, 'mBoxOp(\'box\')', '<i class="fa-solid fa-minus"></i> 1 Box auf beiden Seiten', 'Auf beiden Seiten muss mindestens eine Box liegen.')}
                        ${btn(canStick, 'mBoxOp(\'stick\')', '<i class="fa-solid fa-minus"></i> 1 Hölzchen auf beiden Seiten', 'Auf beiden Seiten muss mindestens ein Hölzchen liegen.')}
                        ${btn(canHalf, 'mBoxOp(\'half\')', '½ Hälfte nehmen', 'Geht nur, wenn alle Anzahlen gerade sind.')}
                        ${btn(divN > 0, 'mBoxOp(\'div\')', divN ? `: ${divN} auf ${divN} Boxen verteilen` : ': auf die Boxen verteilen', 'Geht erst, wenn auf einer Seite nur Boxen und auf der anderen nur Hölzchen liegen.')}
                    </div>
                    <div class="flex flex-wrap gap-2 justify-center">
                        <button type="button" class="btn btn-ghost btn-sm" onclick="mBoxUndo()" ${b.undo.length ? '' : 'disabled'}><i class="fa-solid fa-rotate-left"></i> Zurück</button>
                        <button type="button" class="btn btn-ghost btn-sm" onclick="mBoxStart(${b.i})"><i class="fa-solid fa-arrows-rotate"></i> Neu starten</button>
                    </div>
                    <div class="rounded-2xl bg-white/80 border border-slate-200 p-3">
                        <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">Dein Lösungsweg</div>
                        <div class="font-mono-letter text-sm space-y-0.5">${[mBoxEq(t.L, t.R)].concat(b.hist.map(h => h.eq)).map((eq, i) => `<div>${eq}${b.hist[i] ? ` <span class="text-blue-600">&nbsp;| ${b.hist[i].op}</span>` : ''}</div>`).join('')}</div>
                    </div>
                    ${solvedVal !== null ? `<div class="feedback ok"><strong><i class="fa-solid fa-box-open"></i> Geknackt! x = ${solvedVal}</strong> – in jeder Box liegen ${solvedVal} Hölzchen.<br>Probe: ${mFmt(orig[0] * solvedVal + orig[1])} = ${mFmt(orig[2] * solvedVal + orig[3])} ✓ (${t.L[0]} · ${solvedVal} + ${t.L[1]} links, ${t.R[0]} · ${solvedVal} + ${t.R[1]} rechts)</div>` : ''}
                </div>
            `;
            if (solvedVal !== null && b.hist.length && !b.cheered) { b.cheered = true; if (typeof confetti === 'function') confetti({ particleCount: 60, spread: 60, origin: { y: 0.65 }, zIndex: 9999 }); }
        }
        function mBoxOp(kind) {
            const b = mBox;
            b.undo.push({ L: b.L.slice(), R: b.R.slice(), hist: b.hist.map(h => Object.assign({}, h)) });
            let op = '';
            const last = b.hist[b.hist.length - 1];
            if (kind === 'box') { b.L[0]--; b.R[0]--; }
            if (kind === 'stick') { b.L[1]--; b.R[1]--; }
            if (kind === 'half') { b.L = b.L.map(v => v / 2); b.R = b.R.map(v => v / 2); op = ': 2'; }
            if (kind === 'div') { const n = b.L[0] || b.R[0]; b.L = b.L.map(v => v / n); b.R = b.R.map(v => v / n); op = ': ' + n; }
            const eq = mBoxEq(b.L, b.R);
            if (kind === 'box' || kind === 'stick') {
                const k = kind === 'box' ? 'x' : '';
                if (last && last.kind === kind) {
                    last.n++; last.op = '− ' + (kind === 'box' ? (last.n === 1 ? 'x' : last.n + 'x') : last.n); last.eq = eq;
                } else b.hist.push({ kind, n: 1, op: '− ' + (k || '1'), eq });
            } else b.hist.push({ kind, op, eq });
            mBoxRender();
        }
        function mBoxUndo() {
            const b = mBox, u = b.undo.pop();
            if (!u) return;
            b.L = u.L; b.R = u.R; b.hist = u.hist;
            mBoxRender();
        }

        // ---------- 3. Gleichungs-Trainer ----------
        const M_EQ_TASKS = [
            { name: '7 A', show: '5x − 12 = 3x + 8', s: [5, -12, 3, 8] },
            { name: '7 B', show: '5x − 12 = −x', s: [5, -12, -1, 0] },
            { name: '7 C', show: '5x − 12 = 3(x + 2)', raw: true, s: [5, -12, 3, 6] },
            { name: '7 D', show: '5(x − 3) = 2(x + 6)', raw: true, s: [5, -15, 2, 12] },
            { name: '7 E', show: '5x − 12 = 7x : 2', raw: true, s: [5, -12, 3.5, 0] },
            { name: '7 F', show: '9x + 12 = 3(x − 2)', raw: true, s: [9, 12, 3, -6] },
            { name: '7 G', show: '3x + 9 = 9', s: [3, 9, 0, 9] },
            { name: '7 I', show: '2(x + 2) = 2x', raw: true, s: [2, 4, 2, 0] },
            { name: 'Aufg. 5', show: '7,5x + 20 = 5x + 30', s: [7.5, 20, 5, 30] },
            { name: 'Rechentraining', show: '0,1x = 10', s: [0.1, 0, 0, 10] },
            { name: 'Klausur-Mix', show: '3(2x + 1) − (x − 4) = 2(x + 8)', raw: true, s: [5, 7, 2, 16] },
            { name: 'Klausur-Mix 2', show: '2,5x − (x − 3) = ½(2x + 10)', raw: true, s: [1.5, 3, 1, 5] }
        ];
        let mEq = null;
        function mLabEquations() {
            const body = document.getElementById('mathe-lab-body');
            body.innerHTML = `
                <div class="space-y-4">
                    <div class="panel p-4 space-y-2">
                        <div class="eyebrow">Zahlen auspacken (S. 27): Bringe die Gleichung in die Form x = …</div>
                        <p class="text-sm text-slate-600">Wähle eine Rechnung, gib einen Wert oder Term ein (z. B. <span class="font-mono-letter">3x</span>, <span class="font-mono-letter">12</span>, <span class="font-mono-letter">2,5</span>) – die App rechnet sie auf <strong>beiden Seiten</strong>.</p>
                        <div class="flex flex-wrap gap-2" id="me-tasks"></div>
                    </div>
                    <div id="me-main"></div>
                </div>
            `;
            document.getElementById('me-tasks').innerHTML = M_EQ_TASKS.map((t, i) => `<button type="button" class="btn btn-ghost btn-sm" id="me-t-${i}" onclick="mEqStart(${i})">${t.name}</button>`).join('');
            mEqStart(mEq ? mEq.i : 0);
        }
        function mEqStart(i) {
            const t = M_EQ_TASKS[i];
            mEq = { i, s: t.s.slice(), raw: !!t.raw, hist: [], op: '-', showSol: false, msg: '' };
            mEqRender();
        }
        function mEqStr(s) { return `${mLin(s[0], s[1])} = ${mLin(s[2], s[3])}`; }
        function mEqSolved(s) {
            const [a, b, c, d] = s.map(mRound);
            if (a === 1 && b === 0 && c === 0) return { x: d };
            if (c === 1 && d === 0 && a === 0) return { x: b };
            if (a === 0 && c === 0) return b === d ? { all: true } : { none: true };
            return null;
        }
        function mEqSolution(t) {
            let [a, b, c, d] = t.s;
            const steps = [];
            if (t.raw) steps.push(`${t.show} &nbsp;<span class="text-blue-600">| vereinfachen (7)</span>`);
            const push = op => steps.push(`${mEqStr([a, b, c, d])}${op ? ` &nbsp;<span class="text-blue-600">| ${op}</span>` : ''}`);
            if (c !== 0) { push(c > 0 ? `− ${mLin(c, 0)}` : `+ ${mLin(-c, 0)}`); a = mRound(a - c); c = 0; }
            if (a === 0) { push(''); steps.push(mRound(b) === mRound(d) ? 'Jede Zahl ist eine Lösung.' : `<strong>${mFmt(b)} = ${mFmt(d)} ist falsch → keine Lösung.</strong>`); return steps; }
            if (b !== 0) { push(b > 0 ? `− ${mFmt(b)}` : `+ ${mFmt(-b)}`); d = mRound(d - b); b = 0; }
            if (a !== 1) { push(`: ${a < 0 ? '(' + mFmt(a) + ')' : mFmt(a)}`); d = mRound(d / a); a = 1; }
            steps.push(`<strong>x = ${mFmt(d)}</strong>`);
            return steps;
        }
        function mEqRender() {
            const e = mEq, t = M_EQ_TASKS[e.i];
            M_EQ_TASKS.forEach((_, i) => { const el = document.getElementById('me-t-' + i); if (el) el.className = 'btn btn-sm ' + (i === e.i ? 'btn-primary' : 'btn-ghost'); });
            const sol = e.raw ? null : mEqSolved(e.s);
            const lines = [t.show].concat(e.hist.map(h => h.eq));
            const ops = [['+', 'plus'], ['-', 'minus'], ['*', 'mal'], ['/', 'geteilt durch']];
            const opSym = { '+': '+', '-': '−', '*': '·', '/': ':' };
            document.getElementById('me-main').innerHTML = `
                <div class="panel p-4 space-y-4">
                    <div class="rounded-2xl bg-white/80 border border-slate-200 p-3">
                        <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">Lösungsweg</div>
                        <div class="font-mono-letter text-base md:text-lg space-y-1">${lines.map((l, i) => `<div>${l}${e.hist[i] ? ` <span class="text-blue-600 text-sm">&nbsp;| ${e.hist[i].op}</span>` : ''}</div>`).join('')}</div>
                    </div>
                    ${e.raw ? `
                        <div class="flex flex-wrap items-center gap-2">
                            <button type="button" class="btn btn-primary btn-sm" onclick="mEqSimplify()"><i class="fa-solid fa-wand-magic-sparkles"></i> Vereinfachen (Umformung 7)</button>
                            <span class="text-xs text-slate-500">Erst Klammern auflösen und zusammenfassen – dann umformen. Rechne es vorher selbst im Heft!</span>
                        </div>` : sol ? '' : `
                        <div class="space-y-2">
                            <div class="flex flex-wrap gap-2">${ops.map(([k, l]) => `<button type="button" class="btn btn-sm ${e.op === k ? 'btn-primary' : 'btn-ghost'}" onclick="mEqSetOp('${k}')">${opSym[k]} ${l}</button>`).join('')}</div>
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="font-mono-letter text-lg font-bold text-blue-700">| ${opSym[e.op]}</span>
                                <input id="me-in" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${e.op === '*' || e.op === '/' ? 'z. B. 2' : 'z. B. 3x oder 12'}" class="w-36 rounded-xl border border-slate-300 bg-white px-3 py-2 text-base font-mono-letter" onkeydown="if(event.key==='Enter'){mEqApply()}">
                                <button type="button" class="btn btn-primary btn-sm" onclick="mEqApply()">Auf beiden Seiten rechnen</button>
                            </div>
                        </div>`}
                    <div id="me-msg">${e.msg}</div>
                    ${sol ? (sol.x !== undefined ? `<div class="feedback ok"><strong><i class="fa-solid fa-circle-check"></i> Ausgepackt: x = ${mFmt(sol.x)}</strong><br>Probe in der Ausgangsgleichung: links ${mFmt(t.s[0] * sol.x + t.s[1])}, rechts ${mFmt(t.s[2] * sol.x + t.s[3])} ✓</div>`
                        : sol.none ? `<div class="feedback ok"><strong>Keine Lösung!</strong> Links und rechts bleiben verschiedene Zahlen stehen – diese Aussage ist für jedes x falsch.</div>`
                        : `<div class="feedback ok"><strong>Jede Zahl ist eine Lösung.</strong></div>`) : ''}
                    <div class="flex flex-wrap gap-2">
                        <button type="button" class="btn btn-ghost btn-sm" onclick="mEqUndo()" ${e.hist.length ? '' : 'disabled'}><i class="fa-solid fa-rotate-left"></i> Zurück</button>
                        <button type="button" class="btn btn-ghost btn-sm" onclick="mEqStart(${e.i})"><i class="fa-solid fa-arrows-rotate"></i> Neu</button>
                        <button type="button" class="btn btn-ghost btn-sm" onclick="mEqToggleSol()"><i class="fa-solid fa-magnifying-glass"></i> Musterlösung ${e.showSol ? 'ausblenden' : 'anzeigen'}</button>
                    </div>
                    ${e.showSol ? `<div class="lesson lesson-example"><div class="lesson-title"><span>🔍</span> Musterlösung</div><div class="font-mono-letter text-sm space-y-1">${mEqSolution(t).map(l => `<div>${l}</div>`).join('')}</div></div>` : ''}
                </div>
            `;
            const inp = document.getElementById('me-in');
            if (inp && e.focus) { inp.focus(); e.focus = false; }
        }
        function mEqSetOp(k) { mEq.op = k; mEq.msg = ''; mEqRender(); }
        function mEqToggleSol() { mEq.showSol = !mEq.showSol; mEqRender(); }
        function mEqSimplify() {
            const e = mEq;
            e.hist.push({ op: 'vereinfacht (7)', eq: mEqStr(e.s), prev: e.s.slice(), prevRaw: true });
            e.raw = false; e.msg = '';
            mEqRender();
        }
        function mParseTerm(raw) {
            let s = String(raw || '').trim().replace(/−/g, '-').replace(/,/g, '.').replace(/\s+/g, '').replace(/½/g, '0.5').toLowerCase();
            const m = s.match(/^([+-]?)(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?|\.\d+)?(x?)$/);
            if (!m || (!m[2] && !m[3])) return null;
            let v = 1;
            if (m[2]) { const [p, q] = m[2].split('/'); v = q !== undefined ? +p / +q : +p; }
            if (!isFinite(v)) return null;
            if (m[1] === '-') v = -v;
            return { v, x: m[3] === 'x' };
        }
        function mEqApply() {
            const e = mEq;
            const inp = document.getElementById('me-in');
            const t = mParseTerm(inp ? inp.value : '');
            const bad = txt => { e.msg = `<div class="feedback bad">${txt}</div>`; mEqRender(); };
            if (!t) return bad('Bitte eine Zahl oder einen Term wie <span class="font-mono-letter">3x</span>, <span class="font-mono-letter">−2</span> oder <span class="font-mono-letter">2,5</span> eingeben.');
            if ((e.op === '*' || e.op === '/') && t.x) return bad('Mit x malnehmen oder durch x teilen gehört nicht zu den sieben Umformungen. Nimm eine Zahl.');
            if ((e.op === '*' || e.op === '/') && t.v === 0) return bad(e.op === '*' ? 'Mit 0 malnehmen ist keine Äquivalenzumformung – danach stünde 0 = 0 da und die Lösung wäre verloren.' : 'Durch 0 darf man nicht teilen.');
            if ((e.op === '+' || e.op === '-') && t.v === 0) return bad('Plus oder minus 0 verändert nichts.');
            let [a, b, c, d] = e.s;
            const prev = e.s.slice();
            if (e.op === '+' || e.op === '-') {
                const k = e.op === '+' ? t.v : -t.v;
                if (t.x) { a += k; c += k; } else { b += k; d += k; }
            } else {
                const k = e.op === '*' ? t.v : 1 / t.v;
                a *= k; b *= k; c *= k; d *= k;
            }
            e.s = [a, b, c, d].map(mRound);
            const sym = { '+': '+', '-': '−', '*': '·', '/': ':' }[e.op];
            const shown = t.x ? mLin(Math.abs(t.v), 0) : mFmt(Math.abs(t.v));
            const opTxt = (e.op === '+' || e.op === '-') ? `${t.v < 0 ? (e.op === '+' ? '−' : '+') : sym} ${shown}` : `${sym} ${t.v < 0 ? '(' + mFmt(t.v) + ')' : mFmt(t.v)}`;
            e.hist.push({ op: opTxt, eq: mEqStr(e.s), prev });
            const [na, , nc] = e.s;
            e.msg = '';
            if (na !== 0 && nc !== 0 && Math.abs(na) + Math.abs(nc) > Math.abs(prev[0]) + Math.abs(prev[2]) + 1e-9 && (e.op === '+' || e.op === '-') && t.x) {
                e.msg = `<div class="feedback bad">Erlaubt, aber jetzt steht auf beiden Seiten noch mehr x. Tipp: Mit der Gegenrechnung verschwindet das x auf einer Seite.</div>`;
            }
            e.focus = true;
            mEqRender();
            if (mEqSolved(e.s) && mEqSolved(e.s).x !== undefined && typeof confetti === 'function') confetti({ particleCount: 60, spread: 60, origin: { y: 0.65 }, zIndex: 9999 });
        }
        function mEqUndo() {
            const e = mEq, h = e.hist.pop();
            if (!h) return;
            e.s = h.prev;
            if (h.prevRaw) e.raw = true;
            e.msg = '';
            mEqRender();
        }

        // ---------- 4. Term-Trainer ----------
        const M_SUP = { 1: '', 2: '²', 3: '³', 4: '⁴' };
        function mMono(c, v, opts) {
            // v: { a: 1, b: 2 } → "ab²", Koeffizient c
            const keys = Object.keys(v).filter(k => v[k] > 0).sort();
            if (opts && opts.reverse) keys.reverse();
            const vs = keys.map(k => k + M_SUP[v[k]]).join('');
            const ac = Math.abs(c);
            const coef = vs && ac === 1 ? '' : mFmt(ac);
            return { neg: c < 0, body: coef + vs };
        }
        function mPoly(terms) {
            const list = terms.filter(t => mRound(t.c) !== 0);
            if (!list.length) return '0';
            return list.map((t, i) => { const m = mMono(mRound(t.c), t.v, t); return i === 0 ? (m.neg ? '−' : '') + m.body : (m.neg ? ' − ' : ' + ') + m.body; }).join('');
        }
        function mUniqueOptions(correct, distractors, maker) {
            const out = [correct];
            for (const d of distractors) if (d && !out.includes(d)) out.push(d);
            let guard = 0;
            while (out.length < 4 && guard++ < 40) { const d = maker(); if (d && !out.includes(d)) out.push(d); }
            return out.slice(0, 4);
        }
        const M_TERM_KINDS = { prod: 'Produkte', sum: 'Zusammenfassen', klammer: 'Plus-/Minusklammern', mal: 'Malklammern' };
        function mTermTask(kind) {
            const nz = arr => mPick(arr.filter(v => v !== 0));
            if (kind === 'prod') {
                const pair = mPick([['a', 'b'], ['x', 'y'], ['m', 'n']]);
                const n1 = mPick([2, 3, 4, 5, -2, -3]), n2 = mPick([2, 2.5, 0.5, 1.5, 3, -2]);
                const pattern = mPick([[0, 1, 1], [0, 0, 1], [0, 1], [0, 0, 0]]);
                const vars = {};
                pattern.forEach(i => { vars[pair[i]] = (vars[pair[i]] || 0) + 1; });
                const factors = mShuffle([n1, n2].map(n => n < 0 ? `(${mFmt(n)})` : mFmt(n)).concat(pattern.map(i => pair[i])));
                const c = mRound(n1 * n2);
                const correct = mPoly([{ c, v: vars }]);
                const flat = {}; Object.keys(vars).forEach(k => { flat[k] = 1; });
                const swapped = {}; const ks = Object.keys(vars); if (ks.length === 2) { swapped[ks[0]] = vars[ks[1]]; swapped[ks[1]] = vars[ks[0]]; }
                const opts = mUniqueOptions(correct, [mPoly([{ c: mRound(n1 + n2), v: vars }]), mPoly([{ c, v: flat }]), ks.length === 2 ? mPoly([{ c, v: swapped }]) : mPoly([{ c: -c, v: vars }])], () => mPoly([{ c: c + mPick([-2, -1, 1, 2]), v: vars }]));
                return { q: `Fasse zusammen: <span class="font-mono-letter">${factors.join(' · ')}</span>`, opts, exp: `Zahlen nach vorne: ${mFmt(n1)} · ${mFmt(n2)} = ${mFmt(c)}. Variablen alphabetisch, gleiche als Potenz → <strong>${correct}</strong>.` };
            }
            if (kind === 'sum') {
                const set = mPick([[{ a: 1, b: 1 }, { a: 1, b: 2 }], [{ x: 1 }, { x: 2 }], [{ x: 1 }, { y: 1 }], [{ a: 1 }, { b: 1 }]]);
                const X = set[0], Y = set[1];
                const p = nz([2, 3, 4, 5, 6, 7, 1.5, 2.5]), r = nz([-1, -2, -3, -4, 2, 3, -0.5]), q = nz([2, 3, 4, 5, 6]), s = nz([-1, -2, -3, -5, 1, 4]);
                const rev = !!X.b && !!X.a;
                const shown = mShuffle([{ c: p, v: X }, { c: q, v: Y }, { c: r, v: X, reverse: rev }, { c: s, v: Y }]);
                const correct = mPoly([{ c: p + r, v: X }, { c: q + s, v: Y }]);
                const opts = mUniqueOptions(correct, [
                    mPoly([{ c: p + r + q + s, v: X }]),
                    mPoly([{ c: p - r, v: X }, { c: q + s, v: Y }]),
                    mPoly([{ c: p + r, v: X }, { c: q - s, v: Y }])
                ], () => mPoly([{ c: p + r + mPick([-1, 1]), v: X }, { c: q + s, v: Y }]));
                return { q: `Vereinfache: <span class="font-mono-letter">${mPoly(shown)}</span>`, opts, exp: `Nur gleichartige Glieder zusammenfassen: ${mPoly([{ c: 1, v: X }])}-Glieder: ${mFmt(p)} ${r < 0 ? '−' : '+'} ${mFmt(Math.abs(r))} = ${mFmt(p + r)} · ${mPoly([{ c: 1, v: Y }])}-Glieder: ${mFmt(q)} ${s < 0 ? '−' : '+'} ${mFmt(Math.abs(s))} = ${mFmt(q + s)} → <strong>${correct}</strong>.` };
            }
            if (kind === 'klammer') {
                const m = nz([2, 3, 4, 5, 6, 7]), n = nz([1, 2, 3, 4]), k = nz([2, 3, 4, 5, 6, 7]);
                const minus = Math.random() < 0.7;
                const inner = mPick([-1, 1]);
                const expr = `${m}x ${minus ? '−' : '+'} (${mLin(n, inner * k)})`;
                const sg = minus ? -1 : 1;
                const correct = mLin(m + sg * n, sg * inner * k);
                const opts = mUniqueOptions(correct, [mLin(m + sg * n, inner * k), mLin(m - sg * n, sg * inner * k), mLin(m + sg * n, -sg * inner * k + (minus ? 0 : 0))], () => mLin(m + sg * n + mPick([-1, 1]), sg * inner * k));
                return { q: `Löse die Klammer auf: <span class="font-mono-letter">${expr}</span>`, opts, exp: minus ? `Minus vor der Klammer: Klammer weg und <strong>jedes</strong> Vorzeichen darin umdrehen: ${m}x − ${mLin(n, 0)} ${inner * k > 0 ? '−' : '+'} ${k} → <strong>${correct}</strong>.` : `Plus vor der Klammer: einfach weglassen: ${m}x + ${mLin(n, inner * k)} → <strong>${correct}</strong>.` };
            }
            // mal
            const f = mPick([2, 3, 4, 5, -2, -3, 0.5]), g = nz([1, 2, 3, 4, 5, 6]), h = nz([-6, -4, -3, -2, 2, 3, 4, 8]);
            const fs = f === 0.5 ? '½' : (f < 0 ? mFmt(f) : mFmt(f));
            const correct = mLin(f * g, f * h);
            const opts = mUniqueOptions(correct, [mLin(f * g, h), mLin(f + g, f * h), mLin(f * g, -f * h)], () => mLin(f * g, f * h + mPick([-2, 2])));
            return { q: `Multipliziere aus: <span class="font-mono-letter">${fs}(${mLin(g, h)})</span>`, opts, exp: `Pfeile: ${fs} · ${mLin(g, 0)} = ${mLin(f * g, 0)} und ${fs} · ${h < 0 ? '(' + mFmt(h) + ')' : mFmt(h)} = ${mFmt(f * h)} → <strong>${correct}</strong>.` };
        }
        const mTerm = { kind: 'all', task: null, order: null, answered: null, right: 0, total: 0 };
        function mLabTerms() {
            const body = document.getElementById('mathe-lab-body');
            body.innerHTML = `
                <div class="space-y-4">
                    <div class="panel p-4 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="eyebrow">Terme vereinfachen – unendlich viele Aufgaben</div>
                            <div class="text-xs font-extrabold text-slate-500"><i class="fa-solid fa-circle-check text-emerald-500"></i> <span id="mt-score"></span></div>
                        </div>
                        <div class="flex flex-wrap gap-2" id="mt-kinds"></div>
                    </div>
                    <div id="mt-main"></div>
                </div>
            `;
            mTermNext();
        }
        function mTermKind(k) { mTerm.kind = k; mTermNext(); }
        function mTermNext() {
            const kind = mTerm.kind === 'all' ? mPick(Object.keys(M_TERM_KINDS)) : mTerm.kind;
            mTerm.task = mTermTask(kind);
            mTerm.task.kind = kind;
            mTerm.order = mShuffle([0, 1, 2, 3].slice(0, mTerm.task.opts.length));
            mTerm.answered = null;
            mTermRender();
        }
        function mTermRender() {
            const T = mTerm, t = T.task, keys = 'ABCD';
            document.getElementById('mt-score').textContent = `${T.right} von ${T.total} richtig`;
            document.getElementById('mt-kinds').innerHTML = [['all', 'Gemischt']].concat(Object.entries(M_TERM_KINDS)).map(([k, l]) => `<button type="button" class="btn btn-sm ${T.kind === k ? 'btn-primary' : 'btn-ghost'}" onclick="mTermKind('${k}')">${l}</button>`).join('');
            const answered = T.answered !== null;
            document.getElementById('mt-main').innerHTML = `
                <div class="panel p-4 space-y-3">
                    <span class="chip chip-neutral">${M_TERM_KINDS[t.kind]}</span>
                    <h3 class="text-lg font-extrabold text-slate-800">${t.q}</h3>
                    <div class="space-y-2">${T.order.map((oi, pos) => {
                        let st = '';
                        if (answered) st = oi === 0 ? 'correct' : (oi === T.answered ? 'wrong' : 'dim');
                        return `<button type="button" class="opt ${st}" ${answered ? 'disabled' : ''} onclick="mTermAnswer(${oi})"><span class="key">${keys[pos]}</span><span class="flex-1 font-mono-letter">${t.opts[oi]}</span></button>`;
                    }).join('')}</div>
                    ${answered ? `<div class="feedback ${T.answered === 0 ? 'ok' : 'bad'}"><strong>${T.answered === 0 ? '<i class="fa-solid fa-circle-check"></i> Richtig!' : '<i class="fa-solid fa-circle-xmark"></i> Nicht ganz.'}</strong><br>${t.exp}</div>
                        <button type="button" class="btn btn-primary btn-sm" onclick="mTermNext()">Nächste Aufgabe <i class="fa-solid fa-arrow-right"></i></button>` : ''}
                </div>
            `;
        }
        function mTermAnswer(oi) {
            if (mTerm.answered !== null) return;
            mTerm.answered = oi;
            mTerm.total++;
            if (oi === 0) mTerm.right++;
            mTermRender();
        }

        // ---------- 5. Dreiecks-Labor ----------
        const M_TRI_PRESETS = {
            spitz: [mP(110, 340), mP(500, 340), mP(330, 70)],
            recht: [mP(150, 320), mP(450, 320), mP(150, 100)],
            stumpf: [mP(90, 290), mP(330, 290), mP(380, 150)]
        };
        const mTri = { pts: M_TRI_PRESETS.spitz.map(p => mP(p.x, p.y)), ms: true, wh: false, ho: false, sh: false, smd: false, drag: -1 };
        function mLabTriangle() {
            const body = document.getElementById('mathe-lab-body');
            const tog = (k, label, col) => `<button type="button" id="mtri-${k}" onclick="mTriToggle('${k}')" class="btn btn-sm btn-ghost justify-start w-full"><span class="inline-block w-3 h-3 rounded-full" style="background:${col}"></span> <span class="flex-1 text-left">${label}</span><i class="fa-regular fa-square" id="mtri-${k}-i"></i></button>`;
            body.innerHTML = `
                <div class="grid lg:grid-cols-5 gap-5 items-start">
                    <div class="lg:col-span-3 space-y-3">
                        <div class="panel p-2"><svg id="mtri-svg" viewBox="0 0 600 420" class="w-full h-auto block rounded-xl" style="touch-action:none;font-family:inherit;font-size:13px;background:linear-gradient(#fbfdff,#f1f6fc)" role="img" aria-label="Verschiebbares Dreieck"></svg></div>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs font-bold text-slate-500 self-center">Ecken ziehen oder:</span>
                            <button type="button" class="btn btn-ghost btn-sm" onclick="mTriPreset('spitz')">spitzwinklig</button>
                            <button type="button" class="btn btn-ghost btn-sm" onclick="mTriPreset('recht')">rechtwinklig</button>
                            <button type="button" class="btn btn-ghost btn-sm" onclick="mTriPreset('stumpf')">stumpfwinklig</button>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-3">
                        <div class="panel p-3 space-y-2">
                            <div class="eyebrow">Linien einblenden</div>
                            ${tog('ms', 'Mittelsenkrechten + Umkreis', M_COL.ms)}
                            ${tog('wh', 'Winkelhalbierende + Inkreis', M_COL.wh)}
                            ${tog('ho', 'Höhen + Höhenschnittpunkt', M_COL.ho)}
                            ${tog('sh', 'Seitenhalbierende + Schwerpunkt', M_COL.sh)}
                            ${tog('smd', 'Seitenmittendreieck', M_COL.smd)}
                        </div>
                        <div class="panel p-4 space-y-2" id="mtri-info"></div>
                    </div>
                </div>
            `;
            const svg = document.getElementById('mtri-svg');
            const toSvg = ev => {
                const pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
                const ctm = svg.getScreenCTM();
                const p = ctm ? pt.matrixTransform(ctm.inverse()) : pt;
                return mP(Math.max(14, Math.min(586, p.x)), Math.max(14, Math.min(406, p.y)));
            };
            svg.addEventListener('pointerdown', ev => {
                const p = toSvg(ev);
                let best = -1, bd = 44;
                mTri.pts.forEach((q, i) => { const d = mLen(mSub(p, q)); if (d < bd) { bd = d; best = i; } });
                if (best < 0) return;
                mTri.drag = best;
                try { svg.setPointerCapture(ev.pointerId); } catch (e) { /* ältere Browser */ }
                ev.preventDefault();
            });
            svg.addEventListener('pointermove', ev => {
                if (mTri.drag < 0) return;
                const p = toSvg(ev);
                const others = mTri.pts.filter((_, i) => i !== mTri.drag);
                if (others.every(q => mLen(mSub(p, q)) > 30)) { mTri.pts[mTri.drag] = p; mTriDraw(); }
                ev.preventDefault();
            });
            const end = () => { mTri.drag = -1; };
            svg.addEventListener('pointerup', end);
            svg.addEventListener('pointercancel', end);
            mTriDraw();
        }
        function mTriPreset(k) { mTri.pts = M_TRI_PRESETS[k].map(p => mP(p.x, p.y)); mTriDraw(); }
        function mTriToggle(k) { mTri[k] = !mTri[k]; mTriDraw(); }
        function mTriDraw() {
            const svg = document.getElementById('mtri-svg');
            if (!svg) return;
            const [A, B, C] = mTri.pts;
            const area = Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y)) / 2;
            if (area < 400) { /* fast flach – trotzdem zeichnen, aber ohne Linien */ }
            const r = mTriInner(A, B, C, { ms: mTri.ms && area >= 400, wh: mTri.wh && area >= 400, ho: mTri.ho && area >= 400, sh: mTri.sh, smd: mTri.smd, angles: true, handles: true });
            svg.innerHTML = r.svg;
            ['ms', 'wh', 'ho', 'sh', 'smd'].forEach(k => {
                const b = document.getElementById('mtri-' + k), i = document.getElementById('mtri-' + k + '-i');
                if (b) b.classList.toggle('ring-2', !!mTri[k]);
                if (b) b.classList.toggle('ring-blue-300', !!mTri[k]);
                if (i) i.className = mTri[k] ? 'fa-solid fa-square-check text-blue-600' : 'fa-regular fa-square';
            });
            const inf = r.inf;
            const [al, be, ga] = inf.angles;
            const maxA = Math.max(al, be, ga);
            const type = maxA > 90.5 ? 'stumpfwinklig' : maxA < 89.5 ? 'spitzwinklig' : 'rechtwinklig';
            const where = (P, name) => {
                if (!P) return '';
                const w = mWhere(P, A, B, C);
                const txt = w === 'innen' ? 'innerhalb des Dreiecks' : w === 'außen' ? 'außerhalb des Dreiecks'
                    : (type === 'rechtwinklig' && name === 'H') ? 'in der Ecke mit dem rechten Winkel'
                    : (type === 'rechtwinklig' && name === 'U') ? 'genau in der Mitte der längsten Seite'
                    : 'auf dem Rand (auf einer Seite)';
                return txt;
            };
            const rows = [];
            if (mTri.ms && inf.U) rows.push(`<li><span style="color:${M_COL.ms}" class="font-extrabold">U</span> (Umkreismittelpunkt) liegt ${where(inf.U, 'U')}.</li>`);
            if (mTri.wh) rows.push(`<li><span style="color:${M_COL.wh}" class="font-extrabold">I</span> (Inkreismittelpunkt) liegt ${where(inf.I, 'I')}.</li>`);
            if (mTri.ho && inf.H) rows.push(`<li><span style="color:${M_COL.ho}" class="font-extrabold">H</span> (Höhenschnittpunkt) liegt ${where(inf.H, 'H')}.</li>`);
            if (mTri.sh) rows.push(`<li><span style="color:${M_COL.sh}" class="font-extrabold">S</span> (Schwerpunkt) liegt ${where(inf.G, 'S')}.</li>`);
            const tip = type === 'stumpfwinklig' ? 'Beim stumpfwinkligen Dreieck liegen U und H außerhalb (Aufgabe 4).'
                : type === 'rechtwinklig' ? 'Beim rechtwinkligen Dreieck liegt U in der Mitte der längsten Seite, H in der Ecke mit dem rechten Winkel (Aufgabe 5).'
                : 'Beim spitzwinkligen Dreieck liegen alle vier Punkte innen.';
            document.getElementById('mtri-info').innerHTML = `
                <div class="eyebrow">Messwerte</div>
                <div class="text-sm font-bold">α = ${Math.round(al)}° · β = ${Math.round(be)}° · γ = ${Math.round(ga)}°</div>
                <div class="text-lg font-extrabold">${type}</div>
                ${rows.length ? `<ul class="text-sm space-y-1 list-disc pl-5">${rows.join('')}</ul>` : '<p class="text-sm text-slate-500">Blende links Linien ein.</p>'}
                <p class="text-xs text-slate-500">${tip} I und S liegen immer innen.</p>
            `;
        }

        // ---------- 6. Trapez-Rechner (Zusatz) ----------
        function mTrapezInner(g1, g2, h, off, fig, o) {
            const s = o.scale, ox = o.ox, oy = o.oy;
            const A = mP(ox, oy), B = mP(ox + g1 * s, oy), D = mP(ox + off * s, oy - h * s), C = mP(D.x + g2 * s, D.y);
            const pts = arr => arr.map(p => p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
            let out = '';
            const Lm = mMid(A, D), Rm = mMid(B, C);
            if (fig === 1) {
                const A2 = mSub(mAdd(B, C), A), D2 = mSub(mAdd(B, C), D);
                out += `<polygon points="${pts([C, B, D2, A2])}" fill="rgba(217,119,6,.14)" stroke="#d97706" stroke-width="2" stroke-dasharray="6 4" />`;
            }
            if (fig === 2) {
                const L2 = mSub(mMul(Rm, 2), Lm), D2 = mSub(mMul(Rm, 2), D);
                out += `<polygon points="${pts([Rm, B, D2, L2])}" fill="rgba(217,119,6,.14)" stroke="#d97706" stroke-width="2" stroke-dasharray="6 4" />`;
                out += `<polygon points="${pts([Lm, Rm, C, D])}" fill="rgba(217,119,6,.10)" stroke="none" />`;
                out += `<line x1="${Lm.x}" y1="${Lm.y}" x2="${Rm.x}" y2="${Rm.y}" stroke="#d97706" stroke-width="2.2" />`;
            }
            out += `<polygon points="${pts([A, B, C, D])}" fill="rgba(37,99,235,.08)" stroke="#1e3a8a" stroke-width="2.4" stroke-linejoin="round" />`;
            if (fig === 3) {
                const E = mP(C.x - (D.x - A.x), A.y);
                out += `<polygon points="${pts([A, E, C, D])}" fill="rgba(37,99,235,.18)" stroke="none" /><polygon points="${pts([E, B, C])}" fill="rgba(217,119,6,.25)" stroke="none" />`;
                out += `<line x1="${E.x}" y1="${E.y}" x2="${C.x}" y2="${C.y}" stroke="#d97706" stroke-width="2.2" />`;
            }
            if (fig === 4) {
                out += `<polygon points="${pts([A, B, C])}" fill="rgba(37,99,235,.18)" stroke="none" /><polygon points="${pts([A, C, D])}" fill="rgba(217,119,6,.25)" stroke="none" />`;
                out += `<line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#d97706" stroke-width="2.2" />`;
            }
            if (fig === 5) {
                out += `<rect x="${Lm.x}" y="${D.y}" width="${Rm.x - Lm.x}" height="${A.y - D.y}" fill="rgba(217,119,6,.14)" stroke="#d97706" stroke-width="2" stroke-dasharray="6 4" />`;
                out += `<line x1="${Lm.x}" y1="${Lm.y}" x2="${Rm.x}" y2="${Rm.y}" stroke="#d97706" stroke-width="2.2" stroke-dasharray="4 3" />`;
            }
            // Höhe
            const hx = Math.min(Math.max(D.x, A.x) + 34, C.x - 14);
            out += `<line x1="${hx}" y1="${A.y}" x2="${hx}" y2="${D.y}" stroke="#059669" stroke-width="2" /><polyline points="${hx},${A.y - 9} ${hx + 9},${A.y - 9} ${hx + 9},${A.y}" fill="none" stroke="#059669" stroke-width="1.4" />`;
            out += `<text x="${hx + 6}" y="${(A.y + D.y) / 2}" fill="#059669" font-weight="800" font-size="14">h</text>`;
            if (o.labels) {
                const t = (p, dx, dy, txt, extra) => `<text x="${(p.x + dx).toFixed(1)}" y="${(p.y + dy).toFixed(1)}" ${extra || 'font-weight="800" font-size="15"'} fill="#0f172a" text-anchor="middle">${txt}</text>`;
                out += t(A, -10, 16, 'A') + t(B, 10, 16, 'B') + t(C, 10, -6, 'C') + t(D, -10, -6, 'D');
                out += t(mMid(A, B), 0, 18, 'g₁', 'font-style="italic" font-size="14"') + t(mMid(D, C), 0, -8, 'g₂', 'font-style="italic" font-size="14"');
                out += t(mMid(A, D), -14, 4, 's₁', 'font-style="italic" font-size="14"') + t(mMid(B, C), 14, 4, 's₂', 'font-style="italic" font-size="14"');
                out += t(A, 26, -8, 'α', 'font-size="13"') + t(B, -24, -8, 'β', 'font-size="13"') + t(C, -14, 18, 'γ', 'font-size="13"') + t(D, 14, 18, 'δ', 'font-size="13"');
            }
            return out;
        }
        const mTrap = { g1: 8, g2: 5, h: 4, off: 1.5, fig: 5 };
        function mLabTrapez() {
            const body = document.getElementById('mathe-lab-body');
            const sl = (k, label, min, max, step) => `<label class="block"><div class="flex justify-between text-sm font-extrabold"><span>${label}</span><span id="mtz-${k}-v"></span></div><input id="mtz-${k}" type="range" min="${min}" max="${max}" step="${step}" class="w-full accent-blue-600"></label>`;
            body.innerHTML = `
                <div class="space-y-4">
                    <div class="lesson lesson-merke"><p class="lesson-text"><strong>Zusatz:</strong> Trapeze stehen im Buch (S. 32–33), aber nicht auf deiner Checkliste.</p></div>
                    <div class="grid lg:grid-cols-5 gap-5 items-start">
                        <div class="lg:col-span-3 space-y-3">
                            <div class="panel p-2"><svg id="mtz-svg" viewBox="0 0 600 300" class="w-full h-auto block" style="font-family:inherit" role="img" aria-label="Trapez"></svg></div>
                            <div class="flex flex-wrap gap-2" id="mtz-figs"></div>
                        </div>
                        <div class="lg:col-span-2 space-y-3">
                            <div class="panel p-4 space-y-3">
                                ${sl('g1', 'g₁ (unten)', 2, 12, 0.5)}
                                ${sl('g2', 'g₂ (oben)', 1, 12, 0.5)}
                                ${sl('h', 'Höhe h', 1, 7, 0.5)}
                                ${sl('off', 'Verschiebung von g₂', -2, 8, 0.5)}
                            </div>
                            <div class="panel p-4 space-y-1 font-mono-letter text-sm" id="mtz-out"></div>
                        </div>
                    </div>
                </div>
            `;
            ['g1', 'g2', 'h', 'off'].forEach(k => {
                const el = document.getElementById('mtz-' + k);
                el.value = mTrap[k];
                el.oninput = () => { mTrap[k] = +el.value; mTrapDraw(); };
            });
            mTrapDraw();
        }
        function mTrapFig(f) { mTrap.fig = f; mTrapDraw(); }
        function mTrapDraw() {
            const T = mTrap;
            if (T.g2 > T.g1) T.g2 = T.g1;
            const g2el = document.getElementById('mtz-g2');
            if (g2el) { g2el.max = T.g1; g2el.value = T.g2; }
            T.off = Math.max(-2, Math.min(T.off, T.g1 - T.g2 + 2));
            const offel = document.getElementById('mtz-off');
            if (offel) { offel.max = T.g1 - T.g2 + 2; offel.value = T.off; }
            ['g1', 'g2', 'h'].forEach(k => { const v = document.getElementById('mtz-' + k + '-v'); if (v) v.textContent = mFmt(T[k]) + ' cm'; });
            const ov = document.getElementById('mtz-off-v'); if (ov) ov.textContent = mFmt(T.off) + ' cm';
            const xs = [0, T.g1, T.off, T.off + T.g2];
            if (T.fig === 1) xs.push(T.g1 + T.g2, T.g1 + T.off + T.g2);
            if (T.fig === 2) xs.push(T.g1 + T.g2, T.g1 + T.g2 + T.off / 2);
            const spanL = Math.min(...xs), spanR = Math.max(...xs);
            const scale = Math.min(560 / (spanR - spanL), 250 / T.h, 60);
            const ox = 20 - spanL * scale, oy = 275;
            document.getElementById('mtz-svg').innerHTML = mTrapezInner(T.g1, T.g2, T.h, T.off, T.fig, { scale, ox, oy, labels: true });
            const figs = [[1, 'Figur 1: verdoppeln'], [2, 'Figur 2: halbe Höhe'], [3, 'Figur 3: Parallelogramm + Dreieck'], [4, 'Figur 4: Diagonale'], [5, 'Figur 5: Rechteck']];
            document.getElementById('mtz-figs').innerHTML = figs.map(([f, l]) => `<button type="button" class="btn btn-sm ${T.fig === f ? 'btn-primary' : 'btn-ghost'}" onclick="mTrapFig(${f})">${l}</button>`).join('');
            const { g1, g2, h } = T;
            const A = (g1 + g2) / 2 * h;
            const rows = [
                [5, 'Formel 1', `(g₁ + g₂) : 2 · h = (${mFmt(g1)} + ${mFmt(g2)}) : 2 · ${mFmt(h)}`],
                [2, 'Formel 2', `(g₁ + g₂) · h/2 = ${mFmt(g1 + g2)} · ${mFmt(h / 2)}`],
                [1, 'Formel 3', `(g₁ + g₂) · h : 2 = ${mFmt(g1 + g2)} · ${mFmt(h)} : 2`],
                [3, 'Formel 4', `g₂ · h + (g₁ − g₂) · h : 2 = ${mFmt(g2 * h)} + ${mFmt((g1 - g2) * h / 2)}`],
                [4, 'Formel 5', `g₁ · h : 2 + g₂ · h : 2 = ${mFmt(g1 * h / 2)} + ${mFmt(g2 * h / 2)}`]
            ];
            document.getElementById('mtz-out').innerHTML = `<div class="eyebrow !font-sans">Fläche – fünf Wege, ein Ergebnis</div>` + rows.map(([f, n, txt]) => `<div class="${T.fig === f ? 'text-blue-800 font-bold' : 'text-slate-600'}"><span class="font-sans font-extrabold">${n}</span> (Figur ${f}): ${txt} = ${mFmt(A)} cm²</div>`).join('') + `<div class="pt-2 font-sans text-xs text-slate-500">Die farbige Figur zeigt die Idee hinter der gewählten Formel.</div>`;
        }
