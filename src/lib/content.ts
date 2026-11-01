import type {
  Lang,
  SiteMeta,
  NavLink,
  ServiceItem,
  ProjectItem,
  TeamMember,
  WorkStep,
  FaqItem,
  SocialLink,
  PageContent,
  CtaContent,
  HeroContent,
  ManifestoItem,
} from "./types";

// ==========================================
// SPANISH DICTIONARY (DEFAULT)
// ==========================================

const esSiteMeta: SiteMeta = {
  title: "DEFTCODE // HIGH-VELOCITY SOFTWARE & DIGITAL ENGINEERING",
  description:
    "Desarrollo de software ágil, moderno y de alto rendimiento. Creamos plataformas web, sistemas a medida y experiencias digitales con velocidad implacable y máxima precisión técnica.",
  siteUrl: "https://deftcode.dev",
  ogImage: "/og-deftcode.png",
  author: "Deftcode Studio",
  location: "ROSARIO, ARGENTINA // WORLDWIDE",
  tagline: "SOFTWARE AT VELOCITY",
  foundedYear: 2026,
};

const esNavLinks: NavLink[] = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "/#servicios" },
  { label: "PROYECTOS", href: "/proyectos/" },
  { label: "NOSOTROS", href: "/nosotros/" },
  { label: "CONTACTO", href: "/contacto/" },
];

const esPages: Record<string, PageContent> = {
  nosotros: {
    title: "NOSOTROS // MANIFIESTO & EQUIPO - DEFTCODE",
    description:
      "Conoce la filosofía de Deftcode: velocidad de desarrollo, ingeniería moderna sin burocracia y foco obsesivo en rendimiento y valor de negocio.",
    eyebrow: "FILOSOFÍA & INGENIERÍA",
    h1: "VELOCIDAD, PRECISIÓN Y CERO CÓDIGO BASURA.",
    intro:
      "Cambiamos el paradigma de las agencias tradicionales lentas. En Deftcode construimos software con stacks de última generación, arquitectura limpia y entregas continuas en semanas, no en semestres.",
  },
  proyectos: {
    title: "PROYECTOS // PORTFOLIO & CASOS DE ESTUDIO - DEFTCODE",
    description:
      "Explora nuestros sistemas en producción: plataformas ERP corporativas, aplicaciones web y arquitecturas SSG con puntuaciones perfectas en Core Web Vitals.",
    eyebrow: "CASOS EN PRODUCCIÓN",
    h1: "SOFTWARE REAL PARA PROBLEMAS REALES.",
    intro:
      "Cada desarrollo está optimizado para maximizar conversión, reducir costos de infraestructura y escalar sin fricción operativa.",
  },
  contacto: {
    title: "CONTACTO // INICIA TU PROYECTO - DEFTCODE",
    description:
      "Hablemos sobre tu próximo producto digital. Presupuestos transparentes, análisis de arquitectura sin costo y respuesta en menos de 24 horas.",
    eyebrow: "CANAL DIRECTO",
    h1: "CONSTRUYAMOS ALGO POTENTE.",
    intro:
      "Respondemos de inmediato. Sin reuniones inútiles: definimos objetivos técnicos, estimamos tiempos y comenzamos a construir.",
  },
  privacidad: {
    title: "POLÍTICA DE PRIVACIDAD - DEFTCODE",
    description:
      "Compromiso de privacidad de Deftcode: sin cookies invasivas de terceros, analítica anónima y respeto total por tus datos personales.",
    eyebrow: "LEGAL & COMPLIANCE",
    h1: "PRIVACIDAD TRANSPARENTE.",
  },
};

const esHeroContent: HeroContent = {
  headlineMain: "DEFTCODE",
  headlineSub: "SOFTWARE AT VELOCITY",
  badge: "SYSTEMS / WEB / SAAS",
  locationText: "BASED IN ROSARIO, AR // WORLDWIDE REMOTE",
  roleText: "AGILE DIGITAL ENGINEERING // MODERN ARCHITECTURES // HIGH-PERFORMANCE WEB",
  ctaLabel: "INICIAR PROYECTO",
  ctaHref: "/contacto/",
  scrollText: "SCROLL DOWN • EXPLORE DEFT • ",
};

const esMarqueeItems = {
  row1: [
    "HIGH-VELOCITY DEV",
    "MODERN ARCHITECTURES",
    "ZERO-JANK MOTION",
    "DEFT & PRECISE",
    "BUILT FOR SCALE",
    "HIGH-VELOCITY DEV",
  ],
  row2: [
    "ASTRO SSG",
    "TYPESCRIPT",
    "TAILWIND CSS V4",
    "EDGE RUNTIME",
    "CORE WEB VITALS 100",
    "FULL-STACK SAAS",
  ],
};

