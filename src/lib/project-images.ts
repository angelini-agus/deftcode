import type { ImageMetadata } from "astro";

// Limpieza
import limpiezaAdmin1 from "../assets/proyectos/limpieza/admin1.png";
import limpiezaAdmin2 from "../assets/proyectos/limpieza/admin2.png";
import limpiezaAdmin3 from "../assets/proyectos/limpieza/admin3.png";
import limpiezaLogin from "../assets/proyectos/limpieza/login.png";

// Legal
import legalDashboard from "../assets/proyectos/legal/dashboard.png";
import legalClientes from "../assets/proyectos/legal/clientes.png";
import legalExpediente from "../assets/proyectos/legal/expediente.png";
import legalAgenda from "../assets/proyectos/legal/agenda.png";
import legalBibliotecaIa from "../assets/proyectos/legal/biblioteca-ia.png";
import legalContabilidad from "../assets/proyectos/legal/contabilidad.png";

// Pediatric ERP & Landing
import pediatricErpDashboard from "../assets/proyectos/pediatric/erp-dashboard.png";
import pediatricErpPortalRequests from "../assets/proyectos/pediatric/erp-portal-requests.png";
import pediatricErpAppointments from "../assets/proyectos/pediatric/erp-appointments.png";
import pediatricErpAppointmentDialog from "../assets/proyectos/pediatric/erp-appointment-dialog.png";
import pediatricErpConsultations from "../assets/proyectos/pediatric/erp-consultations.png";
import pediatricErpPatientRecord from "../assets/proyectos/pediatric/erp-patient-record.png";
import pediatricLandingHero from "../assets/proyectos/pediatric/landing-hero.png";
import pediatricLandingJourney from "../assets/proyectos/pediatric/landing-journey.png";
import pediatricLandingContacto from "../assets/proyectos/pediatric/landing-contacto.png";
import pediatricLandingTestimonials from "../assets/proyectos/pediatric/landing-testimonials.png";

// Leads CRM
import leadsBaseDeDatos from "../assets/proyectos/leadscrm/02-base-de-datos.png";
import leadsNuevaConsulta from "../assets/proyectos/leadscrm/01-nueva-consulta.png";
import leadsConfiguracion from "../assets/proyectos/leadscrm/03-configuracion.png";
import leadsMetricas from "../assets/proyectos/leadscrm/05-metricas.png";
import leadsLogin from "../assets/proyectos/leadscrm/04-login.png";

// AZ Landing
import azLandingHero from "../assets/proyectos/az-landing/az-hero.png";
import azLandingServicios from "../assets/proyectos/az-landing/az-servicios.png";
import azLandingComoTrabajamos from "../assets/proyectos/az-landing/az-como-trabajamos.png";
import azLandingContacto from "../assets/proyectos/az-landing/az-contacto.png";

export interface GalleryItem {
  src: ImageMetadata;
  altEs: string;
  altEn: string;
  captionEs?: string;
  captionEn?: string;
}

export interface ProjectAsset {
  main: ImageMetadata;
  altEs: string;
  altEn: string;
  gallery: GalleryItem[];
}

