/*
  Ons Paradijsje modular dashboard config
  --------------------------------------
  Main edit points:
  - meta: title and hero text.
  - ui: button labels, editor copy, footer note, countdown wording, and number fun facts.
  - layout: order, card title, card tag, width, type, enabled state, and source.
  - content: checklist text, countdown data, note-card text, recipes, laundry, rooms, decision matrices, etc.

  Decision matrix cards are modular like recipes:
  1. Put matrix data in content.decisionMatrices.
  2. Add/copy a layout frame with type: "decisionMatrix".
  3. Set source to the key of the matrix you want to show.
  4. Add/remove/reorder category objects freely. No urgent/optional hardcoding.
*/
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
            "dateTag": "Days left",
            "almostTag": "Almost there",
            "manyDaysText": "days until we see each other again.",
            "daysLeftTag": "Days left",
            "oneDayText": "day until we see each other again.",
            "tomorrowText": "Tomorrow ❤️",
            "almostShortTag": "Almost",
            "todayText": "days left. Today is the day we see each other again ❤️",
            "todayTag": "Today",
            "completeText": "The countdown is complete. We saw each other again ❤️",
            "completeTag": "Complete",
            "funFactPrefix": "",
            "funFactFallback": "{n} is the exact number of sleeps still waiting in this countdown.",
            "funFacts": {
                "2": "2 is strongly linked to pairs, couples, balance, and partnership. In Chinese culture, there is also the saying that “good things come in pairs.”",
                "3": "3 is the first odd prime number.",
                "4": "4 is a tiny square: 2 × 2.",
                "5": "5 is the number of points on a classic star.",
                "7": "7 is often treated as a lucky number.",
                "8": "8 is a cube: 2 × 2 × 2.",
                "10": "10 is the base of our everyday counting system.",
                "12": "12 is a dozen.",
                "24": "24 is the number of hours in a day.",
                "28": "28 is a perfect number: its divisors add back up to 28.",
                "30": "30 is the number of days in April, June, September, and November.",
                "32": "32 is 2⁵, a neat little power of two.",
                "42": "42 is famously treated as the answer to life, the universe, and everything.",
                "50": "50 is half of 100, so it feels like a tiny milestone.",
                "64": "64 is 8 × 8 and also 2⁶.",
                "100": "100 is a full little century of days."
            }
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
            "id": "daily-first",
            "category": "Today",
            "tag": "Checkcheck",
            "type": "checklist",
            "title": "Do these first",
            "width": "span-8",
            "enabled": true,
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
            "id": "red-flags",
            "category": "Shopping",
            "tag": "Shopping...",
            "type": "redFlags",
            "title": "Always check these in stock",
            "width": "span-3",
            "enabled": true,
            "source": "shoppingStock"
        },
        {
            "id": "red-flags-house",
            "category": "Help",
            "tag": "Home alerts",
            "type": "redFlags",
            "title": "House watchlist",
            "width": "span-4",
            "enabled": false,
            "source": "houseAlerts"
        },
        {
            "id": "red-flags-plants",
            "category": "Plants",
            "tag": "Plant check",
            "type": "redFlags",
            "title": "Plant warning signs",
            "width": "span-4",
            "enabled": false,
            "source": "plantWatch"
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
            "width": "span-6",
            "enabled": true,
            "source": "dailySop"
        },
        {
            "id": "decision-matrix",
            "category": "Decisions",
            "tag": "Priorities",
            "type": "decisionMatrix",
            "title": "Decisionssss",
            "width": "span-6",
            "enabled": true,
            "source": "housePriorities"
        },
        {
            "id": "decision-matrix-2",
            "category": "Decisions",
            "tag": "Priorities",
            "type": "decisionMatrix",
            "title": "Decisions",
            "width": "span-6",
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
        }
    ],
    "content": {
        "countdowns": {
            "reunion": {
                "targetDate": "2026-06-30",
                "initialText": "Counting down until we see each other again.",
                "dateTag": "Days left",
                "almostTag": "Almost there",
                "manyDaysText": "days until we see each other again.",
                "daysLeftTag": "Days left",
                "oneDayText": "day until we see each other again.",
                "tomorrowText": "Tomorrow ❤️",
                "almostShortTag": "Almost",
                "todayText": "days left. Today is the day we see each other again ❤️",
                "todayTag": "Today",
                "completeText": "The countdown is complete. We saw each other again ❤️",
                "completeTag": "Complete",
                "funFacts": {
                    "1": "1 day left means tomorrow is not just tomorrow, it is almost-hug day.",
                    "6": "6 is the smallest perfect number, because 1 + 2 + 3 = 6."
                }
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
            },
            {
                "name": "Quick scrambled eggs",
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
        "redFlagLists": {
            "shoppingStock": {
                "intro": "Things that are annoying when they suddenly run out.",
                "items": [
                    "Muesli",
                    "Yoghurt",
                    "Coffee",
                    "You feel overwhelmed"
                ]
            },
            "houseAlerts": {
                "intro": "These deserve attention before they become annoying.",
                "items": [
                    {
                        "title": "Laundry smells damp",
                        "note": "Rewash it. Do not let it dry halfway in a pile."
                    },
                    {
                        "title": "Kitchen smells weird",
                        "note": "Check trash, sink, dishwasher filter area, and old food."
                    },
                    {
                        "title": "Unlocked door",
                        "note": "Lock it before sleeping or leaving."
                    },
                    {
                        "title": "You feel overwhelmed",
                        "note": "Only do kitchen counter, trash, and laundry-machine check. That already helps."
                    }
                ]
            },
            "plantWatch": {
                "items": [
                    {
                        "emoji": "🌱",
                        "title": "Plant looks sad",
                        "note": "Check soil first. Dry soil: small water. Wet soil: leave it alone."
                    },
                    {
                        "emoji": "🪰",
                        "title": "Tiny flies",
                        "note": "Let soil dry more and check for old wet plant matter."
                    },
                    {
                        "emoji": "☀️",
                        "title": "Leaves bleaching",
                        "note": "It may be too close to bright light."
                    }
                ]
            }
        },
        "decisionMatrices": {
            "housePriorities": [
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
                    "label": "optional",
                    "labelClass": "ok",
                    "title": "Can wait",
                    "items": [
                        "Vacuum if not dirty",
                        "Deep cleaning",
                        "Fancy cooking",
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
                    "labelClass": "blue",
                    "title": "Later",
                    "items": [
                        "Sort old paperwork",
                        "Buy new plant pots"
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
                    "label": "urgent",
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
                    "labelClass": "blue",
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
        ]
    }
};
