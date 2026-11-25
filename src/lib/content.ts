import type {
  Lang,
  SiteMeta,
  NavLink,
  NavCtaContent,
  FooterContent,
  ServiceItem,
  ServicesHomeContent,
  ProjectItem,
  TeamMember,
  WorkStep,
  ProcessContent,
  PricingContent,
  FaqItem,
  SocialLink,
  PageContent,
  CtaContent,
  HeroContent,
  ManifestoItem,
  ProblemsContent,
  ComparisonContent,
  FeaturedCaseContent,
  MoreSoftwareContent,
  ContactFormContent,
  DiagnosticoLandingContent,
} from "./types";

// ==========================================
// SPANISH DICTIONARY (DEFAULT)
// ==========================================

const esSiteMeta: SiteMeta = {
  title: "Software a medida en Rosario | Diagnóstico gratis | Deftcode",
  description:
    "Sistemas, CRM y ERP a medida en 3 a 6 semanas y a precio cerrado. Pedí tu diagnóstico gratis y mirá tu prototipo antes de firmar.",
  siteUrl: "https://deftcode.com.ar",
  ogImage: "/og-deftcode.png",
  author: "Deftcode Studio",
  location: "ROSARIO, ARGENTINA // TRABAJAMOS CON PYMES DE TODO EL PAÍS",
  tagline: "Software a gran velocidad.",
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
  home: {
    title: "Software a medida en Rosario | Diagnóstico gratis | Deftcode",
    description:
      "Sistemas, CRM y ERP a medida en 3 a 6 semanas y a precio cerrado. Pedí tu diagnóstico gratis y mirá tu prototipo antes de firmar.",
    eyebrow: "ROSARIO, ARGENTINA",
    h1: "TU SISTEMA A MEDIDA",
  },
  nosotros: {
    title: "Quiénes somos: desarrolladores que entienden de negocios | Deftcode",
    description:
      "Conocé a Agustín y Franco, el método de diagnóstico gratis y las garantías por escrito con las que trabajamos.",
    eyebrow: "NOSOTROS",
    h1: "SOMOS LOS QUE ESCRIBEN EL CÓDIGO. Y LOS QUE FIRMAMOS LA FECHA DE ENTREGA.",
    intro:
      "Somos gente de sistemas que entiende de negocios. Primero entendemos cómo trabajás, después te mostramos un prototipo y recién ahí firmás. Entregamos en semanas, no en semestres.",
  },
  proyectos: {
    title: "Casos reales: sistemas, CRM y landings en producción | Deftcode",
    description:
      "Mirá qué ahorró, ordenó y vendió cada sistema que construimos: ERP, CRM, landings y portales en producción.",
    eyebrow: "CASOS REALES",
    h1: "SOFTWARE REAL QUE AHORRA PLATA Y TIEMPO, CON NÚMEROS.",
    intro:
      "Cada caso muestra qué problema tenía el cliente, cuánto tardamos y qué cambió. Los tuyos pueden empezar con un diagnóstico gratis.",
  },
  servicios: {
    title: "Sistemas, CRM, ERP y landings a medida | Deftcode",
    description:
      "Siempre empezamos con un diagnóstico gratis. Después elegís qué construir, con precio cerrado y fecha en el contrato.",
    eyebrow: "SERVICIOS",
    h1: "SISTEMAS A MEDIDA QUE REEMPLAZAN TUS PLANILLAS EN 3 A 6 SEMANAS.",
    intro:
      "Siempre empezamos con un diagnóstico gratis. Después elegís qué construir, con precio cerrado y fecha en el contrato.",
  },
  contacto: {
    title: "Diagnóstico gratis para tu empresa | Deftcode",
    description:
      "Entrevista de 1 hora, informe en 48 h y prototipo gratis. Sin compromiso. Pedilo ahora.",
    eyebrow: "DIAGNÓSTICO GRATIS",
    h1: "DESCUBRÍ CUÁNTO TE CUESTAN HOY TUS PLANILLAS. DIAGNÓSTICO GRATIS EN 48 HORAS.",
    intro:
      "Una entrevista de 1 hora sobre tu negocio y un informe con qué procesos te hacen perder plata y cuánto ahorrarías. El informe es tuyo aunque no trabajemos juntos.",
  },
  diagnostico: {
    title: "Diagnóstico gratis para tu empresa | Deftcode",
    description:
      "Entrevista de 1 hora, informe en 48 h y prototipo gratis. Sin compromiso. Pedilo ahora.",
    eyebrow: "DIAGNÓSTICO GRATIS",
    h1: "DESCUBRÍ CUÁNTO TE CUESTAN HOY TUS PLANILLAS. DIAGNÓSTICO GRATIS EN 48 HORAS.",
    intro:
      "Una entrevista de 1 hora sobre tu negocio y un informe con qué procesos te hacen perder plata y cuánto ahorrarías. El informe es tuyo aunque no trabajemos juntos.",
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
  // Macro speed (fast-to-final-result beats fast-first-draft): the h1 sells
  // the dream outcome (out of spreadsheet chaos), the sub sells production
  // speed with a closed price. Short h1 keeps the one-line fit at ~15vw.
  headlineMain: "SALÍ DEL EXCEL.",
  headlineSub: "TU SISTEMA EN PRODUCCIÓN EN 4 A 6 SEMANAS. DESARROLLO A MEDIDA.",
  subtitle:
    "Auditamos tu operación gratis y te mostramos un prototipo funcionando con tus datos antes de que pagues un peso. Así una empresa de Rosario ahorra $2.8M ARS por mes en sueldos.",
  kicker: "VELOCIDAD DE STARTUP. ARQUITECTURA DE INGENIERÍA. CERO RIESGO.",
  badge: "ROSARIO, ARGENTINA // PYMES DE TODO EL PAÍS",
  locationText: "ROSARIO, ARGENTINA // TRABAJAMOS CON PYMES DE TODO EL PAÍS",
  roleText: "ERP A MEDIDA // CRM // AUTOMATIZACIÓN CON IA // LANDINGS QUE CONVIERTEN",
  stats: [
    "-$2.8M ARS/MES AHORRADOS EN AZ",
    "0 QUEJAS POR INASISTENCIA",
    "3 A 6 SEMANAS A PRODUCCIÓN",
    "0 PLAZOS INCUMPLIDOS",
  ],
  ctaLabel: "Pedir mi diagnóstico y prototipo gratis",
  ctaHref: "/contacto/",
  ctaSecondaryLabel: "Ver caso real (-$2.8M/mes)",
  ctaSecondaryHref: "/proyectos/empresa-limpieza-rosario/",
  microcopy: "Entrevista de 1 h • Informe en 48 h • Prototipo gratis antes de firmar.",
  scrollText: "DESLIZAR HACIA ABAJO • VELOCIDAD Y PRECISIÓN • ",
};

const esMarqueeItems = {
  row1: [
    "DIAGNÓSTICO GRATIS",
    "PROTOTIPO GRATIS",
    "PRECIO CERRADO",
    "FECHA EN CONTRATO",
    "CÓDIGO 100% TUYO",
    "ENTREGAS SEMANALES",
  ],
  row2: [
    "SIN PLANILLAS",
    "SIN WHATSAPP SUELTO",
    "SIN SISTEMAS ENLATADOS",
    "UN SOLO SISTEMA A TU MEDIDA",
    "SOPORTE DESPUÉS DEL LANZAMIENTO",
    "-$2.8M ARS/MES EN SUELDOS",
  ],
};

const esServices: ServiceItem[] = [
  {
    id: "erp-ops",
    slug: "sistemas-gestion-erp",
    index: "01",
    title: "SISTEMAS DE GESTIÓN ERP",
    description:
      "Sistemas de gestión a medida: operación en campo con GPS y QR, stock, facturación y cuentas corrientes en un solo panel. ERP de nicho sin configuraciones eternas.",
    kicker: "OPERACIÓN → FACTURACIÓN, EN UNA PANTALLA",
    intro:
      "Los sistemas genéricos no copian tu operación. Armamos el liviano y moderno que sigue tu circuito real: personal en la calle, stock, facturación y cuentas corrientes.",
    modules: [
      {
        heading: "OPERACIÓN EN CAMPO",
        items: [
          "Fichada y asistencia con validación por GPS o QR en locación.",
          "Asignación de turnos, guardias, reemplazos y novedades del día.",
          "Solicitud y remito digital de insumos y herramientas por cliente u obra.",
        ],
      },
      {
        heading: "GESTIÓN ADMINISTRATIVA",
        items: [
          "Control de stock con alertas de reposición y listas de precios dinámicas.",
          "Facturación y presupuestos con exportación rápida a PDF.",
          "Cuentas corrientes: quién te debe, a quién le debés y plazos.",
        ],
      },
      {
        // Security is the differentiator vs. unsupervised home-built AI
        // tools (§why-def tcode matrix): state it as a module, not a footnote.
        heading: "SEGURIDAD Y TRAZABILIDAD",
        items: [
          "Permisos por rol: cada empleado ve solo lo que le corresponde.",
          "Historial inmutable de quién creó, editó o borró cada dato.",
        ],
      },
    ],
    clients:
      "Empresas de limpieza y mantenimiento, constructoras, seguridad, logística, distribuidores, talleres, metalúrgicas e instaladores.",
    value: [
      "El circuito completo deja de vivir en planillas y chats cruzados.",
      "Ausentismo, reemplazos y remitos bajo control trazable.",
      "Panel configurado al circuito de tu negocio, no al revés.",
    ],
    tags: ["FIELD OPS", "STOCK", "FACTURACIÓN", "REMITOS", "CUENTAS CORRIENTES"],
  },
  {
    id: "ventas-citas",
    slug: "sistemas-gestion-ventas",
    index: "02",
    title: "SISTEMAS DE GESTIÓN DE VENTAS",
    description:
      "Turnos, agendas, cotizadores y portales B2B: la cadena comercial completa, de la primera consulta al pedido directo, sin trabajo manual de por medio.",
    kicker: "AGENDA Y COTIZACIÓN SIN BACHES",
    intro:
      "Tu equipo comercial gana tiempo: agenda sin baches, cotizaciones que salen al toque y clientes que entran a su portal y piden directo.",
    modules: [
      {
        heading: "TURNOS Y AGENDAS",
        items: [
          "Calendario semanal y mensual con asignación por profesional o sala.",
          "Ficha digital del cliente o paciente con historial y documentos.",
          "Recordatorios automáticos por WhatsApp o email para reducir ausencias.",
          "Cobros o liquidación por sesión o profesional.",
        ],
      },
      {
        heading: "COTIZADORES Y PORTAL B2B",
        items: [
          "Cotizador con medidas, materiales, costos y márgenes.",
          "Propuestas formales en PDF listas para enviar.",
          "Portal privado para clientes recurrentes: su catálogo, su precio y pedidos directos.",
        ],
      },
    ],
    clients:
      "Clínicas y consultorios, veterinarias, estéticas, estudios contables y jurídicos, imprentas, carpinterías y proveedores industriales.",
    value: [
      "Cotizar en minutos, no en días.",
      "Menos ausencias de clientes con recordatorios automáticos.",
      "El equipo comercial deja de pasar datos a mano entre sistemas.",
    ],
    tags: ["TURNOS", "AGENDAS", "COTIZADORES", "PORTAL B2B"],
  },
  {
    id: "landing-velocidad",
    slug: "landing-pages",
    index: "03",
    title: "LANDING PAGES",
    description:
      "Landing pages de carga instantánea: cero tiempo de bloqueo, métricas en verde y SEO técnico de serie.",
    kicker: "TU PRIMER PUNTO DE VENTA DIGITAL",
    intro:
      "Tu primer punto de venta digital: una página que carga al instante, se posiciona orgánicamente y convierte la visita.",
    modules: [
      {
        heading: "VELOCIDAD",
        items: [
          "Páginas estáticas: carga instantánea, cero tiempo de bloqueo.",
          "Rendimiento en verde, que además suma para el ranking SEO.",
          "Diseño a medida editorial-brutalista.",
        ],
      },
      {
        heading: "SEO TÉCNICO",
        items: [
          "Datos estructurados para Google, sitemap dinámico y etiquetas sociales completas.",
          "Meta tags completos y tipografías precargadas.",
          "Estructura íntegra en móviles.",
        ],
      },
    ],
    clients:
      "Estudios, pymes, emprendimientos y profesionales que venden servicios o quieren reforzar su presencia comercial.",
    value: [
      "Consultas que llegan de la búsqueda orgánica.",
      "Una página que carga antes de que el cliente piense en volver atrás.",
      "Código 100% propio, sin plataformas genéricas detrás.",
    ],
    tags: ["CARGA INSTANTÁNEA", "SEO TÉCNICO", "MÉTRICAS EN VERDE", "CONVERSIÓN"],
  },
  {
    id: "automatizacion-ia",
    slug: "automatizacion-ia",
    index: "04",
    title: "AUTOMATIZACIÓN CON IA",
    description:
      "Integraciones a medida y automatizaciones con IA: que tu eCommerce, el ERP, el CRM y WhatsApp hablen entre sí, solos.",
    kicker: "SISTEMAS QUE HABLAN ENTRE SÍ",
    intro:
      "Tu operación ya vive en tus herramientas, pero no se hablan entre sí. Las conectamos y la IA absorbe lo repetitivo.",
    modules: [
      {
        heading: "INTEGRACIONES A MEDIDA",
        items: [
          "Sincronización de stock y precios entre la tienda y el depósito.",
          "Facturación electrónica con AFIP/ARCA.",
          "WhatsApp Business para estados de pedidos y cobranzas.",
        ],
      },
      {
        heading: "IA APLICADA",
        items: [
          "Clasificación y respuestas automáticas con IA.",
          "Flujos sin pasos manuales entre sistemas.",
          "Alertas y resúmenes diarios generados por tu proceso.",
          "IA con guardrails y fuentes verificadas: trabaja sobre tus datos reales sin inventar ni exponer información confidencial.",
        ],
      },
    ],
    clients:
      "Comercios y pymes con herramientas que no se comunican: eCommerce con ERP, CRM con WhatsApp, cotizador con facturación.",
    value: [
      "El trabajo manual de pasar datos de un sistema a otro desaparece.",
      "Respuestas más rápidas al cliente, todos los días.",
      "Desarrollo puntual de alto impacto, sin levantar un sistema nuevo.",
    ],
    tags: ["INTEGRACIONES", "WHATSAPP", "AFIP / ARCA", "IA"],
  },
];

const esProjects: ProjectItem[] = [
  {
    id: "empresa-limpieza",
    imageKey: "empresa-limpieza",
    slug: "empresa-limpieza-rosario",
    title: "DE PLANILLAS A UN SISTEMA QUE AHORRA $2.8M ARS POR MES",
    client: "SERVICETRACK // AZ SERVICIOS DE LIMPIEZA",
    plazo: "[COMPLETAR: semanas]",
    location: "Rosario, Santa Fe",
    category: "SISTEMA DE GESTIÓN (ERP)",
    year: "2026",
    description:
      "Asistencia por geolocalización y QR en más de 30 edificios, cálculo automático de sueldos según CCT, control de stock y supervisión en mapa en vivo.",
    metrics: ["-$2.8M ARS/MES EN SUELDOS", "0 QUEJAS POR INASISTENCIA", "30+ EDIFICIOS EN VIVO", "100% TRAZABLE"],
    tags: ["NODE.JS", "TYPESCRIPT", "POSTGRESQL", "QR SCANNER", "GEOLOCALIZACIÓN GPS"],
    fullOverview:
      "Sistema de gestión operativa que reemplazó el control manual en papel y planillas para cuadrillas en más de 30 ubicaciones simultáneas.",
    challengeTitle: "El control manual llegó a su límite",
    challenge:
      "El control de una empresa con más de 30 edificios pasaba por planillas de Excel y mensajes de WhatsApp, provocando 4 a 6 quejas mensuales de clientes por inasistencias imposibles de verificar y días enteros de trabajo administrativo cruzando datos a mano al cierre de mes.",
    contrastRows: [
      {
        before: "Asistencia en planillas de Excel compartidas por WhatsApp",
        after: "Entrada y salida con GPS y código QR validado desde el teléfono",
      },
      {
        before: "Cierre de mes cruzando datos a mano durante varios días",
        after: "Sueldos e impuestos calculados automáticamente en minutos",
      },
      {
        before: "Sin visibilidad de quién estaba en cada edificio",
        after: "Mapa en vivo con alertas automáticas de inasistencia",
      },
    ],
    solutionTitle: "Arquitectura web de trazabilidad total y liquidación inmediata",
    solution:
      "Plataforma web donde el personal registra entrada y salida validada por código QR y GPS en su celular, liquidando sueldos en minutos y alertando inasistencias en un mapa en tiempo real.",
    solutionFeatures: [
      {
        title: "Asistencia por geolocalización y QR",
        description:
          "El personal registra entrada y salida desde su teléfono, verificado por GPS y código QR único en cada edificio. Sin papel, sin planillas, sin posibilidad de falsear ubicación.",
      },
      {
        title: "Cálculo automático de sueldos e impuestos",
        description:
          "Las horas trabajadas, horas extra, ausencias y llegadas tarde se calculan automáticamente según el convenio colectivo (CCT). La liquidación mensual que antes llevaba días ahora tarda minutos.",
      },
      {
        title: "Gestión de stock por edificio",
        description:
          "Cada edificio tiene su propio inventario de insumos dentro del sistema. Los supervisores registran consumo desde el celular y el sistema alerta cuando el stock cae por debajo del mínimo.",
      },
      {
        title: "Panel de supervisión en tiempo real",
        description:
          "Los supervisores visualizan en un mapa interactivo qué empleados están activos, en qué edificio y su jornada en curso, con alertas tempranas de inasistencia.",
      },
    ],
    resultsTitle: "Impacto operativo medible",
    resultsMetrics: [
      {
        value: "-$2.8M",
        unit: "ARS/mes",
        label: "ahorrados en sueldo y cargas sociales al eliminar tareas redundantes",
      },
      {
        value: "0",
        unit: "quejas",
        label: "por inasistencias por mes (antes eran 4-6 mensuales sin posibilidad de verificar)",
      },
      {
        value: "1",
        unit: "supervisor",
        label: "gestiona hoy lo que antes requería 3 personas, con control en tiempo real",
      },
      {
        value: "30+",
        unit: "edificios",
        label: "usando el sistema activamente en producción hoy",
      },
    ],
  },
  {
    id: "gestion-legal",
    imageKey: "gestion-legal",
    slug: "gestion-legal-estudio",
    title: "DOS PAÍSES, UN SOLO SISTEMA, CERO PLAZOS VENCIDOS",
    client: "LEGALDESK // ESTUDIO JURÍDICO INTERNACIONAL",
    plazo: "[COMPLETAR: semanas]",
    location: "Argentina y Paraguay",
    category: "SISTEMA DE GESTIÓN (ERP)",
    year: "2026",
    description:
      "Plataforma para administrar expedientes judiciales y extrajudiciales en dos países, agenda de vencimientos, control financiero y biblioteca jurídica con IA.",
    metrics: ["2 JURISDICCIONES EN VIVO", "-60% TIEMPO DE BÚSQUEDA", "CERO PLAZOS VENCIDOS"],
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "PRISMA", "IA INTEGRADA"],
    fullOverview:
      "Sistema integral en la nube diseñado para firmas jurídicas que gestionan causas y clientes corporativos transfronterizos.",
    challengeTitle: "Operar en dos países sin depender de un software genérico",
    challenge:
      "Expedientes físicos dispersos entre dos países con marcos normativos distintos, seguimiento de plazos procesales en libretas personales y horas invertidas buscando jurisprudencia en boletines oficiales sin garantías de vigencia.",
    contrastRows: [
      {
        before: "Un software estándar que forzaba las dos jurisdicciones a un molde único",
        after: "Expedientes y obligaciones modelados según el proceso de cada país",
      },
      {
        before: "Normas guardadas que quedaban desactualizadas sin que nadie lo detecte",
        after: "Verificación automática contra Infoleg y CSJ-IIJ con alertas de IA",
      },
      {
        before: "Clientes, expedientes y contabilidad en herramientas separadas",
        after: "Una sola plataforma en la nube con toda la operación del estudio",
      },
    ],
    solutionTitle: "Ecosistema jurídico integral con validación de fuentes en tiempo real",
    solution:
      "Base unificada en la nube con alertas automáticas de caducidad procesal, liquidación de honorarios multimoneda y motor de IA con verificación estricta de fuentes oficiales.",
    solutionFeatures: [
      {
        title: "Gestión integral de clientes",
        description:
          "Ficha completa por cliente con datos personales, carátulas, contactos y el historial consolidado de causas judiciales y extrajudiciales asociadas.",
      },
      {
        title: "Expedientes judiciales y extrajudiciales",
        description:
          "Seguimiento de movimientos, juzgado, estado procesal, escritos adjuntos y notas de trabajo confidenciales con permisos diferenciados.",
      },
      {
        title: "Biblioteca jurídica con verificación por IA",
        description:
          "El sistema verifica automáticamente si la versión de una norma sigue vigente contra fuentes oficiales (Infoleg en Argentina y CSJ-IIJ en Paraguay), alertando derogaciones.",
      },
      {
        title: "Agenda, finanzas y obligaciones fiscales",
        description:
          "Calendario de audiencias con recordatorios perentorios, registro de honorarios y señas, y control de obligaciones tributarias en ambas monedas.",
      },
    ],
    resultsTitle: "Capacidades operativas en producción",
    resultsMetrics: [
      {
        value: "2",
        unit: "jurisdicciones",
        label: "Argentina y Paraguay administradas bajo una misma plataforma sin fricción legal",
      },
      {
        value: "IA",
        unit: "asistente",
        label: "comparador inteligente entre texto derogado y vigente de cada norma",
      },
      {
        value: "2",
        unit: "fuentes oficiales",
        label: "auditoría en tiempo real conectada a Infoleg y CSJ-IIJ",
      },
      {
        value: "100%",
        unit: "trazabilidad",
        label: "control financiero de honorarios, señas y cobros por expediente",
      },
    ],
  },
  {
    id: "sistema-pediatrico",
    imageKey: "sistema-pediatrico",
    slug: "sistema-clinica-pediatrica",
    title: "HISTORIA CLÍNICA Y TURNOS SIN PAPELES, CONFORME A LA LEY 26.529",
    client: "PEDIATRICCARE // CLÍNICA PEDIÁTRICA",
    plazo: "[COMPLETAR: semanas]",
    location: "Pueblo Esther, Santa Fe",
    category: "SALUD & ERP",
    year: "2025",
    description:
      "Historia clínica electrónica conforme a la Ley 26.529, agenda de turnos inteligente, panel clínico en tiempo real y emisión digital de recetas médicas en PDF.",
    metrics: ["+85% VELOCIDAD DE CONSULTA", "0 ANTECEDENTES EXTRAVIADOS"],
    tags: ["NEXT.JS", "NESTJS", "POSTGRESQL", "PRISMA", "TAILWIND CSS", "PDF GENERATION"],
    fullOverview:
      "Digitalización integral del flujo ambulatorio médico, conectando recepción, consultorios y pacientes en un entorno seguro y confidencial.",
    challengeTitle: "Historia clínica, turnos y privacidad médica no admiten parches",
    challenge:
      "Fichas pediátricas físicas propensas a deterioro o extravío, demoras excesivas para localizar antecedentes al momento de la consulta y retrasos en sala de espera por turnos duplicados.",
    contrastRows: [
      {
        before: "Fichas físicas en papel y registros clínicos sin trazabilidad legal",
        after: "Baja lógica obligatoria y auditoría inmutable conforme a la Ley 26.529",
      },
      {
        before: "Turnos asignados exclusivamente por llamada telefónica en horario administrativo",
        after: "Solicitud directa de las familias desde el portal y confirmación en 1 clic",
      },
      {
        before: "Dirección física y datos sensibles expuestos públicamente",
        after: "Ubicación y datos clínicos accesibles únicamente con cuenta validada",
      },
    ],
    solutionTitle: "ERP clínico modular con API dedicada y portal de familias",
    solution:
      "Plataforma clínica reactiva con buscador instantáneo de pacientes, curvas de crecimiento percentilares automáticas y emisión de órdenes firmadas digitalmente.",
    solutionFeatures: [
      {
        title: "Cumplimiento normativo Ley 26.529",
        description:
          "Cada registro clínico posee auditoría inmutable: nada se borra físicamente y toda modificación queda firmada con fecha, hora y matrícula del profesional.",
      },
      {
        title: "Agenda de turnos sin fricción telefónica",
        description:
          "Las familias consultan disponibilidad real y solicitan citas desde el portal; la clínica aprueba con un clic y actualiza la agenda instantáneamente.",
      },
      {
        title: "Superficies diferenciadas por rol",
        description:
          "Tres portales conectados a la misma API: panel médico de consultorio, módulo administrativo de recepción y portal web para familias.",
      },
      {
        title: "Emisión de recetas y órdenes en PDF",
        description:
          "Generación automática de recetas digitales con membrete oficial, firma y matrícula para envío directo por email o WhatsApp.",
      },
    ],
    resultsTitle: "Estándar clínico entregado",
    resultsMetrics: [
      {
        value: "3",
        unit: "superficies",
        label: "panel médico, portal de pacientes y gestión de secretaría sobre una API unificada",
      },
      {
        value: "5",
        unit: "roles",
        label: "control de acceso granular para resguardo de secreto médico y confidencialidad",
      },
      {
        value: "26.529",
        unit: "Ley",
        label: "trazabilidad estricta y auditoría continua en el modelo de base de datos",
      },
      {
        value: "100%",
        unit: "digital",
        label: "recetas y órdenes ambulatorias emitidas directamente en PDF",
      },
    ],
  },
  {
    id: "crm-concesionaria",
    imageKey: "crm-concesionaria",
    slug: "crm-concesionaria-rosario",
    title: "CUATRO CANALES DE CONSULTAS EN UN SOLO CRM",
    client: "AUTOLEADS // CONCESIONARIA OFICIAL",
    plazo: "[COMPLETAR: semanas]",
    location: "Rosario, Santa Fe",
    category: "VENTAS (CRM)",
    year: "2025",
    description:
      "Centralización de leads de WhatsApp, Instagram, Facebook y Mercado Libre en una sola base unificada con asignación por asesor y métricas de conversión.",
    metrics: ["4 CANALES CENTRALIZADOS", "+40% TASA DE CONTACTO", "CERO LEADS OLVIDADOS"],
    tags: ["REACT", "VITE", "PRIMEREACT", ".NET 9", "DAPPER", "POSTGRESQL", "DOCKER"],
    fullOverview:
      "Plataforma comercial desarrollada para concesionarias automotrices que procesan cientos de consultas digitales semanales.",
    challengeTitle: "Una planilla de Excel no escala con múltiples canales y asesores",
    challenge:
      "Múltiples vendedores cargando consultas en planillas de Excel desincronizadas, prospectos de redes sociales que quedaban sin contactar durante días y nula visibilidad de la efectividad comercial por canal publicitario.",
    contrastRows: [
      {
        before: "Consultas anotadas a mano en hojas de cálculo compartidas",
        after: "Base unificada con canal de origen, fecha, asesor y vehículo de interés",
      },
      {
        before: "Seguimiento comercial dependiente de la memoria individual",
        after: "Asignación automática y trazabilidad de cada interacción de venta",
      },
      {
        before: "Búsquedas lentas filtrando filas manualmente",
        after: "Filtros instantáneos por modelo, estado de compra y número de teléfono",
      },
    ],
    solutionTitle: "CRM de alto rendimiento con captura centralizada y asignación equitativa",
    solution:
      "CRM a medida con Webhooks y APIs de captura inmediata, filtros avanzados por marca/modelo, asignación round-robin equitativa y exportación de métricas en vivo.",
    solutionFeatures: [
      {
        title: "Centralización de canales digitales",
        description:
          "Captura automática de leads desde WhatsApp, campañas de Meta (Instagram/Facebook) y formularios de Mercado Libre en una cola única.",
      },
      {
        title: "Filtros rápidos por modelo y cliente",
        description:
          "Buscador indexado por modelo de vehículo, nombre de prospecto o teléfono para atención telefónica inmediata.",
      },
      {
        title: "Asignación responsable por asesor",
        description:
          "Distribución equitativa de consultas para evitar disputas comerciales y asegurar contacto en menos de 15 minutos.",
      },
      {
        title: "Cotización de usado y financiación",
        description:
          "Campos estructurados de negocio para registrar cotización de permuta y cálculo de cuotas en la misma ficha.",
      },
    ],
    resultsTitle: "Métricas comerciales alcanzadas",
    resultsMetrics: [
      {
        value: "4",
        unit: "canales",
        label: "WhatsApp, Instagram, Facebook y Mercado Libre integrados en una base única",
      },
      {
        value: "+40%",
        unit: "tasa de contacto",
        label: "incremento en velocidad de primera respuesta frente a competidores",
      },
      {
        value: "1",
        unit: "asesor por lead",
        label: "responsable asignado con trazabilidad de llamadas y estado de negociación",
      },
      {
        value: "0",
        unit: "leads perdidos",
        label: "eliminación total de consultas olvidadas en chats personales",
      },
    ],
  },
  {
    id: "landing-limpieza",
    imageKey: "landing-limpieza",
    slug: "landing-empresa-limpieza",
    title: "UNA WEB QUE TRAE CONSULTAS CALIFICADAS",
    client: "SITIO DE AZ SERVICIOS",
    plazo: "1 a 2 semanas",
    location: "Rosario, Santa Fe",
    liveUrl: {
      href: "https://azserviciosdelimpieza.com",
      label: "azserviciosdelimpieza.com",
    },
    category: "LANDING & WEB",
    year: "2026",
    description:
      "Sitio institucional con propuesta de valor de personal asegurado y supervisión GPS, captación calificada e integración con el ERP interno bajo un mismo dominio.",
    metrics: ["+120% LEADS CALIFICADOS", "CARGA EN MENOS DE 0.6 S"],
    tags: ["ASTRO 7", "TYPESCRIPT", "TAILWIND CSS V4", "VERCEL EDGE", "SEO ESTRUCTURADO"],
    fullOverview:
      "Plataforma institucional de alta velocidad con cotizador inteligente que filtra prospectos y alimenta el embudo comercial corporativo.",
    challengeTitle: "Una operación robusta que requería una vidriera corporativa a su altura",
    challenge:
      "La empresa contaba con un ERP moderno para gestionar edificios, pero su sitio web anterior no transmitía la formalidad del personal ni la tecnología satelital que la diferenciaba de la competencia informal.",
    contrastRows: [
      {
        before: "Operación profesional sin presencia web que reflejara su solidez",
        after: "Sitio institucional de alto impacto con propuesta de valor clara",
      },
      {
        before: "Consultas entrantes desordenadas sin datos del edificio o frecuencia",
        after: "Cotizador interactivo de 4 pasos que entrega prospectos calificados",
      },
      {
        before: "Acceso de empleados y sitio público en dominios separados",
        after: "Dominio único con ruteo edge hacia el sistema de gestión interno",
      },
    ],
    solutionTitle: "Arquitectura estática ultra veloz con cotizador multi-paso",
    solution:
      "Sitio desarrollado en Astro y Tailwind v4 con puntuaciones perfectas en Core Web Vitals, cotizador interactivo multi-paso y proxy edge para unificar la marca.",
    solutionFeatures: [
      {
        title: "Propuesta de valor como eje de conversión",
        description:
          "Cada bloque destaca los diferenciales clave: personal propio en blanco con ART, supervisión por QR/GPS y cobertura de edificios y clínicas.",
      },
      {
        title: "Cotizador calificado en 4 pasos",
        description:
          "El prospecto define tipo de espacio, m2 aproximados y frecuencia de servicio antes de solicitar presupuesto, filtrando curiosos.",
      },
      {
        title: "Integración transparente con el ERP",
        description:
          "El dominio principal aloja el sitio público, mientras que rutas internas /admin rutean por Edge al software operativo.",
      },
      {
        title: "Velocidad extrema y SEO estructurado",
        description:
          "Cero tiempo de bloqueo (TBT 0ms), Schema.org para posicionamiento local en Rosario y carga en menos de 600ms.",
      },
    ],
    resultsTitle: "Rendimiento y conversión en vivo",
    resultsMetrics: [
      {
        value: "1",
        unit: "dominio unificado",
        label: "sitio público, panel operativo y API conviviendo bajo la misma marca",
      },
      {
        value: "100/100",
        unit: "Lighthouse",
        label: "puntuaciones perfectas en Performance, Accesibilidad, Mejores Prácticas y SEO",
      },
      {
        value: "< 0.6s",
        unit: "LCP",
        label: "despliegue estático global con respuesta instantánea en conexiones móviles",
      },
      {
        value: "+120%",
        unit: "conversión",
        label: "aumento en presupuestos comerciales calificados listos para cotizar",
      },
    ],
  },
  {
    id: "landing-pediatrica",
    imageKey: "landing-pediatrica",
    slug: "landing-clinica-pediatrica",
    title: "TURNOS DESDE EL CELULAR, SIN ESPERAS",
    client: "PORTAL PEDIÁTRICO // CLÍNICA PEDIÁTRICA",
    plazo: "1 a 2 semanas",
    location: "Pueblo Esther, Santa Fe",
    liveUrl: {
      href: "https://dramartinangelio.com",
      label: "dramartinangelio.com",
    },
    category: "WEB & SALUD",
    year: "2025",
    description:
      "Portal público con trayectoria médica, etapas del cuidado pediátrico y un flujo de solicitud de turnos amigable pensado para las familias.",
    metrics: ["+150% RESERVAS MÓVILES", "100% ACCESIBLE"],
    tags: ["ASTRO", "REACT", "TAILWIND CSS", "VIEW TRANSITIONS", "A11Y"],
    fullOverview:
      "Sitio web médico orientado a la experiencia del paciente familiar, con acceso directo a especialidades y reserva ágil de consultas.",
    challengeTitle: "Apertura de consultorio: presencia online inmediata y privacidad rigurosa",
    challenge:
      "Un consultorio nuevo que necesitaba canalizar pacientes desde el día uno sin colapsar el teléfono de secretaría, resguardando la dirección exacta del consultorio para preservar la seguridad de los menores.",
    contrastRows: [
      {
        before: "Reserva de turnos dependiente de llamados en horarios acotados",
        after: "Solicitud online 24/7 con ingreso directo a la cola de confirmación",
      },
      {
        before: "Dirección física expuesta públicamente en redes sociales",
        after: "Ubicación exacta liberada exclusivamente a familias registradas",
      },
      {
        before: "Información médica dispersa o confusa para padres primerizos",
        after: "Recorrido guiado por las 5 etapas del cuidado infantil",
      },
    ],
    solutionTitle: "Sitio estático con componentes interactivos y puente a turnos clínicos",
    solution:
      "Portal web con reserva en 3 clics optimizada para celulares, selector de cobertura médica y confirmación instantánea sin intermediarios.",
    solutionFeatures: [
      {
        title: "Autoridad y confianza médica",
        description:
          "Presentación de la especialista, matrícula profesional y filosofía de atención personalizada desde el embarazo hasta la adolescencia.",
      },
      {
        title: "Etapas interactivas del desarrollo",
        description:
          "Visualización dinámica de las 5 etapas del crecimiento infantil adaptada a pantallas táctiles y escritorios.",
      },
      {
        title: "Reserva ágil de turnos",
        description:
          "Cada sección culmina en el selector de turnos, donde los padres solicitan consulta en 3 pasos con confirmación por WhatsApp o email.",
      },
      {
        title: "Privacidad protegida por diseño",
        description:
          "El sitio comunica la localidad general; las indicaciones exactas de acceso se envían al confirmar el turno.",
      },
    ],
    resultsTitle: "Resultados en producción",
    resultsMetrics: [
      {
        value: "0ms",
        unit: "TBT",
        label: "tiempo de bloqueo total: carga ultrarrápida sin bundles pesados de JavaScript",
      },
      {
        value: "+150%",
        unit: "reservas móviles",
        label: "padres solicitando turnos fuera del horario administrativo de atención",
      },
      {
        value: "5",
        unit: "etapas",
        label: "del cuidado médico explicadas interactivamente para orientar a la familia",
      },
      {
        value: "100%",
        unit: "accesible",
        label: "diseño contrastado y navegación por teclado validada para todos los usuarios",
      },
    ],
  },
];

