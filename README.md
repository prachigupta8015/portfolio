# Minimalist Developer Portfolio Template

A high-performance, minimalist developer portfolio template built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Features typography-first design, smooth scroll integration with Lenis, chromatic text reveals, layered hero parallax, peer-row hover dimming, and instantaneous role/version switching.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Strict TypeScript)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with CSS variable design tokens
- **Animations**: Framer Motion (text reveals, parallax, hover transitions, scroll reveals)
- **Smooth Scroll**: Lenis (`lenis/react`) with prefers-reduced-motion fallback
- **Theme**: `next-themes` (Dark mode default with system preference synchronization)
- **Typography**: Google Font `Bricolage_Grotesque` variable font via `next/font/google`
- **Zero Heavy Assets**: 100% CSS and text visuals, achieving 95+ Lighthouse performance scores.

---

## Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Bricolage Grotesque font, metadata, viewport, Providers
│   │   ├── page.tsx              # Clean composition of Hero, Sidebar, and Sections
│   │   └── globals.css           # Tokens (--bg, --fg, --accent, etc.), base styles, utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx       # Sticky left column (name, role, nav, versions, socials, theme)
│   │   │   ├── SidebarNav.tsx    # Section nav with active indicator line and smooth scroll
│   │   │   ├── VersionSwitcher.tsx # Role pills dynamically generated from VERSIONS
│   │   │   └── ThemeToggle.tsx   # Hydration-safe light/dark toggle pill
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # 100svh hero with layered parallax, SplitText, and Typewriter
│   │   │   ├── About.tsx         # Words-mode SplitText biography paragraphs
│   │   │   ├── Experience.tsx    # Work history rows with peer hover dimming and scroll reveal
│   │   │   ├── Projects.tsx      # Projects rows reusing universal ListItem
│   │   │   └── Contact.tsx       # CTA email link, resume download button, and footer note
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Reusable primary and outline pill buttons
│   │   │   ├── Pill.tsx          # Interactive pill badges with aria-pressed states
│   │   │   ├── TagList.tsx       # Pill tags with color-mix accent background tints
│   │   │   ├── ListItem.tsx      # Universal row component for experience and projects
│   │   │   ├── SectionHeading.tsx# Shared h3 heading powered by SplitText characters
│   │   │   └── Section.tsx       # Shared section container with consistent scroll margins
│   │   ├── motion/
│   │   │   ├── SplitText.tsx     # Cinematic char/word reveals with 3D overflow masks
│   │   │   ├── Typewriter.tsx    # Looped typing role line with CSS blinking caret
│   │   │   ├── Reveal.tsx        # Scroll-in / scroll-out reversible motion wrapper
│   │   │   └── ParallaxLayer.tsx # Scroll-progress transform layers without layout recalculations
│   │   └── providers/
│   │       ├── Providers.tsx     # Root composer for theme, motion, scroll, and versioning
│   │       ├── SmoothScrollProvider.tsx # Lenis root configuration and useScrollTo hook
│   │       └── VersionProvider.tsx # Version context synced with localStorage
│   ├── data/
│   │   ├── types.ts              # PortfolioVersion, ExperienceItem, ProjectItem interfaces
│   │   └── versions.ts           # The VERSIONS object: all portfolio content lives here
│   ├── hooks/
│   │   ├── useActiveSection.ts   # IntersectionObserver section tracker
│   │   ├── useTypewriter.ts      # Looped typing engine with randomized character delay
│   │   └── useVersion.ts         # Hook to access and switch the active portfolio version
│   └── lib/
│       ├── cn.ts                 # Classname utility combining clsx and tailwind-merge
│       ├── constants.ts          # Section IDs, navigation items, default keys
│       └── motion.ts             # Centralized motion variants, easings, and timing configs
├── public/
│   └── favicon.ico               # Minimal favicon
├── README.md
├── package.json
└── tsconfig.json
```

---

## How to Edit Portfolio Content

All copy, biographical text, metrics, work history, projects, and contact details are centralized in `src/data/versions.ts`. Components contain zero hardcoded copy.

To update details for an existing role (e.g. `frontend` or `fullstack`), locate its key in `VERSIONS` in `src/data/versions.ts` and edit the corresponding fields:

```typescript
export const VERSIONS: Record<string, PortfolioVersion> = {
  frontend: {
    label: "Frontend",
    name: "Alex Vance",
    role: "Senior Frontend Engineer",
    hello: "Hi, I'm",
    pre: "I build ",
    typed: [
      "high-performance web applications",
      "fluid design systems and UI engines",
      "accessible, micro-animated digital interfaces",
    ],
    email: "alex.vance@example.com",
    cta: "Interested in crafting lightning-fast, tactile user interfaces together? Drop me a line.",
    about: [
      "Introductory paragraph...",
      "Career background and metrics...",
      "Personal philosophy and interests...",
    ],
    experience: [
      {
        when: "2023 — Present",
        title: "Staff Frontend Architect",
        org: "Company Name",
        desc: "Spearheaded web core modernization, cutting initial bundle size by 38%...",
        tags: ["React 19", "Next.js", "TypeScript", "Performance"],
      },
    ],
    projects: [
      {
        title: "Project Name",
        desc: "Engineered headless animation orchestrator with 60fps renders...",
        tags: ["TypeScript", "Framer Motion", "NPM"],
        link: "https://github.com/...",
      },
    ],
    resumeUrl: "#",
    socials: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-profile",
    },
  },
};
```

---

## How to Add a New Role Version

Adding a new specialization or role version requires **ONLY adding a new key** to `VERSIONS` in `src/data/versions.ts`.

1. Open `src/data/versions.ts`.
2. Add a new key (e.g. `mobile` or `devops`) conforming to the `PortfolioVersion` interface:

```typescript
  mobile: {
    label: "Mobile",
    name: "Alex Vance",
    role: "Senior Mobile Engineer",
    hello: "Hi, I'm",
    pre: "I build ",
    typed: [
      "fluid React Native and Swift applications",
      "offline-first mobile architectures",
      "haptic-rich mobile user experiences",
    ],
    email: "alex.vance@example.com",
    cta: "Looking for an engineer to ship polished iOS and Android apps? Let's talk.",
    about: [
      "I specialize in cross-platform mobile architecture...",
      "Experienced with native Swift/Kotlin modules and React Native...",
      "Passionate about 120Hz frame rates and responsive gestures...",
    ],
    experience: [
      {
        when: "2022 — Present",
        title: "Lead Mobile Engineer",
        org: "Mobile Studio",
        desc: "Scaled iOS application to 2M active users with 99.98% crash-free sessions...",
        tags: ["React Native", "Swift", "TypeScript", "Redux"],
      },
    ],
    projects: [
      {
        title: "Aura Mobile",
        desc: "Designed offline-first journal with encrypted cloud synchronization...",
        tags: ["React Native", "SQLite", "Expo"],
        link: "https://github.com",
      },
    ],
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
```

3. The `<VersionSwitcher>` component automatically renders a new button pill for "Mobile", switches all page content instantaneously, resets the typewriter cycle, and smoothly scrolls to the top.

---

## How to Change the Color Palette (Tokens Only)

No hard-coded color values exist in components. Colors are controlled exclusively through CSS custom properties in `src/app/globals.css`:

```css
:root {
  --bg: #0c0d14;              /* Primary dark background */
  --fg: #ecebf3;              /* Primary dark foreground */
  --muted: #8d8fa3;           /* Subdued text & borders */
  --accent: #9aa8ff;          /* Vibrant interactive accent */
  --line: rgba(255, 255, 255, 0.1);   /* Dividers & outlines */
  --card: rgba(255, 255, 255, 0.04);  /* Subtle row hover fill */
}

[data-theme="light"] {
  --bg: #f3f3f8;              /* Primary light background */
  --fg: #14152a;              /* Primary light foreground */
  --muted: #62647a;           /* Subdued light text */
  --accent: #3a49d1;          /* High-contrast light accent */
  --line: rgba(0, 0, 0, 0.12);/* Light mode borders */
  --card: rgba(0, 0, 0, 0.035);/* Light mode hover fill */
}
```

Updating these tokens modifies all backgrounds, typography, hover tints, tag pill fills, orb glows, and focus rings across the entire application simultaneously.

---

## How to Add a New Section

To add a new section (e.g., "Articles" or "Awards"):

1. **Register the Section ID** in `src/lib/constants.ts`:
   ```typescript
   export const SECTION_IDS = {
     ABOUT: "about",
     EXPERIENCE: "experience",
     PROJECTS: "projects",
     ARTICLES: "articles",
     CONTACT: "contact",
   } as const;
   ```

2. **Add to the Navigation List** in `src/lib/constants.ts`:
   ```typescript
   export const NAV_ITEMS = [
     { label: "About", href: `#${SECTION_IDS.ABOUT}`, id: SECTION_IDS.ABOUT },
     { label: "Experience", href: `#${SECTION_IDS.EXPERIENCE}`, id: SECTION_IDS.EXPERIENCE },
     { label: "Projects", href: `#${SECTION_IDS.PROJECTS}`, id: SECTION_IDS.PROJECTS },
     { label: "Articles", href: `#${SECTION_IDS.ARTICLES}`, id: SECTION_IDS.ARTICLES },
     { label: "Contact", href: `#${SECTION_IDS.CONTACT}`, id: SECTION_IDS.CONTACT },
   ] as const;
   ```

3. **Create the Section Component** in `src/components/sections/Articles.tsx`:
   ```typescript
   "use client";

   import React from "react";
   import { Section } from "@/components/ui/Section";
   import { SectionHeading } from "@/components/ui/SectionHeading";
   import { SECTION_IDS } from "@/lib/constants";

   export function Articles() {
     return (
       <Section id={SECTION_IDS.ARTICLES} aria-label="Articles">
         <SectionHeading>Articles</SectionHeading>
         <p className="text-muted leading-relaxed">
           Your new section content here...
         </p>
       </Section>
     );
   }
   ```

4. **Add the Component** into `src/app/page.tsx`:
   ```typescript
   <main className="py-12 min-[861px]:py-20 min-[861px]:pb-24">
     <About />
     <Experience />
     <Projects />
     <Articles />
     <Contact />
   </main>
   ```

---

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub.
2. Visit [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### Netlify

1. Link your repository in the Netlify dashboard.
2. Netlify Next.js Runtime automatically handles App Router:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
3. Click **Deploy Site**.

---

## Development & Quality Assurance

```bash
# Run local development server
npm run dev

# Run ESLint validation
npm run lint

# Format code with Prettier
npx prettier --write "src/**/*.{ts,tsx,css}"

# Run production build and static pre-rendering verification
npm run build
```
