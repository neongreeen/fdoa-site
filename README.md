# FDOA official website

Production: https://fdoa.jp/ — GitHub Pages, `main` branch / root.

## 2026-10-05 stacked design release

`index.html` is the released stacked prototype (rev60), adapted for production contact and direct links. Project data lives in `stack-gallery.json` and `stack-details.json`. Existing `works/` pages and `assets/works/` remain available.

The complete site before this release is preserved by the remote annotated tag `before-stacked-release-2026-10-05` (commit `42229c7c4f2f8ab7ca2c0c04021354f778b3d287`). Its homepage is also retained unchanged at `index-before-2026-10-05.html` for visual comparison.

To restore the prior homepage without discarding later history, restore `index.html` from that tag, commit the restore and push to `main`. For a complete restoration, first compare later changes against the tag and restore only the required paths. Never force-push the saved history away.

All experimental pages remain in the original prototype folder. A separate complete local backup of all 86 prototype files was made before release, outside iCloud. Do not delete or replace those experiments when editing production.