const esServices: ServiceItem[] = [
  {
    id: "web-apps",
    index: "01",
    title: "FULL-STACK APPS & SAAS",
    description:
      "Arquitecturas modernas de software con rendimiento implacable. Aplicaciones web reactivas, paneles de control en tiempo real y APIs escalables diseñadas sin código espagueti.",
    tags: ["TYPESCRIPT", "EDGE ARCHITECTURE", "DATABASE DESIGN", "REALTIME"],
  },
  {
    id: "landing-performance",
    index: "02",
    title: "HIGH-VELOCITY LANDINGS",
    description:
      "Sitios institucionales y landings de ultra alto impacto. Cero tiempo de bloqueo (TBT 0ms), 100 en Lighthouse y posicionamiento SEO agresivo para maximizar conversiones.",
    tags: ["ASTRO SSG", "100/100 LIGHTHOUSE", "SEO AGRESIVO", "CONVERSION RATE"],
  },
  {
    id: "bespoke-systems",
    index: "03",
    title: "SISTEMAS & ERP A MEDIDA",
    description:
      "Digitalización de procesos críticos de negocio. Software corporativo a medida que reemplaza hojas de cálculo caóticas por flujos automatizados, seguros y trazables.",
    tags: ["AUTOMATIZACIÓN", "INTEGRACIONES", "WORKFLOWS", "SEGURIDAD"],
  },
  {
    id: "performance-optimization",
    index: "04",
    title: "PERFORMANCE & REFACTORING",
    description:
      "Auditoría técnica, optimización extrema de Core Web Vitals y reestructuración de código legado para equipos que necesitan velocidad inmediata y código mantenible.",
    tags: ["CORE WEB VITALS", "AUDITORÍA", "REFACTORING", "A11Y"],
  },
];

