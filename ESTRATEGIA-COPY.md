# Deftcode: estrategia de ventas y copy del sitio

> **Este es el documento de contexto de todo el copy y la estrategia de ventas de Deftcode.**
> Toda tarea de copy, UI o contenido nueva debe salir de acá y volver a acá: si una palabra,
> un número o un botón no está en este documento (o contradice una regla suya), está mal.
>
> Dónde vive el copy real del sitio: `src/lib/content.ts` (single source, exportado por claves
> `heroContent`, `marqueeItems`, `services`, `projects`, `manifesto`, `howWeWork`, `team`,
> `faqList`, `forWho`, `ctaContent`, `clientQuote`...). Este documento es la fuente **estratégica**;
> `content.ts` es la fuente **técnica**. Cuando este doc cambie, `content.ts` lo sigue.
>
> Creado: 17/11/2026 · @Agus · Base: video de marketing para estudios de desarrollo + reglas de
> UX/UI y copywriting + copy vigente del sitio.

---

## 0. Estado del repo frente a la estrategia (leer antes de tocar el sitio)

Lo verificado el 17/11/2026 contra el código:

- El copy actual (`src/lib/content.ts`) **no menciona el diagnóstico ni una sola vez** (`grep -c
  "iagnóstico"` = 0): la oferta de entrada aún no existe en el sitio. La estrategia que sigue
  todavía **no está aplicada**; este doc es la directriz para la reescritura.
- Componentes que ya existen y se mapean 1:1 con las secciones del home:
  `Hero.astro`, `SkewedMarquee.astro` (cinta), `FeaturedCase.astro` (prueba social),
  `ForWhoSection.astro` (¿te pasa esto? / ¿es para vos?), `ServicesList.astro` (escalera),
  `HowWeWorkSection.astro`, `ProjectsStack.astro` (casos), `ManifestoSection.astro`,
  `TeamSection.astro` + `TeamTeaser.astro`, `FaqSection.astro`, `CtaSection.astro`,
  `ContactFormSection.astro`, `Navbar.astro`, `Footer.astro`, `ClientQuote.astro`,
  `PageBanner.astro`.
- Páginas existentes: `/` (home), `/servicios` + fichas `[slug]`, `/proyectos` + fichas `[slug]`,
  `/nosotros`, `/contacto`, `/privacidad`, `404` y una versión completa en inglés (`src/pages/en/*`).
- Falta crear: la landing `/diagnostico` (sin menú), el CTA global "Quiero mi diagnóstico gratis",
  el formulario de 4 campos con pantalla de éxito, los precios con los `[COMPLETAR]` resueltos y
  los eventos de conversión (Pixel + CAPI).
- **Voseo:** regla del sitio en español. La versión EN no usa voseo (es traducción); al
  reescribir, cuidar que la EN no herede literalismos del español.
- No hay "no segmentamos por rubro" en la navegación: la segmentación por problema vive **solo
  dentro del home** (sección "¿Te pasa algo de esto?"). El rubro aparece como prueba, nunca como
  filtro.

---

## 1. Todo el sitio vende una sola cosa

**Un diagnóstico gratis de tu empresa, con prototipo antes de firmar.** Cada página y cada botón
llevan a pedirlo. No se vende desarrollo de entrada: se vende la primera charla.

### La oferta de entrada: Diagnóstico Deft

Los cuatro componentes que pide Hormozi:

| Componente | Cómo queda en la web |
|---|---|
| **Audiencia** | Dueños y gerentes de pymes que hoy mezclan planillas, WhatsApp y sistemas enlatados |
| **Resultado** | Un informe que dice qué procesos te cuestan plata y cuánto ahorrarías automatizándolos |
| **Plazo** | Informe en 48 h después de la entrevista; prototipo en [COMPLETAR: días] |
| **Reversión de riesgo** | Diagnóstico y prototipo gratis. No firmás nada hasta ver tu sistema funcionando |

### Escalera de venta (cada escalón vende el siguiente)

1. **Diagnóstico gratis** (entrevista de 2 horas + informe en 48 h).
2. **Prototipo gratis** de lo que se detectó.
3. **Proyecto a medida con precio cerrado**: CRM, ERP o landing.
4. **Suscripción mensual**: SEO y Meta Ads para landings, o mantenimiento con horas de desarrollo
   para sistemas.

### Reglas que aplica todo el copy

- Los titulares llevan **un número**, un **resultado del cliente** y responden un **miedo**
  (plazo o costo).
- Cada **botón dice qué pasa al hacer clic**. Todos apuntan a conseguir la primera charla, no a
  vender de entrada.
- **Prueba social en la primera pantalla**, con números reales.
- El formulario pide **solo cuatro datos**: nombre, empresa, email y teléfono.
- **Fotos de personas reales.** Nada de stock ni imágenes generadas con IA.
- **Voseo en todo el sitio.** (La versión EN es traducción, sin voseo.)

### De promesa vacía a hecho concreto

