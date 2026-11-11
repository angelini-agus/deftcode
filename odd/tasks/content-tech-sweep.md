# Feature: content-tech-sweep

User rule (2026-11-05): remove specific technology names from ALL site copy.
Tech allowed ONLY as tag chips in the general projects section (/proyectos
deck + directory) and inside each project's dedicated detail page.
Everywhere else: plain-benefit language. Company-owning note: same-company
data (Misure) stays authoritative; WhatsApp/Excel/AFIP/ARCA are business
reality words, not stack bragging — kept.

## Zones edited (ES + EN in src/lib/content.ts)

- Marquee row2: tech list -> capability phrases (row1 untouched).
- siteMeta proyectos description: SSG/Core Web Vitals out.
- Services landing (03) + automation (04): descriptions, module items,
  value lines, tags. ERP (01) / ventas (02) modules already clean.
- Manifesto items 01/02 (tools list + 300KB JavaScript) - both langs.
- HowWeWork steps 03/04 (TypeScript, CI/CD, edge/CDN, Core Web Vitals).
- FAQ: SEO answer de-jargoned; "en GitHub" dropped (source code 100% yours).
- NOT touched: privacidad (Cloudflare = provider disclosure in legal),
  project detail zones (solution/contrast/features keep tech), JSON-LD
  sameAs (separate follow-up), Hero.astro (user WIP, already tech-free).

## Component edits

- TeamTeaser.astro: remove tech tags row (rule: tech only in projects).
- TeamSection.astro: remove tech tags row (same rule, nosotros page).
- FeaturedCase.astro polish (from home-misure-sections review): drop the
  duplicated h3 title inside the card (section h2 already carries it) and
  the duplicated orange badges (metrics live once, in the right panel).

## Tasks

- [ ] T1 content.ts sweep ES+EN (verbatim pairs in writer brief).
- [ ] T2 TeamTeaser/TeamSection tags row removal + FeaturedCase polish.
- [ ] T3 verify (check, build, tech-token readback outside allowed zones,
      CDP captures) + commits (feature commit, sweep commit, docs).

## Evidence log

- T1-T2 delegated to gentle-ai-worker: astro check 0 errors, build 33
  pages Complete. All A1-A12 verbatim pairs applied; A13 scan found no
  visible-copy leftovers outside project objects (esTeam/enTeam tags are
  now dead data - no component renders member.tags; optional cleanup).
- T3 parent verification: built-home grep shows zero tech tokens in
  visible copy (remaining matches are infra: meta generator, HTML
  comments, JSON-LD context URLs, /_astro/ asset paths); /proyectos
  keeps tech only in tag chips; home CDP capture at 1440x970 confirms
  marquee/services/featured-case copy clean.
- Note: part of the content model (problem/forWho additions) rode along
  in commit cef6610 (FAQ swap) before this sweep commit - documented
  here for traceability.
- Commit: see git log (content.ts + team components + this doc).