const esProjects: ProjectItem[] = [
  {
    id: "empresa-limpieza",
    imageKey: "empresa-limpieza",
    slug: "empresa-limpieza-rosario",
    title: "SERVICETRACK — GESTIÓN EMPRESA DE LIMPIEZA",
    client: "Empresa de limpieza corporativa · Rosario, Santa Fe",
    category: "SISTEMA DE GESTIÓN (ERP)",
    year: "2026",
    description:
      "Asistencia por geolocalización y QR en más de 30 edificios, cálculo automático de sueldos según CCT, control de stock y supervisión en mapa en vivo.",
    metrics: ["-$2.8M ARS/MES EN SUELDOS", "0 QUEJAS POR INASISTENCIA", "30+ EDIFICIOS EN VIVO", "100% TRAZABLE"],
    tags: ["NODE.JS", "TYPESCRIPT", "POSTGRESQL", "QR SCANNER", "GEOLOCALIZACIÓN GPS"],
    fullOverview:
      "Sistema de gestión operativa que reemplazó el control manual en papel y planillas para cuadrillas en más de 30 ubicaciones simultáneas.",
    challenge:
      "El control de más de 30 edificios se hacía por planillas de Excel y WhatsApp, con 4 a 6 quejas de clientes por mes por inasistencias no verificables y días enteros dedicados al cierre de mes cruzando datos a mano.",
    solution:
      "Plataforma web donde el personal registra entrada y salida validada por código QR y GPS en su celular, liquidando sueldos en minutos y alertando inasistencias en un mapa en tiempo real.",
  },
  {
    id: "gestion-legal",
    imageKey: "gestion-legal",
    slug: "gestion-legal-estudio",
    title: "LEGALDESK — GESTIÓN JURÍDICA INTEGRAL",
    client: "Estudio jurídico internacional · Argentina y Paraguay",
    category: "SISTEMA DE GESTIÓN (ERP)",
    year: "2026",
    description:
      "Plataforma para administrar expedientes judiciales y extrajudiciales en dos países, agenda de vencimientos, control financiero y biblioteca jurídica con IA.",
    metrics: ["2 JURISDICCIONES EN VIVO", "100% TRAZABILIDAD", "-60% TIEMPO DE BÚSQUEDA", "CERO PLAZOS VENCIDOS"],
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "PRISMA", "IA INTEGRADA"],
    fullOverview:
      "Sistema integral en la nube diseñado para firmas jurídicas que gestionan causas y clientes corporativos transfronterizos.",
    challenge:
      "Expedientes físicos dispersos entre dos países, seguimiento de plazos en libretas personales y horas invertidas buscando jurisprudencia en boletines oficiales.",
    solution:
      "Base unificada en la nube con alertas automáticas de caducidad procesal, liquidación de honorarios multimoneda y motor de IA con verificación estricta de fuentes oficiales.",
  },
  {
    id: "sistema-pediatrico",
    imageKey: "sistema-pediatrico",
    slug: "sistema-clinica-pediatrica",
    title: "PEDIATRICCARE — GESTIÓN CLÍNICA PEDIÁTRICA",
    client: "Clínica pediátrica ambulatoria · Argentina",
    category: "SALUD & ERP",
    year: "2025",
    description:
      "Historia clínica electrónica conforme a la Ley 26.529, agenda de turnos inteligente, panel clínico en tiempo real y emisión digital de recetas médicas en PDF.",
    metrics: ["LEY 26.529 CONFORME", "0 EXTRAVÍO DE ANTECEDENTES", "+85% VELOCIDAD DE CONSULTA", "100% DIGITAL"],
    tags: ["NEXT.JS", "NESTJS", "POSTGRESQL", "PRISMA", "TAILWIND CSS", "PDF GENERATION"],
    fullOverview:
      "Digitalización integral del flujo ambulatorio médico, conectando recepción, consultorios y pacientes en un entorno seguro y confidencial.",
    challenge:
      "Fichas pediátricas físicas propensas a extravío, demoras excesivas para localizar antecedentes al momento de la consulta y retrasos en sala de espera por turnos duplicados.",
    solution:
      "Plataforma clínica reactiva con buscador instantáneo de pacientes, curvas de crecimiento percentilares automáticas y emisión de órdenes firmadas digitalmente.",
  },
  {
    id: "crm-concesionaria",
    imageKey: "crm-concesionaria",
    slug: "crm-concesionaria-rosario",
    title: "AUTOLEADS — CRM DE VENTAS PARA CONCESIONARIA",
    client: "Concesionaria oficial de vehículos · Rosario, Santa Fe",
    category: "VENTAS (CRM)",
    year: "2025",
    description:
      "Centralización de leads de WhatsApp, Instagram, Facebook y Mercado Libre en una sola base unificada con asignación por asesor y métricas de conversión.",
    metrics: ["4 CANALES CENTRALIZADOS", "+40% TASA DE CONTACTO", "CERO LEADS OLVIDADOS", "REPORTE EN SEGUNDOS"],
    tags: ["REACT", "VITE", "PRIMEREACT", ".NET 9", "DAPPER", "POSTGRESQL", "DOCKER"],
    fullOverview:
      "Plataforma comercial desarrollada para concesionarias automotrices que procesan cientos de consultas digitales semanales.",
    challenge:
      "Vendedores cargando consultas en planillas de Excel separadas, prospectos que quedaban sin respuesta durante días y nula trazabilidad de qué canal generaba ventas reales.",
    solution:
      "CRM a medida con Webhooks y APIs de captura inmediata, filtros avanzados por marca/modelo, asignación round-robin equitativa y exportación de métricas en vivo.",
  },
  {
    id: "landing-limpieza",
    imageKey: "landing-limpieza",
    slug: "landing-empresa-limpieza",
    title: "AZ SERVICIOS — SITIO WEB CORPORATIVO",
    client: "AZ Servicios de Limpieza · Rosario, Santa Fe",
    category: "LANDING & WEB",
    year: "2026",
    description:
      "Sitio institucional con propuesta de valor de personal asegurado y supervisión GPS, captación calificada e integración con el ERP interno bajo un mismo dominio.",
    metrics: ["100/100 LIGHTHOUSE", "< 0.6s LCP", "+120% LEADS CALIFICADOS", "DOMINIO UNIFICADO"],
    tags: ["ASTRO 7", "TYPESCRIPT", "TAILWIND CSS V4", "VERCEL EDGE", "SEO ESTRUCTURADO"],
    fullOverview:
      "Plataforma institucional de alta velocidad con cotizador inteligente que filtra prospectos y alimenta el embudo comercial corporativo.",
    challenge:
      "Página web antigua que no comunicaba la formalidad del personal ni la supervisión satelital que diferenciaba a la empresa de prestadores informales.",
    solution:
      "Arquitectura estática ultrarrápida con Astro y Tailwind v4, cotizador interactivo multi-paso y diseño moderno enfocado en transmitir seriedad y cumplimiento.",
  },
  {
    id: "landing-pediatrica",
    imageKey: "landing-pediatrica",
    slug: "landing-clinica-pediatrica",
    title: "PORTAL PEDIÁTRICO — SITIO PÚBLICO & TURNOS",
    client: "Clínica pediátrica especializada · Argentina",
    category: "WEB & SALUD",
    year: "2025",
    description:
      "Portal público con trayectoria médica, etapas del cuidado pediátrico y un flujo de solicitud de turnos amigable pensado para las familias.",
    metrics: ["0ms TBT", "+150% RESERVAS MÓVILES", "CERO ESPERAS EN LÍNEA", "100% ACCESIBLE"],
    tags: ["ASTRO", "REACT", "TAILWIND CSS", "VIEW TRANSITIONS", "A11Y"],
    fullOverview:
      "Sitio web médico orientado a la experiencia del paciente familiar, con acceso directo a especialidades y reserva ágil de consultas.",
    challenge:
      "Líneas telefónicas congestionadas en horarios de la mañana y padres frustrados por no poder reservar turnos fuera del horario administrativo de secretaría.",
    solution:
      "Plataforma web con reserva en 3 clics optimizada para celulares, selector de cobertura médica y confirmación instantánea sin intermediarios.",
  },
];

