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

- La versión EN se reescribe en otro turno (decisión del usuario 17/11: ES primero; las claves
  nuevas se agregan a ambas const para que el build pase, con traducciones breves).
- No se inventan datos: los `[COMPLETAR]` del copy quedan visibles como marcadores (decisión del
  usuario) y el checklist de §8 del doc los rastrea.
- No se pushea: el deploy a Vercel depende del push, y el push lo decide el usuario.

## Tasks (fase 2: aplicación al sitio, 17/11)

1. [x] Explorar deftcode y verificar estado del copy actual (grep content.ts).
2. [x] Crear este feature doc + espejo Engram + `ESTRATEGIA-COPY.md` (commit `00aaee4`).
3. [x] Delegar writer (gentle-ai-worker, budget 50 comandos): copy ES completo en `content.ts`
   + Navbar/Footer + WhatsAppFloatingButton + landing `/diagnostico` + formulario de 4 campos con
   éxito y preselección por query param. Reportado sin pendientes de brief.
4. [x] Verificar build del sitio: `npm run build` OK (34 páginas), `astro check` 0 errores,
   placeholders literales en dist, voseo sin tuteo residual (verificado por el padre).
5. [x] Work-unit commits + evidencia en este doc.

## Evidence (fase 2)

- `3c91d67` fix(en): remove pre-existing build blocker in projects slug page (mecánico: ternario
  con ambas ramas idénticas → literal; bloqueaba el build antes del writer).
- `10eeddc` feat(copy): apply diagnostic-first sales strategy to the Spanish site (18 archivos:
  content.ts +1191, types.ts +148, 10 componentes, layout, index, nosotros, landing nueva,
  botón WhatsApp nuevo).
- Desviaciones forzadas del writer (sin inventar datos): H1 del hero partido por el layout de
  16vw (concatenado = H1 del doc); la tabla de precios vive dentro de FaqSection (componente fuera
  de surfaces); §4 fichas de /servicios pendientes (páginas fuera de surfaces); "Nuestro enfoque"
  del §6 quedó como item del manifiesto; EN home/about muestran la versión breve de las claves
  nuevas (reescritura EN = otro turno).
- Placeholders visibles: número de WhatsApp, precios mensuales Base/Crecimiento/Pro, plazo del
  e-commerce, semanas de los casos 01-04, href de la calculadora (TODO), access key Web3Forms.

## Decisiones de producto (17/11, con el usuario)

- Placeholders: se aplican con `[COMPLETAR]` marcado; el usuario los cierra después.
- Alcance: lote completo (copy + landing `/diagnostico` + botón WhatsApp).
- Idioma: ES primero; EN después.
- CTA global del sitio apunta a `/contacto` (donde vive el formulario); la landing `/diagnostico`
  es para anuncios de Meta, sin menú, con el botón como ancla interna.