Hoy dice | Pasa a decir
--- | ---
Software a gran velocidad | Tu sistema en 3 a 6 semanas, con la fecha escrita en el contrato
Arquitecturas modernas, métricas en verde | Tu sitio carga en menos de 2 segundos en cualquier celular
Desarrollo ágil | Cada semana ves el avance real, no un resumen
Socio confiable | Si encontrás un error después del lanzamiento, lo arreglamos gratis
Enfoque personalizado | Entrevista de 2 horas sobre tu negocio y tus clientes
Cero intermediarios | Hablás directo con quien escribe el código

### Segmentación

No se segmenta por rubro. Se segmenta **por problema**, y solo dentro del home (sección
"¿Te pasa esto?") para que cada visitante se reconozca. El rubro aparece como **prueba**, nunca
como filtro.

---

## 2. Copy global (se repite en todas las páginas)

- **Navegación:** `INICIO | SERVICIOS | PROYECTOS | NOSOTROS | CONTACTO`, más un botón destacado
  a la derecha: **Quiero mi diagnóstico gratis**. (Vive en `Navbar.astro` + `navLinks`.)
- **Botón fijo de WhatsApp** (abajo a la derecha, en todo el sitio):
  - Texto: **Escribinos por WhatsApp**
  - Mensaje precargado: *"Hola, quiero mi diagnóstico gratis. Mi empresa es ___ y hoy manejamos
    todo en ___."*
- **Footer** (`Footer.astro`):
  - `DEFTCODE // © 2026 DEFTCODE STUDIO. TODOS LOS DERECHOS RESERVADOS.`
  - Línea nueva: **Diagnóstico gratis. Prototipo gratis. Precio cerrado.**
  - Links: `LINKEDIN | INSTAGRAM | PRIVACIDAD | ARRIBA`
  - Ubicación: `ROSARIO, ARGENTINA // TRABAJAMOS CON PYMES DE TODO EL PAÍS`
- **SEO del home:**
  - Meta title: **Software a medida en Rosario \| Diagnóstico gratis \| Deftcode**
  - Meta description: *Sistemas, CRM y ERP a medida en 3 a 6 semanas y a precio cerrado. Pedí tu
    diagnóstico gratis y mirá tu prototipo antes de firmar.*
  - Tagline (chico, no es titular): *Software a gran velocidad.*

---

## 3. Home (`/` — `/inicio`)

Vive en `src/pages/index.astro` con `Hero.astro`, `SkewedMarquee.astro`, `FeaturedCase.astro`,
`ForWhoSection.astro`, `ServicesList.astro`, `HowWeWorkSection.astro`, `ProjectsStack.astro`,
`ForWhoSection.astro` (¿es para vos?), `ManifestoSection.astro`, `TeamTeaser.astro`,
`FaqSection.astro`, `CtaSection.astro`.

### 3.1 Hero (`Hero.astro` + `heroContent`)

- Etiqueta superior: `ROSARIO, ARGENTINA // PARA PYMES DE TODO EL PAÍS`
- **H1:** Tu sistema a medida en 3 a 6 semanas y a precio cerrado. Primero lo ves, después firmás.
- Subtítulo: Hacemos un diagnóstico gratis de tu empresa y te mostramos un prototipo antes de
  firmar. Así una empresa de limpieza de Rosario ahorra $2.8M ARS por mes en sueldos.
- CTA principal: **Quiero mi diagnóstico gratis** (lleva al formulario)
- CTA secundario: **Ver cómo lo hicimos en AZ**
- Microcopy bajo el botón: Entrevista de 2 horas. Informe en 48 h. Es tuyo aunque no trabajemos juntos.
- Franja de números: `-$2.8M ARS/MES EN SUELDOS | 0 QUEJAS POR INASISTENCIA | 30+ EDIFICIOS EN VIVO | 0 PLAZOS INCUMPLIDOS`
- Línea de rol: `SISTEMAS A MEDIDA // CRM // ERP // LANDINGS QUE TRAEN CLIENTES`
- Imagen: foto real de Agustín y Franco trabajando. Sin stock.
- Texto circular: `DESLIZAR HACIA ABAJO • VER EL CASO REAL •`

### 3.2 Cinta (`SkewedMarquee.astro` + `marqueeItems`)

- Fila 1: `DIAGNÓSTICO GRATIS · PROTOTIPO GRATIS · PRECIO CERRADO · FECHA EN CONTRATO · CÓDIGO 100% TUYO · ENTREGAS SEMANALES`
- Fila 2: `SIN PLANILLAS · SIN WHATSAPP SUELTO · SIN SISTEMAS ENLATADOS · UN SOLO SISTEMA A TU MEDIDA · SOPORTE DESPUÉS DEL LANZAMIENTO · -$2.8M ARS/MES EN SUELDOS`

### 3.3 Prueba social (`FeaturedCase.astro` + `clientQuote`)

- **H2:** Una empresa de limpieza de Rosario dejó las planillas y hoy ahorra $2.8M ARS por mes.
- Descripción: Pidieron control de asistencia. Terminamos unificando asistencia, sueldos,
  impuestos y stock de más de 30 edificios en un solo sistema. Cero quejas por inasistencia.
