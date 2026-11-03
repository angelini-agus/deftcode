export type Lang = "es" | "en";

export interface SiteMeta {
  title: string;
  description: string;
  siteUrl: string;
  ogImage: string;
  author: string;
  location: string;
  tagline: string;
  foundedYear: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceModuleGroup {
  heading: string;
  /** Pre-split heading lines for the fit-to-width CTA heading. */
  headingLines?: [string, string];
  items: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  description: string;
  kicker: string;
  intro: string;
  modules: ServiceModuleGroup[];
  clients: string;
  value: string[];
  tags: string[];
}

export interface CaseStudyContrastRow {
  before: string;
  after: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  value: string;
  unit: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  imageKey: string;
  slug: string;
  title: string;
  client?: string;
  location?: string;
  category: string;
  year: string;
  description: string;
  metrics: string[];
  tags: string[];
  link?: string;
  liveUrl?: {
    href: string;
    label: string;
  };
  fullOverview?: string;
  challengeTitle?: string;
  challenge: string;
  contrastRows?: CaseStudyContrastRow[];
  solutionTitle?: string;
  solution: string;
  solutionFeatures?: CaseStudyFeature[];
  resultsTitle?: string;
  resultsMetrics?: CaseStudyMetric[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  github?: string;
  linkedin?: string;
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
}

export interface PageContent {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro?: string;
}

export interface CtaContent {
  kicker: string;
  heading: string;
  /** Pre-split heading lines for the fit-to-width CTA heading. */
  headingLines?: [string, string];
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
  emailLabel: string;
}

export interface HeroContent {
  headlineMain: string;
  headlineSub: string;
  badge: string;
  locationText: string;
  roleText: string;
  ctaLabel: string;
  ctaHref: string;
  scrollText: string;
}

export interface ManifestoItem {
  number: string;
  title: string;
  description: string;
}
