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

## Round 3 (2026-11-25): the essential non-heading motion (user picked all 6)

- [x] R5 staggered groups: [data-stagger="<step>"] containers assign an
      incremental transition-delay to their reveal children (cards 90ms,
      numbered rows 70ms); stagger children keep the plain rise (no
      directional slide). Applied to services rows, WhyDeftcode columns,
      ForWho cards, HowWeWork steps/guarantees, Manifesto items, team
      cards (Teaser + Section), FAQ rows, pricing table, diagnostico
      receive/not rows (ES+EN), directorio cards (ES+EN).
- [x] R6 count-up: [data-count-up] numeric tokens rise 0->value once
      (ease-out cubic 1.1s, decimals and exact final preserved) with the
      shared visibility gate. Applied to the featured-case proof strip
      and metric rows/panels (ES+EN mirrors) and the deck folder metric
      chips. The hero renders no stats (verified), so no hero changes.
- [x] R7 eyebrows: section eyebrows reveal with the positional slide
      (left edge -> reveal-left) right before their titles decode.
- [x] R8 late paragraphs: .reveal-late (260ms delay) on section intro
      paragraphs so the body follows the decoded title (PageBanner,
      Manifesto, Team, proyectos banner, diagnostico subtitle, CTA
      subheading).
- [x] R9 image reveal: .img-reveal (opacity + scale 1.02->1 via
      transform, 500ms) on the deck folder screenshots; revealed with
      the shared visibility gate per folder.
- [x] R10 the shared visibility gate now walks ANCESTORS ONLY: the
      element's own opacity is the reveal's hidden state (0 by design)
      and was vetoing itself (deck folder images never revealed —
      measured, fixed).
- Verified: astro check 0/47, build 35 pages; stagger delays assigned
  (home rows 0/90/180ms, stats cells 0/90/180/270, diag rows 0/70ms,
  nosotros 4 groups); count-up settles at exact values on all 6 deck
  folders + proof strip; img-reveal opacity 1 on all 6 folders after the
  visibility fix; contacto eyebrow+paragraph revealed and h1 settled
  66/66 after the preloader. Console: only /_vercel/insights/script.js
  404s (Vercel-only asset, production-only).

## Round 4 (2026-11-25): no flash + session-once + the dead selection

User: the h1 showed first, then vanished and re-animated (all animated
elements, every page entry); home looked like things grew and shrank;
the animations must play ONLY on the session's first fresh entry; and
the ¿TE PASA ALGO DE ESTO? list needed its selecting animation (which
turned out to be entirely dead).

- [x] R11 first-paint guard: the server-rendered heading text flashed
      because prep waits for fonts.ready while nothing hid the SSR text.
      The head script now adds .motion-fresh on the session's fresh
      entry and CSS keeps h1/h2/h3 invisible from the very first paint
      (home hero h1 excluded: its intro owns it). The script releases
      each heading inline at prep (box visible, letters still hidden)
      and releases non-decoding headings at collection. The fit size
      change now happens while invisible: the "grew and shrank" on home.
- [x] R12 session-once: the entrance choreography (preloader + decode +
      reveals + count-up) plays once per browser session
      (sessionStorage deft-motion-played, set at the fresh entry).
      Internal navigation, back/forward and replays land on preload-skip
      pages: the motion script runs in static mode (root class
      motion-static, transitions off, no decode, no count-up, reveals
      instant, server text untouched). A reload replays nothing; closing
      the browser restarts the session.
- [x] R13 the selecting animation was DEAD: the checkbox input had no id
      (its label for= pointed nowhere, so clicks toggled nothing), the
      peer-checked fill required a sibling relationship the DOM does not
      have (the box nests inside .problem-marker), and the draw selector
      did too. Fixed with the input id + :has() rules: the circle fills
      orange and stamps (back-out pop), the checkmark draws in, the row
      highlights with the title going orange, and the live tally keeps
      popping. Unchecking reverses everything.
- Verified by CDP: fresh /proyectos at preloader-lift+250ms shows glitch
  glyphs mid-decode with NO full SSR text ever visible; internal
  navigation (click) and reload render static pages (skip=true,
  motion-static, zero letter spans, 22/22 reveals instantly shown);
  selection: checked -> dashoffset 0 + orange box + highlight + orange
  title + counter "MARCADAS 1/4", uncheck reverts all. astro check 0
  errors, build 35 pages.

## Round 4b (2026-11-25): reload replays the show

User: "no veo el preload ahora cuando recargo" — the session-once flag
was an over-read of "salvo que se reinicie": a RELOAD restarts the show.
- [x] R14 the sessionStorage flag is gone: the head script decides by
      navigation type again — internal navigation and back/forward land
      on static pages (preload-skip), while fresh entries AND reloads
      play the full choreography (preloader + decode).
- Verified by CDP on the preview port (never the user's 4321): reload
  keeps intro-run, skip=false, the preloader visible and the h1 settles
  45/45 after it; internal navigation stays static (skip, zero letter
  spans). astro check 0 errors, build 35 pages.
