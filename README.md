# Ons Paradijsje — modular dashboard

This version fixes the layout editor/export issue after the modular decision-matrix changes.

## What changed

- `content.decisionMatrices` is now a single clean object, not duplicated.
- Decision matrix arrays no longer contain empty comma holes that export as `null`.
- Layout frame IDs are normalized so duplicate ids do not break DOM/export behavior.
- `Download config.js` sanitizes the exported config before writing it.
- The decision matrix renderer ignores empty/invalid category entries instead of crashing.
- The layout editor still edits layout only: order, visibility, width, added/removed frames. Edit recipes, matrix categories, checklist text, etc. in `assets/config.js`.

## Decision matrix format

```js
content: {
  decisionMatrices: {
    housePriorities: [
      {
        label: "urgent",
        labelClass: "warn",
        title: "Do now",
        items: ["Wet laundry", "Weird smell"]
      },
      {
        label: "optional",
        labelClass: "ok",
        title: "Can wait",
        note: "Nice, but not required.",
        items: ["Deep cleaning", "Fancy cooking"]
      }
    ]
  }
}
```

Then the layout frame points at it with:

```js
{ type: "decisionMatrix", source: "housePriorities" }
```


## Checklist cards

Checklist frames render every item in their configured source array. For example, the `daily-first` frame uses `source: "daily"`, so it displays all entries in `content.daily`. Add or remove as many strings as you need; there is no five-item cap. Older exported layouts that still contain `limit: 5` are ignored for checklist frames and cleaned from newly exported `config.js` files.


## Modular red-flag / simple-list cards

`redFlags` frames are now source-based, just like countdowns and decision matrices. The frame decides which named list to render:

```js
{
  id: "red-flags",
  type: "redFlags",
  title: "Always check these in stock",
  tag: "Shopping...",
  source: "shoppingStock"
}
```

The content lives in `content.redFlagLists`:

```js
redFlagLists: {
  shoppingStock: {
    intro: "Things that are annoying when they suddenly run out.",
    items: ["Muesli", "Yoghurt", "Coffee"]
  },
  houseAlerts: {
    items: [
      { title: "Laundry smells damp", note: "Rewash it." },
      { title: "Kitchen smells weird", note: "Check trash and sink." }
    ]
  }
}
```

So duplicated `redFlags` cards no longer have to show the same list. Give each frame a different `source`, then add/edit that matching list under `content.redFlagLists`. Inline per-frame lists are also supported with `content: { items: [...] }` or `items: [...]` on the frame itself.


## Recipe display width

Recipe cards use `class="mini-grid recipe-grid"`. The `.recipe-grid` CSS caps recipes at a maximum of four cards next to each other, while still wrapping responsively on smaller screens.




## Countdown display

Countdown cards show the large number, the configured countdown text, and the tags. They do not show the exact target date and they do not show number fun facts. Edit each countdown source under `content.countdowns` in `assets/config.js`.


Logo refinement: the two yellow circles are now drawn as concentric layers under the pink rings, so the yellow border follows the same circle shapes and the two rings visibly overlap more like the reference.


Logo refinement v4: the stain/logo now uses a larger CSS canvas with pixel-based concentric circle layers, preventing the yellow border from being clipped into straight square edges.
