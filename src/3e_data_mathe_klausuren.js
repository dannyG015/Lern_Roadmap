
        // ==========================================
        // MATHE – 3 PROBEKLAUSUREN (Klassenarbeit Nr. 2)
        // Themen genau nach Checkliste: Graphen (LU 7) · Terme vereinfachen, Gleichungen, Terme aufstellen (LU 10) ·
        // Linien im Dreieck (LU 11). Anspruch: Wer alles schafft, steht auf „sehr gut“.
        // Antwort-Arten (iPad-tauglich): "num" = Zahl eintippen, "choice" = Antwort antippen, "select" = Lücke auswählen.
        // Formeln/Terme/Gleichungen werden immer ausgewählt, nie getippt.
        // ==========================================
        const matheExams = [
            {
                id: 'mathe-1',
                title: 'Probeklausur 1',
                subtitle: 'Der Klassiker: alle Themen der Checkliste',
                minutes: 45,
                intro: 'Taschenrechner erlaubt. Rechne Nebenrechnungen im Heft. Zahlen trägst du ein (Komma oder Punkt), Terme und Gleichungen wählst du aus.',
                tasks: [
                    {
                        title: 'Graphen lesen – Lenas Fahrradtour', topic: 'Graphen (LU 7)', points: 8,
                        prompt: 'Der Graph zeigt, wie weit Lena während ihrer Fahrradtour von zu Hause entfernt ist.',
                        fig: { type: 'graph', xLabel: 'Zeit in min', yLabel: 'Entfernung von zu Hause in km', xmax: 90, ymax: 14, xstep: 10, ystep: 2, segs: [[[0, 0], [20, 6], [30, 6], [50, 12], [60, 12], [90, 0]]] },
                        parts: [
                            { label: 'a) Wie weit ist Lena nach 40 Minuten von zu Hause entfernt?', type: 'num', answer: 9, unit: 'km', points: 1 },
                            { label: 'b) Wie lange dauert ihre erste Pause?', type: 'num', answer: 10, unit: 'min', points: 1 },
                            { label: 'c) In welchem Abschnitt fährt Lena am schnellsten?', type: 'choice', options: ['Von 60 bis 90 Minuten', 'Von 0 bis 20 Minuten', 'Von 30 bis 50 Minuten', 'In allen Fahrabschnitten gleich schnell'], correct: 0, points: 2 },
                            { label: 'd) Was passiert zwischen 60 und 90 Minuten?', type: 'choice', options: ['Sie fährt zurück nach Hause', 'Sie fährt einen Berg hinunter', 'Sie wird immer langsamer', 'Sie macht eine lange Pause'], correct: 0, points: 1 },
                            { label: 'e) Wie viele Kilometer fährt Lena insgesamt?', type: 'num', answer: 24, unit: 'km', points: 2 },
                            { label: 'f) Ein Mitschüler zeichnet für seine Tour am Ende ein senkrechtes Stück nach oben. Was stimmt?', type: 'choice', options: ['Das ist unmöglich – er wäre ohne Zeit zu brauchen an einem anderen Ort', 'Das bedeutet, dass er sehr schnell fährt', 'Das bedeutet eine Pause', 'Das bedeutet, dass er umkehrt'], correct: 0, points: 1 }
                        ],
                        solution: [
                            'Achsen lesen: nach rechts die Zeit in Minuten (1 Kästchen = 10 min), nach oben die Entfernung von zu Hause in km (1 Kästchen = 2 km).',
                            '<strong>a)</strong> Bei 40 min liegt der Graph genau in der Mitte zwischen 6 km (30 min) und 12 km (50 min): 6 + 3 = <strong>9 km</strong>.',
                            '<strong>b)</strong> Waagrecht heißt: Die Entfernung bleibt gleich → Pause von 20 bis 30 min = <strong>10 Minuten</strong>.',
                            '<strong>c)</strong> Strecke pro Minute vergleichen: 0–20 min: 6 km in 20 min = 0,3 km/min · 30–50 min: 6 km in 20 min = 0,3 km/min · 60–90 min: 12 km in 30 min = 0,4 km/min. Am steilsten ist die <strong>Rückfahrt (60–90 min)</strong> – auch ein fallender Graph kann am steilsten sein!',
                            '<strong>d)</strong> Der Graph fällt bis auf 0: Die Entfernung von zu Hause wird kleiner, bis sie wieder zu Hause ist → <strong>Sie fährt zurück</strong>. „Bergab“ wäre eine Höhe – hier geht es aber um die Entfernung.',
                            '<strong>e)</strong> Hinweg 12 km + Rückweg 12 km = <strong>24 km</strong>. Der höchste Punkt (12 km) ist nur die größte Entfernung, nicht die ganze Strecke.',
                            '<strong>f)</strong> Senkrecht heißt: gleiche Zeit, aber anderer Ort → <strong>unmöglich</strong> (wie Graph 4 im Bewegungsspiel, Buch S. 19).'
                        ]
                    },
                    {
                        title: 'Terme vereinfachen', topic: 'Terme (LU 10)', points: 8,
                        prompt: 'Vereinfache so weit wie möglich und wähle das richtige Ergebnis.',
                        parts: [
                            { label: 'a) 2,5 · x · (−4) · y · x', type: 'choice', options: ['−10x²y', '10x²y', '−10xy²', '−1,5x²y'], correct: 0, points: 1 },
                            { label: 'b) 6ab² − 2ba + 3b²a − 5ab', type: 'choice', options: ['9ab² − 7ab', '9ab² − 3ab', '2ab²', '9ab² + 7ab'], correct: 0, points: 2 },
                            { label: 'c) 4x − (3 − 2x) + (x − 5)', type: 'choice', options: ['7x − 8', '3x − 8', '7x − 2', '5x − 8'], correct: 0, points: 2 },
                            { label: 'd) −3(2a − 5b) − 2(b − 4a)', type: 'choice', options: ['2a + 13b', '−14a + 13b', '2a + 17b', '−14a + 17b'], correct: 0, points: 3 }
                        ],
                        solution: [
                            '<strong>a)</strong> Zahlen: 2,5 · (−4) = −10. Variablen alphabetisch: x · x · y = x²y → <strong>−10x²y</strong>.',
                            '<strong>b)</strong> Erst alphabetisch ordnen: 2ba = 2ab und 3b²a = 3ab². ab²-Glieder: 6ab² + 3ab² = 9ab². ab-Glieder: −2ab − 5ab = −7ab → <strong>9ab² − 7ab</strong>.',
                            '<strong>c)</strong> Minusklammer: −(3 − 2x) = −3 + 2x. Plusklammer einfach weglassen: 4x − 3 + 2x + x − 5. x-Glieder: 4x + 2x + x = 7x, Zahlen: −3 − 5 = −8 → <strong>7x − 8</strong>.',
                            '<strong>d)</strong> Ausmultiplizieren (Pfeile): −3 · 2a = −6a, −3 · (−5b) = +15b, −2 · b = −2b, −2 · (−4a) = +8a.',
                            'Zusammenfassen: −6a + 8a = 2a und 15b − 2b = 13b → <strong>2a + 13b</strong>. Typische Fehler: −14a (minus mal minus vergessen) oder 17b.'
                        ]
                    },
                    {
                        title: 'Gleichungen lösen', topic: 'Gleichungen (LU 10)', points: 9,
                        prompt: 'Löse die Gleichungen im Heft und trage die Lösung für x ein.',
                        parts: [
                            { label: 'a) 7x − 9 = 3x + 15', type: 'num', answer: 6, prefix: 'x =', points: 2 },
                            { label: 'b) 4(x − 2) − 3 = 2(x + 5) − 1', type: 'num', answer: 10, prefix: 'x =', points: 3 },
                            { label: 'c) 3(2x + 5) = 2(x − 1) + 1', type: 'num', answer: -4, prefix: 'x =', points: 2 },
                            { label: 'd) 0,5x + 9 = 2x − 3', type: 'num', answer: 8, prefix: 'x =', points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> 7x − 9 = 3x + 15 &nbsp;| − 3x → 4x − 9 = 15 &nbsp;| + 9 → 4x = 24 &nbsp;| : 4 → <strong>x = 6</strong>. Probe: 33 = 33 ✓',
                            '<strong>b)</strong> Klammern auflösen: 4x − 8 − 3 = 2x + 10 − 1 → 4x − 11 = 2x + 9 &nbsp;| − 2x → 2x − 11 = 9 &nbsp;| + 11 → 2x = 20 &nbsp;| : 2 → <strong>x = 10</strong>. Probe: 4 · 8 − 3 = 29 und 2 · 15 − 1 = 29 ✓',
                            '<strong>c)</strong> 6x + 15 = 2x − 2 + 1 = 2x − 1 &nbsp;| − 2x → 4x + 15 = −1 &nbsp;| − 15 → 4x = −16 &nbsp;| : 4 → <strong>x = −4</strong>. Probe: 3 · (−3) = −9 und 2 · (−5) + 1 = −9 ✓',
                            '<strong>d)</strong> 0,5x + 9 = 2x − 3 &nbsp;| − 0,5x → 9 = 1,5x − 3 &nbsp;| + 3 → 12 = 1,5x &nbsp;| : 1,5 → <strong>x = 8</strong>. Probe: 4 + 9 = 13 und 16 − 3 = 13 ✓'
                        ]
                    },
                    {
                        title: 'Äquivalenzumformungen erkennen', topic: 'Gleichungen (LU 10)', points: 4,
                        prompt: 'So wurde die Gleichung 5x + 4 = 2x − 8 gelöst:<div class="font-mono-letter mt-2 space-y-0.5"><div>5x + 4 = 2x − 8 &nbsp;&nbsp;| ①</div><div>3x + 4 = −8 &nbsp;&nbsp;| ②</div><div>3x = −12 &nbsp;&nbsp;| ③</div><div>x = −4</div></div>',
                        parts: [
                            { label: 'a) Umformung ①', type: 'select', options: ['− 2x', '+ 2x', ': 2', '− 4'], correct: 0, points: 1 },
                            { label: 'b) Umformung ②', type: 'select', options: ['− 4', '+ 4', ': 4', '− 3x'], correct: 0, points: 1 },
                            { label: 'c) Umformung ③', type: 'select', options: [': 3', '· 3', '− 3', ': (−12)'], correct: 0, points: 1 },
                            { label: 'd) Was ergibt die Probe mit x = −4?', type: 'choice', options: ['Links −16, rechts −16 – die Lösung stimmt', 'Links −24, rechts −16 – die Lösung ist falsch', 'Links 24, rechts 0 – die Lösung ist falsch', 'Links −16, rechts 0 – die Lösung ist falsch'], correct: 0, points: 1 }
                        ],
                        solution: [
                            '<strong>①</strong> Aus 5x wird 3x und rechts verschwindet 2x → auf beiden Seiten <strong>− 2x</strong> (Umformung 4).',
                            '<strong>②</strong> Aus „3x + 4“ wird „3x“ → auf beiden Seiten <strong>− 4</strong> (Umformung 2): −8 − 4 = −12.',
                            '<strong>③</strong> Aus 3x wird x → beide Seiten <strong>: 3</strong> (Umformung 6): −12 : 3 = −4.',
                            '<strong>d) Probe</strong> in der Ausgangsgleichung: links 5 · (−4) + 4 = −20 + 4 = −16, rechts 2 · (−4) − 8 = −8 − 8 = −16 → <strong>stimmt</strong>.'
                        ]
                    },
                    {
                        title: 'Terme und Gleichungen aufstellen', topic: 'Anwendung (LU 10)', points: 6,
                        prompt: 'In Haus 2 wohnen dreimal so viele Personen wie in Haus 1. In Haus 3 wohnen 4 Personen weniger als in Haus 2. Insgesamt wohnen 66 Personen in den drei Häusern. <em>x = Anzahl Personen in Haus 1.</em>',
                        parts: [
                            { label: 'a) Welcher Term beschreibt Haus 3?', type: 'select', options: ['3x − 4', 'x − 4', '3(x − 4)', '4 − 3x'], correct: 0, points: 1 },
                            { label: 'b) Welche Gleichung passt?', type: 'select', options: ['x + 3x + (3x − 4) = 66', 'x + 3x − 4 = 66', '3x + (x − 4) = 66', 'x · 3x · (3x − 4) = 66'], correct: 0, points: 2 },
                            { label: 'c) Wie viele Personen wohnen in Haus 1?', type: 'num', answer: 10, unit: 'Personen', points: 1 },
                            { label: 'd) Wie viele Personen wohnen in Haus 3?', type: 'num', answer: 26, unit: 'Personen', points: 2 }
                        ],
                        solution: [
                            '<strong>Terme:</strong> Haus 1 = x · Haus 2 = 3x („dreimal so viele“) · Haus 3 = 3x − 4 („4 weniger als Haus 2“). <strong>a) 3x − 4</strong>',
                            '<strong>b)</strong> Alle drei Häuser zusammen ergeben 66: <strong>x + 3x + (3x − 4) = 66</strong>.',
                            'Lösen: 7x − 4 = 66 &nbsp;| + 4 → 7x = 70 &nbsp;| : 7 → x = 10.',
                            '<strong>c)</strong> Haus 1: <strong>10 Personen</strong>. Haus 2: 30 Personen. <strong>d)</strong> Haus 3: 30 − 4 = <strong>26 Personen</strong>.',
                            'Probe am Text: 10 + 30 + 26 = 66 ✓ · 30 ist das Dreifache von 10 ✓ · 26 ist 4 weniger als 30 ✓'
                        ]
                    },
                    {
                        title: 'Linien im Dreieck', topic: 'Linien im Dreieck (LU 11)', points: 5,
                        prompt: 'Beantworte die Fragen zu besonderen Linien und Punkten im Dreieck.',
                        parts: [
                            { label: 'a) Der Punkt, der von allen drei Ecken gleich weit entfernt ist, ist der …', type: 'select', options: ['Schnittpunkt der Mittelsenkrechten', 'Schnittpunkt der Winkelhalbierenden', 'Schnittpunkt der Höhen', 'Schnittpunkt der Seitenhalbierenden'], correct: 0, points: 1 },
                            { label: 'b) Die Strecke von C zur Mitte der Seite c heißt …', type: 'select', options: ['Seitenhalbierende von c', 'Höhe auf c', 'Mittelsenkrechte von c', 'Winkelhalbierende von γ'], correct: 0, points: 1 },
                            { label: 'c) In einem Dreieck ist γ = 120°. Wo liegt der Mittelpunkt des Umkreises?', type: 'choice', options: ['Außerhalb des Dreiecks', 'Innerhalb des Dreiecks', 'Genau auf der Ecke C', 'Es gibt keinen Umkreis'], correct: 0, points: 1 },
                            { label: 'd) Ein rechtwinkliges Dreieck hat die längste Seite 13 cm. Wie groß ist der Radius des Umkreises?', type: 'num', answer: 6.5, unit: 'cm', points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Jeder Punkt einer Mittelsenkrechten ist von zwei Ecken gleich weit entfernt. Der Schnittpunkt aller drei ist von <em>allen</em> Ecken gleich weit entfernt → <strong>Schnittpunkt der Mittelsenkrechten</strong> (Umkreismittelpunkt).',
                            '<strong>b)</strong> Ecke mit der Mitte der Gegenseite verbinden = <strong>Seitenhalbierende</strong> s<sub>c</sub>. (Die Höhe stünde senkrecht auf c, die Mittelsenkrechte ginge senkrecht durch die Mitte.)',
                            '<strong>c)</strong> 120° ist ein stumpfer Winkel → stumpfwinkliges Dreieck → der Umkreismittelpunkt liegt <strong>außerhalb</strong> (Buch S. 30, Aufgabe 4).',
                            '<strong>d)</strong> Im rechtwinkligen Dreieck liegt der Umkreismittelpunkt genau in der <strong>Mitte der längsten Seite</strong>. Der Radius ist also die halbe längste Seite: 13 : 2 = <strong>6,5 cm</strong>.'
                        ]
                    }
                ]
            },
            {
                id: 'mathe-2',
                title: 'Probeklausur 2',
                subtitle: 'Mit Fehlersuche und Sonderfällen',
                minutes: 45,
                intro: 'Hier stecken typische Stolperfallen drin: Minusklammern, Sonderfälle bei Gleichungen und Fehlersuche. Taschenrechner erlaubt.',
                tasks: [
                    {
                        title: 'Wertetabellen und Graphen', topic: 'Graphen (LU 7)', points: 7,
                        prompt: '<div class="overflow-x-auto"><table class="text-sm font-mono-letter border-collapse my-1">' +
                            '<tr><th class="pr-3 text-left">Tabelle 1</th><td class="px-1 text-slate-500">x</td><td class="px-2">0</td><td class="px-2">1</td><td class="px-2">2</td><td class="px-2">3</td><td class="px-2">4</td><td class="px-2">5</td></tr><tr><td></td><td class="px-1 text-slate-500">y</td><td class="px-2">3</td><td class="px-2">5</td><td class="px-2">7</td><td class="px-2">9</td><td class="px-2">11</td><td class="px-2">13</td></tr>' +
                            '<tr><th class="pr-3 text-left pt-2">Tabelle 2</th><td class="px-1 pt-2 text-slate-500">x</td><td class="px-2 pt-2">1</td><td class="px-2 pt-2">2</td><td class="px-2 pt-2">4</td><td class="px-2 pt-2">5</td><td class="px-2 pt-2">8</td><td class="px-2 pt-2">10</td></tr><tr><td></td><td class="px-1 text-slate-500">y</td><td class="px-2">40</td><td class="px-2">20</td><td class="px-2">10</td><td class="px-2">8</td><td class="px-2">5</td><td class="px-2">4</td></tr>' +
                            '<tr><th class="pr-3 text-left pt-2">Tabelle 3</th><td class="px-1 pt-2 text-slate-500">x</td><td class="px-2 pt-2">0</td><td class="px-2 pt-2">1</td><td class="px-2 pt-2">2</td><td class="px-2 pt-2">3</td><td class="px-2 pt-2">4</td><td class="px-2 pt-2">5</td></tr><tr><td></td><td class="px-1 text-slate-500">y</td><td class="px-2">0</td><td class="px-2">0</td><td class="px-2">2</td><td class="px-2">4</td><td class="px-2">6</td><td class="px-2">8</td></tr>' +
                            '<tr><th class="pr-3 text-left pt-2">Tabelle 4</th><td class="px-1 pt-2 text-slate-500">x</td><td class="px-2 pt-2">0</td><td class="px-2 pt-2">1</td><td class="px-2 pt-2">2</td><td class="px-2 pt-2">3</td><td class="px-2 pt-2">4</td><td class="px-2 pt-2">5</td></tr><tr><td></td><td class="px-1 text-slate-500">y</td><td class="px-2">5</td><td class="px-2">5</td><td class="px-2">5</td><td class="px-2">5</td><td class="px-2">5</td><td class="px-2">5</td></tr>' +
                            '</table></div>',
                        fig: { type: 'graphs', items: [
                            { label: 'A', xmax: 5.5, ymax: 10, segs: [[[0, 0], [1, 0], [5, 8]]] },
                            { label: 'B', xmax: 10.5, ymax: 44, fn: 'inv40' },
                            { label: 'C', xmax: 5.5, ymax: 7, segs: [[[0, 5], [5, 5]]] },
                            { label: 'D', xmax: 5.5, ymax: 15, segs: [[[0, 3], [5, 13]]] }
                        ] },
                        parts: [
                            { label: 'a) Tabelle 1 gehört zu Graph …', type: 'select', options: ['A', 'B', 'C', 'D'], correct: 3, keepOrder: true, points: 1 },
                            { label: 'b) Tabelle 2 gehört zu Graph …', type: 'select', options: ['A', 'B', 'C', 'D'], correct: 1, keepOrder: true, points: 1 },
                            { label: 'c) Tabelle 3 gehört zu Graph …', type: 'select', options: ['A', 'B', 'C', 'D'], correct: 0, keepOrder: true, points: 1 },
                            { label: 'd) Tabelle 4 gehört zu Graph …', type: 'select', options: ['A', 'B', 'C', 'D'], correct: 2, keepOrder: true, points: 1 },
                            { label: 'e) In Tabelle 2 gilt dieselbe Regel weiter. Welcher y-Wert gehört zu x = 16?', type: 'num', answer: 2.5, prefix: 'y =', points: 2 },
                            { label: 'f) Bei welcher Tabelle wird y kleiner, wenn x größer wird?', type: 'choice', options: ['Tabelle 2', 'Tabelle 1', 'Tabelle 3', 'Tabelle 4'], correct: 0, points: 1 }
                        ],
                        solution: [
                            'Bei jeder Tabelle prüfen, <strong>wie sich y verändert</strong>, wenn x größer wird.',
                            '<strong>Tabelle 1:</strong> beginnt bei 3 und wächst immer um 2 → Gerade, die oberhalb von 0 beginnt → <strong>Graph D</strong>.',
                            '<strong>Tabelle 2:</strong> x · y ist immer 40 (1 · 40, 2 · 20, 4 · 10 …) → je größer x, desto kleiner y → fallende Kurve → <strong>Graph B</strong>.',
                            '<strong>Tabelle 3:</strong> bis x = 1 ist y = 0, danach + 2 pro Schritt → Gerade, die erst später steigt → <strong>Graph A</strong>.',
                            '<strong>Tabelle 4:</strong> y ist immer 5 → waagrechte Linie → <strong>Graph C</strong>.',
                            '<strong>e)</strong> Regel x · y = 40 → y = 40 : 16 = <strong>2,5</strong>.',
                            '<strong>f)</strong> Nur in <strong>Tabelle 2</strong> wird y kleiner (40, 20, 10 …). Tabelle 4 bleibt gleich, 1 und 3 werden größer.'
                        ]
                    },
                    {
                        title: 'Terme vereinfachen', topic: 'Terme (LU 10)', points: 8,
                        prompt: 'Vereinfache und wähle das richtige Ergebnis.',
                        parts: [
                            { label: 'a) −0,5 · a · 8 · b · a · b', type: 'choice', options: ['−4a²b²', '4a²b²', '−4ab', '−8,5a²b²'], correct: 0, points: 1 },
                            { label: 'b) 3x² − 5x + 2x · x − (x² − 4x)', type: 'choice', options: ['4x² − x', '4x² − 9x', '6x² − x', '2x² − x'], correct: 0, points: 3 },
                            { label: 'c) 2(3x − 4) − 3(x − 2) + x', type: 'choice', options: ['4x − 2', '4x − 14', '2x − 2', '4x + 2'], correct: 0, points: 2 },
                            { label: 'd) Welcher Term ist NICHT gleichwertig zu 6x + 9?', type: 'choice', options: ['3(2x + 9)', '3(2x + 3)', '2(3x + 4,5)', '6(x + 1,5)'], correct: 0, points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Zahlen: −0,5 · 8 = −4. Variablen: a · a · b · b = a²b² → <strong>−4a²b²</strong>.',
                            '<strong>b)</strong> Produkt: 2x · x = 2x². Minusklammer: −(x² − 4x) = −x² + 4x. Also 3x² − 5x + 2x² − x² + 4x.',
                            'x²-Glieder: 3x² + 2x² − x² = 4x². x-Glieder: −5x + 4x = −x → <strong>4x² − x</strong>.',
                            '<strong>c)</strong> Ausmultiplizieren: 6x − 8 − 3x + 6 + x (−3 · (−2) = +6!). x: 6x − 3x + x = 4x, Zahlen: −8 + 6 = −2 → <strong>4x − 2</strong>.',
                            '<strong>d)</strong> Jede Klammer ausmultiplizieren: 3(2x + 3) = 6x + 9 ✓ · 2(3x + 4,5) = 6x + 9 ✓ · 6(x + 1,5) = 6x + 9 ✓ · aber <strong>3(2x + 9) = 6x + 27</strong> ✗.'
                        ]
                    },
                    {
                        title: 'Gleichungen und Sonderfälle', topic: 'Gleichungen (LU 10)', points: 10,
                        prompt: 'Löse im Heft. Bei a) und b) trägst du x ein, bei c) und d) wählst du aus.',
                        parts: [
                            { label: 'a) 5(x − 3) − 2(x − 6) = 3 + x', type: 'num', answer: 3, prefix: 'x =', points: 3 },
                            { label: 'b) x : 4 + 5 = x − 1', type: 'num', answer: 8, prefix: 'x =', points: 3 },
                            { label: 'c) Wie viele Lösungen hat 3(x + 2) = 3x + 6?', type: 'choice', options: ['Jede Zahl ist eine Lösung', 'Keine Lösung', 'Genau eine: x = 0', 'Genau eine: x = 2'], correct: 0, points: 2 },
                            { label: 'd) Wie viele Lösungen hat 4(x + 1) = 4x + 1?', type: 'choice', options: ['Keine Lösung', 'Jede Zahl ist eine Lösung', 'Genau eine: x = 1', 'Genau eine: x = −1'], correct: 0, points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Klammern auflösen: 5x − 15 − 2x + 12 = 3 + x → 3x − 3 = 3 + x &nbsp;| − x → 2x − 3 = 3 &nbsp;| + 3 → 2x = 6 &nbsp;| : 2 → <strong>x = 3</strong>. Probe: 0 − 2 · (−3) = 6 und 3 + 3 = 6 ✓',
                            '<strong>b)</strong> Erst beide Seiten · 4: x + 20 = 4x − 4 &nbsp;| − x → 20 = 3x − 4 &nbsp;| + 4 → 24 = 3x &nbsp;| : 3 → <strong>x = 8</strong>. Probe: 2 + 5 = 7 und 8 − 1 = 7 ✓',
                            '<strong>c)</strong> Ausmultiplizieren: 3x + 6 = 3x + 6 &nbsp;| − 3x → 6 = 6. Das stimmt immer → <strong>jede Zahl ist eine Lösung</strong>.',
                            '<strong>d)</strong> 4x + 4 = 4x + 1 &nbsp;| − 4x → 4 = 1. Das ist nie wahr → <strong>keine Lösung</strong> (wie Aufgabe 7 I im Buch).'
                        ]
                    },
                    {
                        title: 'Fehler finden', topic: 'Gleichungen (LU 10)', points: 4,
                        prompt: 'Tim löst die Gleichung 2(x + 3) = 5x − 9 so:<div class="font-mono-letter mt-2 space-y-0.5"><div>Zeile 1: 2x + 3 = 5x − 9</div><div>Zeile 2: 3 = 3x − 9</div><div>Zeile 3: 12 = 3x</div><div>Zeile 4: x = 4</div></div>',
                        parts: [
                            { label: 'a) In welcher Zeile steckt der erste Fehler?', type: 'select', options: ['Zeile 1', 'Zeile 2', 'Zeile 3', 'Zeile 4'], correct: 0, keepOrder: true, points: 2 },
                            { label: 'b) Wie lautet die richtige Lösung?', type: 'num', answer: 5, prefix: 'x =', points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Schon in <strong>Zeile 1</strong>: Beim Ausmultiplizieren muss die 2 mit <em>jedem</em> Glied der Klammer multipliziert werden: 2(x + 3) = 2x + 6, nicht 2x + 3.',
                            '<strong>b)</strong> 2x + 6 = 5x − 9 &nbsp;| − 2x → 6 = 3x − 9 &nbsp;| + 9 → 15 = 3x &nbsp;| : 3 → <strong>x = 5</strong>.',
                            'Probe: 2 · (5 + 3) = 16 und 5 · 5 − 9 = 16 ✓ (Tims x = 4 ergibt 14 und 11 – falsch.)'
                        ]
                    },
                    {
                        title: 'Anwendung: drei Häuser', topic: 'Anwendung (LU 10)', points: 7,
                        prompt: 'In Haus 1 wohnen 5 Personen mehr als in Haus 2. In Haus 3 wohnen halb so viele Personen wie in Haus 1. Insgesamt wohnen 45 Personen in den drei Häusern.',
                        parts: [
                            { label: 'a) x = Anzahl Personen in Haus 2. Welcher Term beschreibt dann Haus 3?', type: 'select', options: ['½(x + 5)', '½x + 5', '2(x + 5)', 'x − 5'], correct: 0, points: 1 },
                            { label: 'b) Welche Wahl für x vermeidet Brüche?', type: 'select', options: ['x = Personen in Haus 3', 'x = Personen in Haus 1', 'x = Personen in Haus 2', 'Es gibt keine Wahl ohne Brüche'], correct: 0, points: 1 },
                            { label: 'c) Personen in Haus 1', type: 'num', answer: 20, unit: 'Personen', points: 1 },
                            { label: 'd) Personen in Haus 2', type: 'num', answer: 15, unit: 'Personen', points: 1 },
                            { label: 'e) Personen in Haus 3', type: 'num', answer: 10, unit: 'Personen', points: 1 },
                            { label: 'f) Gleiche Regeln – aber jetzt wohnen in Haus 3 genau 12 Personen. Wie viele Personen wohnen dann insgesamt?', type: 'num', answer: 55, unit: 'Personen', points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Haus 1 = x + 5, Haus 3 ist die Hälfte davon: <strong>½(x + 5)</strong>. (½x + 5 wäre falsch – dann würde nur x halbiert.)',
                            '<strong>b)</strong> Mit <strong>x = Haus 3</strong> wird Haus 1 = 2x und Haus 2 = 2x − 5 – ganz ohne Bruch.',
                            'Gleichung: 2x + (2x − 5) + x = 45 → 5x − 5 = 45 &nbsp;| + 5 → 5x = 50 &nbsp;| : 5 → x = 10.',
                            '<strong>c)–e)</strong> Haus 3: <strong>10</strong> · Haus 1: 2 · 10 = <strong>20</strong> · Haus 2: 20 − 5 = <strong>15</strong>. Probe: 20 + 15 + 10 = 45 ✓',
                            '<strong>f)</strong> Haus 3 = 12 → Haus 1 = 24 → Haus 2 = 19 → zusammen 24 + 19 + 12 = <strong>55 Personen</strong>.'
                        ]
                    },
                    {
                        title: 'Linien im Dreieck', topic: 'Linien im Dreieck (LU 11)', points: 4,
                        prompt: 'Beantworte die Fragen.',
                        parts: [
                            { label: 'a) „Jeder Punkt auf dieser Geraden hat von den Seiten b und c den gleichen Abstand.“ Das ist die …', type: 'select', options: ['Winkelhalbierende von α', 'Mittelsenkrechte von a', 'Winkelhalbierende von γ', 'Höhe auf a'], correct: 0, points: 1 },
                            { label: 'b) α = 64°. Wie groß sind die beiden Winkel, in die die Winkelhalbierende α teilt?', type: 'num', answer: 32, unit: '° (je)', points: 1 },
                            { label: 'c) Ein Dreieck hat die Fläche 30 cm². Wie groß ist die Fläche eines der beiden Teildreiecke, in die die Seitenhalbierende s<sub>a</sub> es teilt?', type: 'num', answer: 15, unit: 'cm²', points: 1 },
                            { label: 'd) Ein Dreieck hat die Seiten 10 cm, 8 cm und 6 cm. Wie groß ist der Umfang seines Seitenmittendreiecks?', type: 'num', answer: 12, unit: 'cm', points: 1 }
                        ],
                        solution: [
                            '<strong>a)</strong> Die Seiten b und c treffen sich in der Ecke A und bilden dort den Winkel α → <strong>Winkelhalbierende von α</strong>.',
                            '<strong>b)</strong> Die Winkelhalbierende teilt den Winkel in zwei gleich große Hälften: 64° : 2 = <strong>32°</strong>.',
                            '<strong>c)</strong> Die Seitenhalbierende teilt das Dreieck in zwei <strong>flächengleiche</strong> Dreiecke: 30 : 2 = <strong>15 cm²</strong>.',
                            '<strong>d)</strong> Die Seiten des Seitenmittendreiecks sind halb so lang: 5 cm, 4 cm, 3 cm → Umfang 5 + 4 + 3 = <strong>12 cm</strong>.'
                        ]
                    }
                ]
            },
            {
                id: 'mathe-3',
                title: 'Probeklausur 3',
                subtitle: 'Für die Eins: die schwerste Probe',
                minutes: 45,
                intro: 'Die anspruchsvollste Probe mit Kommazahlen, Brüchen und mehrschrittigen Aufgaben. Wer hier mindestens 37 Punkte schafft, ist bestens vorbereitet.',
                tasks: [
                    {
                        title: 'Graph: Wasserstand im Becken', topic: 'Graphen (LU 7)', points: 7,
                        prompt: 'Der Graph zeigt den Wasserstand in einem Becken.',
                        fig: { type: 'graph', xLabel: 'Zeit in min', yLabel: 'Wasserstand in cm', xmax: 50, ymax: 60, xstep: 5, ystep: 10, segs: [[[0, 10], [10, 40], [25, 40], [35, 20], [50, 50]]] },
                        parts: [
                            { label: 'a) Wie hoch steht das Wasser zu Beginn?', type: 'num', answer: 10, unit: 'cm', points: 1 },
                            { label: 'b) Um wie viele Zentimeter steigt das Wasser in den ersten 10 Minuten pro Minute?', type: 'num', answer: 3, unit: 'cm pro min', points: 2 },
                            { label: 'c) Nach wie vielen Minuten steht das Wasser zum zweiten Mal bei 30 cm?', type: 'num', answer: 30, unit: 'min', points: 2 },
                            { label: 'd) Welche Aussage stimmt?', type: 'choice', options: ['Zwischen 25 und 35 Minuten wird Wasser abgelassen', 'Zwischen 10 und 25 Minuten ist das Becken leer', 'Am Ende ist weniger Wasser im Becken als am Anfang', 'Am Ende steigt das Wasser schneller als am Anfang'], correct: 0, points: 2 }
                        ],
                        solution: [
                            'Achsen: nach rechts Zeit (1 Kästchen = 5 min), nach oben Wasserstand (1 Kästchen = 10 cm).',
                            '<strong>a)</strong> Bei 0 min beginnt der Graph bei <strong>10 cm</strong> – das Becken ist also nicht leer.',
                            '<strong>b)</strong> Von 10 cm auf 40 cm in 10 Minuten: 30 cm : 10 min = <strong>3 cm pro Minute</strong>.',
                            '<strong>c)</strong> 30 cm wird dreimal erreicht: beim Füllen am Anfang (nach knapp 7 min), beim Ablassen und beim erneuten Füllen. Beim Ablassen sinkt der Stand von 40 cm (25 min) auf 20 cm (35 min), also 2 cm pro Minute → 30 cm nach 5 Minuten Ablassen: 25 + 5 = <strong>30 min</strong>.',
                            '<strong>d)</strong> Fallender Graph zwischen 25 und 35 min → <strong>Wasser wird abgelassen</strong>. Falsch sind: „leer“ (der Stand bleibt bei 40 cm), „weniger als am Anfang“ (50 cm > 10 cm) und „schneller“ (am Ende 30 cm in 15 min = 2 cm/min, am Anfang 3 cm/min).'
                        ]
                    },
                    {
                        title: 'Terme vereinfachen', topic: 'Terme (LU 10)', points: 8,
                        prompt: 'Wähle jeweils das richtige Ergebnis.',
                        parts: [
                            { label: 'a) 1,5a · 4b − 2ab + 3b · (−2a)', type: 'choice', options: ['−2ab', '10ab', '−14ab', '2ab'], correct: 0, points: 2 },
                            { label: 'b) x(3x − 2) − 2(x² − x)', type: 'choice', options: ['x²', 'x² − 4x', '5x² − 4x', 'x² + 4x'], correct: 0, points: 3 },
                            { label: 'c) Ergänze: 4 · ( ? ) = 12x − 8', type: 'select', options: ['3x − 2', '3x − 8', '12x − 2', '8x − 4'], correct: 0, points: 1 },
                            { label: 'd) Mia rechnet: −(2a − 3b) + 4a = −2a − 3b + 4a = 2a − 3b. Was ist das richtige Ergebnis?', type: 'choice', options: ['2a + 3b', '2a − 3b', '6a − 3b', '−6a + 3b'], correct: 0, points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> Produkte: 1,5a · 4b = 6ab und 3b · (−2a) = −6ab. Zusammen: 6ab − 2ab − 6ab = <strong>−2ab</strong>.',
                            '<strong>b)</strong> Ausmultiplizieren: x · 3x = 3x², x · (−2) = −2x, −2 · x² = −2x², −2 · (−x) = +2x.',
                            'Zusammenfassen: 3x² − 2x² = x² und −2x + 2x = 0 → <strong>x²</strong>.',
                            '<strong>c)</strong> Rückwärts denken: 4 · 3x = 12x und 4 · (−2) = −8 → <strong>3x − 2</strong>.',
                            '<strong>d)</strong> Bei der Minusklammer dreht sich <em>jedes</em> Vorzeichen um: −(2a − 3b) = −2a <strong>+</strong> 3b. Dann −2a + 3b + 4a = <strong>2a + 3b</strong>. Mia hat das zweite Vorzeichen vergessen.'
                        ]
                    },
                    {
                        title: 'Gleichungen mit Klammern, Kommas und Brüchen', topic: 'Gleichungen (LU 10)', points: 10,
                        prompt: 'Löse im Heft und trage x ein.',
                        parts: [
                            { label: 'a) 2(3x − 1) − (x + 4) = 3(x − 4)', type: 'num', answer: -3, prefix: 'x =', points: 3 },
                            { label: 'b) 0,2x + 1,4 = 0,5x − 0,4', type: 'num', answer: 6, prefix: 'x =', points: 2 },
                            { label: 'c) ½(4x + 10) = 3(x − 2)', type: 'num', answer: 11, prefix: 'x =', points: 3 },
                            { label: 'd) x : 3 − 2 = x : 5 + 2', type: 'num', answer: 30, prefix: 'x =', points: 2 }
                        ],
                        solution: [
                            '<strong>a)</strong> 6x − 2 − x − 4 = 3x − 12 → 5x − 6 = 3x − 12 &nbsp;| − 3x → 2x − 6 = −12 &nbsp;| + 6 → 2x = −6 &nbsp;| : 2 → <strong>x = −3</strong>. Probe: 2 · (−10) − 1 = −21 und 3 · (−7) = −21 ✓',
                            '<strong>b)</strong> | − 0,2x → 1,4 = 0,3x − 0,4 &nbsp;| + 0,4 → 1,8 = 0,3x &nbsp;| : 0,3 → <strong>x = 6</strong>. Tipp: Mit 10 malnehmen macht es leichter: 2x + 14 = 5x − 4.',
                            '<strong>c)</strong> Links halbieren: 2x + 5. Rechts: 3x − 6. → 2x + 5 = 3x − 6 &nbsp;| − 2x → 5 = x − 6 &nbsp;| + 6 → <strong>x = 11</strong>. Probe: ½ · 54 = 27 und 3 · 9 = 27 ✓',
                            '<strong>d)</strong> Beide Seiten · 15 (passt zu 3 und 5): 5x − 30 = 3x + 30 &nbsp;| − 3x → 2x − 30 = 30 &nbsp;| + 30 → 2x = 60 &nbsp;| : 2 → <strong>x = 30</strong>. Probe: 10 − 2 = 8 und 6 + 2 = 8 ✓'
                        ]
                    },
                    {
                        title: 'Lösungswege vergleichen', topic: 'Gleichungen (LU 10)', points: 4,
                        prompt: 'Die Gleichung 6x + 8 = 2(x − 2) kann man auch so beginnen: <span class="font-mono-letter">2(3x + 4) = 2(x − 2)</span>',
                        parts: [
                            { label: 'a) Welche Umformung führt von 2(3x + 4) = 2(x − 2) zu 3x + 4 = x − 2?', type: 'select', options: [': 2', '− 2', '· 2', '− 2x'], correct: 0, points: 1 },
                            { label: 'b) Wie lautet die Lösung der Gleichung?', type: 'num', answer: -3, prefix: 'x =', points: 2 },
                            { label: 'c) Welche Aussage ist richtig?', type: 'choice', options: ['Jeder richtige Lösungsweg führt zur selben Lösung, weil Äquivalenzumformungen die Lösung nicht verändern', 'Je nach Lösungsweg kommt eine andere Lösung heraus', 'Man darf nur durch Zahlen teilen, die in beiden Klammern vorkommen', 'Wer zuerst ausmultipliziert, bekommt eine falsche Lösung'], correct: 0, points: 1 }
                        ],
                        solution: [
                            '<strong>a)</strong> Beide Seiten bestehen aus „2 mal Klammer“ → beide Seiten <strong>: 2</strong> (Umformung 6).',
                            '<strong>b)</strong> 3x + 4 = x − 2 &nbsp;| − x → 2x + 4 = −2 &nbsp;| − 4 → 2x = −6 &nbsp;| : 2 → <strong>x = −3</strong>.',
                            'Kontrolle mit dem anderen Weg: 6x + 8 = 2x − 4 &nbsp;| − 2x → 4x + 8 = −4 &nbsp;| − 8 → 4x = −12 → x = −3 ✓',
                            '<strong>c)</strong> Äquivalenzumformungen verändern die Lösung nicht – deshalb führen alle richtigen Wege zu <strong>derselben Lösung</strong> (wie Aufgabe 6 im Buch).'
                        ]
                    },
                    {
                        title: 'Anwendung mit Vergleich', topic: 'Anwendung (LU 10)', points: 7,
                        prompt: 'In Haus 1 wohnen doppelt so viele Personen wie in Haus 3. In Haus 2 wohnen 7 Personen weniger als in Haus 1. In Haus 1 und Haus 2 zusammen wohnen genau 11 Personen mehr als in Haus 3. <em>x = Anzahl Personen in Haus 3.</em>',
                        parts: [
                            { label: 'a) Welche Gleichung beschreibt die Situation?', type: 'select', options: ['2x + (2x − 7) = x + 11', '2x + 2x − 7 + 11 = x', '2x + (2x − 7) + x = 11', '2x + (x − 7) = x + 11'], correct: 0, points: 2 },
                            { label: 'b) Personen in Haus 3', type: 'num', answer: 6, unit: 'Personen', points: 1 },
                            { label: 'c) Personen in Haus 1', type: 'num', answer: 12, unit: 'Personen', points: 1 },
                            { label: 'd) Personen in Haus 2', type: 'num', answer: 5, unit: 'Personen', points: 1 },
                            { label: 'e) Wie viele Personen wohnen insgesamt in den drei Häusern?', type: 'num', answer: 23, unit: 'Personen', points: 2 }
                        ],
                        solution: [
                            '<strong>Terme:</strong> Haus 3 = x · Haus 1 = 2x · Haus 2 = 2x − 7.',
                            '<strong>a)</strong> „Haus 1 und Haus 2 zusammen“ = 2x + (2x − 7), „11 mehr als Haus 3“ = x + 11 → <strong>2x + (2x − 7) = x + 11</strong>.',
                            'Lösen: 4x − 7 = x + 11 &nbsp;| − x → 3x − 7 = 11 &nbsp;| + 7 → 3x = 18 &nbsp;| : 3 → x = 6.',
                            '<strong>b)–d)</strong> Haus 3: <strong>6</strong> · Haus 1: <strong>12</strong> · Haus 2: 12 − 7 = <strong>5</strong>. Probe: 12 + 5 = 17 = 6 + 11 ✓',
                            '<strong>e)</strong> 12 + 5 + 6 = <strong>23 Personen</strong>.'
                        ]
                    },
                    {
                        title: 'Linien im Dreieck', topic: 'Linien im Dreieck (LU 11)', points: 4,
                        prompt: 'Beantworte die Fragen.',
                        parts: [
                            { label: 'a) Inkreis zeichnen: Was ist der richtige Schritt direkt nach dem Finden des Schnittpunkts I?', type: 'select', options: ['Lot von I auf eine Seite fällen – das ist der Radius', 'Zirkel von I bis zu einer Ecke aufziehen', 'Die drei Höhen einzeichnen', 'Die Seitenmitten verbinden'], correct: 0, points: 1 },
                            { label: 'b) Ein Dreieck hat α = 30°, β = 60° und γ = 90°. Wo liegt der Höhenschnittpunkt?', type: 'choice', options: ['In der Ecke C', 'In der Mitte der Seite c', 'Außerhalb des Dreiecks', 'Im Inkreismittelpunkt'], correct: 0, points: 1 },
                            { label: 'c) Ein Seitenmittendreieck hat die Fläche 7 cm². Wie groß ist die Fläche des großen Dreiecks?', type: 'num', answer: 28, unit: 'cm²', points: 1 },
                            { label: 'd) Der Schwerpunkt S (Schnittpunkt der Seitenhalbierenden) liegt …', type: 'choice', options: ['immer innerhalb des Dreiecks', 'bei stumpfwinkligen Dreiecken außerhalb', 'immer auf einer Seite', 'immer in einer Ecke'], correct: 0, points: 1 }
                        ],
                        solution: [
                            '<strong>a)</strong> Der Inkreis soll die Seiten nur berühren → Radius = <strong>Lot von I auf eine Seite</strong>. Bis zur Ecke wäre der Kreis zu groß.',
                            '<strong>b)</strong> γ = 90° → rechtwinklig mit dem rechten Winkel bei C. Die beiden Seiten am rechten Winkel sind zugleich Höhen → Höhenschnittpunkt <strong>in der Ecke C</strong>.',
                            '<strong>c)</strong> Die Seitenmitten zerlegen das große Dreieck in <strong>4 deckungsgleiche</strong> Dreiecke: 4 · 7 = <strong>28 cm²</strong>.',
                            '<strong>d)</strong> Die Seitenhalbierenden verlaufen immer im Inneren → S liegt <strong>immer innerhalb</strong> (anders als Umkreismittelpunkt und Höhenschnittpunkt).'
                        ]
                    }
                ]
            }
        ];