// Manifesto rebuilt around Hormozi's macro-speed principle: speed done
// right forces quality, focus and truth (no bureaucracy, no rework).
const esManifesto: ManifestoItem[] = [
  {
    number: "01",
    title: "EL DINERO AMA LA VELOCIDAD (Y TU EMPRESA TAMBIÉN)",
    description:
      "Cada mes que seguís operando en Excel perdés plata y horas. No hacemos proyectos de 6 meses: entregamos sistemas en producción en 3 a 6 semanas.",
  },
  {
    number: "02",
    title: "VELOCIDAD REAL EXIGE CALIDAD Y SEGURIDAD",
    description:
      "Sacar código rápido con IA pero inseguro te frena a los dos meses por retrabajo. Construimos rápido sobre bases sólidas: roles, auditoría y cero brechas de datos.",
  },
  {
    number: "03",
    title: "CERO BUROCRACIA, CERO TELÉFONO DESCOMPUESTO",
    description:
      "No tenemos vendedores ni gerentes de cuenta en el medio. Entrevistás y hablás directo con los fundadores que escriben el código.",
  },
  {
    number: "04",
    title: "PRIMERO LO VES, DESPUÉS FIRMÁS",
    description:
      "Matamos el riesgo antes de que gastes un peso: te mostramos un prototipo funcional con la lógica de tu negocio antes de cerrar el contrato.",
  },
  {
    number: "05",
    title: "ENTREGAS SEMANALES VISIBLES",
    description:
      "Nada de desaparecer hasta el día final. Todos los viernes ves el sistema avanzando en vivo y ajustamos el rumbo en 24 horas.",
  },
  {
    number: "06",
    title: "FECHA DE ENTREGA Y GARANTÍA POR CONTRATO",
    description:
      "Precio cerrado desde el día uno y fecha de lanzamiento firmada. Si aparece un error después de salir a producción, lo arreglamos gratis.",
  },
  {
    number: "07",
    title: "EL CÓDIGO Y TUS DATOS SON 100% TUYOS",
    description:
      "Sin licencias eternas ni secuestro tecnológico. Te entregamos el repositorio, la documentación y capacitamos a tu equipo si querés operarlo solo.",
  },
];

