# Ons Paradijsje — Modular Dashboard

This version is built so the dashboard is made from reusable **interface frames** instead of fixed HTML blocks.

## Files

- `index.html` — the page shell.
- `assets/styles.css` — the visual style.
- `assets/config.js` — all content and the list/order of frames.
- `assets/app.js` — the renderer that turns frames into cards.

## How to reorder cards

Open `assets/config.js` and reorder objects inside the `layout` array.

Example:

```js
layout: [
  { id: "countdown-main", type: "countdown", title: "Countdown", width: "span-4", enabled: true },
  { id: "daily-first", type: "checklist", title: "Do these first", width: "span-8", enabled: true }
]
```

Move objects up/down in that array to move cards up/down on the page.

## How to remove a card

Either delete its object from `layout`, or set:

```js
enabled: false
```

## How to duplicate a card

Copy its object and give it a unique `id`.

```js
{ id: "laundry", type: "laundry", title: "Laundry guide", width: "span-4", enabled: true },
{ id: "laundry-copy", type: "laundry", title: "Laundry guide again", width: "span-4", enabled: true }
```

## How to resize a card

Use one of these width classes:

- `span-3` = 25% width on desktop
- `span-4` = 33% width
- `span-6` = 50% width
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
- `rooms`
- `dayflow`
- `kanban`
- `notes`
- `customHtml`

## Browser layout editor

Open the website and click **Edit layout**. You can move, hide, remove, duplicate, add, and resize frames from the page itself. These edits are stored in your browser. Use **Download config.js** to export the changed layout permanently, then replace `assets/config.js` in your GitHub Pages folder.