- Cuatro números destacados: `-$2.8M ARS/MES EN SUELDOS | 0 QUEJAS POR INASISTENCIA | 30+ EDIFICIOS EN VIVO | 100% TRAZABLE`
- Cita (resaltar en naranja **"se resuelve de forma automática"**): *"Antes perdíamos horas
  llenando planillas a mano para saber quién había trabajado qué día en cada edificio, y encima
  las quejas por inasistencias eran un dolor de cabeza semana a semana. Con Deftcode ahora todo
  se carga solo, y una tarea que antes le consumía gran parte de su jornada a un empleado, hoy
  se resuelve de forma automática."* — Paola Zorila, AZ Servicios de Limpieza, Rosario.
- Imágenes: foto real de Paola y capturas reales del sistema funcionando (mapa en vivo,
  asistencia por QR).
- CTAs: **Calculá cuánto ahorraría tu empresa** \| **Ver el caso completo**

### 3.4 ¿Te pasa algo de esto? (`ForWhoSection.astro` + `forWho`)

- **H2:** ¿Te pasa algo de esto?
- Intro: Si marcaste una, el diagnóstico es para vos.
- **Tarjeta 1** — Ya no te alcanza el Excel. Planillas que solo entiende una persona, datos
  duplicados y errores que cuestan plata. Lo unificamos en un solo sistema hecho a tu medida.
  Botón: **Quiero salir de las planillas**
- **Tarjeta 2** — Perdés consultas entre WhatsApp, Instagram y mails. Las juntamos en un CRM con
  asignación por asesor. En una concesionaria centralizamos 4 canales y no se olvidó ningún lead.
  Botón: **Quiero ordenar mis consultas**
- **Tarjeta 3** — Un sistema para una cosa, un Excel para otra y WhatsApp para la tercera.
  Reemplazamos ese rompecabezas por un solo sistema a medida. Botón: **Quiero un solo sistema**
- **Tarjeta 4** — Tu web no te trae clientes. Landing con SEO y anuncios en Meta, con informe
  mensual. Botón: **Quiero más consultas**
- Cierre: Cada problema tiene su solución y todas empiezan igual: con un diagnóstico gratis.
- Los cuatro botones llevan al formulario del diagnóstico **con el problema ya elegido**.

### 3.5 Qué hacemos (`ServicesList.astro` + `services`)

- **H2:** Qué hacemos
- Intro: Todo empieza con el diagnóstico. Lo que sigue lo decide lo que encontremos.
- **( 00 ) EMPEZÁ ACÁ: DIAGNÓSTICO DEFT.** Entrevista de 2 horas sobre tu negocio, informe en 48 h
  con lo que te cuesta plata y prototipo gratis. Gratis. Botón: **Quiero mi diagnóstico gratis**
- **( 01 ) SISTEMAS DE GESTIÓN (ERP).** Asistencia, sueldos, stock, facturación y remitos en un
  solo lugar. Entre USD 1.000 y 2.000 según alcance. Listo en 3 a 6 semanas. Botón:
  **Ver un ERP funcionando**
- **( 02 ) CRM Y VENTAS.** Que no se pierda ninguna consulta ni ningún turno. Entre USD 1.000 y
  2.000 según alcance. Botón: **Ver un CRM funcionando**
- **( 03 ) LANDING + SEO + META ADS.** Tu web y clientes todos los meses. Landing desde USD 200,
  lista en 1 a 2 semanas; SEO y anuncios en plan mensual. Botón: **Quiero más consultas**
- **( 04 ) AUTOMATIZACIÓN CON IA.** Que tu equipo deje de repetir tareas: WhatsApp, AFIP/ARCA,
  integraciones. Se cotiza en el diagnóstico. Botón: **Ver qué se puede automatizar**

### 3.6 Cómo es tu diagnóstico gratis (`HowWeWorkSection.astro` + `howWeWork`)

- **H2:** Tu diagnóstico gratis, paso a paso
- Intro: Tres pasos, sin compromiso y sin tarjeta.
- **Paso 1. Entrevista de 2 horas.** En tu empresa o por videollamada. Nos contás cómo trabajás
  hoy y qué te hace perder tiempo o plata. Hablás con quien después escribe el código.
- **Paso 2. Informe en 48 horas.** Te decimos qué procesos te cuestan plata, cuánto ahorrarías y
  qué sistema conviene. Es tuyo aunque no trabajemos juntos.
- **Paso 3. Prototipo gratis.** Armamos una maqueta funcional de tu sistema para que lo veas
  antes de firmar. Si no te convence, no pagás nada.
- Botón: **Quiero mi diagnóstico gratis** · Microcopy: Solo te pedimos 4 datos.

### 3.7 Más software funcionando (`ProjectsStack.astro` + `projects`)

- **H2:** Más sistemas funcionando hoy
- Intro: Distintos rubros, el mismo método: diagnóstico, prototipo y entrega con fecha en el contrato.
- **AutoLeads** (concesionaria de vehículos). Juntamos los leads de WhatsApp, Instagram, Facebook
  y Mercado Libre en un solo CRM. 4 canales centralizados, cero leads olvidados. Botón: **Ver el caso**
