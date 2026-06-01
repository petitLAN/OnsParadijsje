# Ons Paradijsje — Modular static dashboard

This package contains two versions of the same dashboard:

- `index.html` uses separate files in `assets/`.
- `standalone.html` contains all HTML, CSS, content and rendering logic in one file.

## Where to edit text

Edit `assets/config.js`.

All visible strings are in `window.DASHBOARD_CONFIG.content` and `window.DASHBOARD_CONFIG.meta`.

## How to shuffle cards

Edit `window.DASHBOARD_CONFIG.layout` in `assets/config.js`.

Each card is one object:

```js
{ id: "laundry", type: "laundry", span: 4, content: "laundry", enabled: true }
```

- `id`: unique card id.
- `type`: renderer type, for example `countdown`, `checklist`, `levels`, `laundry`, `stock`, `recipes`, `notes`, `sop`, or `matrix`.
- `span`: width in a 12-column grid. Use `3`, `4`, `5`, `6`, `7`, `8`, or `12`.
- `content`: key inside `content`.
- `enabled`: set to `false` to hide the card.

## Static only

Cards do not trigger actions. Checkboxes, recipe step boxes, and note cards are visual-only elements.
