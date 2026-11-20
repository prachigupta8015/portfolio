# Prachi Gupta — Frontend & React Native Engineer

Personal portfolio of **Prachi Gupta**, a Frontend & React Native Engineer with 2+ years of experience shipping production web and mobile apps in React, React Native, and TypeScript. Open to **Frontend Developer**, **Mobile Application Developer**, and **React Developer** roles.

- **GitHub:** [prachigupta8015](https://github.com/prachigupta8015)
- **LinkedIn:** [in/prachigupta8015](https://www.linkedin.com/in/prachigupta8015)
- **Résumé:** [`public/resume.pdf`](public/resume.pdf)

## At a glance

| | |
| --- | --- |
| **Experience** | Software Engineer, Frontend at Daffodil Software (Sep 2024 – present) |
| **Delivered** | 3 client apps: 2 React Native (iOS + Android) and 1 React web platform |
| **Impact** | 35% faster page loads · 20+ dependency conflicts resolved in legacy React upgrades · shared form engine reused across projects |
| **Core stack** | React, React Native, Next.js, TypeScript, Redux Toolkit / RTK Query, Tailwind CSS, Firebase |

## Featured work

All three are client projects under NDA, so the portfolio shows screenshots and write-ups instead of public code.

### 1. School Management Platform: Web + Mobile
A React web portal for school administration and a React Native app for 5 roles (Student, Parent, Teacher, Guard, Escort), on a shared backend.
- AI-powered assessments: question generation by difficulty, plus automated scoring against answer keys
- Role-based navigation and access control from a single iOS/Android codebase
- Live school-bus tracking (GPS + Google Maps), Socket.IO community feed, Firebase push notifications

### 2. Longevity Health App
A bilingual (English/Arabic) iOS and Android health app that turns wearable and lab data into biomarker insights.
- Full RTL support with i18next and type-checked translation keys
- Apple HealthKit and Google Health Connect sync
- Skia biomarker charts, a tappable SVG body map, 18+ themed and accessible components, secure token storage

### 3. Vehicle Tracking System: Performance & Modernization
A transportation management web platform with real-time vehicle, trip, and route dashboards.
- 35% faster page loads through lazy loading, code splitting, and server-side pagination
- React upgraded across major versions with 20+ peer-dependency conflicts resolved
- Legacy screens refactored into reusable, typed components

## About this site

The portfolio is also a frontend sample in its own right:

- **Next.js 16** (App Router, Cache Components) and **React 19**, written in strict **TypeScript**
- **Tailwind CSS v4** with CSS-variable design tokens for light and dark themes
- **Framer Motion** text reveals, parallax, and a one-time intro animation. Every animation respects `prefers-reduced-motion`
- **Lenis** smooth scrolling, with a native-scroll fallback
- **Accessibility:** a single `h1` with a logical heading order, skip link, keyboard-friendly `<dialog>` lightbox, and labelled controls
- **SEO:** generated Open Graph image, canonical URL, `sitemap.xml`, `robots.txt`, and schema.org `Person` JSON-LD
- **Performance:** `next/image` serves responsive, modern-format screenshots with lazy loading

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed domain (for example, in Vercel project settings). The canonical URL, social previews, sitemap, and structured data all use it. On Vercel, the production URL is used automatically if it isn't set.

## Editing content

All copy lives in [`src/data/versions.ts`](src/data/versions.ts). Components contain no hard-coded content.

| Field | What it controls |
| --- | --- |
| `name`, `role`, `location`, `typed` | Hero, sidebar, and structured data |
| `about`, `stats` | About section and stats strip |
| `expertise` | Three expertise cards |
| `experience[].highlights` | Bullet points under each role |
| `projects[]` | Project rows (`image`, `gallery`, `highlights`, `meta`, optional `link` / `status`) |
| `stack`, `skillGroups` | Skills marquee and categorized skills list |
| `education`, `testimonials` | Education rows and the testimonials section (hidden when empty) |
| `resumeUrl`, `resumeFileName`, `socials` | Résumé download and social links |

Project screenshots live in `public/assets/projects/<project>/`. Phone screenshots (9:16) work best in `gallery`.

Adding another key to `VERSIONS` (for example, a `mobile` variant) automatically shows a version switcher in the sidebar.

## Project structure

```
src/
├── app/            # layout, page, global styles, OG image, sitemap, robots
├── components/
│   ├── layout/     # Sidebar, nav, theme toggle, version switcher
│   ├── sections/   # Hero, About, Expertise, Experience, Projects, Skills, Education, Contact
│   ├── motion/     # SplitText, Typewriter, Reveal, ParallaxLayer
│   ├── providers/  # Theme, smooth scroll, version context
│   ├── seo/        # Person JSON-LD
│   └── ui/         # Button, ListItem, ImageLightbox, Portrait, StatsStrip, ...
├── data/           # versions.ts (content) and types.ts
├── hooks/
└── lib/            # constants, site URL, motion presets, cn()
```

## Deployment

Deploys to Vercel (recommended) or Netlify with the default Next.js settings.
