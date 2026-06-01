/* Exported from Ons Paradijsje modular dashboard */
window.HOUSE_CONFIG = {
  "meta": {
    "documentTitle": "Ons Paradijsje — Modular Dashboard",
    "title": "Ons Paradijsje",
    "subtitle": "Eat. Sleep. Janken. Repeat. Althans, totdat ik weer terugkom om jouw huisvrouwtje te zijn.",
    "greeting": "Hallow Poetsjiepoeh c3 dit zijn niet per se de huisregels, gewoon een uitgebreide todo lijst wat ik zoal doe als jij druk geld verdient. Of soms ook niet doe...",
    "helper": "",
    "heroLabel": "Modular house dashboard",
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
    "footerNote": "Privacy reminder: do not publish exact away-dates, address, alarm codes, spare-key locations, or Wi‑Fi passwords on a public GitHub Pages site.",
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
    "consistency": "Consistency levels",
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
      "id": "decision-matrix-copy-mprdrekb",
      "category": "Decisions",
      "tag": "Priorities",
      "type": "decisionMatrix",
      "title": "Elke Dag",
      "width": "span-8",
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
      "title": "Consistency levels",
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
      "title": "Easy food recipes",
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
      "enabled": true,
      "source": "shoppingStock"
    },
    {
      "id": "red-flags-copy-mprdvdun",
      "category": "Shopping",
      "tag": "Fix this",
      "type": "redFlags",
      "title": "Troubleshooting",
      "width": "span-6",
      "enabled": true,
      "source": "troubleshooting"
    },
    {
      "id": "quick-actions",
      "category": "Notes",
      "tag": "Brainfarts",
      "type": "quickActions",
      "title": "Short Notes",
      "width": "span-7",
      "enabled": true
    },
    {
      "id": "daily-sop",
      "category": "Routine",
      "tag": "procedure",
      "type": "dailySop",
      "title": "Daily SOP",
      "width": "span-5",
      "enabled": true,
      "source": "dailySop"
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
      "tag": "Priorities",
      "type": "decisionMatrix",
      "title": "Decisions",
      "width": "span-6",
      "enabled": false,
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
      "id": "countdown-date-night",
      "category": "Love",
      "tag": "Date night",
      "type": "countdown",
      "title": "Date night",
      "width": "span-4",
      "enabled": false,
      "source": "dateNight"
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
    },
    {
      "id": "countdown-mpu13kfj",
      "type": "countdown",
      "category": "Love",
      "title": "Countdown",
      "width": "span-4",
      "enabled": true,
      "source": "reunion"
    }
  ],
  "content": {
    "countdowns": {
      "reunion": {
        "targetDate": "2026-06-30",
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
      },
      "dateNight": {
        "targetDate": "2026-07-12",
        "initialText": "Counting down to date night.",
        "dateTag": "Date",
        "almostTag": "Cute plans soon",
        "manyDaysText": "days until date night.",
        "todayText": "Date night is today ❤️",
        "completeText": "Date night already happened ❤️"
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
      "Brood + Beleg",
      "Gezonde snackies",
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
      "Open curtains and air the bedroom for 10 minutes.",
      "Keep the kitchen counter clear before bed.",
      "Check dishwasher: start it or empty it if needed.",
      "Make sure laundry is not forgotten in the washing machine.",
      "Lock the front door before sleeping."
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
        "title": "Kitchen baseline",
        "detail": "Counter clear, sink not full, dishwasher handled before bed.",
        "score": 90
      },
      {
        "title": "Laundry rhythm",
        "detail": "Better one small load than a scary mountain later.",
        "score": 75
      },
      {
        "title": "Fresh air",
        "detail": "Short airing moments are enough; do not leave windows open all day.",
        "score": 70
      },
      {
        "title": "Calm house rule",
        "detail": "If something smells weird, looks wet, or beeps: investigate sooner.",
        "score": 95
      }
    ],
    "laundry": [
      {
        "load": "Normal clothes",
        "temp": "30–40°C",
        "detergent": "Normal detergent",
        "avoid": "Avoid mixing bright colors with whites."
      },
      {
        "load": "Towels",
        "temp": "60°C",
        "detergent": "Normal detergent",
        "avoid": "Do not overload; towels need space."
      },
      {
        "load": "Delicates / nice shirts",
        "temp": "30°C gentle",
        "detergent": "Small amount",
        "avoid": "Do not tumble dry unless label says yes."
      },
      {
        "load": "Bedding",
        "temp": "40–60°C",
        "detergent": "Normal detergent",
        "avoid": "Dry fully before putting away."
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
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Pokebowl Zalm",
        "time": "8 min",
        "ingredients": [
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Lentejas",
        "time": "8 min",
        "ingredients": [
          "Stokbroodje",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Kip met Rijst",
        "time": "8 min",
        "ingredients": [
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Asperge Kip",
        "time": "8 min",
        "ingredients": [
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Visschotel",
        "time": "8 min",
        "ingredients": [
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      },
      {
        "name": "Broccoli schotel",
        "time": "8 min",
        "ingredients": [
          "Eggs",
          "Butter",
          "Salt",
          "Pepper"
        ],
        "steps": [
          "Whisk eggs.",
          "Melt butter in pan.",
          "Cook gently, stirring often."
        ],
        "note": "Add cheese or chives if you have them."
      }
    ],
    "quickActions": [
      {
        "title": "I need to do laundry",
        "emoji": "🧺",
        "description": "Please keep the clean and dirty pile separate"
      },
      {
        "title": "I need food",
        "emoji": "🍝",
        "description": "No, tuna with rice is not an option"
      },
      {
        "title": "I should clean",
        "emoji": "🧽",
        "description": "Also your feet...! And you, go in the shower"
      },
      {
        "title": "Something is weird",
        "emoji": "🆘",
        "description": "Jij stinkt. En kook met het brandalarm a.u.b."
      }
    ],
    "decisionMatrices": {
      "ElkeDag": [
        {
          "label": "'s ochtends",
          "labelClass": "warn",
          "title": "Tas Inpakken",
          "items": [
            "Fruit Meenemen",
            "Mij goedemorgen appen ❤️",
            "Mij appen dat je veilig bent aangekomen ❤️"
          ]
        },
        {
          "label": "'s avonds'",
          "labelClass": "ok",
          "title": "Tas Uitpakken!!!",
          "items": [
            "Sportkleding. Ja Tom. Je stinkt.",
            "Flesje jus. Zet die in de week.",
            "Brood smeren?",
            "Mij Appen ❤️"
          ]
        }
      ],
      "housePriorities2": [
        {
          "label": "urgent",
          "labelClass": "warn",
          "title": "Do now",
          "items": [
            "Wet laundry",
            "Weird smell",
            "Unlocked door",
            "Overflowing trash"
          ]
        },
        {
          "label": "pp",
          "labelClass": "ok",
          "title": "Can wait",
          "items": [
            "Vacuum if not dirty",
            "Deep cleaning",
            "Fancy ",
            "Perfect organization"
          ]
        },
        {
          "label": "later",
          "labelClass": "blue",
          "title": "Later",
          "items": [
            "Sort old paperwork",
            "Buy new plant pots"
          ]
        },
        {
          "label": "later",
          "labelClass": "ok",
          "title": "Later",
          "items": [
            "Sort old paperwork",
            "Buy new plant pots"
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
        "problem": "Laundry smells damp",
        "fix": "Rewash it. Do not let it dry halfway in a pile."
      },
      {
        "problem": "Kitchen smells weird",
        "fix": "Check trash, sink, dishwasher filter area, and old food."
      },
      {
        "problem": "Plant looks sad",
        "fix": "Check soil first. Dry soil: small water. Wet soil: leave it alone."
      },
      {
        "problem": "You feel overwhelmed",
        "fix": "Do only kitchen counter, trash, and laundry-machine check. That already helps."
      }
    ],
    "redFlagLists": {
      "shoppingStock": {
        "items": [
          "Muesli",
          "Yoghhhurt",
          "Coffee",
          "You feel overwhelmed"
        ]
      },
      "troubleshooting": {
        "items": [
          {
            "problem": "Laundry smells damp",
            "fix": "Rewash it. Do not let it dry halfway in a pile."
          },
          {
            "problem": "Kitchen smells weird",
            "fix": "Check trash, sink, dishwasher filter area, and old food."
          },
          {
            "problem": "Plant looks sad",
            "fix": "Check soil first. Dry soil: small water. Wet soil: leave it alone."
          },
          {
            "problem": "You feel overwhelmed",
            "fix": "Do only kitchen counter, trash, and laundry-machine check. That already helps."
          }
        ]
      }
    }
  }
};
