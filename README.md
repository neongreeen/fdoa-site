# FDOA official website

Production: https://fdoa.jp/ — GitHub Pages, `main` branch / root.

## 2026-10-05 stacked design release

`index.html` is the released stacked prototype (rev60), adapted for production contact and direct links. Project data lives in `stack-gallery.json` and `stack-details.json`. Existing `works/` pages and `assets/works/` remain available.

The complete site before this release is preserved by the remote annotated tag `before-stacked-release-2026-10-05` (commit `42229c7c4f2f8ab7ca2c0c04021354f778b3d287`). Its homepage is also retained unchanged at `index-before-2026-10-05.html` for visual comparison.

To restore the prior homepage without discarding later history, restore `index.html` from that tag, commit the restore and push to `main`. For a complete restoration, first compare later changes against the tag and restore only the required paths. Never force-push the saved history away.

All experimental pages remain in the original prototype folder. A separate complete local backup of all 86 prototype files was made before release, outside iCloud. Do not delete or replace those experiments when editing production.

## 2026-10-05 one-page scroll navigation

The homepage entry button is removed. Vertical wheel/swipe gestures select one adjacent sheet immediately; movement uses the existing distance-based acceleration and deceleration and lands at its boundary. Repeated wheel events in the same burst, including inertia, are consumed. Each distinct touch or wheel gesture contributes one sheet of movement. Consecutive accepted gestures overlap instead of waiting for the previous animation to finish. Modal galleries and the works dropdown retain native scrolling; pinch zoom and form input remain available. Keyboard navigation supports arrows, Page Up/Down, Space, Home and End. The release before this change remains at commit `82831e898cf1c0daa653521daf7bb7bd0e7fdfc2`.

Browser checks cover discrete and continuous wheel inputs, keyboard input, exact landing positions, resize alignment, and independent modal scrolling. Deterministic handler tests cover touch gestures; the in-app browser does not support touch injection. Physical trackpad momentum and iPhone feel still need user confirmation; quiet-time separation is a heuristic because web wheel events do not expose finger release.

## 2026-10-05 consecutive gesture responsiveness

The first responsiveness revision accepted a new touch gesture during an adjacent transition and queued one move on arrival. That queue is superseded by the overlapping movement revision below. That revision reduced the wheel quiet gap from 280ms to 140ms and treated renewed force as a new push. The force-based rule was removed in the PC stability correction below because one uneven stroke could trigger twice. Menu navigation, hash changes and modal opening clear pending intent.

Whole-sheet `inert` toggling is removed to avoid invalidating a wheel target while it may still be latched by a browser. Inactive sheets remain hidden from accessibility and their controls leave the tab order. Movement curves are unchanged. The prior version is preserved at commit `bedaaf408195a3e683ef2dd3fdc18929df57882f`.

## 2026-10-05 overlapping swipe movement

New consecutive gestures start their movement immediately, adding to the existing movement instead of waiting at each sheet. Each component keeps the existing distance-based acceleration and deceleration. One gesture still means one sheet; gesture-burst filtering prevents momentum from creating extra steps. The final destination stays on a sheet boundary. Single-input movement and project names are unchanged. The prior version is preserved at `74c68e73bb48ed9cb1e8bcfc004aaf5c3a710dbc`.

## 2026-10-05 PC gesture stability

Wheel bursts now separate only after 180ms without wheel input, independently of animation completion. Every tail event extends the same burst; changing magnitude does not create a second gesture. Distinct bursts still overlap. The stage is the stable pointer target beneath the pictures, while only active sheet buttons receive clicks. This avoids changing the target beneath a stationary pointer as sheets move.

Distance curves are cached, active control updates affect only the previous/current sheets, and animation painting uses one frame loop. Elapsed time is clamped to zero when a frame timestamp predates a newly added motion. The existing movement curves and touch behavior are retained. Physical trackpad gesture boundaries cannot be identified perfectly from wheel events; real-device feel remains subject to verification. The previous release is retained at `a08f1a088679d9a66bf1ccbecb89e07fbc56b8a8`.
