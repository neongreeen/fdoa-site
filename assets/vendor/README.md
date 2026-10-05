# Pinned comparison-page dependencies

Only scroll-embla.html uses these files. Production index.html is unchanged.

- Embla Carousel 8.6.0, unmodified UMD from the npm tarball; MIT. https://github.com/davidjerleke/embla-carousel/tree/v8.6.0
- Embla Carousel Wheel Gestures 8.1.0, unmodified UMD from the npm tarball, including its bundled wheel-gestures implementation; MIT. https://github.com/xiel/embla-carousel-wheel-gestures/tree/v8.1.0
- npm tarball SHA-512 integrity verified at acquisition. LICENSE.md files from the respective release tags; wheel-gestures copyright notice is included separately.

Use Embla 8.x with this plugin release; do not mix its internal-engine integration with v9. No dependencies load from a CDN at runtime.

## Comparison 002

scroll-embla.html now uses embla-wheel-native-002/plugin.js: plugin 8.1.0 bundled with wheel-gestures 2.3.0 for native WheelEvent.momentum support. Source packages are unchanged; exact versions, artifact hash and build instructions are in its build-metadata.json. The original bundle remains for comparison. The page slows API motion and drag-release settling with Embla 8.6.0 scrollBody.useDuration(35); direct finger tracking is unchanged.

## Comparison 003

Only settling speed changes: API motion and drag-release use duration 40 instead of 35. Wheel input handling is unchanged from 002. Physical PC repeated swipes remain unresolved; automated input did not reproduce the user’s failure. Await the failing browser’s copied input trace before changing gesture detection again.
