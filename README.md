# Ons Paradijsje — Modular Dashboard

This version is built so the dashboard is made from reusable **interface frames** instead of fixed HTML blocks.

## Files

- `index.html` — the clean page shell. Almost all visible text is injected from `assets/config.js`.
- `assets/styles.css` — the visual style.
- `assets/config.js` — all content, UI labels, card tags/handles, card titles, and the list/order of frames.
- `assets/app.js` — the renderer that turns frames into cards.

## What changed in this patched version

- Your personalized hero copy and card labels have been moved into `assets/config.js`.
- The visible card badge/tag is now editable per frame using the `tag` property.
- The old frame handle symbol has been removed from rendered cards. A defensive CSS rule also hides it if an older exported card still contains it.
- The old quick-action buttons are now decorative note cards. They keep the same chunky button-like visual style, but they are rendered as `<article>` cards instead of links, so they no longer scroll or navigate anywhere.
- Static text from `index.html` has been moved into the `ui` block in `assets/config.js` where practical.
- Countdown event data now lives in `content.countdowns`, and each countdown card can point to a different event using `source`.

## Editing card tags and titles

Each card is one object in the `layout` array:

```js
{ id: "quick-actions", category: "Notes", tag: "Brainfarts", type: "quickActions", title: "Short Notes", width: "span-12", enabled: true }
```

- `tag` is the visible pill/badge shown above the title.
- `title` is the big card heading.
- `category` is mostly organizational and shown in the layout editor.
- `width` controls the grid span.
- `enabled: false` hides the frame without deleting it.


## Countdown cards

Countdowns are editable in `assets/config.js`. The actual event data lives in `content.countdowns`:

```js
countdowns: {
  reunion: {
    targetDate: "2026-06-30",
    manyDaysText: "days until we see each other again.",
    todayText: "Today is the day we see each other again ❤️",
    completeText: "The countdown is complete. We saw each other again ❤️"
  },
  birthday: {
    targetDate: "2026-07-21",
    manyDaysText: "days until birthday time.",
    todayText: "Birthday day ❤️"
  }
}
```

A countdown card in the `layout` array points to one of those events with `source`:

```js
{ id: "birthday-countdown", type: "countdown", tag: "Birthday", title: "Birthday countdown", width: "span-4", enabled: true, source: "birthday" }
```

So yes, you can scatter several countdowns through the interface: add several `type: "countdown"` frames with different `id` and `source` values. You can also keep using the older direct style if you want:

```js
{ id: "simple-countdown", type: "countdown", title: "Simple countdown", targetDate: "2026-09-01", enabled: true }
```

Dates should be written as `YYYY-MM-DD`.

Important: the browser layout editor stores layout edits in `localStorage`. If you change the `layout` array in `config.js` and do not see the change, click **Reset layout** once or clear the site data, because the browser may still be using an older saved layout.

## Note cards

The decorative note cards are controlled by `content.quickActions`:

```js
quickActions: [
  { title: "I need to do laundry", emoji: "🧺", description: "Please keep the clean and dirty pile separate" }
]
```

They intentionally do **not** use `targetFrameId`, `href`, or click handlers anymore.

## How to reorder cards

Open `assets/config.js` and reorder objects inside the `layout` array.

## How to duplicate a card

Copy its object and give it a unique `id`.

```js
{ id: "laundry", type: "laundry", tag: "Instructions de machine lávier", title: "wasnadatwaswas", width: "span-4", enabled: true },
{ id: "laundry-copy", type: "laundry", tag: "Second laundry note", title: "Another laundry card", width: "span-4", enabled: true }
```

## How to resize a card

Use one of these width classes:

- `span-3` = 25% width on desktop
- `span-4` = 33% width
- `span-5` = 41% width
- `span-6` = 50% width
- `span-7` = 58% width
- `span-8` = 66% width
- `span-12` = full width

On mobile, all cards automatically become full-width.

## Built-in frame types

- `countdown`
- `checklist`
- `consistency`
- `laundry`
- `redFlags`
- `recipes`
- `quickActions` — now used as decorative note cards
- `dailySop`
- `decisionMatrix`
- `rooms`
- `dayflow`
- `kanban`
- `notes`
- `customHtml`

## Browser layout editor

Open the website and click **Edit layout**. You can move, hide, remove, duplicate, add, and resize frames from the page itself. These edits are stored in your browser. Use **Download config.js** to export the changed layout permanently, then replace `assets/config.js` in your GitHub Pages folder.

### Latest visual cleanup

- The translucent decorative blocks behind the hero greeting were removed.
- Laundry `<summary>` markers are now custom CSS markers instead of browser-native Chrome markers, to avoid Chrome-only vertical rendering/focus artifacts inside the laundry items.
- The `wasnadatwaswas` title still uses `titleMode: "clip"`, so it stays one line and is clipped at the card border.
