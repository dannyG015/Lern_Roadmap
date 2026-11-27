        // ==========================================
        // ERDKUNDE DATA (6 ROADMAP LEVELS)
        // ==========================================
        const erdkundeLevels = [
            {
                id: 1,
                title: "Gegensätze & Geschichte",
                subtitle: "Naturräume, Kolonialzeit & Neue Mittelschicht",
                icon: "fa-mountain-sun",
                color: "from-amber-500 to-orange-500",
                badge: "Level 1",
                summary: "Indien ist ein Land extremer Unterschiede: Vom Himalaya bis zur Wüste Thar und von britischer Kolonialgeschichte bis zur modernen Mittelschicht.",
                simple: "Indien ist voller extremer Gegensätze: Auf der einen Seite gibt es hochmoderne IT-Städte und reichen Wohlstand, auf der anderen Seite verarmte Dörfer. Über 1,4 Milliarden Menschen leben hier.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-amber-900 block text-sm">1. Die drei großen Naturräume Indiens:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Der Himalaya (Norden):</strong> Höchstes Gebirge der Erde. Speist die riesigen Ströme Ganges, Brahmaputra und Indus.</li>
                            <li><strong>Die Ganges-Tiefebene:</strong> Fruchtbares Schwemmland und die am dichtesten besiedelte Region Indiens.</li>
                            <li><strong>Das Dekkan-Hochland:</strong> Großes Plateau im Süden, umrahmt von den Gebirgsketten der West- und Ostghats.</li>
                        </ul>
                        <strong class="text-amber-900 block text-sm mt-3">2. Kolonialgeschichte & Neue Mittelschicht:</strong>
                        <p>Bis 1947 war Indien die bedeutendste britische Kolonie. Durch den gewaltfreien Widerstand unter <strong>Mahatma Gandhi</strong> erlangte Indien die Unabhängigkeit und ist heute die größte Demokratie der Erde. Neben extremer Armut wächst eine <strong>neue Mittelschicht</strong> von über 300 Millionen Menschen mit gutem Einkommen.</p>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Herr Sharma arbeitet in Mumbai als Software-Entwickler für deutsche Firmen und fährt ein neues Auto. Auf dem Weg nach Hause fährt er an Straßenverkäufern und Slums vorbei, wo Menschen ohne fließendes Wasser leben.",
                video: { id: "vB3FYho3lNE", title: "Indien – Geografie und Klima", channel: "Die Welt in Karten" },
                questions: [
                    { q: "Welches Gebirge bildet Indiens natürliche Grenze im Norden?", options: ["Alpen", "Himalaya", "Anden", "Kaukasus"], correct: 1, exp: "Der Himalaya ist das höchste Gebirge der Erde." },
                    { q: "Wann wurde Indien unabhängig von Großbritannien?", options: ["1918", "1947", "1989", "2001"], correct: 1, exp: "1947 wurde Indien unabhängig." },
                    { q: "Welcher Fluss speist die fruchtbarste Tiefebene Indiens?", options: ["Amazonas", "Ganges", "Nil", "Rhein"], correct: 1, exp: "Die Ganges-Ebene ist sehr fruchtbar." },
                    { q: "Wer führte den gewaltfreien Widerstand gegen die Kolonialmacht an?", options: ["Nehru", "Mahatma Gandhi", "Modi", "Indira Gandhi"], correct: 1, exp: "Mahatma Gandhi steht für gewaltfreien Protest." },
                    { q: "Was zeichnet die indische 'Neue Mittelschicht' aus?", options: ["Sie leben in Zelten", "Menschen mit stabilem Einkommen, die Konsumgüter kaufen können", "Es sind nur Milliardäre", "Sie wandern alle aus"], correct: 1, exp: "Die Mittelschicht wächst stark an." },
                    { q: "Wie heißt das große Hochland im Süden Indiens?", options: ["Dekkan-Hochland", "Tibet", "Anatolien", "Bayerischer Wald"], correct: 0, exp: "Das Dekkan-Hochland liegt im Süden." },
                    { q: "Welches Meer liegt westlich von Indien?", options: ["Arabisches Meer", "Kaspisches Meer", "Ostsee", "Rotes Meer"], correct: 0, exp: "Westlich liegt das Arabische Meer." },
                    { q: "Wie viele Einwohner hat Indien ungefähr?", options: ["800 Millionen", "Über 1,4 Milliarden", "500 Millionen", "2 Milliarden"], correct: 1, exp: "Indien ist das bevölkerungsreichste Land." },
                    { q: "Was bedeutet der Begriff 'Schwellenland'?", options: ["Ein Land an der Schwelle vom Entwicklungs- zum Industrieland", "Ein Land ohne Grenzen", "Ein Agrarland", "Ein armes Entwicklungsland"], correct: 0, exp: "Schwellenländer wachsen wirtschaftlich sehr schnell." },
                    { q: "Welcher Wirtschaftssektor wächst in Indiens Großstädten rasant?", options: ["Fischerei", "IT & Dienstleistungen", "Bergbau", "Forstwirtschaft"], correct: 1, exp: "IT und Dienstleistungen sind der Haupttreiber." }
                ]
            },
            {
                id: 2,
                title: "Der Monsun, ITC & Luv/Lee",
                subtitle: "Regenphysik & Gebirgsbarrieren",
                icon: "fa-cloud-showers-heavy",
                color: "from-blue-500 to-cyan-600",
                badge: "Level 2",
                summary: "Wie entsteht der Monsun? Lerne die Wirkungsweise der Innertropischen Konvergenzzone (ITC) und Luv/Lee an den Westghats kennen.",
                simple: "Der Sommermonsun ist ein gigantischer Wind, der im Sommer monatelang enormen Regen vom Ozean an Land bringt. Er ist lebenswichtig für die Landwirtschaft.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-blue-900 block text-sm">1. ITC (Innertropische Konvergenzzone):</strong>
                        <p>Eine Tiefdruckrinne am Äquator, die im Nordsommer mit dem Sonnenhöchststand nach Norden wandert. Sie saugt feuchte Luftmassen vom Indischen Ozean an.</p>
                        <strong class="text-blue-900 block text-sm mt-3">2. Das Luv- und Lee-Prinzip an den Westghats:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Luv (Dem Wind zugewandt):</strong> Feuchte Luft steigt am Gebirge auf, kühlt ab ➔ <strong>Starke Steigungsregen</strong> an der Westküste!</li>
                            <li><strong>Lee (Dem Wind abgewandt):</strong> Die Luft sinkt dahinter ab und erwärmt sich ➔ <strong>Regenschatten</strong> im Dekkan-Hochland.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Ausführliches Praxis-Beispiel:</strong> Bauer Kumar bewirtschaftet ein Feld im Dekkan-Hochland. Da sein Dorf auf der ostwärts gerichteten LEE-Seite der Westghats liegt, gelangt der feuchte Sommermonsun kaum dorthin. Während in Mumbai an der Küste (LUV-Seite) über 800 mm Regen fallen, leidet Kumars Ernte unter extremer Dürre.",
                video: { id: "y2dFvvNieMs", title: "Monsun einfach erklärt – Wetterphänomene 3", channel: "Geographie – simpleclub" },
                questions: [
                    { q: "Wofür steht die Abkürzung ITC?", options: ["International Trade Center", "Intertropische Konvergenzzone", "Indischer Temperatur-Code", "Innere Tropenzone"], correct: 1, exp: "ITC steht für Intertropische Konvergenzzone." },
                    { q: "Wann herrscht in Indien der feuchte Sommermonsun?", options: ["Dezember bis Februar", "Juni bis September", "März bis Mai", "Oktober"], correct: 1, exp: "Juni bis September bringt die Regenzeit." },
                    { q: "Was passiert auf der LUV-Seite eines Gebirges?", options: ["Luft steigt auf, kühlt ab und es regnet stark", "Es bleibt trocken", "Es schneit nur", "Luft sinkt ab"], correct: 0, exp: "Luv ist die nasse Windseite." },
                    { q: "Was bedeutet 'Lee'?", options: ["Windabgewandte trockene Regenschattenseite", "Windseite", "Gletscherspalte", "Meerbusen"], correct: 0, exp: "Lee ist die trockene Regenseite." },
                    { q: "Welches Gebirge fängt den Sommermonsun an der Westküste ab?", options: ["Himalaya", "Westghats", "Ural", "Pyrenäen"], correct: 1, exp: "Die Westghats erzwingen Steigungsregen." },
                    { q: "Warum verlagert sich die ITC im Sommer nach Norden?", options: ["Durch den Sonnenhöchststand über dem nördlichen Wendekreis", "Durch Erdbeben", "Durch den Mond", "Zufall"], correct: 0, exp: "Die Sonne zieht die Tiefdruckrinne nach Norden." },
                    { q: "Welcher Wind weht im indischen Winter?", options: ["Trockener Nordost-Passat", "Feuchter Südwestwind", "Südwind", "Hurrikan"], correct: 0, exp: "Der Wintermonsun bringt kühle, trockene Luft." },
                    { q: "Warum hat das Dekkan-Hochland oft zu wenig Wasser?", options: ["Es liegt im Lee-Schatten der Westghats", "Es liegt am Nordpol", "Es gibt keine Sonne", "Wegen Eisbergen"], correct: 0, exp: "Die Westghats halten den Regen ab." },
                    { q: "Was droht, wenn der Monsun ausbleibt?", options: ["Dürren & Ernteausfälle", "Rekordernten", "Überschwemmung", "Nichts"], correct: 0, exp: "Ohne Monsun drohen Hungerkatastrophen." },
                    { q: "Welcher Ozean liefert die Feuchtigkeit für den Monsun?", options: ["Atlantik", "Pazifik", "Indischer Ozean", "Arktischer Ozean"], correct: 2, exp: "Der Indische Ozean liefert das verdunstete Wasser." }
                ]
            },
            {
                id: 3,
                title: "Wirtschaftssektoren & Strukturwandel",
                subtitle: "Sektoren, Tertiarisierung & IT-Boom",
                icon: "fa-chart-pie",
                color: "from-emerald-500 to-teal-600",
                badge: "Level 3",
                summary: "Verstehe die 3 Wirtschaftssektoren und den Wandel zur Dienstleistungsgesellschaft (Tertiarisierung).",
                simple: "Indien hat eine Besonderheit: Es übersprang die klassische Industriephase teilweise und entwickelte sich direkt zu einer weltweiten IT- & Dienstleistungsmacht.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-emerald-900 block text-sm">Die 3 Wirtschaftssektoren:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Primärer Sektor (Landwirtschaft):</strong> Beschäftigt über 40 % der Inder, erzeugt aber nur ca. 15 % des BIP.</li>
                            <li><strong>Sekundärer Sektor (Industrie):</strong> Textil- und Autoindustrie („Make in India“).</li>
                            <li><strong>Tertiärer Sektor (Dienstleistungen & IT):</strong> Erzeugt über 50 % des BIP! (Software, Callcenter, Banken).</li>
                        </ul>
                        <p class="mt-2"><strong>Tertiarisierung:</strong> Der Trend, dass der Dienstleistungssektor immer wichtiger wird.</p>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Anitas Vater arbeitet als Reisbauer auf dem Land. Anita arbeitet in Bangalore in einem Softwarezentrum für europäische Banken.",
                video: { id: "VRh9HlmnnM4", title: "Primärer, Sekundärer und Tertiärer Sektor – Wirtschaftssektoren 2", channel: "Geographie – simpleclub" },
                questions: [
                    { q: "Welcher Sektor erzeugt über 50 % von Indiens Bruttoinlandsprodukt (BIP)?", options: ["Primär", "Sekundär", "Tertiär (Dienstleistungen)", "Quartär"], correct: 2, exp: "Der Dienstleistungssektor dominiert das BIP." },
                    { q: "Welcher Sektor beschäftigt noch die meisten Menschen in Indien?", options: ["Industrie", "Landwirtschaft (Primär)", "Banken", "Tourismus"], correct: 1, exp: "Über 40 % arbeiten in der Landwirtschaft." },
                    { q: "Was bedeutet 'Tertiarisierung'?", options: ["Wandel zur Dienstleistungsgesellschaft", "Rückgang der Städte", "Mehr Bauern", "Schließung von Fabriken"], correct: 0, exp: "Der 3. Sektor gewinnt an Bedeutung." },
                    { q: "Welche Besonderheit zeigt Indiens Entwicklung?", options: ["Direktsprung in die IT-Wirtschaft", "Keine Landwirtschaft", "Keine Autos", "Keine Exporte"], correct: 0, exp: "Indien entwickelte schnell einen starken IT-Sektor." },
                    { q: "Was gehört zum sekundären Sektor?", options: ["Fischerei", "Software", "Industrie & Verarbeitung", "Lehrer"], correct: 2, exp: "Verarbeitendes Gewerbe ist der 2. Sektor." },
                    { q: "Wofür steht die Abkürzung BIP?", options: ["Bruttoinlandsprodukt", "Basis-Industrie-Preis", "Import-Paket", "Bundes-Pass"], correct: 0, exp: "Das BIP misst die Gesamtwirtschaftsleistung." },
                    { q: "Welche Industrie ist in Indien besonders stark?", options: ["Pharmazie & Generika", "Schiffbau im Eis", "Holz im Nordpol", "Uhren"], correct: 0, exp: "Indien ist Großproduzent von Medikamenten." },
                    { q: "Was bezweckt die Initiative 'Make in India'?", options: ["Förderung von Fabriken & Investitionen im Land", "Importverbot", "Abschaffung von Schulen", "Fischfang"], correct: 0, exp: "Ausländisches Kapital soll Fabriken bauen." },
                    { q: "Warum lagern US-Firmen IT-Jobs nach Indien aus?", options: ["Gute Englischkenntnisse & günstige IT-Fachkräfte", "Weil es kalt ist", "Zufall", "Keine Uhren"], correct: 0, exp: "Sprache und IT-Ausbildung sind top." },
                    { q: "Was folgt aus der geringen Wertschöpfung der Landwirtschaft?", options: ["Geringe Einkommen für Bauern", "Super-Reichtum", "Kein Reis", "Verbot von Traktoren"], correct: 0, exp: "Viele Bauern leben nahe der Armutsgrenze." }
                ]
            },
            {
                id: 4,
                title: "Bevölkerung & Push/Pull",
                subtitle: "Landflucht, Wanderarbeiter & Kastensystem",
                icon: "fa-users",
                color: "from-purple-500 to-indigo-600",
                badge: "Level 4",
                summary: "Warum ziehen Millionen Menschen vom Land in die Stadt? Verstehe Push- und Pull-Faktoren sowie das Kastensystem.",
                simple: "Viele Menschen ziehen vom Dorf in die Großstadt, weil sie auf Arbeit und ein besseres Leben hoffen – das nennt man Landflucht.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-purple-900 block text-sm">1. Push- & Pull-Faktoren der Landflucht:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Push-Faktoren (Vom Land wegedrückend):</strong> Armut, Dürre, fehlende Schulen, Kastenunterdrückung.</li>
                            <li><strong>Pull-Faktoren (In die Stadt ziehend):</strong> Arbeitsplätze, Anonymität, Bildung, Aufstiegschancen.</li>
                        </ul>
                        <strong class="text-purple-900 block text-sm mt-3">2. Das Kastensystem:</strong>
                        <p>Hierarchische Gesellschaftsordnung (Brahmanen bis Dalits/Unberührbare). Obwohl verfassungsrechtlich verboten, prägt es das Dorfleben weiter.</p>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Ramesh verlässt sein verarmtes Dorf (Push: Dürre) und zieht nach Mumbai (Pull: Bauarbeiter-Job), um Geld an seine Familie zu schicken.",
                video: { id: "tqfEWZy8ZTo", title: "Push- und Pullfaktoren einfach erklärt (Push-Pull-Modell)", channel: "EinfachSchule" },
                questions: [
                    { q: "Was ist ein Push-Faktor?", options: ["Grund, der vom Land wegtreibt (z.B. Armut, Dürre)", "Anziehungskraft der Stadt", "Schulpflicht", "Sportübung"], correct: 0, exp: "Push-Faktoren drücken Menschen aus der Heimat weg." },
                    { q: "Was ist ein Pull-Faktor?", options: ["Anziehungskraft der Stadt (z.B. Jobs, Hoffnung)", "Fehlende Ärzte im Dorf", "Dürre", "Uberschwemmung"], correct: 0, exp: "Pull-Faktoren ziehen Menschen in die Stadt." },
                    { q: "Wie nennt man die unterste Schicht im traditionellen Kastensystem?", options: ["Brahmanen", "Dalits ('Unberührbare')", "Vaishyas", "Kshatriyas"], correct: 1, exp: "Dalits wurden traditionell benachteiligt." },
                    { q: "Ist Kasten-Diskriminierung laut Indiens Verfassung erlaubt?", options: ["Nein, seit 1950 verboten!", "Ja, überall", "Nur bei Männern", "Ja, in Städten"], correct: 0, exp: "Die Verfassung verbietet Diskriminierung." },
                    { q: "Was machen Hilfsorganisationen wie UNICEF?", options: ["Unterstützung von Schulen & Trinkwasser für arme Kinder", "Autobau", "Verkauf von Handys", "Schulen schließen"], correct: 0, exp: "UNICEF fördert Bildung und Schutz." },
                    { q: "Wer sind Wanderarbeiter?", options: ["Menschen, die befristet woanders arbeiten, um Familien zu ernähren", "Urlauber", "Piloten", "Beamte"], correct: 0, exp: "Sie arbeiten als Tagelöhner in Städten." },
                    { q: "Welches Problem entsteht durch die Landflucht?", options: ["Überfüllung der Megastädte & Slumbildung", "Freie Wohnungen", "Mehr Wälder", "Billiger Strom"], correct: 0, exp: "Städte platzen aus allen Nähten." },
                    { q: "Warum bietet die Großstadt eine Chance für benachteiligte Kasten?", options: ["Anonymität lässt Kastenherkunft in den Hintergrund treten", "Geschenkte Häuser", "Keine Kameras", "Keine Gesetze"], correct: 0, exp: "In der Stadt zählt Leistung mehr als Herkunft." },
                    { q: "Was bedeutet Demographie?", options: ["Bevölkerungswissenschaft & -entwicklung", "Wetterkunde", "Kartenzeichnen", "Gesteinskunde"], correct: 0, exp: "Demographie erforscht die Bevölkerung." },
                    { q: "Welcher Bundesstaat ist stark von Armut & Abwanderung betroffen?", options: ["Bihar", "Zentrum New Delhi", "Strände Goas", "IT-Park Bangalore"], correct: 0, exp: "Bihar ist ein starkes Auswanderungsgebiet." }
                ]
            },
            {
                id: 5,
                title: "Megastädte & Slum-Lösungen",
                subtitle: "Mumbai, Dharavi & 3 Sanierungskonzepte",
                icon: "fa-city",
                color: "from-rose-500 to-pink-600",
                badge: "Level 5",
                summary: "Mumbai ist eine 20-Millionen-Metropole. Die Hälfte der Einwohner lebt in Slums wie Dharavi. Wie sieht die Stadtentwicklung aus?",
                simple: "Mumbai wächst unaufhaltsam. Im Slum Dharavi leben fast 1 Million Menschen auf engstem Raum, erwirtschaften aber auch enorme Eigenleistung.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-rose-900 block text-sm">Die 3 Sanierungskonzepte für Slums:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>1. Site-and-Service:</strong> Staat stellt erschlossenes Land (Wasser/Strom) bereit, Anwohner bauen die Häuser selbst.</li>
                            <li><strong>2. Slumsanierung (In-situ Upgrading):</strong> Siedlung bleibt stehen! Wasserrohre, Strom und feste Wege werden eingebaut.</li>
                            <li><strong>3. Umsiedlung:</strong> Abriss des Slums und Umzug der Bewohner in Betonhaushöfe am Stadtrand.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Durch eine Slumsanierung (In-situ) vor Ort bekam Dharavi feste Abwasserrohre. Die Anwohner behielten ihre Lederwerkstätten und Nachbarn.",
                video: { id: "Y79h3DXhT30", title: "Dharavi in Mumbai: Unterwegs im größten Slum Asiens", channel: "ARD-Morgenmagazin (tagesschau)" },
                questions: [
                    { q: "Wie heißt der bekannteste Slum in Mumbai?", options: ["Dharavi", "Favela", "Bronx", "Soweto"], correct: 0, exp: "Dharavi liegt mitten in Mumbai." },
                    { q: "Was zeichnet Dharavi aus?", options: ["Hohe eigene Wirtschaftskraft (Recycling, Leder)", "Nur Hotels", "Keine Arbeit", "Unbewohnt"], correct: 0, exp: "Dharavi macht ca. 1 Mrd. USD Umsatz." },
                    { q: "Was passiert beim 'Site-and-Service'-Konzept?", options: ["Staat liefert erschlossenes Land, Anwohner bauen selbst", "Abriss ohne Ersatz", "Bau von Luxusvillen", "Freie Autos"], correct: 0, exp: "Erschließung kommt vom Staat, Hausbau selbst." },
                    { q: "Was bedeutet 'Slumsanierung vor Ort' (In-situ)?", options: ["Verbesserung von Wasser/Strom im bestehenden Viertel", "Umsiedlung", "Bau von Flughäfen", "Verkauf an Banken"], correct: 0, exp: "Das Viertel bleibt erhalten." },
                    { q: "Warum ist die Umsiedlung am Stadtrand oft umstritten?", options: ["Verlust der Arbeitsplätze & sozialen Netze vor Ort", "Häuser sind zu schön", "Niemand will Strom", "Keine Fahrstühle"], correct: 0, exp: "Der Arbeitsweg wird zu lang." },
                    { q: "Wie viele Einwohner hat die Region Mumbai etwa?", options: ["2 Millionen", "5 Millionen", "Über 20 Millionen", "100 Millionen"], correct: 2, exp: "Mumbai ist eine Megacity." },
                    { q: "Warum hat Mumbai so wenig Ausdehnungsfläche?", options: ["Es liegt auf einer schmalen Halbinsel", "Es liegt in der Wüste", "Es liegt im Eis", "Zu viele Berge"], correct: 0, exp: "Die Halbinsel begrenzt den Platz." },
                    { q: "Welcher Wirtschaftszweig blüht in Dharavi?", options: ["Plastik-Recycling & Leder", "Flugzeugbau", "Weltraumforschung", "Autos"], correct: 0, exp: "Recycling wird großgeschrieben." },
                    { q: "Was bedeutet 'informeller Sektor'?", options: ["Nicht staatlich registrierte Arbeiten ohne Vertrag", "Großbanken", "Schulunterricht", "Militär"], correct: 0, exp: "Viele Slumbewohner arbeiten ohne Vertrag." },
                    { q: "Welche Gefahr droht in dichten Slums?", options: ["Mangelnde Hygiene & Brandgefahr", "Schneestürme", "Stau auf Autobahnen", "Zu viele Wohnungen"], correct: 0, exp: "Enge Begrenzung begünstigt Seuchen." }
                ]
            },
            {
                id: 6,
                title: "IT, Globalisierung & Solar",
                subtitle: "Bangalore, SWZ, Joint Ventures & Barefoot College",
                icon: "fa-microchip",
                color: "from-blue-600 to-indigo-700",
                badge: "Level 6",
                summary: "Indien als High-Tech-Pionier! Lerne Sonderwirtschaftszonen, Joint Ventures und das Barefoot College kennen.",
                simple: "Bangalore ist das Silicon Valley Indiens. Gleichzeitig gibt es grüne Projekte wie das Barefoot College, wo Dorffrauen zu Solaringenieurinnen ausgebildet werden.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-indigo-900 block text-sm">1. High-Tech & Wirtschaftsförderung:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Bangalore (Bengaluru):</strong> Das IT-Zentrum Indiens.</li>
                            <li><strong>Sonderwirtschaftszone (SWZ):</strong> Gebiete mit niedrigen Steuern zur Anlockung ausländischer Firmen.</li>
                            <li><strong>Joint Venture:</strong> Zusammenschluss ausländischer und indischer Unternehmen.</li>
                        </ul>
                        <strong class="text-indigo-900 block text-sm mt-3">2. Barefoot College (Tilonia):</strong>
                        <p>Ein Projekt, bei dem ungebildete Frauen aus entlegenen Dörfern mithilfe von Farbcodes zu Solaringenieurinnen ausgebildet werden.</p>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Sunita lernt am Barefoot College ohne Lesen/Schreiben nur durch Farbcodes, wie man Solarpanels baut. Danach bringt sie elektrisches Licht in ihr Heimatdorf.",
                videos: [{ id: "e8vq0p05eFE", title: "Barefoot College: Ein Gewinn für Frauen und Natur", channel: "WWF Schweiz" }, { id: "0vrgUpvT5qk", title: "Bangalore: das indische Silicon Valley versinkt im Müll", channel: "DW Deutsch (Global Ideas)" }],
                questions: [
                    { q: "Welche Stadt ist das 'Silicon Valley Indiens'?", options: ["Bangalore (Bengaluru)", "Kalkutta", "Varanasi", "Agra"], correct: 0, exp: "Bangalore ist das IT-Zentrum." },
                    { q: "Was bietet eine Sonderwirtschaftszone (SWZ)?", options: ["Steuervorteile für ausländische Investoren", "Pflicht zu hohen Steuern", "Freies Essen", "Computerverbot"], correct: 0, exp: "Steuern werden gesenkt." },
                    { q: "Was ist ein Joint Venture?", options: ["Zusammenschluss von zwei Firmen für ein Projekt", "Sportart", "Verbot", "Schiff"], correct: 0, exp: "Unternehmen arbeiten zusammen." },
                    { q: "Was lernen Frauen am Barefoot College?", options: ["Bau von Solaranlagen für Dörfer", "Nur Universitätsstoff", "Flugzeuge bauen", "Programmieren für Filme"], correct: 0, exp: "Dorffrauen lernen Solartechnik." },
                    { q: "Warum eignet sich Indien besonders für Solarenergie?", options: ["Sehr viele Sonnenscheintage im Jahr", "Nur Bewölkung", "Kaltes Klima", "Keine Sonne"], correct: 0, exp: "Die Sonneneinstrahlung ist enorm." },
                    { q: "Was ist ein Vorteil indischer IT-Fachkräfte?", options: ["Gute Englischkenntnisse & mathematische Qualifikation", "Alte Schriftsprachen", "Arbeit ohne Lohn", "Nur Nachtarbeit"], correct: 0, exp: "Englisch ist Bildungssprache." },
                    { q: "Welches Ziel hat das Barefoot College?", options: ["Dezentrale Solarenergieversorgung von Dörfern", "Atomkraftwerke bauen", "Kohle verkaufen", "Öl importieren"], correct: 0, exp: "Dörfer bekommen eigenes Licht." },
                    { q: "Was bedeutet Globalisierung?", options: ["Weltweite Verflechtung von Wirtschaft & Kultur", "Isolation", "Regionalisierung", "Verstädterung"], correct: 0, exp: "Märkte vernetzen sich weltweit." },
                    { q: "Was versteht man unter Outsourcing?", options: ["Auslagern von Aufgaben an andere Firmen/Länder", "Importverbot", "Binnenmarkt", "Verstaatlichung"], correct: 0, exp: "Jobs werden verlagert." },
                    { q: "Welcher Vorteil entsteht durch Solarlampen in Dörfern?", options: ["Vermeidung von gefährlichem Kerosinrauch", "Mehr Abgase", "Feldzerstörung", "Plastikmüll"], correct: 0, exp: "Kerosinlampen werden ersetzt." }
                ]
            }
        ];

        // ==========================================
        // DEUTSCH DATA (6 ROADMAP LEVELS)
        // ==========================================
        const deutschLevels = [
            {
                id: 1,
                title: "Die 12 Bausteine nach DIN 5008",
                subtitle: "Struktur & Elemente des Bewerbungsschreibens",
                icon: "fa-file-lines",
                color: "from-indigo-500 to-violet-600",
                badge: "Level 1",
                summary: "Ein professionelles Anschreiben gliedert sich exakt in 12 Bausteine nach DIN 5008.",
                simple: "Ein Bewerbungsschreiben ist wie ein Haus aufgebaut: Es braucht exakt 12 feste Bausteine an der richtigen Stelle, damit es ordentlich und überzeugend wirkt.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-indigo-900 block text-sm">Die 12 Bausteine nach DIN 5008:</strong>
                        <ol class="list-decimal pl-5 space-y-1">
                            <li><strong>Absender:</strong> Name, Adresse, Telefon, seriöse E-Mail.</li>
                            <li><strong>Empfängerfeld:</strong> Firmenname, Ansprechpartner, Adresse.</li>
                            <li><strong>Datum:</strong> Rechtsbündig (z.B. 15. November 2026).</li>
                            <li><strong>Betreffzeile:</strong> Fett gedruckt, OHNE das Wort "Betreff:"!</li>
                            <li><strong>Anrede:</strong> "Sehr geehrte/r Frau/Herr...", gefolgt von einem Komma.</li>
                            <li><strong>Einleitung:</strong> Kleines Erstwort nach dem Komma. Grund der Bewerbung.</li>
                            <li><strong>Hauptteil 1:</strong> Schule, Stärken & Belege durch Praktika/Hobbys.</li>
                            <li><strong>Hauptteil 2:</strong> Motivation für genau dieses Unternehmen.</li>
                            <li><strong>Schlusssatz:</strong> Freude auf das Gespräch (kein Konjunktiv!).</li>
                            <li><strong>Grußformel:</strong> "Mit freundlichen Grüßen" (OHNE Komma danach!).</li>
                            <li><strong>Unterschrift:</strong> Handschriftlich auf dem Papier/Scan.</li>
                            <li><strong>Anlagenvermerk:</strong> Links unten das Wort "Anlagen".</li>
                        </ol>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Philipp Schulz vergisst den Anlagenvermerk ganz unten. Der Betrieb weiß nun nicht, ob Zeugnisse beiliegen oder fehlen.",
                video: { id: "jTkRk_ihYBw", title: "Anschreiben Bewerbung Ausbildung – So geht's richtig!", channel: "Studyflix" },
                questions: [
                    { q: "Steht das Wort 'Betreff:' vor der Betreffzeile?", options: ["Nein, entfällt nach DIN 5008!", "Ja, zwingend", "Nur bei E-Mails", "Egal"], correct: 0, exp: "Das Wort 'Betreff:' wird weggelassen." },
                    { q: "Welches Satzzeichen folgt auf 'Sehr geehrte Frau Müller'?", options: ["Ausrufezeichen !", "Komma ,", "Punkt .", "Keins"], correct: 1, exp: "Auf die Anrede folgt ein Komma." },
                    { q: "Steht nach 'Mit freundlichen Grüßen' ein Komma?", options: ["Ja", "Nein, niemals ein Komma danach!", "Ausrufezeichen", "Strich"], correct: 1, exp: "Kein Satzzeichen nach der Grußformel." },
                    { q: "Wo steht das Datum nach DIN 5008?", options: ["Rechtsbündig", "Zentriert", "Linksbündig", "Ganz unten"], correct: 0, exp: "Das Datum wird rechtsbündig gesetzt." },
                    { q: "Wie viele Bausteine umfasst der DIN 5008 Brief?", options: ["5", "8", "12 Bausteine", "20"], correct: 2, exp: "Es sind 12 feste Bausteine." },
                    { q: "Wo steht der Anlagenvermerk?", options: ["Ganz oben", "Links unten 1 Leerzeile unter dem Namen", "Neben dem Datum", "Im Betreff"], correct: 1, exp: "Ganz unten links." },
                    { q: "Wie lautet eine seriöse E-Mail-Adresse?", options: ["gamer2009@web.de", "vorname.nachname@provider.de", "sweetgirl@gmail.com", "geheim@gmx.de"], correct: 1, exp: "Vor- und Nachname nutzen." },
                    { q: "Wie schreibt man das erste Wort nach der Anrede ('..., ich bewerbe...')?", options: ["Groß", "Klein (außer Nomen/Höflichkeit)", "Fett", "In Klammern"], correct: 1, exp: "Nach dem Komma klein weiterschreiben." },
                    { q: "Was gehört ins Empfängerfeld?", options: ["Eigenes Handy", "Firmenname, Ansprechpartner, Adresse", "Noten", "Hobbys"], correct: 1, exp: "Die vollständige Firmenanschrift." },
                    { q: "Warum ist die Unterschrift wichtig?", options: ["Sie beglaubigt das Anschreiben juristisch", "Nur Deko", "Unwichtig", "Ersetzt das Zeugnis"], correct: 0, exp: "Unterschrift bestätigt Richtigkeit." }
                ]
            },
            {
                id: 2,
                title: "Die 3 Kernfragen im Anschreiben",
                subtitle: "Argumentation im Hauptteil (Philipp Schulz)",
                icon: "fa-circle-question",
                color: "from-blue-600 to-indigo-600",
                badge: "Level 2",
                summary: "Überzeuge den Personalleiter durch Beantwortung der 3 Fragen: Warum der Beruf? Warum ICH? Warum diese Firma?",
                simple: "Der Chef stellt sich beim Lesen 3 Fragen: Warum willst du den Job? Warum bist du geeignet? Und warum bewirbst du dich genau bei ihm?",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-indigo-900 block text-sm">Die 3 Kernfragen im Hauptteil:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Frage 1: Warum dieser Beruf?</strong> Interesse und Leidenschaft begründen.</li>
                            <li><strong>Frage 2: Warum ICH? (Stärken belegen):</strong> Behaupte Stärken nicht nur, sondern BELEGE sie durch Beispiele aus Schule, Hobby oder Praktikum!</li>
                            <li><strong>Frage 3: Warum dieses Unternehmen?</strong> Zeige, dass du dich über den Betrieb informiert hast.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel (Philipp Schulz):</strong> 'Da ich in meiner Freizeit eigenständig mein Mofa warte und Modelle mit Fischertechnik baue, bringe ich ein starkes technisches Verständnis für die Ausbildung bei Super Car mit.'",
                video: { id: "9ceYhXU-9Gs", title: "Anschreiben Schülerpraktikum (mit Beispiel)", channel: "lernfoerderung" },
                questions: [
                    { q: "Welches ist die 1. Kernfrage im Anschreiben?", options: ["Warum möchte ich diesen Beruf erlernen?", "Wie viel Geld kriege ich?", "Wann habe ich Urlaub?", "Wo wohnt der Chef?"], correct: 0, exp: "Motivation für den Beruf." },
                    { q: "Wie belegt man Stärken am besten?", options: ["Durch konkrete Beispiele aus Praktikum/Hobby", "Gar nicht", "Mit 'Ehrlich!'", "Durch Kopieren aus dem Netz"], correct: 0, exp: "Konkrete Beispiele machen Aussagen glaubwürdig." },
                    { q: "Warum soll man sich über die Firma informieren?", options: ["Um die Frage 'Warum diese Firma?' präzise zu beantworten", "Um Fehler zu verstecken", "Unwichtig", "Für den Weg"], correct: 0, exp: "Bezieht sich auf den Betrieb." },
                    { q: "Welcher Satz beantwortet 'Warum ICH?' am besten?", options: ["'Durch mein Praktikum in der Werkstatt konnte ich mein Geschick zeigen.'", "'Ich bin der Beste.'", "'Weil mein Vater das will.'", "'Weiß ich nicht.'"], correct: 0, exp: "Praktikum belegt Stärke." },
                    { q: "Was bewirkt das bloße Aufzählen von Eigenschaftswörtern ohne Beleg?", options: ["Wirkt unglaubwürdig & wie eine Floskel", "Begeistert alle", "Ist DIN-Pflicht", "Spart Papier"], correct: 0, exp: "Floskeln wirken schwach." },
                    { q: "Woher bekommt man Infos über das Unternehmen?", options: ["Firmenwebsite, Azubiyo & Messen", "Märchenbuch", "Gar nicht", "Nachbarn erraten"], correct: 0, exp: "Website und Stellenanzeige nutzen." },
                    { q: "Was zeigt echte Begeisterung?", options: ["Bezug zwischen Hobby/Praktikum und Berufsfeld", "Nennung von Gehalt", "Schulbeschwerde", "Keine Angabe"], correct: 0, exp: "Hobbybezug zeigt Motivation." },
                    { q: "In welchem Briefabschnitt stehen die 3 Kernfragen?", options: ["Im Hauptteil", "Im Absender", "Im Anlagenvermerk", "In der Grußformel"], correct: 0, exp: "Der Hauptteil liefert Argumente." },
                    { q: "Was sollte man im Firmennamen unbedingt vermeiden?", options: ["Rechtschreibfehler", "Lob der Produkte", "Interesse", "Standortnennung"], correct: 0, exp: "Namenfehler wirken unprofessionell." },
                    { q: "Warum ist ein Schülerpraktikum so wertvoll?", options: ["Es belegt erste echte Praxiserfahrungen", "Man bekommt ein Attest", "Schulbefreiung", "Keine Wirkung"], correct: 0, exp: "Praktika belegen Einsatz." }
                ]
            },
            {
                id: 3,
                title: "Der Lebenslauf & Fettnäpfchen",
                subtitle: "Struktur, Fotos & Verbot von Elternberufen",
                icon: "fa-address-card",
                color: "from-teal-500 to-emerald-600",
                badge: "Level 3",
                summary: "Der tabellarische Lebenslauf gibt schnellen Überblick. Vermeide veraltete Angaben wie Elternberufe!",
                simple: "Der Lebenslauf ist deine Übersicht. Er muss übersichtlich in Tabellenform sein. Angaben zu Berufen deiner Eltern gehören heute absolut NICHT mehr hinein!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-emerald-900 block text-sm">Wichtige Lebenslauf-Regeln:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Tabellarischer Aufbau:</strong> Antichronologisch (das Neueste zuerst).</li>
                            <li><strong>Kategorien:</strong> Kontaktdaten, Schulbildung, Praktika, Kenntnisse (Sprachen/EDV), Hobbys.</li>
                            <li><strong>Bewerbungsfoto:</strong> Vom Fotografen (kein Urlaubs-Selfie!).</li>
                            <li><strong>Fettnäpfchen-Verbot:</strong> Elternberufe gehören HEUTE NICHT MEHR in den Lebenslauf!</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Fettnäpfchen (Magdalena Klein):</strong> Magdalena schreibt 'Vater: Bäcker, Mutter: Hausfrau' und verwendet als E-Mail 'partyqueen2009@web.de'. Beides sind No-Gos!",
                video: { id: "MCnaX4kZ8_g", title: "Lebenslauf Ausbildung – so schreibst du ihn richtig!", channel: "Studyflix" },
                questions: [
                    { q: "Gehören Elternberufe noch in den Lebenslauf?", options: ["Nein! Veraltet und ein absolutes Fettnäpfchen", "Ja, zwingend mit Lohn", "Nur der Vater", "Ja, nach DIN"], correct: 0, exp: "Elternberufe entfallen heute!" },
                    { q: "Was zeichnet ein gutes Bewerbungsfoto aus?", options: ["Vom Fotografen mit angemessener Kleidung", "Urlaubs-Selfie", "Fotoautomat mit Freunden", "Keins"], correct: 0, exp: "Seriöses Foto vom Profi." },
                    { q: "Wie ordnet man die Schulbildung an?", options: ["Antichronologisch (Neuestes zuerst)", "Chronologisch (Grundschule oben)", "Alphabetisch", "Nach Noten"], correct: 0, exp: "Antichronologisch ist Standard." },
                    { q: "Welche Hobbys machen sich gut?", options: ["Hobbys mit Bezug zum Beruf oder Ehrenamt", "Zocken 10h/Tag", "Schlafen", "Keine"], correct: 0, exp: "Ehrenamt zeigt Einsatz." },
                    { q: "Wie gibt man Zeiträume an?", options: ["Monat/Jahr (z.B. 08/2024 – 07/2025)", "Nur Wochentage", "Gar keine Zeiten", "Jahreszeiten"], correct: 0, exp: "Monat/Jahr ist Pflicht." },
                    { q: "Was gehört zu den persönlichen Daten?", options: ["Name, Adresse, Telefon, E-Mail, Geburtsdatum", "Schuhgröße", "Passwörter", "Politik"], correct: 0, exp: "Nur Kontaktdaten." },
                    { q: "Wird der Lebenslauf unterschrieben?", options: ["Ja, mit Ort, Datum und Unterschrift ganz unten", "Nein", "Nur vom Lehrer", "Mit Stempel"], correct: 0, exp: "Ort, Datum & Unterschrift schließen ab." },
                    { q: "Was bedeutet 'tabellarisch'?", options: ["Gegliedert in zwei Spalten (Datum / Inhalt)", "Fließtext", "Gedicht", "Excel"], correct: 0, exp: "Zwei Spalten sorgen für Übersicht." },
                    { q: "Was macht man bei Lücken?", options: ["Ehrlich angeben & sachlich erklären", "Lügen", "Übermalen", "Gar nichts sagen"], correct: 0, exp: "Ehrlichkeit ist wichtig." },
                    { q: "Welche Schriftgröße ist ideal?", options: ["11 pt oder 12 pt", "24 pt Riesenschrift", "6 pt Mikroschrift", "Bunt"], correct: 0, exp: "11-12 pt ist Standard." }
                ]
            },
            {
                id: 4,
                title: "Fehler-Analyse aus der Praxis",
                subtitle: "Elias & Magdalena Klein vs. Philipp Schulz",
                icon: "fa-triangle-exclamation",
                color: "from-amber-500 to-rose-500",
                badge: "Level 4",
                summary: "Lerne aus den Fehlern von Elias und Magdalena Klein und orientiere dich an Philipp Schulz.",
                simple: "Wir schauen uns echte Fehler aus den Azubiyo-Arbeitsblättern an, damit du dieselben Patzer in deiner Klausur vermeidest!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-rose-900 block text-sm">Typische Praxis-Fehler:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Elias Klein:</strong> Umgangssprache („Hey Herr Weiß“), Geld als einzige Motivation, schwacher Konjunktiv („Ich würde mich freuen“).</li>
                            <li><strong>Magdalena Klein:</strong> Unseriöse E-Mail, Tippfehler im Betreff, Elternberufe im Lebenslauf.</li>
                            <li><strong>Vorbild (Philipp Schulz):</strong> Einwandfreie DIN 5008 Form, Stärken begründet mit Mofa/Fischertechnik.</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Korrektur:</strong> Elias schreibt: 'Ich will Mechaniker werden weil Autos cool sind.' Richtig lautet es: 'Da mich Fahrzeugtechnik fasziniert und ich in meiner Freizeit Motoren repariere, bewerbe ich mich...'",
                video: { id: "FPJAHV_Xu0w", title: "Die fünf häufigsten Fehler bei der Bewerbung für eine Ausbildung", channel: "IHK Köln" },
                questions: [
                    { q: "Was ist an Elias Kleins Anrede 'Hey Herr Weiß' falsch?", options: ["Umgangssprachlich und unhöflich", "Zu lang", "Nichts", "Falscher Name"], correct: 0, exp: "Umgangssprache ist im Brief tabu." },
                    { q: "Warum ist 'Autos machen Spaß' als Grund zu schwach?", options: ["Zeigt keine Fachkompetenz oder echtes Engagement", "Weil Autos teuer sind", "Flugzeuge sind besser", "Kein Grund"], correct: 0, exp: "Zeigt kein vertieftes Interesse." },
                    { q: "Welchen Fehler macht Magdalena bei der E-Mail?", options: ["Unseriöse Adresse ('partyqueen')", "Nutzt ihren Namen", "Zu kurz", "Keine E-Mail"], correct: 0, exp: "Fantasie-Namen wirken unseriös." },
                    { q: "Warum ist 'Ich würde mich freuen' schwach?", options: ["Drückt Unsicherheit durch Konjunktiv aus", "Unhöflich", "Zu lang", "Verboten"], correct: 0, exp: "Konjunktiv wirkt zögerlich." },
                    { q: "Wie macht es Philipp Schulz besser?", options: ["Belegt Eignung mit konkreten Freizeitbeispielen (Mofa/Fischertechnik)", "Schickt Schokolade", "Ruft 100x an", "Schreibt nichts"], correct: 0, exp: "Konkrete Freizeitbeispiele belegen Talent." },
                    { q: "Was passiert bei vielen Rechtschreibfehlern?", options: ["Bewerbung wird meist direkt aussortiert", "Extra-Punkte", "Egal", "Chef korrigiert"], correct: 0, exp: "Fehler zeigen Schlampigkeit." },
                    { q: "Warum ist eine passive Haltung schädlich?", options: ["Signalisiert fehlende Motivation", "Höflich", "Spart Text", "Vorgeschrieben"], correct: 0, exp: "Betriebe suchen Motivierte." },
                    { q: "Welcher Begriff meint das fehlerhafte Fehlen von Zeugnissen?", options: ["Unvollständigkeit", "DIN-Norm", "Layout-Vorteil", "Bonus"], correct: 0, exp: "Fehlende Anlagen wirken nachlässig." },
                    { q: "Warum sollte man Vorlagen aus dem Internet nicht 1:1 kopieren?", options: ["Personaler erkennen Standardfloskeln sofort", "Illegal", "Zu kurz", "Schrift ist gelb"], correct: 0, exp: "Kopierte Texte wirken unpersönlich." },
                    { q: "Was zeigt eine individuelle Bewerbung?", options: ["Dass man sich ernsthaft mit der Stelle befasst hat", "Dass man viel Zeit hat", "Nichts", "Keine Hilfe"], correct: 0, exp: "Mühe steigert die Chancen enorm." }
                ]
            },
            {
                id: 5,
                title: "Sprache, Stil & Überzeugungskraft",
                subtitle: "Aktiv-Sätze, Konjunktiv-Verbot & Höflichkeitsform",
                icon: "fa-bullhorn",
                color: "from-rose-500 to-pink-600",
                badge: "Level 5",
                summary: "Schreibe selbstbewusst! Verzichte auf das Wort 'würde' und nutze die Höflichkeitsform (Sie / Ihr).",
                simple: "Vermeide Verunsicherungs-Wörter wie 'würde', 'könnte' oder 'hätte'. Schreibe aktiv im Präsens und schreibe Höflichkeitswörter (Sie / Ihr) immer groß!",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-rose-900 block text-sm">Stilregeln für die Klausur:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Konjunktiv-Verbot:</strong> Statt "Ich würde mich freuen" ➔ "Ich freue mich auf Ihr Gespräch".</li>
                            <li><strong>Aktiv-Verben:</strong> Nutze Wörter wie <em>organisieren, reparieren, unterstützen, entwickeln</em>.</li>
                            <li><strong>Höflichkeitsform:</strong> Alle Anredepronomen werden GROSS geschrieben (<em>Sie, Ihr, Ihnen, Ihre</em>).</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Stil-Vergleich:</strong><br>❌ <em>Schlecht:</em> Ich würde gerne bei Ihnen arbeiten.<br>✅ <em>Besser:</em> Gerne überzeuge ich Sie bei einem Praktikum in der Praxis Dr. Weiß von meinen Fähigkeiten.",
                video: { id: "FSt9Gewb1AM", title: "Anredepronomen – Groß- oder Kleinschreibung? So geht das.", channel: "Frau Weber digital" },
                questions: [
                    { q: "Warum sollte man den Konjunktiv ('würde') vermeiden?", options: ["Er wirkt unsicher und zögerlich", "Er ist grammatikalisch falsch", "Er verbraucht Tinte", "Zu laut"], correct: 0, exp: "Bestimmte Sätze wirken selbstbewusst." },
                    { q: "Wie schreibt man das Anredepronomen 'Sie' im Brief?", options: ["Immer großgeschrieben ('Sie', 'Ihre')", "Immer klein", "In Klammern", "Egal"], correct: 0, exp: "Höflichkeitsanreden werden großgeschrieben." },
                    { q: "Wandle um: 'Ich würde mich über eine Antwort freuen.'", options: ["'Über eine Antwort freue ich mich sehr.'", "'Vielleicht antworten Sie ja.'", "'Ich könnte mich freuen.'", "'Ich will eine Antwort.'"], correct: 0, exp: "Präsens wirkt aktiv und dynamisch." },
                    { q: "Was zeichnet eine aktive Formulierung aus?", options: ["Nutzung handlungsstarker Verben (z.B. 'ich unterstütze')", "Passivkonstruktionen", "Wörter wie 'vielleicht'", "Keine Verben"], correct: 0, exp: "Aktive Verben zeigen Tatkraft." },
                    { q: "Welches Wort ist eine leere Floskel?", options: ["'Ich bin teamfähig' (ohne Beispiel)", "'Im Praktikum wartete ich Motoren'", "15.11.2026", "Sehr geehrte Damen"], correct: 0, exp: "Behauptungen ohne Beleg sind Floskeln." },
                    { q: "Wie heißt die korrekte Berufsbezeichnung für den KFZ-Mechaniker?", options: ["Kraftfahrzeugmechatroniker/in", "Autoflicker", "PKW-Mann", "Wagenwart"], correct: 0, exp: "Offizielle Berufsbezeichnung nutzen." },
                    { q: "Was bedeutet präzise Sprache?", options: ["Klar formulierte Sätze ohne Füllwörter", "50 Wörter pro Satz", "Fremdwörter erfinden", "Stichpunkte"], correct: 0, exp: "Kurze Sätze erhöhen Lesbarkeit." },
                    { q: "Welcher Satz zeigt Eigeninitiative?", options: ["'Während meines Praktikums übernahm ich eigenverantwortlich die Kundenanmeldung.'", "'Man hat mich an die Kasse gesetzt.'", "'Ich saß dort rum.'", "'Ich würde arbeiten.'"], correct: 0, exp: "'Übernahm eigenverantwortlich' zeigt Einsatz." },
                    { q: "Welche Wirkung erzeugt das Wort 'gerne' am Satzanfang?", options: ["Freundlichkeit & positive Motivation", "Aggressivität", "Unsicherheit", "Trauer"], correct: 0, exp: "'Gerne bringe ich mich ein...' wirkt motiviert." },
                    { q: "Warum sind Bandwurmsätze ungünstig?", options: ["Sie erschweren das Verständnis beim Lesen", "Sie sehen schön aus", "Sie sparen Zeilen", "Sie sind verboten"], correct: 0, exp: "Personaler lesen Anschreiben zügig." }
                ]
            },
            {
                id: 6,
                title: "Formatierung & DIN 5008 Ränder",
                subtitle: "Seitenränder, Schriftarten & Abstände",
                icon: "fa-ruler-combined",
                color: "from-blue-600 to-indigo-700",
                badge: "Level 6",
                summary: "Die DIN 5008 legt fest, wie viel Zentimeter Rand gelassen werden müssen.",
                simple: "Damit der Brief perfekt aussieht und genau ins Fenster des Usumschlags passt, müssen Ränder und Schriftgrößen genau eingehalten werden.",
                text: `
                    <div class="space-y-3 text-xs md:text-sm text-slate-700">
                        <strong class="text-indigo-900 block text-sm">DIN 5008 Formatierungsregeln:</strong>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Seitenränder:</strong> Links 2,5 cm (für Lochung/Heftung), Rechts 2,0 cm.</li>
                            <li><strong>Schriftarten & Größen:</strong> Arial oder Calibri in 11 pt (oder Times New Roman in 12 pt).</li>
                            <li><strong>Zeilenabstand:</strong> 1,15-fach mit 1 Leerzeile zwischen Absätzen.</li>
                            <li><strong>Umfang:</strong> Exakt 1 DIN A4-Seite!</li>
                        </ul>
                    </div>
                `,
                example: "<strong>Praxis-Beispiel:</strong> Moritz Mustermann stellt in Word den linken Rand auf 2,5 cm ein. Dadurch verdeckt die spätere Heftklammer im Ordner keinen einzigen Buchstaben.",
                video: { id: "wDoZcci-tb8", title: "Geschäftsbrief nach DIN 5008 – einfach erklärt", channel: "Gabi Schöttle" },
                questions: [
                    { q: "Wie breit sollte der LINKE Seitenrand nach DIN 5008 sein?", options: ["2,5 cm (Platz zum Abheften)", "1,0 cm", "5,0 cm", "0 cm"], correct: 0, exp: "2,5 cm garantieren Lochungsabstand." },
                    { q: "Welche Schriftgröße empfiehlt sich für Arial?", options: ["11 pt", "8 pt", "18 pt", "24 pt"], correct: 0, exp: "11 pt ist Standard für Arial." },
                    { q: "Wie groß sollte der RECHTE Seitenrand mindestens sein?", options: ["2,0 cm", "0,5 cm", "4,0 cm", "10 cm"], correct: 0, exp: "2,0 cm bieten sauberen Rahmen." },
                    { q: "Welche Schriftart gilt als unpassend?", options: ["Comic Sans MS", "Arial", "Calibri", "Times New Roman"], correct: 0, exp: "Comic Sans wirkt kindisch." },
                    { q: "Welcher Zeilenabstand wird meist genutzt?", options: ["1,15-fach", "3,0-fach", "0,5-fach", "Egal"], correct: 0, exp: "1,15-fach ist ideal lesbar." },
                    { q: "Wie viele Seiten umfasst ein Schüler-Anschreiben?", options: ["Exakt 1 DIN A4-Seite", "3 Seiten", "Halbe Seite", "10 Seiten"], correct: 0, exp: "Maximal 1 DIN A4 Seite." },
                    { q: "Warum nutzt man das Fensterkuvert-Format?", options: ["Damit Absender/Empfänger im Fenster erscheinen", "Weil es bunt ist", "Gibt es nicht", "Spart Marken"], correct: 0, exp: "Adressfeld ist auf Fenster abgestimmt." },
                    { q: "Was passiert bei schlechter Formatierung?", options: ["Brief wirkt unordentlich und macht schlechten Eindruck", "Nichts", "Extra Geld", "Verbrannt"], correct: 0, exp: "Layout ist deine Visitenkarte." },
                    { q: "Wie trennt man Absätze optisch?", options: ["Durch 1 Leerzeile oder 6pt Absatzabstand", "Sterne malen", "Gar nicht", "Unterstreichen"], correct: 0, exp: "Leerzeilen gliedern den Text." },
                    { q: "Welches Dateiformat wählt man beim E-Mail-Versand?", options: ["PDF (Portable Document Format)", "Word .docx", "TXT-Datei", "ZIP"], correct: 0, exp: "PDF sieht überall exakt gleich aus." }
                ]
            }
        ];

        // ==========================================
        // 20 PRAXIS-ÜBUNGEN DATA (DEUTSCH)
        // ==========================================
        const deutschExercises = [
            { id: 1, title: "Übung 1: Betreffzeile nach DIN 5008 korrigieren", task: "Philipp schreibt: <em>'Betreff: Bewerbung als KFZ-Mechatroniker für Sommer 2025'</em>. Korrigiere nach DIN 5008.", sol: "<strong>Musterlösung:</strong><br>1. Das Wort 'Betreff:' entfällt komplett.<br>2. Der Text muss fett gedruckt werden.<br><br><strong>Richtig:</strong><br><strong>Bewerbung um einen Ausbildungsplatz als Kraftfahrzeugmechatroniker zum 01.08.2025</strong>" },
            { id: 2, title: "Übung 2: Anrede korrigieren", task: "Elias schreibt: <em>'Hallo Herr Dr. Weiß,'</em>. Warum ist das falsch und wie lautet die Formel?", sol: "<strong>Musterlösung:</strong> 'Hallo' ist umgangssprachlich. Richtig lautet es:<br><br><strong>Sehr geehrter Herr Dr. Weiß,</strong><br><em>(Danach klein weiterschreiben!)</em>" },
            { id: 3, title: "Übung 3: Stärken belegen (Philipp Schulz)", task: "Wandle <em>'Ich bin handwerklich begabt'</em> in einen Satz über Philipps Hobbys (Mofa/Fischertechnik) um.", sol: "<strong>Musterlösung:</strong><br>'Meine handwerkliche Geschicklichkeit stelle ich regelmäßig bei der Wartung meines eigenen Mofas sowie beim Bau technischer Modelle unter Beweis.'" },
            { id: 4, title: "Übung 4: Einleitungssatz ohne Floskeln", task: "Moritz schreibt: <em>'Hiermit bewerbe ich mich...'</em>. Formuliere einen modernen Einstieg.", sol: "<strong>Musterlösung:</strong><br>'mit großem Interesse habe ich Ihr Stellenangebot auf Azubiyo gelesen. Da mich Fahrzeugtechnik begeistert, bewerbe ich mich bei Ihnen um eine Ausbildungsstelle...'" },
            { id: 5, title: "Übung 5: Fehlerkorrektur Elias Klein", task: "Elias schreibt: <em>'Ich brauche Geld und Autos machen Spaß. Ich würde mich freuen wenn Sie antworten.'</em> Korrigiere den Text.", sol: "<strong>Musterlösung:</strong><br>'Die Arbeit mit moderner Fahrzeugtechnik begeistert mich seit Langem. Über die Gelegenheit zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.'" },
            { id: 6, title: "Übung 6: Fettnäpfchen im Lebenslauf (Magdalena)", task: "Magdalena schreibt: <em>'E-Mail: partyqueen2009@web.de'</em> und <em>'Vater: Karl Klein, Bäcker'</em>. Korrigiere beides.", sol: "<strong>Musterlösung:</strong><br>1. Seriöse E-Mail: <code>magdalena.klein@email.de</code><br>2. Angaben zu Elternberufen komplett streichen!" },
            { id: 7, title: "Übung 7: 2. Kernfrage (Warum DIESE Firma?)", task: "Formuliere einen Satz für eine Bewerbung in der 'Praxis Dr. Weiß'.", sol: "<strong>Musterlösung:</strong><br>'Ihre Praxis genießt in unserer Region einen hervorragenden Ruf für moderne Patientenbetreuung. Sehr gerne möchte ich mein Praktikum bei Ihnen absolvieren...'" },
            { id: 8, title: "Übung 8: Konjunktiv-Verbot", task: "Wandle um: <em>'Ich könnte mir vorstellen, dass ich gut in Ihr Team passen würde.'</em>", sol: "<strong>Musterlösung:</strong><br>'Durch meine Zuverlässigkeit und schnelle Auffassungsgabe werde ich Ihr Team tatkräftig unterstützen.'" },
            { id: 9, title: "Übung 9: DIN 5008 Datumsformatierung", task: "Wie wird das Datum nach DIN 5008 geschrieben?", sol: "<strong>Musterlösung:</strong><br>Ausschreibung: Hamburg, 15. November 2026<br>ISO-Norm: 2026-11-15" },
            { id: 10, title: "Übung 10: Absender & Empfänger Abstände", task: "Wie viele Leerzeilen stehen zwischen Absender/Empfänger und Datum/Betreff?", sol: "<strong>Musterlösung:</strong><br>- Absender zu Empfänger: 3 Leerzeilen.<br>- Datum zu Betreff: 2 Leerzeilen." },
            { id: 11, title: "Übung 11: Anlagenvermerk Platzierung", task: "Wo steht das Wort 'Anlagen'?", sol: "<strong>Musterlösung:</strong><br>Ganz unten am linken Briefrand, exakt 1 Leerzeile unter dem gedruckten Namen." },
            { id: 12, title: "Übung 12: Fehler-Suchbild (Lena Meier)", task: "Korrigiere: <em>'Sehr geehrte Frau Müller. Ich freue mich...'</em>", sol: "<strong>Musterlösung:</strong><br>Nach der Anrede steht ein Komma (kein Punkt!):<br><strong>'Sehr geehrte Frau Müller,<br>ich freue mich...'</strong>" },
            { id: 13, title: "Übung 13: Teamfähigkeit belegen", task: "Zeige deine Teamfähigkeit durch ein Schulbeispiel (z.B. Klassensprecher).", sol: "<strong>Musterlösung:</strong><br>'Als Klassensprecher übernehme ich regelmäßig Verantwortung und sorge für eine gute Zusammenarbeit in unserer Gemeinschaft.'" },
            { id: 14, title: "Übung 14: Bewerbungsfoto Qualitätsmerkmale", task: "Nenne 3 Qualitätsmerkmale für ein gutes Foto.", sol: "<strong>Musterlösung:</strong><br>1. Professioneller Fotograf (kein Selfie).<br>2. Angemessene Kleidung.<br>3. Neutraler Hintergrund." },
            { id: 15, title: "Übung 15: Motivation Einzelhandel", task: "Formuliere einen Hauptteil für ein Praktikum im Supermarkt.", sol: "<strong>Musterlösung:</strong><br>'Im Schulalltag helfe ich beim Kioskdienst. Ich habe Freude am Kundenkontakt und möchte die Abläufe im Warenmanagement kennenlernen.'" },
            { id: 16, title: "Übung 16: Schlusssatz ohne Gehaltsangabe", task: "Dürfen Schüler Gehaltsvorstellungen nennen?", sol: "<strong>Musterlösung:</strong><br>Nein! Schüler nennen keine Gehaltswünsche.<br><strong>Schlusssatz:</strong> 'Über eine Einladung zum Vorstellungsgespräch freue ich mich sehr.'" },
            { id: 17, title: "Übung 17: Layout Schriftarten", task: "Welche Schriftarten sind nach DIN 5008 zulässig?", sol: "<strong>Musterlösung:</strong><br>- Arial / Calibri: 11 pt<br>- Times New Roman: 12 pt" },
            { id: 18, title: "Übung 18: Umgang mit Noten", task: "Soll man schlechte Noten im Lebenslauf weglassen?", sol: "<strong>Musterlösung:</strong><br>Nein, Zeugnisse müssen vollständig sein. Gleiche Schwächen durch Praxisstärken aus." },
            { id: 19, title: "Übung 19: Höflichkeitsanrede Großschreibung", task: "Kritisiere: <em>'Ich möchte bei ihnen arbeiten...'</em>", sol: "<strong>Musterlösung:</strong><br>'Ihnen' muss GROSS geschrieben werden:<br><strong>'Ich möchte bei Ihnen arbeiten...'</strong>" },
            { 
                id: 20, 
                title: "Übung 20 (GROSSE KLAUSUR-ÜBUNG): Vollständiges Anschreiben", 
                task: "<strong>Klausuraufgabe:</strong> Formuliere ein vollständiges Anschreiben für <strong>Philipp Schulz</strong> an die <strong>Super Car GmbH</strong> (z. Hd. Herrn Becker) für eine Ausbildungsstelle als Kraftfahrzeugmechatroniker zum 01.08.2025 mit allen 12 Bausteinen!", 
                sol: `
                    <div class="bg-white p-5 rounded-2xl border border-slate-300 font-mono text-xs text-slate-800 space-y-3">
                        <div class="border-b pb-1">
                            <strong>Philipp Schulz</strong> • Musterstraße 12 • 22083 Hamburg • Tel: 040 / 123456
                        </div>
                        <div>
                            Super Car GmbH<br>z. Hd. Herrn Becker<br>Industriestraße 5<br>22041 Hamburg
                        </div>
                        <div class="text-right text-slate-500">Hamburg, 15. November 2026</div>
                        <div class="font-bold text-slate-900">Bewerbung um einen Ausbildungsplatz als Kraftfahrzeugmechatroniker zum 01.08.2025</div>
                        <div>Sehr geehrter Herr Becker,</div>
                        <div class="space-y-2">
                            <p>mit großem Interesse habe ich Ihr Stellenangebot auf Azubiyo gelesen. Da mich Fahrzeugtechnik seit Jahren begeistert, bewerbe ich mich um eine Ausbildungsstelle in Ihrem Betrieb.</p>
                            <p>Derzeit besuche ich die 8. Klasse der Stadtteilschule Hamburg. Meine Stärken liegen in Physik und Technik. In meiner Freizeit warte ich eigenständig mein Mofa und baue Fischertechnik-Modelle.</p>
                            <p>Die Super Car GmbH ist für hervorragende Ausbildungsqualität bekannt. Sehr gerne möchte ich meine Fähigkeiten in Ihr Werkstatt-Team einbringen.</p>
                            <p>Über eine Einladung zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.</p>
                        </div>
                        <div>Mit freundlichen Grüßen<br><br><em>Philipp Schulz</em><br>Philipp Schulz</div>
                        <div class="font-bold text-slate-500">Anlagen</div>
                    </div>
                ` 
            }
        ];

        // PUZZLE PAIRS DATA
        const puzzleData = {
            erdkunde: [
                { term: "Luv", exp: "Dem Wind zugewandte Regenseite des Gebirges" },
                { term: "Lee", exp: "Dem Wind abgewandte trockene Regenschattenseite" },
                { term: "ITC", exp: "Intertropische Konvergenzzone (Tiefdruckrinne)" },
                { term: "Dharavi", exp: "Bekannter Slum in Mumbai mit hoher Eigenwirtschaft" },
                { term: "Bangalore", exp: "IT- & Hightech-Metropole Indiens" },
                { term: "Barefoot College", exp: "Solar-Ausbildung ländlicher Frauen in Tilonia" },
                { term: "Monsun", exp: "Jahreszeitlich wechselnder feuchter Wind" },
                { term: "Tertiarisierung", exp: "Wandel zur Dienstleistungsgesellschaft" },
                { term: "Sonderwirtschaftszone", exp: "Gebiet mit Steuervorteilen für Investoren" },
                { term: "Dalits", exp: "Benachteiligte Gruppe ('Unberührbare')" }
            ],
            deutsch: [
                { term: "Betreffzeile", exp: "Fett gedruckt, ohne das Wort 'Betreff' davor" },
                { term: "Anrede", exp: "Mit Komma beenden, danach klein weiter" },
                { term: "Konjunktiv-Verbot", exp: "Vermeidung von 'würde', 'könnte', 'hätte'" },
                { term: "DIN 5008", exp: "Norm für Abstände und Ränder im Brief" },
                { term: "Elternberufe", exp: "Haben im Lebenslauf nichts zu suchen!" },
                { term: "Tabellarisch", exp: "Übersichtliche Struktur des Lebenslaufs" },
                { term: "Anlagenvermerk", exp: "Steht 1 Leerzeile unter dem Namen ganz unten" },
                { term: "P.A.U.L. D. 8", exp: "Deutsches Deutschbuch für die 8. Klasse" },
                { term: "Aktive Verben", exp: "Kräftige Formulierungen wie 'organisieren'" },
                { term: "3 Kernfragen", exp: "Warum Beruf? Warum ICH? Warum diese Firma?" }
            ]
        };

        // CHEATSHEET ACCORDION DATA
        const cheatsheetData = {
            erdkunde: [
                { q: "1. Warum ist Indien ein 'Land der Gegensätze'?", a: "<strong>Naturräume:</strong> Eisiger Himalaya im Norden, fruchtbare Ganges-Ebene, trockenes Dekkan-Hochland & Wüste Thar im Westen.<br><strong>Gesellschaft:</strong> Britische Kolonie bis 1947, heute weltweite IT-Supermacht mit wachsender Mittelschicht (300 Mio.) vs. Armut in Slums und ländlichen Dörfern." },
                { q: "2. Wie entsteht der Monsun & was bedeuten Luv & Lee?", a: "<strong>ITC:</strong> Wandert im Sommermonsun (Juni–Sept) nach Norden und saugt feuchte Luftmassen über dem Indischen Ozean an.<br><strong>Luv:</strong> Dem Wind zugewandte Seite der Westghats ➔ extreme Steigungsregen (über 800 mm in Mumbai).<br><strong>Lee:</strong> Dem Wind abgewandte Seite ➔ Regenschatten im Dekkan-Hochland." },
                { q: "3. Welche 3 Wirtschaftssektoren gibt es & was ist Tertiarisierung?", a: "• <strong>Primär (Landwirtschaft):</strong> 40% der Erwerbstätigen, nur 15% BIP.<br>• <strong>Sekundär (Industrie):</strong> Textil, Pharma & Auto ('Make in India').<br>• <strong>Tertiär (Dienstleistung & IT):</strong> Erzeugt über 50% des BIP!<br>• <strong>Tertiarisierung:</strong> Der Wandel hin zur Dienstleistungs- und Wissensgesellschaft." },
                { q: "4. Was sind Push- und Pull-Faktoren bei der Landflucht?", a: "• <strong>Push (Vom Land wegedrückend):</strong> Armut, Dürre, Arbeitslosigkeit, Kastenunterdrückung.<br>• <strong>Pull (In die Stadt ziehend):</strong> Hoffnung auf Jobs, Bildung, Anonymität im Kastensystem." },
                { q: "5. Welche 3 Konzepte gibt es zur Slum-Sanierung?", a: "1. <strong>Site-and-Service:</strong> Erschlossener Baugrund (Wasser/Strom) vom Staat, Hausbau in Eigenleistung.<br>2. <strong>In-situ Upgrading (Sanierung vor Ort):</strong> Viertel bleibt stehen; Trinkwasser, Abwasser und feste Wege werden eingebaut.<br>3. <strong>Umsiedlung:</strong> Abriss des Slums und Umzug der Anwohner in Betonblöcke am Stadtrand." }
            ],
            deutsch: [
                { q: "1. Was sind die wichtigsten Anrede- & Grußformel-Regeln?", a: "• <strong>Anrede:</strong> <em>'Sehr geehrte/r Frau/Herr...,'</em> ➔ Folgewort KLEIN weiterschreiben (außer Nomen/Höflichkeit).<br>• <strong>Grußformel:</strong> <em>'Mit freundlichen Grüßen'</em> ➔ KEIN Komma danach!" },
                { q: "2. Welche Regeln gelten für die Betreffzeile?", a: "Die Betreffzeile wird FETT gedruckt. Das Wort 'Betreff:' entfällt nach DIN 5008 komplett! Sie gibt exakt die angestrebte Stelle und den Starttermin an." },
                { q: "3. Was ist das Konjunktiv-Verbot im Schlusssatz?", a: "Vermeide Verunsicherungs-Wörter wie 'würde', 'könnte', 'hätte'. Schreibe bestimmt im Präsens: 'Über eine Einladung zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.'" },
                { q: "4. Gehören Elternberufe in den Lebenslauf?", a: "NEIN! Angaben zu Berufen der Eltern sind veraltet und gelten in modernen Bewerbungen als absolutes Fettnäpfchen." },
                { q: "5. Welche Ränder & Schriftgrößen schreibt die DIN 5008 vor?", a: "• <strong>Seitenränder:</strong> Links 2,5 cm (für Lochung/Heftung), Rechts 2,0 cm, Oben 2,5 cm, Unten 1,5 cm.<br>• <strong>Schriftarten:</strong> Arial / Calibri (11 pt) oder Times New Roman (12 pt)." }
            ]
        };