// Home: why-def tcode comparison (§regla 8 differentiation): kills both
// 2026 objections (slow agencies, unsupervised home-built AI) right before
// the qualification filter and the pricing/FAQ block.
const esComparison: ComparisonContent = {
  eyebrow: "// POR QUÉ DEFTCODE",
  title: "NI MESES DE BUROCRACIA, NI PARCHES GENERADOS CON IA.",
  intro:
    "Hoy tenés dos extremos que te hacen perder plata: consultoras que tardan 6 meses y apps hechas con IA sin supervisión que se rompen con el primer cliente real.",
  columns: [
    {
      type: "competitor-slow",
      title: "SOFTWARE FACTORY TRADICIONAL",
      subtitle: "Lenta, cara y llena de intermediarios",
      points: [
        "3 a 6 meses de reuniones y documentos antes de ver una pantalla.",
        "Hablás con vendedores y Project Managers, nunca con quien programa.",
        "Presupuestos abiertos que se inflan con cada cambio.",
        "Si se atrasan, pagás vos el costo de esperar.",
      ],
    },
    {
      type: "competitor-ai",
      title: "HACERLO VOS CON IA / NO-CODE",
      subtitle: "Rápido el día 1, un dolor de cabeza el día 30",
      points: [
        "Prototipo lindo en 2 días, pero sin seguridad ni control de roles.",
        "Datos de clientes y precios expuestos: nadie audita qué ve cada empleado.",
        "Cuando querés conectar AFIP/ARCA, WhatsApp o reglas reales, se rompe.",
        "Terminás pagando el doble para que un ingeniero lo reescriba de cero.",
      ],
    },
    {
      type: "deftcode",
      title: "MÉTODO DEFTCODE",
      subtitle: "Velocidad macro con seguridad de producción",
      points: [
        "Diagnóstico en 48 h y prototipo funcional gratis antes de firmar.",
        "Usamos IA para acelerar, pero la arquitectura la diseñan ingenieros.",
        "Seguridad real: permisos por rol, historial de cambios y Ley 25.326 de datos personales.",
        "Entrega en 3 a 6 semanas a precio cerrado y fecha en contrato.",
      ],
    },
  ],
  ctaLabel: "Ver mi prototipo gratis",
  ctaHref: "/contacto/",
};

// Home: 3-step diagnostic (§3.6).
const esHowWeWork: ProcessContent = {
  eyebrow: "// TU DIAGNÓSTICO GRATIS",
  title: "TU DIAGNÓSTICO GRATIS, PASO A PASO",
  intro: "Solo te pedimos 4 datos. Tres pasos, sin compromiso.",
  steps: [
    {
      step: "01",
      title: "ENTREVISTA DE 1 HORA",
      description:
        "En tu empresa o por videollamada. Nos contás cómo trabajás hoy y qué te hace perder tiempo o plata. Hablás con quien después escribe el código.",
    },
    {
      step: "02",
      title: "INFORME EN 48 HORAS",
      description:
        "Te decimos qué procesos te cuestan plata, cuánto ahorrarías y qué sistema conviene. Es tuyo aunque no trabajemos juntos.",
    },
    {
      step: "03",
      title: "PROTOTIPO GRATIS",
      description:
        "Armamos una maqueta funcional de tu sistema para que lo veas antes de firmar. Si no te convence, no pagás.",
    },
  ],
  ctaLabel: "Quiero mi diagnóstico gratis",
  ctaHref: "/contacto/",
};

// /nosotros: full 4-step process (§6).
const esHowWeWorkNosotros: ProcessContent = {
  eyebrow: "// CÓMO TRABAJAMOS",
  title: "DE LA PRIMERA CHARLA A TU SISTEMA FUNCIONANDO, EN 4 PASOS",
  intro: "Diagnóstico, prototipo y entrega con fecha en el contrato.",
  steps: [
    {
      step: "01",
      title: "DIAGNÓSTICO GRATIS",
      description:
        "Entrevista de 1 hora + informe en 48 h. Entendemos tu negocio y te decimos dónde se te va la plata.",
    },
    {
      step: "02",
      title: "PROTOTIPO GRATIS",
      description: "Ves una maqueta funcional de tu sistema antes de firmar.",
    },
    {
      step: "03",
      title: "DESARROLLO EN SEMANAS",
      description: "Avances semanales visibles en un entorno de prueba. Vos opinás mientras se construye.",
    },
    {
      step: "04",
      title: "LANZAMIENTO Y SOPORTE",
      description:
        "Salimos a producción con documentación. Después, mantenimiento mensual con horas de desarrollo para los cambios.",
    },
  ],
};

