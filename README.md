# Ons Paradijsje Dashboard

A static, modular dashboard UI matching the provided screenshots.

## Files

- `index.html` — page skeleton.
- `assets/styles.css` — all visual styling.
- `assets/content.js` — all text, card order, and card data.
- `assets/app.js` — renderer logic only.

## How to edit content

Open `assets/content.js`.

- Change text directly inside the `hero`, `cards`, or `footer` fields.
- Reorder cards by moving the card objects inside `DASHBOARD_CONTENT.cards`.
- Duplicate an existing card object to create another card of the same type.

No card has a click action. The checkboxes, chips, and step boxes are purely visual.

## How to run

Open `index.html` in a browser. For GitHub Pages, upload the full folder structure as-is.