- **LegalDesk** (estudio jurídico en dos países). Expedientes, vencimientos y finanzas en un solo
  lugar. Cero plazos vencidos y 60% menos de tiempo de búsqueda. Botón: **Ver el caso**
- **PediatricCare** (clínica pediátrica). Historia clínica electrónica y turnos en una sola
  plataforma. Botón: **Ver el caso**
- Banda final: **Ver los 6 casos**

### 3.8 ¿Es para vos? (`ForWhoSection.astro`, segunda pieza)

- **H2:** No trabajamos con cualquiera.
- Tarjeta naranja, **NO ES PARA VOS SI:** buscás el precio más bajo sin importar el resultado;
  querés solo algo lindo, sin métricas ni objetivos de negocio; preferís entregar el proyecto y
  olvidarte (sin tu opinión ningún sistema refleja cómo trabajás de verdad).
- Tarjeta clara, **ES PARA VOS SI:** tus procesos están claros y hoy viven en planillas; querés
  un sistema a medida o una landing que convierta, no una plantilla genérica; querés ver tu
  sistema antes de firmar, con precio cerrado y fecha en el contrato.
- Cierre: Si te viste en la segunda tarjeta, pedí tu diagnóstico gratis. Botón:
  **Quiero mi diagnóstico gratis**

### 3.9 Por qué Deftcode (`ManifestoSection.astro` + `manifesto`)

- **H2:** Lo que otros prometen, nosotros lo ponemos por escrito.
- Intro: Ni agencia carísima y burocrática, ni sistema enlatado que no encaja. A medida y a
  precio accesible.
- Fecha de entrega en el contrato. Nunca incumplimos un plazo.
- Prototipo gratis antes de firmar.
- Entrevista de 2 horas sobre tu negocio y tus clientes, no un formulario genérico.
- Si encontrás un error después del lanzamiento, lo arreglamos gratis.
- Entregas semanales: cada semana ves el avance real.
- El código es 100% tuyo.
- No esperamos a que nos encuentres: vamos a tu empresa, entendemos tu negocio y te decimos
  dónde se te va la plata.

### 3.10 Quién construye (`TeamTeaser.astro` / `TeamSection.astro` + `team`)

- **H2:** Hablás directo con quien escribe el código.
- Intro: Somos gente de sistemas que entiende de negocios. Sin project managers en el medio.
- **Agustín Angelini**, desarrollador full stack. Frontend e integraciones con IA. Me gusta que
  el software sea rápido, simple y fácil de usar.
- **Franco Cuscianna**, desarrollador full stack. Backend y arquitectura de sistemas. Me gusta
  que el software sea sólido, seguro y escalable.
- Imágenes: fotos reales de cada uno. Sin stock.
- Botón: **Conocé al equipo**

### 3.11 Precios de referencia

- **H2:** Cuánto cuesta, sin vueltas.
- Intro: Estos son los rangos. El precio cerrado lo definimos después del diagnóstico.

| Qué | Desde | Plazo |
|---|---|---|
| Landing page | USD 200 | 1 a 2 semanas |
| CRM o ERP a medida | USD 1.000 a 2.000 | 3 a 6 semanas |
| E-commerce | USD 1.500 a 3.000 | [COMPLETAR: semanas] |
| SEO + Meta Ads (plan mensual) | USD [COMPLETAR] por mes | Desde el primer mes |

- Se paga un anticipo al iniciar y el saldo contra entrega validada en producción.

### 3.12 Preguntas frecuentes (`FaqSection.astro` + `faqList`)

- **H2:** Preguntas frecuentes
- Intro: Respuestas directas sobre costos, plazos y riesgos.
- **¿Cuánto cuesta?** Una landing, desde USD 200. Un CRM o ERP a medida, entre USD 1.000 y 2.000
  según alcance. Después del diagnóstico recibís un presupuesto cerrado.
- **¿De verdad el diagnóstico es gratis? ¿Cuál es el truco?** No hay truco. Preferimos ganarnos tu
  confianza antes de que gastes un peso. Vos ves qué encontramos y qué conviene, y decidís. El
  informe es tuyo aunque elijas a otro.
- **¿Cuánto demora?** Landings en 1 a 2 semanas. Sistemas a medida en 3 a 6 semanas, con avances
  visibles desde los primeros días.
- **¿Cómo sé que van a cumplir el plazo si son una empresa nueva?** No dependés de nuestra
  palabra: la fecha de lanzamiento y las entregas semanales quedan en el contrato antes de
  arrancar. Hasta hoy nunca incumplimos un plazo.
- **¿Y si el sistema no se adapta a cómo trabajo?** Por eso primero hacemos el prototipo: lo
  probás antes de firmar. Después del lanzamiento, el mantenimiento mensual incluye horas de
  desarrollo para los cambios.
- **¿Qué pasa después del lanzamiento?** Seguimos disponibles. Si encontramos un error, te
  avisamos antes de que lo notes. Si lo encontrás vos, nos escribís y lo resolvemos sin cargo.
