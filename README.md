# FDOA official website

Production: https://fdoa.jp/ — GitHub Pages, `main` branch / root.

## 2026-10-05 stacked design release

`index.html` is the released stacked prototype (rev60), adapted for production contact and direct links. Project data lives in `stack-gallery.json` and `stack-details.json`. Existing `works/` pages and `assets/works/` remain available.

The complete site before this release is preserved by the remote annotated tag `before-stacked-release-2026-10-05` (commit `42229c7c4f2f8ab7ca2c0c04021354f778b3d287`). Its homepage is also retained unchanged at `index-before-2026-10-05.html` for visual comparison.

To restore the prior homepage without discarding later history, restore `index.html` from that tag, commit the restore and push to `main`. For a complete restoration, first compare later changes against the tag and restore only the required paths. Never force-push the saved history away.

All experimental pages remain in the original prototype folder. A separate complete local backup of all 86 prototype files was made before release, outside iCloud. Do not delete or replace those experiments when editing production.

## 2026-10-05 one-page scroll navigation

The homepage entry button is removed. Vertical wheel/swipe gestures select one adjacent sheet immediately; movement uses the existing distance-based acceleration and deceleration and lands at its boundary. Repeated wheel events in the same burst, including inertia, are consumed. A distinct next gesture may queue one adjacent move during an animation; each touch gesture selects at most one sheet. Modal galleries and the works dropdown retain native scrolling; pinch zoom and form input remain available. Keyboard navigation supports arrows, Page Up/Down, Space, Home and End. The release before this change remains at commit `82831e898cf1c0daa653521daf7bb7bd0e7fdfc2`.

Browser checks cover discrete and continuous wheel inputs, keyboard input, exact landing positions, resize alignment, and independent modal scrolling. Deterministic handler tests cover touch gestures; the in-app browser does not support touch injection. Physical trackpad momentum and iPhone feel still need user confirmation; quiet-time separation is a heuristic because web wheel events do not expose finger release.

## 2026-10-05 consecutive gesture responsiveness

In response to iPhone/MacBook Pro feedback, a new touch gesture is accepted during an adjacent transition and one pending move runs on arrival. The wheel quiet gap is reduced from 280ms to 140ms; two substantial rises following a decaying tail may also indicate a new push. This is a heuristic, not a native gesture-phase signal. Menu navigation, hash changes and modal opening clear pending intent.

Whole-sheet `inert` toggling is removed to avoid invalidating a wheel target while it may still be latched by a browser. Inactive sheets remain hidden from accessibility and their controls leave the tab order. Movement curves are unchanged. The prior version is preserved at commit `bedaaf408195a3e683ef2dd3fdc18929df57882f`.