const esManifesto: ManifestoItem[] = [
  {
    number: "01",
    title: "VELOCIDAD NO SIGNIFICA DESPROLIJIDAD",
    description:
      "Trabajar rápido no es tirar código sucio. La verdadera agilidad proviene de usar las herramientas correctas (Astro, TypeScript, Tailwind v4, Edge Computing) y tener claridad arquitectónica desde el día cero.",
  },
  {
    number: "02",
    title: "CERO BUNDLES PESADOS INNECESARIOS",
    description:
      "No cargamos 300KB de JavaScript en el navegador de tu cliente para mostrar texto y fotos. Si algo puede resolverse en el servidor con HTML y CSS estático, se resuelve ahí.",
  },
  {
    number: "03",
    title: "INGENIERÍA CENTRADA EN EL NEGOCIO",
    description:
      "El código más elegante es inútil si no convierte, no factura o es imposible de mantener. Diseñamos sistemas orientados a resultados medibles y retorno de inversión.",
  },
  {
    number: "04",
    title: "COMUNICACIÓN DIRECTA, SIN INTERMEDIARIOS",
    description:
      "Hablas directamente con los desarrolladores e ingenieros que tocan tu código. Sin project managers corporativos que ralentizan las decisiones técnicas.",
  },
];

const esHowWeWork: WorkStep[] = [
  {
    step: "01",
    title: "DESCARGA TÉCNICA (24-48H)",
    description:
      "Analizamos tus requerimientos, definimos el modelo de datos, la arquitectura óptima y eliminamos todo lo que sobre para llegar al MVP más veloz.",
  },
  {
    step: "02",
    title: "PROTOTIPADO & DIRECCIÓN DE ARTE",
    description:
      "Validamos la interacción, la estética y la experiencia de usuario con maquetas funcionales de alto contraste antes de escribir la primera línea de backend.",
  },
  {
    step: "03",
    title: "DESARROLLO EN SPRINTS INTENSOS",
    description:
      "Construcción modular en TypeScript con commits diarios, entornos de staging visibles en tiempo real y pruebas automáticas de rendimiento.",
  },
  {
    step: "04",
    title: "DESPLIEGUE A PRODUCCIÓN & CI/CD",
    description:
      "Lanzamiento en infraestructura global edge con CDN inmutable, verificación de Core Web Vitals al 100% y documentación viva.",
  },
];

const esTeam: TeamMember[] = [
  {
    name: "AGUSTÍN ANGELINI",
    role: "FOUNDER & TECH LEAD",
    bio: "Especialista en arquitecturas web modernas, diseño de sistemas de alta disponibilidad y optimización de rendimiento.",
    tags: ["ASTRO", "TYPESCRIPT", "REACT", "TAILWIND", "SISTEMAS DISTRIBUIDOS"],
    github: "https://github.com/angelini-agus",
    linkedin: "https://linkedin.com",
  },
  {
    name: "DEFTCODE LABS",
    role: "INGENIERÍA & PRODUCTO",
    bio: "Equipo multidisciplinario enfocado en desarrollo ágil, automatizaciones críticas y diseño visual de alto impacto.",
    tags: ["FULL-STACK", "UI/UX BRUTALISTA", "SEO TÉCNICO", "CLOUD EDGE"],
    github: "https://github.com/angelini-agus/deftcode",
  },
];

const esFaqList: FaqItem[] = [
  {
    question: "¿Cuánto demora el desarrollo de una landing page o sistema con Deftcode?",
    answer:
      "Nuestra arquitectura modular nos permite entregar landing pages institucionales en 1 a 2 semanas, y sistemas o aplicaciones web a medida en sprints de 3 a 6 semanas, con despliegues funcionales visibles desde los primeros días.",
  },
  {
    question: "¿Por qué eligen Astro y no un framework como WordPress o React puro?",
    answer:
      "Astro compila a HTML y CSS estático puro (SSG), lo que garantiza 0ms de tiempo de bloqueo (TBT), 100/100 en Google Lighthouse y carga instantánea en móviles. WordPress es lento, inseguro y requiere mantenimiento constante; React puro carga bundles pesados que perjudican el SEO.",
  },
  {
    question: "¿El sitio incluye posicionamiento SEO?",
    answer:
      "Absolutamente. Todo proyecto de Deftcode incluye arquitectura técnica SEO de primer nivel: metaetiquetas Open Graph y Twitter Cards completas, esquema semántico Schema.org JSON-LD, sitemap dinámico, precarga de tipografías y Core Web Vitals en rango verde.",
  },
  {
    question: "¿Cómo se gestiona el mantenimiento y las actualizaciones?",
    answer:
      "El código fuente te pertenece al 100% en GitHub. Ofrecemos planes de soporte continuo para nuevas funcionalidades, optimización de infraestructura y monitoreo, o capacitamos a tu equipo para que sea totalmente autónomo.",
  },
  {
    question: "¿Cómo es el flujo de contratación y pago?",
    answer:
      "Trabajamos con presupuestos cerrados y transparentes. Se abona un anticipo al iniciar el sprint de arquitectura y el saldo contra entrega validada en producción.",
  },
];

const esCtaContent: CtaContent = {
  kicker: "TIEMPO DE MOVERSE RÁPIDO",
  heading: "CONSTRUYAMOS ALGO ÁGIL.",
  subheading: "Llevamos tu infraestructura digital a la velocidad que tu empresa necesita.",
  buttonLabel: "HABLEMOS POR WHATSAPP",
  buttonHref: "https://wa.me/?text=Hola%20Deftcode,%20quiero%20cotizar%20un%20proyecto",
  emailLabel: "contacto@deftcode.dev",
};