- **¿El sitio incluye SEO?** Toda landing sale con SEO técnico: etiquetas sociales, datos
  estructurados, sitemap y carga en menos de 2 segundos en el celular. Si querés seguir
  posicionándote y sumar Meta Ads, está el plan mensual.
- **¿El código es mío?** Sí, 100%. Podés contratar mantenimiento con nosotros o capacitamos a tu
  equipo para que sea autónomo.
- **¿Cómo es el pago?** Presupuesto cerrado. Un anticipo al iniciar y el saldo contra entrega
  validada en producción.

### 3.13 CTA final (`CtaSection.astro` + `ctaContent`)

- **H2:** Descubrí cuánto te cuestan hoy tus planillas.
- Subtítulo: Entrevista de 2 horas, informe en 48 h y prototipo gratis. Sin compromiso.
- Formulario: Nombre \| Empresa \| Email \| Teléfono
- Botón: **Quiero mi diagnóstico gratis**
- Botón secundario: **Prefiero escribir por WhatsApp**
- Microcopy: Te escribimos para coordinar la entrevista. No te pedimos tarjeta.

---

## 4. Servicios (`/servicios` + fichas `[slug]`)

Página índice (`servicios/index.astro` + `PageBanner.astro`):

- Meta title: **Sistemas, CRM, ERP y landings a medida \| Deftcode**
- **H1:** Sistemas a medida que reemplazan tus planillas en 3 a 6 semanas.
- Intro: Siempre empezamos con un diagnóstico gratis. Después elegís qué construir, con precio
  cerrado y fecha en el contrato.
- Botón de la página: **Quiero mi diagnóstico gratis**

### Ficha: Sistemas de gestión (ERP)

- **H1:** Controlá personal, stock y facturación en un solo sistema, sin planillas.
- Descripción: Reemplazamos el Excel, el WhatsApp y el sistema enlatado por un único sistema
  hecho a tu medida.
- Incluye: asistencia por geolocalización y QR; cálculo automático de sueldos; control de stock;
  facturación, remitos y cuentas corrientes; supervisión en mapa en vivo.
- Plazo y precio: 3 a 6 semanas. Entre USD 1.000 y 2.000 según alcance.
- Prueba: AZ Servicios de Limpieza, -$2.8M ARS/mes en sueldos y 30+ edificios en vivo.
- CTA: **Quiero ver mi prototipo gratis**

### Ficha: CRM y ventas

- **H1:** Que no se te pierda ninguna consulta: todos tus canales en un solo CRM.
- Descripción: Unificamos WhatsApp, Instagram, Facebook, Mercado Libre y tus turnos en una base
  con asignación por asesor.
- Incluye: leads de todos los canales; asignación por asesor; agendas y turnos; cotizadores;
  reportes en segundos.
- Plazo y precio: 3 a 6 semanas. Entre USD 1.000 y 2.000 según alcance.
- Prueba: concesionaria oficial, 4 canales centralizados y cero leads olvidados.
- CTA: **Quiero ordenar mis consultas**

### Ficha: Landing + SEO + Meta Ads (plan Web + Clientes)

- **H1:** Tu web lista en 1 a 2 semanas y clientes que llegan todos los meses.
- Descripción: No vendemos una landing y después te dejamos solo. Vendemos un plan: la web, que
  te encuentren en Google y anuncios en Meta que traen consultas, con informe mensual.
- Pago: un setup único por la landing y una mensualidad por SEO y anuncios. La inversión en
  anuncios la pagás vos directo a Meta.

| Plan | Qué incluye | Setup | Por mes |
|---|---|---|---|
| **Base** | Landing + SEO técnico + informe mensual de posicionamiento | Desde USD 200 | USD [COMPLETAR] |
| **Crecimiento** | Base + campaña en Meta Ads (Pixel/CAPI, formulario o WhatsApp) + creativos nuevos cada mes | Desde USD 200 | USD [COMPLETAR] |
| **Pro** | Crecimiento + optimización continua, pruebas A/B y reporte de costo por consulta | Desde USD 200 | USD [COMPLETAR] |

- **Garantía propuesta (confirmar que pueden cumplirla):** medición funcionando desde el día 1 e
  informe mensual con costo por consulta. Si no lo recibís, ese mes no pagás. **No se garantiza
  cantidad de consultas** porque depende del rubro y de la inversión en anuncios.
- Prueba: sitio de AZ Servicios (100/100 en Lighthouse, carga en menos de 0.6 s) y portal
  pediátrico (+150% de reservas desde el celular). **Verificar ambos números antes de publicar.**
- Y después: cuando llegan las consultas, el CRM las ordena. Botón: **Ver el CRM**
- CTA: **Quiero más consultas**

### Ficha: Automatización con IA

- **H1:** Que tu equipo deje de repetir tareas.
- Descripción: Conectamos tus sistemas, WhatsApp y AFIP/ARCA, y sumamos IA donde ahorra horas de
  verdad.
- Incluye: integraciones entre sistemas; respuestas y avisos por WhatsApp; carga automática de
  datos; IA para buscar en documentos.
