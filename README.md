# Prachi Gupta — Portfolio

Personal portfolio of **Prachi Gupta**, Frontend & React Native Engineer with 2+ years of experience shipping production web and mobile apps in React, React Native, and TypeScript.

- **GitHub:** [prachigupta8015](https://github.com/prachigupta8015)
- **LinkedIn:** [in/prachigupta8015](https://www.linkedin.com/in/prachigupta8015)
- **Résumé:** [`public/resume.pdf`](public/resume.pdf)

## Highlights

- **Longevity Health App:** bilingual (English/Arabic RTL) React Native app with HealthKit & Health Connect sync and Skia biomarker charts.
- **School Management Platform:** React web portal + React Native app for 5 user roles, live bus tracking, and an AI-powered assessment module.
- **Vehicle Tracking System:** React dashboards for live fleet tracking, trips, and route monitoring on Google Maps.

## Built with

- **Next.js 16** (App Router, Cache Components) and **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** with CSS-variable design tokens (light & dark themes)
- **Framer Motion** for text reveals, parallax, and scroll animations
- **Lenis** smooth scrolling with a `prefers-reduced-motion` fallback
- `next/og` generated social preview image

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed domain (e.g. in Vercel project settings) so social previews resolve to absolute URLs.

## Editing content

All copy lives in [`src/data/versions.ts`](src/data/versions.ts). Components contain no hard-coded content.

| Field | What it controls |
| --- | --- |
| `name`, `role`, `location`, `typed` | Hero and sidebar |
| `about`, `stats` | About section and stats strip |
| `expertise` | Three expertise cards |
| `experience[].highlights` | Bullet points under each role |
| `projects[]` | Project rows (`image`, `gallery`, `highlights`, optional `link` / `status`) |
| `stack`, `skillGroups` | Skills marquee and categorized skills list |
| `education`, `testimonials` | Education rows and the (auto-hidden when empty) testimonials section |
| `resumeUrl`, `resumeFileName`, `socials` | Résumé download and social links |

Project screenshots live in `public/assets/projects/<project>/`. Phone screenshots (9:16) work best in `gallery`.

Adding another key to `VERSIONS` (e.g. a `mobile` variant) automatically shows a version switcher in the sidebar.

## Project structure

```
src/
├── app/            # layout, page, global styles, OG image
├── components/
│   ├── layout/     # Sidebar, nav, theme toggle, version switcher
│   ├── sections/   # Hero, About, Expertise, Experience, Projects, Skills, Education, Contact
│   ├── motion/     # SplitText, Typewriter, Reveal, ParallaxLayer
│   ├── providers/  # Theme, smooth scroll, version context
│   └── ui/         # Button, ListItem, TagList, Portrait, StatsStrip, ...
├── data/           # versions.ts (content) and types.ts
├── hooks/
└── lib/            # constants, motion presets, cn()
```

## Deployment

Deploys as a static site on Vercel (recommended) or Netlify with the default Next.js settings.