// /nosotros: written guarantees (§6).
const esGuarantees: ProcessContent = {
  eyebrow: "// GARANTÍAS",
  title: "LO QUE TE GARANTIZAMOS, POR ESCRITO",
  intro: "Cada punto queda en el contrato.",
  steps: [
    {
      step: "01",
      title: "FECHA DE ENTREGA EN EL CONTRATO",
      description: "Nunca incumplimos un plazo. Cada semana ves el avance real.",
    },
    {
      step: "02",
      title: "PROTOTIPO GRATIS ANTES DE FIRMAR",
      description: "Lo ves funcionando con tus datos. Si no te convence, no pagás.",
    },
    {
      step: "03",
      title: "PRECIO CERRADO",
      description: "Un anticipo al iniciar y el saldo contra entrega validada en producción.",
    },
    {
      step: "04",
      title: "ERRORES ARREGLADOS GRATIS",
      description: "Si encontrás un error después del lanzamiento, lo arreglamos sin cargo.",
    },
    {
      step: "05",
      title: "CÓDIGO 100% TUYO",
      description: "Lo mantenemos nosotros o capacitamos a tu equipo.",
    },
  ],
};

const esTeam: TeamMember[] = [
  {
    name: "AGUSTÍN ANGELINI",
    role: "DESARROLLADOR FULL STACK",
    bio: "Desarrollador full stack. Frontend e integraciones con IA. Me gusta que el software sea rápido, simple y fácil de usar.",
    tags: ["ASTRO", "TYPESCRIPT", "REACT", "TAILWIND", "SISTEMAS DISTRIBUIDOS"],
    github: "https://github.com/angelini-agus",
    linkedin: "https://www.linkedin.com/in/agustin-angelini/",
  },
  {
    name: "FRANCO CUSCIANNA",
    role: "DESARROLLADOR FULL STACK",
    bio: "Desarrollador full stack. Backend y arquitectura de sistemas. Me gusta que el software sea sólido, seguro y escalable.",
    tags: ["BACKEND", "ARQUITECTURA DE SISTEMAS", "SEGURIDAD", "ESCALABILIDAD"],
    github: "https://github.com/francocus",
    linkedin: "https://www.linkedin.com/in/francocus/",
  },
];

const esFaqList: FaqItem[] = [
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Una landing, desde USD 200. Un CRM o ERP a medida, entre USD 1.000 y 2.000 según alcance. Después del diagnóstico recibís un presupuesto cerrado.",
  },
  {
    question: "¿De verdad el diagnóstico es gratis? ¿Cuál es el truco?",
    answer:
      "No hay truco. Preferimos ganarnos tu confianza antes de que gastes un peso. Vos ves qué encontramos y qué conviene, y decidís. El informe es tuyo aunque elijas a otro.",
  },
  {
    // The silent 2026 objection: "why not build it myself with ChatGPT/Cursor?"
    question: "¿Por qué contratarlos si hoy existen herramientas de IA para crear apps rápido?",
    answer:
      "Nosotros mismos usamos IA todos los días para acelerar el desarrollo. La diferencia es que la IA sola genera código frágil: sin arquitectura, control de permisos y seguridad, a los pocos meses se cae, duplica datos o expone información sensible de tus clientes y tu facturación. Con nosotros tenés la velocidad de la IA con la garantía de dos ingenieros que firman el resultado.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "Landings en 1 a 2 semanas. Sistemas a medida en 3 a 6 semanas, con avances visibles desde los primeros días.",
  },
  {
    question: "¿Cómo sé que van a cumplir el plazo si son una empresa nueva?",
    answer:
      "No dependés de nuestra palabra: la fecha de lanzamiento y las entregas semanales quedan en el contrato antes de arrancar. Hasta hoy nunca incumplimos un plazo.",
  },
  {
    question: "¿Y si el sistema no se adapta a cómo trabajo?",
    answer:
      "Por eso primero hacemos el prototipo: lo probás antes de firmar. Después del lanzamiento, el mantenimiento mensual incluye horas de desarrollo para los cambios.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Seguimos disponibles. Si encontramos un error, te avisamos antes de que lo notes. Si lo encontrás vos, nos escribís y lo resolvemos sin cargo.",
  },
  {
    question: "¿El sitio incluye SEO?",
    answer:
      "Toda landing sale con SEO técnico: etiquetas sociales, datos estructurados, sitemap y carga en menos de 2 segundos en el celular. Si querés seguir posicionándote y sumar Meta Ads, está el plan mensual.",
  },
  {
    question: "¿El código es mío?",
    answer:
      "Sí, 100%. Podés contratar mantenimiento con nosotros o capacitamos a tu equipo para que sea autónomo.",
  },
  {
    question: "¿Cómo es el pago?",
    answer:
      "Presupuesto cerrado. Un anticipo al iniciar y el saldo contra entrega validada en producción.",
  },
];

// Testimonio real de Paola Zorila (AZ Servicios de Limpieza), tomado de
// misura-web. La cita se mantiene en su idioma original en ambas locales:
// traducir la voz de una clienta seria inventarla.
const esClientQuote = {
  eyebrow: "TESTIMONIO",
  text: "Antes perdíamos horas llenando planillas a mano para saber quién había trabajado qué día en cada edificio, y encima las quejas por inasistencias eran un dolor de cabeza semana a semana. Con deftcode ahora todo se carga solo, y una tarea que antes le consumía gran parte de su jornada a un empleado, hoy se resuelve de forma automática. Para mí fue de las mejores decisiones que tomé en la empresa, ya que dejé de lidiar con problemas cotidianos y puse mi foco en hacer crecer el negocio.",
  author: "PAOLA ZORILA",
  source: "AZ SERVICIOS DE LIMPIEZA, ROSARIO",
  highlight: "se resuelve de forma automática",
};

const esCtaContent: CtaContent = {
  kicker: "// EMPEZÁ HOY",
  heading: "DESCUBRÍ CUÁNTO TE CUESTAN HOY TUS PLANILLAS.",
  // Short, near-equal-width lines so the fit-to-width scale lands huge
  // and symmetric at every resolution (global.css divisor is calibrated
  // to these strings). 15/15 chars.
  headingLines: ["PRIMERO LO VES.", "DESPUÉS FIRMÁS."],
  subheading: "Entrevista de 1 hora, informe en 48 h y prototipo gratis. Sin compromiso.",
  buttonLabel: "Quiero mi diagnóstico gratis",
  buttonHref: "/contacto/",
  emailLabel: "contacto@deftcode.dev",
};

const esForWho = {
  eyebrow: "// ¿ES PARA VOS?",
  title: "NO TRABAJAMOS CON CUALQUIERA.",
  yesLabel: "ES PARA VOS SI",
  yesItems: [
    "Tus procesos están claros y hoy viven en planillas.",
    "Querés un sistema a medida o una landing que convierta, no una plantilla genérica.",
    "Querés ver tu sistema antes de firmar, con precio cerrado y fecha en el contrato.",
  ],
  noLabel: "NO ES PARA VOS SI",
  noItems: [
    "Buscás el precio más bajo sin importar el resultado.",
    "Querés solo algo lindo, sin métricas ni objetivos de negocio.",
    "Preferís entregar el proyecto y olvidarte: sin tu opinión, ningún sistema refleja cómo trabajás de verdad.",
  ],
  closingText: "Si te viste en la segunda tarjeta, pedí tu diagnóstico gratis.",
  ctaLabel: "Quiero mi diagnóstico gratis",
  ctaHref: "/contacto/",
};

// ==========================================
// HOME PROBLEM SEGMENTATION (§3.4)
// ==========================================

const esProblems: ProblemsContent = {
  eyebrow: "// ¿TE PASA ALGO DE ESTO?",
  title: "¿TE PASA ALGO DE ESTO?",
  intro: "Si marcaste una, el diagnóstico es para vos.",
  cards: [
    {
      key: "planillas",
      title: "YA NO TE ALCANZA EL EXCEL",
      description:
        "Planillas que solo entiende una persona, datos duplicados y errores que cuestan plata. Lo unificamos en un solo sistema hecho a tu medida.",
      buttonLabel: "Quiero salir de las planillas",
      buttonHref: "/contacto/?problema=planillas",
    },
    {
      key: "consultas",
      title: "PERDÉS CONSULTAS ENTRE WHATSAPP, INSTAGRAM Y MAILS",
      description:
        "Las juntamos en un CRM con asignación por asesor. En una concesionaria centralizamos 4 canales y no se olvidó ningún lead.",
      buttonLabel: "Quiero ordenar mis consultas",
      buttonHref: "/contacto/?problema=consultas",
    },
    {
      key: "sistemas",
      title: "UN SISTEMA PARA UNA COSA, UN EXCEL PARA OTRA Y WHATSAPP PARA LA TERCERA",
      description: "Reemplazamos ese rompecabezas por un solo sistema a medida.",
      buttonLabel: "Quiero un solo sistema",
      buttonHref: "/contacto/?problema=sistemas",
    },
    {
      key: "web",
      title: "TU WEB NO TE TRAE CLIENTES",
      description: "Landing con SEO y anuncios en Meta, con informe mensual.",
      buttonLabel: "Quiero más consultas",
      buttonHref: "/contacto/?problema=web",
    },
  ],
  closingText: "Cada problema tiene su solución y todas empiezan igual: con un diagnóstico gratis.",
  counterLabel: "MARCADAS {n}/4",
  ctaLabel: "Quiero mi diagnóstico gratis",
  ctaHref: "/contacto/",
};

// ==========================================
// FEATURED CASE & MORE SOFTWARE (§3.3 / §3.7)
// ==========================================

const esFeaturedCase: FeaturedCaseContent = {
  eyebrow: "// PRUEBA SOCIAL",
  title: "UNA EMPRESA DE LIMPIEZA DE ROSARIO DEJÓ LAS PLANILLAS Y HOY AHORRA $2.8M ARS POR MES.",
  description:
    "Pidieron control de asistencia. Terminamos unificando asistencia, sueldos, impuestos y stock de más de 30 edificios en un solo sistema. Cero quejas por inasistencia.",
  stats: [
    "-$2.8M ARS/MES EN SUELDOS",
    "0 QUEJAS POR INASISTENCIA",
    "30+ EDIFICIOS EN VIVO",
    "100% TRAZABLE",
  ],
  calcCtaLabel: "Calculá cuánto ahorraría tu empresa",
  // TODO: lead magnet calculator pending (ESTRATEGIA-COPY.md §8). Keep the placeholder href.
  calcCtaHref: "#",
  caseCtaLabel: "Ver el caso completo",
};

const esMoreSoftware: MoreSoftwareContent = {
  eyebrow: "// MÁS SOFTWARE FUNCIONANDO",
  title: "MÁS SISTEMAS FUNCIONANDO HOY",
  intro: "Distintos rubros, el mismo método: diagnóstico, prototipo y entrega con fecha en el contrato.",
  viewCaseLabel: "Ver el caso",
  bandLabel: "Ver los 6 casos",
  bandHref: "/proyectos/",
};

// ==========================================
// HOME SERVICES LADDER (§3.5)
// ==========================================

const esServicesHome: ServicesHomeContent = {
  eyebrow: "// QUÉ HACEMOS",
  title: "QUÉ HACEMOS",
  intro: "Todo empieza con el diagnóstico. Lo que sigue lo decide lo que encontremos.",
  items: [
    {
      index: "00",
      title: "EMPEZÁ ACÁ: DIAGNÓSTICO DEFT",
      line: "Entrevista de 1 hora sobre tu negocio, informe en 48 h con lo que te cuesta plata y prototipo gratis. Gratis.",
      buttonLabel: "Agendá la entrevista",
      buttonHref: "/contacto/",
    },
    {
      index: "01",
      title: "SISTEMAS DE GESTIÓN (ERP)",
      line: "Asistencia, sueldos, stock, facturación y remitos en un solo lugar. Entre USD 1.000 y 2.000 según alcance. Listo en 3 a 6 semanas.",
      buttonLabel: "Ver un ERP funcionando",
      buttonHref: "/proyectos/empresa-limpieza-rosario/",
      slug: "sistemas-gestion-erp",
    },
    {
      index: "02",
      title: "CRM Y VENTAS",
      line: "Que no se pierda ninguna consulta ni ningún turno. Entre USD 1.000 y 2.000 según alcance.",
      buttonLabel: "Ver un CRM funcionando",
      buttonHref: "/proyectos/crm-concesionaria-rosario/",
      slug: "sistemas-gestion-ventas",
    },
    {
      index: "03",
      title: "LANDING + SEO + META ADS",
      line: "Tu web y clientes todos los meses. Landing desde USD 200, lista en 1 a 2 semanas; SEO y anuncios en plan mensual.",
      buttonLabel: "Traéme más consultas",
      buttonHref: "/contacto/?problema=web",
      slug: "landing-pages",
    },
    {
      index: "04",
      title: "AUTOMATIZACIÓN CON IA",
      line: "Que tu equipo deje de repetir tareas: WhatsApp, AFIP/ARCA, integraciones. Se cotiza en el diagnóstico.",
      buttonLabel: "Ver qué se puede automatizar",
      buttonHref: "/proyectos/gestion-legal-estudio/",
      slug: "automatizacion-ia",
    },
  ],
};

// ==========================================
// PRICING REFERENCE (§3.11)
// ==========================================

const esPricing: PricingContent = {
  eyebrow: "// PRECIOS DE REFERENCIA",
  title: "CUÁNTO CUESTA, SIN VUELTAS.",
  intro: "Estos son los rangos. El precio cerrado lo definimos después del diagnóstico.",
  whatHeading: "QUÉ",
  priceHeading: "DESDE",
  timeframeHeading: "PLAZO",
  rows: [
    { what: "Landing page", price: "USD 200", timeframe: "1 a 2 semanas" },
    { what: "CRM o ERP a medida", price: "USD 1.000 a 2.000", timeframe: "3 a 6 semanas" },
    { what: "E-commerce", price: "USD 1.500 a 3.000", timeframe: "[COMPLETAR: semanas]" },
    { what: "SEO + Meta Ads (plan mensual)", price: "USD [COMPLETAR] por mes", timeframe: "Desde el primer mes" },
  ],
  footnote: "Se paga un anticipo al iniciar y el saldo contra entrega validada en producción.",
};

// ==========================================
// GLOBAL CHROME (§2)
// ==========================================

const esNavCta: NavCtaContent = {
  label: "Quiero mi diagnóstico gratis",
  href: "/contacto/",
};

const esFooterContent: FooterContent = {
  offerLine: "Diagnóstico gratis. Prototipo gratis. Precio cerrado.",
  locationLine: "ROSARIO, ARGENTINA // TRABAJAMOS CON PYMES DE TODO EL PAÍS",
};

// ==========================================
// 4-FIELD DIAGNOSTIC FORM (§7)
// ==========================================

