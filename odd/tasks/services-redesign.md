# Feature: services-redesign

Editorial services redesign per reference (image.png at repo root):
row = index + giant title + small pills, NO description. Each row links
to a per-service detail page. Product decision (user, 2026-11-03):
4 detail pages absorbing the 5 niches from the sales material.

## Mapping (approved)

01 sistemas-gestion-erp    <- Pantallazos or nichos 1+2 (field ops + ERP vertical)
02 sistemas-gestion-ventas <- nichos 3+4 (turnos + cotizadores / portales B2B)
03 landing-pages            <- historical landing service
04 automatizacion-ia        <- nicho 5 (integrations + AI automation)

## Tasks (each closes with one work-unit commit on main)

- [ ] T1 content model: detail fields per service (hero, intro, modules,
      clients, value) ES+EN in src/lib/content.ts. No invented data/numbers.
- [ ] T2 ServicesList.astro rewrite: index + title + pills rows, link row
      -> /servicios/<slug>/ (ES) & /en/services/<slug>/ (EN). Keyboard
      reachable, focus-visible, no auto-focus anywhere.
- [ ] T3 routes: src/pages/servicios/index.astro + [slug].astro and EN
      mirrors under src/pages/en/services/. Wire links both directions.

## Evidence log

- (pending)

## Evidence log

- T1 7360aa6: ServiceItem extended (slug/kicker/intro/modules/clients/value),
  esServices + enServices rewrittten from the sales material. astro check 0 errors.
- T2 ed0c138: Editorial rows verified via CDP on served build: 4 rows,
  first href /servicios/sistemas-gestion-erp/, 0 descriptions rendered.
- T3 da3f705: 10 pages built (es index + 4 detail, en index + 4 detail).
  Detail CDP: h1 correct, 9 module bullets, hreflang EN alternate ok,
  cross-links present. Screenshots: detail-es.png, home-servicios.png.
- Harness note: package delegation unusable this session (worktree
  registry identity mismatch); multi-file writes via shell documented per commit.
