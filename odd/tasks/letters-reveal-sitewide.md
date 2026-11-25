# Feature: letters-reveal-sitewide

Per-letter robotic decode (hero effect) on display titles across ALL pages.
Resumed 2026-11-25 from the interrupted 2026-11-24 session (uncommitted work
in 7 files + unpushed commit 9e20448).

## Context from 2026-11-24

- User: letters appear with the hero's robotic effect; "aplicalo a todas
  las paginas"; fix the end-of-intro text compaction ("que sea todo fluido");
  "cuando termines pushea a main"; agent looped twice before the fix.
- Committed already: 9e20448 fix(hero) kill end-of-intro compaction
  (GLYPHS "10_/X" -> "X0O#": narrow glyphs in fixed boxes read as air).
- Uncommitted WIP (7 files): BaseLayout site-wide script (canvas one-line
  fit + per-letter decode for [data-fit-title], directional reveals for
  other .reveal), global.css reveal-left/right + transform none for fit
  titles, data-fit-title marks on FeaturedCase x2, ProjectsStack, ServicesList
  (+ removed its local fit script), StageFan.

## Tasks

- [x] T1 fix opacity bug: decoded titles are .reveal but excluded from the
      reveal IO, so they never get is-revealed and stay opacity:0 with JS.
      Fixed differently: is-revealed lands at PREP (the heading box shows,
      letters still hidden), so the decode never fights the .reveal fade;
      CSS transform:none covers both title attributes.
- [x] T2 decode-only mode ([data-decode-title]): no canvas fit (keep CSS
      size + wrapping). Letters as inline-block spans; spaces stay plain
      text nodes; per-letter em widths (resize-proof). Word wrappers
      (white-space:nowrap) per word so breaks only happen at spaces;
      fit mode sets white-space:nowrap on the h2 (one line guaranteed).
- [x] T3 mark remaining display titles sitewide:
      case h1 (proyectos/[slug] + EN mirror, decode), case section h2s x4
      (+ EN mirror, decode), service h1 (servicios/[slug] + EN, decode),
      /diagnostico h1 (decode), /404 h1 (decode), /proyectos directory
      banner h2 (+ EN, decode + reveal), /nosotros ManifestoSection h2 +
      TeamSection h2 (decode; they already have .reveal).
      NOT decoded: CtaSection cta-heading (bespoke two-line 12/13/14vw
      composition with intentional clipping, own reveal), svc-module-title
      and card-level h3s (they are the "rest" that slide/fade).
- [x] T4 verify: astro check 0 errors (46 files), build 34 pages, CDP pass
      at 1920 and 375 on home / nosotros / proyectos / case page / service
      page / diagnostico / 404 + EN mirrors: every title decodes and
      settles, no overflow, no end-of-intro compaction.
- [x] T5 commit work units (English Conventional Commits) + push to
      origin/main (user instruction from 2026-11-24 "cuando termines
      pushea a main") + record evidence here.

## Evidence log

- (2026-11-25) astro check 17 errors at resume: 13 from the untyped WIP
  script (implicit any, ctx possibly null), 4 pre-existing at HEAD
  (content.ts missing ComparisonContent import that also typed the two
  WhyDeftcodeSection errors; ForWhoSection b.checked cast). All cleared:
  typed script (LetterSpan/Prepared, ctx guard, ReturnType<typeof setTimeout>).
- (2026-11-25) BUG (measured, CDP screenshot): measuring letter widths with
  getBoundingClientRect AFTER applying scale(0.25) returned quarter-width
  boxes -> every glyph of every title overlapped in one unreadable line.
  Fix: build spans untransformed, measure natural boxes, set em widths,
  arm the glitch state, force reflow, then enable transitions (also kills
  the arm-time shrink that a transition defined before the transform
  change would animate).
- (2026-11-25) BUG (screenshot): with bare inline-block letters, breaks
  appeared at ANY letter box, not only spaces ("QU / E" split mid-word).
  Fix: per-word nowrap wrappers + plain space text nodes between words;
  fit mode gets white-space:nowrap on the h2.
- (2026-11-25) BUG: FeaturedCase h2s fit-to-parent shrank to 16.6px on
  /proyectos (parent 273px). Switched both to data-decode-title: CSS size
  and wrapping preserved, letters still decode.
- (2026-11-25) CDP verification: 38 titles across 10 routes (7 desktop +
  2 mobile + EN mirrors) all is-revealed, all letters settled, rect within
  parent, no document horizontal overflow. /404 verified by HTML
  equivalence (astro preview serves its own error page at /404; the built
  404.html has the marked h1 + bundled script).
- verify harness: %TEMP%/deftcode-letters/ (verify.cjs + summary.json + PNG).

## Non-goals

- CtaSection heading decode (bespoke composition; follow-up if user asks).
- svc-module-title / h3 card titles (slide/fade reveals are their effect).
- EN copy rewrites, pricing, WhatsApp placeholders (separate features).

## Round 2 (2026-11-25, afternoon): every h1/h2/h3 + hero feel

User: "a todos los h1, h2 y h3 deberían tener esta animación" + the decode
must feel like the hero intro ("robótico medio bugueado"), not plain typing.

- [x] R1 auto-target: the BaseLayout script now collects ALL h1/h2/h3
      (skips [data-hero-scramble] = hero intro owner, [data-decode-skip]
      opt-out, and headings with non-span nested elements). Span-only
      children (the CTA heading) decode per line keeping their sizes
      (data-decode-lines). Manual data-decode-title marks stay harmless.
- [x] R2 hero feel ported: settle = opacity+scale with back-out curve
      (transform .28s cubic-bezier(.34,1.56,.64,1) = robotic punch), the
      glyph keeps flickering 110ms (FLICKER_MS) AFTER the letter becomes
      visible, then the final letter lands; stagger min(.022, .3/n) like
      the hero; letters centered in their final-glyph em boxes.
- [x] R3 visibility gate: deck folders fade per scroll segment and the
      process fan hides inactive panels — raw geometric IO decoded them
      while invisible. Decode now waits (rAF poll) until effective
      ancestor opacity >= 0.5; verified all 6 deck folder titles settle
      when their folder activates.
- [x] R4 preloader gate: above-the-fold titles decoded BEHIND the
      preloader overlay (the /contacto h1 was settled before the overlay
      lifted). The title observer now starts on the same signals as the
      intro system: data-intro="off", .preload-skip, no .intro-run, the
      "deft:intro:hero" handoff, or the 4.6s failsafe.
- Verified: astro check 0/47, build 35 pages, programmatic settle across
  9 routes (26 titles home incl. CTA lines, 10 case, 8 service, 18
  proyectos, 35 nosotros incl. hidden fan panels, 3 diagnostico, 3
  contacto, 9 privacidad, 10 EN case) + deck stepwise walk (6/6 folders
  settled) + frames: glitch glyphs visible mid-decode at /contacto, CTA
  bespoke composition intact after settle.
