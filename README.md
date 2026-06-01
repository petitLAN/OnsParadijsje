# Ons Paradijsje — Modular Dashboard

This version is built so the dashboard is made from reusable **interface frames** instead of fixed HTML blocks.

## Files

- `index.html` — the page shell.
- `assets/styles.css` — the visual style.
- `assets/config.js` — all content, categories, and the list/order of frames.
- `assets/app.js` — the renderer that turns frames into cards.

## New: categories

Each frame can now have a `category` property. This appears as a small badge on the card and in the browser layout editor.

```js
{ id: "quick-actions", category: "Actions", type: "quickActions", title: "Quick actions", width: "span-12", enabled: true }
```

Categories do not restrict layout. They are labels to help you keep track of replicated cards, for example `Food`, `Actions`, `Instructions`, `Routine`, or `Love`.

## Quick action cards

The dashboard supports a `quickActions` frame type. The quick-action cards are controlled by `content.quickActions`:

```js
quickActions: [
  { title: "I need to do laundry", emoji: "🧺", description: "Pick the load and avoid disasters.", targetFrameId: "laundry" }
]
```

The `targetFrameId` scrolls to the frame with that id.

## Ops-board frames

The modular project now also supports the two Ops Board elements as standalone frames:

```js
{ id: "daily-sop", category: "Routine", type: "dailySop", title: "Daily SOP", width: "span-6", enabled: true, source: "dailySop" },
{ id: "decision-matrix", category: "Decisions", type: "decisionMatrix", title: "Decision matrix", width: "span-6", enabled: true }
```

Edit `content.dailySop` for the numbered standard operating procedure. Edit `content.decisionMatrix.doNow` and `content.decisionMatrix.canWait` for the decision matrix columns.

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
- `quickActions`
- `dailySop`
- `decisionMatrix`
- `rooms`
- `dayflow`
- `kanban`
- `notes`
- `customHtml`

## Browser layout editor

Open the website and click **Edit layout**. You can move, hide, remove, duplicate, add, and resize frames from the page itself. These edits are stored in your browser. Use **Download config.js** to export the changed layout permanently, then replace `assets/config.js` in your GitHub Pages folder.


## Font update

This version uses Inter for body text, Inter for h1/h2/h3/h4 headings, and Inter for the countdown number and quick-action card titles. Category labels are kept in `config.js` for organization but are no longer displayed on the dashboard cards.


## Latest UI tweak

Frame type labels are hidden on the public dashboard. The countdown still uses `countdownTarget` in `assets/config.js`, but the page only shows the number of days and does not display the target date.

## Editable visible card tags

Each frame can now have a visible `tag` property. This is separate from `category`:

- `category` is for internal organization in the editor/exported config.
- `tag` is the small visible badge above the card title.

Example:

```js
{ id: "laundry", category: "Instructions", tag: "Laundry day", type: "laundry", title: "Laundry guide", width: "span-4", enabled: true }
```

You can edit the tag directly in the browser layout editor by opening **Edit layout** and changing the **Card tag** field. Empty the field if you do not want a visible badge for that card.

## Removed frame handle

The decorative frame handle icon has been removed from the rendered cards and from the card template, because it did not render reliably.
