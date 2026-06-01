/*
  Ons Paradijsje modular dashboard config
  --------------------------------------
  The site reads this file and builds the dashboard automatically.

  To reshuffle cards: reorder the objects inside layout.
  To remove cards: delete a layout object or set enabled: false.
  To replicate cards: copy a layout object and give it a new id.
  To change card width: use span-3, span-4, span-5, span-6, span-7, span-8, or span-12.
  To group frames: set category, for example category: "Food" or category: "Actions".
  To add quick action cards: use type: "quickActions" and edit content.quickActions.
  To add a custom frame: use type: "customHtml" and put your HTML in html.
*/
window.HOUSE_CONFIG = {
  meta: {
    title: "Ons Paradijsje",
    subtitle: "Sip. Savor. Score. A bold little dashboard for keeping the house playful, clean, and under control.",
    greeting: "Hi love — this is not a rulebook, just the little things that keep the house feeling like home.",
    heroLabel: "Modular house dashboard",
    countdownTarget: "2026-06-30"
  },

  layout: [
    { id: "countdown-main", category: "Love", type: "countdown", title: "Countdown", width: "span-4", enabled: true, targetDate: "2026-06-30" },
    { id: "daily-first", category: "Today", type: "checklist", title: "Do these first", width: "span-8", enabled: true, source: "daily", limit: 5 },
    { id: "consistency", category: "House rhythm", type: "consistency", title: "Consistency levels", width: "span-5", enabled: true },
    { id: "laundry", category: "Instructions", type: "laundry", title: "Laundry guide", width: "span-4", enabled: true },
    { id: "red-flags", category: "Help", type: "redFlags", title: "Red flags", width: "span-3", enabled: true },
    { id: "recipes", category: "Food", type: "recipes", title: "Easy food cards", width: "span-12", enabled: true },
    { id: "quick-actions", category: "Actions", type: "quickActions", title: "Quick actions", width: "span-12", enabled: true },

    /* Extra frames are included but disabled, so you can enable/copy them later. */
    { id: "rooms", category: "Rooms", type: "rooms", title: "Room map", width: "span-12", enabled: false },
    { id: "dayflow", category: "Routine", type: "dayflow", title: "Dayflow", width: "span-12", enabled: false },
    { id: "kanban", category: "Routine", type: "kanban", title: "Routine Kanban", width: "span-12", enabled: false },
    { id: "sweet-notes", category: "Love", type: "notes", title: "Little notes", width: "span-6", enabled: false }
  ],

  content: {
    daily: [
      "Open curtains and air the bedroom for 10 minutes.",
      "Keep the kitchen counter clear before bed.",
      "Check dishwasher: start it or empty it if needed.",
      "Make sure laundry is not forgotten in the washing machine.",
      "Lock the front door before sleeping."
    ],

    everyFewDays: [
      "Take out trash before it becomes a creature.",
      "Swap damp bathroom towels.",
      "Check plants only if soil feels dry.",
      "Vacuum main walking areas if crumbs appear."
    ],

    weekly: [
      "Wash towels and bedding if needed.",
      "Clean bathroom sink and mirror.",
      "Check fridge for food that should be used soon.",
      "Put things back in their normal spots."
    ],

    consistencies: [
      { title: "Kitchen baseline", detail: "Counter clear, sink not full, dishwasher handled before bed.", score: 90 },
      { title: "Laundry rhythm", detail: "Better one small load than a scary mountain later.", score: 75 },
      { title: "Fresh air", detail: "Short airing moments are enough; do not leave windows open all day.", score: 70 },
      { title: "Calm house rule", detail: "If something smells weird, looks wet, or beeps: investigate sooner.", score: 95 }
    ],

    laundry: [
      { load: "Normal clothes", temp: "30–40°C", detergent: "Normal detergent", avoid: "Avoid mixing bright colors with whites." },
      { load: "Towels", temp: "60°C", detergent: "Normal detergent", avoid: "Do not overload; towels need space." },
      { load: "Delicates / nice shirts", temp: "30°C gentle", detergent: "Small amount", avoid: "Do not tumble dry unless label says yes." },
      { load: "Bedding", temp: "40–60°C", detergent: "Normal detergent", avoid: "Dry fully before putting away." }
    ],

    recipes: [
      { name: "Pasta pesto comfort bowl", time: "15 min", ingredients: ["Pasta", "Pesto", "Tomatoes", "Cheese"], steps: ["Boil pasta.", "Save a spoon of pasta water.", "Mix pesto and pasta water.", "Add tomatoes and cheese."], note: "Impossible to ruin, almost." },
      { name: "Rice bowl", time: "20 min", ingredients: ["Rice", "Egg or tofu", "Vegetables", "Soy sauce"], steps: ["Cook rice.", "Fry vegetables.", "Add protein.", "Finish with sauce."], note: "Good fridge-cleaning meal." },
      { name: "Oven wraps", time: "18 min", ingredients: ["Wraps", "Cheese", "Beans/chicken", "Vegetables"], steps: ["Fill wraps.", "Fold and place in oven dish.", "Bake until warm and crispy."], note: "Very good lazy dinner." }
    ],
    quickActions: [
      { title: "I need to do laundry", emoji: "🧺", description: "Pick the load and avoid disasters.", targetFrameId: "laundry" },
      { title: "I need food", emoji: "🍝", description: "Fast recipes with low chaos.", targetFrameId: "recipes" },
      { title: "I should clean", emoji: "🧽", description: "Only the most important reset points.", targetFrameId: "daily-first" },
      { title: "Something is weird", emoji: "🆘", description: "Smells, wet things, sad plants, overwhelm.", targetFrameId: "red-flags" }
    ],

    troubleshooting: [
      { problem: "Laundry smells damp", fix: "Rewash it. Do not let it dry halfway in a pile." },
      { problem: "Kitchen smells weird", fix: "Check trash, sink, dishwasher filter area, and old food." },
      { problem: "Plant looks sad", fix: "Check soil first. Dry soil: small water. Wet soil: leave it alone." },
      { problem: "You feel overwhelmed", fix: "Do only kitchen counter, trash, and laundry-machine check. That already helps." }
    ],

    rooms: [
      { name: "Kitchen", emoji: "🍳", status: "Needs nightly reset", notes: ["Wipe the counter after cooking.", "Food scraps go in the right bin.", "Do not leave pans soaking forever."] },
      { name: "Bathroom", emoji: "🛁", status: "Watch towels", notes: ["Hang towels open so they dry.", "Quickly rinse toothpaste marks.", "Replace toilet paper before it becomes a quest."] },
      { name: "Bedroom", emoji: "🛏️", status: "Air briefly", notes: ["Air briefly in the morning.", "Keep laundry off the floor if possible.", "Close windows before leaving."] },
      { name: "Living room", emoji: "🛋️", status: "Cozy but not chaotic", notes: ["Cups return to the kitchen.", "Blankets can be cozy, but not chaotic.", "Vacuum if crumbs happen."] }
    ],

    sweetNotes: [
      "You do not need to do everything perfectly.",
      "Future me will be very happy if the laundry machine is empty.",
      "Coffee is allowed. Chaos is negotiable. Mold is not.",
      "Thank you for taking care of our home ❤️"
    ]
  }
};
