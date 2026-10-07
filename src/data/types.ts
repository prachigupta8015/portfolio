/**
 * @file types.ts
 * Type definitions for portfolio content models, versioning, and structure.
 */

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  link: string;
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
  experience: ExperienceItem[];
  projects: ProjectItem[];
  resumeUrl?: string;
  socials?: SocialLinks;
}

export interface VersionContextType {
  key: string;
  version: PortfolioVersion;
  setKey: (key: string) => void;
  keys: string[];
}