- Precio: se cotiza en el diagnóstico.
- Prueba: estudio jurídico internacional, 60% menos de tiempo de búsqueda con biblioteca
  jurídica con IA.
- CTA: **Quiero ver qué se puede automatizar**

---

## 5. Proyectos (`/proyectos` + fichas `[slug]`)

Página índice (`proyectos.astro` + `ProjectsStack.astro` + `project-images.ts`):

- Meta title: **Casos reales: sistemas, CRM y landings en producción \| Deftcode**
- Meta description: *Mirá qué ahorró, ordenó y vendió cada sistema que construimos: ERP, CRM,
  landings y portales en producción.*
- **H1:** Software real que ahorra plata y tiempo, con números.
- Intro: Cada caso muestra qué problema tenía el cliente, cuánto tardamos y qué cambió. Los tuyos
  pueden empezar con un diagnóstico gratis.
- Botón de la página: **Quiero mi diagnóstico gratis**
- Cada tarjeta lleva **problema → solución → resultado**, una foto o captura real del sistema y
  el botón "Ver el caso completo".

| Caso | Titular | Resultado | Plazo |
|---|---|---|---|
| **[01] ServiceTrack, AZ Servicios de Limpieza** | De planillas a un sistema que ahorra $2.8M ARS por mes | -$2.8M ARS/mes en sueldos, 0 quejas por inasistencia, 30+ edificios en vivo, 100% trazable | [COMPLETAR: semanas] |
| **[02] LegalDesk, estudio jurídico internacional** | Dos países, un solo sistema, cero plazos vencidos | 2 jurisdicciones en vivo, -60% de tiempo de búsqueda, cero plazos vencidos | [COMPLETAR: semanas] |
| **[03] PediatricCare, clínica pediátrica** | Historia clínica y turnos sin papeles, conforme a la Ley 26.529 | +85% de velocidad de consulta, 0 antecedentes extraviados | [COMPLETAR: semanas] |
| **[04] AutoLeads, concesionaria oficial** | Cuatro canales de consultas en un solo CRM | 4 canales centralizados, +40% de tasa de contacto, cero leads olvidados | [COMPLETAR: semanas] |
| **[05] Sitio de AZ Servicios** | Una web que trae consultas calificadas | +120% de leads calificados, carga en menos de 0.6 s | 1 a 2 semanas |
| **[06] Portal pediátrico** | Turnos desde el celular, sin esperas | +150% de reservas móviles, 100% accesible | 1 a 2 semanas |

Descripciones de cada tarjeta (problema → solución):

- **[01]** Controlar la asistencia de personal en decenas de edificios era una tarea diaria llena
  de planillas y reclamos. Hoy asistencia por geolocalización y QR, sueldos automáticos según el
  convenio, stock y un mapa en vivo.
- **[02]** Expedientes, vencimientos y finanzas vivían en lugares distintos. Hoy una plataforma
  con agenda de vencimientos, control financiero y biblioteca jurídica con IA.
- **[03]** Antecedentes en papel y turnos desordenados. Hoy historia clínica electrónica, agenda
  inteligente, panel en tiempo real y recetas en PDF.
- **[04]** Las consultas llegaban por WhatsApp, Instagram, Facebook y Mercado Libre, y algunas se
  perdían. Hoy una sola base, con asignación por asesor y métricas de conversión.
- **[05]** Una web que no mostraba por qué confiar en AZ. Hoy propuesta de valor de personal
  asegurado y supervisión GPS, captación calificada e integración con el ERP bajo el mismo dominio.
- **[06]** Pedir un turno era difícil para las familias. Hoy un flujo de solicitud simple,
  pensado para el celular.

- Directorio de casos: **"Todos los proyectos"**. Intro: Elegí un caso para ver su ficha completa.
- CTA final: Descubrí cuánto te cuestan hoy tus planillas. Botón: **Quiero mi diagnóstico gratis.**

---

## 6. Nosotros (`/nosotros`)

Página (`nosotros.astro` + `PageBanner.astro`, `ManifestoSection.astro`, `HowWeWorkSection.astro`,
`TeamSection.astro`, `ClientQuote.astro`):

- Meta title: **Quiénes somos: desarrolladores que entienden de negocios \| Deftcode**
- Meta description: *Conocé a Agustín y Franco, el método de diagnóstico gratis y las garantías
  por escrito con las que trabajamos.*

**Banner:**
- **H1:** Somos los que escriben el código. Y los que firmamos la fecha de entrega.
- Intro: Somos gente de sistemas que entiende de negocios. Primero entendemos cómo trabajás,
  después te mostramos un prototipo y recién ahí firmás. Entregamos en semanas, no en semestres.
- Botón: **Quiero mi diagnóstico gratis**

**Lo que te garantizamos (`HowWeWorkSection.astro` o sección propia):**
- **H2:** Lo que te garantizamos, por escrito
- Intro: Cada punto queda en el contrato.
- **01.** Fecha de entrega en el contrato. Nunca incumplimos un plazo. Cada semana ves el avance real.
- **02.** Prototipo gratis antes de firmar. Lo ves funcionando con tus datos. Si no te convence, no pagás.
- **03.** Precio cerrado. Un anticipo al iniciar y el saldo contra entrega validada en producción.
- **04.** Errores arreglados gratis. Si encontrás un error después del lanzamiento, lo arreglamos sin cargo.
- **05.** Código 100% tuyo. Lo mantenemos nosotros o capacitamos a tu equipo.

