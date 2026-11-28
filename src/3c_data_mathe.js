
        // ==========================================
        // MATHE DATA (7 ROADMAP LEVELS)
        // Grundlage: Buchseiten S. 18–19 (7 Graphen), S. 26–29 (10 Verpackte Zahlen),
        // S. 30–33 (11 Dreiecke – Vierecke) und die Checkliste zur Klassenarbeit Nr. 2.
        // Level 7 (Trapeze) steht im Buch, aber nicht auf der Checkliste → als Zusatz markiert.
        // ==========================================
        const MATHE_EXAM = 'Klassenarbeit am 30.11. / 1.12.';

        const matheLevels = [
            {
                id: 1,
                title: "Graphen lesen & zuordnen",
                subtitle: "Graphen, Sachzusammenhänge und Wertetabellen (LU 7)",
                icon: "fa-chart-line",
                color: "from-blue-500 to-indigo-600",
                badge: "Level 1",
                summary: "Was erzählt ein Graph? Du ordnest Graphen Situationen und Wertetabellen zu und liest Werte sicher ab.",
                simple: "Ein Graph ist wie eine Bildgeschichte: Nach rechts läuft meistens die Zeit oder eine Menge (x-Achse), nach oben die Größe, um die es geht (y-Achse). Steigt die Linie, wird es mehr. Ist sie waagrecht, bleibt es gleich. Fällt sie, wird es weniger. Und je steiler, desto schneller ändert sich etwas.",
                merke: "Zuerst die Achsen lesen (Was? Welche Einheit?), dann den Verlauf: steigt, fällt oder bleibt gleich – und wie steil? Derselbe Graph kann je nach Achsenbeschriftung ganz Verschiedenes bedeuten.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Erst die Achsen, dann der Verlauf</strong>
                        <p>Dein Buch sagt: Jeder Graph veranschaulicht Informationen. Bevor du etwas deutest, liest du deshalb die <strong>Achsen</strong>: Was wird nach rechts (x-Achse, oft die Zeit) und was nach oben (y-Achse) eingetragen? In welcher Einheit? Welcher <strong>Wertebereich</strong> ist dargestellt?</p>
                        <strong class="text-blue-900 block text-sm mt-3">2. So „spricht“ ein Graph</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>steigt</strong> → die Größe nimmt zu. <strong>Je steiler</strong>, desto schneller.</li>
                            <li><strong>waagrecht</strong> → die Größe bleibt gleich.</li>
                            <li><strong>fällt</strong> → die Größe nimmt ab.</li>
                            <li><strong>Sprung (Treppe)</strong> → der Wert ändert sich plötzlich, ohne Zwischenwerte.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">3. Ein Graph – vier Geschichten (Aufgabe 1)</strong>
                        <p>Im Buch haben vier Graphen genau dieselbe Form: <em>steigt – fast waagrecht – steigt wieder – wird flach</em>. Erst die Achse verrät, was gemeint ist:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Geschwindigkeit</strong> (Anfahren mit einem Auto): schneller werden – eine Weile gleich schnell – wieder beschleunigen – gleichmäßig weiterfahren.</li>
                            <li><strong>Weg</strong> (gefahrene Strecke auf einer Reise): Strecke wächst – kurze Pause – weiterfahren – langsamer werden.</li>
                            <li><strong>Höhe</strong> (Wasserstand in einem Weiher an einem Regentag): Regen – Regenpause – Regen – der Regen lässt nach.</li>
                            <li><strong>Sonnenscheindauer</strong> im Verlauf eines Monats: Die Sonnenstunden zählen sich zusammen, waagrecht heißt: Tage ohne Sonne.</li>
                        </ul>
                        <p>⚠️ Ein waagrechtes Stück heißt beim <strong>Weg</strong>-Graphen „steht still“, beim <strong>Geschwindigkeits</strong>-Graphen aber „fährt gleich schnell“!</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Wertetabellen den Graphen zuordnen (Aufgabe 3)</strong>
                        <p>Schau in der Tabelle, <strong>wie sich y verändert</strong>, wenn x größer wird. Das verrät die Form des Graphen:</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead><tr class="border-b border-slate-200"><th class="py-1 pr-2">Tabelle</th><th class="py-1 pr-2">Was passiert mit y?</th><th class="py-1">Graph</th></tr></thead>
                                <tbody>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">A</td><td class="py-1 pr-2">bleibt gleich und springt bei 1,01 / 2,01 / … um 1 nach oben → Treppe</td><td class="py-1">5</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">B</td><td class="py-1 pr-2">steigt erst um 2,5 pro Schritt, ab x = 3 nur noch um 0,8 → erst steil, dann flacher</td><td class="py-1">3</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">C</td><td class="py-1 pr-2">y ist immer 4 mehr als x, Start bei 4 → Gerade, die oberhalb von 0 beginnt</td><td class="py-1">6</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">D</td><td class="py-1 pr-2">x · y ist immer 360: je größer x, desto kleiner y → fallende Kurve</td><td class="py-1">4</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">E</td><td class="py-1 pr-2">steigt gleichmäßig bis 6, dann bleibt y bei 6 → steigt, dann waagrecht</td><td class="py-1">7</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">F</td><td class="py-1 pr-2">steigt um 2, bleibt gleich, steigt um 2 … → Treppe mit schrägen Stufen</td><td class="py-1">9</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">G</td><td class="py-1 pr-2">bleibt bis x = 2 bei 0, danach steigt y gleichmäßig → Gerade, die erst später beginnt</td><td class="py-1">1</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">H</td><td class="py-1 pr-2">y ist immer 8 → waagrechte Linie</td><td class="py-1">8</td></tr>
                                    <tr><td class="py-1 pr-2 font-bold">I</td><td class="py-1 pr-2">y = 1,5 · x, Start bei 0 → Gerade durch den Nullpunkt</td><td class="py-1">2</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div data-mfig="graph9"></div>
                        <strong class="text-blue-900 block text-sm mt-3">5. Bewegungsgraphen „Distanz zu S“ (Aufgabe 4)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>steigt</strong> → du gehst von S weg in Richtung Z (steil = schnell).</li>
                            <li><strong>waagrecht</strong> → du stehst still.</li>
                            <li><strong>fällt</strong> → du gehst zurück in Richtung S.</li>
                            <li><strong>senkrecht</strong> → unmöglich! Das hieße: in null Sekunden eine Strecke zurücklegen. Graph 4 springt am Ende senkrecht nach oben – diese Bewegung kann niemand vormachen.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">6. Werte ablesen – Schritt für Schritt</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Den gegebenen x-Wert auf der x-Achse suchen (Einteilung der Kästchen beachten!).</li>
                            <li>Senkrecht nach oben bis zum Graphen gehen.</li>
                            <li>Waagrecht hinüber zur y-Achse – dort den y-Wert ablesen.</li>
                            <li>Rückwärts geht es genauso: y-Wert → waagrecht zum Graphen → senkrecht hinunter zur x-Achse.</li>
                        </ol>
                        <p>Beispiel Tabelle I (Graph 2): Bei x = 4 liest du y = 6 ab. Zu y = 12 gehört x = 8.</p>
                    </div>
                `,
                example: "<strong>Situation 1 aus dem Buch: Wasserhöhe in einem Gefäß, das gleichmäßig mit Wasser gefüllt wird.</strong><br>„Gleichmäßig“ heißt: In gleichen Zeitabständen steigt das Wasser um gleich viel. Am Anfang ist das Gefäß leer → die Linie beginnt im Nullpunkt und ist eine Gerade (Graph 2, Tabelle I).<br>Läuft das Gefäß irgendwann über, kann die Höhe nicht weiter steigen → ab da ist der Graph waagrecht (Graph 7, Tabelle E: bis 6 steigend, dann bleibt es bei 6).<br><strong>Situation 3 (Preis eines Produkts):</strong> Jedes Stück kostet gleich viel → Graph 2. Kommt eine feste Grundgebühr dazu → Graph 6 (beginnt oberhalb von 0). Zahlt man pro angefangene Packung → Treppe wie Graph 5.",
                videos: [
                    { id: "fnI3K2U0lu8", title: "Weg-Zeit-Diagramm interpretieren", channel: "Hartmann_Distanzlernen" },
                    { id: "3RVJLvdYIQs", title: "Proportionale Zuordnungen erkennen: Graphen, Wertetabellen und Textaufgabe", channel: "Frau Stier" }
                ],
                questions: [
                    { type: "Anwenden", q: "In Tabelle H ist y bei jedem x-Wert 8. Wie sieht der passende Graph aus?", options: ["Eine waagrechte Linie in Höhe 8 (Graph 8)", "Eine Gerade durch den Nullpunkt", "Eine Treppe", "Eine fallende Kurve"], correct: 0, exp: "Wenn y sich nie ändert, bleibt die Linie immer auf derselben Höhe – sie ist waagrecht. Das ist Graph 8." },
                    { type: "Verstehen", q: "Tabelle D: x = 90 → y = 4, x = 30 → y = 12, x = 10 → y = 36. Was fällt auf?", options: ["x · y ist immer 360 – je größer x, desto kleiner y (Graph 4)", "y ist immer 4 mehr als x", "y wächst immer um 4", "x und y sind immer gleich groß"], correct: 0, exp: "90 · 4 = 360, 30 · 12 = 360, 10 · 36 = 360. Das Produkt bleibt gleich. Wird x größer, muss y kleiner werden – der Graph fällt, erst steil, dann immer flacher (Graph 4)." },
                    { type: "Verstehen", q: "Tabelle A: x = 1 → y = 1, aber x = 1,01 → y = 2. Was bedeutet das für den Graphen?", options: ["Er macht einen Sprung – es entsteht eine Treppe (Graph 5)", "Er steigt gleichmäßig", "Er ist waagrecht", "Er fällt plötzlich"], correct: 0, exp: "Zwischen 1 und 1,01 gibt es fast keinen Abstand, trotzdem springt y von 1 auf 2. Bis zum nächsten Sprung bleibt y gleich. So entsteht eine Treppe aus waagrechten Stücken." },
                    { type: "Verstehen", q: "Bewegungsspiel: Im Graphen „Distanz zu S“ gibt es ein waagrechtes Stück. Was macht die Person?", options: ["Sie steht still", "Sie läuft mit gleicher Geschwindigkeit weiter", "Sie geht zurück zu S", "Sie rennt sehr schnell"], correct: 0, exp: "Waagrecht heißt: Die Distanz zu S ändert sich nicht. Die Person bleibt also an derselben Stelle stehen." },
                    { type: "Verstehen", q: "Im Graphen „Distanz zu S“ fällt die Linie. Was passiert?", options: ["Die Person geht zurück in Richtung S", "Die Person geht weiter Richtung Z", "Die Person steht", "Die Person springt"], correct: 0, exp: "Fällt der Graph, wird die Distanz zu S kleiner – die Person bewegt sich also wieder auf den Startpunkt S zu." },
                    { type: "Begründen", q: "Warum kann niemand die Bewegung von Graph 4 im Bewegungsspiel nachmachen?", options: ["Am Ende springt der Graph senkrecht: Man müsste in null Sekunden eine Strecke zurücklegen", "Weil der Graph zu lange dauert", "Weil der Graph am Anfang steigt", "Weil man nie stehen bleiben darf"], correct: 0, exp: "Ein senkrechtes Stück bedeutet: Die Zeit bleibt gleich, aber der Ort ändert sich. Das ist unmöglich – jede Bewegung braucht Zeit." },
                    { type: "Transfer", q: "Ein Gefäß wird gleichmäßig gefüllt, bis es voll ist und überläuft. Welcher Graph passt am besten?", options: ["Graph 7: steigt gleichmäßig, dann waagrecht", "Graph 4: fällt immer flacher", "Graph 8: von Anfang an waagrecht", "Graph 5: Treppe"], correct: 0, exp: "Erst steigt die Wasserhöhe gleichmäßig (gerade, steigende Linie). Ist das Gefäß voll, läuft das Wasser über und die Höhe bleibt gleich – der Graph wird waagrecht." },
                    { type: "Anwenden", q: "Tabelle I gehört zu Graph 2. Welchen y-Wert liest du bei x = 7 ab?", options: ["10,5", "7", "8,5", "14"], correct: 0, exp: "In Tabelle I ist y immer das 1,5-Fache von x: 1,5 · 7 = 10,5. So steht es auch in der Tabelle." },
                    { type: "Fehler finden", q: "Tim sagt: „Tabelle C passt zu Graph 2, beide sind ja gerade Linien.“ Was stimmt?", options: ["Falsch – Tabelle C beginnt bei y = 4, Graph 2 im Nullpunkt; C gehört zu Graph 6", "Richtig – alle geraden Linien passen zu jeder Tabelle", "Falsch – Tabelle C gehört zur Treppe", "Richtig – C und Graph 2 starten beide bei 4"], correct: 0, exp: "Bei x = 0 ist in Tabelle C schon y = 4. Der Graph muss also oberhalb des Nullpunkts beginnen – das ist Graph 6. Graph 2 startet bei 0 und passt zu Tabelle I." },
                    { type: "Transfer", q: "Im Geschwindigkeits-Graphen „Anfahren mit einem Auto“ ist ein Stück waagrecht. Was bedeutet das?", options: ["Das Auto fährt in dieser Zeit gleich schnell", "Das Auto steht still", "Das Auto fährt rückwärts", "Das Auto bremst stark"], correct: 0, exp: "Auf der y-Achse steht hier die Geschwindigkeit. Bleibt sie gleich, fährt das Auto mit konstantem Tempo – es steht nicht! Stillstand wäre eine Geschwindigkeit von 0." },
                    { type: "Anwenden", q: "Tabelle G: Bis x = 2 ist y = 0, danach wächst y um 1 pro Schritt. Welcher Graph passt?", options: ["Graph 1: Gerade, die erst bei x = 2 zu steigen beginnt", "Graph 2: Gerade durch den Nullpunkt", "Graph 8: waagrechte Linie", "Graph 3: erst steil, dann flacher"], correct: 0, exp: "Am Anfang liegt der Graph auf der x-Achse (y = 0), ab x = 2 steigt er gleichmäßig – genau wie Graph 1." },
                    { type: "Verstehen", q: "Was solltest du bei einem Graphen als Erstes anschauen?", options: ["Die Beschriftung der Achsen (Größen und Einheiten)", "Die Farbe der Linie", "Nur den höchsten Punkt", "Wie viele Kästchen das Gitter hat"], correct: 0, exp: "Erst die Achsen sagen dir, was der Graph zeigt. Dieselbe Form kann Geschwindigkeit, Weg oder Wasserstand bedeuten (Aufgabe 1)." }
                ]
            },
            {
                id: 2,
                title: "Terme vereinfachen",
                subtitle: "Klammern auflösen & Produkte zusammenfassen (LU 10)",
                icon: "fa-square-root-variable",
                color: "from-sky-500 to-blue-600",
                badge: "Level 2",
                summary: "Plus-, Minus- und Malklammern auflösen, Produkte ordnen und gleichartige Glieder zusammenfassen – so werden Terme kurz und übersichtlich.",
                simple: "Ein Term ist ein Rechenausdruck mit Zahlen und Variablen (Buchstaben wie x, a oder b). Vereinfachen heißt: kürzer schreiben, ohne den Wert zu verändern. Wie beim Aufräumen kommen gleiche Dinge zusammen: 3 Äpfel + 5 Äpfel = 8 Äpfel, also 3x + 5x = 8x. Äpfel und Birnen (x und y) bleiben getrennt.",
                merke: "Plusklammer: einfach weglassen. Minusklammer: weglassen und alle Vorzeichen in der Klammer umdrehen. Malklammer: jedes Glied in der Klammer mit dem Faktor davor multiplizieren („Pfeile“). Zusammenfassen darf man nur gleichartige Glieder – ab und ab² sind verschieden!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Produkte zusammenfassen</strong>
                        <p>So steht es auf deiner Checkliste: Zahlen und Variablen werden zusammengefasst, <strong>alphabetisch geordnet</strong> und <strong>alle Malzeichen verschwinden</strong>.</p>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Zahlen nach vorne holen und ausrechnen.</li>
                            <li>Variablen alphabetisch dahinter.</li>
                            <li>Gleiche Variablen als Potenz schreiben: b · b = b², x · x · x = x³.</li>
                        </ol>
                        <p class="font-mono-letter">a · b · 3 · b · 2,5 = 3 · 2,5 · a · b · b = 7,5ab²</p>
                        <p>Achtung bei negativen Zahlen: 4 · x · (−2) · y · x = −8x²y.</p>
                        <strong class="text-blue-900 block text-sm mt-3">2. Gleichartige Glieder zusammenfassen</strong>
                        <p>Gleichartig sind Glieder mit <strong>genau denselben Variablen und Hochzahlen</strong>: 4ab und −2ab passen zusammen, ab und ab² nicht. Das Vorzeichen gehört immer zum Glied <em>dahinter</em>.</p>
                        <p class="font-mono-letter">7,5ab² + 4ba − 3ab² − 2ab</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>4ba alphabetisch schreiben: 4ab.</li>
                            <li>ab-Glieder: 4ab − 2ab = 2ab.</li>
                            <li>ab²-Glieder: 7,5ab² − 3ab² = 4,5ab².</li>
                            <li>Ergebnis: <strong>2ab + 4,5ab²</strong> (Beispiel deiner Checkliste).</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">3. Plus- und Minusklammern</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Plus vor der Klammer:</strong> Klammer weglassen, nichts ändert sich: a + (b − c) = a + b − c.</li>
                            <li><strong>Minus vor der Klammer:</strong> Klammer weglassen und <strong>jedes</strong> Vorzeichen darin umdrehen: a − (b − c) = a − b + c.</li>
                        </ul>
                        <p class="font-mono-letter">5x − (2x − 3) = 5x − 2x + 3 = 3x + 3</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Malklammern ausmultiplizieren (Distributivgesetz, „Pfeile“)</strong>
                        <p>Der Faktor vor der Klammer wird mit <strong>jedem</strong> Glied in der Klammer multipliziert. Die Pfeile zeigen dir, was mit was multipliziert wird:</p>
                        <div data-mfig="pfeile"></div>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>3(x + 2) = 3x + 6</li>
                            <li>−2(x − 4) = −2x + 8 (minus mal minus ergibt plus!)</li>
                            <li>5(3x + 8) = 15x + 40 (aus Aufgabe 5, S. 27)</li>
                            <li>½(10x + 60) = 5x + 30</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">5. Die feste Reihenfolge</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Klammern auflösen (Malklammern zuerst ausmultiplizieren).</li>
                            <li>Gleichartige Glieder sortieren.</li>
                            <li>Zusammenfassen.</li>
                        </ol>
                        <p>Tipp deiner Lehrkraft: In der Arbeit kommen auch negative Zahlen und Brüche vor – ein Taschenrechner ist erlaubt. ½x ist dasselbe wie 0,5x oder x : 2.</p>
                    </div>
                `,
                example: "<strong>Schritt für Schritt: 2(3a − b) − (a − 4b)</strong><br>1. Malklammer ausmultiplizieren: 2 · 3a = 6a und 2 · (−b) = −2b → 6a − 2b − (a − 4b).<br>2. Minusklammer auflösen, Vorzeichen umdrehen: 6a − 2b − a + 4b.<br>3. Sortieren: 6a − a − 2b + 4b.<br>4. Zusammenfassen: <strong>5a + 2b</strong>.<br>Probe mit a = 1 und b = 1: Vorher 2 · 2 − (−3) = 7, nachher 5 + 2 = 7 ✓",
                videos: [
                    { id: "Hm_MFoOP9xY", title: "Terme – Klammern auflösen (Plus- und Minusklammern) ganz einfach erklärt", channel: "Lehrerschmidt" },
                    { id: "Wx32P1OEKyU", title: "Klammern auflösen (Distributivgesetz) – Terme und Gleichungen", channel: "Lehrerschmidt" },
                    { id: "RvbO9cf_0do", title: "Terme mit Klammern bei Produkten (Malrechnen)", channel: "Lehrerschmidt" }
                ],
                questions: [
                    { type: "Anwenden", q: "Fasse zusammen: a · b · 3 · b · 2,5", options: ["7,5ab²", "7,5ab", "5,5ab²", "7,5a²b"], correct: 0, exp: "Zahlen: 3 · 2,5 = 7,5. Variablen alphabetisch: a · b · b = ab². Ergebnis 7,5ab² – das Beispiel deiner Checkliste." },
                    { type: "Anwenden", q: "Vereinfache: 7,5ab² + 4ba − 3ab² − 2ab", options: ["2ab + 4,5ab²", "6,5ab²", "6,5ab³", "4,5ab + 2ab²"], correct: 0, exp: "4ba = 4ab. Dann ab: 4ab − 2ab = 2ab, und ab²: 7,5ab² − 3ab² = 4,5ab². ab und ab² sind verschieden und bleiben getrennt." },
                    { type: "Anwenden", q: "Löse die Minusklammer auf: 5x − (2x − 3)", options: ["3x + 3", "3x − 3", "7x − 3", "3x"], correct: 0, exp: "Minus vor der Klammer dreht jedes Vorzeichen darin um: −(2x − 3) = −2x + 3. Also 5x − 2x + 3 = 3x + 3." },
                    { type: "Anwenden", q: "Multipliziere aus: 3(x + 2)", options: ["3x + 6", "3x + 2", "x + 6", "5x"], correct: 0, exp: "Die 3 wird mit jedem Glied multipliziert: 3 · x = 3x und 3 · 2 = 6. Häufiger Fehler: nur das erste Glied malnehmen." },
                    { type: "Anwenden", q: "Multipliziere aus: −2(x − 4)", options: ["−2x + 8", "−2x − 8", "2x − 8", "−2x − 4"], correct: 0, exp: "−2 · x = −2x und −2 · (−4) = +8. Minus mal minus ergibt plus." },
                    { type: "Fehler finden", q: "Lisa schreibt: „4x + 3y = 7xy“. Was ist richtig?", options: ["4x + 3y lässt sich nicht weiter zusammenfassen – x und y sind nicht gleichartig", "Das Ergebnis stimmt", "Richtig wäre 12xy", "Richtig wäre 7x"], correct: 0, exp: "Nur gleichartige Glieder (gleiche Variablen, gleiche Hochzahlen) darf man addieren. x und y sind verschieden – wie Äpfel und Birnen." },
                    { type: "Verstehen", q: "Welche beiden Glieder sind gleichartig?", options: ["3ab² und −5b²a", "ab und ab²", "2x und 2x²", "4a und 4b"], correct: 0, exp: "Alphabetisch geordnet ist b²a = ab². Beide Glieder haben also a und b², nur die Zahlen davor sind verschieden." },
                    { type: "Anwenden", q: "Schreibe ohne Malzeichen: x · x · x", options: ["x³", "3x", "x + 3", "3x³"], correct: 0, exp: "Drei gleiche Faktoren schreibt man als Potenz: x · x · x = x³. 3x wäre x + x + x." },
                    { type: "Anwenden", q: "Multipliziere aus: 5(3x + 8)", options: ["15x + 40", "15x + 8", "8x + 13", "15x + 13"], correct: 0, exp: "5 · 3x = 15x und 5 · 8 = 40. Genau diese Umformung steht im Buch bei der 3. Verpackung (S. 27)." },
                    { type: "Verstehen", q: "Was passiert bei einer Plusklammer? a + (b − c) = …", options: ["a + b − c", "a − b + c", "a + b + c", "a − b − c"], correct: 0, exp: "Steht ein Plus vor der Klammer, lässt du die Klammer einfach weg – alle Vorzeichen bleiben, wie sie sind." },
                    { type: "Transfer", q: "Vereinfache: 2(3a − b) − (a − 4b)", options: ["5a + 2b", "5a − 6b", "7a + 2b", "5a − 2b"], correct: 0, exp: "Erst ausmultiplizieren: 6a − 2b. Dann die Minusklammer: − a + 4b. Zusammen: 6a − a = 5a und −2b + 4b = 2b." },
                    { type: "Anwenden", q: "Multipliziere aus: ½(10x + 60)", options: ["5x + 30", "5x + 60", "10x + 30", "20x + 120"], correct: 0, exp: "Die Hälfte von 10x ist 5x, die Hälfte von 60 ist 30. Mit ½ malnehmen ist dasselbe wie durch 2 teilen." },
                    { type: "Anwenden", q: "Fasse zusammen: 4 · (−3) · x · y · x", options: ["−12x²y", "12x²y", "−12xy", "−7x²y"], correct: 0, exp: "Zahlen: 4 · (−3) = −12. Variablen alphabetisch: x · x · y = x²y. Ergebnis −12x²y." }
                ]
            },
            {
                id: 3,
                title: "Gleichungen lösen",
                subtitle: "Knack die Box & Äquivalenzumformungen (LU 10)",
                icon: "fa-scale-balanced",
                color: "from-indigo-500 to-violet-600",
                badge: "Level 3",
                summary: "Mit Boxen und Hölzchen verstehst du, wie man Gleichungen umformt – bis die Lösung als x = … dasteht. Mit Probe!",
                simple: "Eine Gleichung ist wie eine Waage im Gleichgewicht: Links und rechts liegt gleich viel. Im Buch steht jede Box für x – in jeder Box liegen gleich viele Hölzchen. Du darfst auf beiden Seiten dasselbe wegnehmen, dazulegen, verdoppeln oder halbieren. Dann bleibt die Waage im Gleichgewicht. Am Ende steht eine Box allein: x = …",
                merke: "Was du auf der einen Seite machst, machst du auch auf der anderen. Äquivalenzumformungen verändern die Lösung einer Gleichung nicht. Zum Schluss immer die Probe: Lösung in die Ausgangsgleichung einsetzen – links und rechts muss dasselbe herauskommen.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Knack die Box (S. 26)</strong>
                        <p>Es gilt: In jeder Schachtel liegen gleich viele Hölzchen, und auf beiden Seiten des Gleichheitszeichens liegen gleich viele Hölzchen. Die vier Boxenanordnungen aus Aufgabe 2 sind genau die Schritte eines Lösungswegs:</p>
                        <div data-mfig="boxen"></div>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>4x + 8 = 2x + 14 &nbsp;| auf beiden Seiten 2 Boxen weg (−2x)</li>
                            <li>2x + 8 = 14 &nbsp;| auf beiden Seiten 8 Hölzchen weg (−8)</li>
                            <li>2x = 6 &nbsp;| halbieren (: 2)</li>
                            <li>x = 3 → in jeder Box liegen 3 Hölzchen. Probe: 4 · 3 + 8 = 20 und 2 · 3 + 14 = 20 ✓</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">2. Die sieben Umformungen (S. 27)</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Zu beiden Termen wird <strong>dieselbe Zahl addiert</strong>.</li>
                            <li>Von beiden Termen wird <strong>dieselbe Zahl subtrahiert</strong>.</li>
                            <li>Zu beiden Termen wird <strong>derselbe Term addiert</strong> (z. B. + x).</li>
                            <li>Von beiden Termen wird <strong>derselbe Term subtrahiert</strong> (z. B. − 2x).</li>
                            <li>Beide Terme werden mit <strong>derselben Zahl multipliziert</strong>.</li>
                            <li>Beide Terme werden durch <strong>dieselbe Zahl dividiert</strong>.</li>
                            <li>Der Term auf einer Seite wird durch Umformung in seiner Darstellung <strong>vereinfacht</strong> (Klammern auflösen, zusammenfassen).</li>
                        </ol>
                        <p><strong>Äquivalenzumformungen verändern die Lösung einer Gleichung nicht.</strong> (Mit 0 multiplizieren oder durch 0 teilen ist verboten.)</p>
                        <strong class="text-blue-900 block text-sm mt-3">3. Verpacken und Auspacken (Aufgabe 4)</strong>
                        <p>Verpacken: x = 4 → mal 3 → 3x = 12 → plus 2 → 3x + 2 = 14. <strong>Auspacken</strong> heißt: den Weg rückwärts gehen, mit der Gegenrechnung und in umgekehrter Reihenfolge: zuerst − 2 (Umformung 2) → 3x = 12, dann : 3 (Umformung 6) → x = 4.</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Der Lösungsweg in 5 Schritten</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li><strong>Vereinfachen:</strong> auf beiden Seiten Klammern auflösen und zusammenfassen (Umformung 7).</li>
                            <li><strong>x-Glieder auf eine Seite:</strong> z. B. | − 3x (Umformung 3 oder 4).</li>
                            <li><strong>Zahlen auf die andere Seite:</strong> z. B. | + 12 (Umformung 1 oder 2).</li>
                            <li><strong>Durch die Zahl vor dem x teilen:</strong> z. B. | : 2 (Umformung 6).</li>
                            <li><strong>Probe</strong> in der Ausgangsgleichung.</li>
                        </ol>
                        <p>Die Rechenbefehle schreibst du hinter einen senkrechten Strich: <span class="font-mono-letter">5x − 12 = 3x + 8 &nbsp;| − 3x</span></p>
                        <strong class="text-blue-900 block text-sm mt-3">5. Verschiedene Wege – gleiche Lösung (Aufgabe 6)</strong>
                        <p>Für 9x + 12 = 3(x − 2) zeigt das Buch drei Wege: rechts ausmultiplizieren, links 3 ausklammern und durch 3 teilen, oder die x-Glieder nach rechts bringen. Alle drei führen zu <strong>x = −3</strong>. Du darfst den Weg wählen, der dir am leichtesten fällt.</p>
                        <strong class="text-blue-900 block text-sm mt-3">6. Besondere Fälle (Aufgabe 7)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>3x + 9 = 9 → 3x = 0 → <strong>x = 0</strong>. Auch 0 ist eine Lösung!</li>
                            <li>x² = 1 → <strong>zwei Lösungen</strong>: 1 und −1, denn auch (−1) · (−1) = 1.</li>
                            <li>2(x + 2) = 2x → 2x + 4 = 2x → 4 = 0 ist falsch → <strong>keine Lösung</strong>.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Aufgabe 7 D: 5(x − 3) = 2(x + 6)</strong><br>1. Klammern auflösen (Umformung 7): 5x − 15 = 2x + 12<br>2. | − 2x (Umformung 4): 3x − 15 = 12<br>3. | + 15 (Umformung 1): 3x = 27<br>4. | : 3 (Umformung 6): <strong>x = 9</strong><br><strong>Probe:</strong> links 5 · (9 − 3) = 5 · 6 = 30, rechts 2 · (9 + 6) = 2 · 15 = 30 ✓ – die verpackte Zahl war 9.",
                videos: [
                    { id: "G5XxS2OFsJU", title: "Äquivalenzumformung, äquivalentes Umformen – Terme und Gleichungen", channel: "Lehrerschmidt" },
                    { id: "xL5P5pxBs-E", title: "Gleichungen – Mehrere Umformungsschritte", channel: "Lernkiste – Mathematik (Isabella Hirtl)" }
                ],
                questions: [
                    { type: "Anwenden", q: "Löse: 2x + 1 = 5", options: ["x = 2", "x = 3", "x = 4", "x = 2,5"], correct: 0, exp: "| − 1 → 2x = 4, | : 2 → x = 2. Probe: 2 · 2 + 1 = 5 ✓ (Aufgabe 1: zwei Hölzchen in einer Box)." },
                    { type: "Verstehen", q: "Boxenanordnung 1: links 4 Boxen und 8 Hölzchen, rechts 2 Boxen und 14 Hölzchen. Welche Gleichung gehört dazu?", options: ["4x + 8 = 2x + 14", "4x + 2x = 8 + 14", "8x + 4 = 14x + 2", "4 + 8 = 2 + 14"], correct: 0, exp: "Jede Box steht für x: 4 Boxen = 4x, dazu 8 Hölzchen. Rechts entsprechend 2x + 14." },
                    { type: "Verstehen", q: "Von 4x + 8 = 2x + 14 kommt man zu 2x + 8 = 14. Welche Umformung war das?", options: ["Von beiden Seiten 2x subtrahiert (Umformung 4)", "Zu beiden Seiten 2 addiert (Umformung 1)", "Beide Seiten durch 2 geteilt (Umformung 6)", "Nur links 2x weggenommen"], correct: 0, exp: "Auf beiden Seiten wurden 2 Boxen weggenommen – also derselbe Term 2x subtrahiert. Das ist Umformung 4." },
                    { type: "Fehler finden", q: "Welcher Schritt ist KEINE Äquivalenzumformung?", options: ["Nur auf der linken Seite 5 addieren", "Auf beiden Seiten 5 addieren", "Beide Seiten mit 3 multiplizieren", "Beide Seiten durch 4 teilen"], correct: 0, exp: "Wer nur eine Seite verändert, bringt die Waage aus dem Gleichgewicht – die Lösung ändert sich. Erlaubt ist nur, was auf beiden Seiten gleich gemacht wird." },
                    { type: "Anwenden", q: "Du willst 3x + 2 = 14 auspacken. Was ist der erste Schritt?", options: ["− 2 auf beiden Seiten", ": 3 auf beiden Seiten", "+ 2 auf beiden Seiten", "· 3 auf beiden Seiten"], correct: 0, exp: "Beim Verpacken kam zuerst · 3 und dann + 2. Auspacken geht rückwärts: zuerst die 2 wieder abziehen, dann durch 3 teilen. So erhältst du x = 4." },
                    { type: "Anwenden", q: "Löse Gleichung 3 aus Aufgabe 3: 6x + 2 = 2x + 14", options: ["x = 3", "x = 4", "x = 2", "x = 16"], correct: 0, exp: "| − 2x → 4x + 2 = 14, | − 2 → 4x = 12, | : 4 → x = 3. Probe: 20 = 20 ✓" },
                    { type: "Anwenden", q: "Löse Gleichung 2 aus Aufgabe 3: 4x + 10 = 6x + 2", options: ["x = 4", "x = 3", "x = −4", "x = 6"], correct: 0, exp: "| − 4x → 10 = 2x + 2, | − 2 → 8 = 2x, | : 2 → 4 = x. Probe: 4 · 4 + 10 = 26 und 6 · 4 + 2 = 26 ✓" },
                    { type: "Anwenden", q: "Löse Aufgabe 7 B: 5x − 12 = −x", options: ["x = 2", "x = 3", "x = −2", "x = 12"], correct: 0, exp: "| + x → 6x − 12 = 0, | + 12 → 6x = 12, | : 6 → x = 2. Probe: 10 − 12 = −2 und −x = −2 ✓" },
                    { type: "Verstehen", q: "Lösungsweg 1: 3(3x + 4) = 3(x − 2) wird zu 3x + 4 = x − 2. Was wurde gemacht?", options: ["Beide Seiten durch 3 dividiert (Umformung 6)", "Auf beiden Seiten 3 subtrahiert", "Die Klammern ausmultipliziert", "Beide Seiten mit 3 multipliziert"], correct: 0, exp: "Beide Seiten bestehen aus „3 mal Klammer“. Teilt man beide Seiten durch 3, bleiben nur die Klammern übrig." },
                    { type: "Fehler finden", q: "Jonas: 5x − 12 = 3x + 8 | − 3x → 2x − 12 = 8 | − 12 → 2x = −4. Wo ist der Fehler?", options: ["Um −12 wegzubekommen, muss er + 12 rechnen: 2x = 20, x = 10", "Er hätte + 3x rechnen müssen", "Der erste Schritt ist falsch", "Kein Fehler – x = −2 stimmt"], correct: 0, exp: "Gegen „− 12“ hilft nur die Gegenrechnung „+ 12“. Dann steht da 2x = 20 und x = 10. Probe: 50 − 12 = 38 und 30 + 8 = 38 ✓" },
                    { type: "Transfer", q: "Wie viele Lösungen hat 2(x + 2) = 2x?", options: ["Keine – es bleibt 4 = 0 stehen, und das ist falsch", "Genau eine: x = 0", "Genau eine: x = 2", "Zwei Lösungen"], correct: 0, exp: "Ausmultiplizieren: 2x + 4 = 2x. Zieht man 2x ab, bleibt 4 = 0. Das stimmt für keine Zahl – die Gleichung hat keine Lösung." },
                    { type: "Anwenden", q: "Probe: Ist x = 9 die Lösung von 5x − 12 = 3(x + 2)?", options: ["Ja – links 33, rechts 33", "Nein – links 33, rechts 27", "Nein – links 45, rechts 33", "Ja – beide Seiten ergeben 0"], correct: 0, exp: "Links: 5 · 9 − 12 = 45 − 12 = 33. Rechts: 3 · (9 + 2) = 3 · 11 = 33. Beide Seiten sind gleich, also ist x = 9 richtig." },
                    { type: "Transfer", q: "Löse Aufgabe 7 E: 5x − 12 = 7x : 2", options: ["x = 8", "x = 6", "x = 4", "x = −12"], correct: 0, exp: "Am einfachsten zuerst beide Seiten · 2: 10x − 24 = 7x. Dann | − 7x → 3x − 24 = 0, | + 24 → 3x = 24, | : 3 → x = 8. Probe: 40 − 12 = 28 und 56 : 2 = 28 ✓" }
                ]
            },
            {
                id: 4,
                title: "Terme & Gleichungen aufstellen",
                subtitle: "Situationen in Terme und Gleichungen übertragen (LU 10)",
                icon: "fa-building",
                color: "from-violet-500 to-purple-600",
                badge: "Level 4",
                summary: "Aus einem Text wird Mathe: Variable festlegen, Terme aufstellen, Gleichung lösen – mit den Häuser-Aufgaben aus deinem Buch.",
                simple: "Bei Textaufgaben übersetzt du Sätze in die Sprache der Mathematik. Zuerst legst du fest, wofür x steht – zum Beispiel für die Anzahl Personen in Haus 2. Dann schreibst du alle anderen Größen mit x auf. Weißt du noch etwas über die Summe, entsteht eine Gleichung, die du lösen kannst.",
                merke: "1. Variable festlegen: „x = …“. 2. Die anderen Größen als Terme mit x. 3. Gleichung aufstellen (z. B. Summe = 30). 4. Vereinfachen und lösen. 5. Probe und Antwortsatz. Übersetzung: „mehr als“ → +, „weniger als“ → −, „doppelt so viele“ → 2 ·, „halb so viele“ → ½ ·.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Das Beispiel aus dem Buch (Aufgabe 8)</strong>
                        <p><em>In Haus 2 wohnen halb so viele Personen wie in Haus 1. In Haus 3 wohnen zehn Personen mehr als in Haus 2.</em></p>
                        <p>Das Buch wählt <strong>x = Anzahl Personen in Haus 2</strong>. Dann gilt: Haus 1 = 2x, Haus 2 = x, Haus 3 = x + 10, zusammen <strong>4x + 10</strong>.</p>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead><tr class="border-b border-slate-200"><th class="py-1 pr-2">Haus 1 (2x)</th><th class="py-1 pr-2">Haus 2 (x)</th><th class="py-1 pr-2">Haus 3 (x + 10)</th><th class="py-1">Summe (4x + 10)</th></tr></thead>
                                <tbody>
                                    <tr class="border-b border-slate-100"><td class="py-1">6</td><td>3</td><td>13</td><td>22</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1">10</td><td>5</td><td>15</td><td>30</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1">20</td><td>10</td><td>20</td><td>50</td></tr>
                                    <tr><td class="py-1">32</td><td>16</td><td>26</td><td>74</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Dieselbe Situation gibt es also als <strong>Wort</strong>, als <strong>Bild</strong>, als <strong>Tabelle</strong> und als <strong>Term</strong>.</p>
                        <strong class="text-blue-900 block text-sm mt-3">2. Übersetzungshilfe</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>„zwei Personen <strong>mehr als</strong> in Haus 1“ → x + 2</li>
                            <li>„zwei Personen <strong>weniger als</strong> in Haus 1“ → x − 2 (nicht 2 − x!)</li>
                            <li>„<strong>doppelt so viele</strong> wie“ → 2 · x = 2x</li>
                            <li>„<strong>halb so viele</strong> wie“ → ½ · x = ½x = x : 2</li>
                            <li>„<strong>insgesamt</strong>“ → alle Terme addieren: Summe = …</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">3. Wofür soll x stehen? (Aufgabe 10)</strong>
                        <p><em>In Haus 2 wohnen 6 Personen weniger als in Haus 1, in Haus 3 doppelt so viele wie in Haus 1.</em> Das Buch zeigt drei richtige Termgruppen:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>x = Haus 1: x, x − 6, 2x → Summe <strong>4x − 6</strong></li>
                            <li>x = Haus 2: x + 6, x, 2(x + 6) → Summe <strong>4x + 18</strong></li>
                            <li>x = Haus 3: ½x, ½x − 6, x → Summe <strong>2x − 6</strong></li>
                        </ul>
                        <p>Wohnen insgesamt 30 Personen dort, ergibt jede Gleichung dieselbe Verteilung: 4x − 6 = 30 → x = 9; 4x + 18 = 30 → x = 3; 2x − 6 = 30 → x = 18. Also immer <strong>9 / 3 / 18 Personen</strong>. Nur x bedeutet jedes Mal etwas anderes!</p>
                        <p>Tipp: Wähle x für die Größe, mit der die anderen verglichen werden. Dann werden die Terme einfach (oft ohne Brüche).</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Der Plan für jede Anwendungsaufgabe (Checkliste 2c)</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li><strong>Variable festlegen</strong> – aufschreiben: „x = Anzahl Personen in Haus …“.</li>
                            <li>Den Zusammenhang mit dieser Variable in <strong>Termen</strong> beschreiben.</li>
                            <li>Aus den Termen eine <strong>Gleichung aufstellen</strong>.</li>
                            <li>Die Gleichung <strong>vereinfachen und lösen</strong>.</li>
                            <li><strong>Probe</strong> am Text und <strong>Antwortsatz</strong>.</li>
                        </ol>
                        <strong class="text-blue-900 block text-sm mt-3">5. Passt das Ergebnis zur Situation?</strong>
                        <p>Personen kann man nur ganz zählen, und es können nicht weniger als 0 sein. Aufgabe 10 D fragt: Was, wenn in Haus 2 niemand wohnt? Mit x = Haus 1: x − 6 = 0 → x = 6. Dann wohnen 6 Personen in Haus 1 und 12 in Haus 3.</p>
                    </div>
                `,
                example: "<strong>Situation E aus dem Buch, mit einer Zusatzangabe:</strong> In Haus 1 wohnen zwei Personen mehr als in Haus 2. In Haus 3 wohnen zwei Personen mehr als in Haus 1. Insgesamt sind es 30 Personen.<br>1. Variable: x = Anzahl Personen in Haus 2.<br>2. Terme: Haus 1 = x + 2, Haus 2 = x, Haus 3 = (x + 2) + 2 = x + 4 (Termgruppe 4).<br>3. Gleichung: (x + 2) + x + (x + 4) = 30<br>4. Lösen: 3x + 6 = 30 | − 6 → 3x = 24 | : 3 → x = 8<br>5. Probe: 10 + 8 + 12 = 30 ✓ <strong>Antwort:</strong> In Haus 1 wohnen 10, in Haus 2 wohnen 8 und in Haus 3 wohnen 12 Personen.",
                videos: [
                    { id: "ECvHnYIt2qg", title: "Gleichungen aufstellen & lösen (Terme aufstellen)", channel: "Mathehilfe24" },
                    { id: "fpSxI1MEK9E", title: "Terme und Gleichungen Teil 9: Terme aufstellen aus Textaufgaben", channel: "DocP's Channel" }
                ],
                questions: [
                    { type: "Anwenden", q: "„In Haus 2 wohnen zwei Personen weniger als in Haus 1.“ x = Personen in Haus 1. Welcher Term beschreibt Haus 2?", options: ["x − 2", "2 − x", "x + 2", "2x"], correct: 0, exp: "Zwei weniger als x heißt: von x werden 2 abgezogen. „2 − x“ wäre falsch herum. Das ist Termgruppe 3 (Situation A)." },
                    { type: "Anwenden", q: "„In Haus 2 wohnen doppelt so viele Personen wie in Haus 1.“ x = Haus 1. Term für Haus 2?", options: ["2x", "x + 2", "½x", "x²"], correct: 0, exp: "Doppelt so viele = 2 mal so viele = 2x. Das ist Termgruppe 1 (Situation B)." },
                    { type: "Anwenden", q: "Termgruppe 5: Haus 1 = x − 2, Haus 2 = ½x, Haus 3 = x. Zu welcher Situation gehört sie?", options: ["C: Haus 2 halb so viele wie Haus 3, Haus 1 zwei weniger als Haus 3", "A: Haus 2 zwei weniger als Haus 1", "B: Haus 2 doppelt so viele wie Haus 1", "E: Haus 1 zwei mehr als Haus 2"], correct: 0, exp: "Hier steht x für Haus 3. Haus 2 ist die Hälfte davon (½x) und Haus 1 zwei weniger (x − 2) – genau Situation C." },
                    { type: "Anwenden", q: "Termgruppe 2: Haus 1 = x, Haus 2 = x + 2, Haus 3 = 2x. Welche Situation passt?", options: ["D: Haus 3 doppelt so viele wie Haus 1, Haus 1 zwei weniger als Haus 2", "A: Haus 2 zwei weniger als Haus 1", "C: Haus 2 halb so viele wie Haus 3", "E: Haus 3 zwei mehr als Haus 1"], correct: 0, exp: "Haus 3 = 2x ist das Doppelte von Haus 1. Wenn Haus 1 zwei weniger hat als Haus 2, hat Haus 2 zwei mehr: x + 2. Das ist Situation D." },
                    { type: "Verstehen", q: "Beispiel aus dem Buch: Haus 1 = 2x, Haus 2 = x, Haus 3 = x + 10. Wie lautet der Term für die Summe?", options: ["4x + 10", "3x + 10", "4x + 12", "2x + 10"], correct: 0, exp: "2x + x + x + 10 = 4x + 10. Kontrolle mit der Tabelle: x = 3 → 6 + 3 + 13 = 22 und 4 · 3 + 10 = 22 ✓" },
                    { type: "Anwenden", q: "Aufgabe 10, Termgruppe 1 (Summe 4x − 6): Insgesamt wohnen 30 Personen in den drei Häusern. Wie viele sind es jeweils?", options: ["Haus 1: 9, Haus 2: 3, Haus 3: 18", "Haus 1: 6, Haus 2: 0, Haus 3: 12", "Haus 1: 10, Haus 2: 4, Haus 3: 16", "Haus 1: 3, Haus 2: 9, Haus 3: 18"], correct: 0, exp: "4x − 6 = 30 | + 6 → 4x = 36 | : 4 → x = 9. Haus 1 = 9, Haus 2 = 9 − 6 = 3, Haus 3 = 2 · 9 = 18. Probe: 9 + 3 + 18 = 30 ✓" },
                    { type: "Transfer", q: "Aufgabe 10 D: In Haus 2 wohnt niemand. Wie viele Personen wohnen dann in Haus 1 und Haus 3?", options: ["Haus 1: 6, Haus 3: 12", "Haus 1: 0, Haus 3: 0", "Haus 1: 3, Haus 3: 6", "Haus 1: 6, Haus 3: 6"], correct: 0, exp: "Haus 2 = x − 6 = 0 → x = 6. Haus 1 = 6 und Haus 3 = 2 · 6 = 12." },
                    { type: "Fehler finden", q: "Mia übersetzt „4 weniger als x“ mit „4 − x“. Was ist richtig?", options: ["x − 4", "4 − x stimmt", "4x", "x : 4"], correct: 0, exp: "Man startet mit x und nimmt 4 weg: x − 4. Bei „4 − x“ würde man von 4 etwas abziehen – das ist etwas völlig anderes." },
                    { type: "Begründen", q: "Warum führen die Termgruppen 1, 2 und 3 aus Aufgabe 10 zur selben Personenverteilung?", options: ["Sie beschreiben dieselbe Situation – nur steht x jedes Mal für ein anderes Haus", "Weil alle Summen gleich sind", "Weil x immer dieselbe Zahl ist", "Das ist reiner Zufall"], correct: 0, exp: "Die Sätze über die Häuser sind dieselben. Nur die Wahl der Variablen ist anders. Deshalb kommt für x jeweils eine andere Zahl heraus (9, 3 oder 18), aber dieselbe Anzahl Personen pro Haus." },
                    { type: "Anwenden", q: "Termgruppe 3 aus Aufgabe 10: ½x + (½x − 6) + x. Wie lautet die Summe?", options: ["2x − 6", "2x + 6", "x − 6", "1,5x − 6"], correct: 0, exp: "½x + ½x = x, dazu noch x → 2x. Die −6 bleibt stehen. Summe: 2x − 6." },
                    { type: "Anwenden", q: "Rechentraining aus dem Buch: 0,1x = 10. Wie groß ist x?", options: ["x = 100", "x = 1", "x = 10", "x = 0,01"], correct: 0, exp: "| : 0,1 (oder · 10) → x = 100. Probe: 0,1 · 100 = 10 ✓" },
                    { type: "Transfer", q: "Situation C: „In Haus 2 wohnen halb so viele wie in Haus 3.“ Welche Wahl für x vermeidet Brüche?", options: ["x = Haus 2, dann ist Haus 3 = 2x", "x = Haus 3, dann ist Haus 2 = ½x", "x = Summe aller Häuser", "Es gibt keine Wahl ohne Brüche"], correct: 0, exp: "Hat Haus 2 halb so viele wie Haus 3, hat Haus 3 doppelt so viele wie Haus 2. Mit x = Haus 2 wird Haus 3 = 2x – ganz ohne Bruch. Beide Wahlen sind richtig, diese ist nur bequemer." }
                ]
            },
            {
                id: 5,
                title: "Umkreis & Inkreis",
                subtitle: "Mittelsenkrechten und Winkelhalbierende im Dreieck (LU 11)",
                icon: "fa-circle-dot",
                color: "from-teal-500 to-cyan-600",
                badge: "Level 5",
                summary: "Mittelsenkrechten führen zum Umkreis, Winkelhalbierende zum Inkreis – du lernst die Eigenschaften und das Zeichnen Schritt für Schritt.",
                simple: "Die Mittelsenkrechte steht im rechten Winkel genau auf der Mitte einer Seite. Jeder Punkt auf ihr ist von den beiden Ecken dieser Seite gleich weit weg. Die Winkelhalbierende teilt einen Winkel in zwei gleich große Hälften. Jeder Punkt auf ihr ist von den beiden Seiten gleich weit weg. Die drei Mittelsenkrechten treffen sich im Mittelpunkt des Umkreises, die drei Winkelhalbierenden im Mittelpunkt des Inkreises.",
                merke: "Mittelsenkrechten → Umkreis: Kreis durch alle drei Ecken, Mittelpunkt gleich weit von A, B und C. Winkelhalbierende → Inkreis: Kreis innen, der alle drei Seiten berührt, Mittelpunkt gleich weit von a, b und c. Eselsbrücke: Winkelhalbierende → Inkreis (beide „innen“).",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Bezeichnungen im Dreieck</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Ecken <strong>A, B, C</strong> gegen den Uhrzeigersinn.</li>
                            <li>Die Seite gegenüber von A heißt <strong>a</strong> (von B nach C), gegenüber von B liegt <strong>b</strong>, gegenüber von C liegt <strong>c</strong>.</li>
                            <li>Winkel: <strong>α</strong> bei A, <strong>β</strong> bei B, <strong>γ</strong> bei C.</li>
                            <li>Linien: m<sub>a</sub> = Mittelsenkrechte von a, w<sub>α</sub> = Winkelhalbierende von α, h<sub>a</sub> = Höhe auf a, s<sub>a</sub> = Seitenhalbierende von a.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">2. Die Mittelsenkrechte</strong>
                        <p><strong>Eigenschaft:</strong> Auf der Mittelsenkrechten m<sub>c</sub> hat jeder Punkt den gleichen Abstand von A und von B (Aufgabe 6 B).</p>
                        <p><strong>Mit dem Zirkel:</strong> Zirkel in A einstechen, Radius größer als die halbe Seite, Kreisbogen oberhalb und unterhalb der Seite zeichnen. Mit demselben Radius von B aus. Die beiden Schnittpunkte der Bögen verbinden.<br><strong>Mit dem Geodreieck:</strong> Seitenmitte abmessen und dort die Senkrechte zeichnen.<br><strong>Beim Falten:</strong> Die beiden Ecken genau aufeinanderlegen – die Faltlinie ist die Mittelsenkrechte.</p>
                        <strong class="text-blue-900 block text-sm mt-3">3. Der Umkreis</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Mittelsenkrechten der Seiten zeichnen – zwei reichen, die dritte ist die Kontrolle.</li>
                            <li>Der Schnittpunkt <strong>U</strong> ist von A, B und C gleich weit entfernt (Aufgabe 6 F).</li>
                            <li>Zirkel in U einstechen, bis zu <strong>einer Ecke</strong> aufziehen und den Kreis zeichnen – er geht durch alle drei Ecken.</li>
                        </ol>
                        <div data-mfig="umkreis"></div>
                        <strong class="text-blue-900 block text-sm mt-3">4. Die Winkelhalbierende</strong>
                        <p><strong>Eigenschaft:</strong> Auf der Winkelhalbierenden w<sub>γ</sub> hat jeder Punkt den gleichen Abstand von den Seiten a und b (Aufgabe 6 G).</p>
                        <p><strong>Mit dem Zirkel:</strong> Zirkel in den Scheitelpunkt, Bogen zeichnen, der beide Schenkel schneidet. Von beiden Schnittpunkten aus mit gleichem Radius zwei Bögen, die sich im Inneren des Winkels schneiden. Diesen Schnittpunkt mit dem Scheitelpunkt verbinden.<br><strong>Mit dem Geodreieck:</strong> Winkel messen, halbieren, Linie zeichnen.<br><strong>Beim Falten:</strong> Die beiden Seiten am Winkel aufeinanderlegen.</p>
                        <strong class="text-blue-900 block text-sm mt-3">5. Der Inkreis</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Winkelhalbierende der drei Winkel zeichnen (zwei reichen, die dritte ist die Kontrolle).</li>
                            <li>Der Schnittpunkt <strong>I</strong> hat von den Seiten a, b und c den gleichen Abstand (Aufgabe 6 C).</li>
                            <li>Von I aus das <strong>Lot</strong> auf eine Seite fällen (senkrecht!). Das ist der Radius.</li>
                            <li>Kreis um I zeichnen – er berührt alle drei Seiten. ⚠️ Nicht bis zu einer Ecke aufziehen!</li>
                        </ol>
                        <div data-mfig="inkreis"></div>
                        <strong class="text-blue-900 block text-sm mt-3">6. Was ändert sich je nach Dreieck? (Aufgaben 4 und 5)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>spitzwinklig:</strong> U liegt innerhalb des Dreiecks.</li>
                            <li><strong>rechtwinklig:</strong> U liegt genau auf der Mitte der längsten Seite (gegenüber dem rechten Winkel).</li>
                            <li><strong>stumpfwinklig:</strong> U liegt außerhalb des Dreiecks.</li>
                            <li>Der Inkreismittelpunkt I liegt <strong>immer</strong> innen.</li>
                        </ul>
                        <p>Probiere es im Mathe-Labor aus: Ziehe die Ecken und beobachte U und I.</p>
                    </div>
                `,
                example: "<strong>Linien mit Papier falten (Aufgabe 1):</strong> Schneide ein großes spitzwinkliges Dreieck aus. Für die <strong>Winkelhalbierende</strong> von α faltest du so, dass die Seiten b und c genau aufeinanderliegen – die Faltlinie läuft durch A. Für die <strong>Mittelsenkrechte</strong> von c legst du A genau auf B. Faltest du alle drei, siehst du: Die Faltlinien treffen sich jeweils in einem Punkt.<br><strong>Anwendung:</strong> Drei Orte A, B und C wollen einen gemeinsamen Treffpunkt, der von allen gleich weit entfernt ist. Gesucht ist ein Punkt mit gleichem Abstand zu A, B und C → der Mittelpunkt des Umkreises, also der Schnittpunkt der Mittelsenkrechten.",
                videos: [
                    { id: "q51eZtt4QQM", title: "Umkreis konstruieren (Mittelsenkrechte)", channel: "Lehrerschmidt" },
                    { id: "efc_pgIi4Rs", title: "Inkreis konstruieren (Winkelhalbierende)", channel: "Lehrerschmidt" },
                    { id: "-4EQxnh22HU", title: "Dreieck – Mittelsenkrechte konstruieren", channel: "Lehrerschmidt" }
                ],
                questions: [
                    { type: "Verstehen", q: "Wo liegt der Mittelpunkt des Umkreises?", options: ["Im Schnittpunkt der Mittelsenkrechten", "Im Schnittpunkt der Winkelhalbierenden", "Im Schnittpunkt der Höhen", "Immer in der Mitte der Seite c"], correct: 0, exp: "Jeder Punkt einer Mittelsenkrechten ist von zwei Ecken gleich weit weg. Der Schnittpunkt aller drei ist von allen drei Ecken gleich weit weg – der ideale Mittelpunkt für einen Kreis durch A, B und C." },
                    { type: "Verstehen", q: "Wo liegt der Mittelpunkt des Inkreises?", options: ["Im Schnittpunkt der Winkelhalbierenden", "Im Schnittpunkt der Mittelsenkrechten", "Im Schnittpunkt der Seitenhalbierenden", "Auf der Ecke C"], correct: 0, exp: "Punkte auf einer Winkelhalbierenden sind von zwei Seiten gleich weit weg. Der Schnittpunkt ist von allen drei Seiten gleich weit entfernt – so kann ein Kreis alle Seiten berühren." },
                    { type: "Anwenden", q: "Aufgabe 6 F: „Der Punkt hat von den Punkten A, B und C den gleichen Abstand.“ Welcher Punkt ist das?", options: ["Der Umkreismittelpunkt", "Der Inkreismittelpunkt", "Der Schwerpunkt", "Die Seitenmitte von a"], correct: 0, exp: "Gleicher Abstand zu den drei Ecken → Schnittpunkt der Mittelsenkrechten = Mittelpunkt des Umkreises." },
                    { type: "Anwenden", q: "Aufgabe 6 C: „Der Punkt hat von den Seiten a, b und c den gleichen Abstand.“ Welcher Punkt ist das?", options: ["Der Inkreismittelpunkt", "Der Umkreismittelpunkt", "Der Höhenschnittpunkt", "Die Ecke A"], correct: 0, exp: "Gleicher Abstand zu den drei Seiten → Schnittpunkt der Winkelhalbierenden = Mittelpunkt des Inkreises." },
                    { type: "Anwenden", q: "Aufgabe 6 B: „Auf der Geraden hat jeder Punkt den gleichen Abstand von A und von B.“ Welche Linie ist das?", options: ["Die Mittelsenkrechte der Seite c", "Die Winkelhalbierende von γ", "Die Höhe auf c", "Die Seite c selbst"], correct: 0, exp: "A und B sind die Endpunkte der Seite c. Alle Punkte mit gleichem Abstand zu A und B liegen auf der Mittelsenkrechten m<sub>c</sub>." },
                    { type: "Anwenden", q: "Aufgabe 6 G: „Auf der Geraden hat jeder Punkt den gleichen Abstand von den Seiten a und b.“ Welche Linie ist das?", options: ["Die Winkelhalbierende von γ", "Die Mittelsenkrechte von c", "Die Seitenhalbierende von c", "Die Höhe auf a"], correct: 0, exp: "Die Seiten a und b treffen sich in C und bilden dort den Winkel γ. Seine Winkelhalbierende w<sub>γ</sub> ist von beiden Seiten gleich weit entfernt." },
                    { type: "Fehler finden", q: "Ben zieht den Zirkel für den Inkreis vom Mittelpunkt I bis zur Ecke A auf. Was passiert?", options: ["Der Kreis wird zu groß – der Radius ist der senkrechte Abstand von I zu einer Seite", "Alles richtig, so zeichnet man den Inkreis", "Er erhält genau den Umkreis", "Der Kreis wird zu klein"], correct: 0, exp: "Der Inkreis soll die Seiten nur berühren. Sein Radius ist deshalb das Lot von I auf eine Seite. Bis zur Ecke ist es weiter – der Kreis würde über die Seiten hinausragen." },
                    { type: "Was passiert, wenn …?", q: "Das Dreieck ist stumpfwinklig. Wo liegt der Umkreismittelpunkt?", options: ["Außerhalb des Dreiecks", "Innerhalb des Dreiecks", "Genau auf einer Ecke", "Es gibt keinen Umkreis"], correct: 0, exp: "Bei einem stumpfen Winkel schneiden sich die Mittelsenkrechten außerhalb des Dreiecks. Der Umkreis existiert trotzdem und geht durch alle drei Ecken." },
                    { type: "Was passiert, wenn …?", q: "Das Dreieck ist rechtwinklig. Wo liegt der Umkreismittelpunkt?", options: ["Genau in der Mitte der längsten Seite", "In der Ecke mit dem rechten Winkel", "Außerhalb des Dreiecks", "In der Mitte der kürzesten Seite"], correct: 0, exp: "Beim rechtwinkligen Dreieck liegt U genau auf der Mitte der Seite gegenüber dem rechten Winkel (der längsten Seite). Das kannst du im Mathe-Labor mit dem Knopf „rechtwinklig“ prüfen." },
                    { type: "Verstehen", q: "Wie viele Mittelsenkrechten brauchst du mindestens, um U zu finden?", options: ["Zwei – die dritte dient zur Kontrolle", "Eine", "Drei, sonst geht es nicht", "Vier"], correct: 0, exp: "Zwei Linien schneiden sich bereits in einem Punkt. Die dritte Mittelsenkrechte muss durch denselben Punkt gehen – so prüfst du, ob du genau gezeichnet hast." },
                    { type: "Anwenden", q: "Wie faltest du die Mittelsenkrechte der Seite c?", options: ["A genau auf B legen und falten", "Die Seiten b und c aufeinanderlegen", "C auf die Seite c falten", "Das Dreieck einmal in der Mitte durchfalten"], correct: 0, exp: "Liegen A und B aufeinander, ist jeder Punkt der Faltlinie gleich weit von A und B entfernt – das ist genau die Mittelsenkrechte von c." },
                    { type: "Transfer", q: "Ein Spielplatz soll von drei Häusern A, B und C gleich weit entfernt sein. Wie findest du den Ort?", options: ["Mittelsenkrechten von zwei Seiten zeichnen – ihr Schnittpunkt ist der Ort", "Winkelhalbierende zeichnen", "Die Mitte der längsten Seite nehmen", "Den Mittelwert der drei Entfernungen berechnen"], correct: 0, exp: "Gleich weit von drei Punkten entfernt ist nur der Umkreismittelpunkt – also der Schnittpunkt der Mittelsenkrechten." },
                    { type: "Verstehen", q: "Welche Seite heißt a?", options: ["Die Seite gegenüber von A, also von B nach C", "Die Seite von A nach B", "Die längste Seite", "Die Seite von A nach C"], correct: 0, exp: "Jede Seite trägt den kleinen Buchstaben der gegenüberliegenden Ecke: a liegt gegenüber von A, zwischen B und C." }
                ]
            },
            {
                id: 6,
                title: "Höhen & Seitenhalbierende",
                subtitle: "Eigenschaften von Punkten und Linien im Dreieck (LU 11)",
                icon: "fa-ruler-combined",
                color: "from-cyan-500 to-sky-600",
                badge: "Level 6",
                summary: "Höhen stehen senkrecht, Seitenhalbierende treffen die Seitenmitte – und ihr Schnittpunkt ist der Schwerpunkt, auf dem das Dreieck balanciert.",
                simple: "Die Höhe geht von einer Ecke im rechten Winkel auf die gegenüberliegende Seite – wie ein Lot. Die Seitenhalbierende verbindet eine Ecke mit der Mitte der gegenüberliegenden Seite. Die drei Seitenhalbierenden treffen sich im Schwerpunkt: Dort kannst du ein Papp-Dreieck auf einer Bleistiftspitze balancieren.",
                merke: "Höhe h<sub>a</sub>: von A senkrecht auf a – sie teilt das Dreieck in zwei rechtwinklige Dreiecke. Seitenhalbierende s<sub>a</sub>: von A zur Mitte von a – sie teilt das Dreieck in zwei flächengleiche Dreiecke. Nicht verwechseln: Die Mittelsenkrechte geht auch durch die Seitenmitte, aber senkrecht – meist nicht durch die Ecke!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Die Höhe</strong>
                        <p>Die Höhe h<sub>a</sub> geht durch die Ecke A und steht <strong>senkrecht</strong> auf der Seite a. <strong>Zeichnen:</strong> Geodreieck mit der Mittellinie auf die Seite a legen, an die Ecke A schieben, Linie bis zur Seite zeichnen und den rechten Winkel markieren.</p>
                        <p><strong>Eigenschaft:</strong> Die Höhe teilt das Dreieck in zwei rechtwinklige Dreiecke (Aufgabe 6 D).</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>spitzwinklig:</strong> alle Höhen innen, Höhenschnittpunkt innen.</li>
                            <li><strong>rechtwinklig:</strong> zwei Höhen sind die Seiten am rechten Winkel – der Höhenschnittpunkt ist die Ecke mit dem rechten Winkel.</li>
                            <li><strong>stumpfwinklig:</strong> Seiten verlängern! Zwei Höhen liegen außerhalb, der Höhenschnittpunkt auch.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">2. Die Seitenhalbierende</strong>
                        <p>Die Seitenhalbierende s<sub>a</sub> verbindet die Ecke A mit der <strong>Mitte der Seite a</strong>. <strong>Zeichnen:</strong> Seitenmitte abmessen (oder mit der Mittelsenkrechten bestimmen) und mit der gegenüberliegenden Ecke verbinden.</p>
                        <p><strong>Eigenschaft:</strong> Sie teilt das Dreieck in zwei flächengleiche Dreiecke (Aufgabe 6 E). Die drei Seitenhalbierenden schneiden sich im <strong>Schwerpunkt S</strong> – er liegt immer innen.</p>
                        <div data-mfig="hoehe-sh"></div>
                        <strong class="text-blue-900 block text-sm mt-3">3. Dreiecke ausbalancieren (Aufgabe 3)</strong>
                        <p>Ein Karton-Dreieck balanciert auf einem Maßstab nur, wenn die Auflagelinie durch einen ganz bestimmten Punkt geht. Alle Auflage- und Kipplinien gehen durch denselben Punkt. Auf der Bleistiftspitze balanciert das Dreieck genau im <strong>Schnittpunkt der Seitenhalbierenden</strong> – dem Schwerpunkt.</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Seitenmittendreieck (Aufgaben 1 D und 7)</strong>
                        <p>Verbindest du die drei Seitenmitten, entsteht in der Mitte ein neues Dreieck. Das große Dreieck zerfällt so in <strong>vier deckungsgleiche Dreiecke</strong>. Jede Seite des Seitenmittendreiecks ist parallel zu einer Seite des großen Dreiecks und halb so lang.<br>Aufgabe 1 E: Die Höhen des Seitenmittendreiecks liegen genau auf den <strong>Mittelsenkrechten</strong> des großen Dreiecks.</p>
                        <strong class="text-blue-900 block text-sm mt-3">5. Alle vier Linien auf einen Blick</strong>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead><tr class="border-b border-slate-200"><th class="py-1 pr-2">Linie</th><th class="py-1 pr-2">geht durch …</th><th class="py-1 pr-2">Eigenschaft</th><th class="py-1">Schnittpunkt</th></tr></thead>
                                <tbody>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">Mittelsenkrechte</td><td class="pr-2">Seitenmitte, senkrecht</td><td class="pr-2">gleich weit von 2 Ecken</td><td>Umkreismittelpunkt</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">Winkelhalbierende</td><td class="pr-2">Ecke, halbiert den Winkel</td><td class="pr-2">gleich weit von 2 Seiten</td><td>Inkreismittelpunkt</td></tr>
                                    <tr class="border-b border-slate-100"><td class="py-1 pr-2 font-bold">Höhe</td><td class="pr-2">Ecke, senkrecht zur Gegenseite</td><td class="pr-2">2 rechtwinklige Dreiecke</td><td>Höhenschnittpunkt</td></tr>
                                    <tr><td class="py-1 pr-2 font-bold">Seitenhalbierende</td><td class="pr-2">Ecke und Mitte der Gegenseite</td><td class="pr-2">2 flächengleiche Dreiecke</td><td>Schwerpunkt</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <strong class="text-blue-900 block text-sm mt-3">6. Dreiecke nach Anleitung konstruieren (Aufgaben 8 und 9)</strong>
                        <p>Erst eine <strong>Planfigur</strong> skizzieren und die gegebenen Stücke farbig markieren, dann genau konstruieren und die Schritte beschreiben. Beispiel Aufgabe 8: Strecke AB mit c = 8 cm · Parallele zu AB im Abstand h<sub>c</sub> = 6 cm · Kreisbogen um A mit r = b = 7,5 cm · der Bogen schneidet die Parallele in C und C' → zwei verschiedene Dreiecke ABC und ABC'. Das Konstruktionsproblem hat <strong>zwei Lösungen</strong>.</p>
                    </div>
                `,
                example: "<strong>Dreiecke ausbalancieren (Aufgabe 3):</strong> Zeichne ein Dreieck auf Karton, schneide es aus und zeichne die drei Seitenhalbierenden ein. Lege das Dreieck mit einer Seitenhalbierenden auf die Kante eines Maßstabs – es bleibt liegen. Mit einer anderen Seitenhalbierenden klappt es auch. Setzt du den Schnittpunkt S auf eine Bleistiftspitze, balanciert das ganze Dreieck. Der Grund: Jede Seitenhalbierende teilt das Dreieck in zwei gleich große Flächen – links und rechts ist gleich viel „Gewicht“.",
                videos: [
                    { id: "iwPyPAwvQzE", title: "Höhe im Dreieck – Konstruktion einfach erklärt", channel: "Mr. G education" },
                    { id: "kumZANqdSa0", title: "Seitenhalbierende und Schwerpunkt im Dreieck – Konstruktion einfach erklärt", channel: "Mr. G education" }
                ],
                questions: [
                    { type: "Anwenden", q: "Aufgabe 6 D: „Die Strecke teilt das Dreieck in zwei rechtwinklige Dreiecke.“ Welche Strecke ist gemeint?", options: ["Eine Höhe", "Eine Seitenhalbierende", "Eine Winkelhalbierende", "Eine Seite"], correct: 0, exp: "Die Höhe steht senkrecht auf der Gegenseite. Dort entsteht auf beiden Seiten ein rechter Winkel – also zwei rechtwinklige Dreiecke." },
                    { type: "Anwenden", q: "Aufgabe 6 E: „Die Strecke teilt das Dreieck in zwei flächengleiche Dreiecke.“ Welche Strecke ist gemeint?", options: ["Eine Seitenhalbierende", "Eine Höhe", "Eine Mittelsenkrechte", "Eine Winkelhalbierende"], correct: 0, exp: "Beide Teildreiecke haben eine gleich lange Grundseite (die halbe Seite) und dieselbe Höhe – deshalb sind ihre Flächen gleich groß." },
                    { type: "Anwenden", q: "Aufgabe 6 A: „Der Punkt auf der Seite a hat den gleichen Abstand von B und von C.“ Welcher Punkt ist das?", options: ["Die Mitte der Seite a", "Der Umkreismittelpunkt", "Die Ecke A", "Der Inkreismittelpunkt"], correct: 0, exp: "Auf der Seite a gibt es genau einen Punkt, der gleich weit von B und C entfernt ist: ihre Mitte. Durch sie gehen die Mittelsenkrechte m<sub>a</sub> und die Seitenhalbierende s<sub>a</sub>." },
                    { type: "Verstehen", q: "Auf welchem Punkt balanciert ein Papp-Dreieck auf einer Bleistiftspitze?", options: ["Im Schwerpunkt, dem Schnittpunkt der Seitenhalbierenden", "Im Umkreismittelpunkt", "Im Inkreismittelpunkt", "An der Ecke mit dem größten Winkel"], correct: 0, exp: "Jede Seitenhalbierende teilt das Dreieck in zwei gleich große Flächen. Ihr gemeinsamer Schnittpunkt ist der Schwerpunkt – dort ist das Dreieck im Gleichgewicht." },
                    { type: "Verstehen", q: "Was gilt für die Höhe h<sub>a</sub>?", options: ["Sie geht durch A und steht senkrecht auf a", "Sie geht durch die Mitte von a und steht senkrecht auf a", "Sie verbindet A mit der Mitte von a", "Sie halbiert den Winkel α"], correct: 0, exp: "Die Höhe beginnt immer an der Ecke und trifft die Gegenseite im rechten Winkel. Senkrecht durch die Mitte wäre die Mittelsenkrechte." },
                    { type: "Fehler finden", q: "Lea sagt: „Mittelsenkrechte und Seitenhalbierende sind dasselbe, beide gehen durch die Seitenmitte.“ Was stimmt?", options: ["Falsch – die Mittelsenkrechte steht senkrecht auf der Seite, die Seitenhalbierende führt zur Ecke", "Richtig – es sind dieselben Linien", "Falsch – die Seitenhalbierende geht nicht durch die Seitenmitte", "Richtig – nur die Namen sind verschieden"], correct: 0, exp: "Beide gehen durch die Seitenmitte, aber in verschiedene Richtungen: Die Mittelsenkrechte im rechten Winkel, die Seitenhalbierende zur gegenüberliegenden Ecke. Nur in Sonderfällen fallen sie zusammen." },
                    { type: "Was passiert, wenn …?", q: "Das Dreieck ist stumpfwinklig. Wo liegt der Höhenschnittpunkt?", options: ["Außerhalb des Dreiecks", "Innerhalb des Dreiecks", "Genau im Schwerpunkt", "Auf der längsten Seite"], correct: 0, exp: "Zwei Höhen treffen die Gegenseiten nur, wenn man diese verlängert. Ihre Verlängerungen schneiden sich außerhalb des Dreiecks." },
                    { type: "Was passiert, wenn …?", q: "Das Dreieck ist rechtwinklig. Wo liegt der Höhenschnittpunkt?", options: ["In der Ecke mit dem rechten Winkel", "In der Mitte der längsten Seite", "Außerhalb des Dreiecks", "Im Inkreismittelpunkt"], correct: 0, exp: "Die beiden Seiten am rechten Winkel stehen senkrecht aufeinander – jede ist zugleich eine Höhe. Sie treffen sich in der Ecke mit dem rechten Winkel." },
                    { type: "Anwenden", q: "Du verbindest die drei Seitenmitten eines Dreiecks. In wie viele deckungsgleiche Dreiecke zerfällt es?", options: ["4", "3", "2", "6"], correct: 0, exp: "Es entstehen drei Eckdreiecke und das Seitenmittendreieck in der Mitte – alle vier sind deckungsgleich (Aufgabe 7)." },
                    { type: "Begründen", q: "Aufgabe 8: c = 8 cm, h<sub>c</sub> = 6 cm, b = 7,5 cm. Warum gibt es zwei Lösungen?", options: ["Der Kreisbogen um A schneidet die Parallele zu AB zweimal – in C und in C'", "Weil man die Seite c zweimal zeichnet", "Weil h<sub>c</sub> größer als b ist", "Es gibt nur eine Lösung"], correct: 0, exp: "C muss auf der Parallelen im Abstand 6 cm liegen und 7,5 cm von A entfernt sein. Der Kreis um A trifft die Parallele an zwei Stellen – also passen zwei Dreiecke." },
                    { type: "Transfer", q: "Aufgabe 1 E: Was gilt für die Höhen im Seitenmittendreieck?", options: ["Sie liegen auf den Mittelsenkrechten des großen Dreiecks", "Sie liegen auf den Seitenhalbierenden des großen Dreiecks", "Sie sind die Seiten des großen Dreiecks", "Sie schneiden sich nie"], correct: 0, exp: "Eine Seite des Seitenmittendreiecks ist parallel zu einer Seite des großen Dreiecks. Die Höhe darauf steht also senkrecht auf der großen Seite und geht durch deren Mitte – genau wie die Mittelsenkrechte." },
                    { type: "Fehler finden", q: "Max behauptet: „Die Höhen liegen immer innerhalb des Dreiecks.“ Stimmt das?", options: ["Nein – beim stumpfwinkligen Dreieck liegen zwei Höhen außerhalb", "Ja – das ist immer so", "Nein – Höhen liegen immer außerhalb", "Ja – außer beim rechtwinkligen Dreieck"], correct: 0, exp: "Bei einem stumpfen Winkel muss man zwei Seiten verlängern, damit die Höhen sie im rechten Winkel treffen. Diese Höhen liegen außerhalb des Dreiecks (Aufgabe 4)." }
                ]
            },
            {
                id: 7,
                title: "Zusatz: Trapeze",
                subtitle: "Trapezfläche & Konstruktion – im Buch, nicht auf der Checkliste (LU 11)",
                icon: "fa-shapes",
                color: "from-slate-500 to-blue-700",
                badge: "Level 7 · Zusatz",
                summary: "Was ist ein Trapez – und wie berechnest du seine Fläche auf fünf Wegen? Zusatzwissen von S. 32–33 (steht nicht auf deiner Checkliste).",
                simple: "Ein Trapez ist ein Viereck mit zwei parallelen Seiten. Die lange parallele Seite heißt g₁, die kurze g₂. Der Abstand zwischen ihnen ist die Höhe h. Du kannst dir die Fläche so merken: Mittelwert der beiden parallelen Seiten mal die Höhe.",
                merke: "Trapez = Viereck mit zwei parallelen Seiten g₁ und g₂. Fläche: A = (g₁ + g₂) · h : 2. Die Höhe h steht senkrecht auf den parallelen Seiten – nie die schräge Seite einsetzen!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <p class="lesson-merke rounded-xl p-3"><strong>Hinweis:</strong> Trapeze stehen im Buch (S. 32–33), aber <strong>nicht auf deiner Checkliste</strong> für die Klassenarbeit. Lerne zuerst die Level 1–6.</p>
                        <strong class="text-blue-900 block text-sm">1. Mathematik und Kunst</strong>
                        <p>Der Schweizer Künstler <strong>Max Bill</strong> (1908 in Winterthur geboren, 1994 in Berlin gestorben) war Maler, Grafiker, Plastiker, Produktgestalter und Architekt. Er war überzeugt, dass man Kunst weitgehend mit mathematischem Denken entwickeln kann. 1981 schuf er das Bild „entwicklung von zwei bis acht“. Darin gibt es farbige Dreiecke und Vierecke – und <strong>alle farbigen Vierecke haben zwei parallele Seiten</strong>. Solche Vierecke heißen <strong>Trapeze</strong>.</p>
                        <p>Der Mathematiker David Hilbert (1862–1943) sagte: „Jedes Bild ist eine gezeichnete Formel – jede Formel ist ein geschriebenes Bild.“</p>
                        <strong class="text-blue-900 block text-sm mt-3">2. Bezeichnungen</strong>
                        <p>Trapez ABCD: Grundseite <strong>g₁ = AB</strong> (unten), parallele Seite <strong>g₂ = DC</strong> (oben), Schenkel s₁ = AD und s₂ = BC, Winkel α bei A, β bei B, γ bei C, δ bei D. Die Höhe <strong>h</strong> ist der senkrechte Abstand der parallelen Seiten.</p>
                        <div data-mfig="trapez"></div>
                        <strong class="text-blue-900 block text-sm mt-3">3. Fünf Wege zur Fläche (Aufgabe 13)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Figur 1 → Formel 3:</strong> Zwei gleiche Trapeze, eines gedreht, bilden ein Parallelogramm mit Grundseite g₁ + g₂ und Höhe h. Das Trapez ist die Hälfte: A = (g₁ + g₂) · h : 2.</li>
                            <li><strong>Figur 2 → Formel 2:</strong> Das Trapez wird auf halber Höhe durchgeschnitten, das obere Stück gedreht danebengelegt. Es entsteht ein Parallelogramm mit Grundseite g₁ + g₂ und Höhe h/2: A = (g₁ + g₂) · h/2.</li>
                            <li><strong>Figur 3 → Formel 4:</strong> Eine Parallele zu einem Schenkel zerlegt das Trapez in ein Parallelogramm (g₂ · h) und ein Dreieck ((g₁ − g₂) · h : 2): A = g₂ · h + (g₁ − g₂) · h : 2.</li>
                            <li><strong>Figur 4 → Formel 5:</strong> Eine Diagonale zerlegt das Trapez in zwei Dreiecke: A = g₁ · h : 2 + g₂ · h : 2.</li>
                            <li><strong>Figur 5 → Formel 1:</strong> Die Ecken werden auf halber Höhe abgeschnitten und hochgeklappt. Es entsteht ein Rechteck mit der Breite (g₁ + g₂) : 2 (Mittellinie) und der Höhe h: A = (g₁ + g₂) : 2 · h.</li>
                        </ul>
                        <p>Alle Wege ergeben dasselbe. Beispiel g₁ = 7,5 cm, g₂ = 6 cm, h = 3,5 cm: (7,5 + 6) : 2 · 3,5 = 23,625 cm² und 6 · 3,5 + 1,5 · 3,5 : 2 = 21 + 2,625 = 23,625 cm² ✓</p>
                        <strong class="text-blue-900 block text-sm mt-3">4. Trapeze konstruieren (Aufgabe 14)</strong>
                        <p><strong>A:</strong> g₁ = 7,5 cm, g₂ = 6 cm, h = 3,5 cm, α = 60° → g₁ = AB zeichnen · in A den Winkel 60° antragen · Parallele zu AB im Abstand 3,5 cm · Schnittpunkt mit dem Schenkel = D · von D aus 6 cm auf der Parallelen abtragen = C · C mit B verbinden.</p>
                        <p><strong>B:</strong> g₁ = 9 cm, s₁ = 4 cm, α = 80°, β = 50° → AB = 9 cm · in A 80° antragen und darauf 4 cm abtragen = D · in B 50° antragen · Parallele zu AB durch D · Schnittpunkt mit dem Schenkel von β = C.</p>
                    </div>
                `,
                example: "<strong>Fläche des Trapezes aus Aufgabe 14 A</strong> (g₁ = 7,5 cm, g₂ = 6 cm, h = 3,5 cm):<br>Formel 1: A = (7,5 + 6) : 2 · 3,5 = 6,75 · 3,5 = <strong>23,625 cm²</strong> ≈ 23,6 cm².<br>Gegenprobe mit Formel 5 (Diagonale): 7,5 · 3,5 : 2 + 6 · 3,5 : 2 = 13,125 + 10,5 = 23,625 cm² ✓<br>Die Schenkellänge und der Winkel α = 60° brauchst du für die Konstruktion, aber nicht für die Fläche.",
                videos: [
                    { id: "njPE2w-T_SM", title: "Trapez – Flächeninhalt berechnen (beide Wege)", channel: "Lehrerschmidt" },
                    { id: "XQgCsz_5Z5Q", title: "Trapez – Flächeninhalt berechnen", channel: "Lehrerschmidt" }
                ],
                questions: [
                    { type: "Verstehen", q: "Was ist ein Trapez?", options: ["Ein Viereck mit zwei parallelen Seiten", "Ein Viereck mit vier gleich langen Seiten", "Ein Dreieck mit einem rechten Winkel", "Ein Viereck ohne parallele Seiten"], correct: 0, exp: "Das Kennzeichen eines Trapezes sind die zwei parallelen Seiten g₁ und g₂ – so wie bei allen farbigen Vierecken im Bild von Max Bill." },
                    { type: "Anwenden", q: "Berechne die Fläche: g₁ = 8 cm, g₂ = 4 cm, h = 3 cm.", options: ["18 cm²", "36 cm²", "15 cm²", "96 cm²"], correct: 0, exp: "A = (8 + 4) · 3 : 2 = 12 · 3 : 2 = 36 : 2 = 18 cm²." },
                    { type: "Verstehen", q: "Figur 5: Ecken auf halber Höhe abschneiden und zu einem Rechteck hochklappen. Welche Formel passt?", options: ["Formel 1: A = (g₁ + g₂) : 2 · h", "Formel 5: A = g₁ · h : 2 + g₂ · h : 2", "Formel 4: A = g₂ · h + (g₁ − g₂) · h : 2", "A = g₁ · g₂"], correct: 0, exp: "Das Rechteck ist so breit wie die Mittellinie (g₁ + g₂) : 2 und so hoch wie das Trapez. Breite mal Höhe ergibt Formel 1." },
                    { type: "Verstehen", q: "Figur 4: Eine Diagonale teilt das Trapez in zwei Dreiecke. Welche Formel passt?", options: ["Formel 5: A = g₁ · h : 2 + g₂ · h : 2", "Formel 2: A = (g₁ + g₂) · h/2", "Formel 1: A = (g₁ + g₂) : 2 · h", "A = g₁ · h"], correct: 0, exp: "Beide Dreiecke haben die Höhe h. Das eine hat die Grundseite g₁, das andere g₂. Zwei Dreiecksflächen addiert ergibt Formel 5." },
                    { type: "Verstehen", q: "Figur 1: Zwei gleiche Trapeze bilden zusammen ein Parallelogramm. Welche Formel passt?", options: ["Formel 3: A = (g₁ + g₂) · h : 2", "Formel 4: A = g₂ · h + (g₁ − g₂) · h : 2", "Formel 5: A = g₁ · h : 2 + g₂ · h : 2", "A = (g₁ + g₂) · h"], correct: 0, exp: "Das Parallelogramm hat die Grundseite g₁ + g₂ und die Höhe h. Ein Trapez ist die Hälfte davon – deshalb „: 2“." },
                    { type: "Fehler finden", q: "Nina setzt für h die Länge des schrägen Schenkels ein. Was ist falsch?", options: ["Die Höhe ist der senkrechte Abstand der parallelen Seiten, nicht der schräge Schenkel", "Nichts – bei Trapezen ist der Schenkel die Höhe", "Sie hätte g₂ einsetzen müssen", "Sie hätte den Winkel α einsetzen müssen"], correct: 0, exp: "Der schräge Schenkel ist länger als der senkrechte Abstand. Mit ihm wird die Fläche zu groß. Nur beim rechten Winkel sind Schenkel und Höhe gleich lang." },
                    { type: "Anwenden", q: "Wie lang ist die Mittellinie bei g₁ = 9 cm und g₂ = 5 cm?", options: ["7 cm", "14 cm", "4 cm", "45 cm"], correct: 0, exp: "Die Mittellinie ist der Mittelwert der beiden parallelen Seiten: (9 + 5) : 2 = 14 : 2 = 7 cm." },
                    { type: "Anwenden", q: "Prüfe mit Formel 4: g₁ = 10 cm, g₂ = 6 cm, h = 4 cm. Wie groß ist A?", options: ["32 cm²", "64 cm²", "24 cm²", "40 cm²"], correct: 0, exp: "g₂ · h = 6 · 4 = 24 und (g₁ − g₂) · h : 2 = 4 · 4 : 2 = 8. Zusammen 32 cm². Gegenprobe mit Formel 1: (10 + 6) : 2 · 4 = 32 cm² ✓" },
                    { type: "Anwenden", q: "Aufgabe 14 A: g₁ = 7,5 cm, g₂ = 6 cm, h = 3,5 cm. Wie groß ist die Fläche?", options: ["23,625 cm²", "47,25 cm²", "13,5 cm²", "26,25 cm²"], correct: 0, exp: "A = (7,5 + 6) : 2 · 3,5 = 6,75 · 3,5 = 23,625 cm². 47,25 wäre das Ergebnis ohne „: 2“." },
                    { type: "Transfer", q: "Ein Trapez hat A = 30 cm², g₁ = 7 cm und g₂ = 5 cm. Wie groß ist die Höhe h?", options: ["5 cm", "2,5 cm", "6 cm", "10 cm"], correct: 0, exp: "30 = (7 + 5) : 2 · h = 6 · h. Also h = 30 : 6 = 5 cm – eine Gleichung wie in Level 3!" }
                ]
            }
        ];

        // ==========================================
        // 20 ÜBUNGEN (Grundlagen → Anwenden → Transfer → Klausur)
        // ==========================================
        const matheExercises = [
            { id: 1, level: "Grundlagen", title: "Wertetabellen den Graphen zuordnen (S. 19, Aufg. 3)", task: "Ordne die Wertetabellen A bis I den neun Graphen aus Aufgabe 2 zu. Beschreibe bei jeder Tabelle, wie sich y verändert.", steps: [
                "<strong>Tipp:</strong> Schau nicht auf einzelne Zahlen, sondern darauf, <em>wie</em> sich y von Spalte zu Spalte verändert: gleichmäßig, gar nicht, sprunghaft, immer weniger?",
                "<strong>A → Graph 5:</strong> y bleibt gleich und springt bei 1,01 / 2,01 / … plötzlich um 1 → Treppe.<br><strong>B → Graph 3:</strong> erst + 2,5 pro Schritt, ab x = 3 nur noch + 0,8 → erst steil, dann flacher.<br><strong>C → Graph 6:</strong> y = x + 4 → Gerade, die bei 4 beginnt.",
                "<strong>D → Graph 4:</strong> x · y = 360 immer → je größer x, desto kleiner y → fallende Kurve.<br><strong>E → Graph 7:</strong> y = x bis 6, danach bleibt y = 6 → steigt, dann waagrecht.<br><strong>F → Graph 9:</strong> + 2, + 2, + 0, + 2, + 2, + 0 … → Treppe mit schrägen Stufen.",
                "<strong>G → Graph 1:</strong> bis x = 2 ist y = 0, dann + 1 pro Schritt → Gerade, die erst später beginnt.<br><strong>H → Graph 8:</strong> immer 8 → waagrecht.<br><strong>I → Graph 2:</strong> y = 1,5 · x, Start bei 0 → Gerade durch den Nullpunkt."
            ] },
            { id: 2, level: "Grundlagen", title: "Graphen lesen: vier Geschichten & Bewegungsspiel (S. 18–19)", task: "a) Die vier Graphen aus Aufgabe 1 haben dieselbe Form. Beschreibe, was ein waagrechtes Stück beim Weg-Graphen und beim Geschwindigkeits-Graphen bedeutet.<br>b) Beschreibe die Bewegung zu Graph 1 und Graph 3 aus dem Bewegungsspiel (Distanz zu S). Warum kann man Graph 4 nicht vormachen?", steps: [
                "<strong>a) Weg-Graph</strong> (gefahrene Strecke): waagrecht = die Strecke wächst nicht → das Auto <strong>steht</strong> (Pause).<br><strong>Geschwindigkeits-Graph</strong> (Anfahren mit einem Auto): waagrecht = die Geschwindigkeit bleibt gleich → das Auto <strong>fährt gleich schnell</strong> weiter.",
                "<strong>b) Graph 1:</strong> zügig von S weg · ein kurzes Stück zurück Richtung S · kurz stehen bleiben · gleichmäßig weiter Richtung Z · wieder stehen · zum Schluss schnell bis Z.",
                "<strong>Graph 3:</strong> zuerst schnell von S weg · lange stehen bleiben · dann kleine Schritte vor und zurück (die Zacken) · zum Schluss zügig bis Z.",
                "<strong>Graph 4:</strong> Am Ende springt der Graph <strong>senkrecht</strong> nach oben. Das hieße: ohne Zeit zu brauchen von einem Ort zu einem anderen. Jede Bewegung braucht aber Zeit – senkrechte Stücke sind bei Weg-Zeit-Graphen unmöglich."
            ] },
            { id: 3, level: "Grundlagen", title: "Produkte zusammenfassen", task: "Fasse zusammen (alphabetisch, ohne Malzeichen):<br>a) a · b · 3 · b · 2,5 &nbsp; b) 4 · x · (−2) · y · x &nbsp; c) 0,5 · m · 6 · n · m · n &nbsp; d) 3 · a · a · a", steps: [
                "<strong>Vorgehen:</strong> 1. Zahlen nach vorne und ausrechnen. 2. Variablen alphabetisch dahinter. 3. Gleiche Variablen als Potenz.",
                "<strong>a)</strong> 3 · 2,5 · a · b · b = <strong>7,5ab²</strong> (Beispiel der Checkliste)",
                "<strong>b)</strong> 4 · (−2) = −8; x · x · y = x²y → <strong>−8x²y</strong>",
                "<strong>c)</strong> 0,5 · 6 = 3; m · m · n · n = m²n² → <strong>3m²n²</strong>",
                "<strong>d)</strong> a · a · a = a³ → <strong>3a³</strong> (nicht 3a + 3!)"
            ] },
            { id: 4, level: "Grundlagen", title: "Gleichartige Glieder zusammenfassen", task: "Vereinfache:<br>a) 7,5ab² + 4ba − 3ab² − 2ab &nbsp; b) 3x + 5y − x + 2y &nbsp; c) 4x² − 2x + x² + 7x &nbsp; d) 2,5a − 0,5b + 1,5a − b", steps: [
                "<strong>Regel:</strong> Nur Glieder mit genau denselben Variablen und Hochzahlen zusammenfassen. Das Vorzeichen gehört zum Glied dahinter.",
                "<strong>a)</strong> 4ba = 4ab. ab: 4ab − 2ab = 2ab. ab²: 7,5ab² − 3ab² = 4,5ab² → <strong>2ab + 4,5ab²</strong>",
                "<strong>b)</strong> x: 3x − x = 2x. y: 5y + 2y = 7y → <strong>2x + 7y</strong>",
                "<strong>c)</strong> x²: 4x² + x² = 5x². x: −2x + 7x = 5x → <strong>5x² + 5x</strong> (x² und x bleiben getrennt!)",
                "<strong>d)</strong> a: 2,5a + 1,5a = 4a. b: −0,5b − b = −1,5b → <strong>4a − 1,5b</strong>"
            ] },
            { id: 5, level: "Grundlagen", title: "Plus- und Minusklammern auflösen", task: "Löse die Klammern auf und fasse zusammen:<br>a) 4x + (3x − 5) &nbsp; b) 4x − (3x − 5) &nbsp; c) 12 − (2a + 7) + a &nbsp; d) −(x − 4) + (2x + 1)", steps: [
                "<strong>Regeln:</strong> Plusklammer → weglassen. Minusklammer → weglassen und jedes Vorzeichen darin umdrehen.",
                "<strong>a)</strong> 4x + 3x − 5 = <strong>7x − 5</strong>",
                "<strong>b)</strong> 4x − 3x + 5 = <strong>x + 5</strong> (aus −5 wird +5)",
                "<strong>c)</strong> 12 − 2a − 7 + a = <strong>5 − a</strong>",
                "<strong>d)</strong> −x + 4 + 2x + 1 = <strong>x + 5</strong>"
            ] },
            { id: 6, level: "Grundlagen", title: "Malklammern ausmultiplizieren („Pfeile“)", task: "Multipliziere aus:<br>a) 3(x + 2) &nbsp; b) 5(3x + 8) &nbsp; c) −2(4a − 3) &nbsp; d) ½(10x + 60) &nbsp; e) (2x − 1) · 4", steps: [
                "<strong>Distributivgesetz:</strong> Der Faktor wird mit <em>jedem</em> Glied in der Klammer multipliziert – zeichne dir die Pfeile.",
                "<strong>a)</strong> 3 · x + 3 · 2 = <strong>3x + 6</strong>",
                "<strong>b)</strong> 5 · 3x + 5 · 8 = <strong>15x + 40</strong>",
                "<strong>c)</strong> −2 · 4a + (−2) · (−3) = <strong>−8a + 6</strong> (minus mal minus = plus)",
                "<strong>d)</strong> ½ · 10x + ½ · 60 = <strong>5x + 30</strong>",
                "<strong>e)</strong> Der Faktor darf auch hinter der Klammer stehen: 2x · 4 − 1 · 4 = <strong>8x − 4</strong>"
            ] },
            { id: 7, level: "Anwenden", title: "Knack die Box (S. 26, Aufg. 1–3)", task: "a) Prüfe durch Einsetzen, dass 2x + 4 = x + 6, 5x + 3 = 3x + 7 und 2x + 1 = 5 die Lösung x = 2 haben.<br>b) Gib zu den Boxenanordnungen 1–4 die Gleichungen an. Was verändert sich von einer zur nächsten? Gilt überall x = 3?<br>c) Löse die Gleichungen 4x + 6 = 2x + 12 und 5x + 3 = 2x + 15.", steps: [
                "<strong>a)</strong> 2 · 2 + 4 = 8 und 2 + 6 = 8 ✓ · 5 · 2 + 3 = 13 und 3 · 2 + 7 = 13 ✓ · 2 · 2 + 1 = 5 ✓",
                "<strong>b)</strong> Anordnung 1: 4x + 8 = 2x + 14 · Anordnung 2: 2x + 8 = 14 · Anordnung 3: 2x = 6 · Anordnung 4: x = 3.<br>Von 1 nach 2 werden auf beiden Seiten 2 Boxen weggenommen, von 2 nach 3 auf beiden Seiten 8 Hölzchen, von 3 nach 4 wird halbiert. Mit x = 3 stimmt jede Anordnung (z. B. 4 · 3 + 8 = 20 = 2 · 3 + 14).",
                "<strong>Aufgabe 2 D (Hälfte nehmen):</strong> 4x + 8 = 2x + 14 | : 2 → 2x + 4 = x + 7 | − x → x + 4 = 7 | − 4 → x = 3.",
                "<strong>c)</strong> 4x + 6 = 2x + 12 | − 2x → 2x + 6 = 12 | − 6 → 2x = 6 | : 2 → <strong>x = 3</strong>. Probe: 18 = 18 ✓",
                "5x + 3 = 2x + 15 | − 2x → 3x + 3 = 15 | − 3 → 3x = 12 | : 3 → <strong>x = 4</strong>. Probe: 23 = 23 ✓"
            ] },
            { id: 8, level: "Anwenden", title: "Verpacken und Auspacken (S. 27, Aufg. 4–5)", task: "a) Welche der sieben Umformungen braucht man, um x = 4 zu 3x + 2 = 14 zu verpacken – und welche zum Auspacken?<br>b) Packe die Gleichung 7,5x + 20 = 5x + 30 wieder aus. Nenne die Umformungen.", steps: [
                "<strong>a) Verpacken:</strong> · 3 (Umformung 5: mit derselben Zahl multiplizieren), dann + 2 (Umformung 1: dieselbe Zahl addieren).<br><strong>Auspacken:</strong> rückwärts mit der Gegenrechnung: − 2 (Umformung 2), dann : 3 (Umformung 6) → x = 4.",
                "<strong>b)</strong> 7,5x + 20 = 5x + 30 &nbsp;| − 5x (Umformung 4)",
                "2,5x + 20 = 30 &nbsp;| − 20 (Umformung 2)",
                "2,5x = 10 &nbsp;| : 2,5 (Umformung 6) → <strong>x = 4</strong>",
                "<strong>Kontrolle mit 4:</strong> 7,5 · 4 + 20 = 50 und 5 · 4 + 30 = 50 ✓ – die verpackte Zahl war 4."
            ] },
            { id: 9, level: "Anwenden", title: "Zahlen auspacken mit Klammern (S. 27, Aufg. 7)", task: "Welche Zahlen wurden verpackt? Bringe in die Form x = …<br>A: 5x − 12 = 3x + 8 &nbsp; C: 5x − 12 = 3(x + 2) &nbsp; D: 5(x − 3) = 2(x + 6) &nbsp; E: 5x − 12 = 7x : 2 &nbsp; F: 9x + 12 = 3(x − 2)", steps: [
                "<strong>A:</strong> | − 3x → 2x − 12 = 8 | + 12 → 2x = 20 | : 2 → <strong>x = 10</strong>",
                "<strong>C:</strong> Klammer auflösen: 5x − 12 = 3x + 6 | − 3x → 2x − 12 = 6 | + 12 → 2x = 18 → <strong>x = 9</strong>",
                "<strong>D:</strong> 5x − 15 = 2x + 12 | − 2x → 3x − 15 = 12 | + 15 → 3x = 27 → <strong>x = 9</strong>",
                "<strong>E:</strong> | · 2 → 10x − 24 = 7x | − 7x → 3x − 24 = 0 | + 24 → 3x = 24 → <strong>x = 8</strong>",
                "<strong>F:</strong> 9x + 12 = 3x − 6 | − 3x → 6x + 12 = −6 | − 12 → 6x = −18 | : 6 → <strong>x = −3</strong> (eine negative Lösung ist möglich!)",
                "<strong>Probe-Beispiel F:</strong> 9 · (−3) + 12 = −15 und 3 · (−3 − 2) = −15 ✓"
            ] },
            { id: 10, level: "Anwenden", title: "Situationen in Terme übertragen (S. 28, Aufg. 8–9)", task: "a) Gib für die Situationen A und D an, wie viele Personen in den Häusern wohnen könnten (je zwei Beispiele).<br>b) Ordne die Termgruppen 1–5 den Situationen A–E zu.", steps: [
                "<strong>a) Situation A</strong> (Haus 2 zwei weniger als Haus 1): x = Haus 1 → Haus 2 = x − 2. Beispiele: 10 und 8 · 5 und 3.",
                "<strong>Situation D</strong> (Haus 3 doppelt so viele wie Haus 1, Haus 1 zwei weniger als Haus 2): x = Haus 1 → Haus 2 = x + 2, Haus 3 = 2x. Beispiele: 4 / 6 / 8 · 10 / 12 / 20.",
                "<strong>b)</strong> Termgruppe 1 (x, 2x) → <strong>B</strong> · Termgruppe 2 (x, x + 2, 2x) → <strong>D</strong> · Termgruppe 3 (x, x − 2) → <strong>A</strong>",
                "Termgruppe 4 (x + 2, x, x + 4) → <strong>E</strong>: Haus 1 zwei mehr als Haus 2, Haus 3 zwei mehr als Haus 1 · Termgruppe 5 (x − 2, ½x, x) → <strong>C</strong>: x steht für Haus 3.",
                "<strong>Vergleich mit Aufgabe 8:</strong> Setzt du deine Beispielzahlen für x ein, kommen dieselben Personenzahlen heraus – nur die Wahl der Variablen kann verschieden sein."
            ] },
            { id: 11, level: "Anwenden", title: "Mittelsenkrechten und Umkreis (S. 30, Aufg. 2 B)", task: "Zeichne ein spitzwinkliges Dreieck ABC. Konstruiere die drei Mittelsenkrechten und den Umkreis. Beschreibe dein Vorgehen. Was ändert sich bei einem stumpfwinkligen Dreieck?", steps: [
                "<strong>1. Mittelsenkrechte von c:</strong> Zirkel in A, Radius größer als die halbe Seite c, Bögen ober- und unterhalb von c. Mit demselben Radius von B aus. Schnittpunkte der Bögen verbinden.",
                "<strong>2.</strong> Genauso die Mittelsenkrechte von a (Bögen um B und C). Der Schnittpunkt der beiden Mittelsenkrechten ist <strong>U</strong>.",
                "<strong>3. Kontrolle:</strong> Die Mittelsenkrechte von b muss auch durch U gehen.",
                "<strong>4. Umkreis:</strong> Zirkel in U, bis zu einer Ecke aufziehen, Kreis zeichnen – er geht durch A, B und C.",
                "<strong>Stumpfwinklig (Aufgabe 4):</strong> U liegt außerhalb des Dreiecks; der Umkreis geht trotzdem durch alle drei Ecken. <strong>Rechtwinklig (Aufgabe 5):</strong> U liegt genau in der Mitte der längsten Seite."
            ] },
            { id: 12, level: "Anwenden", title: "Winkelhalbierende und Inkreis (S. 30, Aufg. 2 A)", task: "Zeichne ein spitzwinkliges Dreieck ABC. Konstruiere die drei Winkelhalbierenden und den Inkreis. Beschreibe dein Vorgehen.", steps: [
                "<strong>1. Winkelhalbierende von α:</strong> Zirkel in A, Bogen, der beide Schenkel (b und c) schneidet. Von beiden Schnittpunkten mit gleichem Radius zwei Bögen ins Innere. Deren Schnittpunkt mit A verbinden.",
                "<strong>2.</strong> Genauso die Winkelhalbierende von β. Der Schnittpunkt ist <strong>I</strong>. Die dritte (von γ) ist die Kontrolle.",
                "<strong>3. Radius bestimmen:</strong> Von I aus mit dem Geodreieck das Lot auf eine Seite fällen (senkrecht!). Die Länge dieses Lots ist der Radius.",
                "<strong>4. Inkreis:</strong> Kreis um I mit diesem Radius – er berührt alle drei Seiten.",
                "<strong>Achtung:</strong> Nie bis zu einer Ecke aufziehen. <strong>Bei stumpf- oder rechtwinkligen Dreiecken</strong> liegt I trotzdem immer innen."
            ] },
            { id: 13, level: "Anwenden", title: "Höhen, Seitenhalbierende & Schwerpunkt (S. 30–31)", task: "a) Zeichne in ein spitzwinkliges Dreieck die drei Höhen und die drei Seitenhalbierenden ein (Aufg. 2 C und D).<br>b) Auf welchem Punkt balanciert ein Karton-Dreieck auf einer Bleistiftspitze (Aufg. 3)?<br>c) Verbinde die drei Seitenmitten. Was stellst du fest (Aufg. 7)?", steps: [
                "<strong>a) Höhe h<sub>a</sub>:</strong> Geodreieck mit der Mittellinie auf a legen, an A schieben, Linie zeichnen, rechten Winkel markieren. Ebenso h<sub>b</sub> und h<sub>c</sub> – sie treffen sich in einem Punkt.",
                "<strong>Seitenhalbierende s<sub>a</sub>:</strong> Mitte von a abmessen und mit A verbinden. Ebenso s<sub>b</sub> und s<sub>c</sub> – sie treffen sich im Schwerpunkt S.",
                "<strong>b)</strong> Im <strong>Schwerpunkt S</strong>, dem Schnittpunkt der Seitenhalbierenden. Jede Seitenhalbierende teilt das Dreieck in zwei flächengleiche Teile – auf jeder Seite ist gleich viel „Gewicht“.",
                "<strong>c)</strong> Es entstehen <strong>vier deckungsgleiche Dreiecke</strong>. Die Seiten des inneren Dreiecks sind parallel zu den Seiten des großen Dreiecks und halb so lang."
            ] },
            { id: 14, level: "Transfer", title: "Eigenschaften zuordnen (S. 31, Aufg. 6)", task: "Ordne die Eigenschaften A–G den Linien und Punkten im Dreieck zu und benenne sie.", steps: [
                "<strong>A</strong> Punkt auf a, gleich weit von B und C → <strong>Mitte der Seite a</strong> (durch sie gehen m<sub>a</sub> und s<sub>a</sub>).",
                "<strong>B</strong> Gerade, jeder Punkt gleich weit von A und B → <strong>Mittelsenkrechte m<sub>c</sub></strong>.",
                "<strong>C</strong> Punkt gleich weit von a, b und c → <strong>Inkreismittelpunkt</strong> (Schnittpunkt der Winkelhalbierenden).",
                "<strong>D</strong> Strecke teilt in zwei rechtwinklige Dreiecke → <strong>Höhe</strong>.",
                "<strong>E</strong> Strecke teilt in zwei flächengleiche Dreiecke → <strong>Seitenhalbierende</strong>.",
                "<strong>F</strong> Punkt gleich weit von A, B und C → <strong>Umkreismittelpunkt</strong> (Schnittpunkt der Mittelsenkrechten).",
                "<strong>G</strong> Gerade, jeder Punkt gleich weit von a und b → <strong>Winkelhalbierende w<sub>γ</sub></strong> (a und b treffen sich in C)."
            ] },
            { id: 15, level: "Transfer", title: "Lösungswege vergleichen & besondere Fälle (S. 27, Aufg. 6–7)", task: "a) Führe die drei Lösungswege für 9x + 12 = 3(x − 2) zu Ende. Kommt überall dieselbe Lösung heraus?<br>b) Löse G: 3x + 9 = 9, H: x² = 1 und I: 2(x + 2) = 2x. Was ist besonders?", steps: [
                "<strong>Weg 1:</strong> 3(3x + 4) = 3(x − 2) | : 3 → 3x + 4 = x − 2 | − x → 2x + 4 = −2 | − 4 → 2x = −6 | : 2 → <strong>x = −3</strong>",
                "<strong>Weg 2:</strong> 9x + 12 = 3x − 6 | − 3x → 6x + 12 = −6 | − 12 → 6x = −18 | : 6 → <strong>x = −3</strong>",
                "<strong>Weg 3:</strong> 9x + 12 = 3x − 6 | + 6 → 9x + 18 = 3x | − 9x → 18 = −6x | : (−6) → <strong>x = −3</strong>. Alle drei Wege führen zur gleichen Lösung – Äquivalenzumformungen verändern die Lösung nicht.",
                "<strong>G:</strong> | − 9 → 3x = 0 → <strong>x = 0</strong>. Auch 0 kann die verpackte Zahl sein.",
                "<strong>H:</strong> x² = 1 hat <strong>zwei Lösungen</strong>: x = 1 und x = −1, denn (−1) · (−1) = 1.",
                "<strong>I:</strong> 2x + 4 = 2x | − 2x → 4 = 0. Das ist falsch → <strong>keine Lösung</strong>. Egal welche Zahl man einsetzt, links ist es immer 4 mehr."
            ] },
            { id: 16, level: "Transfer", title: "Unterschiedliche Lösungsansätze (S. 29, Aufg. 10)", task: "In Haus 2 wohnen 6 Personen weniger als in Haus 1, in Haus 3 doppelt so viele wie in Haus 1.<br>a) Zeige mit den Termgruppen 1–3, wie viele Personen bei insgesamt 30 Personen in jedem Haus wohnen.<br>b) In Haus 2 wohnt niemand. Wie viele sind es in Haus 1 und 3?", steps: [
                "<strong>Termgruppe 1</strong> (x = Haus 1): 4x − 6 = 30 | + 6 → 4x = 36 | : 4 → x = 9 → Haus 1: 9, Haus 2: 3, Haus 3: 18.",
                "<strong>Termgruppe 2</strong> (x = Haus 2): 4x + 18 = 30 | − 18 → 4x = 12 | : 4 → x = 3 → Haus 1: 3 + 6 = 9, Haus 2: 3, Haus 3: 2 · 9 = 18.",
                "<strong>Termgruppe 3</strong> (x = Haus 3): 2x − 6 = 30 | + 6 → 2x = 36 | : 2 → x = 18 → Haus 1: 9, Haus 2: 9 − 6 = 3, Haus 3: 18.",
                "<strong>Ergebnis:</strong> Immer 9 / 3 / 18 Personen – nur x bedeutet jeweils ein anderes Haus. Probe: 9 + 3 + 18 = 30 ✓",
                "<strong>b)</strong> Haus 2 = x − 6 = 0 → x = 6 → Haus 1: 6 Personen, Haus 3: 12 Personen."
            ] },
            { id: 17, level: "Transfer", title: "Zusatz: Trapezfläche auf fünf Wegen (S. 33, Aufg. 13–14)", task: "<em>Zusatz – nicht auf der Checkliste.</em> Ein Trapez hat g₁ = 7,5 cm, g₂ = 6 cm und h = 3,5 cm (Aufgabe 14 A).<br>a) Berechne die Fläche mit Formel 1, 4 und 5.<br>b) Beschreibe die Konstruktion mit α = 60°.", steps: [
                "<strong>Formel 1:</strong> A = (g₁ + g₂) : 2 · h = 13,5 : 2 · 3,5 = 6,75 · 3,5 = <strong>23,625 cm²</strong>",
                "<strong>Formel 4:</strong> A = g₂ · h + (g₁ − g₂) · h : 2 = 6 · 3,5 + 1,5 · 3,5 : 2 = 21 + 2,625 = <strong>23,625 cm²</strong>",
                "<strong>Formel 5:</strong> A = g₁ · h : 2 + g₂ · h : 2 = 13,125 + 10,5 = <strong>23,625 cm²</strong> – alle Wege führen zum gleichen Ergebnis (Aufgabe 13 B).",
                "<strong>b)</strong> AB = 7,5 cm zeichnen · in A den Winkel α = 60° antragen · Parallele zu AB im Abstand 3,5 cm · Schnittpunkt mit dem Schenkel von α = D · von D aus 6 cm auf der Parallelen = C · C mit B verbinden."
            ] },
            { id: 18, level: "Transfer", title: "Dreieck nach Anleitung konstruieren (S. 31, Aufg. 8)", task: "Konstruiere nach der Anleitung: c = 8 cm, h<sub>c</sub> = 6 cm, b = 7,5 cm. Warum gibt es zwei verschiedene Dreiecke?", steps: [
                "<strong>Planfigur:</strong> Erst skizzieren und die gegebenen Stücke c, h<sub>c</sub> und b farbig markieren.",
                "<strong>1.</strong> Strecke AB mit c = 8 cm zeichnen.",
                "<strong>2.</strong> Parallele zu AB im Abstand h<sub>c</sub> = 6 cm zeichnen – auf ihr muss C liegen, weil die Höhe auf c 6 cm lang ist.",
                "<strong>3.</strong> Kreisbogen um A mit dem Radius b = 7,5 cm. Er schneidet die Parallele in <strong>C</strong> und <strong>C'</strong>.",
                "<strong>4.</strong> Strecken CA und CB → erstes Dreieck ABC; Strecken C'A und C'B → zweites Dreieck ABC'.",
                "<strong>Begründung:</strong> Der Kreis um A trifft die Parallele an zwei Stellen. Beide Punkte erfüllen alle Angaben – das Konstruktionsproblem hat zwei Lösungen."
            ] },
            { id: 19, level: "Klausur", title: "Klausur-Mix: Terme vereinfachen und Gleichungen lösen", task: "a) Vereinfache: 3(2a − 4b) − (a − 5b) + 2ab · 3<br>b) Löse und mache die Probe: 3(2x + 1) − (x − 4) = 2(x + 8)<br>c) Löse: 2,5x − (x − 3) = ½(2x + 10)", steps: [
                "<strong>a)</strong> Ausmultiplizieren: 6a − 12b. Minusklammer: − a + 5b. Produkt: 2ab · 3 = 6ab.<br>Zusammenfassen: 6a − a = 5a, −12b + 5b = −7b → <strong>5a − 7b + 6ab</strong>",
                "<strong>b)</strong> Klammern auflösen: 6x + 3 − x + 4 = 2x + 16 → zusammenfassen: 5x + 7 = 2x + 16",
                "| − 2x → 3x + 7 = 16 | − 7 → 3x = 9 | : 3 → <strong>x = 3</strong>. Probe: links 3 · 7 − (−1) = 22, rechts 2 · 11 = 22 ✓",
                "<strong>c)</strong> Klammern auflösen: 2,5x − x + 3 = x + 5 → 1,5x + 3 = x + 5",
                "| − x → 0,5x + 3 = 5 | − 3 → 0,5x = 2 | : 0,5 → <strong>x = 4</strong>. Probe: 10 − 1 = 9 und ½ · 18 = 9 ✓"
            ] },
            { id: 20, level: "Klausur", title: "Klausur-Anwendungsaufgabe: Personen in drei Häusern", task: "In Haus 2 wohnen halb so viele Personen wie in Haus 3. In Haus 1 wohnen zwei Personen weniger als in Haus 3. Insgesamt wohnen 48 Personen in den drei Häusern.<br>Lege eine Variable fest, stelle Terme und eine Gleichung auf, löse sie und schreibe einen Antwortsatz.", steps: [
                "<strong>1. Variable festlegen:</strong> x = Anzahl Personen in Haus 3 (mit ihm werden die anderen verglichen).",
                "<strong>2. Terme:</strong> Haus 1 = x − 2 · Haus 2 = ½x · Haus 3 = x (Termgruppe 5, Situation C).",
                "<strong>3. Gleichung:</strong> (x − 2) + ½x + x = 48 → zusammenfassen: 2,5x − 2 = 48",
                "<strong>4. Lösen:</strong> | + 2 → 2,5x = 50 | : 2,5 → x = 20",
                "<strong>5. Probe:</strong> Haus 1: 18, Haus 2: 10, Haus 3: 20 → 18 + 10 + 20 = 48 ✓ · 10 ist die Hälfte von 20 ✓ · 18 ist 2 weniger als 20 ✓",
                "<strong>Antwort:</strong> In Haus 1 wohnen 18, in Haus 2 wohnen 10 und in Haus 3 wohnen 20 Personen.<br><em>Ohne Bruch:</em> Mit x = Haus 2 wird Haus 3 = 2x und Haus 1 = 2x − 2 → 5x − 2 = 48 → x = 10 – dieselbe Verteilung."
            ] }
        ];

        // ==========================================
        // MATCH-PUZZLE
        // ==========================================
        const mathePuzzle = [
            { term: "Wertetabelle", exp: "Zusammengehörende x- und y-Werte, nebeneinander notiert" },
            { term: "Waagrechter Graph", exp: "Der Wert bleibt immer gleich (wie Tabelle H)" },
            { term: "Treppengraph", exp: "Der Wert springt plötzlich (wie Tabelle A)" },
            { term: "Variable", exp: "Buchstabe für eine veränderliche Größe, z. B. x" },
            { term: "Distributivgesetz", exp: "3(x + 2) = 3x + 6 – jedes Glied malnehmen" },
            { term: "Minusklammer", exp: "Klammer weg und alle Vorzeichen darin umdrehen" },
            { term: "Äquivalenzumformung", exp: "Umformung auf beiden Seiten, die die Lösung nicht ändert" },
            { term: "Probe", exp: "Lösung in die Ausgangsgleichung einsetzen und vergleichen" },
            { term: "Mittelsenkrechte", exp: "Jeder Punkt ist gleich weit von zwei Ecken entfernt" },
            { term: "Winkelhalbierende", exp: "Jeder Punkt ist gleich weit von zwei Seiten entfernt" },
            { term: "Umkreismittelpunkt", exp: "Schnittpunkt der Mittelsenkrechten" },
            { term: "Inkreismittelpunkt", exp: "Schnittpunkt der Winkelhalbierenden" },
            { term: "Höhe", exp: "Von einer Ecke senkrecht auf die Gegenseite" },
            { term: "Schwerpunkt", exp: "Schnittpunkt der Seitenhalbierenden – hier balanciert das Dreieck" }
        ];

        // ==========================================
        // SPICKZETTEL & METHODEN
        // ==========================================
        const matheCheatsheet = [
            { q: "1. Methodik: Graphen lesen", a: "<strong>1. Achsen:</strong> Was ist nach rechts, was nach oben aufgetragen? Einheiten? Wertebereich?<br><strong>2. Verlauf:</strong> steigt = nimmt zu · waagrecht = bleibt gleich · fällt = nimmt ab · steil = schnelle Änderung · Sprung = plötzliche Änderung.<br><strong>3. Ablesen:</strong> x-Wert suchen → senkrecht zum Graphen → waagrecht zur y-Achse. Kästchen-Einteilung beachten!<br>⚠️ Weg-Graph waagrecht = steht still · Geschwindigkeits-Graph waagrecht = fährt gleich schnell.<br>⚠️ Senkrechte Stücke sind bei Bewegungen unmöglich." },
            { q: "2. Wertetabelle → Graph (S. 19)", a: "Nur auf die <strong>Veränderung von y</strong> achten:<br>immer gleich → waagrecht (H) · gleichmäßig ab 0 → Gerade durch den Nullpunkt (I) · gleichmäßig ab einem Startwert → Gerade weiter oben (C) · erst 0, dann gleichmäßig → Gerade beginnt später (G) · Sprünge → Treppe (A) · steigt, dann gleich → Knick in die Waagrechte (E) · erst stark, dann schwach → erst steil, dann flacher (B) · x · y gleich → fallende Kurve (D) · steigt und pausiert abwechselnd → schräge Treppe (F)." },
            { q: "3. Produkte zusammenfassen", a: "Zahlen nach vorne und ausrechnen → Variablen alphabetisch → gleiche Variablen als Potenz → alle Malzeichen verschwinden.<br><span class=\"font-mono-letter\">a · b · 3 · b · 2,5 = 7,5ab²</span> · <span class=\"font-mono-letter\">4 · x · (−2) · y · x = −8x²y</span>" },
            { q: "4. Summen zusammenfassen", a: "Nur <strong>gleichartige Glieder</strong> (gleiche Variablen, gleiche Hochzahlen) addieren oder subtrahieren. Das Vorzeichen gehört zum Glied dahinter. Erst alphabetisch ordnen: 4ba = 4ab.<br><span class=\"font-mono-letter\">7,5ab² + 4ba − 3ab² − 2ab = 2ab + 4,5ab²</span><br>ab ≠ ab² · x ≠ x² · 4x + 3y bleibt 4x + 3y." },
            { q: "5. Klammerregeln", a: "<strong>Plusklammer:</strong> a + (b − c) = a + b − c<br><strong>Minusklammer:</strong> a − (b − c) = a − b + c (alle Vorzeichen umdrehen)<br><strong>Malklammer (Pfeile):</strong> a(b + c) = ab + ac · 3(x + 2) = 3x + 6 · −2(x − 4) = −2x + 8<br><strong>Reihenfolge:</strong> Klammern auflösen → sortieren → zusammenfassen." },
            { q: "6. Methodik: Gleichungen lösen", a: "<strong>1.</strong> Beide Seiten vereinfachen (Klammern, zusammenfassen) · <strong>2.</strong> x-Glieder auf eine Seite (| − 3x) · <strong>3.</strong> Zahlen auf die andere Seite (| + 12) · <strong>4.</strong> Durch die Zahl vor x teilen (| : 2) · <strong>5.</strong> Probe in der Ausgangsgleichung.<br><strong>Die 7 Umformungen:</strong> dieselbe Zahl addieren (1) / subtrahieren (2) · denselben Term addieren (3) / subtrahieren (4) · mit derselben Zahl multiplizieren (5) / durch dieselbe Zahl dividieren (6) · eine Seite vereinfachen (7).<br>Äquivalenzumformungen verändern die Lösung nicht. Nie mit 0 multiplizieren oder durch 0 teilen." },
            { q: "7. Besondere Lösungen", a: "3x + 9 = 9 → <strong>x = 0</strong> (0 ist eine Lösung!) · 9x + 12 = 3(x − 2) → <strong>x = −3</strong> (negative Lösung) · x² = 1 → <strong>x = 1 oder x = −1</strong> · 2(x + 2) = 2x → 4 = 0 → <strong>keine Lösung</strong>.<br>Auspacken = rückwärts mit der Gegenrechnung: 3x + 2 = 14 → − 2 → : 3 → x = 4." },
            { q: "8. Methodik: Terme & Gleichungen aufstellen", a: "<strong>1.</strong> Variable festlegen („x = Personen in Haus 2“) · <strong>2.</strong> Terme für alle Größen · <strong>3.</strong> Gleichung (z. B. Summe = 30) · <strong>4.</strong> Vereinfachen & lösen · <strong>5.</strong> Probe am Text & Antwortsatz.<br><strong>Übersetzen:</strong> mehr als → + · weniger als → − (x − 2, nicht 2 − x) · doppelt so viele → 2x · halb so viele → ½x · insgesamt → Summe.<br>Tipp: x für die Größe wählen, mit der verglichen wird. Ergebnis auf Sinn prüfen (Personen: ganze Zahlen, nicht negativ)." },
            { q: "9. Linien im Dreieck – Übersicht", a: "<strong>Mittelsenkrechte</strong> (m): durch die Seitenmitte, senkrecht · gleich weit von 2 Ecken · Schnittpunkt = <strong>Umkreismittelpunkt U</strong> (gleich weit von A, B, C).<br><strong>Winkelhalbierende</strong> (w): halbiert den Winkel · gleich weit von 2 Seiten · Schnittpunkt = <strong>Inkreismittelpunkt I</strong> (gleich weit von a, b, c).<br><strong>Höhe</strong> (h): von der Ecke senkrecht auf die Gegenseite · 2 rechtwinklige Dreiecke · Höhenschnittpunkt.<br><strong>Seitenhalbierende</strong> (s): Ecke ↔ Mitte der Gegenseite · 2 flächengleiche Dreiecke · Schnittpunkt = <strong>Schwerpunkt S</strong>.<br>Bezeichnung: Seite a liegt gegenüber von A, α bei A." },
            { q: "10. Methodik: Umkreis & Inkreis zeichnen", a: "<strong>Umkreis:</strong> 2 Mittelsenkrechten (Zirkel: gleiche Bögen um beide Ecken, Schnittpunkte verbinden) → Schnittpunkt U → Zirkel in U bis zu <strong>einer Ecke</strong> → Kreis durch A, B, C.<br><strong>Inkreis:</strong> 2 Winkelhalbierende (Bogen um den Scheitel, zwei gleiche Bögen von den Schnittpunkten, verbinden) → Schnittpunkt I → <strong>Lot</strong> von I auf eine Seite = Radius → Kreis berührt alle Seiten.<br>Die dritte Linie ist immer die Kontrolle." },
            { q: "11. Wo liegen die Punkte?", a: "<strong>spitzwinklig:</strong> U, H (Höhenschnittpunkt), I, S alle innen.<br><strong>rechtwinklig:</strong> U in der Mitte der längsten Seite · H in der Ecke mit dem rechten Winkel.<br><strong>stumpfwinklig:</strong> U und H außerhalb (Seiten für die Höhen verlängern!).<br><strong>Immer innen:</strong> Inkreismittelpunkt I und Schwerpunkt S.<br>Seitenmittendreieck: 4 deckungsgleiche Dreiecke, Seiten parallel und halb so lang." },
            { q: "12. Zusatz: Trapez (nicht auf der Checkliste)", a: "Viereck mit zwei parallelen Seiten g₁ und g₂, Höhe h = senkrechter Abstand.<br><strong>A = (g₁ + g₂) · h : 2</strong> = Mittellinie · h. Gleichwertig: g₂ · h + (g₁ − g₂) · h : 2 · g₁ · h : 2 + g₂ · h : 2.<br>Beispiel: g₁ = 7,5 cm, g₂ = 6 cm, h = 3,5 cm → A = 23,625 cm²." },
            { q: "13. Hinweise zur Klassenarbeit", a: "Negative Zahlen und Brüche können vorkommen – ein <strong>Taschenrechner ist erlaubt</strong>.<br>Minus mal minus = plus · minus mal plus = minus · ½x = 0,5x = x : 2 · durch 0,5 teilen = mal 2.<br>Themen: Graphen (LU 7) · Terme vereinfachen, Gleichungen lösen, Terme aufstellen (LU 10) · Linien im Dreieck mit Inkreis und Umkreis (LU 11)." }
        ];