// Contact form: same promise the user's team sustains ("we answer today")
// plus risk removal right at the button (§7). WhatsApp becomes the declared
// channel; the data-minimisation note stays as a trust microcopy.
const esContactForm: ContactFormContent = {
  nameLabel: "NOMBRE",
  namePlaceholder: "Tu nombre",
  companyLabel: "EMPRESA",
  companyPlaceholder: "El nombre de tu empresa",
  emailLabel: "EMAIL",
  emailPlaceholder: "tu@empresa.com",
  phoneLabel: "WHATSAPP",
  phonePlaceholder: "+54 9 341 ...",
  problemSelectedPrefix: "Marcaste:",
  submitLabel: "Pedir mi diagnóstico y prototipo gratis",
  microcopy:
    "Te respondemos hoy • Sin compromiso • Solo usamos tus datos para contactarte.",
  successTitlePrefix: "Listo,",
  successBody:
    "Ya recibimos tus datos. Te escribimos hoy por WhatsApp para coordinar tu entrevista de 1 hora. Mientras tanto:",
  successCalcLabel: "Calculá cuánto te cuestan tus planillas hoy.",
  // TODO: lead magnet calculator pending (ESTRATEGIA-COPY.md §8).
  successCalcHref: "#",
};

// ==========================================
// AD LANDING /diagnostico (§7)
// ==========================================

const esDiagnosticoLanding: DiagnosticoLandingContent = {
  eyebrow: "// DIAGNÓSTICO DEFT",
  h1: "DESCUBRÍ CUÁNTO TE CUESTAN HOY TUS PLANILLAS. DIAGNÓSTICO GRATIS EN 48 HORAS.",
  subtitle:
    "Una entrevista de 1 hora sobre tu negocio y un informe con qué procesos te hacen perder plata y cuánto ahorrarías. El informe es tuyo aunque no trabajemos juntos.",
  ctaLabel: "Quiero mi diagnóstico gratis",
  proofLine: "Una empresa de limpieza de Rosario ahorra $2.8M ARS por mes desde que dejó las planillas.",
  receiveEyebrow: "// QUÉ RECIBÍS",
  receiveTitle: "QUÉ RECIBÍS",
  receiveItems: [
    "Un informe de una página con los 3 procesos que más te cuestan, en pesos por mes.",
    "Qué se automatiza primero y qué sistema conviene (CRM, ERP, landing o IA).",
    "Un rango de precio y de plazo reales para cada opción.",
    "Un prototipo gratis de lo más importante, para que lo veas antes de firmar.",
    "Un video corto con los hallazgos, para compartirlo con tu equipo o tu socio.",
  ],
  notEyebrow: "// QUÉ NO ES",
  notTitle: "QUÉ NO ES",
  notItems: [
    "No es una llamada de ventas.",
    "No tiene costo ni te pedimos tarjeta.",
    "No te obliga a contratarnos.",
  ],
};

// ==========================================
// ENGLISH DICTIONARY
// ==========================================

