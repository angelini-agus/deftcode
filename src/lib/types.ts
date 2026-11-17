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

export interface NavCtaContent {
  label: string;
  href: string;
}

export interface FooterContent {
  offerLine: string;
  locationLine: string;
}

export interface WhatsAppContact {
  /** TODO: real business number pending (ESTRATEGIA-COPY.md §8). */
  number: string;
  labelEs: string;
  labelEn: string;
  messageEs: string;
  messageEn: string;
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

/** Home services ladder (§3.5): lead diagnostic entry + per-service CTA. */
export interface ServiceHomeEntry {
  index: string;
  title: string;
  line: string;
  buttonLabel: string;
  buttonHref: string;
  /** Service sheet slug; the (00) diagnostic entry has none. */
  slug?: string;
}

export interface ServicesHomeContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceHomeEntry[];
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
  /** Delivery time from the §5 table; unresolved values stay as [COMPLETAR] literals. */
  plazo?: string;
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

/** §3.4 problem cards; ?problema=<key> preselects the form's problem field. */
export interface ProblemCard {
  key: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface ProblemsContent {
  eyebrow: string;
  title: string;
  intro: string;
  cards: ProblemCard[];
  closingText: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FeaturedCaseContent {
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  calcCtaLabel: string;
  calcCtaHref: string;
  caseCtaLabel: string;
}

export interface MoreSoftwareContent {
  eyebrow: string;
  title: string;
  intro: string;
  viewCaseLabel: string;
  bandLabel: string;
  bandHref: string;
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

/** Shared shape for the home 3-step diagnostic (§3.6), the /nosotros
 *  4-step process and the written guarantees list (§6). */
export interface ProcessContent {
  eyebrow: string;
  title: string;
  intro: string;
  steps: WorkStep[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaMicrocopy?: string;
}

export interface PricingRow {
  what: string;
  price: string;
  timeframe: string;
}

export interface PricingContent {
  eyebrow: string;
  title: string;
  intro: string;
  whatHeading: string;
  priceHeading: string;
  timeframeHeading: string;
  rows: PricingRow[];
  footnote: string;
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
  subtitle: string;
  kicker: string;
  badge: string;
  locationText: string;
  roleText: string;
  stats: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  microcopy: string;
  scrollText: string;
}

export interface ManifestoItem {
  number: string;
  title: string;
  description: string;
}

/** 4-field friction-free diagnostic form (§7). */
export interface ContactFormContent {
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  problemSelectedPrefix: string;
  submitLabel: string;
  microcopy: string;
  whatsappAltLabel: string;
  successTitlePrefix: string;
  successBody: string;
  successCalcLabel: string;
  /** TODO: lead magnet calculator pending (§8). */
  successCalcHref: string;
}

/** Ad landing /diagnostico (§7). */
export interface DiagnosticoLandingContent {
  eyebrow: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  proofLine: string;
  receiveEyebrow: string;
  receiveTitle: string;
  receiveItems: string[];
  notEyebrow: string;
  notTitle: string;
  notItems: string[];
}
