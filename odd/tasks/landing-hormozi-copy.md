# Landing Hormozi copy pass (macro speed + objection killing)

Date: 2026-11-24 · Branch: `main` · Scope: apply the user-provided
Hormozi-derived copy (macro speed vs. fast draft, bureaucracy removal,
switching cost, reply speed) to deftcode.com.ar under the 8 CRO rules.
User decisions taken before implementation: h1 "SALÍ DEL EXCEL.",
comparison matrix on the home between the diagnostic steps and the fit
filter, reply promise "te respondemos hoy", real deadlines deferred.

## Tasks

### 1. Hero ES/EN — DONE (commit `49b190a`)
- h1 "SALÍ DEL EXCEL." (one-line fit kept) + sub "TU SISTEMA A MEDIDA EN
  PRODUCCIÓN EN 3 A 6 SEMANAS. PRECIO CERRADO." (macro speed + closed price).
- Subtitle: free audit + prototype dream outcome before paying anything.
- CTA label names the prototype; microcopy carries 3 risk removers
  (no fake star ratings: no verified reviews exist yet).
- EN mirror "DITCH EXCEL." (short to preserve the display fit).

### 2. Why-Deftcode comparison matrix — DONE (commit `b830709`)
- New `WhyDeftcodeSection.astro` + `ComparisonContent` type + ES/EN copy.
- 3 columns: traditional software factory / build-it-yourself with AI /
  Deftcode method (full-contrast black card, hard shadow).
- Placed on the home between HowWeWork and the fit filter (user-approved).
- Copy adaptations from the user draft: Ley 26.529 → Ley 25.326 (health
  records law was the wrong one for general SME data), "sin alucinaciones"
  → guardrails/verified sources (no impossible promises).
- Note: the manifesto rewrite (ES+EN) landed inside this commit because the
  blocks were adjacent hunks in content.ts.

### 3. Manifesto rewritten (macro speed, 7 principles) — DONE (inside `b830709`)
- /nosotros manifesto now argues: money loves speed, real speed demands
  quality and security, zero bureaucracy, see it before signing, visible
  weekly deliveries, contract date + price, code/data ownership.

### 4. Services security + FAQ AI objection + contact form — DONE (commit `2d15d41`)
- ERP service: new "Seguridad y trazabilidad" module (role permissions,
  immutable change history) — the differentiator vs. unsupervised AI tools.
- AI service: guardrails bullet (works on real data, no invented/exposed info).
- FAQ: answers "why hire you if AI tools build apps fast?" without the
  unverifiable "5x faster" claim (weeks-not-semesters stays verifiable).
- Form: WHATSAPP label + placeholder, submit "Pedir mi diagnóstico y
  prototipo gratis", microcopy "Te respondemos hoy • Sin compromiso • No
  pedimos tarjeta ni datos bancarios. Solo usamos tus datos para
  contactarte." (the user's 2-hour promise was NOT used: user chose the
  sustainable one), success screen declares the WhatsApp channel.

## Verification
- Build OK (34 pages, ES+EN); dist greps confirm every piece shipped.
- Fold captures at 1080/776/647 with the new copy: the fold holds complete
  (h1, sub, CTA, microcopy, divider and metadata row).
- Comparison matrix rendered and inspected from the dist markup.

## Deferred / pending
- Real project deadlines and pricing numbers for the [COMPLETAR]s (user).
- Web3Forms access key in .env (user).
- Team photo (user), lead-magnet calculator href (# placeholder).
- contacto@deftcode.dev emails still point at the foreign domain (user call).