export const projectAssets: Record<string, ProjectAsset> = {
  "empresa-limpieza": {
    main: limpiezaAdmin1,
    altEs: "ServiceTrack - Panel de administración con grilla de turnos y mapa GPS",
    altEn: "ServiceTrack - Admin control panel with weekly shift grid and GPS tracking",
    gallery: [
      {
        src: limpiezaAdmin1,
        altEs: "Panel de administración con grilla de turnos y mapa en tiempo real",
        altEn: "Admin dashboard with shift grid and real-time live map",
        captionEs: "Grilla operativa y supervisión satelital por edificio",
        captionEn: "Operational shift grid and building satellite supervision",
      },
      {
        src: limpiezaAdmin2,
        altEs: "Liquidación automática de sueldos según horas validadas",
        altEn: "Automatic payroll calculation based on validated hours",
        captionEs: "Liquidación automática de sueldos según CCT",
        captionEn: "Automated payroll calculation complying with labor agreements",
      },
      {
        src: limpiezaAdmin3,
        altEs: "Gestión de stock de insumos por edificio",
        altEn: "Inventory and cleaning supplies management by building",
        captionEs: "Control de insumos y consumos con alerta de reposición",
        captionEn: "Supplies consumption tracking with restock alerts",
      },
      {
        src: limpiezaLogin,
        altEs: "Pantalla de inicio de sesión de ServiceTrack",
        altEn: "ServiceTrack secure authentication screen",
        captionEs: "Autenticación segura y control de roles",
        captionEn: "Secure authentication and role-based access",
      },
    ],
  },
  "gestion-legal": {
    main: legalDashboard,
    altEs: "LegalDesk - Panel de control de expedientes y agenda jurídica",
    altEn: "LegalDesk - Legal matters management dashboard and judicial calendar",
    gallery: [
      {
        src: legalDashboard,
        altEs: "Panel de control con agenda, vencimientos y resumen contable",
        altEn: "Management dashboard with deadlines, calendar, and accounting summary",
        captionEs: "Tablero principal con agenda de vencimientos y finanzas",
        captionEn: "Main board with court deadlines and financial overview",
      },
      {
        src: legalClientes,
        altEs: "Gestión de clientes y causas activas",
        altEn: "Client relationship management and active matters",
        captionEs: "Ficha integral por cliente y causas asociadas",
        captionEn: "Consolidated client profile and linked legal proceedings",
      },
      {
        src: legalExpediente,
        altEs: "Detalle y seguimiento integral de expediente judicial",
        altEn: "Detailed judicial matter tracking and case notes",
        captionEs: "Seguimiento procesal con escritos y movimientos",
        captionEn: "Procedural tracking with attached writs and filings",
      },
      {
        src: legalAgenda,
        altEs: "Agenda jurídica con audiencias y plazos perentorios",
        altEn: "Court calendar with hearing dates and statutory deadlines",
        captionEs: "Agenda sincronizada con alertas de caducidad",
        captionEn: "Synchronized calendar with procedural expiration alerts",
      },
      {
        src: legalBibliotecaIa,
        altEs: "Biblioteca jurídica con comparación de normas asistida por IA",
        altEn: "Legal library with AI-assisted statute comparison",
        captionEs: "Auditoría en tiempo real conectada a Infoleg y CSJ-IIJ",
        captionEn: "Real-time compliance engine hooked into official gazettes",
      },
      {
        src: legalContabilidad,
        altEs: "Resumen contable y seguimiento de honorarios multimoneda",
        altEn: "Accounting balance and multicurrency legal fees tracker",
        captionEs: "Control contable de honorarios, señas y cobros",
        captionEn: "Accounting control of retainers, fees, and collections",
      },
    ],
  },
  "sistema-pediatrico": {
    main: pediatricErpDashboard,
    altEs: "PediatricCare - Dashboard de turnos e historia clínica digital",
    altEn: "PediatricCare - Clinical dashboard with smart scheduling and EHR",
    gallery: [
      {
        src: pediatricErpDashboard,
        altEs: "Panel diario con embudo de turnos y evoluciones pendientes",
        altEn: "Daily clinical board with appointment funnel and pending charts",
        captionEs: "Panel clínico diario y control de sala de espera",
        captionEn: "Daily clinical workflow and waiting room control",
      },
      {
        src: pediatricErpPatientRecord,
        altEs: "Historia clínica digital conforme a la Ley 26.529",
        altEn: "Electronic Health Record complying with medical records legislation",
        captionEs: "Historia clínica digital con auditoría inmutable",
        captionEn: "Electronic health record with immutable audit logging",
      },
      {
        src: pediatricErpPortalRequests,
        altEs: "Solicitudes de turno hechas desde el portal de familias",
        altEn: "Appointment requests submitted from the family portal",
        captionEs: "Cola de solicitudes recibidas desde el portal web",
        captionEn: "Inbound request queue incoming from the web portal",
      },
      {
        src: pediatricErpAppointments,
        altEs: "Agenda clínica con paciente, tutor y estado de consulta",
        altEn: "Clinical calendar with patient, guardian, and visit status",
        captionEs: "Agenda médica con filtro por especialista y consultorio",
        captionEn: "Medical calendar filtered by physician and exam room",
      },
      {
        src: pediatricErpAppointmentDialog,
        altEs: "Selector inteligente de horarios con disponibilidad en tiempo real",
        altEn: "Smart schedule picker with real-time slot availability",
        captionEs: "Asignación de turnos sin solapamientos",
        captionEn: "Conflict-free appointment slot booking",
      },
      {
        src: pediatricErpConsultations,
        altEs: "Consultas del día con contexto clínico y receta médica",
        altEn: "Daily consultations with clinical history and medical prescription",
        captionEs: "Evolución médica con emisión digital de recetas en PDF",
        captionEn: "Clinical consultation notes and PDF prescription generation",
      },
    ],
  },
  "crm-concesionaria": {
    main: leadsBaseDeDatos,
    altEs: "AutoLeads CRM - Base de datos centralizada de leads multicanal",
    altEn: "AutoLeads CRM - Centralized multichannel leads database and analytics",
    gallery: [
      {
        src: leadsBaseDeDatos,
        altEs: "Base de datos de leads con filtros por canal y exportación",
        altEn: "Lead database with channel filters and Excel export",
        captionEs: "Base unificada con filtros por canal, asesor y modelo",
        captionEn: "Unified database filtered by channel, rep, and model",
      },
      {
        src: leadsNuevaConsulta,
        altEs: "Formulario para ingresar consulta con canal, modelo y asesor",
        altEn: "Lead intake form with acquisition channel, model, and rep",
        captionEs: "Captura inmediata con datos de permuta y financiación",
        captionEn: "Instant intake with trade-in appraisal and financing terms",
      },
      {
        src: leadsMetricas,
        altEs: "Métricas de consultas por canal, tendencia y modelos más pedidos",
        altEn: "Inquiry metrics by channel, daily trends, and top vehicle models",
        captionEs: "Métricas comerciales y tendencia diaria de captación",
        captionEn: "Commercial analytics and daily lead acquisition trends",
      },
      {
        src: leadsConfiguracion,
        altEs: "Administración de datos maestros: vendedores y vehículos",
        altEn: "Master data management: sales reps, brands, and vehicle catalog",
        captionEs: "Gestión de asesores comerciales y catálogo de unidades",
        captionEn: "Sales team management and vehicle inventory catalog",
      },
      {
        src: leadsLogin,
        altEs: "Pantalla de inicio de sesión de AutoLeads CRM",
        altEn: "AutoLeads CRM secure authentication screen",
        captionEs: "Acceso seguro para asesores y gerencia comercial",
        captionEn: "Secure access for sales reps and dealership managers",
      },
    ],
  },
  "landing-limpieza": {
    main: azLandingHero,
    altEs: "AZ Servicios - Landing page de alta conversión y propuesta de valor",
    altEn: "AZ Services - High-converting corporate landing page and quoting workflow",
    gallery: [
      {
        src: azLandingHero,
        altEs: "Portada del sitio con propuesta de valor y cotizador corporativo",
        altEn: "Website hero with value proposition and corporate quote builder",
        captionEs: "Portada institucional orientada a conversión de empresas",
        captionEn: "B2B institutional hero engineered for corporate conversions",
      },
      {
        src: azLandingServicios,
        altEs: "Verticales de servicio organizadas por tipo de espacio",
        altEn: "Service lines organized by facility and corporate space type",
        captionEs: "Desglose de verticales: oficinas, edificios y clínicas",
        captionEn: "Breakdown of verticals: commercial offices, buildings, clinics",
      },
      {
        src: azLandingComoTrabajamos,
        altEs: "Proceso de contratación y supervisión paso a paso",
        altEn: "Step-by-step onboarding, delivery, and satellite supervision",
        captionEs: "Metodología operativa y control de calidad",
        captionEn: "Operating methodology and strict quality verification",
      },
      {
        src: azLandingContacto,
        altEs: "Formulario de contacto calificado de 4 pasos",
        altEn: "4-step qualified B2B contact and budgeting form",
        captionEs: "Cotizador interactivo que filtra prospectos calificados",
        captionEn: "Interactive estimator filtering qualified corporate leads",
      },
    ],
  },
  "landing-pediatrica": {
    main: pediatricLandingHero,
    altEs: "Clínica Pediátrica - Sitio web familiar con reserva de turnos online",
    altEn: "Pediatrics Clinic - Family-friendly medical portal with online appointment booking",
    gallery: [
      {
        src: pediatricLandingHero,
        altEs: "Portada del sitio con propuesta de la profesional y acceso a turnos",
        altEn: "Landing hero with pediatrician philosophy and direct booking CTA",
        captionEs: "Presentación de la especialista y reserva directa",
        captionEn: "Pediatrician credentials and direct online booking",
      },
      {
        src: pediatricLandingJourney,
        altEs: "Las cinco etapas del cuidado pediátrico",
        altEn: "The five milestones of pediatric healthcare",
        captionEs: "Recorrido interactivo por las etapas del crecimiento infantil",
        captionEn: "Interactive journey across childhood developmental stages",
      },
      {
        src: pediatricLandingContacto,
        altEs: "Ubicación del consultorio y vías de contacto directo",
        altEn: "Clinic location map and direct communication channels",
        captionEs: "Canal de contacto y resguardo de ubicación exacta",
        captionEn: "Direct contact channel with protected clinic address",
      },
      {
        src: pediatricLandingTestimonials,
        altEs: "Testimonios de familias y trayectoria médica",
        altEn: "Verified patient testimonials and clinical career highlights",
        captionEs: "Validación social y trayectoria profesional de la médica",
        captionEn: "Social proof and medical background credentials",
      },
    ],
  },
};