const enSiteMeta: SiteMeta = {
  title: "Custom software in Rosario | Free diagnosis | Deftcode",
  description:
    "Custom systems, CRM and ERP in 3 to 6 weeks at a closed price. Book your free diagnosis and see your prototype before you sign.",
  siteUrl: "https://deftcode.com.ar",
  ogImage: "/og-deftcode.png",
  author: "Deftcode Studio",
  location: "ROSARIO, ARGENTINA // WE WORK WITH SMBS ACROSS THE COUNTRY",
  tagline: "Software at velocity.",
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
  home: {
    title: "Custom software in Rosario | Free diagnosis | Deftcode",
    description:
      "Custom systems, CRM and ERP in 3 to 6 weeks at a closed price. Book your free diagnosis and see your prototype before you sign.",
    eyebrow: "ROSARIO, ARGENTINA",
    h1: "YOUR CUSTOM-BUILT SYSTEM",
  },
  nosotros: {
    title: "Who we are: developers who understand business | Deftcode",
    description:
      "Meet Agustín and Franco, the free diagnosis method and the written guarantees we work with.",
    eyebrow: "ABOUT",
    h1: "WE ARE THE ONES WHO WRITE THE CODE. AND THE ONES WHO SIGN THE DELIVERY DATE.",
    intro:
      "We are systems people who understand business. First we learn how you work, then we show you a prototype and only then do we sign. We deliver in weeks, not semesters.",
  },
  proyectos: {
    title: "Real cases: systems, CRM and landings in production | Deftcode",
    description:
      "See what each system we built saved, organized and sold: ERP, CRM, landings and portals in production.",
    eyebrow: "REAL CASES",
    h1: "REAL SOFTWARE THAT SAVES MONEY AND TIME, WITH NUMBERS.",
    intro:
      "Each case shows what problem the client had, how long it took and what changed. Yours can start with a free diagnosis.",
  },
  servicios: {
    title: "Custom systems, CRM, ERP and landings | Deftcode",
    description:
      "We always start with a free diagnosis. Then you choose what to build, with a closed price and the date in the contract.",
    eyebrow: "SERVICES",
    h1: "CUSTOM SYSTEMS THAT REPLACE YOUR SPREADSHEETS IN 3 TO 6 WEEKS.",
    intro:
      "We always start with a free diagnosis. Then you choose what to build, with a closed price and the date in the contract.",
  },
  contacto: {
    title: "Free diagnosis for your company | Deftcode",
    description:
      "1-hour interview, report in 48 h and free prototype. No commitment. Book it now.",
    eyebrow: "FREE DIAGNOSIS",
    h1: "FIND OUT WHAT YOUR SPREADSHEETS COST YOU TODAY. FREE DIAGNOSIS IN 48 HOURS.",
    intro:
      "A 1-hour interview about your business and a report on which processes lose you money and how much you would save. The report is yours even if we never work together.",
  },
  diagnostico: {
    title: "Free diagnosis for your company | Deftcode",
    description:
      "1-hour interview, report in 48 h and free prototype. No commitment. Book it now.",
    eyebrow: "FREE DIAGNOSIS",
    h1: "FIND OUT WHAT YOUR SPREADSHEETS COST YOU TODAY. FREE DIAGNOSIS IN 48 HOURS.",
    intro:
      "A 1-hour interview about your business and a report on which processes lose you money and how much you would save. The report is yours even if we never work together.",
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
  // Macro speed mirror of the ES hero: dream outcome + production speed.
  headlineMain: "DITCH EXCEL.",
  headlineSub: "YOUR SYSTEM IN PRODUCTION IN 4 TO 6 WEEKS. CUSTOM DEVELOPMENT.",
  subtitle:
    "We audit your operation for free and show you a working prototype with your data before you pay a cent. That's how a company in Rosario saves $2.8M ARS per month in payroll.",
  kicker: "STARTUP SPEED. ENGINEERING ARCHITECTURE. ZERO RISK.",
  badge: "ROSARIO, ARGENTINA // FOR SMBS ACROSS THE COUNTRY",
  locationText: "ROSARIO, ARGENTINA // WE WORK WITH SMBS ACROSS THE COUNTRY",
  roleText: "CUSTOM ERP // CRM // AI AUTOMATION // LANDINGS THAT CONVERT",
  stats: [
    "-$2.8M ARS/MO SAVED AT AZ",
    "0 ABSENCE COMPLAINTS",
    "3 TO 6 WEEKS TO PRODUCTION",
    "0 MISSED DEADLINES",
  ],
  ctaLabel: "Get my diagnosis and free prototype",
  ctaHref: "/en/contact/",
  ctaSecondaryLabel: "See the real case (-$2.8M/mo)",
  ctaSecondaryHref: "/en/projects/empresa-limpieza-rosario/",
  microcopy: "1-hour interview • Report in 48 h • Free prototype before signing.",
  scrollText: "SCROLL DOWN • SPEED AND PRECISION • ",
};

const enMarqueeItems = {
  row1: [
    "FREE DIAGNOSIS",
    "FREE PROTOTYPE",
    "CLOSED PRICE",
    "DATE IN THE CONTRACT",
    "100% YOUR CODE",
    "WEEKLY DELIVERIES",
  ],
  row2: [
    "NO SPREADSHEETS",
    "NO LOOSE WHATSAPP",
    "NO OFF-THE-SHELF SYSTEMS",
    "ONE CUSTOM-BUILT SYSTEM",
    "SUPPORT AFTER LAUNCH",
    "-$2.8M ARS/MO IN PAYROLL",
  ],
};

const enServices: ServiceItem[] = [
  {
    id: "erp-ops",
    slug: "erp-systems",
    index: "01",
    title: "ERP SYSTEMS",
    description:
      "Custom management systems: field operation with GPS and QR check-ins, stock, invoicing and receivables in one lean panel. Niche ERP without the setup marathon.",
    kicker: "OPERATION → INVOICING, ONE SCREEN",
    intro:
      "Generic systems never match how you operate. We build the lean, modern panel that follows your real circuit: crews on the street, stock, invoicing and receivables.",
    modules: [
      {
        heading: "FIELD OPERATIONS",
        items: [
          "Clock-in and attendance validated by GPS or QR on location.",
          "Shift assignment, on-call crews, last-minute replacements and daily updates.",
          "Supply requests and digital delivery notes per client or job site.",
        ],
      },
      {
        heading: "ADMINISTRATIVE MANAGEMENT",
        items: [
          "Stock control with reorder alerts and dynamic price lists.",
          "Invoicing and quotes with fast PDF export.",
          "Receivables and payables with owed amounts and terms.",
        ],
      },
      {
        // Security mirror of the ES erp-ops module.
        heading: "SECURITY AND TRACEABILITY",
        items: [
          "Role-based permissions: every employee sees only what belongs to them.",
          "Immutable history of who created, edited or deleted each record.",
        ],
      },
    ],
    clients:
      "Cleaning and maintenance companies, construction firms, security, logistics, distributors, workshops, small factories and installers.",
    value: [
      "The whole circuit stops living in spreadsheets and cross chats.",
      "Absenteeism, replacements and delivery notes under traceable control.",
      "A lean panel configured to your circuit, not the other way around.",
    ],
    tags: ["FIELD OPS", "STOCK", "INVOICING", "DELIVERY NOTES", "RECEIVABLES"],
  },
  {
    id: "ventas-citas",
    slug: "sales-management-systems",
    index: "02",
    title: "SALES MANAGEMENT SYSTEMS",
    description:
      "Bookings, scheduling, quote engines and B2B portals: the full commercial chain from the first inquiry to direct ordering, with no manual work in between.",
    kicker: "AGENDA AND QUOTES WITH NO DEAD TIME",
    intro:
      "Your sales team wins time: schedules without gaps, quotes that go out on the spot and clients entering their own portal to order directly.",
    modules: [
      {
        heading: "BOOKINGS AND AGENDAS",
        items: [
          "Weekly and monthly calendar assigned per professional or room.",
          "Digital client or patient record with history and attachments.",
          "Automatic WhatsApp or email reminders to cut no-shows.",
          "Charges or payout per session or professional.",
        ],
      },
      {
        heading: "QUOTE ENGINES AND B2B PORTAL",
        items: [
          "Quoting with dimensions, materials, costs and margins.",
          "Formal proposals in PDF ready to send.",
          "Private portal for recurring clients: their catalog, their pricing, direct orders.",
        ],
      },
    ],
    clients:
      "Clinics and practices, veterinary offices, beauty studios, accounting and law firms, print shops, custom carpentry shops and industrial suppliers.",
    value: [
      "Quote in minutes, not days.",
      "Fewer missed appointments with automatic reminders.",
      "The sales team stops passing data between systems by hand.",
    ],
    tags: ["BOOKINGS", "AGENDAS", "QUOTE ENGINES", "B2B PORTAL"],
  },
  {
    id: "landing-velocidad",
    slug: "landing-pages",
    index: "03",
    title: "LANDING PAGES",
    description:
      "High-velocity landing pages with instant load: zero blocking time, green performance scores and technical SEO as standard.",
    kicker: "YOUR FIRST DIGITAL POINT OF SALE",
    intro:
      "Your first digital point of sale: a page that loads instantly, ranks organically and turns visits into inquiries.",
    modules: [
      {
        heading: "VELOCITY",
        items: [
          "Pre-rendered pages: instant load, zero blocking time.",
          "Green performance scores, which also feed SEO rankings.",
          "Custom editorial-brutalist design.",
        ],
      },
      {
        heading: "TECHNICAL SEO",
        items: [
          "Structured data for Google, dynamic sitemap and complete social tags.",
          "Complete meta tags and preloaded typography.",
          "Mobile-safe structure.",
        ],
      },
    ],
    clients:
      "Studios, SMBs, ventures and professionals who sell services or want to strengthen their commercial presence.",
    value: [
      "Inquiries coming from organic search.",
      "A page that loads before visitors think about going back.",
      "100% your own code, no generic platforms behind it.",
    ],
    tags: ["INSTANT LOAD", "TECHNICAL SEO", "GREEN SCORES", "CONVERSION"],
  },
  {
    id: "automatizacion-ia",
    slug: "ai-automation",
    index: "04",
    title: "AI AUTOMATION",
    description:
      "Custom integrations and AI automation: your storefront, ERP, CRM and WhatsApp talking to each other on their own.",
    kicker: "SYSTEMS THAT TALK TO EACH OTHER",
    intro:
      "Your operation already lives in your tools, they just don't talk to each other. We wire them together and AI absorbs the repetitive work.",
    modules: [
      {
        heading: "CUSTOM INTEGRATIONS",
        items: [
          "Stock and price sync between the online store and the warehouse.",
          "Electronic invoicing with AFIP/ARCA.",
          "WhatsApp Business for order-status and collections notices.",
        ],
      },
      {
        heading: "APPLIED AI",
        items: [
          "Automatic classification and replies with AI.",
          "Flows with no manual steps between systems.",
          "Alerts and daily digests generated by your process.",
          "AI with guardrails and verified sources: it works on your real data without inventing or exposing confidential information.",
        ],
      },
    ],
    clients:
      "Retailers and SMBs whose tools don't talk to each other: eCommerce with ERP, CRM with WhatsApp, quoting with invoicing.",
    value: [
      "The manual work of moving data between systems disappears.",
      "Faster replies to clients, every day.",
      "A sharp high-impact build, without lifting a new system.",
    ],
    tags: ["INTEGRATIONS", "WHATSAPP", "AFIP / ARCA", "AI"],
  },
];

const enProjects: ProjectItem[] = [
  {
    id: "empresa-limpieza",
    imageKey: "empresa-limpieza",
    slug: "empresa-limpieza-rosario",
    title: "FROM SPREADSHEETS TO A SYSTEM SAVING $2.8M ARS PER MONTH",
    client: "SERVICETRACK // AZ CLEANING & FACILITY SERVICES",
    plazo: "[COMPLETAR: semanas]",
    location: "Rosario, Argentina",
    category: "OPERATIONS ERP",
    year: "2026",
    description:
      "QR and GPS geolocation attendance tracking across 30+ facilities, automated payroll calculation based on collective agreements, inventory control, and live supervisor map.",
    metrics: ["-$2.8M ARS/MO SAVED IN PAYROLL", "0 UNVERIFIED ABSENCES", "30+ BUILDINGS LIVE", "100% TRACEABILITY"],
    tags: ["NODE.JS", "TYPESCRIPT", "POSTGRESQL", "QR SCANNER", "GPS GEOLOCATION"],
    fullOverview:
      "Operations management system replacing manual paper sign-ins and spreadsheets for field teams distributed across 30+ locations simultaneously.",
    challengeTitle: "Manual oversight hit a breaking point",
    challenge:
      "Supervising 30+ commercial buildings relied on messy Excel spreadsheets and WhatsApp messages, resulting in 4-6 monthly customer complaints over unverified attendance and days spent manually reconciling month-end payroll.",
    contrastRows: [
      {
        before: "Shift attendance tracked on messy Excel sheets shared over WhatsApp",
        after: "Check-in and check-out verified via on-device GPS and building QR codes",
      },
      {
        before: "Days lost every month manually cross-referencing timesheets",
        after: "Wages, overtime, and labor taxes computed automatically in minutes",
      },
      {
        before: "Zero real-time visibility into who was on site at each building",
        after: "Live interactive map displaying active shifts and absence alerts",
      },
    ],
    solutionTitle: "Total operational traceability & instant automated payroll",
    solution:
      "Web platform where staff log shifts validated via on-device QR scanning and GPS coordinates, slashing payroll calculations to minutes and highlighting anomalies on a live supervisor map.",
    solutionFeatures: [
      {
        title: "GPS Geolocation & QR Attendance",
        description:
          "Field staff clock in and out from their own phones, validated against geofenced coordinates and on-site QR codes. Paperless, frictionless, and tamper-proof.",
      },
      {
        title: "Automated Payroll & Overtime Engine",
        description:
          "Verified hours, overtime, weekend shifts, and tardiness are automatically calculated under union labor standards. Month-end closing now takes minutes instead of days.",
      },
      {
        title: "Building-Specific Stock Inventory",
        description:
          "Each facility maintains an isolated supply inventory. Supervisors log product consumption from mobile devices, triggering automatic reorder alerts before stockouts.",
      },
      {
        title: "Live Supervisor Map & Alerts",
        description:
          "Supervisors view real-time operations on an interactive map showing active staff, shift durations, and automated early absence warnings.",
      },
    ],
    resultsTitle: "Quantifiable Operational Impact",
    resultsMetrics: [
      {
        value: "-$2.8M",
        unit: "ARS/mo",
        label: "saved in admin payroll and social charges by eliminating manual reconciliation",
      },
      {
        value: "0",
        unit: "complaints",
        label: "monthly unverified attendance disputes (down from 4-6 recurring issues)",
      },
      {
        value: "1",
        unit: "supervisor",
        label: "now manages operations previously requiring 3 coordinators with live tracking",
      },
      {
        value: "30+",
        unit: "facilities",
        label: "actively operated across the platform in live production today",
      },
    ],
  },
  {
    id: "gestion-legal",
    imageKey: "gestion-legal",
    slug: "gestion-legal-estudio",
    title: "TWO COUNTRIES, ONE SYSTEM, ZERO MISSED DEADLINES",
    client: "LEGALDESK // INTERNATIONAL LAW FIRM",
    plazo: "[COMPLETAR: semanas]",
    location: "Argentina & Paraguay",
    category: "LEGAL ERP",
    year: "2026",
    description:
      "Cloud platform to manage judicial and corporate cases across two countries, procedural deadline tracking, multi-currency billing, and AI jurisprudence search.",
    metrics: ["2 ACTIVE JURISDICTIONS", "-60% RESEARCH TIME", "ZERO MISSED DEADLINES"],
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "PRISMA", "EMBEDDED AI"],
    fullOverview:
      "Comprehensive cloud platform designed for cross-border law firms managing complex litigation and corporate clients.",
    challengeTitle: "Operating across two jurisdictions without generic software bloat",
    challenge:
      "Physical case files split across two countries with disparate legal frameworks, procedural deadlines tracked on personal notebooks, and hours wasted searching jurisprudence across disjointed official gazettes.",
    contrastRows: [
      {
        before: "Off-the-shelf software forcing two different countries into a rigid single mold",
        after: "Legal proceedings and statutory obligations tailored to each jurisdiction's code",
      },
      {
        before: "Saved statutes becoming quietly outdated with no automated notice",
        after: "Live verification against official gazettes (Infoleg / CSJ-IIJ) with AI alerts",
      },
      {
        before: "Clients, court filings, and accounting scattered across disconnected tools",
        after: "A single unified cloud platform powering the law firm's entire practice",
      },
    ],
    solutionTitle: "Cross-border litigation suite with real-time statutory verification",
    solution:
      "Unified cloud repository with automatic procedural statute-of-limitations alerts, multi-currency billing, and a custom AI engine with strict official source citations.",
    solutionFeatures: [
      {
        title: "Comprehensive Client Profiles",
        description:
          "Consolidated client dossier including identity records, contacts, power-of-attorney documents, and linked judicial and out-of-court matters.",
      },
      {
        title: "Judicial & Corporate Case Tracking",
        description:
          "Track court filings, judge assignments, procedural stages, attached pleadings, and privileged internal notes with role-based confidentiality tiers.",
      },
      {
        title: "AI Jurisprudence & Gazette Engine",
        description:
          "Automated auditing that validates active statutes against official gazettes (Infoleg for Argentina, CSJ-IIJ for Paraguay), alerting lawyers whenever precedents are superseded.",
      },
      {
        title: "Court Calendar & Multi-Currency Billing",
        description:
          "Statutory deadline reminders, retainer tracking, tax obligations, and court fee ledger in both Argentine Pesos and US Dollars.",
      },
    ],
    resultsTitle: "Production Operational Capabilities",
    resultsMetrics: [
      {
        value: "2",
        unit: "jurisdictions",
        label: "Argentina and Paraguay operating under one shared digital system without friction",
      },
      {
        value: "AI",
        unit: "statute assistant",
        label: "diffing repealed versus active legislation with instant amendment alerts",
      },
      {
        value: "2",
        unit: "official gazettes",
        label: "continuous background source synchronization with Infoleg and CSJ-IIJ",
      },
      {
        value: "100%",
        unit: "traceability",
        label: "financial ledger tracking retainers, billable disbursements, and case fees",
      },
    ],
  },
  {
    id: "sistema-pediatrico",
    imageKey: "sistema-pediatrico",
    slug: "sistema-clinica-pediatrica",
    title: "PAPERLESS RECORDS AND BOOKINGS, HEALTHCARE-LAW COMPLIANT",
    client: "PEDIATRICCARE // PEDIATRIC CLINIC",
    plazo: "[COMPLETAR: semanas]",
    location: "Pueblo Esther, Santa Fe",
    category: "HEALTHCARE & ERP",
    year: "2025",
    description:
      "Compliant Electronic Health Records (EHR), intelligent scheduling agenda, real-time clinical dashboard, and digital PDF prescription generation.",
    metrics: ["+85% CONSULTATION SPEED", "0 MISPLACED RECORDS"],
    tags: ["NEXT.JS", "NESTJS", "POSTGRESQL", "PRISMA", "TAILWIND CSS", "PDF GENERATION"],
    fullOverview:
      "Full digitization of outpatient medical workflows, bridging front-desk reception, doctor consultation rooms, and families within a secure, confidential environment.",
    challengeTitle: "Medical records, booking, and privacy cannot be patched after launch",
    challenge:
      "Physical paper charts prone to loss or misplacement, prolonged delays retrieving historical patient records during consultations, and duplicated appointment slots causing waiting room friction.",
    contrastRows: [
      {
        before: "Paper charts and clinical records with zero statutory audit compliance",
        after: "Immutable append-only audit trail and soft-deletes conforming to healthcare law",
      },
      {
        before: "Appointments booked only via phone calls during narrow administrative hours",
        after: "Parents book directly through the family portal with 1-click clinic confirmation",
      },
      {
        before: "Clinic physical address and sensitive patient details publicly exposed",
        after: "Exact location and clinical records unlocked exclusively to authenticated families",
      },
    ],
    solutionTitle: "Modular clinical suite with unified API & family web portal",
    solution:
      "Reactive clinical suite with instant patient lookup, automatic percentile growth curves, and digitally signed PDF prescriptions and lab requisitions.",
    solutionFeatures: [
      {
        title: "Statutory EHR Compliance",
        description:
          "Immutable audit logs record every read and write. No medical entry is physically destroyed, ensuring rigorous clinical liability adherence.",
      },
      {
        title: "Zero-Friction Online Booking",
        description:
          "Families browse genuine real-time physician openings and submit appointment requests; front desk confirms in one click, updating the master schedule instantly.",
      },
      {
        title: "Role-Tailored Digital Surfaces",
        description:
          "Three purpose-built interfaces powered by one API: physician examination room, reception desk management, and self-service family portal.",
      },
      {
        title: "Digital PDF Prescriptions & Orders",
        description:
          "Instant issuance of tamper-proof PDF medical orders and prescriptions bearing physician license details, instantly shareable via email or messaging.",
      },
    ],
    resultsTitle: "Delivered Clinical Benchmark",
    resultsMetrics: [
      {
        value: "3",
        unit: "surfaces",
        label: "physician dashboard, patient portal, and administrative desk on a unified API",
      },
      {
        value: "5",
        unit: "access roles",
        label: "granular authorization safeguarding medical privacy and patient privilege",
      },
      {
        value: "Law 26.529",
        unit: "compliance",
        label: "append-only audit trails embedded directly in database constraints",
      },
      {
        value: "100%",
        unit: "paperless",
        label: "prescriptions, treatment plans, and developmental charts generated digitally",
      },
    ],
  },
  {
    id: "crm-concesionaria",
    imageKey: "crm-concesionaria",
    slug: "crm-concesionaria-rosario",
    title: "FOUR INQUIRY CHANNELS IN ONE CRM",
    client: "AUTOLEADS // OFFICIAL DEALERSHIP",
    plazo: "[COMPLETAR: semanas]",
    location: "Rosario, Santa Fe",
    category: "SALES CRM",
    year: "2025",
    description:
      "Centralization of inbound leads from WhatsApp, Instagram, Facebook, and Mercado Libre into one unified pipeline with sales rep assignment and conversion metrics.",
    metrics: ["4 CENTRALIZED CHANNELS", "+40% CONTACT RATE", "ZERO FORGOTTEN LEADS"],
    tags: ["REACT", "VITE", "PRIMEREACT", ".NET 9", "DAPPER", "POSTGRESQL", "DOCKER"],
    fullOverview:
      "Commercial sales pipeline developed for automotive dealerships processing hundreds of digital inquiries each week.",
    challengeTitle: "A spreadsheet cannot scale across multiple channels and sales reps",
    challenge:
      "Sales reps tracking leads on individual spreadsheets, prospects waiting days without replies, and zero visibility into which ad campaigns were generating closed deals.",
    contrastRows: [
      {
        before: "Inbound inquiries entered manually into fragmented, conflicting spreadsheets",
        after: "Unified database capturing channel, timestamp, rep, and requested vehicle model",
      },
      {
        before: "Sales follow-up dependent on each rep's personal memory and WhatsApp chat",
        after: "Automated rep assignment and strict audit trail for every sales touchpoint",
      },
      {
        before: "Painstaking manual filtering by phone or vehicle make across spreadsheet rows",
        after: "Instant indexed search by make/model, customer name, and phone number",
      },
    ],
    solutionTitle: "High-velocity sales CRM with centralized capture & balanced routing",
    solution:
      "Custom CRM with real-time webhooks and APIs, make/model filtering, equitable round-robin lead distribution, and live pipeline analytics exportable in seconds.",
    solutionFeatures: [
      {
        title: "Omnichannel Lead Centralization",
        description:
          "Automatic webhook ingestion from WhatsApp, Meta ads (Instagram/Facebook), and Mercado Libre into a unified real-time pipeline.",
      },
      {
        title: "Instant Vehicle & Lead Search",
        description:
          "High-performance indexed filtering by make, vehicle trim, financing interest, or customer phone for immediate outbound calling.",
      },
      {
        title: "Accountable Sales Rep Routing",
        description:
          "Equitable round-robin distribution prevents rep friction and guarantees lead response times under 15 minutes.",
      },
      {
        title: "Trade-In & Financing Appraisals",
        description:
          "Structured fields capture used vehicle trade-in appraisals and down payment financing simulations directly inside the lead profile.",
      },
    ],
    resultsTitle: "Commercial Performance Gains",
    resultsMetrics: [
      {
        value: "4",
        unit: "channels",
        label: "WhatsApp, Instagram, Facebook, and Mercado Libre synced into one CRM",
      },
      {
        value: "+40%",
        unit: "first contact speed",
        label: "increase in rapid outreach velocity compared to competitors",
      },
      {
        value: "1",
        unit: "rep per lead",
        label: "single owner per opportunity with call logs and deal stage history",
      },
      {
        value: "0",
        unit: "lost leads",
        label: "complete eradication of forgotten inquiries buried in personal chats",
      },
    ],
  },
  {
    id: "landing-limpieza",
    imageKey: "landing-limpieza",
    slug: "landing-empresa-limpieza",
    title: "A WEBSITE THAT BRINGS IN QUALIFIED INQUIRIES",
    client: "AZ SERVICIOS WEBSITE",
    plazo: "1 to 2 weeks",
    location: "Rosario, Santa Fe",
    liveUrl: {
      href: "https://azserviciosdelimpieza.com",
      label: "azserviciosdelimpieza.com",
    },
    category: "CORPORATE LANDING",
    year: "2026",
    description:
      "Corporate web presence highlighting verified insured staff and GPS supervision, qualified lead capture, and seamless integration with the internal ERP under a single domain.",
    metrics: ["+120% QUALIFIED LEADS", "LOADS IN UNDER 0.6 S"],
    tags: ["ASTRO 7", "TYPESCRIPT", "TAILWIND CSS V4", "VERCEL EDGE", "STRUCTURED SEO"],
    fullOverview:
      "Ultra-fast corporate platform with an interactive quoting engine that filters serious commercial leads into the sales funnel.",
    challengeTitle: "A robust operation that deserved a high-impact digital presence",
    challenge:
      "Outdated legacy website failing to convey the formal corporate compliance and satellite supervision that set the company apart from informal competitors.",
    contrastRows: [
      {
        before: "Professional commercial operation with an outdated, uninformative website",
        after: "High-impact corporate web platform clearly articulating institutional value",
      },
      {
        before: "Unqualified inbound messages lacking facility square footage or service scope",
        after: "4-step interactive estimator delivering pre-qualified, actionable proposals",
      },
      {
        before: "Customer portal, staff login, and API running on fragmented separate domains",
        after: "Single unified corporate domain with Edge proxy routing into internal ERP",
      },
    ],
    solutionTitle: "Ultra-fast SSG architecture with multi-step commercial estimator",
    solution:
      "Static SSG architecture with Astro and Tailwind CSS v4, multi-step commercial quote calculator, and modern brutalist aesthetic signaling reliability and operational rigor.",
    solutionFeatures: [
      {
        title: "Value Proposition-Driven Conversion",
        description:
          "Sections spotlight key enterprise differentiators: full worker's compensation insurance, GPS check-in verification, and specialized medical/corporate facility coverage.",
      },
      {
        title: "4-Step Qualified Quote Estimator",
        description:
          "Prospects select facility type, estimated square meters, and shift frequency before submitting, pre-qualifying leads for sales follow-up.",
      },
      {
        title: "Seamless ERP Edge Integration",
        description:
          "The apex domain hosts public marketing pages, while edge proxies route employee portals and internal API requests without subdomains.",
      },
      {
        title: "Extreme Speed & Structured Local SEO",
        description:
          "0ms Total Blocking Time, complete Schema.org corporate organization markup, and sub-600ms Largest Contentful Paint worldwide.",
      },
    ],
    resultsTitle: "Live Speed & Conversion Results",
    resultsMetrics: [
      {
        value: "1",
        unit: "unified domain",
        label: "public site, employee check-in portal, and internal API on one brand address",
      },
      {
        value: "100/100",
        unit: "Lighthouse",
        label: "perfect scores across Performance, Accessibility, Best Practices, and SEO",
      },
      {
        value: "< 0.6s",
        unit: "LCP",
        label: "immutable global edge CDN delivery with instant mobile paint speed",
      },
      {
        value: "+120%",
        unit: "conversion",
        label: "growth in commercial proposals ready for executive quotation",
      },
    ],
  },
  {
    id: "landing-pediatrica",
    imageKey: "landing-pediatrica",
    slug: "landing-clinica-pediatrica",
    title: "BOOKINGS FROM THE PHONE, NO WAITING",
    client: "PEDIATRIC PORTAL // PEDIATRIC CLINIC",
    plazo: "1 to 2 weeks",
    location: "Pueblo Esther, Santa Fe",
    liveUrl: {
      href: "https://dramartinangelio.com",
      label: "dramartinangelio.com",
    },
    category: "HEALTHCARE WEB",
    year: "2025",
    description:
      "Public-facing portal showcasing pediatric specialties, medical team credentials, and an intuitive family-friendly booking workflow.",
    metrics: ["+150% MOBILE APPOINTMENTS", "100% ACCESSIBLE"],
    tags: ["ASTRO", "REACT", "TAILWIND CSS", "VIEW TRANSITIONS", "A11Y"],
    fullOverview:
      "Patient-first healthcare website providing direct access to medical specialties, physician bios, and seamless online booking.",
    challengeTitle: "Clinic grand opening: immediate online footprint & patient privacy",
    challenge:
      "A brand new pediatric practice needing to channel patient appointments from day one without jamming reception lines, while protecting exact physical location for minor safety.",
    contrastRows: [
      {
        before: "Appointment booking reliant on phone calls during restricted morning desk hours",
        after: "24/7 online scheduling landing straight into the clinic's confirmation queue",
      },
      {
        before: "Clinic physical street address exposed publicly across social media",
        after: "General town displayed publicly; exact address unlocked only to booked families",
      },
      {
        before: "Medical guidance fragmented across social posts and pamphlets",
        after: "Guided interactive walkthrough across all five developmental childhood stages",
      },
    ],
    solutionTitle: "Static web presence with interactive milestones & booking bridge",
    solution:
      "Patient-first healthcare website providing direct access to medical specialties, physician bios, and seamless online booking.",
    solutionFeatures: [
      {
        title: "Medical Authority & Trust",
        description:
          "Profiles the pediatrician's board certifications, clinical philosophy, and dedication to continuous care from preconception through adolescence.",
      },
      {
        title: "Interactive Developmental Milestones",
        description:
          "Engaging dynamic visualization detailing the five childhood care phases, responsive across mobile touchscreens and desktop viewports.",
      },
      {
        title: "Seamless 3-Step Appointment Booking",
        description:
          "Every section naturally funnels parents toward the appointment scheduler, confirming slots with instant messaging or email notifications.",
      },
      {
        title: "Privacy by Design",
        description:
          "The public website publishes the locality; precise clinic directions are dispatched upon appointment approval.",
      },
    ],
    resultsTitle: "Production Milestones",
    resultsMetrics: [
      {
        value: "0ms",
        unit: "TBT",
        label: "zero blocking time: instant loading with zero heavy JavaScript client hydration",
      },
      {
        value: "+150%",
        unit: "mobile bookings",
        label: "parents booking visits outside traditional business telephone hours",
      },
      {
        value: "5",
        unit: "care stages",
        label: "interactive guidance reassuring parents through every developmental phase",
      },
      {
        value: "100%",
        unit: "accessible",
        label: "WCAG AAA color contrast and comprehensive keyboard-friendly navigation",
      },
    ],
  },
];

