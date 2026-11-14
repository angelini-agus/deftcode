# Feature: projects-lightbox

User request (2026-11-14): the projects section must use every screen
from the local misura-web repo, with Wispr-Flow behavior: click a
screenshot, it takes the full screen, and you scroll the photos
sideways.

## Implementation

- ScreenLightbox.astro: fullscreen overlay (z-100, above the navbar),
  horizontal snap track, orange counter, project title, close button,
  prev/next arrows, keyboard (arrows/Home/End/Escape), outside-free
  (backdrop is the track itself), vertical wheel mapped to horizontal
  scroll, body scroll lock, focus restore. Slides are JS-built once per
  gallery and cached by key.
- Galleries serialized per page/locale via buildLightboxGalleries()
  (src/lib/project-images.ts). Captions resolve server-side — client
  script stays static (Astro frontmatter vars are not available inside
  client scripts).
- Image quality: lightbox slides use the untouched original PNG URLs
  (1920x1200) — user rule: "las capturas tienen que estar en la mejor
  calidad posible, al menos 1080px".
- Data layer: all misura-web screens wired — legal 12 (added
  expediente-edit, obligaciones, biblioteca, team, switch-user, login),
  pediatric system 8 (added family-portal appointments + contact).
  37/37 screens.
- Triggers: deck card screenshot buttons (cursor-zoom-in + hover zoom
  icon) and every detail-page gallery figure, es + en.

## Gotchas found on the way

- Vite dev watcher on this machine repeatedly misses file changes:
  dev server restart was required after several edits (stale modules
  served 500s: duplicate `step` declaration in flip-stack, missing
  projectAssets import after my patch, imgItem.imgItem.altEs).
- Headless CDP console capture needs the Log domain enabled to see
  module 500s (Runtime.consoleAPICalled alone misses network errors).

## Verified (CDP)

- Deck: open -> 01/04, next -> 02/04 (scrollLeft = one slide),
  ArrowRight -> 03/04, Escape closes and restores overflow.
- Detail (empresa-limpieza): opens at clicked index, slide 2 renders
  the 1920px original (text crisp).
- Mobile 390: gestion-legal 01/12, image fits viewport.
- EN deck + detail: same flow.