// ==========================================
// ENGLISH DICTIONARY
// ==========================================

const enSiteMeta: SiteMeta = {
  title: "DEFTCODE // HIGH-VELOCITY SOFTWARE & DIGITAL ENGINEERING",
  description:
    "Agile, modern, high-performance software engineering. We craft web platforms, custom digital systems, and high-impact digital experiences with velocity and technical rigor.",
  siteUrl: "https://deftcode.dev",
  ogImage: "/og-deftcode.png",
  author: "Deftcode Studio",
  location: "ROSARIO, ARGENTINA // WORLDWIDE REMOTE",
  tagline: "SOFTWARE AT VELOCITY",
  foundedYear: 2026,
};

const enNavLinks: NavLink[] = [
  { label: "HOME", href: "/en/" },
  { label: "SERVICES", href: "/en/#services" },
  { label: "PROJECTS", href: "/en/projects/" },
  { label: "ABOUT", href: "/en/about/" },
  { label: "CONTACT", href: "/en/contact/" },
];

const enPages: Record<string, PageContent> = {
  nosotros: {
    title: "ABOUT // MANIFESTO & TEAM - DEFTCODE",
    description:
      "Discover Deftcode's philosophy: high-velocity dev, zero-bloat modern architectures, and an obsessive focus on performance and business ROI.",
    eyebrow: "PHILOSOPHY & ENGINEERING",
    h1: "VELOCITY, PRECISION AND ZERO BLOATWARE.",
    intro:
      "We disrupt traditional, sluggish agency workflows. At Deftcode, we build software with cutting-edge stacks, clean architectures, and continuous shipping in weeks—not quarters.",
  },
  proyectos: {
    title: "PROJECTS // PORTFOLIO & CASE STUDIES - DEFTCODE",
    description:
      "Explore our production deployments: enterprise ERP platforms, reactive web applications, and SSG architectures with flawless Core Web Vitals.",
    eyebrow: "PRODUCTION DEPLOYMENTS",
    h1: "REAL SOFTWARE FOR REAL BUSINESS PROBLEMS.",
    intro:
      "Every product is engineered to maximize conversion, eliminate cloud waste, and scale without operational friction.",
  },
  contacto: {
    title: "CONTACT // START YOUR PROJECT - DEFTCODE",
    description:
      "Let's discuss your next digital product. Transparent estimates, free architectural assessment, and answers within 24 hours.",
    eyebrow: "DIRECT LINE",
    h1: "LET'S BUILD SOMETHING DEFT.",
    intro:
      "We respond immediately. No fluff meetings: we define technical scope, deliver timelines, and start building.",
  },
  privacidad: {
    title: "PRIVACY POLICY - DEFTCODE",
    description:
      "Deftcode privacy commitment: zero invasive 3rd-party trackers, anonymous analytics, and absolute respect for your personal data.",
    eyebrow: "LEGAL & COMPLIANCE",
    h1: "TRANSPARENT PRIVACY.",
  },
};

const enHeroContent: HeroContent = {
  headlineMain: "DEFTCODE",
  headlineSub: "SOFTWARE AT VELOCITY",
  badge: "SYSTEMS / WEB / SAAS",
  locationText: "BASED IN ROSARIO, AR // WORLDWIDE REMOTE",
  roleText: "AGILE DIGITAL ENGINEERING // MODERN ARCHITECTURES // HIGH-PERFORMANCE WEB",
  ctaLabel: "START PROJECT",
  ctaHref: "/en/contact/",
  scrollText: "SCROLL DOWN • EXPLORE DEFT • ",
};

const enMarqueeItems = {
  row1: [
    "HIGH-VELOCITY DEV",
    "MODERN ARCHITECTURES",
    "ZERO-JANK MOTION",
    "DEFT & PRECISE",
    "BUILT FOR SCALE",
    "HIGH-VELOCITY DEV",
  ],
  row2: [
    "ASTRO SSG",
    "TYPESCRIPT",
    "TAILWIND CSS V4",
    "EDGE RUNTIME",
    "CORE WEB VITALS 100",
    "FULL-STACK SAAS",
  ],
};

