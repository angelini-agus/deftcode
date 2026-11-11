# Feature: home-misure-sections

Four short Misure-inspired sections added to the deftcode home (user decision,
2026-11-05: "el problema, para quien es y el teaser, y un caso destacado tambien,
todas secciones cortas, roba de misure"). Structure robbed from misura-web,
copy authored from deftcode's own material — no invented data.

## Home order (ES & EN)

Hero -> SkewedMarquee -> **ProblemSection** (new) -> ServicesList ->
ProjectsHook -> **FeaturedCase** (new) -> **ForWhoSection** (new) ->
**TeamTeaser** (new) -> FaqSection -> CtaSection

Background rhythm: o / b / o / b / o / b / o / b / b / o (FAQ adjacency
preceded by contacto's form+FAQ black pairing).

## Sources (real data only)

- Problem bullets: ServiceTrack challenge + ventas case (planillas/WhatsApp,
  cierres a mano, visibilidad de canal) - existing case-study material.
- FeaturedCase: project id "empresa-limpieza" (shared ES/EN id), verbatim
  client/title/description/metrics from esProjects/enProjects, slug from data
  (lang-aware). No new content fields.
- ForWho: editorial qualifier copy (budgets cerrados, velocidad, metricas) -
  no claims of numbers.
- TeamTeaser: esTeam/enTeam verbatim (2 members, name/role/bio/tags), link
  to nosotros/about.

## Tasks

- [ ] T1 content model: esProblem/enProblem + esForWho/enForWho objects in
      src/lib/content.ts (copy authored in writer brief, ES+EN).
- [ ] T2 components (deftcode style, reveal on h2 only, no autofocus):
      src/components/ProblemSection.astro, FeaturedCase.astro,
      ForWhoSection.astro, TeamTeaser.astro.
- [ ] T3 wire both homes (index.astro, en/index.astro) in the order above.
- [ ] T4 verify (astro check, build, readback order+links, CDP captures
      home 1440x970 + 1440x668) and commit (explicit paths).

## Evidence log

- T1-T3 delegated to gentle-ai-worker: astro check 0 errors (4 hints
  pre-existing in project slug pages), build 33 pages Complete. Closing
  hrefs verified against real anchors: /#servicios, /en/#services.
- T4 parent verification: readback of built home shows section id order
  problema -> servicios -> proyectos(hook) -> caso-destacado -> para-quien
  -> equipo-teaser -> faq -> contacto (ES) and EN mirror with services/
  projects/contact-cta ids; case link /proyectos/empresa-limpieza-rosario/
  + /en/projects/empresa-limpieza-rosario/; team band /nosotros/ and
  /en/about/. CDP captures 1440x970 + 1440x668: all ten sections render,
  heights OK, no clipping.
- Post-review polish (user-driven iterations in session): FAQ Astro item
  replaced by deadline-trust + post-launch items (cef6610, content in
  this file's scope committed there); FeaturedCase dedup (single title,
  single metrics presentation); tech-name sweep applied on top
  (odd/tasks/content-tech-sweep.md).
- User iterations after first delivery: ProblemSection removed entirely
  (component + esProblem/enProblem content); ProjectsHook unified INTO
  FeaturedCase (one CASOS & ENTREGABLES section: header -> ServiceTrack
  card -> VER TODOS LOS PROYECTOS orange band; id="proyectos"); TeamTeaser
  now shows the real two-person team (Franco Cuscianna added from misure
  master data; DEFTCODE LABS placeholder dropped).
- Commit: see git log (components + wiring + this doc).