// EN manifesto mirror: macro-speed philosophy in 7 principles.
const enManifesto: ManifestoItem[] = [
  {
    number: "01",
    title: "THE MONEY LOVES SPEED (AND SO DOES YOUR BUSINESS)",
    description:
      "Every month you keep operating in spreadsheets costs you money and hours. We don't run 6-month projects: we ship systems to production in 3 to 6 weeks.",
  },
  {
    number: "02",
    title: "REAL SPEED DEMANDS QUALITY AND SECURITY",
    description:
      "Fast but insecure AI-generated code slows you down two months in with rework. We build fast on solid foundations: roles, audit trails and zero data gaps.",
  },
  {
    number: "03",
    title: "ZERO BUREAUCRACY, ZERO BROKEN TELEPHONE",
    description:
      "No salespeople or account managers in the middle. You interview and talk directly with the founders who write the code.",
  },
  {
    number: "04",
    title: "YOU SEE IT FIRST, THEN YOU SIGN",
    description:
      "We kill the risk before you spend a cent: you see a working prototype with your business logic before closing the contract.",
  },
  {
    number: "05",
    title: "VISIBLE WEEKLY DELIVERIES",
    description:
      "No disappearing until the final day. Every Friday you see the system advancing live, and we adjust course within 24 hours.",
  },
  {
    number: "06",
    title: "DELIVERY DATE AND GUARANTEE IN THE CONTRACT",
    description:
      "Closed price from day one and a signed launch date. If a bug appears after going to production, we fix it for free.",
  },
  {
    number: "07",
    title: "THE CODE AND YOUR DATA ARE 100% YOURS",
    description:
      "No eternal licenses, no vendor lock-in. We hand over the repository and documentation, and we train your team if you want to run it yourself.",
  },
];

// EN home: why-def tcode comparison (mirror of the ES matrix).
const enComparison: ComparisonContent = {
  eyebrow: "// WHY DEFTCODE",
  title: "NO MONTHS OF BUREAUCRACY, NO AI-GENERATED PATCHES.",
  intro:
    "Today you have two extremes that cost you money: consultancies that take 6 months and unsupervised AI-built apps that break with the first real client.",
  columns: [
    {
      type: "competitor-slow",
      title: "TRADITIONAL SOFTWARE FACTORY",
      subtitle: "Slow, expensive, full of middlemen",
      points: [
        "3 to 6 months of meetings and documents before seeing a screen.",
        "You talk to salespeople and project managers, never to whoever codes.",
        "Open-ended quotes that inflate with every change.",
        "If they run late, you pay the cost of waiting.",
      ],
    },
    {
      type: "competitor-ai",
      title: "BUILD IT YOURSELF WITH AI / NO-CODE",
      subtitle: "Fast on day 1, a headache by day 30",
      points: [
        "A nice prototype in 2 days, but no security and no role control.",
        "Client data and prices exposed: nobody audits what each employee sees.",
        "The moment you connect AFIP, WhatsApp or real business rules, it breaks.",
        "You end up paying double for an engineer to rewrite it from scratch.",
      ],
    },
    {
      type: "deftcode",
      title: "THE DEFTCODE METHOD",
      subtitle: "Macro speed with production-grade security",
      points: [
        "Diagnosis in 48 h and a free working prototype before signing.",
        "We use AI to accelerate, but engineers design the architecture.",
        "Real security: role-based permissions, change history and data privacy law compliance.",
        "Delivery in 3 to 6 weeks at a closed price with a date in the contract.",
      ],
    },
  ],
  ctaLabel: "See my free prototype",
  ctaHref: "/en/contact/",
};

// EN home: 3-step diagnostic (§3.6).
const enHowWeWork: ProcessContent = {
  eyebrow: "// YOUR FREE DIAGNOSIS",
  title: "YOUR FREE DIAGNOSIS, STEP BY STEP",
  intro: "We only ask for 4 details. Three steps, no commitment.",
  steps: [
    {
      step: "01",
      title: "1-HOUR INTERVIEW",
      description:
        "At your company or on a video call. You tell us how you work today and what costs you time or money. You talk to whoever writes the code afterwards.",
    },
    {
      step: "02",
      title: "REPORT IN 48 HOURS",
      description:
        "We tell you which processes cost you money, how much you would save, and which system fits. It's yours even if we never work together.",
    },
    {
      step: "03",
      title: "FREE PROTOTYPE",
      description:
        "We build a functional mockup of your system so you can see it before signing. If it doesn't convince you, you pay nothing.",
    },
  ],
  ctaLabel: "Get my free diagnosis",
  ctaHref: "/en/contact/",
};

// EN /about: full 4-step process (§6).
const enHowWeWorkNosotros: ProcessContent = {
  eyebrow: "// HOW WE WORK",
  title: "FROM THE FIRST CHAT TO YOUR SYSTEM RUNNING, IN 4 STEPS",
  intro: "Diagnosis, prototype and delivery with the date in the contract.",
  steps: [
    {
      step: "01",
      title: "FREE DIAGNOSIS",
      description:
        "1-hour interview + report in 48 h. We understand your business and tell you where your money is leaking.",
    },
    {
      step: "02",
      title: "FREE PROTOTYPE",
      description: "You see a functional mockup of your system before signing.",
    },
    {
      step: "03",
      title: "DEVELOPMENT IN WEEKS",
      description: "Visible weekly progress in a test environment. You give feedback while it is built.",
    },
    {
      step: "04",
      title: "LAUNCH & SUPPORT",
      description:
        "We ship to production with documentation. Then, monthly maintenance with development hours for changes.",
    },
  ],
};

// EN /about: written guarantees (§6).
const enGuarantees: ProcessContent = {
  eyebrow: "// GUARANTEES",
  title: "WHAT WE GUARANTEE, IN WRITING",
  intro: "Every point ends up in the contract.",
  steps: [
    {
      step: "01",
      title: "DELIVERY DATE IN THE CONTRACT",
      description: "We never miss a deadline. Every week you see real progress.",
    },
    {
      step: "02",
      title: "FREE PROTOTYPE BEFORE SIGNING",
      description: "You see it working with your data. If it doesn't convince you, you don't pay.",
    },
    {
      step: "03",
      title: "CLOSED PRICE",
      description: "An advance payment at kickoff and the balance against a validated production delivery.",
    },
    {
      step: "04",
      title: "BUGS FIXED FOR FREE",
      description: "If you find a bug after launch, we fix it at no charge.",
    },
    {
      step: "05",
      title: "100% YOUR CODE",
      description: "We maintain it or train your team.",
    },
  ],
};

const enTeam: TeamMember[] = [
  {
    name: "AGUSTÍN ANGELINI",
    role: "FULL-STACK DEVELOPER",
    bio: "Frontend and AI integrations focus. I like software that is fast, simple, and easy to use.",
    tags: ["ASTRO", "TYPESCRIPT", "REACT", "TAILWIND", "DISTRIBUTED SYSTEMS"],
    github: "https://github.com/angelini-agus",
    linkedin: "https://www.linkedin.com/in/agustin-angelini/",
  },
  {
    name: "FRANCO CUSCIANNA",
    role: "FULL-STACK DEVELOPER",
    bio: "Backend and systems architecture focus. I like software that is solid, secure, and scalable.",
    tags: ["BACKEND", "SYSTEMS ARCHITECTURE", "SECURITY", "SCALABILITY"],
    github: "https://github.com/francocus",
    linkedin: "https://www.linkedin.com/in/francocus/",
  },
];

const enFaqList: FaqItem[] = [
  {
    question: "How much does it cost?",
    answer:
      "A landing page, from USD 200. A custom CRM or ERP, between USD 1,000 and 2,000 depending on scope. After the diagnosis you receive a closed quote.",
  },
  {
    question: "Is the diagnosis really free? What's the catch?",
    answer:
      "There is no catch. We would rather earn your trust before you spend a peso. You see what we find and what fits, and you decide. The report is yours even if you choose someone else.",
  },
  {
    // EN mirror of the AI objection FAQ.
    question: "Why hire you when AI tools can build apps fast today?",
    answer:
      "We use AI every day to speed up development ourselves. The difference is that AI alone generates fragile code: without architecture, permission control and security, it crashes, duplicates data or exposes sensitive client and billing information within months. With us you get the speed of AI with the guarantee of two engineers who sign off on the result.",
  },
  {
    question: "How long does it take?",
    answer:
      "Landing pages in 1 to 2 weeks. Custom systems in 3 to 6 weeks, with visible progress from the first days.",
  },
  {
    question: "How do I know you'll meet the deadline if you're a new company?",
    answer:
      "You don't depend on our word: the launch date and the weekly deliveries are in the contract before we start. To date we have never missed a deadline.",
  },
  {
    question: "What if the system doesn't fit how I work?",
    answer:
      "That's why we build the prototype first: you test it before signing. After launch, monthly maintenance includes development hours for changes.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay available. If we find a bug, we tell you before you notice it. If you find it, you write to us and we fix it at no charge.",
  },
  {
    question: "Does the website include SEO?",
    answer:
      "Every landing ships with technical SEO: social tags, structured data, sitemap and mobile load in under 2 seconds. If you want to keep ranking and add Meta Ads, there's a monthly plan.",
  },
  {
    question: "Is the code mine?",
    answer:
      "Yes, 100%. You can contract maintenance with us or we train your team to be self-sufficient.",
  },
  {
    question: "How does payment work?",
    answer:
      "Closed quote. An advance payment at kickoff and the balance against a validated production delivery.",
  },
];

