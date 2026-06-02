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


Latest logo update: the header CSS logo is slightly smaller, an SVG favicon is included at `assets/favicon.svg`, and a smaller matching CSS logo appears on the left side of the footer on small screens where the hero logo is hidden.


Footer logo update: the footer mark now uses the same no-square-clipping, pixel-based circle construction as the header logo and is visible on large screens as well as small screens.

Small-screen footer fix: the footer logo now keeps the full internal drawing canvas and scales down without shrinking the drawing box itself, preventing the small-screen clipping/cut-off effect.

Hero logo scaling update: the hero logo now uses the same large-canvas + visual-scale approach as the footer logo, keeping the current visible size while making future scaling less prone to square clipping.

Hero size tweak: the hero logo is scaled slightly smaller and nudged down a bit so it no longer gets cut off at the top edge.

Logo canvas unification: the hero and footer logos now use the same 525 x 430 CSS gradient geometry. The hero is nudged down and scaled a little smaller to avoid top clipping, and the footer logo is drawn in pseudo-elements instead of as a clipped background so the bottom no longer gets cut off.

Splatters update: the splash dots are now drawn inside the same logo canvas as the main rings, instead of on a separate pseudo-element outside the frame. This keeps them within bounds and makes them scale together with both the hero and footer logos.


Reference splatter update: the logo splatters are now drawn inside the shared CSS logo canvas in positions closer to the reference image, with larger top-left paint drops, a lower-left stain/drop, and a lower-right paint cluster. The footer logo remains CSS-only and is not an image asset.


Content merge update: this version keeps the current app/CSS/logo implementation, but imports the older exported config's visible content and frame order. Older red-flag flat lists were converted into `content.redFlagLists` sources, and older checklist `limit` fields were removed so checklists remain unlimited.

Logo micro-tweak: moved the large top-left pink splatter slightly inward so a little more yellow remains visible around the upper-left edge of the main circle.


Configuration controls update: the layout/configuration buttons now sit below the dashboard just above the footer. A new `Copy config.js` button copies the generated config source to the clipboard, next to the existing download button.


Hero logo overlap update: added a responsive overlap-safe mode. When the hero logo would sit behind the title/text, it now becomes smaller and dimmer instead of staying bright and competing with the yellow/pink heading.


Hero logo threshold update: tightened the overlap-safe breakpoint from 1280px to 1160px, so the logo returns to the bright/full version earlier and the dimmed mode is closer to the actual overlap zone.

Hero logo threshold retune: added a softer transition zone at 1240px and kept a stronger overlap-safe mode at 1160px. This avoids the logo becoming fully bright while overlap is still happening, without returning to the overly conservative 1280px behavior.


## Laundry avoid lines

Laundry items support optional avoid instructions. Use one string, an array, or omit it entirely:

```js
{
  load: "Delicates",
  temp: "30°C gentle",
  detergent: "Small amount",
  avoid: [
    "Do not tumble dry unless label says yes.",
    "Dry flat if it looks fragile."
  ]
}

{
  load: "Simple rinse",
  temp: "Cold",
  detergent: "Tiny amount"
  // no avoid line will be rendered
}
```

A JavaScript object cannot contain the same key twice, so do **not** write two `avoid:` keys in the same item. Use `avoid: ["first", "second"]` or `avoids: ["first", "second"]` instead.

Procedure list polish: the numbered circles in the Daily SOP/procedure list are slightly smaller, with tighter spacing and less left padding for a more compact list.


Decision matrix emoji markers:
Decision-matrix list items can now use custom emoji markers. You can either start a string with an emoji, for example `"🚿 Schone Handdoek"`, or use an object like `{ emoji: "🚿", text: "Schone Handdoek" }`. If no emoji is provided, the item keeps the normal bullet dot. Object items may also include `note`, `detail`, `description`, or `fix` for a smaller second line.
