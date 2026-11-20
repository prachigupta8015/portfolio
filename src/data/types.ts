/**
 * @file types.ts
 * Type definitions for portfolio content models, versioning, and structure.
 */

export interface StatItem {
  value: string;
  label: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  /** Optional result-first bullet points. */
  highlights?: string[];
  tags: string[];
  /** Public URL (store listing, live site, repo). Omit for private client work. */
  link?: string;
  image?: string;
  /** Thumbnail crop anchor. Defaults to "top" (suits phone screenshots). */
  imagePosition?: "top" | "center";
  /** Extra screenshots shown as a phone-shaped thumbnail strip. */
  gallery?: string[];
  meta?: string;
  /** Short status badge, e.g. "In progress". */
  status?: string;
}

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  desc: string;
  /** Optional result-first bullet points rendered under the description. */
  highlights?: string[];
  tags: string[];
  location?: string;
  companyUrl?: string;
  logoText?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  org: string;
  note?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  org: string;
}

export interface AvailabilityStatus {
  open: boolean;
  text: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface PortfolioVersion {
  label: string;
  /** Outlined background text in the hero. Defaults to `label`. */
  watermark?: string;
  name: string;
  role: string;
  location?: string;
  hello: string;
  pre: string;
  typed: [string, string, string];
  email: string;
  cta: string;
  about: [string, string, string];
  stats: StatItem[];
  expertise: [ExpertiseItem, ExpertiseItem, ExpertiseItem];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  stack: string[];
  /** Categorized skills shown under the marquee. */
  skillGroups?: SkillGroup[];
  education: EducationItem[];
  testimonials: TestimonialItem[];
  availability: AvailabilityStatus;
  resumeUrl?: string;
  resumeFileName?: string;
  archiveUrl?: string;
  socials?: SocialLinks;
  photo?: string;
}

export interface VersionContextType {
  key: string;
  version: PortfolioVersion;
  setKey: (key: string) => void;
  keys: string[];
}
