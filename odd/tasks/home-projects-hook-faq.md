# Feature: home-projects-hook-faq

Home recomposition (user, 2026-11-05): the full sticky ProjectsStack deck
does not belong on the homepage. Replace it with a light editorial hook
that leads to /proyectos, and add the FAQ (today under the contact form)
to the homepage. Decisions confirmed by user:
- Hook = editorial orange banner (eyebrow + title + intro + big link),
  NO project cards.
- FAQ stays on /contacto as well (both pages).

## Tasks (each closes with one work-unit commit on main)

- [x] T1 New ProjectsHook.astro: orange #FF4D00 banner reusing the
      ProjectsStack header style (eyebrow "// CASOS & ENTREGABLES",
      title "SOFTWARE EN PRODUCCIÓN", intro line) + large link
      "VER TODOS LOS PROYECTOS" -> /proyectos/ (ES) / "EXPLORE ALL
      PROJECTS" -> /en/projects/ (EN). reveal-on-scroll on the heading
      only, matching existing section conventions.
- [x] T2 Rewire homes: src/pages/index.astro and src/pages/en/index.astro
      swap ProjectsStack for ProjectsHook and insert FaqSection between
      hook and CtaSection. /proyectos and /en/projects keep the full
      ProjectsStack untouched.
- [x] T3 Verify and commit: astro build clean; built-home readback shows
      hook + FAQ (schema present) and no projects deck on home; CDP
      capture of served home at window heights ~970 and ~668 for the
      parent's visual check; explicit-path commit (never Hero.astro,
      .gitignore, package-lock.json, image.png - user WIP).

## Evidence log

- T1+T2 delegated to gentle-ai-worker: astro check 0 errors (4 hints,
  pre-existing in project slug pages, outside surfaces), build 33 pages
  Complete. Commit dbdf79a.
- T3 parent verification: build PASS (33 pages, 1.38s). Readback:
  home has hook (id="proyectos", link "VER TODOS LOS PROYECTOS"),
  FAQ (id="faq" + FAQPage schema), zero folder cards on home;
  /proyectos keeps data-flip-card deck. Eyebrow chip transparent on
  proyectos/nosotros/contacto (58f6e0e), dark privacy variant untouched.
- CDP captures (Playwright via npx cache, served dist): hook element
  shot, proyectos banner 1440x970, full home 1440x970 and 1440x668.
  Full-page capture initially showed hook/CTA h2 missing: capture
  artifact of 60ms-step scroll (IO threshold 0.2 never met); patient
  scroll + real-viewport shot show every title revealed. No product
  defect.
- User decisions: hook = editorial banner without cards; FAQ stays on
  /contacto as well.