**El manifiesto Deft, en lenguaje de beneficio (`ManifestoSection.astro` + `manifesto`):**
- **H2:** Nuestros principios
- **01. Rapidez con orden.** Entregamos en semanas con código y documentación que son tuyos al 100%.
- **02. Una web liviana.** Tu sitio carga en menos de 2 segundos, también en el celular de tus clientes.
- **03. Sistemas que dan resultado.** Un sistema elegante que no factura, no convierte o no se
  puede mantener no sirve. Medimos ahorro y ventas.
- **04. Sin intermediarios.** Hablás con quienes tocan tu código. Sin project managers que
  demoran las decisiones.

**Cómo trabajamos (`HowWeWorkSection.astro` + `howWeWork`):**
- **H2:** De la primera charla a tu sistema funcionando, en 4 pasos
- **01. Diagnóstico gratis** (entrevista de 2 horas + informe en 48 h). Entendemos tu negocio y
  te decimos dónde se te va la plata.
- **02. Prototipo gratis.** Ves una maqueta funcional de tu sistema antes de firmar.
- **03. Desarrollo en semanas.** Avances semanales visibles en un entorno de prueba. Vos opinás
  mientras se construye.
- **04. Lanzamiento y soporte.** Salimos a producción con documentación. Después, mantenimiento
  mensual con horas de desarrollo para los cambios.

**Nuestro enfoque:**
- **H2:** No esperamos a que nos encuentres.
- Texto: La mayoría de las pymes nunca pensó que necesitaba un sistema, hasta que ve cuánto le
  cuesta no tenerlo. Por eso vamos a entender tu negocio, te decimos dónde se te va la plata y
  recién después hablamos de software.

**Equipo (`TeamSection.astro` + `team`):**
- **H2:** Hablás directo con quienes escriben el código
- Intro: Desarrolladores que entienden de negocio.
- **Agustín Angelini**, desarrollador full stack. Frontend e integraciones con IA. Me gusta que
  el software sea rápido, simple y fácil de usar. Links: GitHub \| LinkedIn
- **Franco Cuscianna**, desarrollador full stack. Backend y arquitectura de sistemas. Me gusta
  que el software sea sólido, seguro y escalable. Links: GitHub \| LinkedIn
- Imágenes: fotos reales de cada uno, idealmente trabajando con un cliente. Sin stock.

**Testimonio (`ClientQuote.astro` + `clientQuote`):**
- Cita: *"Antes perdíamos horas llenando planillas a mano para saber quién había trabajado qué
  día en cada edificio, y encima las quejas por inasistencias eran un dolor de cabeza semana a
  semana. Con Deftcode ahora todo se carga solo, y una tarea que antes le consumía gran parte de
  su jornada a un empleado, hoy **se resuelve de forma automática**. Para mí fue de las mejores
  decisiones que tomé en la empresa, ya que dejé de lidiar con problemas cotidianos y puse mi
  foco en hacer crecer el negocio."* (resaltar en naranja: "se resuelve de forma automática")
- Firma: Paola Zorila, AZ Servicios de Limpieza, Rosario. Foto real.
- Links: Ver el caso completo

**CTA final (`CtaSection.astro`):**
- **H2:** Descubrí cuánto te cuestan hoy tus planillas.
- Botón: **Quiero mi diagnóstico gratis**

---

## 7. Contacto y landing del diagnóstico (`/contacto` y `/diagnostico`)

`/contacto` (`contacto.astro` + `ContactFormSection.astro`) y la landing para anuncios de Meta
comparten estructura. **La landing `/diagnostico` es una página nueva que hay que crear: no tiene
menú ni distracciones, solo esta oferta.**

- Meta title: **Diagnóstico gratis para tu empresa \| Deftcode**
- Meta description: *Entrevista de 2 horas, informe en 48 h y prototipo gratis. Sin compromiso.
  Pedilo ahora.*

**Hero:**
- **H1:** Descubrí cuánto te cuestan hoy tus planillas. Diagnóstico gratis en 48 horas.
- Subtítulo: Una entrevista de 2 horas sobre tu negocio y un informe con qué procesos te hacen
  perder plata y cuánto ahorrarías. El informe es tuyo aunque no trabajemos juntos.
- CTA: **Quiero mi diagnóstico gratis**
- Prueba justo debajo: Una empresa de limpieza de Rosario ahorra $2.8M ARS por mes desde que
  dejó las planillas.

**Qué recibís:**
- Un informe de una página con los 3 procesos que más te cuestan, en pesos por mes.
- Qué se automatiza primero y qué sistema conviene (CRM, ERP, landing o IA).
- Un rango de precio y de plazo reales para cada opción.
- Un prototipo gratis de lo más importante, para que lo veas antes de firmar.
- Un video corto con los hallazgos, para compartirlo con tu equipo o tu socio.