const enServices: ServiceItem[] = [
  {
    id: "web-apps",
    index: "01",
    title: "FULL-STACK APPS & SAAS",
    description:
      "Cutting-edge software architectures engineered for relentless speed. Reactive web applications, real-time control panels, and scalable APIs built without spaghetti code.",
    tags: ["TYPESCRIPT", "EDGE ARCHITECTURE", "DATABASE DESIGN", "REALTIME"],
  },
  {
    id: "landing-performance",
    index: "02",
    title: "HIGH-VELOCITY LANDINGS",
    description:
      "High-impact corporate websites and landing pages. Zero Total Blocking Time (TBT 0ms), 100 on Lighthouse, and aggressive SEO to maximize inbound conversion.",
    tags: ["ASTRO SSG", "100/100 LIGHTHOUSE", "AGGRESSIVE SEO", "CONVERSION RATE"],
  },
  {
    id: "bespoke-systems",
    index: "03",
    title: "BESPOKE SYSTEMS & ERP",
    description:
      "Digital transformation of mission-critical business workflows. Custom internal tooling replacing messy spreadsheets with automated, auditable software.",
    tags: ["AUTOMATION", "INTEGRATIONS", "WORKFLOWS", "SECURITY"],
  },
  {
    id: "performance-optimization",
    index: "04",
    title: "PERFORMANCE & REFACTORING",
    description:
      "In-depth technical audits, extreme Core Web Vitals optimization, and legacy refactoring for teams needing instant speed and clean codebases.",
    tags: ["CORE WEB VITALS", "AUDIT", "REFACTORING", "A11Y"],
  },
];

const enProjects: ProjectItem[] = [
  {
    id: "empresa-limpieza",
    imageKey: "empresa-limpieza",
    slug: "empresa-limpieza-rosario",
    title: "SERVICETRACK — FACILITY OPERATIONS ERP",
    client: "Commercial Cleaning & Facility Services · Rosario, Argentina",
    category: "OPERATIONS ERP",
    year: "2026",
    description:
      "QR and GPS geolocation attendance tracking across 30+ facilities, automated payroll calculation based on collective agreements, inventory control, and live supervisor map.",
    metrics: ["-$2.8M ARS/MO SAVED IN PAYROLL", "0 UNVERIFIED ABSENCES", "30+ BUILDINGS LIVE", "100% TRACEABILITY"],
    tags: ["NODE.JS", "TYPESCRIPT", "POSTGRESQL", "QR SCANNER", "GPS GEOLOCATION"],
    fullOverview:
      "Operations management system replacing manual paper sign-ins and spreadsheets for field teams distributed across 30+ locations simultaneously.",
    challenge:
      "Supervising 30+ commercial buildings relied on messy Excel spreadsheets and WhatsApp messages, resulting in 4-6 monthly customer complaints over unverified attendance and days spent manually reconciling month-end payroll.",
    solution:
      "Web platform where staff log shifts validated via on-device QR scanning and GPS coordinates, slashing payroll calculations to minutes and highlighting anomalies on a live supervisor map.",
  },
  {
    id: "gestion-legal",
    imageKey: "gestion-legal",
    slug: "gestion-legal-estudio",
    title: "LEGALDESK — CROSS-BORDER LEGAL MANAGEMENT",
    client: "International Law Firm · Argentina & Paraguay",
    category: "LEGAL ERP",
    year: "2026",
    description:
      "Cloud platform to manage judicial and corporate cases across two countries, procedural deadline tracking, multi-currency billing, and AI jurisprudence search.",
    metrics: ["2 ACTIVE JURISDICTIONS", "100% TRACEABILITY", "-60% RESEARCH TIME", "ZERO MISSED DEADLINES"],
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "PRISMA", "EMBEDDED AI"],
    fullOverview:
      "Comprehensive cloud platform designed for cross-border law firms managing complex litigation and corporate clients.",
    challenge:
      "Physical case files split across two countries, deadlines tracked on personal notebooks, and hours wasted searching jurisprudence across disjointed official gazettes.",
    solution:
      "Unified cloud repository with automatic procedural statute-of-limitations alerts, multi-currency billing, and a custom AI engine with strict official source citations.",
  },
  {
    id: "sistema-pediatrico",
    imageKey: "sistema-pediatrico",
    slug: "sistema-clinica-pediatrica",
    title: "PEDIATRICCARE — PEDIATRIC EHR & CLINIC SUITE",
    client: "Outpatient Pediatric Clinic · Argentina",
    category: "HEALTHCARE & ERP",
    year: "2025",
    description:
      "Compliant Electronic Health Records (EHR), intelligent scheduling agenda, real-time clinical dashboard, and digital PDF prescription generation.",
    metrics: ["LEGAL EHR COMPLIANT", "0 MISPLACED RECORDS", "+85% CONSULTATION SPEED", "100% DIGITAL"],
    tags: ["NEXT.JS", "NESTJS", "POSTGRESQL", "PRISMA", "TAILWIND CSS", "PDF GENERATION"],
    fullOverview:
      "Full digitization of outpatient medical workflows, bridging front-desk reception, doctor consultation rooms, and families within a secure, confidential environment.",
    challenge:
      "Physical paper charts prone to loss or misplacement, prolonged delays retrieving historical patient records during consultations, and duplicated appointment slots causing waiting room friction.",
    solution:
      "Reactive clinical suite with instant patient lookup, automatic percentile growth curves, and digitally signed PDF prescriptions and lab requisitions.",
  },
  {
    id: "crm-concesionaria",
    imageKey: "crm-concesionaria",
    slug: "crm-concesionaria-rosario",
    title: "AUTOLEADS — AUTOMOTIVE SALES CRM",
    client: "Official Automotive Dealership · Rosario, Santa Fe",
    category: "SALES CRM",
    year: "2025",
    description:
      "Centralization of inbound leads from WhatsApp, Instagram, Facebook, and Mercado Libre into one unified pipeline with sales rep assignment and conversion metrics.",
    metrics: ["4 CENTRALIZED CHANNELS", "+40% CONTACT RATE", "ZERO FORGOTTEN LEADS", "INSTANT METRICS"],
    tags: ["REACT", "VITE", "PRIMEREACT", ".NET 9", "DAPPER", "POSTGRESQL", "DOCKER"],
    fullOverview:
      "Commercial sales pipeline developed for automotive dealerships processing hundreds of digital inquiries each week.",
    challenge:
      "Sales reps tracking leads on individual spreadsheets, prospects waiting days without replies, and zero visibility into which ad campaigns were generating closed deals.",
    solution:
      "Custom CRM with real-time webhooks and APIs, make/model filtering, equitable round-robin lead distribution, and live pipeline analytics exportable in seconds.",
  },
  {
    id: "landing-limpieza",
    imageKey: "landing-limpieza",
    slug: "landing-empresa-limpieza",
    title: "AZ SERVICIOS — CORPORATE WEB PLATFORM",
    client: "AZ Cleaning & Facility Services · Rosario, Santa Fe",
    category: "CORPORATE LANDING",
    year: "2026",
    description:
      "Corporate web presence highlighting verified insured staff and GPS supervision, qualified lead capture, and seamless integration with the internal ERP under a single domain.",
    metrics: ["100/100 LIGHTHOUSE", "< 0.6s LCP", "+120% QUALIFIED LEADS", "UNIFIED DOMAIN"],
    tags: ["ASTRO 7", "TYPESCRIPT", "TAILWIND CSS V4", "VERCEL EDGE", "STRUCTURED SEO"],
    fullOverview:
      "Ultra-fast corporate platform with an interactive quoting engine that filters serious commercial leads into the sales funnel.",
    challenge:
      "Outdated legacy website failing to convey the formal corporate compliance and satellite supervision that set the company apart from informal competitors.",
    solution:
      "Static SSG architecture with Astro and Tailwind CSS v4, multi-step commercial quote calculator, and modern brutalist aesthetic signaling reliability and operational rigor.",
  },
  {
    id: "landing-pediatrica",
    imageKey: "landing-pediatrica",
    slug: "landing-clinica-pediatrica",
    title: "PEDIATRIC PORTAL — PUBLIC SITE & BOOKINGS",
    client: "Specialized Pediatric Clinic · Argentina",
    category: "HEALTHCARE WEB",
    year: "2025",
    description:
      "Public-facing portal showcasing pediatric specialties, medical team credentials, and an intuitive family-friendly booking workflow.",
    metrics: ["0ms TBT", "+150% MOBILE APPOINTMENTS", "ZERO WAIT TIMES", "100% ACCESSIBLE"],
    tags: ["ASTRO", "REACT", "TAILWIND CSS", "VIEW TRANSITIONS", "A11Y"],
    fullOverview:
      "Patient-first healthcare website providing direct access to medical specialties, physician bios, and seamless online booking.",
    challenge:
      "Phone lines chronically jammed during morning hours and parents frustrated by an inability to schedule appointments outside administrative clinic hours.",
    solution:
      "3-click appointment reservation flow optimized for mobile devices, health insurance coverage selector, and immediate automated confirmations without manual intervention.",
  },
];

