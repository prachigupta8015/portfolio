/**
 * @file constants.ts
 * Application-wide constants for section identifiers, navigation links, and keys.
 */

export const SECTION_IDS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly id: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: `#${SECTION_IDS.ABOUT}`, id: SECTION_IDS.ABOUT },
  {
    label: "Experience",
    href: `#${SECTION_IDS.EXPERIENCE}`,
    id: SECTION_IDS.EXPERIENCE,
  },
  {
    label: "Projects",
    href: `#${SECTION_IDS.PROJECTS}`,
    id: SECTION_IDS.PROJECTS,
  },
  {
    label: "Contact",
    href: `#${SECTION_IDS.CONTACT}`,
    id: SECTION_IDS.CONTACT,
  },
] as const;

export const DEFAULT_VERSION_KEY = "frontend";
export const STORAGE_KEY_VERSION = "portfolio_version_key";
