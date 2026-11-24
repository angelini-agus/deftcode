# Landing CRO fixes (8-rule audit follow-up)

Date: 2026-11-24 · Branch: `main` · Scope: fixes 1, 3, 5 (+ agreed 6) from the
CRO audit of deftcode.com.ar. Points 2 (pricing table `[COMPLETAR]`) and 4
(preloader) were explicitly deferred by the user.

## Tasks

### 1. Web3Forms access key — DONE (code), pending the user's key
- `ContactFormSection.astro` now reads `PUBLIC_WEB3FORMS_ACCESS_KEY` from env
  and warns loudly at build time when it is missing.
- `.env.example` documents the variable; a local `.env` was created with an
  empty value (gitignored). **The user must paste the real key and rebuild.**
- Commit: `dd7a14c fix(form): read the Web3Forms access key from PUBLIC_WEB3FORMS_ACCESS_KEY`

### 2. Domain metadata — DONE
- `astro.config.mjs` `site` → `https://deftcode.com.ar` (single source of
  truth for canonical, og:url, twitter:url, hreflang and sitemap).
- `content.ts` `siteUrl` fixed in both language dictionaries.
- `BaseLayout.astro` organization schema now derives its URL from `siteOrigin`.
- New `public/og-deftcode.png` (1200x630, Archivo Black + Space Mono, rendered
  with headless Chrome) replaces the 404 that pointed to deftcode.dev.
- Verified in `dist/`: canonical/og/hreflang all point to deftcode.com.ar.
- Commit: `c183119 fix(seo): point canonical, OG and hreflang to deftcode.com.ar`
- Follow-up (user decision): `contacto@deftcode.dev` emails in the privacy
  pages point at the same foreign domain. Not changed in this pass.

### 3. Social proof next to the final CTA — DONE
- `CtaSection.astro` renders a microproof strip (eyebrow + client +
  `-$2.8M ARS/MES EN SUELDOS` + link to the full case) under the action,
  reusing existing `featuredCase` content in ES/EN. No new copy.
- Commit: `47b94f2 feat(cta): show the real AZ case metrics next to the final CTA`

### 4. Hero conversion CTA — DONE (agreed in review)
- Big button under the headline reusing existing `heroContent.ctaLabel/ctaHref`,
  with the risk-removal microcopy below; joins the intro as its own group
  (`data-hero-cta`, slides up last) and keeps the fold intact.
- Height matrix verified with headless Chrome at 1080 / 776 / 720 / 668 / 647
  / 600 / 540 CSS px: fold holds everywhere; below 600px the decorative
  EST. 2026 tag hides (it collided with the fixed navbar).
- Commit: `8ab420c feat(hero): add the conversion CTA under the headline`

## Deferred by the user
- Pricing table `[COMPLETAR: semanas]` and `USD [COMPLETAR] por mes` (point 2).
- Preloader stays as is (point 4).
- Real team photo for the Quién construye section (user adds it themselves).

## Verification log
- `npm run build`: 34 pages OK; missing-key warning fires as designed.
- dist greps: canonical/og/hreflang → deftcode.com.ar; og-deftcode.png shipped;
  hero CTA + proof strip present in ES and EN builds.
- Fold screenshots (headless, 1px device scale) at 1080/776/720/668/647/600/540.
