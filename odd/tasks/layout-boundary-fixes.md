# Feature: layout-boundary-fixes

User report (2026-11-14): "a black margin overlaps the orange sections
site-wide, a few pixels, also above the footer; and the form/cards
visibly collide with the fixed header while scrolling."

## Root causes (measured via CDP, not guessed)

1. `rule-page-bottom::after` drew a 2px black line at the bottom edge of
   every section, spanning only the page-max content width. On black
   sections it was invisible; on orange sections it rendered as a black
   strip starting ~2px above the boundary -> "the next black section
   overlapping the orange". Same artifact above the footer (orange CTA
   section -> black footer) and at every orange/black boundary site-wide.
2. The fixed navbar is transparent by design. Any dark card scrolling
   under it (form card, featured-case folder, footer) rendered "through"
   the header area: nav pill/logo blend into black cards, orange cards
   collide visibly.

## Fixes

- Removed `rule-page-bottom` class from every component/page and deleted
  its CSS block in global.css (kept --page-max comment note).
- Navbar scrolled state: past 80px of scroll the header gets a solid
  black background (transition 250ms) and the brand flips to white; at
  the top of any page the bar stays transparent over the orange
  hero/banner. Existing logo-contrast logic kept for the unscrolled
  state (white logo over black sections at scrollY <= 80).

## Verified (CDP screenshots)

- Home CTA->footer boundary: clean straight edge, no center strip.
- Home proyectos->para-quien boundary: clean.
- /contacto/ scrolled: solid black bar, white logo, no content bleed.
- `getComputedStyle(section, '::after').content` -> "none" on both
  orange home sections.

## Tasks

- [x] Remove rule-page-bottom site-wide. Commit: see git log.
- [x] Navbar scrolled solid state + brand flip. Commit: see git log.
