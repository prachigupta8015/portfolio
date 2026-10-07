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
  tags: string[];
  link: string;
  image?: string;
  meta?: string;
}

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
  location?: string;
  companyUrl?: string;
  logoText?: string;
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
  name: string;
  role: string;
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
  education: EducationItem[];
  testimonials: TestimonialItem[];
  availability: AvailabilityStatus;
  resumeUrl?: string;
  archiveUrl?: string;
  socials?: SocialLinks;
}

export interface VersionContextType {
  key: string;
  version: PortfolioVersion;
  setKey: (key: string) => void;
  keys: string[];
}
