
        // ==========================================
        // CHEMIE DATA (7 ROADMAP LEVELS)
        // Grundlage: Buchseiten S. 52–65 (1.4 Stoffe im Teilchenmodell,
        // 2.1 Reinstoffe und Gemische, Übersicht Gemischtypen,
        // 2.2 Lösungen genauer betrachtet) + Themenliste der Klassenarbeit.
        // Level 1–3 (Sicherheit, Piktogramme, Stoffeigenschaften/Dichte)
        // stehen nicht auf den fotografierten Seiten → Standard-Schulwissen.
        // ==========================================
        const CHEMIE_EXAM = 'Klassenarbeit am 24.11.';

        const chemieLevels = [
            {
                id: 1,
                title: "Sicher experimentieren",
                subtitle: "Sicherheitsregeln im Chemieraum & das Versuchsprotokoll",
                icon: "fa-shield-halved",
                color: "from-emerald-500 to-teal-600",
                badge: "Level 1",
                summary: "Welche Regeln schützen dich im Chemieraum – und wie schreibst du ein sauberes Versuchsprotokoll, das jeder versteht?",
                simple: "Im Chemieraum arbeitest du mit Stoffen, die heiß, ätzend oder entzündbar sein können. Feste Sicherheitsregeln schützen dich und deine Mitschüler. Damit jeder deinen Versuch verstehen und wiederholen kann, schreibst du ihn in einem <strong>Versuchsprotokoll</strong> auf – immer in derselben Reihenfolge.",
                merke: "Schutzbrille auf, nur nach Anweisung experimentieren, im Chemieraum nie essen, trinken oder probieren – und jeden Versuch protokollieren. Im Protokoll gilt: Beobachtung (was man sieht) und Auswertung (die Erklärung) werden streng getrennt!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-emerald-900 block text-sm">1. Die wichtigsten Sicherheitsregeln</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Schutzbrille tragen</strong>, sobald experimentiert wird. In den Praktika deines Buches zeigt das Brillen-Symbol, dass sie Pflicht ist.</li>
                            <li><strong>Lange Haare zusammenbinden</strong>, Schals und Jacken ablegen – sie könnten in die Brennerflamme oder in Chemikalien geraten.</li>
                            <li><strong>Nur nach Anweisung</strong> der Lehrkraft experimentieren und die Versuchsanleitung vorher vollständig lesen.</li>
                            <li><strong>Nicht essen, trinken oder probieren.</strong> Geschmacksproben gibt es nie im Chemieraum – deshalb wird das Brausepulver-Praktikum im Buch in der <em>Schulküche</em> durchgeführt.</li>
                            <li><strong>Chemikalien nicht mit den Händen berühren.</strong> Geruchsproben nur durch vorsichtiges <strong>Zufächeln</strong>.</li>
                            <li><strong>Beim Erhitzen</strong> die Öffnung des Reagenzglases nie auf Personen richten. Heiße Gegenstände nur mit der <strong>Tiegelzange</strong> anfassen.</li>
                            <li><strong>Gasbrenner</strong> nur nach Anweisung benutzen und nie unbeaufsichtigt lassen.</li>
                            <li><strong>Entsorgung nach Anweisung:</strong> Chemikalienreste nicht einfach in den Ausguss. Die Symbole im Buch zeigen, wohin die Reste gehören (z. B. Sammelbehälter „S“).</li>
                            <li><strong>Unfälle, Verletzungen und Glasbruch sofort melden.</strong> Wisse, wo Augendusche, Feuerlöscher und Fluchtwege sind.</li>
                            <li>Nach dem Versuch: <strong>Arbeitsplatz aufräumen</strong> und Hände waschen.</li>
                        </ul>
                        <strong class="text-emerald-900 block text-sm mt-3">2. Aufbau eines Versuchsprotokolls</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li><strong>Kopf:</strong> Name, Datum, Überschrift (Thema des Versuchs).</li>
                            <li><strong>Fragestellung:</strong> Was will ich herausfinden? Dazu eine <strong>Vermutung (Hypothese)</strong>.</li>
                            <li><strong>Materialien:</strong> alle Geräte und Chemikalien – bei Chemikalien mit Gefahrstoff-Kennzeichnung, so wie im Buch: „Citronensäure (GHS07)“.</li>
                            <li><strong>Durchführung:</strong> Schritt für Schritt, am besten mit beschrifteter <strong>Versuchsskizze</strong>.</li>
                            <li><strong>Beobachtung:</strong> nur, was man sieht, hört, riecht oder misst – noch <em>ohne</em> Erklärung.</li>
                            <li><strong>Auswertung (Deutung):</strong> Erklärung der Beobachtung (z. B. mit dem Teilchenmodell) und Antwort auf die Fragestellung.</li>
                            <li><strong>Entsorgung:</strong> Wohin kommen die Reste?</li>
                        </ol>
                        <strong class="text-emerald-900 block text-sm mt-3">3. Faire Versuche planen (aus deinen Praktika)</strong>
                        <p>Im Buch heißt es beim Brausepulver: <em>„Verändert bei jeder neuen Probe immer nur eine Zutat.“</em> Und bei der Diffusion: <em>„Nutzt innerhalb einer Versuchsreihe nur Schokolinsen gleicher Farben.“</em> Der Grund: Wenn du nur <strong>eine Bedingung</strong> veränderst, weißt du genau, wodurch das Ergebnis entsteht.</p>
                    </div>
                `,
                example: "<strong>Protokoll-Beispiel (Praktikum „Diffusion von Farbstoffen“, Buch S. 54):</strong><br><strong>Fragestellung:</strong> Beeinflusst die Wassertemperatur die Diffusion des Farbstoffs einer Schokolinse? <strong>Vermutung:</strong> In warmem Wasser verteilt sich der Farbstoff schneller.<br><strong>Materialien:</strong> 2 weiße Teller, Schokolinsen gleicher Farbe, kaltes und warmes Wasser.<br><strong>Durchführung:</strong> Auf jeden Teller gleich viel Wasser geben (kalt / warm), in die Mitte je eine Schokolinse legen, 2 Minuten warten.<br><strong>Beobachtung:</strong> Im warmen Wasser breitet sich die Farbe schneller und weiter aus.<br><strong>Auswertung:</strong> Bei höherer Temperatur bewegen sich die Teilchen schneller, deshalb verteilt sich der Farbstoff schneller – die Vermutung stimmt.",
                videos: [
                    { id: "REJI3SY4ixc", title: "Sicherheitsregeln im Chemieraum: Das musst du beachten!", channel: "Duden Learnattack" },
                    { id: "4F4-azau-tQ", title: "Versuchsprotokoll schreiben", channel: "Mathias Pieper" }
                ],
                questions: [
                    { type: "Was passiert, wenn …?", q: "Ein Mitschüler will im Chemieraum testen, wie das Brausepulver schmeckt. Was ist richtig?", options: ["Geschmacksproben sind im Chemieraum verboten – das Buch führt diesen Versuch deshalb in der Schulküche durch", "Er darf probieren, wenn er sich vorher die Hände wäscht", "Er darf probieren, wenn er dabei eine Schutzbrille trägt", "Kleine Mengen darf man im Chemieraum immer probieren"], correct: 0, exp: "Im Chemieraum können Geräte und Tische mit Chemikalien verunreinigt sein. Deshalb gilt: nie essen, trinken oder probieren. Für Geschmacksproben geht man – wie beim Brausepulver im Buch – in die Schulküche." },
                    { type: "Fehler finden", q: "Im Protokoll steht unter „Beobachtung“: „Die Teilchen bewegen sich im warmen Wasser schneller.“ Was ist daran falsch?", options: ["Das ist eine Erklärung (Auswertung) – Teilchen kann man nicht sehen", "Nichts, das ist eine korrekte Beobachtung", "Der Satz gehört zu den Materialien", "Teilchen bewegen sich im warmen Wasser langsamer"], correct: 0, exp: "Teilchen sind unsichtbar – man kann sie nicht beobachten. In die Beobachtung gehört nur das Sichtbare, z. B. „Die Farbe breitet sich im warmen Wasser schneller aus.“ Die Erklärung mit Teilchen gehört in die Auswertung." },
                    { type: "Verstehen", q: "In welcher Reihenfolge ist ein Versuchsprotokoll aufgebaut?", options: ["Fragestellung → Materialien → Durchführung → Beobachtung → Auswertung", "Beobachtung → Fragestellung → Auswertung → Materialien → Durchführung", "Materialien → Auswertung → Durchführung → Fragestellung → Beobachtung", "Durchführung → Beobachtung → Fragestellung → Materialien → Auswertung"], correct: 0, exp: "Erst klärst du, was du herausfinden willst (Fragestellung + Vermutung), dann was du brauchst und wie du vorgehst. Danach notierst du, was du siehst, und erst zum Schluss erklärst du es." },
                    { type: "Anwenden", q: "Wie führst du eine Geruchsprobe richtig durch?", options: ["Mit der Hand vorsichtig Luft zur Nase fächeln", "Die Nase direkt über das Gefäß halten und tief einatmen", "Einen Tropfen auf die Hand geben und daran riechen", "Gar nicht – Geruch ist keine Stoffeigenschaft"], correct: 0, exp: "Durch Zufächeln gelangt nur wenig Stoff in die Nase. Direktes Einatmen kann gefährlich sein. Geruch ist übrigens sehr wohl eine Stoffeigenschaft (Buch S. 53)." },
                    { type: "Begründen", q: "Warum müssen lange Haare beim Experimentieren zusammengebunden werden?", options: ["Sie könnten in die Brennerflamme oder in Chemikalien geraten", "Weil sie sonst das Ergebnis des Versuchs verfälschen", "Damit man die Schutzbrille besser aufsetzen kann", "Das ist nur eine Frage der Ordnung"], correct: 0, exp: "Haare fangen sehr schnell Feuer und können Chemikalien berühren. Zusammengebunden sind sie aus dem Gefahrenbereich." },
                    { type: "Anwenden", q: "Du willst herausfinden, welche Zutat im Brausepulver den sauren Geschmack bewirkt. Wie gehst du laut Buch vor?", options: ["Bei jeder neuen Probe immer nur eine Zutat verändern", "Alle Zutaten auf einmal austauschen", "Nur eine einzige Probe mit allen Zutaten testen", "Die Zutaten erhitzen und den Geruch vergleichen"], correct: 0, exp: "Wenn du immer nur eine Zutat veränderst (z. B. Zucker weglässt), kannst du jede Geschmacksänderung genau dieser einen Zutat zuordnen. So steht es im Forschungsauftrag zum Brausepulver." },
                    { type: "Begründen", q: "Warum soll man bei der Diffusion von Schokolinsen in einer Versuchsreihe nur Linsen gleicher Farbe benutzen?", options: ["Damit nur die Wassertemperatur verändert wird und das Ergebnis eindeutig ist", "Weil verschiedene Farben giftig sind", "Damit der Teller sauber bleibt", "Weil sich andere Farben gar nicht lösen"], correct: 0, exp: "Unterschiedliche Farbstoffe könnten unterschiedlich schnell diffundieren. Würdest du gleichzeitig Farbe und Temperatur ändern, wüsstest du nicht, was den Unterschied verursacht." },
                    { type: "Was passiert, wenn …?", q: "Beim Aufräumen zerbricht ein Becherglas. Was tust du?", options: ["Sofort der Lehrkraft melden und die Scherben nicht mit bloßen Händen aufsammeln", "Die Scherben schnell in den normalen Mülleimer werfen", "Weiterarbeiten und es später erzählen", "Die Scherben mit Wasser in den Ausguss spülen"], correct: 0, exp: "Unfälle und Glasbruch werden immer sofort gemeldet. Scherben können scharf und mit Chemikalien verunreinigt sein – die Lehrkraft entscheidet über die Entsorgung." },
                    { type: "Anwenden", q: "Du erhitzt etwas im Reagenzglas. Wohin zeigt die Öffnung?", options: ["Von dir und allen anderen weg", "Zu dir, damit du besser hineinsehen kannst", "Zur Lehrkraft", "Senkrecht nach oben direkt vor dein Gesicht"], correct: 0, exp: "Beim Erhitzen kann der Inhalt plötzlich herausspritzen. Deshalb zeigt die Öffnung immer von Personen weg." },
                    { type: "Verstehen", q: "Was gehört in die Materialliste eines Protokolls?", options: ["Alle Geräte und Chemikalien – Chemikalien mit Gefahrstoff-Kennzeichnung, z. B. „Citronensäure (GHS07)“", "Nur die Chemikalien, die Geräte sind ja klar", "Die Beobachtungen", "Die Namen aller Mitschüler"], correct: 0, exp: "Wer den Versuch wiederholen will, muss alles kennen, was gebraucht wird. Dein Buch nennt bei jeder Chemikalie die GHS-Kennzeichnung – das solltest du übernehmen." }
                ]
            },
            {
                id: 2,
                title: "Gefahrstoffe erkennen",
                subtitle: "GHS-Piktogramme, Signalwörter, H- und P-Sätze",
                icon: "fa-triangle-exclamation",
                color: "from-rose-500 to-orange-500",
                badge: "Level 2",
                summary: "Rote Rauten mit schwarzen Symbolen warnen vor Gefahren. Lerne die 9 GHS-Piktogramme und was H- und P-Sätze bedeuten.",
                simple: "Gefährliche Stoffe erkennst du an einer <strong>rot umrandeten Raute mit schwarzem Symbol</strong> – den GHS-Piktogrammen. Dazu kommen kurze Texte: <strong>H-Sätze</strong> sagen, <em>welche</em> Gefahr droht. <strong>P-Sätze</strong> sagen, <em>wie</em> du dich schützt.",
                merke: "H wie „Hazard“ = Gefahr → Gefahrenhinweis. P wie „Precaution“ = Vorsicht → Sicherheitshinweis. Das Signalwort „Gefahr“ steht für schwere Gefahren, „Achtung“ für weniger schwere.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-rose-900 block text-sm">1. Die 9 GHS-Piktogramme</strong>
                        <div data-ghs-grid></div>
                        <strong class="text-rose-900 block text-sm mt-3">2. Signalwörter</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>„Gefahr“</strong> – für schwerwiegende Gefahren.</li>
                            <li><strong>„Achtung“</strong> – für weniger schwerwiegende Gefahren.</li>
                        </ul>
                        <strong class="text-rose-900 block text-sm mt-3">3. H-Sätze (Gefahrenhinweise)</strong>
                        <p>Ein H-Satz besteht aus „H“ und drei Ziffern. Die erste Ziffer verrät die Art der Gefahr: <strong>H2..</strong> = physikalische Gefahren (z. B. Brand), <strong>H3..</strong> = Gesundheitsgefahren, <strong>H4..</strong> = Umweltgefahren.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>H225:</strong> Flüssigkeit und Dampf leicht entzündbar.</li>
                            <li><strong>H319:</strong> Verursacht schwere Augenreizung.</li>
                            <li><strong>H314:</strong> Verursacht schwere Verätzungen der Haut und schwere Augenschäden.</li>
                            <li><strong>H400:</strong> Sehr giftig für Wasserorganismen.</li>
                        </ul>
                        <strong class="text-rose-900 block text-sm mt-3">4. P-Sätze (Sicherheitshinweise)</strong>
                        <p><strong>P1..</strong> = allgemein, <strong>P2..</strong> = Vorsorge, <strong>P3..</strong> = Verhalten im Notfall, <strong>P4..</strong> = Aufbewahrung, <strong>P5..</strong> = Entsorgung.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>P210:</strong> Von Hitze, heißen Oberflächen, Funken, offenen Flammen und anderen Zündquellen fernhalten. Nicht rauchen.</li>
                            <li><strong>P280:</strong> Schutzhandschuhe / Schutzkleidung / Augenschutz tragen.</li>
                            <li><strong>P305+P351+P338:</strong> Bei Kontakt mit den Augen: einige Minuten lang behutsam mit Wasser spülen. Kontaktlinsen nach Möglichkeit entfernen. Weiter spülen.</li>
                        </ul>
                        <strong class="text-rose-900 block text-sm mt-3">5. Piktogramme in deinen Praktika (Buch S. 57–65)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Citronensäure</strong> (GHS07), <strong>Weinsäure</strong> (GHS05) – Brausepulver</li>
                            <li><strong>Azorubin</strong> (GHS07) – Emulsionstyp; <strong>Chromalaun</strong> (GHS07) – Kristalle züchten</li>
                            <li><strong>Zinkchlorid</strong> (GHS05, GHS07, GHS09) – „Vergolden“ einer Münze</li>
                            <li><strong>Ethanol, Aceton, Isopropanol</strong> (GHS02, GHS07), <strong>Waschbenzin</strong> (GHS02, GHS07, GHS08, GHS09) – „Der Fleck muss weg“</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Etikett einer Ethanol-Flasche (Lösemittel im Praktikum „Der Fleck muss weg“):</strong><br>Piktogramme: <strong>GHS02</strong> (Flamme) und <strong>GHS07</strong> (Ausrufezeichen) · Signalwort: <strong>Gefahr</strong><br>H225: Flüssigkeit und Dampf leicht entzündbar. · H319: Verursacht schwere Augenreizung.<br>P210: Von Hitze, Funken, offenen Flammen fernhalten. · P305+P351+P338: Bei Kontakt mit den Augen behutsam mit Wasser spülen.<br><strong>Was heißt das für dich?</strong> Ethanol nie neben den brennenden Gasbrenner stellen und immer die Schutzbrille tragen.",
                videos: [
                    { id: "tifJa503yO4", title: "Gefahrenanweisungen im Labor", channel: "Chemie – simpleclub" }
                ],
                questions: [
                    { type: "Anwenden", q: "Waschbenzin trägt die Piktogramme GHS02, GHS07, GHS08 und GHS09. Was bedeutet das?", options: ["Es ist entzündbar, gesundheitsschädlich, kann schwere Gesundheitsschäden verursachen und ist umweltgefährlich", "Es ist explosiv und steht unter Druck", "Es ist ätzend und giftig", "Es ist harmlos, weil es zum Reinigen benutzt wird"], correct: 0, exp: "GHS02 = Flamme (entzündbar), GHS07 = Ausrufezeichen (gesundheitsschädlich/reizend), GHS08 = Gesundheitsgefahr (schwere Schäden), GHS09 = Umwelt (gewässergefährdend)." },
                    { type: "Verstehen", q: "„P280: Schutzhandschuhe/Schutzkleidung/Augenschutz tragen.“ Was für ein Satz ist das?", options: ["Ein Sicherheitshinweis (P-Satz) – er sagt, wie man sich schützt", "Ein Gefahrenhinweis (H-Satz) – er beschreibt die Gefahr", "Ein Signalwort", "Ein Entsorgungssymbol"], correct: 0, exp: "P-Sätze (Precaution = Vorsicht) geben Schutzmaßnahmen an. H-Sätze (Hazard = Gefahr) beschreiben, welche Gefahr vom Stoff ausgeht." },
                    { type: "Verstehen", q: "Welches Signalwort steht für die schwerere Gefahr?", options: ["Gefahr", "Achtung", "Vorsicht", "Hinweis"], correct: 0, exp: "Es gibt genau zwei Signalwörter: „Gefahr“ für schwerwiegende und „Achtung“ für weniger schwerwiegende Gefahren." },
                    { type: "Was passiert, wenn …?", q: "Zinkchlorid (GHS05, GHS07, GHS09) ist nach dem Münz-Versuch übrig. Was tust du mit den Resten?", options: ["In den Sammelbehälter geben – der Stoff ist gewässergefährdend (GHS09)", "In den Ausguss schütten und mit viel Wasser nachspülen", "In den Restmüll werfen", "Auf dem Schulhof ausschütten"], correct: 0, exp: "GHS09 bedeutet umweltgefährlich, vor allem für Gewässer. Solche Reste dürfen nie in den Ausguss. Beim Münz-Praktikum zeigt das Buch deshalb das Symbol für den Sammelbehälter (S)." },
                    { type: "Was passiert, wenn …?", q: "Jemand stellt eine offene Ethanol-Flasche direkt neben den brennenden Gasbrenner. Was ist das Problem?", options: ["Brandgefahr: Ethanol ist entzündbar (GHS02, H225) – P210 verlangt Abstand zu Flammen", "Kein Problem, Ethanol ist nur reizend", "Das Ethanol wird ätzend", "Die Flasche könnte explodieren, weil Ethanol unter Druck steht"], correct: 0, exp: "Die Flamme auf dem Piktogramm GHS02 warnt vor entzündbaren Stoffen. Ethanol-Dämpfe können sich an der Brennerflamme entzünden." },
                    { type: "Verstehen", q: "Was bedeutet das Piktogramm GHS05 (Ätzwirkung)?", options: ["Der Stoff kann Haut und Augen schwer schädigen und Metalle angreifen", "Der Stoff ist entzündbar", "Der Stoff ist explosiv", "Der Stoff ist ein Gas unter Druck"], correct: 0, exp: "Das Symbol zeigt Flüssigkeit, die auf eine Hand und ein Metallstück tropft und sie angreift – ätzende Stoffe zerstören Haut und Material." },
                    { type: "Verstehen", q: "Ein H-Satz beginnt mit H3… (z. B. H319). Um welche Art von Gefahr geht es?", options: ["Gesundheitsgefahr", "Physikalische Gefahr wie Brand oder Explosion", "Umweltgefahr", "Entsorgungshinweis"], correct: 0, exp: "H2.. = physikalische Gefahren, H3.. = Gesundheitsgefahren, H4.. = Umweltgefahren. H319 heißt: Verursacht schwere Augenreizung." },
                    { type: "Fehler finden", q: "Lena sagt: „Citronensäure hat nur GHS07, also brauche ich keine Schutzbrille.“ Was stimmt?", options: ["Falsch – GHS07 warnt vor Reizungen, Citronensäure kann schwere Augenreizung verursachen (H319)", "Richtig – bei GHS07 ist keine Schutzbrille nötig", "Richtig – Citronensäure ist ein Lebensmittel", "Falsch – Citronensäure ist explosiv"], correct: 0, exp: "Auch „nur“ reizende Stoffe können die Augen verletzen. Die Schutzbrille gehört bei jedem Versuch dazu – so zeigt es auch das Brillen-Symbol beim Brausepulver-Praktikum." },
                    { type: "Verstehen", q: "Wovor warnt das Piktogramm GHS06 mit dem Totenkopf?", options: ["Vor akut giftigen Stoffen", "Vor entzündbaren Stoffen", "Vor umweltgefährlichen Stoffen", "Vor Gasen unter Druck"], correct: 0, exp: "Der Totenkopf mit gekreuzten Knochen steht für akute Giftigkeit – schon kleine Mengen können lebensgefährlich sein." },
                    { type: "Transfer", q: "Eine Sauerstoff-Gasflasche trägt GHS03 und GHS04. Was bedeuten die beiden Piktogramme?", options: ["GHS03: brandfördernd (oxidierend), GHS04: Gas unter Druck", "GHS03: explosiv, GHS04: giftig", "GHS03: ätzend, GHS04: umweltgefährlich", "GHS03: entzündbar, GHS04: reizend"], correct: 0, exp: "GHS03 (Flamme über einem Kreis) kennzeichnet Stoffe, die einen Brand verstärken. GHS04 (Gasflasche) steht für Gase unter Druck." }
                ]
            },
            {
                id: 3,
                title: "Stoffeigenschaften & Dichte",
                subtitle: "Stoffe an ihren Eigenschaften erkennen & die Dichte berechnen",
                icon: "fa-scale-balanced",
                color: "from-sky-500 to-indigo-500",
                badge: "Level 3",
                summary: "Jeder Stoff hat einen „Steckbrief“ aus Eigenschaften. Lerne die wichtigsten kennen und berechne die Dichte mit ρ = m : V.",
                simple: "Jeder Stoff hat typische Eigenschaften – wie ein Steckbrief. Manche nimmst du mit den Sinnen wahr (Farbe, Geruch), andere musst du messen (Schmelztemperatur, Dichte). Erst <strong>mehrere Eigenschaften zusammen</strong> verraten sicher, um welchen Stoff es sich handelt.",
                merke: "Dichte = Masse : Volumen → ρ = m / V (Einheit: g/cm³). Die Dichte ist eine Stoffeigenschaft: Ein kleiner und ein großer Eisenwürfel haben dieselbe Dichte, aber unterschiedliche Massen.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-sky-900 block text-sm">1. Stoffeigenschaften (Stoffebene, Buch S. 53)</strong>
                        <p>Geruch, Geschmack und Farbe sind <strong>wahrnehmbare Stoffeigenschaften</strong>. Aus Masse und Volumen kann man die <strong>Dichte</strong> berechnen – auch sie ist eine Stoffeigenschaft. Die <strong>Schmelztemperatur</strong> ermittelt man mit einem Thermometer. Wer Stoffeigenschaften betrachtet oder mit Messgeräten untersucht, arbeitet auf der <strong>Stoffebene</strong>.</p>
                        <div class="grid sm:grid-cols-2 gap-2">
                            <div class="panel p-3"><strong>Mit den Sinnen</strong><br>Farbe · Geruch · Geschmack (nur Schulküche!) · Glanz / Oberfläche</div>
                            <div class="panel p-3"><strong>Durch Messen &amp; Experimente</strong><br>Aggregatzustand bei Raumtemperatur · Schmelz- und Siedetemperatur · Dichte · Löslichkeit in Wasser · Härte / Verformbarkeit · Brennbarkeit · Magnetisierbarkeit · Wärmeleitfähigkeit</div>
                        </div>
                        <p class="text-[11px] text-slate-500">Tipp: Vergleiche mit deinem Heft, welche 8 Eigenschaften ihr im Unterricht besprochen habt.</p>
                        <strong class="text-sky-900 block text-sm mt-3">2. Die Dichte berechnen</strong>
                        <p><strong>ρ = m / V</strong> &nbsp;(ρ = „rho“, m = Masse in g, V = Volumen in cm³; bei Flüssigkeiten gilt 1 ml = 1 cm³)</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Umstellen:</strong> m = ρ · V &nbsp;und&nbsp; V = m / ρ</li>
                            <li><strong>Volumen eines Quaders:</strong> V = Länge · Breite · Höhe</li>
                            <li><strong>Volumen eines unregelmäßigen Körpers:</strong> In einen Messzylinder mit Wasser tauchen. Volumen = Wasserstand nachher − Wasserstand vorher.</li>
                            <li><strong>Rechenweg:</strong> Gegeben → Gesucht → Formel → Rechnung mit Einheiten → Antwortsatz.</li>
                        </ul>
                        <div class="overflow-x-auto"><table class="w-full text-left text-xs bg-white rounded-xl border border-slate-200">
                            <thead class="bg-slate-800 text-white"><tr><th class="p-2">Stoff</th><th class="p-2">Dichte in g/cm³ (gerundet)</th></tr></thead>
                            <tbody class="divide-y">
                                <tr><td class="p-2">Ethanol</td><td class="p-2">0,79</td></tr>
                                <tr><td class="p-2">Speiseöl · Eis</td><td class="p-2">0,92</td></tr>
                                <tr><td class="p-2">Wasser</td><td class="p-2">1,00</td></tr>
                                <tr><td class="p-2">Aluminium</td><td class="p-2">2,70</td></tr>
                                <tr><td class="p-2">Eisen</td><td class="p-2">7,87</td></tr>
                                <tr><td class="p-2">Messing</td><td class="p-2">ca. 8,5</td></tr>
                                <tr><td class="p-2">Kupfer</td><td class="p-2">8,96</td></tr>
                                <tr><td class="p-2">Blei</td><td class="p-2">11,34</td></tr>
                                <tr><td class="p-2">Gold</td><td class="p-2">19,32</td></tr>
                            </tbody>
                        </table></div>
                        <strong class="text-sky-900 block text-sm mt-3">3. Stoffe mithilfe von Eigenschaften unterscheiden</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Zucker oder Kochsalz?</strong> Beide sind weiß und kristallin. Aber: In 100 g Wasser lösen sich bei 20 °C <strong>197 g Zucker</strong>, aber nur <strong>35,8 g Kochsalz</strong> (Buch S. 63).</li>
                            <li><strong>Schwimmt es?</strong> Stoffe mit kleinerer Dichte als Wasser (1,00 g/cm³) schwimmen oben – z. B. Speiseöl und Eis.</li>
                            <li><strong>Echtes Gold?</strong> Gold hat eine viel größere Dichte (19,32 g/cm³) als Messing (ca. 8,5 g/cm³).</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Ist die „Goldmünze“ echt?</strong> (passt zum Praktikum „Vergolden einer Münze“, Buch S. 59)<br>Gegeben: m = 6,0 g. Die Münze lässt den Wasserstand im Messzylinder von 20,0 ml auf 20,7 ml steigen → V = 0,7 cm³.<br>Gesucht: ρ · Formel: ρ = m / V<br>Rechnung: ρ = 6,0 g : 0,7 cm³ ≈ 8,6 g/cm³<br><strong>Antwort:</strong> Gold hätte 19,32 g/cm³. Die Münze ist also nicht aus Gold – ihre Dichte passt zu Messing (ca. 8,5 g/cm³).",
                videos: [
                    { id: "YEAQTjqZK-o", title: "Stoffe und ihre Eigenschaften", channel: "CHEMIE geCHECKt!" },
                    { id: "N2u8Syb-CIk", title: "Dichte berechnen – einfach erklärt (Formel & Beispiele)", channel: "Lehrerschmidt" }
                ],
                questions: [
                    { type: "Anwenden", q: "Ein Metallstück hat die Masse 54 g und das Volumen 20 cm³. Um welches Metall handelt es sich?", options: ["Aluminium (2,7 g/cm³)", "Eisen (7,87 g/cm³)", "Kupfer (8,96 g/cm³)", "Gold (19,32 g/cm³)"], correct: 0, exp: "ρ = m / V = 54 g : 20 cm³ = 2,7 g/cm³. Das ist die Dichte von Aluminium." },
                    { type: "Was passiert, wenn …?", q: "Was passiert mit der Dichte, wenn man einen Eisenwürfel in zwei Hälften sägt?", options: ["Sie bleibt gleich – Masse und Volumen halbieren sich beide", "Sie halbiert sich", "Sie verdoppelt sich", "Sie wird null"], correct: 0, exp: "Die Dichte ist eine Stoffeigenschaft und hängt nicht von der Größe der Portion ab. Halbe Masse : halbes Volumen ergibt denselben Wert." },
                    { type: "Anwenden", q: "Im Messzylinder steht das Wasser bei 50 ml. Nach dem Eintauchen eines Steins steht es bei 57 ml. Wie groß ist das Volumen des Steins?", options: ["7 cm³", "57 cm³", "107 cm³", "50 cm³"], correct: 0, exp: "Der Stein verdrängt so viel Wasser, wie er selbst Raum einnimmt: 57 ml − 50 ml = 7 ml = 7 cm³." },
                    { type: "Transfer", q: "Wie kannst du Zucker und Kochsalz unterscheiden, ohne zu probieren?", options: ["Über die Löslichkeit: In 100 g Wasser lösen sich bei 20 °C 197 g Zucker, aber nur 35,8 g Kochsalz", "Über die Farbe – Zucker ist weißer", "Über den Aggregatzustand – Kochsalz ist flüssig", "Gar nicht, die Stoffe sind gleich"], correct: 0, exp: "Beide sind weiß und kristallin, aber ihre Löslichkeit ist sehr verschieden (Tabelle Buch S. 63). Gibt man z. B. 50 g in 100 g Wasser, löst sich Zucker vollständig, Kochsalz nicht." },
                    { type: "Begründen", q: "Warum schwimmt Eis auf Wasser?", options: ["Eis hat eine kleinere Dichte (0,92 g/cm³) als Wasser (1,00 g/cm³)", "Eis ist leichter, weil es kalt ist", "Eis enthält Luft-Teilchen statt Wasser-Teilchen", "Eis hat eine größere Dichte als Wasser"], correct: 0, exp: "Stoffe mit kleinerer Dichte als die Flüssigkeit schwimmen oben. Eis besteht aus denselben Wasser-Teilchen, die aber anders angeordnet sind." },
                    { type: "Fehler finden", q: "Tim schreibt: „ρ = V / m“. Was ist falsch?", options: ["Masse und Volumen sind vertauscht – richtig ist ρ = m / V", "Nichts, die Formel stimmt", "Es fehlt die Temperatur in der Formel", "Die Dichte wird in Gramm angegeben"], correct: 0, exp: "Dichte = Masse geteilt durch Volumen. Deshalb hat sie die Einheit g/cm³ (Gramm pro Kubikzentimeter)." },
                    { type: "Verstehen", q: "Welche Angabe ist KEINE Stoffeigenschaft?", options: ["Die Masse eines Stoffes", "Die Dichte", "Die Schmelztemperatur", "Die Farbe"], correct: 0, exp: "Die Masse hängt davon ab, wie viel du von einem Stoff hast – 1 g oder 1 kg Zucker sind beides Zucker. Dichte, Schmelztemperatur und Farbe sind typisch für den Stoff." },
                    { type: "Anwenden", q: "Ethanol hat die Dichte 0,79 g/cm³. Welche Masse haben 100 ml Ethanol?", options: ["79 g", "100 g", "126,6 g", "0,79 g"], correct: 0, exp: "m = ρ · V = 0,79 g/cm³ · 100 cm³ = 79 g (100 ml = 100 cm³)." },
                    { type: "Begründen", q: "Warum reicht die Farbe allein nicht aus, um einen Stoff sicher zu bestimmen?", options: ["Viele Stoffe haben dieselbe Farbe – z. B. sind Zucker und Kochsalz beide weiß", "Weil sich die Farbe beim Erwärmen immer ändert", "Weil Farbe keine Stoffeigenschaft ist", "Weil man Farben nur mit dem Mikroskop sieht"], correct: 0, exp: "Erst die Kombination mehrerer Eigenschaften (z. B. Farbe + Löslichkeit + Dichte + Schmelztemperatur) ist wie ein eindeutiger Steckbrief." },
                    { type: "Verstehen", q: "Du misst mit dem Thermometer die Schmelztemperatur eines Stoffes. Auf welcher Ebene arbeitest du?", options: ["Auf der Stoffebene", "Auf der Teilchenebene", "Auf der Modellebene", "Auf keiner Ebene"], correct: 0, exp: "Laut Buch arbeitet man auf der Stoffebene, wenn man Stoffeigenschaften betrachtet oder mit Messgeräten untersucht. Die Teilchenebene ist die Erklärung mit unsichtbaren Teilchen." }
                ]
            },
            {
                id: 4,
                title: "Teilchenmodell & Aggregatzustände",
                subtitle: "Stoffe im Teilchenmodell, chemische Lupe, fest – flüssig – gasförmig",
                icon: "fa-atom",
                color: "from-indigo-500 to-violet-600",
                badge: "Level 4",
                summary: "Alle Stoffe bestehen aus winzigen Teilchen. Mit dem Teilchenmodell erklärst du, was beim Schmelzen, Sieden und Sublimieren passiert.",
                simple: "Alle Stoffe bestehen aus winzig kleinen Teilchen, die man nicht einmal mit dem Mikroskop sehen kann. Mit dem <strong>Teilchenmodell</strong> kann man sich trotzdem vorstellen, was in einem Stoff passiert – zum Beispiel, warum Eis schmilzt oder warum sich Gase zusammenpressen lassen.",
                merke: "Alle Teilchen eines Stoffes sind gleich. Die Teilchen verschiedener Stoffe unterscheiden sich. Beim Wechsel des Aggregatzustands bleiben die Teilchen gleich – es ändern sich nur ihre Anordnung und die Stärke ihrer Bewegung.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-indigo-900 block text-sm">1. Das Teilchenmodell (Buch S. 52)</strong>
                        <p>Ein <strong>Modell</strong> ist eine Erklär- und Vorstellungshilfe – so wie ein Globus ein Modell der Erde ist. Schon der griechische Philosoph <strong>Demokrit</strong> (460–370 v. Chr.) stellte sich vor, dass alle Stoffe aus kleinen Teilchen bestehen: Zucker aus Zucker-Teilchen, Wasser aus Wasser-Teilchen. Diese Vorstellung heißt <strong>Teilchenmodell</strong>.</p>
                        <p><strong>Chemische Lupe:</strong> Teilchen sind so klein, dass man sie nicht sehen kann. Als gedankliche Hilfe stellt man sich vor, den Stoff mit einer sehr starken Lupe zu betrachten. So kann man die Teilchen und ihre Anordnung modellhaft darstellen. Im Buch hat jede Teilchenart immer dieselbe Form und Farbe:</p>
                        <div data-legend="wasser,zucker,aroma,eisen,sauerstoff"></div>
                        <strong class="text-indigo-900 block text-sm mt-3">2. Stoffebene und Teilchenebene (Buch S. 53)</strong>
                        <p>Was man beobachten oder messen kann (fest, flüssig, gasförmig), gehört zur <strong>Stoffebene</strong>. Die Erklärung mit den unsichtbaren Teilchen ist die <strong>Teilchenebene</strong>. Wasser besteht in allen Aggregatzuständen aus denselben Wasser-Teilchen – es ändern sich nur Anordnung und Bewegung. <em>Basiskonzept Energie:</em> Wird einem Stoff Energie zugeführt, bewegen sich die Teilchen schneller.</p>
                        <div data-lupe="fest,fluessig,gas"></div>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>fest (s):</strong> Feststoffe behalten ihre Form und lassen sich nicht zusammenpressen. → Teilchen dicht gepackt und regelmäßig in einem <strong>Gitter</strong> angeordnet, ziehen sich stark an, schwingen nur um ihre Gitterplätze.</li>
                            <li><strong>flüssig (l):</strong> Oberhalb der Schmelztemperatur passen sich Flüssigkeiten der Gefäßform an, lassen sich aber kaum zusammenpressen. → Teilchen bewegen sich so stark, dass die Anziehung <strong>teilweise</strong> überwunden wird; das Gitter bricht zusammen, die Teilchen liegen ungeordnet nebeneinander und sind gegeneinander verschiebbar.</li>
                            <li><strong>gasförmig (g):</strong> Oberhalb der Siedetemperatur breiten sich Gase schnell aus, füllen den ganzen Raum und lassen sich gut zusammenpressen. → Anziehung <strong>vollständig</strong> überwunden; einzelne Teilchen bewegen sich frei mit sehr großen Abständen. Der Raum zwischen den Teilchen ist leer.</li>
                        </ul>
                        <strong class="text-indigo-900 block text-sm mt-3">3. Übergänge zwischen den Aggregatzuständen</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>fest → flüssig: <strong>Schmelzen</strong> (bei der Schmelztemperatur) · flüssig → fest: <strong>Erstarren</strong></li>
                            <li>flüssig → gasförmig: <strong>Sieden / Verdampfen</strong> (bei der Siedetemperatur) · gasförmig → flüssig: <strong>Kondensieren</strong></li>
                            <li>fest → gasförmig: <strong>Sublimieren</strong> · gasförmig → fest: <strong>Resublimieren</strong></li>
                        </ul>
                        <strong class="text-indigo-900 block text-sm mt-3">4. Erhitzen von Iod (Material A, Buch S. 55)</strong>
                        <p>Iodkristalle werden im Wasserbad (80 °C) erhitzt. Es entsteht <strong>violetter Ioddampf</strong>, aber <strong>kein flüssiges Iod</strong> – Iod sublimiert. Am oberen, mit Eiswürfeln gekühlten Teil bilden sich wieder feste Iodkristalle (Resublimation). Iodkristalle lassen sich kaum zusammendrücken (Teilchen dicht gepackt), Ioddampf dagegen gut (große, leere Abstände).</p>
                    </div>
                `,
                example: "<strong>Ein Eiswürfel schmilzt im Glas</strong> (Aufgabe 5, Buch S. 55)<br><strong>Stoffebene:</strong> Der feste Eiswürfel wird bei 0 °C (Schmelztemperatur von Wasser) flüssig und passt sich der Form des Glases an.<br><strong>Teilchenebene:</strong> Die Wasser-Teilchen nehmen Energie aus der Umgebung auf und schwingen immer heftiger. An der Schmelztemperatur wird die Anziehung zwischen ihnen teilweise überwunden, das Teilchengitter bricht zusammen. Die Teilchen liegen nun ungeordnet nebeneinander und sind verschiebbar. <strong>Wichtig:</strong> Es bleiben dieselben Wasser-Teilchen – sie schmelzen nicht selbst!",
                videos: [
                    { id: "fFxijrGXa2Y", title: "Das Teilchenmodell einfach erklärt", channel: "Chemie – simpleclub" },
                    { id: "XFjxXvv1CNo", title: "Die Aggregatzustände einfach erklärt", channel: "Chemie – simpleclub" }
                ],
                questions: [
                    { type: "Verstehen", q: "Was verändert sich beim Schmelzen von Eis auf der Teilchenebene?", options: ["Anordnung und Bewegung der Wasser-Teilchen – die Teilchen selbst bleiben gleich", "Die Wasser-Teilchen werden größer", "Die Wasser-Teilchen werden selbst flüssig", "Es entstehen neue Teilchen"], correct: 0, exp: "Laut Buch bleiben die Teilchen in allen Aggregatzuständen gleich. Beim Schmelzen bricht nur das Gitter zusammen: Die Teilchen liegen ungeordnet und sind verschiebbar." },
                    { type: "Fehler finden", q: "Max erklärt: „Beim Erhitzen dehnen sich die Wasser-Teilchen aus und werden weich.“ Was ist falsch?", options: ["Die Teilchen selbst verändern sich nicht – nur ihre Bewegung wird stärker", "Nichts, das stimmt genau so", "Die Teilchen schrumpfen beim Erhitzen", "Wasser besteht gar nicht aus Teilchen"], correct: 0, exp: "Ein typischer Fehler: Man überträgt Eigenschaften des Stoffes (weich, flüssig) auf die Teilchen. Teilchen sind im Modell unveränderlich – es ändern sich nur Anordnung, Abstand und Bewegung." },
                    { type: "Begründen", q: "Warum lassen sich Gase gut zusammenpressen, Feststoffe aber nicht?", options: ["In Gasen sind die Abstände zwischen den Teilchen sehr groß und der Raum dazwischen ist leer", "Gas-Teilchen sind weich und lassen sich zusammendrücken", "In Feststoffen gibt es Luft zwischen den Teilchen", "Feststoff-Teilchen bewegen sich schneller"], correct: 0, exp: "Im Feststoff sind die Teilchen dicht gepackt – da ist kein Platz mehr. Im Gas kann man die Teilchen näher zusammenschieben, weil zwischen ihnen leerer Raum ist." },
                    { type: "Anwenden", q: "Beim Erhitzen von Iodkristallen entsteht violetter Dampf, aber kein flüssiges Iod. Wie heißt dieser Übergang?", options: ["Sublimation (fest → gasförmig)", "Schmelzen (fest → flüssig)", "Kondensation (gasförmig → flüssig)", "Erstarren (flüssig → fest)"], correct: 0, exp: "Wenn ein Feststoff direkt gasförmig wird, ohne flüssig zu werden, heißt das Sublimation. Genau das zeigt der Iod-Versuch im Buch." },
                    { type: "Anwenden", q: "Am mit Eiswürfeln gekühlten oberen Teil des Iod-Versuchs bilden sich Kristalle. Wie heißt dieser Vorgang?", options: ["Resublimation (gasförmig → fest)", "Sublimation (fest → gasförmig)", "Sieden", "Lösen"], correct: 0, exp: "Der Ioddampf kühlt am kalten Glas ab und wird direkt wieder fest – das ist die Umkehrung der Sublimation." },
                    { type: "Verstehen", q: "Was ist die „chemische Lupe“?", options: ["Eine gedankliche Hilfe: Man stellt sich den Stoff stark vergrößert vor, um Teilchen modellhaft darzustellen", "Ein besonders starkes Mikroskop im Chemieraum", "Eine Lupe, mit der man echte Teilchen sehen kann", "Ein anderes Wort für Thermometer"], correct: 0, exp: "Teilchen kann man mit keinem Gerät direkt sehen. Die chemische Lupe ist eine Vorstellung, mit der man Teilchen und ihre Anordnung zeichnen kann." },
                    { type: "Verstehen", q: "Wie verhalten sich die Teilchen in einem Feststoff?", options: ["Sie sind dicht gepackt im Gitter und schwingen nur um ihre Plätze", "Sie bewegen sich frei durch den ganzen Raum", "Sie liegen ungeordnet und verschieben sich ständig", "Sie stehen völlig still"], correct: 0, exp: "Im Feststoff ziehen sich die Teilchen stark an. Ihre Bewegungsmöglichkeiten sind äußerst gering – sie schwingen nur an ihren Gitterplätzen, stehen aber nicht ganz still." },
                    { type: "Was passiert, wenn …?", q: "Was passiert mit den Teilchen, wenn man einem Stoff Energie zuführt (z. B. erwärmt)?", options: ["Sie bewegen sich schneller", "Sie bewegen sich langsamer", "Sie werden größer", "Sie verschwinden"], correct: 0, exp: "Das ist das Basiskonzept Energie aus dem Buch: Wird einem Stoff Energie zugeführt, bewegen sich die Teilchen schneller." },
                    { type: "Verstehen", q: "„Flüssigkeiten passen sich der Form des Gefäßes an.“ Zu welcher Ebene gehört diese Aussage?", options: ["Stoffebene – es ist eine Beobachtung", "Teilchenebene – es ist eine Erklärung mit Teilchen", "Zu beiden Ebenen gleichzeitig", "Zu keiner Ebene"], correct: 0, exp: "Man kann sehen, dass sich Wasser dem Glas anpasst – also Stoffebene. Die Teilchenebene erklärt es: Die Teilchen sind gegeneinander verschiebbar." },
                    { type: "Begründen", q: "Warum bewegen sich Teilchen in Gasen schneller als in Flüssigkeiten?", options: ["Sie haben mehr Energie, die Anziehung ist vollständig überwunden und sie bewegen sich frei", "Gas-Teilchen sind kleiner als Flüssigkeits-Teilchen", "In Gasen gibt es keine Teilchen", "Weil Gase immer kalt sind"], correct: 0, exp: "Bis zum Gas wurde dem Stoff viel Energie zugeführt. An der Siedetemperatur ist die Anziehung vollständig überwunden – die Teilchen fliegen frei und schnell durch den Raum." }
                ]
            },
            {
                id: 5,
                title: "Diffusion & Lösevorgang",
                subtitle: "Teilchenbewegung in Gasen und Flüssigkeiten, Kaliumpermanganat in Wasser",
                icon: "fa-wind",
                color: "from-fuchsia-500 to-pink-600",
                badge: "Level 5",
                summary: "Warum riecht Lisa das Brathähnchen, obwohl kein Wind weht? Und wie löst sich ein Kristall im Wasser? Die Antwort: bewegte Teilchen.",
                simple: "Teilchen sind ständig in Bewegung. Deshalb verteilen sich Stoffe ganz von allein – ohne Umrühren und ohne Wind. Das nennt man <strong>Diffusion</strong>. Auch beim Lösen eines Kristalls in Wasser spielen die bewegten Wasser-Teilchen die Hauptrolle.",
                merke: "Diffusion = Verteilung von Stoffen aufgrund der Teilchenbewegung (in Flüssigkeiten und Gasen). Je höher die Temperatur, desto schneller bewegen sich die Teilchen – und desto schneller verteilt sich der Stoff.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-fuchsia-900 block text-sm">1. Teilchenbewegung in Gasen (Buch S. 55)</strong>
                        <p>Peter nimmt ein Brathähnchen aus dem Ofen. Lisa sitzt mit dem Rücken zu ihm, es weht kein Wind – trotzdem riecht sie das Aroma. Das Aroma besteht aus verschiedenen <strong>gasförmigen Aromastoff-Teilchen</strong>, die sich mit großer Geschwindigkeit bewegen. Sie mischen sich mit den <strong>Luft-Teilchen</strong>. Dabei stoßen alle Teilchen immer wieder zusammen und ändern durch die Zusammenstöße ihre Flugrichtungen. Nach einer Weile sind die Aromastoff-Teilchen im ganzen Raum verteilt – auch in Lisas Nase.</p>
                        <strong class="text-fuchsia-900 block text-sm mt-3">2. Diffusion (Buch S. 54)</strong>
                        <p>Durch die Teilchenbewegung breiten sich die Teilchen in <strong>Flüssigkeiten und Gasen</strong> im gesamten zur Verfügung stehenden Raum aus. Bei höheren Temperaturen ist die Bewegung der Teilchen schneller – die Teilchen verteilen sich schneller. Die Verteilung von Stoffen aufgrund der Teilchenbewegung heißt <strong>Diffusion</strong>.</p>
                        <strong class="text-fuchsia-900 block text-sm mt-3">3. Der Lösevorgang im Teilchenmodell (Buch S. 54)</strong>
                        <p>Kaliumpermanganat ist ein dunkelvioletter Feststoff. Ein kleiner Kristall löst sich in Wasser langsam auf, die violette Färbung verteilt sich mit der Zeit gleichmäßig.</p>
                        <div data-lupe="kmno4_1,kmno4_2,kmno4_3"></div>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li>Im festen Kaliumpermanganat bilden die Teilchen ein <strong>Teilchengitter</strong>.</li>
                            <li>Die sich stark bewegenden <strong>Wasser-Teilchen stoßen</strong> die Kaliumpermanganat-Teilchen von ihren Gitterplätzen.</li>
                            <li>Die herausgestoßenen Teilchen werden durch weitere Zusammenstöße mit Wasser-Teilchen immer weiter verteilt und durchmischt.</li>
                            <li>Liegen Wasser-Teilchen und Kaliumpermanganat-Teilchen <strong>ungeordnet nebeneinander</strong> vor, hat sich der Kristall vollständig gelöst.</li>
                        </ol>
                        <strong class="text-fuchsia-900 block text-sm mt-3">4. Praktikum: Diffusion von Farbstoffen (Buch S. 54)</strong>
                        <p>Mit Schokolinsen auf einem weißen Teller untersucht man, wie die <strong>Wassertemperatur</strong> die Diffusion des Farbstoffs beeinflusst und ob <strong>verschiedene Farben</strong> unterschiedlich schnell diffundieren. Wichtig: in einer Versuchsreihe immer nur eine Bedingung verändern!</p>
                    </div>
                `,
                example: "<strong>Kaliumpermanganat in kaltem und warmem Wasser</strong><br>In zwei Petrischalen mit gleich viel Wasser (kalt / warm) wird je ein gleich großer Kaliumpermanganat-Kristall gegeben.<br><strong>Beobachtung:</strong> Im warmen Wasser breitet sich die violette Farbe deutlich schneller aus. Nach einiger Zeit ist in beiden Schalen das ganze Wasser gleichmäßig violett.<br><strong>Erklärung:</strong> Im warmen Wasser bewegen sich die Wasser-Teilchen schneller. Sie stoßen die Kaliumpermanganat-Teilchen schneller aus dem Gitter und verteilen sie schneller – die Diffusion läuft schneller ab. Umrühren ist nicht nötig, weil sich die Teilchen von selbst bewegen.",
                videos: [
                    { id: "6dAtD173IEk", title: "Diffusion einfach erklärt! – Chemie", channel: "Duden Learnattack" }
                ],
                questions: [
                    { type: "Begründen", q: "Lisa riecht das Brathähnchen, obwohl kein Wind weht. Warum?", options: ["Die Aromastoff-Teilchen bewegen sich, stoßen mit Luft-Teilchen zusammen und verteilen sich im ganzen Raum (Diffusion)", "Peter hat das Aroma zu Lisa gepustet", "Der Geruch wandert nur nach oben", "Aromastoffe bestehen nicht aus Teilchen"], correct: 0, exp: "Gasförmige Teilchen sind ständig in schneller Bewegung. Durch viele Zusammenstöße verteilen sie sich nach einer Weile im ganzen Raum – ganz ohne Wind." },
                    { type: "Was passiert, wenn …?", q: "Was passiert mit der Diffusion, wenn man die Temperatur erhöht?", options: ["Sie läuft schneller ab, weil sich die Teilchen schneller bewegen", "Sie läuft langsamer ab", "Sie hört ganz auf", "Die Temperatur hat keinen Einfluss"], correct: 0, exp: "Bei höheren Temperaturen bewegen sich die Teilchen schneller und verteilen sich deshalb schneller im Raum (Buch S. 54)." },
                    { type: "Verstehen", q: "Was stößt beim Lösen die Kaliumpermanganat-Teilchen aus ihrem Gitter?", options: ["Die sich stark bewegenden Wasser-Teilchen", "Die Luft über dem Wasser", "Die Wärme der Lampe", "Die Kaliumpermanganat-Teilchen springen von selbst heraus"], correct: 0, exp: "Die Wasser-Teilchen bewegen sich stark und stoßen die Kaliumpermanganat-Teilchen von ihren Gitterplätzen. Weitere Zusammenstöße verteilen sie im Wasser." },
                    { type: "Verstehen", q: "Wann hat sich der Kristall vollständig gelöst?", options: ["Wenn Wasser- und Kaliumpermanganat-Teilchen ungeordnet nebeneinander vorliegen", "Wenn die Kaliumpermanganat-Teilchen verschwunden sind", "Wenn alle Teilchen am Boden liegen", "Wenn das Wasser kocht"], correct: 0, exp: "Die Teilchen verschwinden nicht – sie sind nur einzeln zwischen den Wasser-Teilchen verteilt. Deshalb sieht man den Kristall nicht mehr, aber die violette Farbe." },
                    { type: "Fehler finden", q: "Paul sagt: „Beim Lösen werden die Teilchen des Kristalls vernichtet.“ Was stimmt?", options: ["Falsch – die Teilchen bleiben erhalten und werden nur im Wasser verteilt", "Richtig – deshalb sieht man den Kristall nicht mehr", "Richtig – sie werden zu Wasser-Teilchen", "Falsch – sie werden größer"], correct: 0, exp: "Der Beweis: Das Wasser wird violett. Die Kaliumpermanganat-Teilchen sind also noch da, nur so fein verteilt, dass man keinen Kristall mehr sieht." },
                    { type: "Begründen", q: "Warum färbt sich das Wasser auch ohne Umrühren gleichmäßig violett?", options: ["Weil sich die Teilchen ständig von selbst bewegen und so verteilen (Diffusion)", "Weil Kaliumpermanganat nach oben schwimmt", "Weil das Wasser verdunstet", "Das passiert nur mit Umrühren"], correct: 0, exp: "Die ständige Teilchenbewegung sorgt für die Verteilung. Umrühren würde den Vorgang nur beschleunigen." },
                    { type: "Verstehen", q: "In welchen Aggregatzuständen findet Diffusion laut Buch statt?", options: ["In Flüssigkeiten und Gasen", "Nur in Feststoffen", "Nur in Gasen", "In gar keinem Aggregatzustand"], correct: 0, exp: "Im Buch heißt es: Durch die Teilchenbewegung breiten sich die Teilchen in Flüssigkeiten und in Gasen im gesamten Raum aus. In Feststoffen schwingen die Teilchen nur auf ihren Gitterplätzen." },
                    { type: "Anwenden", q: "Du willst testen, ob die Farbe einer Schokolinse die Diffusionsgeschwindigkeit beeinflusst. Was musst du gleich lassen?", options: ["Wassertemperatur und Wassermenge – nur die Farbe wird verändert", "Nichts, man verändert alles gleichzeitig", "Nur die Farbe", "Die Farbe und die Temperatur"], correct: 0, exp: "Bei einem fairen Versuch wird nur eine Bedingung verändert (hier die Farbe). Alles andere bleibt gleich, damit das Ergebnis eindeutig ist." },
                    { type: "Begründen", q: "Warum verteilen sich Stoffe in Gasen schneller als in Flüssigkeiten?", options: ["Gas-Teilchen bewegen sich schneller und frei mit großen Abständen", "Flüssigkeits-Teilchen bewegen sich gar nicht", "Gase sind schwerer als Flüssigkeiten", "In Gasen gibt es keine Zusammenstöße"], correct: 0, exp: "In Gasen ist die Anziehung vollständig überwunden, die Teilchen sind sehr schnell. In Flüssigkeiten liegen die Teilchen dicht nebeneinander und kommen langsamer voran." },
                    { type: "Verstehen", q: "Warum fliegen die Aromastoff-Teilchen nicht auf geradem Weg zu Lisas Nase?", options: ["Weil sie ständig mit Luft-Teilchen zusammenstoßen und dadurch ihre Flugrichtung ändern", "Weil sie von Peter festgehalten werden", "Weil Aromastoff-Teilchen sich nur im Kreis bewegen", "Weil sie zu schwer sind"], correct: 0, exp: "Abbildung 5 im Buch zeigt die Zickzack-Wege: Durch die Zusammenstöße ändern sich die Flugrichtungen ständig. Darum dauert es eine Weile, bis der Geruch ankommt." }
                ]
            },
            {
                id: 6,
                title: "Reinstoffe & Gemische",
                subtitle: "homogen & heterogen, die 8 Gemischtypen, Zeichnen im Teilchenmodell",
                icon: "fa-layer-group",
                color: "from-teal-500 to-cyan-600",
                badge: "Level 6",
                summary: "Reinstoff oder Gemisch? Homogen oder heterogen? Lerne Lösung, Legierung, Gasgemisch, Suspension, Emulsion, Nebel, Rauch und Gemenge.",
                simple: "Ein <strong>Reinstoff</strong> besteht nur aus einem einzigen Stoff, z. B. weißer Zucker. Die meisten Dinge im Alltag sind aber <strong>Gemische</strong> aus mehreren Stoffen. Kannst du die Bestandteile mit bloßem Auge oder mit dem Mikroskop erkennen, ist das Gemisch <strong>heterogen</strong> (uneinheitlich) – sonst ist es <strong>homogen</strong> (einheitlich).",
                merke: "Homogene Gemische: Die Teilchen liegen einzeln vor → Lösung, Legierung, Gasgemisch. Heterogene Gemische: Es gibt größere Partikel aus vielen Teilchen → Suspension, Emulsion, Nebel, Rauch, Gemenge.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-teal-900 block text-sm">1. Reinstoffe und Gemische (Buch S. 56)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Reinstoff:</strong> Weißer Zucker besteht nur aus einem Stoff. Kochsalz enthält nur sehr geringe Anteile weiterer Stoffe (sie machen es rieselfähig) und wird auch als Reinstoff angesehen. Reinstoffe sind im Alltag selten.</li>
                            <li><strong>Gemisch:</strong> Im Müsli erkennt man mit bloßem Auge verschiedene Bestandteile. Milch sieht einheitlich aus, aber unter dem Mikroskop sieht man kleine Fetttröpfchen – auch Milch ist ein Gemisch.</li>
                            <li><strong>heterogen (uneinheitlich):</strong> Bestandteile mit bloßem Auge oder bei starker Vergrößerung erkennbar (Müsli, Milch).</li>
                            <li><strong>homogen (einheitlich):</strong> Selbst bei stärkster Vergrößerung keine einzelnen Bestandteile erkennbar (gezuckerter Tee).</li>
                        </ul>
                        <strong class="text-teal-900 block text-sm mt-3">2. Gemische im Teilchenmodell (Buch S. 57)</strong>
                        <p><strong>Zuckerlösung:</strong> Die Zucker-Teilchen sind <strong>einzeln</strong> zwischen den Wasser-Teilchen verteilt. Ein flüssiges homogenes Gemisch heißt <strong>Lösung</strong>. In allen homogenen Gemischen liegen die Teilchen einzeln vor – z. B. auch in <strong>Luft</strong> (homogenes <strong>Gasgemisch</strong> aus Sauerstoff- und Stickstoff-Teilchen).</p>
                        <p><strong>Tuschesuspension:</strong> Unter dem Mikroskop sieht man kleine Feststoffbröckchen, die <strong>Partikel</strong>. Die Tusche-Teilchen liegen in <strong>Gruppen</strong> regelmäßig angeordnet vor, umgeben von Wasser-Teilchen. In allen heterogenen Gemischen gibt es größere Partikel aus vielen Teilchen. Feststoff + Flüssigkeit (heterogen) = <strong>Suspension</strong>.</p>
                        <div data-lupe="loesung,suspension"></div>
                        <strong class="text-teal-900 block text-sm mt-3">3. Emulsionen, Aerosole, Legierungen (Buch S. 58–59)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Emulsion:</strong> heterogenes Gemisch verschiedener Flüssigkeiten. In Fetttröpfchen sind die Teilchen <em>unregelmäßig</em> angeordnet, weil das Fett flüssig (Öl) ist. <strong>Milch</strong> = Öl-in-Wasser-Emulsion (wenig Fett, Fetttröpfchen schweben im Wasser). <strong>Fettcreme</strong> = Wasser-in-Öl-Emulsion (mehr Fett als Wasser, Wassertröpfchen im Öl).</li>
                            <li><strong>Aerosole:</strong> kleine Flüssigkeitströpfchen oder Feststoffbröckchen in einem Gas. Flüssigkeit in Gas = <strong>Nebel</strong>, Feststoff in Gas = <strong>Rauch</strong>.</li>
                            <li><strong>Legierungen</strong> = Gemische aus Metallen. <strong>Bronze</strong>: 4 Teile Kupfer + 1 Teil Zinn – hohe Festigkeit, niedrige Schmelztemperatur, beständig → ideal für Glocken (Petersglocke „Dicker Pitter“ im Kölner Dom). <strong>Messing</strong>: Kupfer + Zink (Wasserhähne). <strong>Duraluminium</strong>: Aluminium, Kupfer, Magnesium, Mangan, Silicium – leicht und sehr hart (Flugzeugbau). <strong>Weißgold/Rotgold</strong>: Gold mit Silber oder Kupfer. <strong>Edelstahl</strong>: Eisen mit Chrom und Nickel (Stahl enthält außerdem etwas Kohlenstoff). Je nach Mischungsverhältnis ändern sich die Eigenschaften.</li>
                        </ul>
                        <strong class="text-teal-900 block text-sm mt-3">4. Übersicht: die 8 Gemischtypen (Buch S. 60–61)</strong>
                        <div class="overflow-x-auto"><table class="w-full text-left text-xs bg-white rounded-xl border border-slate-200">
                            <thead class="bg-slate-800 text-white"><tr><th class="p-2">Gemischtyp</th><th class="p-2">Was ist gemischt?</th><th class="p-2">Beispiel</th><th class="p-2">Art</th></tr></thead>
                            <tbody class="divide-y">
                                <tr><td class="p-2 font-bold">Lösung</td><td class="p-2">Feststoff, Flüssigkeit oder Gas in Flüssigkeit</td><td class="p-2">Tee</td><td class="p-2 text-teal-700 font-bold">homogen</td></tr>
                                <tr><td class="p-2 font-bold">Legierung</td><td class="p-2">Metall + Metall</td><td class="p-2">Messing</td><td class="p-2 text-teal-700 font-bold">homogen</td></tr>
                                <tr><td class="p-2 font-bold">Gasgemisch</td><td class="p-2">Gas + Gas</td><td class="p-2">Luft</td><td class="p-2 text-teal-700 font-bold">homogen</td></tr>
                                <tr><td class="p-2 font-bold">Suspension</td><td class="p-2">Feststoff in Flüssigkeit</td><td class="p-2">Wasserfarben</td><td class="p-2 text-rose-700 font-bold">heterogen</td></tr>
                                <tr><td class="p-2 font-bold">Emulsion</td><td class="p-2">Flüssigkeit in Flüssigkeit</td><td class="p-2">Milch</td><td class="p-2 text-rose-700 font-bold">heterogen</td></tr>
                                <tr><td class="p-2 font-bold">Nebel</td><td class="p-2">Flüssigkeit in Gas</td><td class="p-2">Nebel im Gebirge</td><td class="p-2 text-rose-700 font-bold">heterogen</td></tr>
                                <tr><td class="p-2 font-bold">Rauch</td><td class="p-2">Feststoff in Gas</td><td class="p-2">Rauch bei einem Brand</td><td class="p-2 text-rose-700 font-bold">heterogen</td></tr>
                                <tr><td class="p-2 font-bold">Gemenge</td><td class="p-2">verschiedene Feststoffe</td><td class="p-2">Würzmischung</td><td class="p-2 text-rose-700 font-bold">heterogen</td></tr>
                            </tbody>
                        </table></div>
                        <p class="text-[11px] text-slate-500">Alle 8 Teilchenbilder findest du zum Durchklicken im Chemie-Labor unter „Gemisch-Detektiv“.</p>
                    </div>
                `,
                example: "<strong>Der Frühstückstisch (Buch S. 56) – alles sortiert:</strong><br>🍯 <strong>Zucker</strong> → Reinstoff · 🧂 <strong>Kochsalz</strong> → wird als Reinstoff angesehen<br>🥣 <strong>Müsli</strong> → heterogenes Gemisch verschiedener Feststoffe (Gemenge)<br>🥛 <strong>Milch</strong> → heterogen: Emulsion, genauer Öl-in-Wasser-Emulsion (Fetttröpfchen im Wasser)<br>🍵 <strong>gezuckerter Tee</strong> → homogen: Lösung (Zucker- und Aroma-Teilchen einzeln zwischen den Wasser-Teilchen)<br>💨 <strong>Luft im Raum</strong> → homogen: Gasgemisch aus Sauerstoff- und Stickstoff-Teilchen",
                videos: [
                    { id: "-q5BkTzBybE", title: "Einteilung der Stoffe – Reinstoffe und Gemische", channel: "Chemie – simpleclub" },
                    { id: "YqkNPKxKV9I", title: "Heterogene und homogene Stoffgemische und Reinstoffe", channel: "Studyflix" }
                ],
                questions: [
                    { type: "Begründen", q: "Milch sieht völlig einheitlich aus. Warum ist sie trotzdem ein heterogenes Gemisch?", options: ["Unter dem Mikroskop erkennt man kleine Fetttröpfchen", "Weil Milch weiß ist", "Weil Milch aus nur einem Stoff besteht", "Weil Milch flüssig ist"], correct: 0, exp: "Heterogen heißt: Bestandteile sind mit bloßem Auge ODER bei starker Vergrößerung erkennbar. Bei Milch sieht man die Fetttröpfchen unter dem Mikroskop." },
                    { type: "Anwenden", q: "Gezuckerter Tee ist …", options: ["ein homogenes Gemisch – eine Lösung", "ein heterogenes Gemisch – eine Suspension", "ein Reinstoff", "eine Emulsion"], correct: 0, exp: "Selbst bei stärkster Vergrößerung sind keine Bestandteile erkennbar. Zucker- und Aroma-Teilchen liegen einzeln zwischen den Wasser-Teilchen – das ist eine Lösung." },
                    { type: "Anwenden", q: "Nebel im Gebirge ist ein Gemisch aus …", options: ["einer Flüssigkeit in einem Gas – heterogen", "einem Gas in einem Gas – homogen", "einem Feststoff in einem Gas – heterogen", "einer Flüssigkeit in einer Flüssigkeit"], correct: 0, exp: "Im Nebel schweben kleine Wassertröpfchen (Gruppen von Wasser-Teilchen) zwischen den Teilchen der Luft. Feststoff in Gas wäre Rauch." },
                    { type: "Verstehen", q: "Wie liegen die Teilchen in Messing (Legierung) vor?", options: ["Einzelne Zink-Teilchen befinden sich zwischen den Kupfer-Teilchen – homogen", "In getrennten Gruppen nebeneinander – heterogen", "Als Tröpfchen in einer Flüssigkeit", "Kupfer und Zink liegen in zwei Schichten übereinander"], correct: 0, exp: "Legierungen sind homogene Gemische: Einzelne Teilchen eines Metalls befinden sich zwischen den Teilchen eines anderen Metalls (Übersicht S. 61)." },
                    { type: "Anwenden", q: "Eine Fettcreme enthält mehr Fett als Wasser. Welcher Emulsionstyp ist das?", options: ["Wasser-in-Öl-Emulsion", "Öl-in-Wasser-Emulsion", "Suspension", "Lösung"], correct: 0, exp: "Was mehr vorhanden ist, ist „außen“. Bei der Fettcreme schweben Wassertröpfchen im Öl. Bei Milch (viel Wasser) ist es umgekehrt: Öl-in-Wasser." },
                    { type: "Teilchenmodell", q: "Ein Teilchenbild zeigt einzelne gelbe Rechtecke (Zucker) zwischen Wasser-Dreiecken. Was ist dargestellt?", options: ["Eine Lösung (homogen)", "Eine Suspension (heterogen)", "Eine Emulsion (heterogen)", "Ein Reinstoff"], correct: 0, exp: "Einzeln verteilte Teilchen = homogenes Gemisch. Bei einer Suspension würden die Teilchen des Feststoffs in Gruppen (Partikeln) vorliegen." },
                    { type: "Fehler finden", q: "Jana behauptet: „Luft ist ein Reinstoff, weil sie durchsichtig und einheitlich ist.“ Was stimmt?", options: ["Falsch – Luft ist ein homogenes Gasgemisch aus Sauerstoff- und Stickstoff-Teilchen", "Richtig – Luft besteht nur aus Luft-Teilchen", "Falsch – Luft ist ein heterogenes Gemisch", "Richtig – alles Durchsichtige ist ein Reinstoff"], correct: 0, exp: "Einheitlich aussehen heißt nur homogen, nicht rein! Luft besteht aus verschiedenen Teilchen (Sauerstoff, Stickstoff), die einzeln verteilt sind." },
                    { type: "Begründen", q: "Warum gießt man Kirchenglocken aus Bronze und nicht aus reinem Kupfer?", options: ["Bronze hat eine hohe Festigkeit, eine niedrigere Schmelztemperatur und ist beständiger", "Bronze ist ein Reinstoff und deshalb besser", "Kupfer ist zu hart zum Gießen", "Bronze ist viel leichter als Kupfer"], correct: 0, exp: "Kupfer ist weich und hat eine hohe Schmelztemperatur. Die Legierung Bronze (4 Teile Kupfer, 1 Teil Zinn) ist fest, schmilzt leichter und ist beständiger gegen Umwelteinflüsse." },
                    { type: "Anwenden", q: "Zu welchem Gemischtyp gehört eine Würzmischung?", options: ["Gemenge – heterogenes Gemisch verschiedener Feststoffe", "Legierung", "Lösung", "Rauch"], correct: 0, exp: "In einer Würzmischung liegen Gruppen von Teilchen verschiedener Feststoffe nebeneinander vor – das ist ein Gemenge." },
                    { type: "Verstehen", q: "Was unterscheidet die Fetttröpfchen in Milch von Feststoffpartikeln in einer Suspension?", options: ["In den Fetttröpfchen sind die Teilchen unregelmäßig angeordnet, weil das Fett flüssig ist", "Fetttröpfchen bestehen aus einzelnen Teilchen", "Feststoffpartikel sind immer größer", "Es gibt keinen Unterschied"], correct: 0, exp: "In Feststoffpartikeln (z. B. Tusche) sind die Teilchen regelmäßig im Gitter angeordnet. In Fetttröpfchen liegt das Fett als flüssiges Öl vor – also ungeordnet." },
                    { type: "Anwenden", q: "Rauch bei einem Brand ist ein Gemisch aus …", options: ["einem Feststoff (Ruß) in einem Gas – heterogen", "einer Flüssigkeit in einem Gas", "einem Gas in einer Flüssigkeit", "zwei Gasen – homogen"], correct: 0, exp: "Im Rauch schweben Gruppen von Ruß-Teilchen (Feststoff) zwischen den Teilchen der Luft. Rauch ist wie Nebel ein Aerosol." },
                    { type: "Verstehen", q: "Kochsalz enthält geringe Anteile anderer Stoffe. Warum gilt es trotzdem als Reinstoff?", options: ["Weil die Anteile sehr gering sind – sie machen das Salz nur rieselfähig", "Weil es weiß ist", "Weil es sich in Wasser löst", "Weil Kochsalz ein Gemenge ist"], correct: 0, exp: "Laut Buch enthält Kochsalz nur sehr geringe Anteile weiterer Stoffe, die es rieselfähig machen. Deshalb wird es als Reinstoff angesehen." }
                ]
            },
            {
                id: 7,
                title: "Lösungen & Löslichkeit",
                subtitle: "Zusatz-Level (Buch S. 62–65): gesättigte Lösung, Löslichkeitskurve, Gehaltsangaben",
                icon: "fa-flask-vial",
                color: "from-blue-500 to-cyan-600",
                badge: "Level 7 · Zusatz",
                summary: "Wie viel Stoff löst sich in Wasser? Gesättigte Lösung, Bodenkörper, Löslichkeit, Löslichkeitskurve und nichtwässrige Lösemittel.",
                simple: "Nicht jeder Stoff löst sich gleich gut in Wasser – und nie in beliebiger Menge. Wenn sich nichts mehr löst, ist die Lösung <strong>gesättigt</strong> und der Rest bleibt als <strong>Bodenkörper</strong> liegen. Wie viel sich löst, hängt auch von der <strong>Temperatur</strong> ab.",
                merke: "Löslichkeit = Masse des gelösten Stoffes in 100 g Wasser (bei 20 °C). Viele Feststoffe lösen sich in warmem Wasser besser – Gase dagegen lösen sich in kaltem Wasser besser.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. Was löst sich in Wasser? (Buch S. 62)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Feststoffe:</strong> Kochsalz und Brausepulver (Zucker, Citronensäure, Natriumhydrogencarbonat) sind <strong>gut löslich</strong>. Mehl und Gips lösen sich kaum – sie sind <strong>schlecht löslich</strong>.</li>
                            <li><strong>Flüssigkeiten:</strong> Ethanol (Trinkalkohol) löst sich gut in Wasser – Ethanol-Wasser-Lösungen nutzt man als Fensterreiniger. Essigsäure und Ameisensäure lösen sich vollständig (Kalkreiniger; Speiseessig ist eine stark verdünnte Essigsäurelösung). Speiseöl, Benzin und Diesel lösen sich fast gar nicht.</li>
                            <li><strong>Gase:</strong> Sauerstoff löst sich nur in geringen Mengen, Kohlenstoffdioxid viel besser. <strong>Gase lösen sich in kaltem Wasser besser als in warmem.</strong> Steigt die Wassertemperatur im Sommer, sinkt der gelöste Sauerstoff – es kann zum Fischsterben kommen. Sprudel wird deshalb gekühlt mit Kohlenstoffdioxid versetzt.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">2. Gesättigte Lösung & Löslichkeit (Buch S. 63)</strong>
                        <p>Eine kleine Menge blaues Kupfersulfat löst sich vollständig. Ab einer bestimmten Menge löst sich zugegebenes Kupfersulfat nicht mehr und sinkt zu Boden: Die Lösung ist <strong>gesättigt</strong>, der nicht gelöste Stoff heißt <strong>Bodenkörper</strong>.</p>
                        <p><strong>Löslichkeit = m (gelöster Stoff) / 100 g Wasser</strong> – gemessen bei 20 °C. Beispiel: In 100 g Wasser lösen sich 31,7 g Kupfersulfat, aber nur 0,2 g Gips.</p>
                        <div class="overflow-x-auto"><table class="w-full text-left text-xs bg-white rounded-xl border border-slate-200">
                            <thead class="bg-slate-800 text-white"><tr><th class="p-2">Stoff (20 °C)</th><th class="p-2">Löslichkeit in g Stoff / 100 g Wasser</th></tr></thead>
                            <tbody class="divide-y">
                                <tr><td class="p-2">Zucker</td><td class="p-2">197,0</td></tr>
                                <tr><td class="p-2">Citronensäure</td><td class="p-2">75,0</td></tr>
                                <tr><td class="p-2">Kochsalz</td><td class="p-2">35,8</td></tr>
                                <tr><td class="p-2">Kohlenstoffdioxid</td><td class="p-2">0,145</td></tr>
                                <tr><td class="p-2">Sauerstoff</td><td class="p-2">0,0043</td></tr>
                                <tr><td class="p-2">Stickstoff</td><td class="p-2">0,0017</td></tr>
                                <tr><td class="p-2">Kalkstein</td><td class="p-2">0,001</td></tr>
                            </tbody>
                        </table></div>
                        <strong class="text-blue-900 block text-sm mt-3">3. Löslichkeitskurve & Löslichkeitsdiagramm (Buch S. 64)</strong>
                        <p>Kaliumnitrat löst sich in warmem Wasser besser als in kaltem: bei 30 °C etwa 50 g, bei 60 °C etwa 110 g pro 100 g Wasser. Trägt man die Wertepaare in ein Diagramm ein, erhält man die <strong>Löslichkeitskurve</strong>. Auch Zucker und Citronensäure lösen sich bei höherer Temperatur besser; die Löslichkeit von Kochsalz ändert sich kaum.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Punkt auf der Kurve:</strong> genau gesättigte Lösung (60 °C, 110 g Kaliumnitrat).</li>
                            <li><strong>Punkt oberhalb der Kurve:</strong> gesättigt mit Bodenkörper (60 °C, 150 g → 40 g lösen sich nicht). Erwärmt man auf etwa 73 °C, löst sich alles.</li>
                            <li><strong>Punkt unterhalb der Kurve:</strong> nicht gesättigt – alles löst sich vollständig.</li>
                        </ul>
                        <strong class="text-blue-900 block text-sm mt-3">4. Gehaltsangaben & nichtwässrige Lösemittel (Buch S. 65)</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Massenanteil w:</strong> 1 Liter Infusionslösung wiegt 1005 g und enthält 9 g Kochsalz → w = 9 g / 1005 g ≈ 0,0089 = <strong>0,89 %</strong>.</li>
                            <li><strong>Volumenanteil:</strong> 1 Liter Speiseessig enthält 50 ml Essigsäure → 0,05 l / 1 l = 0,05 = <strong>5 Vol-%</strong>.</li>
                            <li><strong>Nichtwässrige Lösemittel:</strong> Nagellack, Öle, Fette, Wachs, Lacke und Kleber lösen sich nicht in Wasser. Man braucht andere Lösemittel: Nagellackentferner (enthält Aceton oder Ethylacetat), Ethanol oder <strong>Waschbenzin</strong> für Fett- und Ölflecken.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Sprudelwasser (Material A, Buch S. 58)</strong><br>In der verschlossenen Flasche ist das Gas Kohlenstoffdioxid <strong>unter Druck</strong> im Wasser gelöst – die Kohlenstoffdioxid-Teilchen sind einzeln zwischen den Wasser-Teilchen verteilt (Lösung).<br><strong>Flasche geöffnet:</strong> Der Druck sinkt. Kohlenstoffdioxid-Teilchen verlassen die Lösung, es bilden sich Bläschen und das Gas entweicht in die Luft.<br><strong>Lange offen und warm:</strong> Immer weniger Kohlenstoffdioxid-Teilchen bleiben gelöst – der Sprudel wird „schal“. Denn Gase lösen sich in warmem Wasser schlechter als in kaltem.",
                videos: [
                    { id: "O2ewhsFAArI", title: "Löslichkeit einfach erklärt – Basics", channel: "Chemie – simpleclub" }
                ],
                questions: [
                    { type: "Verstehen", q: "Trotz Rühren bleibt Kupfersulfat am Boden liegen. Was bedeutet das?", options: ["Die Lösung ist gesättigt, der Rest ist der Bodenkörper", "Kupfersulfat ist unlöslich", "Die Lösung ist homogen", "Das Wasser ist verdunstet"], correct: 0, exp: "Ab einer bestimmten Menge löst sich nichts mehr. Die Lösung ist dann gesättigt, der nicht gelöste Stoff heißt Bodenkörper (Buch S. 63)." },
                    { type: "Anwenden", q: "Wie viel Kochsalz löst sich höchstens in 200 g Wasser bei 20 °C? (Löslichkeit: 35,8 g / 100 g Wasser)", options: ["71,6 g", "35,8 g", "17,9 g", "200 g"], correct: 0, exp: "Die doppelte Wassermenge löst die doppelte Stoffmenge: 2 · 35,8 g = 71,6 g." },
                    { type: "Begründen", q: "Warum kann es in heißen Sommern zu Fischsterben in Gewässern kommen?", options: ["Im warmen Wasser ist weniger Sauerstoff gelöst", "Fische mögen kein warmes Wasser", "Im warmen Wasser löst sich mehr Sauerstoff", "Warmes Wasser enthält kein Kohlenstoffdioxid"], correct: 0, exp: "Gase lösen sich in kaltem Wasser besser als in warmem. Steigt die Wassertemperatur, sinkt der Anteil an gelöstem Sauerstoff, den die Fische zum Atmen brauchen." },
                    { type: "Anwenden", q: "Bei 60 °C gibt man 150 g Kaliumnitrat in 100 g Wasser (Löslichkeit bei 60 °C: 110 g). Was passiert?", options: ["40 g bleiben als Bodenkörper liegen – erst bei etwa 73 °C löst sich alles", "Alles löst sich sofort", "Es löst sich gar nichts", "Es lösen sich 150 g, 40 g verdunsten"], correct: 0, exp: "Der Punkt liegt oberhalb der Löslichkeitskurve: 150 g − 110 g = 40 g Bodenkörper. Laut Buch löst sich der Bodenkörper beim Erwärmen auf etwa 73 °C vollständig." },
                    { type: "Verstehen", q: "Bei welchem Stoff ändert sich die Löslichkeit mit der Temperatur kaum?", options: ["Kochsalz", "Kaliumnitrat", "Zucker", "Citronensäure"], correct: 0, exp: "Im Löslichkeitsdiagramm verläuft die Kurve von Kochsalz fast waagerecht. Kaliumnitrat, Zucker und Citronensäure lösen sich bei höherer Temperatur deutlich besser." },
                    { type: "Transfer", q: "Warum geht Nagellack mit Wasser nicht ab?", options: ["Nagellack löst sich nicht in Wasser – man braucht ein nichtwässriges Lösemittel wie Aceton", "Das Wasser ist zu kalt", "Nagellack ist ein Gas", "Man muss nur länger mit Seife waschen"], correct: 0, exp: "Laut Buch kann man getrockneten Nagellack selbst mit Seife nicht entfernen. Nagellackentferner enthält Aceton oder Ethylacetat – nichtwässrige Lösemittel." },
                    { type: "Anwenden", q: "1 Liter Infusionslösung (1005 g) enthält 9 g Kochsalz. Wie groß ist der Massenanteil?", options: ["ca. 0,89 %", "9 %", "0,09 %", "111 %"], correct: 0, exp: "w = 9 g : 1005 g ≈ 0,0089. Als Prozent: 0,0089 · 100 % ≈ 0,89 %." },
                    { type: "Verstehen", q: "Ein Wertepaar liegt UNTERHALB der Löslichkeitskurve. Was bedeutet das?", options: ["Die Lösung ist nicht gesättigt – die Stoffportion löst sich vollständig", "Die Lösung ist gesättigt mit Bodenkörper", "Der Stoff ist unlöslich", "Das Wasser kocht"], correct: 0, exp: "Unter der Kurve ist noch „Platz“: Es löst sich alles. Auf der Kurve ist die Lösung genau gesättigt, darüber bleibt Bodenkörper liegen." },
                    { type: "Anwenden", q: "Welches Gas löst sich laut Tabelle besser in Wasser?", options: ["Kohlenstoffdioxid (0,145 g)", "Sauerstoff (0,0043 g)", "Stickstoff (0,0017 g)", "Alle gleich gut"], correct: 0, exp: "Kohlenstoffdioxid löst sich viel besser als Sauerstoff und Stickstoff – deshalb nutzt man es für Sprudelgetränke." },
                    { type: "Fehler finden", q: "Ben sagt: „Speiseöl löst sich in Wasser, wenn man nur lange genug rührt.“ Was stimmt?", options: ["Falsch – Speiseöl löst sich fast gar nicht in Wasser", "Richtig – nach 10 Minuten ist es gelöst", "Richtig – Öl ist gut löslich", "Falsch – Öl löst sich nur in warmem Wasser vollständig"], correct: 0, exp: "Laut Buch lösen sich Speiseöl, Benzin und Diesel fast gar nicht in Wasser. Beim Rühren entstehen nur Tröpfchen – das wäre höchstens eine Emulsion, keine Lösung." }
                ]
            }
        ];

        // ==========================================
        // 20 PRAXIS-ÜBUNGEN CHEMIE (gestaffelt, Lösung Schritt für Schritt)
        // ==========================================
        const chemieExercises = [
            { id: 1, level: "Grundlagen", title: "Sicherheitsregeln nennen und begründen", task: "Nenne fünf Sicherheitsregeln für den Chemieraum und begründe zwei davon.", steps: [
                "Schutzbrille tragen · lange Haare zusammenbinden · nur nach Anweisung experimentieren · im Chemieraum nicht essen, trinken oder probieren · Unfälle und Glasbruch sofort melden.",
                "Begründung 1 – Schutzbrille: Chemikalien können spritzen (z. B. beim Erhitzen) und die Augen schwer verletzen.",
                "Begründung 2 – nicht essen/probieren: Geräte und Tische können mit Chemikalien verunreinigt sein. Geschmacksproben macht man deshalb nur in der Schulküche (wie beim Brausepulver im Buch)."
            ] },
            { id: 2, level: "Grundlagen", title: "GHS-Piktogramme zuordnen", task: "Was bedeuten GHS02, GHS05, GHS07 und GHS09? Nenne zu jedem einen Stoff aus deinen Praktika.", steps: [
                "<strong>GHS02 – Flamme:</strong> entzündbar → z. B. Ethanol oder Aceton (Praktikum „Der Fleck muss weg“).",
                "<strong>GHS05 – Ätzwirkung:</strong> ätzend für Haut, Augen und Metalle → z. B. Weinsäure (Brausepulver) oder Zinkchlorid.",
                "<strong>GHS07 – Ausrufezeichen:</strong> gesundheitsschädlich / reizend → z. B. Citronensäure, Azorubin, Chromalaun.",
                "<strong>GHS09 – Umwelt:</strong> gewässergefährdend → z. B. Zinkchlorid oder Waschbenzin. Reste gehören in den Sammelbehälter, nie in den Ausguss."
            ] },
            { id: 3, level: "Grundlagen", title: "Das Teilchenmodell beschreiben", task: "Beschreibe die Grundaussagen des Teilchenmodells in eigenen Worten.", steps: [
                "Alle Stoffe bestehen aus kleinsten Teilchen, die man nicht sehen kann (Idee von Demokrit).",
                "Alle Teilchen eines Stoffes sind gleich. Die Teilchen verschiedener Stoffe unterscheiden sich.",
                "Die Teilchen sind ständig in Bewegung. Wird Energie zugeführt, bewegen sie sich schneller.",
                "Zwischen den Teilchen ist leerer Raum. Die Teilchen ziehen sich gegenseitig an."
            ] },
            { id: 4, level: "Grundlagen", title: "Aggregatzustände im Vergleich", task: "Vergleiche fest, flüssig und gasförmig auf der Teilchenebene: Anordnung, Abstand, Bewegung, Anziehung.", steps: [
                "<strong>fest:</strong> regelmäßig im Gitter, dicht gepackt, schwingen nur um ihre Plätze, starke Anziehung.",
                "<strong>flüssig:</strong> ungeordnet, dicht nebeneinander, gegeneinander verschiebbar, Anziehung teilweise überwunden.",
                "<strong>gasförmig:</strong> keine Ordnung, sehr große Abstände (leerer Raum), bewegen sich frei und schnell, Anziehung vollständig überwunden."
            ] },
            { id: 5, level: "Grundlagen", title: "Reinstoff, homogen oder heterogen?", task: "Ordne zu: Müsli, Zucker, Milch, gezuckerter Tee, Luft, Kochsalz, Wasserfarbe, Messing.", steps: [
                "<strong>Reinstoffe:</strong> Zucker, Kochsalz (geringe Zusätze, wird als Reinstoff angesehen).",
                "<strong>homogene Gemische:</strong> gezuckerter Tee (Lösung), Luft (Gasgemisch), Messing (Legierung).",
                "<strong>heterogene Gemische:</strong> Müsli (Gemenge), Milch (Emulsion), Wasserfarbe (Suspension)."
            ] },
            { id: 6, level: "Anwenden", title: "Dichte eines Quaders", task: "Ein Metallquader ist 2 cm lang, 3 cm breit und 5 cm hoch und wiegt 81 g. Berechne die Dichte und bestimme das Metall.", steps: [
                "<strong>Gegeben:</strong> m = 81 g; Maße 2 cm · 3 cm · 5 cm. <strong>Gesucht:</strong> ρ",
                "Volumen: V = 2 cm · 3 cm · 5 cm = 30 cm³",
                "Formel: ρ = m / V = 81 g : 30 cm³ = 2,7 g/cm³",
                "<strong>Antwort:</strong> Die Dichte beträgt 2,7 g/cm³ – das Metall ist Aluminium."
            ] },
            { id: 7, level: "Anwenden", title: "Dichte mit dem Messzylinder", task: "Ein unregelmäßiges Metallstück wiegt 71,7 g. Im Messzylinder steigt das Wasser von 50 ml auf 58 ml. Um welches Metall handelt es sich?", steps: [
                "Volumen durch Verdrängung: V = 58 ml − 50 ml = 8 ml = 8 cm³",
                "ρ = m / V = 71,7 g : 8 cm³ ≈ 8,96 g/cm³",
                "<strong>Antwort:</strong> Die Dichte passt zu Kupfer (8,96 g/cm³)."
            ] },
            { id: 8, level: "Anwenden", title: "Formel umstellen", task: "Wie schwer sind 250 ml Speiseöl (ρ = 0,92 g/cm³)? Und welches Volumen haben 39,35 g Eisen (ρ = 7,87 g/cm³)?", steps: [
                "Masse gesucht → m = ρ · V = 0,92 g/cm³ · 250 cm³ = 230 g",
                "Volumen gesucht → V = m / ρ = 39,35 g : 7,87 g/cm³ = 5 cm³",
                "Tipp: Schreibe die Einheiten immer mit – dann siehst du sofort, ob die Rechnung stimmt (g/cm³ · cm³ = g)."
            ] },
            { id: 9, level: "Anwenden", title: "Protokoll sortieren", task: "Ordne den Protokoll-Abschnitten zu: (A) „Das Wasser färbt sich im warmen Teller schneller.“ (B) „Beeinflusst die Temperatur die Diffusion?“ (C) „Teilchen bewegen sich bei Wärme schneller.“ (D) „weißer Teller, Schokolinsen“ (E) „Schokolinse in die Mitte legen, Wasser zugeben“.", steps: [
                "Fragestellung: <strong>B</strong>",
                "Materialien: <strong>D</strong> · Durchführung: <strong>E</strong>",
                "Beobachtung: <strong>A</strong> (nur das Sichtbare!)",
                "Auswertung: <strong>C</strong> (die Erklärung mit Teilchen gehört nie zur Beobachtung)."
            ] },
            { id: 10, level: "Anwenden", title: "Übergänge benennen", task: "Benenne den Übergang: a) Eis wird zu Wasser · b) Wasserdampf beschlägt eine kalte Scheibe · c) Iodkristalle werden zu violettem Dampf · d) Ioddampf bildet am kalten Glas Kristalle · e) Wasser gefriert.", steps: [
                "a) Schmelzen (fest → flüssig)",
                "b) Kondensieren (gasförmig → flüssig)",
                "c) Sublimieren (fest → gasförmig)",
                "d) Resublimieren (gasförmig → fest)",
                "e) Erstarren (flüssig → fest)"
            ] },
            { id: 11, level: "Anwenden", title: "Stoffe unterscheiden", task: "Du hast drei weiße Pulver: Zucker, Kochsalz und Gips. Wie kannst du sie mit der Löslichkeit unterscheiden – ohne zu probieren?", steps: [
                "Gib jeweils 50 g Pulver in 100 g Wasser (20 °C) und rühre.",
                "Zucker (197 g/100 g Wasser) löst sich vollständig.",
                "Kochsalz (35,8 g) löst sich nur teilweise – es bleibt Bodenkörper.",
                "Gips (0,2 g) löst sich fast gar nicht – fast alles bleibt liegen. Probieren ist im Chemieraum verboten!"
            ] },
            { id: 12, level: "Transfer", title: "Den Lösevorgang erklären", task: "Ein Kaliumpermanganat-Kristall wird in Wasser gegeben. Beschreibe den Lösevorgang auf der Teilchenebene und beschreibe, wie du ihn in drei Bildern zeichnen würdest.", steps: [
                "Im festen Kaliumpermanganat bilden die Teilchen ein Teilchengitter. <em>Bild 1: Gitter aus pinken Teilchen am Boden, Wasser-Dreiecke darüber.</em>",
                "Die sich stark bewegenden Wasser-Teilchen stoßen Kaliumpermanganat-Teilchen von ihren Gitterplätzen. <em>Bild 2: Gitter wird kleiner, einzelne pinke Teilchen zwischen den Wasser-Teilchen.</em>",
                "Durch weitere Zusammenstöße werden sie immer weiter verteilt und durchmischt.",
                "Liegen alle Teilchen ungeordnet nebeneinander, ist der Kristall gelöst. <em>Bild 3: kein Gitter mehr, pinke Teilchen gleichmäßig verteilt.</em>"
            ] },
            { id: 13, level: "Transfer", title: "Lisa und das Brathähnchen", task: "Erkläre mit dem Teilchenmodell, warum Lisa das Brathähnchen riecht, obwohl kein Wind weht. Warum dauert es eine Weile?", steps: [
                "Das Aroma besteht aus gasförmigen Aromastoff-Teilchen, die sich mit großer Geschwindigkeit bewegen.",
                "Sie mischen sich mit den Luft-Teilchen. Alle Teilchen stoßen ständig zusammen und ändern dabei ihre Flugrichtung.",
                "Dadurch verteilen sich die Aromastoff-Teilchen nach und nach im ganzen Raum (Diffusion) – auch bis zu Lisas Nase.",
                "Es dauert eine Weile, weil die Teilchen durch die Zusammenstöße auf Zickzack-Wegen unterwegs sind."
            ] },
            { id: 14, level: "Transfer", title: "Iod-Versuch auswerten (Material A, S. 55)", task: "Benenne die Wechsel der Aggregatzustände beim Erhitzen von Iod. Erkläre, warum sich Iodkristalle kaum, Ioddampf aber gut zusammendrücken lässt.", steps: [
                "Unten im Wasserbad (80 °C): Das feste Iod wird direkt gasförmig → <strong>Sublimation</strong> (es entsteht kein flüssiges Iod).",
                "Oben am gekühlten Glas (Eiswürfel): Der Ioddampf wird wieder fest → <strong>Resublimation</strong>.",
                "Ursache: Beim Erhitzen bekommen die Teilchen Energie und bewegen sich so stark, dass die Anziehung überwunden wird. Beim Abkühlen verlieren sie Energie und ordnen sich wieder im Gitter an.",
                "Iodkristalle: Teilchen dicht gepackt im Gitter → kein Platz zum Zusammendrücken. Ioddampf: große Abstände, leerer Raum → gut zusammendrückbar."
            ] },
            { id: 15, level: "Transfer", title: "Emulsionstyp bestimmen (Praktikum B, S. 58)", task: "Mit einem Pulvergemisch aus Sudanblau und Azorubin werden ein Öltropfen, ein Wassertropfen und Proben (Creme, Margarine) angefärbt. Wie bestimmst du den Emulsionstyp?", steps: [
                "Vergleichsproben zuerst: Sudanblau färbt den Öltropfen blau (löst sich in Fett), Azorubin färbt den Wassertropfen rot (löst sich in Wasser).",
                "Erscheint eine Probe überwiegend <strong>rot</strong>, ist Wasser die äußere Flüssigkeit → <strong>Öl-in-Wasser-Emulsion</strong> (wie Milch).",
                "Erscheint sie überwiegend <strong>blau</strong>, ist Fett/Öl außen → <strong>Wasser-in-Öl-Emulsion</strong> (wie Fettcreme). Margarine ist eine Wasser-in-Öl-Emulsion.",
                "Bratfett besteht fast nur aus Fett – es färbt sich blau."
            ] },
            { id: 16, level: "Transfer", title: "Sprudelwasser im Teilchenmodell (Material A, S. 58)", task: "Erläutere die Abbildung der verschlossenen Sprudelflasche und skizziere, was sich ändert, wenn die Flasche geöffnet wird und lange offen steht.", steps: [
                "Geschlossen: Kohlenstoffdioxid ist unter Druck im Wasser gelöst – Kohlenstoffdioxid-Teilchen einzeln zwischen den Wasser-Teilchen (Lösung). Über dem Wasser sind Gas-Teilchen dicht beieinander.",
                "Geöffnet: Der Druck sinkt, Kohlenstoffdioxid-Teilchen verlassen die Lösung (Bläschen) und entweichen in die Luft.",
                "Lange offen: Im Wasser sind nur noch wenige Kohlenstoffdioxid-Teilchen gelöst – der Sprudel ist schal. In der Skizze: viel weniger Gas-Teilchen zwischen den Wasser-Teilchen."
            ] },
            { id: 17, level: "Transfer", title: "Löslichkeitskurve lesen", task: "100 g Wasser, 60 °C: Man löst 110 g Kaliumnitrat und gibt dann noch 40 g dazu. a) Was passiert? b) Ab welcher Temperatur löst sich alles? c) Wie viel kristallisiert aus, wenn man auf 30 °C abkühlt (Löslichkeit dort ca. 50 g)?", steps: [
                "a) 110 g ist bei 60 °C genau gesättigt (Punkt auf der Kurve). Die zusätzlichen 40 g lösen sich nicht → Bodenkörper (Punkt oberhalb der Kurve).",
                "b) Beim Erwärmen auf etwa 73 °C löst sich der Bodenkörper vollständig (der Punkt liegt dann wieder auf der Kurve).",
                "c) Bei 30 °C lösen sich nur ca. 50 g: 150 g − 50 g = ca. 100 g Kaliumnitrat werden als Kristalle (Bodenkörper) wieder fest."
            ] },
            { id: 18, level: "Klausur", title: "Gemischtypen im Teilchenmodell zeichnen", task: "Zeichne Rauch, Emulsion (Milch), Legierung (Messing) und Gasgemisch (Luft) im Teilchenmodell. Gib jeweils an: homogen/heterogen und welche Aggregatzustände gemischt sind.", steps: [
                "Immer: Kreis als chemische Lupe, Legende mit den Teilchensymbolen, jede Teilchenart gleich gezeichnet.",
                "<strong>Rauch</strong> (heterogen, Feststoff in Gas): Gruppen von Ruß-Teilchen (Sechsecke, dicht gepackt) zwischen einzelnen, weit verteilten Sauerstoff- und Stickstoff-Teilchen.",
                "<strong>Emulsion</strong> (heterogen, Flüssigkeit in Flüssigkeit): Gruppen ungeordneter Fett-Teilchen (Tröpfchen) zwischen dicht liegenden Wasser-Teilchen.",
                "<strong>Messing</strong> (homogen, Metall + Metall, fest): dicht gepacktes, regelmäßiges Gitter, einzelne Zink-Teilchen zwischen den Kupfer-Teilchen.",
                "<strong>Luft</strong> (homogen, Gas + Gas): einzelne Sauerstoff- und Stickstoff-Teilchen mit großen Abständen, gut durchmischt."
            ] },
            { id: 19, level: "Klausur", title: "Gehaltsangaben berechnen", task: "a) 500 g einer Zuckerlösung enthalten 25 g Zucker. Berechne den Massenanteil. b) Ein Liter Fensterreiniger enthält 150 ml Ethanol. Wie groß ist der Volumenanteil?", steps: [
                "a) w = m(Zucker) / m(Lösung) = 25 g : 500 g = 0,05 → <strong>5 %</strong>",
                "b) Volumenanteil = V(Ethanol) / V(Lösung) = 0,15 l : 1 l = 0,15 → <strong>15 Vol-%</strong>",
                "Vergleich Buch: Infusionslösung 9 g / 1005 g ≈ 0,89 %, Speiseessig 50 ml / 1 l = 5 Vol-%."
            ] },
            { id: 20, level: "Klausur", title: "GROSSE KLAUSUR-ÜBUNG: „Vergolden“ einer Münze", task: "Eine Kupfermünze wird in einer siedenden Zinkchlorid-Lösung mit Zinkgranalien silbrig und danach in der Brennerflamme goldfarben (Praktikum C, S. 59).<br>a) Welche Sicherheitsmaßnahmen leitest du aus Zinkchlorid (GHS05, GHS07, GHS09) ab? b) Welche Legierung ist entstanden? c) Homogen oder heterogen? Wie sieht sie im Teilchenmodell aus? d) Wie kannst du beweisen, dass kein Gold entstanden ist? e) Nenne eine bessere Überschrift.", steps: [
                "a) Schutzbrille tragen (ätzend, GHS05; reizend, GHS07), Münze nur mit der Tiegelzange anfassen, Lösung nicht in den Ausguss, sondern in den Sammelbehälter (umweltgefährlich, GHS09).",
                "b) Kupfer (Münze) und Zink vermischen sich in der Hitze zu <strong>Messing</strong> – eine Legierung aus Kupfer und Zink.",
                "c) Messing ist ein <strong>homogenes</strong> Gemisch: Einzelne Zink-Teilchen befinden sich zwischen den Kupfer-Teilchen im Metallgitter.",
                "d) Dichte bestimmen: Gold hat 19,32 g/cm³, Messing nur etwa 8,5 g/cm³. Eine Messing-Münze hat eine viel kleinere Dichte.",
                "e) z. B. „Herstellung einer Messingschicht auf einer Kupfermünze“ – denn es entsteht kein Gold."
            ] }
        ];

        // ==========================================
        // MATCH-PUZZLE CHEMIE
        // ==========================================
        const chemiePuzzle = [
            { term: "Teilchenmodell", exp: "Vorstellung: Alle Stoffe bestehen aus kleinsten Teilchen" },
            { term: "Chemische Lupe", exp: "Gedankliche Hilfe: Stoff stark vergrößert vorstellen" },
            { term: "Diffusion", exp: "Verteilung von Stoffen aufgrund der Teilchenbewegung" },
            { term: "Sublimation", exp: "Übergang fest → gasförmig (z. B. Iod)" },
            { term: "Reinstoff", exp: "Besteht nur aus einem einzigen Stoff (z. B. Zucker)" },
            { term: "Suspension", exp: "Heterogen: Feststoff in Flüssigkeit (Wasserfarben)" },
            { term: "Emulsion", exp: "Heterogen: Flüssigkeit in Flüssigkeit (Milch)" },
            { term: "Legierung", exp: "Homogenes Gemisch verschiedener Metalle (Messing)" },
            { term: "Gesättigte Lösung", exp: "Es löst sich nichts mehr – ein Bodenkörper bleibt" },
            { term: "Dichte", exp: "ρ = m / V, angegeben in g/cm³" },
            { term: "GHS02 (Flamme)", exp: "Entzündbarer Stoff, z. B. Ethanol" },
            { term: "P-Satz", exp: "Sicherheitshinweis: So schützt du dich" }
        ];

        // ==========================================
        // KLAUSUR-SPICKZETTEL & METHODIK CHEMIE
        // ==========================================
        const chemieCheatsheet = [
            { q: "1. Sicherheitsregeln – die Top 10", a: "Schutzbrille tragen · lange Haare zusammenbinden · nur nach Anweisung experimentieren · nicht essen, trinken, probieren (Geschmacksproben nur in der Schulküche) · Chemikalien nicht anfassen · Geruchsprobe durch Zufächeln · Reagenzglas-Öffnung beim Erhitzen von Personen weg · heiße Geräte mit der Tiegelzange · Reste nach Anweisung entsorgen (nicht in den Ausguss) · Unfälle und Glasbruch sofort melden." },
            { q: "2. Methodik: Versuchsprotokoll", a: "<strong>Kopf</strong> (Name, Datum, Überschrift) → <strong>Fragestellung</strong> + Vermutung → <strong>Materialien</strong> (Geräte + Chemikalien mit GHS-Kennzeichnung) → <strong>Durchführung</strong> (Schritte + Skizze) → <strong>Beobachtung</strong> (nur Sichtbares!) → <strong>Auswertung</strong> (Erklärung, Antwort auf die Frage) → <strong>Entsorgung</strong>.<br>⚠️ Teilchen kann man nicht sehen – Teilchen-Erklärungen gehören in die Auswertung, nie in die Beobachtung.<br>✅ Faire Versuche: immer nur eine Bedingung verändern." },
            { q: "3. GHS-Piktogramme, Signalwörter, H- und P-Sätze", a: "GHS01 Bombe = explosiv · GHS02 Flamme = entzündbar · GHS03 Flamme über Kreis = brandfördernd · GHS04 Gasflasche = Gas unter Druck · GHS05 Ätzwirkung = ätzend · GHS06 Totenkopf = giftig · GHS07 Ausrufezeichen = gesundheitsschädlich/reizend · GHS08 Gesundheitsgefahr = schwere Gesundheitsschäden · GHS09 Umwelt = gewässergefährdend.<br><strong>Signalwörter:</strong> „Gefahr“ (schwer) / „Achtung“ (weniger schwer).<br><strong>H-Sätze</strong> = Gefahrenhinweise (H2.. physikalisch, H3.. Gesundheit, H4.. Umwelt), z. B. H225 leicht entzündbar.<br><strong>P-Sätze</strong> = Sicherheitshinweise (P2.. Vorsorge, P3.. Notfall, P4.. Lagerung, P5.. Entsorgung), z. B. P280 Schutzbrille/Handschuhe tragen." },
            { q: "4. Stoffeigenschaften & Stoffe unterscheiden", a: "Mit den Sinnen: Farbe, Geruch, Geschmack (nur Schulküche), Glanz.<br>Messbar: Aggregatzustand, Schmelz- und Siedetemperatur, Dichte, Löslichkeit, Härte/Verformbarkeit, Brennbarkeit, Magnetisierbarkeit, Wärmeleitfähigkeit.<br>Ein Stoff wird erst durch <strong>mehrere</strong> Eigenschaften eindeutig bestimmt. Beispiel: Zucker (197 g) und Kochsalz (35,8 g) unterscheiden sich in der Löslichkeit pro 100 g Wasser.<br>Die Masse ist keine Stoffeigenschaft!" },
            { q: "5. Methodik: Dichte berechnen", a: "<strong>ρ = m / V</strong> (g/cm³) · m = ρ · V · V = m / ρ · 1 ml = 1 cm³<br>Quader: V = l · b · h · unregelmäßiger Körper: V = Wasserstand nachher − vorher (Messzylinder).<br><strong>Rechenweg:</strong> Gegeben → Gesucht → Formel → Rechnung mit Einheiten → Antwortsatz.<br>Werte: Ethanol 0,79 · Öl/Eis 0,92 · Wasser 1,00 · Aluminium 2,70 · Eisen 7,87 · Kupfer 8,96 · Gold 19,32 g/cm³. Kleiner als 1,00 → schwimmt auf Wasser." },
            { q: "6. Teilchenmodell & chemische Lupe", a: "Alle Stoffe bestehen aus Teilchen (Demokrit, 460–370 v. Chr.). Alle Teilchen eines Stoffes sind gleich, die verschiedener Stoffe unterscheiden sich. Die chemische Lupe ist eine gedankliche Hilfe zum Darstellen der Teilchen.<br><strong>Stoffebene</strong> = beobachten/messen · <strong>Teilchenebene</strong> = mit Teilchen erklären.<br>Basiskonzept Energie: Mehr Energie → Teilchen bewegen sich schneller." },
            { q: "7. Aggregatzustände & Übergänge", a: "<strong>fest:</strong> Gitter, dicht, schwingen auf der Stelle, starke Anziehung · <strong>flüssig:</strong> ungeordnet, dicht, verschiebbar, Anziehung teilweise überwunden · <strong>gasförmig:</strong> frei, schnell, große Abstände, leerer Raum, Anziehung vollständig überwunden.<br>Schmelzen ↔ Erstarren · Sieden/Verdampfen ↔ Kondensieren · Sublimieren ↔ Resublimieren (Iod!).<br>Die Teilchen selbst bleiben immer gleich." },
            { q: "8. Diffusion & Lösevorgang", a: "<strong>Diffusion:</strong> Verteilung von Stoffen aufgrund der Teilchenbewegung in Flüssigkeiten und Gasen – je wärmer, desto schneller.<br><strong>Lösevorgang (Kaliumpermanganat):</strong> 1. Teilchengitter im Kristall → 2. bewegte Wasser-Teilchen stoßen Teilchen aus dem Gitter → 3. weitere Stöße verteilen sie → 4. alle Teilchen ungeordnet nebeneinander = gelöst. Die Teilchen verschwinden nicht!" },
            { q: "9. Reinstoffe, Gemische & die 8 Gemischtypen", a: "Reinstoff = ein Stoff (Zucker). Gemisch = mehrere Stoffe.<br><strong>homogen</strong> (Teilchen einzeln): Lösung (… in Flüssigkeit, Tee) · Legierung (Metall + Metall, Messing) · Gasgemisch (Gas + Gas, Luft).<br><strong>heterogen</strong> (Partikel aus vielen Teilchen): Suspension (fest in flüssig, Wasserfarben) · Emulsion (flüssig in flüssig, Milch: Öl-in-Wasser; Fettcreme: Wasser-in-Öl) · Nebel (flüssig in Gas) · Rauch (fest in Gas) · Gemenge (fest + fest, Würzmischung)." },
            { q: "10. Methodik: Zeichnen im Teilchenmodell", a: "1. Kreis als „chemische Lupe“ zeichnen. 2. Legende anlegen: jede Teilchenart eigenes Symbol (z. B. Wasser = Dreieck). 3. Aggregatzustand beachten: fest = Gitter, flüssig = dicht & ungeordnet, Gas = wenige Teilchen weit auseinander. 4. Homogen = Teilchen einzeln verteilt, heterogen = Gruppen (Partikel/Tröpfchen). 5. Teilchen nie „schmelzen“ oder „größer werden“ lassen." },
            { q: "11. Zusatz: Löslichkeit & Löslichkeitskurve", a: "Gesättigt = es löst sich nichts mehr, Rest = Bodenkörper. Löslichkeit = g Stoff pro 100 g Wasser (20 °C): Zucker 197 · Citronensäure 75 · Kochsalz 35,8 · Kupfersulfat 31,7 · Gips 0,2.<br>Feststoffe meist warm besser löslich (Kaliumnitrat: 30 °C ≈ 50 g, 60 °C ≈ 110 g), Kochsalz kaum temperaturabhängig. Gase lösen sich kalt besser (Fischsterben!).<br>Kurve: auf = gesättigt · oberhalb = Bodenkörper · unterhalb = alles gelöst.<br>Massenanteil w = m(Stoff)/m(Lösung) · Volumenanteil in Vol-% · Nagellack → Aceton, Fett → Waschbenzin." }
        ];
