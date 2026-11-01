import type { ImageMetadata } from "astro";

import limpiezaAdmin1 from "../assets/proyectos/limpieza/admin1.png";
import legalDashboard from "../assets/proyectos/legal/dashboard.png";
import pediatricErpDashboard from "../assets/proyectos/pediatric/erp-dashboard.png";
import leadsBaseDeDatos from "../assets/proyectos/leadscrm/02-base-de-datos.png";
import azLandingHero from "../assets/proyectos/az-landing/az-hero.png";
import pediatricLandingHero from "../assets/proyectos/pediatric/landing-hero.png";

export interface ProjectAsset {
  main: ImageMetadata;
  altEs: string;
  altEn: string;
}

export const projectAssets: Record<string, ProjectAsset> = {
  "empresa-limpieza": {
    main: limpiezaAdmin1,
    altEs: "ServiceTrack - Panel de administración con grilla de turnos y mapa GPS",
    altEn: "ServiceTrack - Admin control panel with weekly shift grid and GPS tracking",
  },
  "gestion-legal": {
    main: legalDashboard,
    altEs: "LegalDesk - Panel de control de expedientes y agenda jurídica",
    altEn: "LegalDesk - Legal matters management dashboard and judicial calendar",
  },
  "sistema-pediatrico": {
    main: pediatricErpDashboard,
    altEs: "PediatricCare - Dashboard de turnos e historia clínica digital",
    altEn: "PediatricCare - Clinical dashboard with smart scheduling and EHR",
  },
  "crm-concesionaria": {
    main: leadsBaseDeDatos,
    altEs: "AutoLeads CRM - Base de datos centralizada de leads multicanal",
    altEn: "AutoLeads CRM - Centralized multichannel leads database and analytics",
  },
  "landing-limpieza": {
    main: azLandingHero,
    altEs: "AZ Servicios - Landing page de alta conversión y propuesta de valor",
    altEn: "AZ Services - High-converting corporate landing page and quoting workflow",
  },
  "landing-pediatrica": {
    main: pediatricLandingHero,
    altEs: "Clínica Pediátrica - Sitio web familiar con reserva de turnos online",
    altEn: "Pediatrics Clinic - Family-friendly medical portal with online appointment booking",
  },
};
