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
  title: "DEFTCODE // SOFTWARE DE ALTA VELOCIDAD & INGENIERÍA DIGITAL",
  description:
    "Desarrollo de software ágil, moderno y de alto rendimiento. Creamos plataformas web, sistemas a medida y experiencias digitales con velocidad implacable y máxima precisión técnica.",
  siteUrl: "https://deftcode.dev",
  ogImage: "/og-deftcode.png",
  author: "Deftcode Studio",
  location: "ROSARIO, ARGENTINA // REMOTO GLOBAL",
  tagline: "SOFTWARE A GRAN VELOCIDAD",
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
  headlineSub: "SOFTWARE A GRAN VELOCIDAD",
  badge: "SISTEMAS // WEB // SAAS",
  locationText: "DESDE ROSARIO, ARGENTINA // REMOTO GLOBAL",
  roleText: "INGENIERÍA DIGITAL ÁGIL // ARQUITECTURAS MODERNAS // WEB DE ALTO RENDIMIENTO",
  ctaLabel: "INICIAR PROYECTO",
  ctaHref: "/contacto/",
  scrollText: "DESLIZAR HACIA ABAJO • EXPLORAR DEFTCODE • ",
};

const esMarqueeItems = {
  row1: [
    "DESARROLLO DE ALTA VELOCIDAD",
    "ARQUITECTURAS MODERNAS",
    "ANIMACIONES FLUIDAS SIN BLOQUEOS",
    "ÁGIL Y PRECISO",
    "DISEÑADO PARA ESCALAR",
    "INGENIERÍA WEB MODERNA",
  ],
  row2: [
    "ASTRO SSG",
    "TYPESCRIPT",
    "TAILWIND CSS V4",
    "EDGE COMPUTING",
    "100/100 CORE WEB VITALS",
    "SISTEMAS & SAAS A MEDIDA",
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
      "Landing pages de alta velocidad en HTML y CSS estático: cero tiempo de bloqueo, Lighthouse en verde y SEO técnico de serie.",
    kicker: "TU PRIMER PUNTO DE VENTA DIGITAL",
    intro:
      "Tu primer punto de venta digital: una página que carga al instante, se posiciona orgánicamente y convierte la visita.",
    modules: [
      {
        heading: "VELOCIDAD",
        items: [
          "HTML y CSS estático: carga instantánea, cero tiempo de bloqueo.",
          "Lighthouse en verde, que además suma para el ranking SEO.",
          "Diseño a medida editorial-brutalista.",
        ],
      },
      {
        heading: "SEO TÉCNICO",
        items: [
          "Schema.org JSON-LD completo, sitemap dinámico y Open Graph.",
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
      "Código propio en tu GitHub, sin WordPress detrás.",
    ],
    tags: ["ASTRO SSG", "SEO TÉCNICO", "100 LIGHTHOUSE", "CONVERSIÓN"],
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
          "Facturación electrónica vía web services de AFIP/ARCA.",
          "WhatsApp Business API para estados de pedidos y cobranzas.",
        ],
      },
      {
        heading: "IA APLICADA",
        items: [
          "Clasificación y respuestas automáticas con IA.",
          "Flujos sin pasos manuales entre sistemas.",
          "Alertas y resúmenes diarios generados por tu proceso.",
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
    title: "SERVICETRACK — GESTIÓN EMPRESA DE LIMPIEZA",
    client: "AZ Servicios de Limpieza",
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
    title: "LEGALDESK — GESTIÓN JURÍDICA INTEGRAL",
    client: "Estudio jurídico internacional",
    location: "Argentina y Paraguay",
    category: "SISTEMA DE GESTIÓN (ERP)",
    year: "2026",
    description:
      "Plataforma para administrar expedientes judiciales y extrajudiciales en dos países, agenda de vencimientos, control financiero y biblioteca jurídica con IA.",
    metrics: ["2 JURISDICCIONES EN VIVO", "100% TRAZABILIDAD", "-60% TIEMPO DE BÚSQUEDA", "CERO PLAZOS VENCIDOS"],
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
    title: "PEDIATRICCARE — GESTIÓN CLÍNICA PEDIÁTRICA",
    client: "Clínica pediátrica ambulatoria",
    location: "Pueblo Esther, Santa Fe",
    category: "SALUD & ERP",
    year: "2025",
    description:
      "Historia clínica electrónica conforme a la Ley 26.529, agenda de turnos inteligente, panel clínico en tiempo real y emisión digital de recetas médicas en PDF.",
    metrics: ["LEY 26.529 CONFORME", "0 EXTRAVÍO DE ANTECEDENTES", "+85% VELOCIDAD DE CONSULTA", "100% DIGITAL"],
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
    title: "AUTOLEADS — CRM DE VENTAS PARA CONCESIONARIA",
    client: "Concesionaria oficial de vehículos",
    location: "Rosario, Santa Fe",
    category: "VENTAS (CRM)",
    year: "2025",
    description:
      "Centralización de leads de WhatsApp, Instagram, Facebook y Mercado Libre en una sola base unificada con asignación por asesor y métricas de conversión.",
    metrics: ["4 CANALES CENTRALIZADOS", "+40% TASA DE CONTACTO", "CERO LEADS OLVIDADOS", "REPORTE EN SEGUNDOS"],
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
    title: "AZ SERVICIOS — SITIO WEB CORPORATIVO",
    client: "AZ Servicios de Limpieza",
    location: "Rosario, Santa Fe",
    liveUrl: {
      href: "https://azserviciosdelimpieza.com",
      label: "azserviciosdelimpieza.com",
    },
    category: "LANDING & WEB",
    year: "2026",
    description:
      "Sitio institucional con propuesta de valor de personal asegurado y supervisión GPS, captación calificada e integración con el ERP interno bajo un mismo dominio.",
    metrics: ["100/100 LIGHTHOUSE", "< 0.6s LCP", "+120% LEADS CALIFICADOS", "DOMINIO UNIFICADO"],
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
    title: "PORTAL PEDIÁTRICO — SITIO PÚBLICO & TURNOS",
    client: "Clínica pediátrica especializada",
    location: "Pueblo Esther, Santa Fe",
    liveUrl: {
      href: "https://dramartinangelio.com",
      label: "dramartinangelio.com",
    },
    category: "WEB & SALUD",
    year: "2025",
    description:
      "Portal público con trayectoria médica, etapas del cuidado pediátrico y un flujo de solicitud de turnos amigable pensado para las familias.",
    metrics: ["0ms TBT", "+150% RESERVAS MÓVILES", "CERO ESPERAS EN LÍNEA", "100% ACCESIBLE"],
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
    role: "FUNDADOR & LÍDER TÉCNICO",
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
    question: "¿Cómo sé que van a cumplir el plazo si son una empresa nueva?",
    answer:
      "No dependés de nuestra palabra: la fecha de lanzamiento y el cronograma de entregas semanales quedan en el contrato antes de arrancar. Cada semana ves el avance real, no un resumen armado para la ocasión.",
  },
  {
    question: "¿El sitio incluye posicionamiento SEO?",
    answer:
      "Absolutamente. Todo proyecto de Deftcode incluye arquitectura técnica SEO de primer nivel: metaetiquetas Open Graph y Twitter Cards completas, esquema semántico Schema.org JSON-LD, sitemap dinámico, precarga de tipografías y Core Web Vitals en rango verde.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Seguimos disponibles para soporte y mejoras. Si encontramos un error, te avisamos antes de que lo notes; si lo encontrás vos, nos escribís y lo resolvemos sin cargo.",
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
  headingLines: ["CONSTRUYAMOS", "ALGO ÁGIL."],
  subheading: "Llevamos tu infraestructura digital a la velocidad que tu empresa necesita.",
  buttonLabel: "AGENDÁ 20 MIN. CON NOSOTROS",
  buttonHref: "https://wa.me/?text=Hola%20Deftcode,%20quiero%20agendar%20una%20reuni%C3%B3n%20de%2020%20minutos",
  emailLabel: "contacto@deftcode.dev",
};

const esProblem = {
  eyebrow: "// EL PROBLEMA",
  title: "TU OPERACIÓN NO ESCALA EN PLANILLAS.",
  intro: "LO QUE HAY DETRÁS DE CADA PROCESO MANUAL.",
  bullets: [
    "Procesos corriendo en planillas de Excel y WhatsApp: datos duplicados, errores a mano y cero trazabilidad.",
    "Tareas administrativas que se comen horas por semana: cierres de mes a mano, reclamos que nadie puede verificar, stock que no cierra.",
    "Decisiones a ciegas: sin datos en vivo nadie sabe qué canal convierte, dónde se pierde el tiempo y cuánto cuesta cada error.",
  ],
  closingLabel: "MIRÁ CÓMO LO RESOLVEMOS",
  closingHref: "/#servicios",
};

const esForWho = {
  eyebrow: "// PARA QUIÉN",
  title: "NO TRABAJAMOS CON CUALQUIERA.",
  yesLabel: "ES PARA VOS SI",
  yesItems: [
    "Tu operación tiene procesos claros que necesitan dejar de vivir en planillas.",
    "Buscás un sistema a medida o una landing que convierta, no una plantilla genérica.",
    "Valorás velocidad: presupuesto cerrado y entrega en semanas, no en trimestres.",
  ],
  noLabel: "NO ES PARA VOS SI",
  noItems: [
    "Estás buscando el precio más bajo sin importar el resultado.",
    "Querés solo algo lindo, sin métricas ni objetivos de negocio.",
    "Preferís entregar el proyecto y olvidarte: sin tu input, ningún sistema refleja el proceso real.",
  ],
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
      "High-velocity landing pages in static HTML and CSS: zero blocking time, Lighthouse in the green and technical SEO as standard.",
    kicker: "YOUR FIRST DIGITAL POINT OF SALE",
    intro:
      "Your first digital point of sale: a page that loads instantly, ranks organically and turns visits into inquiries.",
    modules: [
      {
        heading: "VELOCITY",
        items: [
          "Static HTML and CSS: instant load, zero blocking time.",
          "Lighthouse in the green, which also feeds SEO rankings.",
          "Custom editorial-brutalist design.",
        ],
      },
      {
        heading: "TECHNICAL SEO",
        items: [
          "Complete Schema.org JSON-LD, dynamic sitemap and Open Graph.",
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
      "Your own code on your GitHub, no WordPress behind it.",
    ],
    tags: ["ASTRO SSG", "TECHNICAL SEO", "100 LIGHTHOUSE", "CONVERSION"],
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
          "Electronic invoicing over AFIP/ARCA web services.",
          "WhatsApp Business API for order-status and collections notices.",
        ],
      },
      {
        heading: "APPLIED AI",
        items: [
          "Automatic classification and replies with AI.",
          "Flows with no manual steps between systems.",
          "Alerts and daily digests generated by your process.",
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
    title: "SERVICETRACK — FACILITY OPERATIONS ERP",
    client: "AZ Cleaning & Facility Services",
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
    title: "LEGALDESK — CROSS-BORDER LEGAL MANAGEMENT",
    client: "International Law Firm",
    location: "Argentina & Paraguay",
    category: "LEGAL ERP",
    year: "2026",
    description:
      "Cloud platform to manage judicial and corporate cases across two countries, procedural deadline tracking, multi-currency billing, and AI jurisprudence search.",
    metrics: ["2 ACTIVE JURISDICTIONS", "100% TRACEABILITY", "-60% RESEARCH TIME", "ZERO MISSED DEADLINES"],
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
    title: "PEDIATRICCARE — PEDIATRIC EHR & CLINIC SUITE",
    client: "Outpatient Pediatric Clinic",
    location: "Pueblo Esther, Santa Fe",
    category: "HEALTHCARE & ERP",
    year: "2025",
    description:
      "Compliant Electronic Health Records (EHR), intelligent scheduling agenda, real-time clinical dashboard, and digital PDF prescription generation.",
    metrics: ["LEGAL EHR COMPLIANT", "0 MISPLACED RECORDS", "+85% CONSULTATION SPEED", "100% DIGITAL"],
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
    title: "AUTOLEADS — AUTOMOTIVE SALES CRM",
    client: "Official Automotive Dealership",
    location: "Rosario, Santa Fe",
    category: "SALES CRM",
    year: "2025",
    description:
      "Centralization of inbound leads from WhatsApp, Instagram, Facebook, and Mercado Libre into one unified pipeline with sales rep assignment and conversion metrics.",
    metrics: ["4 CENTRALIZED CHANNELS", "+40% CONTACT RATE", "ZERO FORGOTTEN LEADS", "INSTANT METRICS"],
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
    title: "AZ SERVICIOS — CORPORATE WEB PLATFORM",
    client: "AZ Cleaning & Facility Services",
    location: "Rosario, Santa Fe",
    liveUrl: {
      href: "https://azserviciosdelimpieza.com",
      label: "azserviciosdelimpieza.com",
    },
    category: "CORPORATE LANDING",
    year: "2026",
    description:
      "Corporate web presence highlighting verified insured staff and GPS supervision, qualified lead capture, and seamless integration with the internal ERP under a single domain.",
    metrics: ["100/100 LIGHTHOUSE", "< 0.6s LCP", "+120% QUALIFIED LEADS", "UNIFIED DOMAIN"],
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
    title: "PEDIATRIC PORTAL — PUBLIC SITE & BOOKINGS",
    client: "Specialized Pediatric Clinic",
    location: "Pueblo Esther, Santa Fe",
    liveUrl: {
      href: "https://dramartinangelio.com",
      label: "dramartinangelio.com",
    },
    category: "HEALTHCARE WEB",
    year: "2025",
    description:
      "Public-facing portal showcasing pediatric specialties, medical team credentials, and an intuitive family-friendly booking workflow.",
    metrics: ["0ms TBT", "+150% MOBILE APPOINTMENTS", "ZERO WAIT TIMES", "100% ACCESSIBLE"],
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
    question: "How do I know you'll meet the deadline if you're a new company?",
    answer:
      "You don't depend on our word: the launch date and the weekly delivery schedule are in the contract before we start. Every week you see real progress, not a summary put together for the occasion.",
  },
  {
    question: "Is technical SEO optimization included?",
    answer:
      "Absolutely. Every Deftcode deployment includes enterprise-tier SEO: complete Open Graph and Twitter Card tags, Schema.org JSON-LD semantic data, dynamic XML sitemaps, localized preloads, and verified green Core Web Vitals.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay available for support and improvements. If we find a bug, we tell you before you notice it; if you find it, you write to us and we fix it at no charge.",
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
  headingLines: ["LET'S BUILD", "SOMETHING DEFT."],
  subheading: "We accelerate your digital infrastructure to the velocity your business demands.",
  buttonLabel: "BOOK A 20-MINUTE CALL",
  buttonHref: "https://wa.me/?text=Hi%20Deftcode,%20I'd%20like%20to%20book%20a%2020-minute%20call",
  emailLabel: "contacto@deftcode.dev",
};

const enProblem = {
  eyebrow: "// THE PROBLEM",
  title: "YOUR OPERATION DOESN'T SCALE IN SPREADSHEETS.",
  intro: "WHAT'S BEHIND EVERY MANUAL PROCESS.",
  bullets: [
    "Processes living in Excel sheets and WhatsApp: duplicated data, manual errors and zero traceability.",
    "Admin tasks that eat hours every week: month-end closings by hand, claims nobody can verify, stock that never reconciles.",
    "Decisions made blind: without live data nobody knows which channel converts, where time is lost and what each error costs.",
  ],
  closingLabel: "SEE HOW WE SOLVE IT",
  closingHref: "/en/#services",
};

const enForWho = {
  eyebrow: "// WHO IT'S FOR",
  title: "WE DON'T WORK WITH JUST ANYONE.",
  yesLabel: "IT'S FOR YOU IF",
  yesItems: [
    "Your operation has clear processes that need to stop living in spreadsheets.",
    "You want a custom system or a landing page that converts, not a generic template.",
    "You value speed: closed budget and delivery in weeks, not quarters.",
  ],
  noLabel: "IT'S NOT FOR YOU IF",
  noItems: [
    "You are hunting for the lowest price regardless of the outcome.",
    "You want something just pretty, with no metrics or business goals.",
    "You would rather hand it off and disappear: without your input, no system reflects the real process.",
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
    projects: isEn ? enProjects : esProjects,
    manifesto: isEn ? enManifesto : esManifesto,
    howWeWork: isEn ? enHowWeWork : esHowWeWork,
    team: isEn ? enTeam : esTeam,
    faqList: isEn ? enFaqList : esFaqList,
    problem: isEn ? enProblem : esProblem,
    forWho: isEn ? enForWho : esForWho,
    socialLinks: esSocialLinks,
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
export const projects = esProjects;
export const manifesto = esManifesto;
export const howWeWork = esHowWeWork;
export const team = esTeam;
export const faqList = esFaqList;
export const problem = esProblem;
export const forWho = esForWho;
export const socialLinks = esSocialLinks;
export const ctaContent = esCtaContent;