const enManifesto: ManifestoItem[] = [
  {
    number: "01",
    title: "VELOCITY DOES NOT MEAN SLOPPINESS",
    description:
      "Moving fast is not about slapping dirty code together. Real agility comes from choosing the right modern tools (Astro, TypeScript, Tailwind v4, Edge Computing) and having architectural clarity on day zero.",
  },
  {
    number: "02",
    title: "ZERO UNNECESSARY HEAVY BUNDLES",
    description:
      "We never ship 300KB of client JavaScript just to display text and imagery. If a section can be pre-rendered as clean static HTML and CSS on the server, it stays there.",
  },
  {
    number: "03",
    title: "BUSINESS-FIRST ENGINEERING",
    description:
      "The cleanest code is worthless if it doesn't convert, bill, or scale reliably. We engineer software aimed at tangible business impact and high ROI.",
  },
  {
    number: "04",
    title: "DIRECT ACCESS, NO MIDDLEMEN",
    description:
      "You communicate directly with the senior engineers writing your code. No bureaucratic corporate account handlers slowing down critical technical choices.",
  },
];

const enHowWeWork: WorkStep[] = [
  {
    step: "01",
    title: "TECHNICAL DISCOVERY (24-48H)",
    description:
      "We deconstruct your requirements, map the data model, select the optimal architecture, and prune superfluous complexity to build the leanest MVP.",
  },
  {
    step: "02",
    title: "PROTOTYPING & ART DIRECTION",
    description:
      "We validate ergonomics, interactions, and aesthetic impact through functional high-contrast mockups before touching production backend code.",
  },
  {
    step: "03",
    title: "INTENSE SPRINT CYCLES",
    description:
      "Modular TypeScript implementation with daily commits, real-time preview staging environments, and automated performance suites.",
  },
  {
    step: "04",
    title: "GLOBAL PRODUCTION SHIP & CI/CD",
    description:
      "Deployment to worldwide edge infrastructure with immutable caching, 100/100 Core Web Vitals verification, and living documentation.",
  },
];

