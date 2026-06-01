/*
  Ons Paradijsje dashboard content
  ------------------------------------------------------------
  This file is the source-context layer.
  Change text here, add new cards here, or move cards around by
  reordering the objects inside DASHBOARD_CONTENT.cards.

  No card has a click action. Everything is rendered as static UI.
*/

window.DASHBOARD_CONTENT = {
  hero: {
    tag: "Modular house dashboard",
    titleLines: ["Ons", "Paradijsje"],
    subtitle: "Eat. Sleep. Janken. Repeat. Althans, totdat ik weer terugkom om jouw huisvrouwtje te zijn.",
    greeting: "Hallow Poetsjiepoeh c3 dit zijn niet per se de huisregels, gewoon een uitgebreide todo lijst wat ik zoal doe als jij druk geld verdient. Of soms ook niet doe...",
    badge: "Ons Paradijsje"
  },

  cards: [
    {
      type: "countdown",
      layout: "countdown",
      tag: "Poetsjiepoeh",
      title: "Countdown",
      number: "33",
      caption: "days until ü n me ish ushj",
      target: "Target: pretsjul & phoekie",
      chips: [
        { label: "Days left", tone: "neon" },
        { label: "Almost there", tone: "peach" }
      ]
    },

    {
      type: "checklist",
      layout: "checklist",
      tag: "Checkcheck",
      title: "Do these first",
      items: [
        "Open curtains and air the bedroom for 10 minutes.",
        "Keep the kitchen counter clear before bed.",
        "Check dishwasher: start it or empty it if needed.",
        "Make sure laundry is not forgotten in the washing machine.",
        "Lock the front door before sleeping."
      ]
    },

    {
      type: "levels",
      layout: "levels",
      tag: "Huisvrouw ü",
      title: "Consistency\nlevels",
      levels: [
        { label: "Kitchen baseline", value: 90, note: "Counter clear, sink not full, dishwasher handled before bed." },
        { label: "Laundry rhythm", value: 75, note: "Better one small load than a scary mountain later." },
        { label: "Fresh air", value: 70, note: "Short airing moments are enough; do not leave windows open all day." },
        { label: "Calm house rule", value: 95, note: "If something smells weird, looks wet, or beeps: investigate sooner." }
      ]
    },

    {
      type: "instructions",
      layout: "laundry",
      tag: "Instructions de machine lávier",
      title: "Wasnadatwas",
      items: [
        "Normal clothes — 30–40°C",
        "Towels — 60°C",
        "Delicates / nice shirts — 30°C gentle",
        "Bedding — 40–60°C"
      ]
    },

    {
      type: "bullets",
      layout: "shopping",
      tag: "Shopping...",
      title: "Always check these in stock",
      items: ["Muesli", "Yoghurt", "Coffee", "You feel overwhelmed"]
    },

    {
      type: "recipes",
      layout: "recipes",
      tag: "Fast food",
      title: "Easy food recipes",
      recipes: [
        { title: "🍽️ Pasta pesto comfort bowl", time: "15 min", ingredients: "Pasta, Pesto, Tomatoes, Cheese" },
        { title: "🍽️ Rice bowl", time: "20 min", ingredients: "Rice, Egg or tofu, Vegetables, Soy sauce" },
        { title: "🍽️ Oven wraps", time: "18 min", ingredients: "Wraps, Cheese, Beans/chicken, Vegetables" }
      ]
    },

    {
      type: "notes",
      layout: "notes",
      tag: "Brainfarts",
      title: "Short notes",
      notes: [
        { tone: "hot", title: "🧺 I need to do laundry", body: "Please keep the clean and dirty pile separate" },
        { tone: "calm", title: "🍝 I need food", body: "No, tuna with rice is not an option" },
        { tone: "hot", title: "🧽 I should clean", body: "Also your feet...! And you, go in the shower" },
        { tone: "calm", title: "🆘 Something is weird", body: "Jij stinkt. En kook met het brandalarm a.u.b." }
      ]
    },

    {
      type: "numbered",
      layout: "sop",
      tag: "Procedure",
      title: "Daily SOP",
      items: [
        "Open curtains and air the bedroom for 10 minutes.",
        "Keep the kitchen counter clear before bed.",
        "Check dishwasher: start it or empty it if needed.",
        "Make sure laundry is not forgotten in the washing machine.",
        "Lock the front door before sleeping."
      ]
    },

    {
      type: "decisions",
      layout: "decisions",
      tag: "Priorities",
      title: "Decisionssss",
      groups: [
        { chip: "Urgent", chipTone: "peach", title: "Do now", items: ["Wet laundry", "Weird smell", "Unlocked door", "Overflowing trash"] },
        { chip: "Optional", chipTone: "neon", title: "Can wait", items: ["Vacuum if not dirty", "Deep cleaning", "Fancy cooking", "Perfect organization"] }
      ]
    }
  ],

  footer: "Privacy reminder: do not publish exact away-dates, address, alarm codes, spare-key locations, or Wi‑Fi passwords on a public GitHub Pages site."
};
