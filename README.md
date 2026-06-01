# Ons Paradijsje

**Current recommended version:** `v0.20.0`  
**Project type:** static modular dashboard website  
**Primary entry point:** `index.html`  
**Main editable file:** `assets/config.js`  
**Target deployment:** GitHub Pages or any static web host

Ons Paradijsje is a personal, modular house-dashboard website. It is designed as a playful “home manual” that can show reminders, to-do lists, laundry instructions, recipes, countdowns, notes, reusable decision blocks, and other dashboard cards.

The project is intentionally static: there is no backend, database, login system, package build step, or server-side rendering. The site is rendered in the browser from the configuration stored in `assets/config.js`.

---

## Table of contents

1. [Purpose](#purpose)
2. [Important privacy note](#important-privacy-note)
3. [Project structure](#project-structure)
4. [How the dashboard works](#how-the-dashboard-works)
5. [The most important file: `assets/config.js`](#the-most-important-file-assetsconfigjs)
6. [Config structure overview](#config-structure-overview)
7. [The `meta` block](#the-meta-block)
8. [The `layout` array](#the-layout-array)
9. [The `content` block](#the-content-block)
10. [Available modular UI frames/cards](#available-modular-ui-framescards)
11. [How to add, remove, duplicate, reorder, or resize cards](#how-to-add-remove-duplicate-reorder-or-resize-cards)
12. [How to edit each frame type](#how-to-edit-each-frame-type)
13. [Local layout editor](#local-layout-editor)
14. [Local storage behavior](#local-storage-behavior)
15. [GitHub Pages deployment](#github-pages-deployment)
16. [Versioning](#versioning)
17. [Recommended release labels](#recommended-release-labels)
18. [Troubleshooting](#troubleshooting)
19. [Maintenance checklist](#maintenance-checklist)

---

## Purpose

The site is meant to be a small personal dashboard for house-related information, such as:

- things to do today
- daily or weekly consistency reminders
- laundry instructions
- recipes
- quick notes
- decision guidance
- red flags / troubleshooting
- room-specific reminders
- countdowns to personal events
- reusable dashboard boxes for custom content

The current UI direction is playful and bold: royal blue, hot pink, lime, cream, and peach. The visual identity is intentionally expressive, but the underlying structure is meant to stay practical and easy to edit.

---

## Important privacy note

Be careful when publishing this website online.

If the site is hosted using GitHub Pages, it may be publicly accessible depending on your repository and Pages configuration. Because this dashboard can contain personal household information, avoid publishing anything sensitive.

Do **not** publish:

- exact absence dates
- home address
- alarm codes
- key locations
- Wi-Fi passwords
- private phone numbers
- information saying someone is home alone during a specific period
- security routines
- anything that would help someone identify the home or situation

The countdown frame is intentionally designed so the UI can show the number of days remaining without showing the actual target date. The target date can still exist inside `config.js`, but the public UI should remain subtle.

---

## Project structure

A typical project structure:

```text
ons-paradijsje/
├── index.html
├── assets/
│   ├── app.js
│   ├── config.js
│   └── styles.css
├── README.md
└── CHANGELOG.md
```

### `index.html`

The static HTML shell.

Usually this file should not need many changes. It contains:

- the hero/header area
- the dashboard grid container
- the layout editor container
- buttons for layout editing/exporting
- imports for `assets/config.js` and `assets/app.js`

### `assets/config.js`

The main file you edit.

This file controls:

- site title
- subtitle
- greeting
- hero label
- countdown target
- which cards appear
- card order
- card size
- card titles
- card tags
- card content
- recipes
- laundry entries
- checklists
- decision matrix columns
- notes
- room data

Most normal content changes should be done here.

### `assets/app.js`

The JavaScript renderer.

This file reads `window.HOUSE_CONFIG` from `config.js`, then builds the dashboard cards dynamically.

This file contains:

- frame renderers
- layout editor behavior
- local storage behavior
- countdown calculation
- checkbox state handling
- export/download logic

You only edit this file when changing how the website behaves.

### `assets/styles.css`

The design file.

This file controls:

- colors
- fonts
- card styling
- responsive layout
- logo/stain behavior
- checkboxes
- grid layout
- recipe cards
- decision matrix cards
- quick action cards
- editor styling

You edit this file when changing the visual design.

---

## How the dashboard works

The dashboard is built from an array of frame objects in `assets/config.js`.

Each frame object says:

> “Render this type of card, with this title, this tag, this width, and this content source.”

Example:

```js
{
  id: "daily-first",
  category: "Today",
  tag: "Today",
  type: "checklist",
  title: "Do these first",
  width: "span-8",
  enabled: true,
  source: "daily"
}
```

This object tells the app:

- create one dashboard card
- give it the ID `daily-first`
- treat it as a `checklist`
- show the visible tag `Today`
- show the title `Do these first`
- make it wide: `span-8`
- use `content.daily` as the checklist items
- render it because `enabled` is `true`

---

## The most important file: `assets/config.js`

The full file starts like this:

```js
window.HOUSE_CONFIG = {
  meta: {
    title: "Ons Paradijsje",
    subtitle: "Sip. Savor. Score. A bold little dashboard for keeping the house playful, clean, and under control.",
    greeting: "Hi love — this is not a rulebook, just the little things that keep the house feeling like home.",
    heroLabel: "Modular house dashboard",
    countdownTarget: "2026-06-30"
  },

  layout: [
    // frame/card objects go here
  ],

  content: {
    // reusable content goes here
  }
};
```

The file has three main parts:

| Section | Meaning |
|---|---|
| `meta` | Global site information. |
| `layout` | Which UI cards exist, where they appear, and how they look. |
| `content` | The actual text/data used by the cards. |

---

## Config structure overview

```js
window.HOUSE_CONFIG = {
  meta: {
    title: "...",
    subtitle: "...",
    greeting: "...",
    heroLabel: "...",
    countdownTarget: "YYYY-MM-DD"
  },

  layout: [
    {
      id: "unique-frame-id",
      category: "Internal group",
      tag: "Visible badge",
      type: "frameType",
      title: "Visible card title",
      width: "span-6",
      enabled: true
    }
  ],

  content: {
    daily: [],
    dailySop: [],
    everyFewDays: [],
    weekly: [],
    consistencies: [],
    laundry: [],
    recipes: [],
    quickActions: [],
    troubleshooting: [],
    decisionMatrix: [],
    rooms: [],
    sweetNotes: []
  }
};
```

---

## The `meta` block

The `meta` block controls the global text and default countdown target.

Example:

```js
meta: {
  title: "Ons Paradijsje",
  subtitle: "Sip. Savor. Score. A bold little dashboard for keeping the house playful, clean, and under control.",
  greeting: "Hi love — this is not a rulebook, just the little things that keep the house feeling like home.",
  heroLabel: "Modular house dashboard",
  countdownTarget: "2026-06-30"
}
```

### `meta.title`

The main site title shown in the hero.

Example:

```js
title: "Ons Paradijsje"
```

### `meta.subtitle`

Short description below the title.

Example:

```js
subtitle: "A bold little dashboard for keeping the house playful, clean, and under control."
```

### `meta.greeting`

Personal message.

Example:

```js
greeting: "Hi love — this is not a rulebook, just the little things that keep the house feeling like home."
```

### `meta.heroLabel`

Small label in the hero area.

Example:

```js
heroLabel: "Modular house dashboard"
```

### `meta.countdownTarget`

Default countdown date.

Format:

```text
YYYY-MM-DD
```

Example:

```js
countdownTarget: "2026-06-30"
```

A countdown frame can use this default date, or override it with its own `targetDate`.

---

## The `layout` array

The `layout` array controls the dashboard cards.

Example:

```js
layout: [
  { id: "countdown-main", category: "Love", tag: "Love", type: "countdown", title: "Countdown", width: "span-4", enabled: true, targetDate: "2026-06-30" },
  { id: "daily-first", category: "Today", tag: "Today", type: "checklist", title: "Do these first", width: "span-8", enabled: true, source: "daily" },
  { id: "recipes", category: "Food", tag: "Food", type: "recipes", title: "Easy food cards", width: "span-12", enabled: true }
]
```

Each object represents one dashboard card.

### Layout fields

| Field | Required? | Meaning |
|---|---:|---|
| `id` | Yes | Unique ID for the card. Used by local storage and internal links. |
| `category` | Optional | Internal grouping label. Useful for organization. |
| `tag` | Optional | Visible badge above the card title. Editable per card. |
| `type` | Yes | Which card renderer to use. |
| `title` | Yes | Main visible card title. |
| `width` | Optional | Grid width, such as `span-4`, `span-6`, or `span-12`. |
| `enabled` | Optional | Set to `false` to hide the card. |
| `source` | Optional | Which `content` entry the card reads from. |
| `limit` | Optional | Limit number of items shown. |
| `targetDate` | Optional | Date used by countdown cards. |
| `html` | Optional | HTML used by `customHtml` frames. |

### `id`

Must be unique.

Good IDs:

```js
id: "daily-first"
id: "laundry"
id: "decision-matrix"
id: "countdown-trip"
```

Avoid duplicate IDs. If you duplicate a frame, change the ID.

### `category`

Internal grouping label.

Example:

```js
category: "Food"
```

This is mainly for organization and editor display. It does not have to be visible in the UI.

### `tag`

The visible small badge above the card title.

Example:

```js
tag: "Today"
```

Use this for contextual labels like:

```text
Love
Today
Food
Routine
Help
Instructions
Decisions
Plants
Cleaning
Notes
```

If you do not want a visible tag, set:

```js
tag: ""
```

or remove the field.

### `type`

The type decides which renderer is used.

Available types:

```text
countdown
checklist
consistency
laundry
redFlags
recipes
quickActions
dailySop
decisionMatrix
rooms
dayflow
kanban
notes
customHtml
```

### `title`

Visible card title.

Example:

```js
title: "Do these first"
```

### `width`

Controls grid size.

Available widths:

```text
span-3
span-4
span-5
span-6
span-7
span-8
span-12
```

General guidance:

| Width | Use case |
|---|---|
| `span-3` | Small compact card. |
| `span-4` | One third of a desktop row. |
| `span-5` | Medium card. |
| `span-6` | Half-width card. |
| `span-7` | Slightly larger than half. |
| `span-8` | Wide card. |
| `span-12` | Full-width card. |

On mobile, cards stack vertically regardless of width.

### `enabled`

Use this to hide a card without deleting it.

```js
enabled: false
```

This is useful for experimental frames.

### `source`

Some cards read from a configurable content source.

Example:

```js
source: "daily"
```

This tells a checklist card to use:

```js
content.daily
```

### `limit`

Optional item limit.

Example:

```js
limit: 5
```

If you want all items to render, remove `limit`.

### `targetDate`

Used by countdown frames.

Example:

```js
targetDate: "2026-06-30"
```

### `html`

Used by custom HTML frames.

Example:

```js
html: "<p>This is a custom message.</p>"
```

---

## The `content` block

The `content` block stores the text/data that cards use.

Example:

```js
content: {
  daily: [
    "Open curtains and air the bedroom for 10 minutes.",
    "Keep the kitchen counter clear before bed."
  ],

  recipes: [
    {
      name: "Pasta pesto comfort bowl",
      time: "15 min",
      ingredients: ["Pasta", "Pesto", "Tomatoes", "Cheese"],
      steps: ["Boil pasta.", "Mix with pesto.", "Add tomatoes and cheese."],
      note: "Impossible to ruin, almost."
    }
  ]
}
```

---

# Available modular UI frames/cards

These are the card types you can add/remove in the UI.

| Type | What it shows | Main config source |
|---|---|---|
| `countdown` | Dynamic days-until card | `targetDate` / `meta.countdownTarget` |
| `checklist` | Checkable to-do list | `content.daily`, `content.weekly`, or custom array |
| `consistency` | Progress/score rows | `content.consistencies` |
| `laundry` | Laundry instruction dropdowns | `content.laundry` |
| `redFlags` | Reusable warning/troubleshooting list | `content.troubleshooting` or custom source |
| `recipes` | Recipe cards | `content.recipes` |
| `quickActions` | Large note/action cards | `content.quickActions` |
| `dailySop` | Numbered SOP list | `content.dailySop` |
| `decisionMatrix` | Flexible decision boxes | `content.decisionMatrix` |
| `rooms` | Room map tiles | `content.rooms` |
| `dayflow` | Morning/anytime/dinner/evening timeline | daily/everyFewDays/recipes |
| `kanban` | Now/Next/Later board | daily/everyFewDays/weekly |
| `notes` | Sweet notes list | `content.sweetNotes` |
| `customHtml` | Custom HTML block | `html` field in layout object |

---

# How to add, remove, duplicate, reorder, or resize cards

## Add a card manually

Add a new object to the `layout` array.

Example:

```js
{
  id: "extra-notes",
  category: "Love",
  tag: "Love",
  type: "notes",
  title: "Little reminders",
  width: "span-6",
  enabled: true
}
```

## Remove a card

Delete its object from `layout`.

Or hide it safely:

```js
enabled: false
```

## Duplicate a card

Copy the object and change the `id`.

Example:

```js
{
  id: "countdown-main",
  category: "Love",
  tag: "Love",
  type: "countdown",
  title: "Countdown",
  width: "span-4",
  enabled: true,
  targetDate: "2026-06-30"
},
{
  id: "countdown-weekend",
  category: "Love",
  tag: "Soon",
  type: "countdown",
  title: "Weekend countdown",
  width: "span-4",
  enabled: true,
  targetDate: "2026-07-04"
}
```

## Reorder cards

Move objects inside `layout`.

The first object renders first.

## Resize a card

Change `width`.

Example:

```js
width: "span-12"
```

## Change the visible card tag

Change `tag`.

Example:

```js
tag: "Food"
```

## Change the visible title

Change `title`.

Example:

```js
title: "Laundry survival guide"
```

---

# How to edit each frame type

The sections below show exactly how to add each frame and how to edit its content.

---

## 1. `countdown`

### What it does

Shows a dynamic number of days until a target date.

The UI intentionally does **not** need to show the actual date. This keeps the meaning personal without exposing the exact date publicly.

### Add a countdown frame

```js
{
  id: "countdown-main",
  category: "Love",
  tag: "Love",
  type: "countdown",
  title: "Countdown",
  width: "span-4",
  enabled: true,
  targetDate: "2026-06-30"
}
```

### Important fields

| Field | Meaning |
|---|---|
| `targetDate` | Date to count down to. Format must be `YYYY-MM-DD`. |
| `title` | Card title. |
| `tag` | Small visible badge. |
| `width` | Card size. |

### Use the default global countdown target

If you omit `targetDate`, the frame uses:

```js
meta.countdownTarget
```

Example:

```js
{
  id: "countdown-main",
  category: "Love",
  tag: "Love",
  type: "countdown",
  title: "Countdown",
  width: "span-4",
  enabled: true
}
```

### Create multiple countdowns

```js
{
  id: "countdown-main",
  category: "Love",
  tag: "Love",
  type: "countdown",
  title: "Until we meet",
  width: "span-4",
  enabled: true,
  targetDate: "2026-06-30"
},
{
  id: "countdown-trip",
  category: "Travel",
  tag: "Trip",
  type: "countdown",
  title: "Tiny adventure",
  width: "span-4",
  enabled: true,
  targetDate: "2026-07-12"
}
```

### Privacy recommendation

Avoid titles like:

```js
title: "You are home alone until 30 June"
```

Prefer subtle text like:

```js
title: "Countdown"
```

or:

```js
title: "Soon"
```

---

## 2. `checklist`

### What it does

Shows a checkable list. Checked items are saved in the browser and can appear struck through.

### Add a checklist frame

```js
{
  id: "daily-first",
  category: "Today",
  tag: "Today",
  type: "checklist",
  title: "Do these first",
  width: "span-8",
  enabled: true,
  source: "daily"
}
```

### Edit checklist content

The `source` field points to an array in `content`.

Example:

```js
source: "daily"
```

This uses:

```js
daily: [
  "Open curtains and air the bedroom for 10 minutes.",
  "Keep the kitchen counter clear before bed.",
  "Check dishwasher: start it or empty it if needed.",
  "Make sure laundry is not forgotten in the washing machine.",
  "Lock the front door before sleeping."
]
```

### Add more checklist items

```js
daily: [
  "Open curtains and air the bedroom for 10 minutes.",
  "Keep the kitchen counter clear before bed.",
  "Check dishwasher: start it or empty it if needed.",
  "Make sure laundry is not forgotten in the washing machine.",
  "Lock the front door before sleeping.",
  "Check if trash needs to go out.",
  "Put cups back in the kitchen."
]
```

### Remove the checklist cap

If the layout object has:

```js
limit: 5
```

only five items are shown.

To show all items, remove `limit`:

```js
{
  id: "daily-first",
  category: "Today",
  tag: "Today",
  type: "checklist",
  title: "Do these first",
  width: "span-8",
  enabled: true,
  source: "daily"
}
```

### Make a second checklist with different content

Add a new content array:

```js
cleaningChecklist: [
  "Clear kitchen counter.",
  "Take out trash.",
  "Quick vacuum in main walking areas.",
  "Check bathroom towels."
]
```

Then add a new layout frame:

```js
{
  id: "cleaning-checklist",
  category: "Cleaning",
  tag: "Cleaning",
  type: "checklist",
  title: "Cleaning reset",
  width: "span-6",
  enabled: true,
  source: "cleaningChecklist"
}
```

---

## 3. `consistency`

### What it does

Shows house-rhythm/consistency rows with a score bar and short description.

### Add a consistency frame

```js
{
  id: "consistency",
  category: "House rhythm",
  tag: "House rhythm",
  type: "consistency",
  title: "Consistency levels",
  width: "span-5",
  enabled: true
}
```

### Edit consistency content

Edit:

```js
consistencies: [
  {
    title: "Kitchen baseline",
    detail: "Counter clear, sink not full, dishwasher handled before bed.",
    score: 90
  },
  {
    title: "Laundry rhythm",
    detail: "Better one small load than a scary mountain later.",
    score: 75
  }
]
```

### Add another consistency row

```js
{
  title: "Fresh air",
  detail: "Air the bedroom briefly in the morning.",
  score: 70
}
```

### Score guidance

The `score` is visual only.

Use values from `0` to `100`.

```js
score: 85
```

---

## 4. `laundry`

### What it does

Shows laundry instructions in expandable sections.

### Add a laundry frame

```js
{
  id: "laundry",
  category: "Instructions",
  tag: "Instructions",
  type: "laundry",
  title: "Laundry guide",
  width: "span-4",
  enabled: true
}
```

### Edit laundry content

Edit:

```js
laundry: [
  {
    load: "Normal clothes",
    temp: "30–40°C",
    detergent: "Normal detergent",
    avoid: "Avoid mixing bright colors with whites."
  },
  {
    load: "Towels",
    temp: "60°C",
    detergent: "Normal detergent",
    avoid: "Do not overload; towels need space."
  }
]
```

### Recommended newer structure for multiple avoid entries

Use an array for `avoid`:

```js
laundry: [
  {
    load: "Towels",
    temp: "60°C",
    detergent: "Normal detergent",
    avoid: [
      "Do not overload; towels need space.",
      "Dry fully before putting away."
    ]
  }
]
```

### Add a laundry load without avoid text

If the renderer supports it, you can omit `avoid`:

```js
{
  load: "Dark clothes",
  temp: "30°C",
  detergent: "Normal detergent"
}
```

The UI should not render an empty “Avoid” label.

### Add more laundry categories

```js
{
  load: "White clothes",
  temp: "40°C",
  detergent: "Normal detergent",
  avoid: [
    "Do not mix with dark colors.",
    "Check labels before washing."
  ]
}
```

---

## 5. `redFlags`

### What it does

Shows a modular warning/troubleshooting list.

The original use was “Red flags,” but it can be reused for any warning-style list.

### Add a red-flags frame

```js
{
  id: "red-flags",
  category: "Help",
  tag: "Help",
  type: "redFlags",
  title: "Red flags",
  width: "span-3",
  enabled: true
}
```

### Default content

Usually reads from:

```js
troubleshooting: [
  {
    problem: "Laundry smells damp",
    fix: "Rewash it. Do not let it dry halfway in a pile."
  },
  {
    problem: "Kitchen smells weird",
    fix: "Check trash, sink, dishwasher filter area, and old food."
  }
]
```

Depending on the renderer, `redFlags` may show only `problem`, or it may show both `problem` and `fix`.

### Make a reusable red-flag list with different text

Add a new array:

```js
plantWarnings: [
  {
    problem: "Plant soil is very dry",
    fix: "Give a small amount of water."
  },
  {
    problem: "Plant soil is still wet",
    fix: "Do not water yet."
  }
]
```

Then use a frame with a custom source if supported:

```js
{
  id: "plant-warnings",
  category: "Plants",
  tag: "Plants",
  type: "redFlags",
  title: "Plant warnings",
  width: "span-6",
  enabled: true,
  source: "plantWarnings"
}
```

If your current `redFlags` renderer does not yet read `frame.source`, update it to use:

```js
const source = frame.source || "troubleshooting";
const html = list((config.content[source] || []).map(item => item.problem || item));
```

---

## 6. `recipes`

### What it does

Shows recipe cards with time, ingredients, steps, and a note.

### Add a recipe frame

```js
{
  id: "recipes",
  category: "Food",
  tag: "Food",
  type: "recipes",
  title: "Easy food cards",
  width: "span-12",
  enabled: true
}
```

### Edit recipe content

Edit:

```js
recipes: [
  {
    name: "Pasta pesto comfort bowl",
    time: "15 min",
    ingredients: ["Pasta", "Pesto", "Tomatoes", "Cheese"],
    steps: [
      "Boil pasta.",
      "Save a spoon of pasta water.",
      "Mix pesto and pasta water.",
      "Add tomatoes and cheese."
    ],
    note: "Impossible to ruin, almost."
  }
]
```

### Add another recipe

```js
{
  name: "Egg fried rice",
  time: "20 min",
  ingredients: ["Rice", "Egg", "Vegetables", "Soy sauce"],
  steps: [
    "Fry the vegetables.",
    "Add rice.",
    "Push rice aside and scramble the egg.",
    "Mix everything and add soy sauce."
  ],
  note: "Works best with leftover rice."
}
```

### Remove a recipe

Delete the recipe object from the `recipes` array.

---

## 7. `quickActions`

### What it does

Shows large, bold cards for quick notes/actions.

Earlier versions used them as clickable buttons that scrolled to other frames. Later they were simplified into note-style UI blocks. The content structure can still keep `targetFrameId` if you want to restore clickable behavior later.

### Add quick actions frame

```js
{
  id: "quick-actions",
  category: "Actions",
  tag: "Actions",
  type: "quickActions",
  title: "Quick actions",
  width: "span-12",
  enabled: true
}
```

### Edit quick action content

Edit:

```js
quickActions: [
  {
    title: "I need to do laundry",
    emoji: "🧺",
    description: "Pick the load and avoid disasters.",
    targetFrameId: "laundry"
  },
  {
    title: "I need food",
    emoji: "🍝",
    description: "Fast recipes with low chaos.",
    targetFrameId: "recipes"
  }
]
```

### Use quick actions as note cards only

You can omit `targetFrameId` if the cards are not buttons:

```js
quickActions: [
  {
    title: "Laundry reminder",
    emoji: "🧺",
    description: "Do not leave wet laundry inside the machine."
  },
  {
    title: "Kitchen reset",
    emoji: "🧽",
    description: "Clear counter, check trash, and handle the dishwasher."
  }
]
```

### Add more quick action cards

```js
{
  title: "Plant check",
  emoji: "🌱",
  description: "Only water if the soil feels dry."
}
```

---

## 8. `dailySop`

### What it does

Shows a numbered Standard Operating Procedure list.

Good for “do these steps in order.”

### Add a Daily SOP frame

```js
{
  id: "daily-sop",
  category: "Routine",
  tag: "Routine",
  type: "dailySop",
  title: "Daily SOP",
  width: "span-6",
  enabled: true,
  source: "dailySop"
}
```

### Edit Daily SOP content

Edit:

```js
dailySop: [
  "Open curtains and air the bedroom for 10 minutes.",
  "Keep the kitchen counter clear before bed.",
  "Check dishwasher: start it or empty it if needed.",
  "Make sure laundry is not forgotten in the washing machine.",
  "Lock the front door before sleeping."
]
```

### Add a second SOP with different content

Add:

```js
eveningSop: [
  "Check the kitchen counter.",
  "Empty or start dishwasher.",
  "Check laundry machine.",
  "Close windows.",
  "Lock the door."
]
```

Then add:

```js
{
  id: "evening-sop",
  category: "Routine",
  tag: "Evening",
  type: "dailySop",
  title: "Evening SOP",
  width: "span-6",
  enabled: true,
  source: "eveningSop"
}
```

---

## 9. `decisionMatrix`

### What it does

Shows decision boxes such as “Do now” and “Can wait.”

The latest desired behavior is modular: the text should be adjustable, and the number of decision boxes should be flexible.

### Add a decision matrix frame

```js
{
  id: "decision-matrix",
  category: "Decisions",
  tag: "Decisions",
  type: "decisionMatrix",
  title: "Decision matrix",
  width: "span-6",
  enabled: true
}
```

### Simple older content structure

```js
decisionMatrix: {
  doNow: ["Wet laundry", "Weird smell", "Unlocked door", "Overflowing trash"],
  canWait: ["Vacuum if not dirty", "Deep cleaning", "Fancy cooking", "Perfect organization"]
}
```

### Recommended flexible content structure

Use an array:

```js
decisionMatrix: [
  {
    title: "Do now",
    tag: "urgent",
    items: [
      "Wet laundry",
      "Weird smell",
      "Unlocked door",
      "Overflowing trash"
    ]
  },
  {
    title: "Can wait",
    tag: "optional",
    items: [
      "Vacuum if not dirty",
      "Deep cleaning",
      "Fancy cooking",
      "Perfect organization"
    ]
  }
]
```

### Add a third decision box

```js
decisionMatrix: [
  {
    title: "Do now",
    tag: "urgent",
    items: ["Wet laundry", "Weird smell", "Unlocked door"]
  },
  {
    title: "Do today",
    tag: "soon",
    items: ["Take out trash", "Check fridge", "Water dry plants"]
  },
  {
    title: "Can wait",
    tag: "optional",
    items: ["Deep cleaning", "Reorganizing shelves"]
  }
]
```

### Make a second decision matrix

Add a new content key:

```js
foodDecisionMatrix: [
  {
    title: "Cook now",
    tag: "hungry",
    items: ["Pasta", "Rice bowl", "Oven wraps"]
  },
  {
    title: "Lazy option",
    tag: "easy",
    items: ["Toast", "Leftovers", "Snack plate"]
  }
]
```

Then add a layout object:

```js
{
  id: "food-decision-matrix",
  category: "Food",
  tag: "Food choices",
  type: "decisionMatrix",
  title: "Food decision matrix",
  width: "span-6",
  enabled: true,
  source: "foodDecisionMatrix"
}
```

If your current renderer does not yet support `frame.source` for decision matrices, update it to read:

```js
const matrix = config.content[frame.source || "decisionMatrix"] || {};
```

---

## 10. `rooms`

### What it does

Shows room-specific reminder tiles.

### Add a rooms frame

```js
{
  id: "rooms",
  category: "Rooms",
  tag: "Rooms",
  type: "rooms",
  title: "Room map",
  width: "span-12",
  enabled: true
}
```

### Edit room content

Edit:

```js
rooms: [
  {
    name: "Kitchen",
    emoji: "🍳",
    status: "Needs nightly reset",
    notes: [
      "Wipe the counter after cooking.",
      "Food scraps go in the right bin.",
      "Do not leave pans soaking forever."
    ]
  },
  {
    name: "Bathroom",
    emoji: "🛁",
    status: "Watch towels",
    notes: [
      "Hang towels open so they dry.",
      "Quickly rinse toothpaste marks.",
      "Replace toilet paper before it becomes a quest."
    ]
  }
]
```

### Add a room

```js
{
  name: "Plant corner",
  emoji: "🌱",
  status: "Check soil first",
  notes: [
    "Only water if dry.",
    "Do not overwater.",
    "Rotate if leaning toward light."
  ]
}
```

---

## 11. `dayflow`

### What it does

Shows a chronological routine layout:

- Morning
- Anytime
- Dinner
- Evening

### Add a dayflow frame

```js
{
  id: "dayflow",
  category: "Routine",
  tag: "Routine",
  type: "dayflow",
  title: "Dayflow",
  width: "span-12",
  enabled: true
}
```

### Content used

The default dayflow renderer uses:

```js
content.daily
content.everyFewDays
content.recipes
```

Example:

```js
daily: [
  "Open curtains and air the bedroom for 10 minutes.",
  "Keep the kitchen counter clear before bed.",
  "Check dishwasher."
],

everyFewDays: [
  "Take out trash before it becomes a creature.",
  "Swap damp bathroom towels.",
  "Check plants only if soil feels dry."
],

recipes: [
  // recipe objects
]
```

### When to use this frame

Use `dayflow` if you want the dashboard to answer:

> What should I do now, based on the time of day?

---

## 12. `kanban`

### What it does

Shows tasks as a workflow board:

- Now
- Next
- Later

### Add a kanban frame

```js
{
  id: "kanban",
  category: "Routine",
  tag: "Routine",
  type: "kanban",
  title: "Routine Kanban",
  width: "span-12",
  enabled: true
}
```

### Content used

The default kanban renderer uses:

```js
content.daily
content.everyFewDays
content.weekly
```

Example:

```js
daily: [
  "Open curtains.",
  "Clear kitchen counter.",
  "Check dishwasher.",
  "Check laundry machine."
],

everyFewDays: [
  "Take out trash.",
  "Check plants.",
  "Vacuum main walking areas."
],

weekly: [
  "Wash towels.",
  "Clean bathroom mirror.",
  "Check fridge."
]
```

### When to use this frame

Use `kanban` if you want to turn routines into visible workflow buckets.

---

## 13. `notes`

### What it does

Shows a simple list of sweet notes or reminders.

### Add a notes frame

```js
{
  id: "sweet-notes",
  category: "Love",
  tag: "Love",
  type: "notes",
  title: "Little notes",
  width: "span-6",
  enabled: true
}
```

### Edit notes content

Edit:

```js
sweetNotes: [
  "You do not need to do everything perfectly.",
  "Future me will be very happy if the laundry machine is empty.",
  "Coffee is allowed. Chaos is negotiable. Mold is not.",
  "Thank you for taking care of our home ❤️"
]
```

### Add more notes

```js
"Drink water too.",
"Do the tiny reset, not the perfect reset.",
"Thank you for keeping the house cozy."
```

---

## 14. `customHtml`

### What it does

Lets you place custom HTML directly inside a dashboard card.

Use this when the existing frame types are not enough.

### Add a custom HTML frame

```js
{
  id: "custom-message",
  category: "Custom",
  tag: "Custom",
  type: "customHtml",
  title: "Custom message",
  width: "span-6",
  enabled: true,
  html: "<p>This is a custom dashboard card.</p>"
}
```

### More detailed example

```js
{
  id: "plant-note",
  category: "Plants",
  tag: "Plants",
  type: "customHtml",
  title: "Plant note",
  width: "span-6",
  enabled: true,
  html: `
    <p><strong>Golden rule:</strong> check the soil before watering.</p>
    <ul class="clean">
      <li>Dry soil: small amount of water.</li>
      <li>Wet soil: leave it alone.</li>
      <li>Sad plant does not always mean thirsty plant.</li>
    </ul>
  `
}
```

### Safety note

Only use custom HTML that you trust, because it is inserted directly into the page.

---

# Local layout editor

The dashboard includes a built-in layout editor.

It can usually do the following:

- show all frames
- move frames up/down
- duplicate frames
- hide/show frames
- remove frames
- change width
- edit visible card tag
- edit visible card title
- add new frames
- download generated `config.js`
- copy generated `config.js` to clipboard if implemented

The editor is useful for experimenting visually.

However, browser edits are temporary until exported.

---

## Local storage behavior

The site uses browser local storage for two things:

1. temporary layout edits
2. checkbox completion state

This means:

- edits are saved only in that browser
- another browser/device will not see them
- clearing site data can remove local edits
- exporting `config.js` is needed to make changes permanent

### Important after config changes

If the dashboard still shows an old layout after editing `config.js`, your browser may be using saved local storage.

Use:

```text
Reset layout
```

inside the site editor.

Or clear local storage manually in browser developer tools.

---

# GitHub Pages deployment

This is a static website.

To deploy:

1. Create a GitHub repository.
2. Put `index.html` and the `assets/` folder in the repository.
3. Commit and push.
4. Go to repository settings.
5. Open **Pages**.
6. Choose the branch/folder that contains `index.html`.
7. Save.
8. Wait for GitHub to publish the site.

Recommended file location:

```text
repository-root/
├── index.html
└── assets/
```

---

# Versioning

This project uses pre-1.0 semantic versioning.

```text
v0.x.0  meaningful feature, structure, data-model, or UI change
v0.x.y  small fix, cleanup, or refinement
v1.0.0  first version considered complete/stable for normal use
```

Current suggested version:

```text
v0.18.0 - Flexible laundry avoid entries
```

---

## Release labels

Use GitHub release labels like this:

| Label | Use for |
|---|---|
| Latest | The current best version you recommend using. |
| None | Older stable snapshots. |
| Pre-release | Experiments, unfinished ideas, or versions you later rejected. |

Current recommended labeling:

```text
v0.18.0 → Latest
older stable milestones → None
experimental milestones → Pre-release
```

---

## Commit message examples

```bash
git commit -m "feat: make countdown frame reusable"
git commit -m "fix: prevent card title overflow"
git commit -m "style: replace sticker logo with coffee stain"
git commit -m "refactor: make decision matrix modular"
git commit -m "docs: expand README with config examples"
```

---

## Tagging a stable snapshot

```bash
git add .
git commit -m "feat: support multiple laundry avoid entries"
git tag -a v0.18.0 -m "v0.18.0 - Flexible laundry avoid entries"
git push
git push --tags
```

---

# Troubleshooting

## I edited `config.js`, but the site still shows the old layout

The browser may have saved an older layout in local storage.

Fix:

1. Open the site.
2. Click **Reset layout**.
3. Refresh the page.

## A duplicated card does not work correctly

Check that the duplicate has a unique `id`.

Bad:

```js
{ id: "laundry", type: "laundry", ... },
{ id: "laundry", type: "laundry", ... }
```

Good:

```js
{ id: "laundry", type: "laundry", ... },
{ id: "laundry-extra", type: "laundry", ... }
```

## A card does not render

Check:

- Is `enabled` set to `true`?
- Is `type` spelled correctly?
- Does the required content exist?
- Is there a comma missing in `config.js`?
- Did you accidentally break the JavaScript syntax?

## The countdown does not work

Check date format:

```js
targetDate: "2026-06-30"
```

Correct format:

```text
YYYY-MM-DD
```

Avoid:

```js
targetDate: "30 June 2026"
targetDate: "06/30/2026"
targetDate: "30-06-2026"
```

## Checklist items do not save

Checklist state is saved in local storage. It may not persist if:

- browser storage is blocked
- private browsing mode is used
- site data was cleared
- the frame `id` changed

## Quick action cards still behave like buttons

If the current renderer still uses anchor links, update `renderQuickActions` in `app.js` to output plain cards instead of `<a>` tags.

Button-like version:

```js
<a class="launch-card" href="#laundry">...</a>
```

Note-style version:

```js
<article class="launch-card">...</article>
```

## Laundry avoid entries do not show correctly

If you changed `avoid` from a string to an array, the renderer must support both.

Recommended renderer behavior:

```js
const avoidItems = Array.isArray(item.avoid)
  ? item.avoid
  : item.avoid
    ? [item.avoid]
    : [];
```

Then render only when there is at least one avoid item.

---

# Maintenance checklist

Before publishing or tagging a release:

- [ ] Open the site on desktop.
- [ ] Open the site on phone.
- [ ] Test the layout editor.
- [ ] Test checkbox completion.
- [ ] Test countdown behavior.
- [ ] Test exported `config.js`.
- [ ] Reset layout and confirm default config works.
- [ ] Check that no sensitive information is visible.
- [ ] Update `README.md`.
- [ ] Update `CHANGELOG.md`.
- [ ] Commit changes.
- [ ] Add a version tag.
- [ ] Optionally create a GitHub Release.

---

# Recommended workflow

For normal content edits:

1. Edit `assets/config.js`.
2. Test locally.
3. Commit.

```bash
git add assets/config.js
git commit -m "content: update house dashboard reminders"
```

For UI/behavior edits:

1. Edit `assets/app.js` or `assets/styles.css`.
2. Test locally.
3. Commit with `feat`, `fix`, `style`, or `refactor`.

For stable snapshots:

1. Update `CHANGELOG.md`.
2. Commit.
3. Tag.
4. Optionally create a GitHub Release.

---

# Summary

Ons Paradijsje is built around one idea:

> The HTML stays mostly fixed, while the dashboard is created from reusable config-driven cards.

Most changes should happen in:

```text
assets/config.js
```

Use the `layout` array to control **which cards exist and where they appear**.

Use the `content` block to control **what the cards say**.

Use the local editor to experiment, then export or copy the generated config to make your changes permanent.
