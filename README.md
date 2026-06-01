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