// Same real quote for both locales (see note above).
const enClientQuote = {
  eyebrow: "TESTIMONIAL",
  text: "Antes perdíamos horas llenando planillas a mano para saber quién había trabajado qué día en cada edificio, y encima las quejas por inasistencias eran un dolor de cabeza semana a semana. Con deftcode ahora todo se carga solo, y una tarea que antes le consumía gran parte de su jornada a un empleado, hoy se resuelve de forma automática. Para mí fue de las mejores decisiones que tomé en la empresa, ya que dejé de lidiar con problemas cotidianos y puse mi foco en hacer crecer el negocio.",
  author: "PAOLA ZORILA",
  source: "AZ SERVICIOS DE LIMPIEZA, ROSARIO",
  highlight: "se resuelve de forma automática",
};

const enCtaContent: CtaContent = {
  kicker: "// START TODAY",
  heading: "FIND OUT WHAT YOUR SPREADSHEETS COST YOU TODAY.",
  // EN mirror, widest line calibrated in global.css (7.034em).
  headingLines: ["SEE IT FIRST.", "SIGN AFTER."],
  subheading: "1-hour interview, report in 48 h and a free prototype. No commitment.",
  buttonLabel: "GET MY FREE DIAGNOSIS",
  buttonHref: "/en/contact/",
  emailLabel: "contacto@deftcode.dev",
};

const enForWho = {
  eyebrow: "// IS IT FOR YOU?",
  title: "WE DON'T WORK WITH JUST ANYONE.",
  yesLabel: "IT'S FOR YOU IF",
  yesItems: [
    "Your processes are clear and today they live in spreadsheets.",
    "You want a custom system or a landing that converts, not a generic template.",
    "You want to see your system before signing, with a closed price and the date in the contract.",
  ],
  noLabel: "IT'S NOT FOR YOU IF",
  noItems: [
    "You are hunting for the lowest price regardless of the outcome.",
    "You want something just pretty, with no metrics or business goals.",
    "You would rather hand it off and disappear: without your input, no system reflects how you really work.",
  ],
  closingText: "If you saw yourself in the second card, book your free diagnosis.",
  ctaLabel: "Get my free diagnosis",
  ctaHref: "/en/contact/",
};

// ==========================================
// HOME PROBLEM SEGMENTATION (§3.4)
// ==========================================

const enProblems: ProblemsContent = {
  eyebrow: "// DOES ANY OF THIS SOUND LIKE YOU?",
  title: "DOES ANY OF THIS SOUND LIKE YOU?",
  intro: "If you check one, the diagnosis is for you.",
  cards: [
    {
      key: "planillas",
      title: "EXCEL IS NOT ENOUGH ANYMORE",
      description:
        "Spreadsheets only one person understands, duplicated data and mistakes that cost money. We unify it all in one custom-built system.",
      buttonLabel: "Get out of the spreadsheets",
      buttonHref: "/en/contact/?problema=planillas",
    },
    {
      key: "consultas",
      title: "YOU LOSE INQUIRIES BETWEEN WHATSAPP, INSTAGRAM AND EMAIL",
      description:
        "We gather them in a CRM with per-rep assignment. At one dealership we centralized 4 channels and not a single lead was forgotten.",
      buttonLabel: "Sort out my inquiries",
      buttonHref: "/en/contact/?problema=consultas",
    },
    {
      key: "sistemas",
      title: "ONE SYSTEM FOR ONE THING, AN EXCEL FOR ANOTHER AND WHATSAPP FOR THE THIRD",
      description: "We replace that puzzle with one custom-built system.",
      buttonLabel: "I want one system",
      buttonHref: "/en/contact/?problema=sistemas",
    },
    {
      key: "web",
      title: "YOUR WEBSITE DOESN'T BRING YOU CLIENTS",
      description: "Landing page with SEO and Meta ads, with a monthly report.",
      buttonLabel: "I want more inquiries",
      buttonHref: "/en/contact/?problema=web",
    },
  ],
  closingText: "Every problem has a solution and they all start the same way: with a free diagnosis.",
  counterLabel: "{n}/4 CHECKED",
  ctaLabel: "Get my free diagnosis",
  ctaHref: "/en/contact/",
};

// ==========================================
// FEATURED CASE & MORE SOFTWARE (§3.3 / §3.7)
// ==========================================

const enFeaturedCase: FeaturedCaseContent = {
  eyebrow: "// SOCIAL PROOF",
  title: "A CLEANING COMPANY IN ROSARIO DROPPED ITS SPREADSHEETS AND NOW SAVES $2.8M ARS PER MONTH.",
  description:
    "They asked for attendance control. We ended up unifying attendance, payroll, taxes and stock for 30+ buildings in one system. Zero absence complaints.",
  stats: [
    "-$2.8M ARS/MO IN PAYROLL",
    "0 ABSENCE COMPLAINTS",
    "30+ BUILDINGS LIVE",
    "100% TRACEABLE",
  ],
  calcCtaLabel: "Calculate what your company would save",
  // TODO: lead magnet calculator pending (ESTRATEGIA-COPY.md §8). Keep the placeholder href.
  calcCtaHref: "#",
  caseCtaLabel: "Explore the full case",
};

const enMoreSoftware: MoreSoftwareContent = {
  eyebrow: "// MORE SOFTWARE RUNNING",
  title: "MORE SYSTEMS RUNNING TODAY",
  intro: "Different industries, the same method: diagnosis, prototype and delivery with the date in the contract.",
  viewCaseLabel: "View the case",
  bandLabel: "See all 6 cases",
  bandHref: "/en/projects/",
};

// ==========================================
// HOME SERVICES LADDER (§3.5)
// ==========================================

const enServicesHome: ServicesHomeContent = {
  eyebrow: "// WHAT WE DO",
  title: "WHAT WE DO",
  intro: "Everything starts with the diagnosis. What comes next is decided by what we find.",
  items: [
    {
      index: "00",
      title: "START HERE: DEFT DIAGNOSIS",
      line: "A 1-hour interview about your business, a 48 h report on what costs you money, and a free prototype. Free.",
      buttonLabel: "Book the interview",
      buttonHref: "/en/contact/",
    },
    {
      index: "01",
      title: "MANAGEMENT SYSTEMS (ERP)",
      line: "Attendance, payroll, stock, invoicing and delivery notes in one place. Between USD 1,000 and 2,000 depending on scope. Ready in 3 to 6 weeks.",
      buttonLabel: "See an ERP working",
      buttonHref: "/en/projects/empresa-limpieza-rosario/",
      slug: "erp-systems",
    },
    {
      index: "02",
      title: "CRM & SALES",
      line: "So no inquiry and no appointment gets lost. Between USD 1,000 and 2,000 depending on scope.",
      buttonLabel: "See a CRM working",
      buttonHref: "/en/projects/crm-concesionaria-rosario/",
      slug: "sales-management-systems",
    },
    {
      index: "03",
      title: "LANDING + SEO + META ADS",
      line: "Your website and clients every month. Landing from USD 200, ready in 1 to 2 weeks; SEO and ads on a monthly plan.",
      buttonLabel: "Bring me more inquiries",
      buttonHref: "/en/contact/?problema=web",
      slug: "landing-pages",
    },
    {
      index: "04",
      title: "AI AUTOMATION",
      line: "So your team stops repeating tasks: WhatsApp, AFIP/ARCA, integrations. Quoted during the diagnosis.",
      buttonLabel: "See what can be automated",
      buttonHref: "/en/projects/gestion-legal-estudio/",
      slug: "ai-automation",
    },
  ],
};

// ==========================================
// PRICING REFERENCE (§3.11)
// ==========================================

const enPricing: PricingContent = {
  eyebrow: "// REFERENCE PRICING",
  title: "HOW MUCH IT COSTS, NO RUNAROUND.",
  intro: "These are the ranges. The closed price is set after the diagnosis.",
  whatHeading: "WHAT",
  priceHeading: "FROM",
  timeframeHeading: "TIMELINE",
  rows: [
    { what: "Landing page", price: "USD 200", timeframe: "1 to 2 weeks" },
    { what: "Custom CRM or ERP", price: "USD 1,000 to 2,000", timeframe: "3 to 6 weeks" },
    { what: "E-commerce", price: "USD 1,500 to 3,000", timeframe: "[COMPLETAR: semanas]" },
    { what: "SEO + Meta Ads (monthly plan)", price: "USD [COMPLETAR] per month", timeframe: "From the first month" },
  ],
  footnote: "An advance payment at kickoff and the balance against a validated production delivery.",
};

// ==========================================
// GLOBAL CHROME (§2)
// ==========================================

const enNavCta: NavCtaContent = {
  label: "Get my free diagnosis",
  href: "/en/contact/",
};

const enFooterContent: FooterContent = {
  offerLine: "Free diagnosis. Free prototype. Closed price.",
  locationLine: "ROSARIO, ARGENTINA // WE WORK WITH SMBS ACROSS THE COUNTRY",
};

// ==========================================
// 4-FIELD DIAGNOSTIC FORM (§7)
// ==========================================

// EN contact form mirror of the ES promise.
const enContactForm: ContactFormContent = {
  nameLabel: "NAME",
  namePlaceholder: "Your name",
  companyLabel: "COMPANY",
  companyPlaceholder: "Your company name",
  emailLabel: "EMAIL",
  emailPlaceholder: "you@company.com",
  phoneLabel: "WHATSAPP",
  phonePlaceholder: "+54 9 341 ...",
  problemSelectedPrefix: "You checked:",
  submitLabel: "Get my diagnosis and free prototype",
  microcopy:
    "We answer today • No commitment • We only use your data to contact you.",
  successTitlePrefix: "Done,",
  successBody:
    "Got it. We message you today on WhatsApp to schedule your 1-hour interview. Meanwhile:",
  successCalcLabel: "Calculate what your spreadsheets cost you today.",
  // TODO: lead magnet calculator pending (ESTRATEGIA-COPY.md §8).
  successCalcHref: "#",
};

// ==========================================
// AD LANDING /diagnostico (§7)
// ==========================================

const enDiagnosticoLanding: DiagnosticoLandingContent = {
  eyebrow: "// DEFT DIAGNOSIS",
  h1: "FIND OUT WHAT YOUR SPREADSHEETS COST YOU TODAY. FREE DIAGNOSIS IN 48 HOURS.",
  subtitle:
    "A 1-hour interview about your business and a report on which processes lose you money and how much you would save. The report is yours even if we never work together.",
  ctaLabel: "Get my free diagnosis",
  proofLine: "A cleaning company in Rosario saves $2.8M ARS per month since it dropped its spreadsheets.",
  receiveEyebrow: "// WHAT YOU GET",
  receiveTitle: "WHAT YOU GET",
  receiveItems: [
    "A one-page report with the 3 processes that cost you the most, in pesos per month.",
    "What to automate first and which system fits (CRM, ERP, landing or AI).",
    "A real price and timeline range for each option.",
    "A free prototype of the most important part, so you see it before signing.",
    "A short video with the findings, to share with your team or partner.",
  ],
  notEyebrow: "// WHAT IT'S NOT",
  notTitle: "WHAT IT'S NOT",
  notItems: [
    "It's not a sales call.",
    "It has no cost and we don't ask for a card.",
    "It doesn't oblige you to hire us.",
  ],
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
    servicesHome: isEn ? enServicesHome : esServicesHome,
    projects: isEn ? enProjects : esProjects,
    manifesto: isEn ? enManifesto : esManifesto,
    comparison: isEn ? enComparison : esComparison,
    howWeWork: isEn ? enHowWeWork : esHowWeWork,
    howWeWorkNosotros: isEn ? enHowWeWorkNosotros : esHowWeWorkNosotros,
    guarantees: isEn ? enGuarantees : esGuarantees,
    team: isEn ? enTeam : esTeam,
    faqList: isEn ? enFaqList : esFaqList,
    forWho: isEn ? enForWho : esForWho,
    problems: isEn ? enProblems : esProblems,
    featuredCase: isEn ? enFeaturedCase : esFeaturedCase,
    moreSoftware: isEn ? enMoreSoftware : esMoreSoftware,
    pricing: isEn ? enPricing : esPricing,
    navCta: isEn ? enNavCta : esNavCta,
    footerContent: isEn ? enFooterContent : esFooterContent,
    contactForm: isEn ? enContactForm : esContactForm,
    diagnosticoLanding: isEn ? enDiagnosticoLanding : esDiagnosticoLanding,
    socialLinks: esSocialLinks,
    clientQuote: isEn ? enClientQuote : esClientQuote,
    ctaContent: isEn ? enCtaContent : esCtaContent,
  };
};

// Footer socials: only the two live profiles. GITHUB moves to the team
// section (nosotros) once per-member URLs exist; X was retired.
const esSocialLinks: SocialLink[] = [
  { platform: "linkedin", label: "LINKEDIN", href: "https://www.linkedin.com/company/deftcode-ar/" },
  { platform: "instagram", label: "INSTAGRAM", href: "https://www.instagram.com/deftcode.ar/" },
];

// Backwards-compatible default exports (Spanish default)
export const siteMeta = esSiteMeta;
export const navLinks = esNavLinks;
export const pages = esPages;
export const heroContent = esHeroContent;
export const marqueeItems = esMarqueeItems;
export const services = esServices;
export const servicesHome = esServicesHome;
export const projects = esProjects;
export const manifesto = esManifesto;
export const comparison = esComparison;
export const howWeWork = esHowWeWork;
export const howWeWorkNosotros = esHowWeWorkNosotros;
export const guarantees = esGuarantees;
export const team = esTeam;
export const faqList = esFaqList;
export const forWho = esForWho;
export const problems = esProblems;
export const featuredCase = esFeaturedCase;
export const moreSoftware = esMoreSoftware;
export const pricing = esPricing;
export const navCta = esNavCta;
export const footerContent = esFooterContent;
export const contactForm = esContactForm;
export const diagnosticoLanding = esDiagnosticoLanding;
export const socialLinks = esSocialLinks;
export const ctaContent = esCtaContent;
export const clientQuote = esClientQuote;
