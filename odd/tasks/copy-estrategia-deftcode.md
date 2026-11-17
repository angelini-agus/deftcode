# Feature: copy-estrategia-deftcode

## Goal

Archivo de contexto `ESTRATEGIA-COPY.md` en la raíz del repo: la fuente de verdad del copy y la
estrategia de ventas de Deftcode (oferta de entrada = Diagnóstico Deft gratis con prototipo antes
de firmar, escalera de venta, reglas de copy, copy por página, landing /diagnostico, anuncios Meta,
pendientes antes de publicar). Toda tarea futura de copy/UI debe salir de este documento.

## Context (estado real del repo al crear el doc)

- Astro 7.3.2 SSG + Tailwind 4.3.3, Vercel; copy vive en `src/lib/content.ts` (single source, ~1800 líneas) + `types.ts` + `project-images.ts`.
- `grep -c "iagnóstico" src/lib/content.ts` = **0**: la oferta de entrada aún no está en el copy.
- Componentes existentes mapeables: Hero, SkewedMarquee, FeaturedCase, ForWhoSection, ServicesList,
  HowWeWorkSection, ProjectsStack, ManifestoSection, TeamSection, TeamTeaser, FaqSection,
  CtaSection, ContactFormSection, Navbar, Footer, ClientQuote, PageBanner, ScreenLightbox.
- Existe versión EN completa (`src/pages/en/*`): la regla de voseo aplica al español; la EN es traducción.
- Working tree del usuario: `.gitignore` y `package-lock.json` modificados + `image.png` untracked
  (NO commitearlos).

## Non-goals

- No se modifica el sitio en este turno: solo se crea el archivo de contexto.
- No se completan los `[COMPLETAR]` del copy (se conservan como pendientes marcados).
- No se inventan datos: todos los números son los que da la estrategia (con checklist de verificación).

## Tasks

1. [x] Explorar deftcode y verificar estado del copy actual (grep content.ts).
2. [x] Crear este feature doc + espejo Engram.
3. [ ] Escribir `ESTRATEGIA-COPY.md` (raíz, español, con mapeo a componentes y páginas reales).
4. [ ] Commit de los archivos nuevos (solo paths explícitos).

## Evidence

- Commit: (pendiente)
