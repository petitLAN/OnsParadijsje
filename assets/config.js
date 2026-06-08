/* Exported from Ons Paradijsje modular dashboard */
window.HOUSE_CONFIG = {
    "meta": {
        "documentTitle": "Ons Paradijsje — Modular Dashboard",
        "title": "Ons Paradijsje",
        "subtitle": "Eat. Sleep. Janken. Repeat. Althans, totdat ik weer terugkom om jouw huisvrouwtje te zijn.",
        "greeting": "Hallow Poetsjiepoeh c==3 dit zijn niet per se de huisregels, gewoon een uitgebreide todo lijst wat ik zoal doe als jij druk geld verdient. Of soms ook niet doe...",
        "helper": "",
        "heroLabel": "For Ushj",
        "countdownTarget": "2026-06-30"
    },
    "ui": {
        "toolbar": {
            "ariaLabel": "Dashboard tools",
            "editorToggle": "⚙️ Edit layout",
            "resetLayout": "↺ Reset layout",
            "downloadConfig": "⬇️ Download config.js",
            "copyConfig": "📋 Copy config.js",
            "copySuccess": "Copied config.js source to clipboard.",
            "copyError": "Could not copy automatically. Your browser may block clipboard access here.",
            "note": "Local edits stay in this browser until you export the config."
        },
        "editor": {
            "title": "Interface frames",
            "description": "Move, hide, remove, or replicate the cards. Use “Download config.js” or “Copy config.js” afterwards to save your new order permanently.",
            "addFrame": "Add frame",
            "howTitle": "How this works",
            "howList": [
                "Each card is one frame object in the layout array.",
                "Replicating a card creates a new frame with the same type and content.",
                "Changing width controls its grid span: span-3, span-4, span-5, span-6, span-7, span-8, or span-12.",
                "All visible card titles, tags, and content live in assets/config.js."
            ],
            "resetConfirm": "Reset the layout to the default config order?",
            "hiddenLabel": "hidden",
            "visibleLabel": "visible",
            "showLabel": "Show",
            "hideLabel": "Hide",
            "duplicateLabel": "Duplicate",
            "removeLabel": "Remove",
            "copySuffix": "copy",
            "customFramePlaceholder": "<p>A custom frame. Edit this in the exported config.</p>"
        },
        "footerNote": "Binnenkort zullen we snel weer samen koffie drinken Poetsjiepoeh. ☕☕☕ Poekie en Pretsjul 🥨 (ෆ˙ᵕ˙ෆ)♡ εつ",
        "countdown": {
            "initialText": "Counting down until we see each other again.",
            "dateTag": "30 June",
            "almostTag": "Almost there",
            "manyDaysText": "dagen tot Ü 'N ME ❤️.",
            "targetPrefix": "Target:",
            "daysLeftTag": "Days left",
            "oneDayText": "dag tot Ü 'N ME ❤️.",
            "tomorrowText": "Tomorrow ❤️",
            "almostShortTag": "Almost",
            "todayText": "days left. Today is  Ü 'N ME ❤❤️",
            "todayTag": "Today",
            "completeText": "The countdown is complete. Ü 'N ME again❤️.",
            "completeTag": "Complete"
        }
    },
    "frameTypes": {
        "countdown": "Countdown",
        "checklist": "Checklist",
        "consistency": "Schoonmaken",
        "laundry": "Laundry guide",
        "redFlags": "Red flags",
        "recipes": "Recipes",
        "quickActions": "Note cards",
        "dailySop": "Daily SOP",
        "decisionMatrix": "Decision matrix",
        "rooms": "Room map",
        "dayflow": "Dayflow",
        "kanban": "Kanban",
        "notes": "Notes",
        "customHtml": "Custom HTML"
    },
    "layout": [
        {
            "id": "countdown-main",
            "category": "Love",
            "tag": "Poetsjiepoeh",
            "type": "countdown",
            "title": "Countdown",
            "width": "span-4",
            "enabled": true,
            "source": "reunion"
        },
        {
            "id": "countdown-date-night",
            "category": "Love",
            "tag": "Broederliefde",
            "type": "countdown",
            "title": "Date night",
            "width": "span-4",
            "enabled": true,
            "source": "dateNight"
        },
        {
            "id": "countdown-date-night",
            "category": "Love",
            "tag": "Paniek",
            "type": "countdown",
            "title": "Janken & Uitbrakken",
            "width": "span-4",
            "enabled": false,
            "source": "dateNight2"
        },
        {
            "id": "decision-matrix-copy-mprdrekb",
            "category": "Decisions",
            "tag": "(╯'□')╯︵ ┻━┻",
            "type": "decisionMatrix",
            "title": "Elke Dag",
            "width": "span-12",
            "enabled": true,
            "source": "ElkeDag"
        },
        {
            "id": "daily-first-copy-mprdc6o7",
            "category": "Today",
            "tag": "Checkcheck",
            "type": "checklist",
            "title": "Do these first copy",
            "width": "span-4",
            "enabled": false,
            "source": "daily"
        },
        {
            "id": "consistency",
            "category": "House rhythm",
            "tag": "Huisvrouw ü",
            "type": "consistency",
            "title": "Schoonmaken",
            "width": "span-5",
            "enabled": true
        },
        {
            "id": "laundry",
            "category": "Instructions",
            "tag": "Instructions de machine lávier",
            "type": "laundry",
            "title": "wasnadatwaswas",
            "titleMode": "clip",
            "width": "span-4",
            "enabled": true
        },
        {
            "id": "daily-first",
            "category": "Today",
            "tag": "Check Stocks",
            "type": "checklist",
            "title": "Kaufenn",
            "width": "span-3",
            "enabled": true,
            "source": "ShoppingKaufen"
        },
        {
            "id": "recipes",
            "category": "Food",
            "tag": "Fast Food",
            "type": "recipes",
            "title": "Recepten   Makkelijk   Vreten",
            "width": "span-12",
            "enabled": true
        },
        {
            "id": "red-flags",
            "category": "Shopping",
            "tag": "Shopping...",
            "type": "redFlags",
            "title": "Always check these in stock",
            "width": "span-6",
            "enabled": false,
            "source": "shoppingStock"
        },
        {
            "id": "red-flags-copy-mprdvdun",
            "category": "Shopping",
            "tag": "Find This",
            "type": "redFlags",
            "title": "Gereed-schap",
            "width": "span-3",
            "enabled": true,
            "source": "troubleshooting"
        },
        {
            "id": "red-flags-copy-mprdvdun-copy-mpwl7x4d",
            "category": "Shopping",
            "tag": "Find this",
            "type": "redFlags",
            "title": "Troep",
            "width": "span-3",
            "enabled": true,
            "source": "troubleshooting2"
        },
        {
            "id": "red-flags-copy-mprdvdun-copy-mpwlygxg",
            "category": "Shopping",
            "tag": "Find This",
            "type": "redFlags",
            "title": "Vreten",
            "width": "span-3",
            "enabled": true,
            "source": "troubleshooting3"
        },
        {
            "id": "red-flags-copy-mprdvdun-copy-mpwlygxg-copy-mpwn744l",
            "category": "Shopping",
            "tag": "Find This",
            "type": "redFlags",
            "title": "Slaap-kamer",
            "width": "span-3",
            "enabled": true,
            "source": "troubleshooting4"
        },
        {
            "id": "quick-actions",
            "category": "Notes",
            "tag": "Brainfarts",
            "type": "quickActions",
            "title": "Short Notes",
            "width": "span-12",
            "enabled": true
        },
        {
            "id": "daily-sop",
            "category": "Routine",
            "tag": "Handig",
            "type": "dailySop",
            "title": "Sporttas",
            "width": "span-4",
            "enabled": false,
            "source": "dailySop"
        },
        {
            "id": "countdown-mpwm8g86",
            "type": "countdown",
            "category": "Love",
            "title": "Countdown",
            "width": "span-4",
            "enabled": false,
            "source": "reunion"
        },
        {
            "id": "decision-matrix",
            "category": "Decisions",
            "tag": "Priorities",
            "type": "decisionMatrix",
            "title": "Decisionssss",
            "width": "span-12",
            "enabled": false,
            "source": "housePriorities"
        },
        {
            "id": "decision-matrix-2",
            "category": "Decisions",
            "tag": "Cheaters",
            "type": "decisionMatrix",
            "title": "Spiekbriefjes",
            "width": "span-12",
            "enabled": true,
            "source": "housePriorities2"
        },

        {
            "id": "decision-matrix-single",
            "category": "Decisions",
            "tag": "Urgent only",
            "type": "decisionMatrix",
            "title": "Only urgent",
            "width": "span-4",
            "enabled": false,
            "source": "urgentOnly"
        },
        {
            "id": "decision-matrix-expanded",
            "category": "Decisions",
            "tag": "Three choices",
            "type": "decisionMatrix",
            "title": "House choices",
            "width": "span-8",
            "enabled": false,
            "source": "houseChoices"
        },
        {
            "id": "countdown-homecoming",
            "category": "Love",
            "tag": "Home",
            "type": "countdown",
            "title": "Homecoming",
            "width": "span-4",
            "enabled": false,
            "source": "homecoming"
        },
        {
            "id": "rooms",
            "category": "Rooms",
            "tag": "Rooms",
            "type": "rooms",
            "title": "Room map",
            "width": "span-12",
            "enabled": false
        },
        {
            "id": "dayflow",
            "category": "Routine",
            "tag": "Routine",
            "type": "dayflow",
            "title": "Dayflow",
            "width": "span-12",
            "enabled": false
        },
        {
            "id": "kanban",
            "category": "Routine",
            "tag": "Routine",
            "type": "kanban",
            "title": "Routine Kanban",
            "width": "span-12",
            "enabled": false
        },
        {
            "id": "sweet-notes",
            "category": "Love",
            "tag": "Love",
            "type": "notes",
            "title": "Little notes",
            "width": "span-6",
            "enabled": false
        }
    ],
    "content": {
        "countdowns": {
            "reunion": {
                "targetDate": "2026-06-30",
                "initialText": "Counting down until we see each other again.",
                "dateTag": "30 June",
                "almostTag": "Cute plans soon",
                "manyDaysText": "dagen tot Ü 'N ME ❤️.",
                "targetPrefix": "Target:",
                "daysLeftTag": "Days left",
                "oneDayText": "dag tot Ü 'N ME ❤️.",
                "tomorrowText": "Tomorrow ❤️",
                "almostShortTag": "Almost",
                "todayText": "days left. Today is  Ü 'N ME ❤❤️",
                "todayTag": "Today",
                "completeText": "The countdown is complete. Ü 'N ME again❤️.",
                "completeTag": "Complete"
            },
            "dateNight": {
                "targetDate": "2026-06-25",
                "initialText": "Counting down to da bois.",
                "dateTag": "Date",
                "almostTag": "Almost there",
                "manyDaysText": "dagen tot dat je da bois ziet",
                "oneDayText": "dag tot je de boys ziet",
                "tomorrowText": "Morgen is da bois ❤️",
                "todayText": "Da bois is vandaag ❤️",
                "completeText": "Da bois heb je al gezien ❤️"
            },
            "dateNight2": {
                "targetDate": "2026-06-30",
                "initialText": "Counting down to da bois.",
                "dateTag": "Date",
                "almostTag": "Almost there",
                "manyDaysText": "dagen tot dat je da bois ziet",
                "oneDayText": "dag tot je de boys ziet",
                "tomorrowText": "Morgen is da bois ❤️",
                "todayText": "Da bois is vandaag ❤️",
                "completeText": "Da bois heb je al gezien ❤️"
            },
            "homecoming": {
                "targetDate": "2026-08-01",
                "initialText": "Counting down to coming home.",
                "dateTag": "Home",
                "almostTag": "Almost home",
                "manyDaysText": "days until homecoming.",
                "todayText": "Homecoming day ❤️",
                "completeText": "Homecoming countdown complete ❤️"
            }
        },
        "ShoppingKaufen": [
            "Muesli",
            "Fromage Blanc",
            "Koffie",
            "Brood (met zaad)",
            "Brood (Prix)",
            "Beleg Brie",
            "Beleg Halal Worst",
            "Beleg Serrano",
            "Beleg Rucola",
            "Feeling Overwhelmed"
        ],
        "daily": [
            "Open curtains and air the bedroom for 10 minutes.",
            "Keep the kitchen counter clear before bed.",
            "Check dishwasher: start it or empty it if needed.",
            "Make sure laundry is not forgotten in the washing machine.",
            "Lock the front door before sleeping."
        ],
        "dailySop": [
            "Schone Handdoek",
            "🩲 Schone Onderbroek",
            "👕 SCHOON Shirt",
            "SCHONE Broek",
            "🍍Shampoo ",
            "💦 Waterfles"
        ],
        "everyFewDays": [
            "Take out trash before it becomes a creature.",
            "Swap damp bathroom towels.",
            "Check plants only if soil feels dry.",
            "Vacuum main walking areas if crumbs appear."
        ],
        "weekly": [
            "Wash towels and bedding if needed.",
            "Clean bathroom sink and mirror.",
            "Check fridge for food that should be used soon.",
            "Put things back in their normal spots."
        ],
        "consistencies": [
            {
                "title": "Gasfornuis + Zeefje uitspoelen",
                "detail": "Vliegen die chillen... Graag niet door de gootsteen spoelen...",
                "times": 7,
                "every": 7
            },
            {
                "title": "Stofzuigen",
                "detail": "Ook de restjes op de bank. VOORAL de restjes in de bank...",
                "times": 1,
                "every": 7
            },
            {
                "title": "WC",
                "detail": "Je weet hoe het gaat.",
                "times": 1,
                "every": 7
            },
            {
                "title": "Water filteren",
                "detail": "Samen gebruiken we 4 flessen in de week, inclusief koken, maar misschien dat jij het minder vaak hoeft te doen",
                "times": 1,
                "every": 7
            },
            {
                "title": "Water aan de olijfboom",
                "detail": "Kraanwater is goed, denk ik? eens per week is wel handig... Doe ik ook altijd: zei je weer iets?",
                "times": 1,
                "every": 7
            },
            {
                "title": "Afval Wegbrengen",
                "detail": "Ook als die niet helemaal vol is, dan is het zeker wel vol een dag later. 1 keer per week is wel het fijnst.",
                "times": 1,
                "every": 7
            },
            {
                "title": "Kleding Wassen",
                "detail": "Liefst om de dag iets, doe ik ook altijd... ... Zei je iets?",
                "times": 3,
                "every": 7
            },
            {
                "title": "Beddengoed wassen",
                "detail": "Liefst om de twee weken. Vooral in de zomer! De warme temperaturen.",
                "times": 1,
                "every": 14
            },
            {
                "title": "Wasmachine wassen",
                "detail": "Doe ik vaak eens per maand, omdat de was begint te stinken. 3 Schepjes Percarbonaat in de trommel doen en dan 'Nettoyage Tambour' draaien. Daarna nog een 'Express 15' draaien met 1 groene beker azijn in de trommel.",
                "times": 1,
                "every": 30
            }
        ],
        "laundry": [
            {
                "load": "Witte was",
                "temp": "30°C",
                "detergent": "Robijn wit, links onder in het kastje.",
                "avoidLabel": "Let op:",
                "avoid": [
                    "Magnesium lost niet op in water. Bewerk je oksels wel eerst MET EEN TANDENBORSTEL, want dan schrub je de magnesium van je deo en jouw zweet er fysiek af.",
                    "Altijd aan het wasrek drogen!"
                ]
            },
            {
                "load": "Sport / Zwarte / gekleurde / spijkerbroeken was",
                "temp": "30-40°C",
                "detergent": "Arial black / Revita black, links boven in het kastje.",
                "avoidLabel": "Handig",
                "avoid": [
                    "Sportkleding geeft geen kleur af of neemt andere kleuren op.",
                    "Sportkleding kan daarom gemixt met elke kleur, maarja het stinkt wel.",
                    "Bind altijd de (broek) touwtjes aan elkaar met een dubbele knoop.",
                    "Stinkt de sportkleding 💩? Doe er een chepje Baking Soda bij (Bicarbonate).",
                    "Bicarbonate maakt katoen wel wat croky: wat azijn in de wasverzachter helpt. Helaas loopt dat soms direct uit de bak, idk why, maar is wel heel gepruts, want het mag niet met wasmiddel mengen: dan werkt het niet meer."
                ]
            },
            {
                "load": "Handdoeken + onderbroeken + sokken",
                "temp": "40°C",
                "detergent": "Arial Action Détachante... blabla original, rechts boven in.",
                "avoidLabel": "Simpel:",
                "avoid": [
                    "Dit is de makkelijkste was omtdraaien.",
                    "Kan gewoon in de droger"
                ]
            },
            {
                "load": "Beddengoed",
                "temp": "40–60°C",
                "detergent": "Arial Action Détachante... blabla original, rechts boven in.",
                "avoidLabel": "Insgelijks",
                "avoid": "\"Dit is de makkelijkste was om te draaien.\", \"Kan gewoon in de droger\""
            }
        ],
        "recipes": [
            {
                "name": "Pasta Pesto",
                "time": "15 min",
                "ingredients": [
                    "Pasta",
                    "Pesto (groen)",
                    "Cherry Tomaatjes",
                    "Geraspte kaas",
                    "Rucola (optioneel)"
                ],
                "steps": [
                    "Kook de pasta, giet daarna af",
                    "Mix de pesto in de pan met pasta",
                    "Voeg de tomaatjes toe",
                    "Serveer met de kaas (en evt rucola)"
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Chilli con Carne",
                "time": "30 min",
                "ingredients": [
                    "Rijst",
                    "100ml Tomatenpuree",
                    "Blikje Mais",
                    "Blikje Bonen",
                    "Vriezer Gehakt",
                    "Vriezer UI",
                    "Vriezer Wortel",
                    "Vriezer Paprika"
                ],
                "steps": [
                    "Kook de rijst",
                    "Rul het gehakt met de ui",
                    "Voeg komijn (cumin) toe",
                    "Voeg gochujang/sambal/chili olie toe",
                    "Voeg de vriezer groente toe",
                    "Voeg de blikjes toe",
                    "Voeg een dikke eetlepel tomatenpuree toe",
                    "Serveer met liefde"
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Spagetti Bolognese",
                "time": "20 min",
                "ingredients": [
                    "Spagetti",
                    "100ml Tomatenpure",
                    "Vriezer Gehakt",
                    "Vriezer UI",
                    "Vriezer Wortel",
                    "Vriezer Paprika",
                    "Kaas (optioneel)",
                    "Rode Wijnazijn"
                ],
                "steps": [
                    "Kook de spagetti",
                    "Rul het gehakt met de ui",
                    "Voeg kruiden en zout toe",
                    "Voeg evt gochujang/sambal/chili olie toe",
                    "Voeg de vriezer groente toe",
                    "Voeg een dikke eetlepel tomatenpuree toe",
                    "Serveer met de rode wijnazijn"
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Rijst met Tonijn",
                "time": "8 min",
                "ingredients": [
                    "Rijst",
                    "Tonijn",
                    "Mais",
                    "1 el Zeewier",
                    "Olijven"
                ],
                "steps": [
                    "Kook de rijst",
                    "Rijs gaar? Gooi het blikvoedsel er bij.",
                    "Kook wat water. Doe 1 eetlepel zeewier in een glas.",
                    "Gooi langzaam een beetje heet water bij de zeewier tot het zacht is.",
                    "Serveer de prut met zeewier op je bord."
                ],
                "note": ["DOE DE RIJST IN DE KOELKAST ❄️❄️❄️"]
            },
            {
                "name": "Pokebowl Zalm",
                "time": "8 min",
                "ingredients": [
                    "500gr Zalm",
                    "Rijst",
                    "Mais of Perzik",
                    "Avocado",
                    "1 el Zeewier",
                    "Sriracha Mayo",
                    "(Witte Wijn) Azijn"
                ],
                "steps": [
                    "Kook de rijst",
                    "Doe er een zuurtje bij pas als het klaar is.",
                    "Bereid het zeewier voor.",
                    "Bereid de mayo voor waar nodig.",
                    "Snij de zalm. Ontvel waar nodig.",
                    "Snij de avocado.",
                    "Snij de Sriracha Mayo. Grapje.",
                    "Doe de rijst in je serveerbord, druk goed aan.",
                    "Smeer er sriracha mayo overheen.",
                    "Gooi de rest van je eten op de rijst."
                ],
                "note": "DOE DE RIJST IN DE KOELKAST ❄️❄️❄️"
            },
            {
                "name": "Lentejas",
                "time": "10 min",
                "ingredients": [
                    "Stokbroodje of Pistoletjes",
                    "Vriezer liefde vlees",
                    "Ui",
                    "Paprika",
                    "Wortel",
                    "Linzen"
                ],
                "steps": [
                    "Warm de vriezerliefde op.",
                    "Gooi de ui er bij als het vlees ontdooit is.",
                    "Gooi wortel en paprika er bij.",
                    "Gooi UITEGELEKTE linzen er bij.",
                    "Gooi er kruiden bij waar nodig.",
                    "Serveer met wat brood."
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Kip met Rijst",
                "time": "8 min",
                "ingredients": [
                    "Kip",
                    "Paprika",
                    "Ui",
                    "Wortel",
                    "Kikkererwten (klein blik)",
                    "Rijst"
                ],
                "steps": [
                    "Kook de rijst",
                    "Bak de kip op laag vuur.",
                    "Gooi ui en wortel er bij als de kip ontdooit is in de pan.",
                    "Gooi paprika er bij als de ui en wortel zijn ontdooit in de pan.",
                    "Gooi UITGELEKTE kikkererwten er bij. Bij voorkeur een klein blikje, anders de helft van een groot blik.",
                    "(Bij een groot blik, doe de deksel er op en zet in de koelkast. Binnen 3 dagen op maken. Of in vriezer doen.)",
                    "Serveer met rijst."
                ],
                "note": "DOE DE RIJST IN DE KOELKAST ❄️❄️❄️"
            },
            {
                "name": "Asperge Kip",
                "time": "8 min",
                "ingredients": [
                    "Potje asperge",
                    "Kip",
                    "Broccoli",
                    "Provinciale kruiden",
                    "1 el Zout"
                ],
                "steps": [
                    "Kook de rijst en broccoli",
                    "Doe de kip in een pan en open het asperge potje boven de pan. Laat het vuur UIT.",
                    "Giet het water van de asperge bij de kip. Haal de asperges er voorzichtig uit.",
                    "Snijd de asperges OP EEN BORD. Dan kun je na het snijden ook dit sap nog bij de pan doen.",
                    "Snijd de asperge in behapbare stukjes. De toppen zijn zachter dus die kunnen wat langer gesneden. De boothies zijn wat harder, dus die wat fijner snijden.",
                    "Gooi en het in de pan. NU PAS het vuur op laag aan doen.",
                    "Doe er wat zout bij.",
                    "Langzaam begint de kip zachter te worden. Als het binnenste ontdooit is, kun je met twee vorken het uit elkaar trekken.",
                    "Doe 1 kipstuk op hetzelfde aspergebord. Trek de kip uit elkaar met 2 vorken. 💦💦💦 In de pan spettert het en dat doet au au. De kip mag nog wat rood zijn.",
                    "Gooi de losse stukken terug in de pan. Pak dan pas de volgende en trek deze los. Doe om en om alle stukken.",
                    "Laat de kip borrelen tot het gaar is, maar laat het niet overkoken. Dan wordt het droog.",
                    "Serveer met rijst en broccoli."
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Visschotel V1",
                "time": "8 min",
                "ingredients": [
                    "1 potje Vriezerliefde Saus",
                    "1/2 Vismix (1/4 Muti di Mare)",
                    "Broccoli (optioneel)"
                ],
                "steps": [
                    "Warm de saus op met venkel er in.",
                    "Doe de vismix er bij. Eventueel broccoli er bij voor extra vriendjes.",
                    "Voeg nog zout toe of extra kruiden naar smaak.",
                    "Serveer"
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Visschotel V2",
                "time": "8 min",
                "ingredients": [
                    "1 potje Vriezerliefde Venkel (Sonduh Saus)",
                    "Ricotta 250 gr",
                    "1/2 Vismix (1/4 Muti di Mare)",
                    "Broccoli (optioneel)"
                ],
                "steps": [
                    "Doe de Vriezerliefde in de pan. De ricotta kan er ook wel direct bij.",
                    "Doe de vismix er bij. Eventueel broccoli er bij voor extra vriendjes.",
                    "Voeg nog zout toe of extra kruiden naar smaak.",
                    "Serveer"
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            },
            {
                "name": "Broccoli schotel",
                "time": "8 min",
                "ingredients": [
                    "Broccoli",
                    "Cherry Tomaatjes",
                    "Witte Bonen of kipfiletblokjes",
                    "Ricotta",
                    "Paprika",
                    "UI",
                    "Pasta naar keuze",
                    "Rucola (optioneel)",
                    "Knoflook"
                ],
                "steps": [
                    "Bak de ui (evt met kipfilet blokjes). Gooi er knoflook, zout en de ricotta bij.",
                    "Doe de pasta en broccoli er bij en laat het sudderen tot het gaar is. Doe er water bij waar nodig.",
                    "Gooi de witte bonen en cherry tomaatjes er bij om op te warmen.",
                    "Serveer met rucola."
                ],
                "note": "Mij een appje sturen dat je lekker hebt gekookt ❤️"
            }
        ],
        "quickActions": [
            {
                "title": "I need to do laundry",
                "emoji": "🧺",
                "description": "Houd alsjeblieft de schone en vieze kleding gescheiden..."
            },
            {
                "title": "I need food",
                "emoji": "🍝",
                "description": "Nee, tonijn met rijst is geen optie. Pizza ook niet."
            },
            {
                "title": "I should clean",
                "emoji": "🧽",
                "description": "Ook je vieze voetjes...! En jij, ga douchen!"
            },
            {
                "title": "Something sounds weird",
                "emoji": "🆘",
                "description": "Jij stinkt. En kook met het brandalarm a.u.b."
            },
            {
                "title": "Chocolade broodje",
                "emoji": "🍞",
                "description": "1 broodje met chocopasta!! Meer? -> eet avondeten"
            },
            {
                "title": "Tape op de wand is niet raar",
                "emoji": "✂️",
                "description": "De tap zit daar om te voorkomen dat de potloden op de wand tekenen... Er zitten al wat krasje op helaas."
            },
            {
                "title": "De Muismat is heilig ",
                "emoji": "🖱️",
                "description": "Kruimels = vlekken = schimmel = er niet uit te wassen. Wat voor papier dan ook er onder is fine."
            },
            {
                "title": "Jus op een bordje snijden",
                "emoji": "🍽️",
                "description": "Zuur trekt in het hout. Hout not likey."
            },
            {
                "title": "Toilet dicht doen",
                "emoji": "🚽",
                "description": "Als ik terug kom hoef ik niet van het riool te genieten"
            },
            {
                "title": "Raam dicht doen",
                "emoji": "🪟",
                "description": "Anderen hoeven me niet achterna"
            }
        ],
        "decisionMatrices": {
            "ElkeDag": [
                {
                    "label": "'s ochtends",
                    "labelClass": "warn",
                    "title": "Tas Inpakken",
                    "items": [
                        "",
                        "Fruit",
                        "Brood",
                        "Jus",
                        "Mij goedemorgen appen ❤️, appen dat je veilig bent aangekomen ❤️"
                    ]
                },
                {
                    "label": "'s avonds'",
                    "labelClass": "ok",
                    "title": "Tas Uitpakken!!!",
                    "items": [
                        "Sportkleding. Ja Tom. Jij stinkt.",
                        "Alvast flesje jus in de koelkast!",
                        "Kleding uit doen",
                        "In Poekie hoekje zitten, mij een foto appen ❤️"
                    ]
                }
            ],
            "housePriorities2": [
                {
                    "label": "💪 Handig 💪",
                    "labelClass": "blue",
                    "title": "Sporttas 🏋️‍♂️",
                    "items": [
                        "🚿 Schone Handdoek",
                        "🩲 Schone Onderbroek",
                        "👕 SCHOON Shirt",
                        "👖 SCHONE Broek",
                        "🍍 Shampoo ",
                        "💦 Waterfles"
                    ]
                },
                {
                    "label": "ᕙ(  •̀ ᗜ •́  )ᕗ",
                    "labelClass": "ok",
                    "title": "Op dah fietsss 🚴‍♂️",
                    "items": [
                        "🤠 Helm",
                        "🧤 Handschoenen",
                        "🕶️ Bril ",
                        "🪪 Cern pas",
                        "🔑 Sleutels",
                        "🎧 Oortjes",
                        "📱 Tellie "
                    ]
                },
                {
                    "label": "Vreten",
                    "labelClass": "warn",
                    "title": "Let op lunch",
                    "items": [
                        {
                            "emoji": "🧊",
                            "text": "Brood bederft binnen 2 dagen! Snel in viezer stoppen als je die gekocht hebt"
                        },
                        {
                            "emoji": "❄️",
                            "text": "Beste is bevroren brood 's ochtends meenemen, want dan blijft het beleg goed koud."
                        },
                        {
                            "emoji": "🏜️",
                            "text": "Brood in de koelkast droogt uit."
                        }
                    ]
                },
                {
                    "label": "(ෆ˙ᵕ˙ෆ)♡",
                    "labelClass": "ok",
                    "title": "Oksel Prut spul Mengen",
                    "items": [
                        {
                            "emoji": "🧴",
                            "text": "Wasmiddel"
                        },
                        {
                            "emoji": "🍚",
                            "text": "Heel veel Bicarbonate (Baking Soda)"
                        }
                    ]
                },
                {
                    "label": "( • ̀ω•́ )✧",
                    "labelClass": "warn",
                    "title": "Meenemen",
                    "items": [
                        {
                            "emoji": "🏖️",
                            "text": "Zonnebrand"
                        },
                        {
                            "emoji": "🕶️",
                            "text": "Zonnebril?"
                        },
                        {
                            "emoji": "👒",
                            "text": "Hoedje"
                        },
                        {
                            "emoji": "🌞",
                            "text": "Poekie Kleedje"
                        },
                        {
                            "emoji": "",
                            "text": "Oordoppen"
                        }
                    ]
                }
            ],
            "urgentOnly": [
                {
                    "label": "urgent",
                    "labelClass": "warn",
                    "title": "Only do this",
                    "items": [
                        "Wet laundry",
                        "Weird smell",
                        "Unlocked door"
                    ]
                }
            ],
            "houseChoices": [
                {
                    "label": "now",
                    "labelClass": "warn",
                    "title": "Do now",
                    "items": [
                        "Wet laundry",
                        "Weird smell"
                    ]
                },
                {
                    "label": "soon",
                    "labelClass": "blue",
                    "title": "Do soon",
                    "items": [
                        "Trash",
                        "Dishwasher"
                    ]
                },
                {
                    "label": "optional",
                    "labelClass": "ok",
                    "title": "Can wait",
                    "items": [
                        "Deep cleaning",
                        "Fancy cooking"
                    ]
                }
            ]
        },
        "rooms": [
            {
                "name": "Kitchen",
                "emoji": "🍳",
                "status": "Needs nightly reset",
                "notes": [
                    "Wipe the counter after cooking.",
                    "Food scraps go in the right bin.",
                    "Do not leave pans soaking forever."
                ]
            },
            {
                "name": "Bathroom",
                "emoji": "🛁",
                "status": "Watch towels",
                "notes": [
                    "Hang towels open so they dry.",
                    "Quickly rinse toothpaste marks.",
                    "Replace toilet paper before it becomes a quest."
                ]
            },
            {
                "name": "Bedroom",
                "emoji": "🛏️",
                "status": "Air briefly",
                "notes": [
                    "Air briefly in the morning.",
                    "Keep laundry off the floor if possible.",
                    "Close windows before leaving."
                ]
            },
            {
                "name": "Living room",
                "emoji": "🛋️",
                "status": "Cozy but not chaotic",
                "notes": [
                    "Cups return to the kitchen.",
                    "Blankets can be cozy, but not chaotic.",
                    "Vacuum if crumbs happen."
                ]
            }
        ],
        "sweetNotes": [
            "You do not need to do everything perfectly.",
            "Future me will be very happy if the laundry machine is empty.",
            "Coffee is allowed. Chaos is negotiable. Mold is not.",
            "Thank you for taking care of our home ❤️"
        ],
        "shoppingStock": [
            "Muesli",
            "Yoghhhurt",
            "Coffee",
            "You feel overwhelmed"
        ],
        "troubleshooting": [
            {
                "problem": "Schaar",
                "fix": "Zijkant van de vriezer"
            },
            {
                "problem": "Schroevendraaiers, steeksleutel, gereedschap",
                "fix": "In de rode tas onder de hoge houten tafel"
            },
            {
                "problem": "Veiligheidsbril",
                "fix": "Kartonnen doos, onderin de hoge houten tafel"
            },
            {
                "problem": "Tape",
                "fix": "Op de vriezer"
            },
            {
                "problem": "Kleine Schroevendraaiers",
                "fix": "???"
            },
            {
                "problem": "Vervangende peertjes",
                "fix": "Derde laadje, hoge kast bij de bank."
            },
            {
                "problem": "Magnus boorspul",
                "fix": "Stoel bij de deur, onder de pc."
            }
        ],
        "troubleshooting2": [
            {
                "problem": "Medicijnen",
                "fix": "Eerste laadje, hoge kast bij de bank."
            },
            {
                "problem": "Medicijnen-Paracetemol",
                "fix": "Houten bureau, platte lade. In een rechthoekig bakje met paarse deksel."
            },
            {
                "problem": "Vervangende batterijen",
                "fix": "Houten bureau lade, links"
            },
            {
                "problem": "Al het terrarium spul",
                "fix": "In de vensterbank naast de koelkst"
            },
            {
                "problem": "Scherp bestek voor vlees als lunch",
                "fix": "Houten bureau lade, rechts."
            }
        ],
        "troubleshooting3": [
            {
                "problem": "Hartige snacks",
                "fix": "Fuet is op de vriezer, Nootjes in het kastje boven de wasbak"
            },
            {
                "problem": "Zoete snacks",
                "fix": "Onderin het kastje, boven de kruiden"
            },
            {
                "problem": "Kruiden",
                "fix": "Onderin het kastje, onder de zoete snacks"
            },
            {
                "problem": "Brood, Muesli, zoet beleg",
                "fix": "Kastje boven het bureau"
            },
            {
                "problem": "Proteine poeder en vitamine pillen",
                "fix": "Kastje boven het bureau, op het bureau zelf."
            },
            {
                "problem": "Chocolade koekjes",
                "fix": "In de koelkast met dit warme weer."
            }
        ],
        "troubleshooting4": [
            {
                "problem": "Mijn Kleding",
                "fix": "Midden"
            },
            {
                "problem": "Jouw Kleding",
                "fix": "Links"
            },
            {
                "problem": "Grote trekking rugzak",
                "fix": "Links boven in"
            },
            {
                "problem": "Tennis spul",
                "fix": "Midden bovenin"
            },
            {
                "problem": "Extra dekbedden",
                "fix": "Midden bovenin"
            },
            {
                "problem": "Dozen en verpakkingen van onze spullen",
                "fix": "Rechts bovenin"
            },
            {
                "problem": "Extra plastic tassen/vriestassen",
                "fix": "Rechts bovenin"
            },
            {
                "problem": "Kerstspul",
                "fix": "Onder het bed, links bij mij"
            },
            {
                "problem": "Trainingsbankje",
                "fix": "Onder het bed, links bij mij"
            },
            {
                "problem": "Rp3 en Arduino electronica",
                "fix": "Onder het bed, rechts bij jou"
            },
            {
                "problem": "Toys",
                "fix": "Onder het bed, rechts bij jou"
            }
        ]
    }
};