const enTeam: TeamMember[] = [
  {
    name: "AGUSTÍN ANGELINI",
    role: "FOUNDER & TECH LEAD",
    bio: "Specialist in modern web architectures, distributed high-availability systems, and extreme performance optimization.",
    tags: ["ASTRO", "TYPESCRIPT", "REACT", "TAILWIND", "DISTRIBUTED SYSTEMS"],
    github: "https://github.com/angelini-agus",
    linkedin: "https://linkedin.com",
  },
  {
    name: "DEFTCODE LABS",
    role: "ENGINEERING & PRODUCT",
    bio: "Multidisciplinary squad focused on rapid development, mission-critical automation, and high-impact visual design.",
    tags: ["FULL-STACK", "BRUTALIST UI/UX", "TECHNICAL SEO", "EDGE CLOUD"],
    github: "https://github.com/angelini-agus/deftcode",
  },
];

const enFaqList: FaqItem[] = [
  {
    question: "How long does it take to deliver a landing page or custom system?",
    answer:
      "Our modular architecture allows us to deliver high-converting institutional landing pages in 1-2 weeks, and custom web applications or ERP modules in 3-6 week sprints, with testable staging builds live from the first week.",
  },
  {
    question: "Why do you use Astro instead of WordPress or standard React?",
    answer:
      "Astro compiles to zero-overhead static HTML and CSS (SSG), ensuring 0ms Total Blocking Time (TBT), 100/100 Lighthouse scores, and instant mobile rendering. WordPress is bloated, vulnerable, and slow; raw React forces heavy client bundles that harm Google rankings.",
  },
  {
    question: "Is technical SEO optimization included?",
    answer:
      "Absolutely. Every Deftcode deployment includes enterprise-tier SEO: complete Open Graph and Twitter Card tags, Schema.org JSON-LD semantic data, dynamic XML sitemaps, localized preloads, and verified green Core Web Vitals.",
  },
  {
    question: "How are maintenance and future updates handled?",
    answer:
      "You own 100% of the GitHub repository and intellectual property. We offer monthly ongoing support retainers for new features and infrastructure monitoring, or we train your in-house team for total autonomy.",
  },
  {
    question: "What is your engagement and payment structure?",
    answer:
      "We operate with fixed, transparent quotes. A milestone advance is paid upon sprint kickoff, and the balance upon validated production handover.",
  },
];

const enCtaContent: CtaContent = {
  kicker: "TIME TO MOVE FAST",
  heading: "LET'S BUILD SOMETHING DEFT.",
  subheading: "We accelerate your digital infrastructure to the velocity your business demands.",
  buttonLabel: "CHAT ON WHATSAPP",
  buttonHref: "https://wa.me/?text=Hi%20Deftcode,%20I'd%20like%20to%20discuss%20a%20project",
  emailLabel: "contacto@deftcode.dev",
};

// ==========================================
// BILINGUAL HELPER
// ==========================================

export const getContent = (lang: Lang = "es") => {
  const isEn = lang === "en";
  return {
    siteMeta: isEn ? enSiteMeta : esSiteMeta,
    navLinks: isEn ? enNavLinks : esNavLinks,
    pages: isEn ? enPages : esPages,
    heroContent: isEn ? enHeroContent : esHeroContent,
    marqueeItems: isEn ? enMarqueeItems : esMarqueeItems,
    services: isEn ? enServices : esServices,
    projects: isEn ? enProjects : esProjects,
    manifesto: isEn ? enManifesto : esManifesto,
    howWeWork: isEn ? enHowWeWork : esHowWeWork,
    team: isEn ? enTeam : esTeam,
    faqList: isEn ? enFaqList : esFaqList,
    socialLinks: esSocialLinks,
    ctaContent: isEn ? enCtaContent : esCtaContent,
  };
};

const esSocialLinks: SocialLink[] = [
  { platform: "github", label: "GITHUB", href: "https://github.com/angelini-agus" },
  { platform: "linkedin", label: "LINKEDIN", href: "https://linkedin.com" },
  { platform: "x", label: "X / TWITTER", href: "https://x.com" },
  { platform: "instagram", label: "INSTAGRAM", href: "https://instagram.com" },
];

// Backwards-compatible default exports (Spanish default)
export const siteMeta = esSiteMeta;
export const navLinks = esNavLinks;
export const pages = esPages;
export const heroContent = esHeroContent;
export const marqueeItems = esMarqueeItems;
export const services = esServices;
export const projects = esProjects;
export const manifesto = esManifesto;
export const howWeWork = esHowWeWork;
export const team = esTeam;
export const faqList = esFaqList;
export const socialLinks = esSocialLinks;
export const ctaContent = esCtaContent;