**Qué NO es:**
- No es una llamada de ventas.
- No tiene costo ni te pedimos tarjeta.
- No te obliga a contratarnos.

**Formulario (fricción cero, `ContactFormSection.astro`):**
- Nombre \| Empresa \| Email \| Teléfono
- Botón: **Quiero mi diagnóstico gratis**
- Microcopy: Te escribimos hoy para coordinar la entrevista. Solo usamos tus datos para eso.
- Alternativa: **Prefiero escribir por WhatsApp** (mensaje precargado)
- Pantalla de éxito: **Listo, [nombre].** Te escribimos hoy para coordinar tu entrevista de
  2 horas. Mientras tanto: **Calculá cuánto ahorraría tu empresa.**

### Reglas de la landing de Meta Ads

- Una sola oferta y un solo botón repetido: sin menú ni links que saquen al usuario.
- Prueba social en la primera pantalla: el caso AZ con números y la foto de Paola.
- El mensaje del anuncio y el H1 de la landing dicen lo mismo.
- Pixel y API de conversiones instalados antes de lanzar la campaña.
- Un evento por cada formulario enviado y por cada clic al WhatsApp.

### Textos de anuncios para Meta (variantes a probar)

| Variante | Titular | Texto | Botón |
|---|---|---|---|
| **A, ahorro** | Una empresa de Rosario ahorra $2.8M ARS por mes | Dejó las planillas y hoy todo se carga solo. Pedí tu diagnóstico gratis y mirá cuánto ahorrarías vos. | Quiero mi diagnóstico |
| **B, planillas** | ¿Tu empresa todavía se maneja con Excel? | Te decimos en 48 h qué procesos te cuestan plata. Gratis, y el informe es tuyo. | Quiero mi diagnóstico |
| **C, consultas** | ¿Perdés consultas entre WhatsApp, Instagram y mails? | Las juntamos en un CRM a tu medida. Prototipo gratis antes de firmar. | Quiero mi diagnóstico |
| **D, riesgo** | Ves tu sistema funcionando antes de firmar | Prototipo gratis, precio cerrado y fecha de entrega en el contrato. | Quiero mi diagnóstico |

### Medición

**Costo por lead × (leads que llegan a la entrevista) × tasa de cierre = costo por cliente.**
Si un proyecto promedio deja más que ese costo, se escala la inversión.

---

## 8. Pendientes antes de publicar

El copy promete cosas por escrito. Estos puntos hay que cerrarlos para que cada promesa sea real:

- [ ] Confirmar la garantía del prototipo gratis: qué incluye, en cuántos días se entrega y qué
      pasa si no convence.
- [ ] Poner en el contrato la fecha de entrega y la frase "cumplimiento garantizado o desarrollo
      gratis", y decidir si se bonifica parte del costo si se atrasan.
- [ ] Completar los `[COMPLETAR]`: semanas de cada caso, plazo del e-commerce y precios mensuales
      de los planes SEO + Meta Ads.
- [ ] Verificar cada número del portfolio: +120% de leads, +150% de reservas, +40% de contacto,
      -60% de tiempo de búsqueda, +85% de velocidad, 100/100 en Lighthouse y menos de 0.6 s.
      Con garantías escritas, un número inflado es un problema.
- [ ] Confirmar con Paola que se puede publicar su nombre, su foto y el número de $2.8M ARS, o
      anonimizar el caso conservando el número.
- [ ] Conseguir fotos reales: Agustín, Franco, Paola y capturas del sistema funcionando. Nada de
      stock ni imágenes de IA.
- [ ] Pedir 2 o 3 testimonios más (concesionaria, clínica, estudio jurídico) con líneas textuales.
- [ ] Armar un lead magnet para quien todavía no quiere hablar: calculadora de ahorro basada en
      el caso AZ, o checklist "5 señales de que tu pyme necesita un sistema y no un Excel".
- [ ] Preparar el informe modelo de una página y el video corto de hallazgos que se entregan en
      el diagnóstico.
- [ ] Definir el número de WhatsApp y el mensaje precargado.
- [ ] Instalar Pixel de Meta y API de conversiones antes de lanzar anuncios.
- [ ] Revisar que todo el sitio use voseo (hay "Hablas", "Conoce" y "Explora" en la versión
      anterior).
- [ ] Confirmar la capacidad: cuántos diagnósticos por semana pueden hacer, porque cada uno son
      2 horas de entrevista más el informe.

## 9. Orden de canales sugerido

1. **Meta Ads** hacia la landing del diagnóstico (previsibilidad y escala).
2. **Prospección directa** por WhatsApp y puerta a puerta, con el caso AZ como gancho.
3. **Alianzas** con contadores, estudios y cámaras empresarias.
4. **Contenido** en paralelo, sabiendo que da resultados a los 6 a 12 meses.

---

## Fuentes de esta estrategia

El video de marketing para estudios de desarrollo (liderar con valor, oferta de entrada, venta
de diagnóstico), las reglas de oro de UX/UI y copywriting, y el copy actual del sitio.
