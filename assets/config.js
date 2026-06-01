/* Exported from Ons Paradijsje modular dashboard */
window.HOUSE_CONFIG = {
  "meta": {
    "documentTitle": "Ons Paradijsje — Modular Dashboard",
    "title": "Ons Paradijsje",
    "subtitle": "Eat. Sleep. Janken. Repeat. Althans, totdat ik weer terugkom om jouw huisvrouwtje te zijn.",
    "greeting": "Hallow Poetsjiepoeh c==3, dit zijn niet per se de huisregels, gewoon een uitgebreide todo lijst... wat ik zoal doe als jij druk geld verdient. Of soms ook niet doe...",
    "helper": "",
    "heroLabel": "Dashboard for Ushj",
    "countdownTarget": "2026-06-30"
  },
  "ui": {
    "toolbar": {
      "ariaLabel": "Dashboard tools",
      "editorToggle": "⚙️ Edit layout",
      "resetLayout": "↺ Reset layout",
      "downloadConfig": "⬇️ Download config.js",
      "note": "Local edits stay in this browser until you export the config."
    },
    "editor": {
      "title": "Interface frames",
      "description": "Move, hide, remove, or replicate the cards. Use “Download config.js” afterwards to save your new order permanently.",
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
      // "targetPrefix": "Target:",
      "daysLeftTag": "Days left",
      "oneDayText": "dagen tot Ü 'N ME ❤️.",
      "tomorrowText": "Mogge ❤️",
      "almostShortTag": "Almost",
      "todayText": "dagen...! Vandaag Ü 'N ME!! ❤️",
      "todayTag": "Vandaag",
      "completeText": "The countdown is complete. We saw each other again ❤️",
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
      "targetDate": "2026-06-30"
    },
    {
      "id": "daily-first",
      "category": "Today",
      "tag": "Checkcheck",
      "type": "checklist",
      "title": "Kaufenn yaaahh",
      "width": "span-8",
      "enabled": true,
      "source": "daily",
      "limit": 5
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
      "id": "red-flags",
      "category": "Shopping",
      "tag": "Shopping...",
      "type": "redFlags",
      "title": "Always check these in stock",
      "width": "span-3",
      "enabled": true
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
      "tag": "procedure",
      "type": "dailySop",
      "title": "Daily SOP",
      "width": "span-4",
      "enabled": true,
      "source": "dailySop"
    },
    {
      "id": "decision-matrix",
      "category": "Decisions",
      "tag": "Priorities",
      "type": "decisionMatrix",
      "title": "Decisionssss",
      "width": "span-8",
      "enabled": true
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
    }
  ],
  "content": {
    "countdowns": {
      "reunion": {
        "targetDate": "2026-06-30",
        "initialText": "Counting down until we see each other again.",
        "dateTag": "30 June",
        "almostTag": "Almost there",
        "manyDaysText": "days until we see each other again.",
        "targetPrefix": "Target:",
        "daysLeftTag": "Days left",
        "oneDayText": "day until we see each other again.",
        "tomorrowText": "Tomorrow ❤️",
        "almostShortTag": "Almost",
        "todayText": "days left. Today is the day we see each other again ❤️",
        "todayTag": "Today",
        "completeText": "The countdown is complete. We saw each other again ❤️",
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
    "daily": [
      // "Open curtains and air the bedroom for 10 minutes.",
      // "Keep the kitchen counter clear before bed.",
      // "Check dishwasher: start it or empty it if needed.",
      // "Make sure laundry is not forgotten in the washing machine.",
      // "Lock the front door before sleeping."
      "Muesli",
      "Yoghurt",
      "Coffee",
      "Brood + Beleg",
      // "Brood Beleg",
      "You feel overwhelmed",
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
        "title": "Stofzuigen",
        "detail": "Ook al je restjes in de bank. VOORAL de restjes in de bank...",
        "score": 90
      },
      {
        "title": "WC",
        "detail": "Je weet hoe het gaat.",
        "score": 90
      },
      {
        "title": "Kleding wassen",
        "detail": "Liefs om de dag iets, maar ik ben ook wel lui.",
        "score": 70
      },
      {
        "title": "Beddengoed wassen",
        "detail": "Liefst om de twee weken. Voral in de zomer zweet je best wel.",
        "score": 50
      },
      {
        "title": "Wasmachine wassen",
        "detail": "Doe ik vaak eens per maand. 3 schepjes percarbonaat in de droger en dan 'Nettoyage Tambour' draaien.",
        "score": 25
      }
    ],
    "laundry": [
      {
        "load": "Witte was",
        "temp": "30°C",
        "detergent": "Robijn wit, links onder in het kastje.",
        "avoid": "Bewerk je oksels wel eerst MET EEN TANDENBORSTEL, want dan schrub je de magnesium van je deo en jouw zweet er uit."
      },{
        "load": "Zwarte/gekleurde/spijkerbroeken was",
        "temp": "30-40°C",
        "detergent": "Arial black / Revita black, links boven in het kastje.",
        "avoid": "Bewerk je oksels wel eerst MET EEN TANDENBORSTEL, want dan schrub je de magnesium van je deo en jouw zweet er uit."
      },
      {
        "load": "Handdoeken+onderbroeken+sokken",
        "temp": "40°C",
        "detergent": "Arial Mounain blabla, rechts boven in.",
        "avoid": "Do not overload; towels need space."
      },
      // {
      //   "load": "Delicates / nice shirts",
      //   "temp": "30°C gentle",
      //   "detergent": "Small amount",
      //   "avoid": "Do not tumble dry unless label says yes."
      // },
      {
        "load": "Beddengoed",
        "temp": "40–60°C",
        "detergent": "Normal detergent",
        "avoid": "Dry fully before putting away."
      }
    ],
    "recipes": [
      {
        "name": "Pasta pesto comfort bowl",
        "time": "15 min",
        "ingredients": [
          "Pasta",
          "Pesto",
          "Tomatoes",
          "Cheese"
        ],
        "steps": [
          "Boil pasta.",
          "Save a spoon of pasta water.",
          "Mix pesto and pasta water.",
          "Add tomatoes and cheese."
        ],
        "note": "Impossible to ruin, almost."
      },
      {
        "name": "Rice bowl",
        "time": "20 min",
        "ingredients": [
          "Rice",
          "Egg or tofu",
          "Vegetables",
          "Soy sauce"
        ],
        "steps": [
          "Cook rice.",
          "Fry vegetables.",
          "Add protein.",
          "Finish with sauce."
        ],
        "note": "Good fridge-cleaning meal."
      },
      {
        "name": "Oven wraps",
        "time": "18 min",
        "ingredients": [
          "Wraps",
          "Cheese",
          "Beans/chicken",
          "Vegetables"
        ],
        "steps": [
          "Fill wraps.",
          "Fold and place in oven dish.",
          "Bake until warm and crispy."
        ],
        "note": "Very good lazy dinner."
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
    "shoppingStock": [
        "Neem 's ochtends een banaan mee. Doe daarna wel de zak dicht, zodat er geen fruitvliegjes in kunnen. Die vinden het leuk om in de stam maden te kweken.",
      "Laat de afval deksel dicht. Zelfde verhaal.",
      "Gasfornuis gebruikt? Nogmaals, zelfde verhaal.",
      "Airfyer? Oven? Maak ze altijd schoon na gebruik. Anders kook je de volgende keer ook met het brandalarm.",
      "Lock the front door before sleeping.",
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
    "decisionMatrix": {
      "doNow": [
        "Wet laundry",
        "Weird smell",
        "Unlocked door",
        "Overflowing trash"
      ],
      "canWait": [
        "Vacuum if not dirty",
        "Deep cleaning",
        "Fancy cooking",
        "Perfect organization"
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
    ]
  }
};
