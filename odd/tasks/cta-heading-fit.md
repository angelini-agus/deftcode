# Feature: cta-heading-fit

CTA h2 "CONSTRUYAMOS ALGO ÁGIL." / "LET'S BUILD SOMETHING DEFT."
renders as two lines that span the full page width edge to edge with
zero glyph clipping (user-approved option 1, 2026-11-03).

## Tasks

- [x] T1 measure inline-box em-widths per line in Archivo Black
      (100px, letter-spacing -0.04em) via in-browser canvas.
- [x] T2 implement fit-to-width lines: h2 as direct section child,
      container-type inline-size, align-self stretch, negative margins;
      font-size calc((100cqw - 4px) / ratio) per line; ratios include
      the trailing letter-spacing advance (+0.04em).
- [x] T3 verify at 360/390/768/1024/1280/1440/1920 (es+en): wrapper
      [0..vw], glyphs inside with margins, no document overflow added.

## Evidence log

- canvas measureText at 100px: es CONSTRUYAMOS 8.963em, ALGO ÁGIL. 6.027em;
  en LET'S BUILD 6.423em, SOMETHING DEFT. 9.633em; +0.04em trailing each.
- el Gentleman probe (C:/tmp/deftcdp/verif-b3.mjs vs served build):
  es-1280 glyphs 4.9..1275.1 with wrapper 0..1280; all widths clean.
- First attempt froze at 768px: max-w-6xl wrapper is flex shrink-to-fit
  (items-center), so %-width read the narrow paragraph. Fixed by making
  the h2 a direct child of the section.
- Canvas measureText excludes the trailing letter-spacing while the CSS
  inline box includes it: without the +0.04 correction the line rendered
  exactly wrapper-wide and shaved glyphs. Fixed.
- Pre-existing horizontal overflow on home at small widths (~58px) comes
  from the fixed navbar row, not this feature: tracked for the margins
  normalization work.
