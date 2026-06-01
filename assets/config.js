/*
  Ons Paradijsje dashboard content and layout
  -------------------------------------------
  This is the only file you normally edit.

  Add/shuffle cards:
  - Reorder objects in DASHBOARD_CONFIG.layout.
  - Duplicate a layout object and give it a new id.
  - Set span to 3, 4, 5, 6, 7, 8, or 12.
  - Set enabled: false to hide a card without deleting it.

  Edit text:
  - All visible words live inside DASHBOARD_CONFIG.content.
  - Tags/labels are just strings, so every imported card can have its own custom title.

  No cards have click actions. The site only renders static UI from this config.
*/
window.DASHBOARD_CONFIG = {
  meta: {
    title: "Ons Paradijsje",
    heroLabel: "Modular house dashboard",
    subtitle: "Eat. Sleep. Janken. Repeat. Althans, totdat ik weer terugkom om jouw huisvrouwtje te zijn.",
    greeting: "Hallow Poetsjiepoeh c3 dit zijn niet per se de huisregels, gewoon een uitgebreide todo lijst wat ik zoal doe als jij druk geld verdient. Of soms ook niet doe...",
    seal: "Ons Paradijsje",
    footer: "Privacy reminder: do not publish exact away-dates, address, alarm codes, spare-key locations, or Wi‑Fi passwords on a public GitHub Pages site."
  },

  layout: [
    { id: "countdown", type: "countdown", span: 4, content: "countdown", enabled: true },
    { id: "do-first", type: "checklist", span: 8, content: "doFirst", enabled: true },
    { id: "consistency", type: "levels", span: 5, content: "consistency", enabled: true },
    { id: "laundry", type: "laundry", span: 4, content: "laundry", enabled: true },
    { id: "shopping", type: "stock", span: 3, content: "shopping", enabled: true },
    { id: "recipes", type: "recipes", span: 12, content: "recipes", enabled: true },
    { id: "notes", type: "notes", span: 12, content: "notes", enabled: true },
    { id: "daily-sop", type: "sop", span: 6, content: "dailySop", enabled: true },
    { id: "decisions", type: "matrix", span: 6, content: "decisions", enabled: true }
  ],

  content: {
    countdown: {
      label: "Poetsjiepoeh",
      title: "Countdown",
      targetDate: "2026-06-30",
      manualDays: 33,
      text: "days until ü n me ish ushj",
      target: "Target: pretsjul & phoekie",
      chips: ["Days left", "Almost there"]
    },

    doFirst: {
      label: "Checkcheck",
      title: "Do these first",
      items: [
        "Open curtains and air the bedroom for 10 minutes.",
        "Keep the kitchen counter clear before bed.",
        "Check dishwasher: start it or empty it if needed.",
        "Make sure laundry is not forgotten in the washing machine.",
        "Lock the front door before sleeping."
      ]
    },

    consistency: {
      label: "Huisvrouw ü",
      title: "Consistency levels",
      items: [
        { title: "Kitchen baseline", detail: "Counter clear, sink not full, dishwasher handled before bed.", score: 90 },
        { title: "Laundry rhythm", detail: "Better one small load than a scary mountain later.", score: 75 },
        { title: "Fresh air", detail: "Short airing moments are enough; do not leave windows open all day.", score: 70 },
        { title: "Calm house rule", detail: "If something smells weird, looks wet, or beeps: investigate sooner.", score: 95 }
      ]
    },

    laundry: {
      label: "Instructions de machine lávier",
      title: "Wasnadatwas",
      items: [
        "Normal clothes — 30–40°C",
        "Towels — 60°C",
        "Delicates / nice shirts — 30°C gentle",
        "Bedding — 40–60°C"
      ]
    },

    shopping: {
      label: "Shopping...",
      title: "Always check these in stock",
      items: ["Muesli", "Yoghurt", "Coffee", "You feel overwhelmed"]
    },

    recipes: {
      label: "Fast food",
      title: "Easy food recipes",
      items: [
        { name: "Pasta pesto comfort bowl", time: "15 min", ingredients: "Pasta, Pesto, Tomatoes, Cheese", stepsLabel: "Steps" },
        { name: "Rice bowl", time: "20 min", ingredients: "Rice, Egg or tofu, Vegetables, Soy sauce", stepsLabel: "Steps" },
        { name: "Oven wraps", time: "18 min", ingredients: "Wraps, Cheese, Beans/chicken, Vegetables", stepsLabel: "Steps" }
      ]
    },

    notes: {
      label: "Brainfarts",
      title: "Short notes",
      items: [
        { tone: "hot", icon: "🧺", title: "I need to do laundry", text: "Please keep the clean and dirty pile separate" },
        { tone: "calm", icon: "🍝", title: "I need food", text: "No, tuna with rice is not an option" },
        { tone: "hot", icon: "🧽", title: "I should clean", text: "Also your feet...! And you, go in the shower" },
        { tone: "calm", icon: "🆘", title: "Something is weird", text: "Jij stinkt. En kook met het brandalarm a.u.b." }
      ]
    },

    dailySop: {
      label: "Procedure",
      title: "Daily SOP",
      items: [
        "Open curtains and air the bedroom for 10 minutes.",
        "Keep the kitchen counter clear before bed.",
        "Check dishwasher: start it or empty it if needed.",
        "Make sure laundry is not forgotten in the washing machine.",
        "Lock the front door before sleeping."
      ]
    },

    decisions: {
      label: "Priorities",
      title: "Decisionssss",
      columns: [
        { label: "Urgent", title: "Do now", items: ["Wet laundry", "Weird smell", "Unlocked door", "Overflowing trash"] },
        { label: "Optional", title: "Can wait", items: ["Vacuum if not dirty", "Deep cleaning", "Fancy cooking", "Perfect organization"] }
      ]
    }
  }
};
