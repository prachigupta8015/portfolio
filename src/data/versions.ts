// Adding a new role/version must require ONLY adding a new key to VERSIONS in data/versions.ts.

import { PortfolioVersion } from "./types";

/**
 * All portfolio content lives in this dictionary.
 * Adding a new role or specialization requires only adding a new key to VERSIONS here.
 */
export const VERSIONS: Record<string, PortfolioVersion> = {
  /*
  fullstack: {
    label: "Full-Stack",
    name: "Your Name",
    role: "Full-Stack Developer",
    hello: "Hi, I'm",
    pre: "I ship ",
    typed: ["fe", "clean APIs", "distributed web apps"],
    email: "you@email.com",
    cta: "Interested in collaborating or discussing a technical challenge? Drop me a message.",
    about: [
      "I'm a full-stack developer with a frontend heart. I design the data model, build the API, and polish the interface on top.",
      "My toolbox is React, Node.js, PostgreSQL and TypeScript, and I like owning a feature end to end.",
      "Replace this text when your role changes, and add a new entry to VERSIONS.",
    ],
    stats: [
      { value: "12+", label: "Projects shipped" },
      { value: "96", label: "Lighthouse score" },
      { value: "8+", label: "Years experience" },
      { value: "99.9%", label: "Uptime delivered" },
    ],
    expertise: [
      {
        title: "Backend and APIs",
        description: "REST and GraphQL services with clean data models.",
        skills: ["Node.js", "PostgreSQL"],
      },
      {
        title: "Frontend engineering",
        description:
          "Component-driven interfaces with accessible interactions.",
        skills: ["React", "Next.js"],
      },
      {
        title: "Architecture & Systems",
        description:
          "Resilient deployments, automated CI/CD and edge delivery.",
        skills: ["TypeScript", "Docker"],
      },
    ],
    projects: [
      {
        title: "Project One",
        desc: "Tables with 10k rows froze the browser. Virtualised rows and moved filtering to a web worker. 3x faster renders and a 38% smaller bundle.",
        tags: ["React", "TypeScript", "Vite", "Web Workers"],
        link: "https://github.com",
        image: "/projects/chronos.webp",
        meta: "96 Lighthouse score · 10k rows virtualized",
      },
      {
        title: "Design System UI",
        desc: "Fragmented UI led to inconsistent branding. Unified into a headless, token-driven component architecture. Cut new feature development time by 45%.",
        tags: ["React", "Tailwind CSS", "Radix UI"],
        link: "https://github.com",
        image: "/projects/hyperion.webp",
        meta: "2.4k GitHub stars · 45+ components",
      },
      {
        title: "Cloud Analytics Web",
        desc: "High volume event spikes saturated backend polling. Implemented WebSocket streaming with edge caching. Handled 50k events/sec with sub-second latency.",
        tags: ["Next.js", "PostgreSQL", "Redis", "WebSockets"],
        link: "https://github.com",
        meta: "99.99% uptime · 50k events/sec",
      },
      {
        title: "Mobile Reader App",
        desc: "Intermittent connectivity caused reader lag. Built local SQLite persistence with offline-first delta sync. Zero lost reading states across 100k sessions.",
        tags: ["React Native", "TypeScript", "SQLite"],
        link: "https://github.com",
        image: "/projects/prism.webp",
        meta: "4.9★ rating · 120Hz gesture physics",
      },
    ],
    experience: [
      {
        when: "2026 — Now",
        title: "Full-Stack Developer",
        org: "Company Name",
        location: "Remote",
        companyUrl: "https://example.com",
        logoText: "C",
        desc: "Designed REST and GraphQL APIs and the React screens that use them. Reduced average response time by 45%.",
        tags: ["Node.js", "PostgreSQL", "React"],
      },
      {
        when: "2023 — 2026",
        title: "Senior Engineer",
        org: "Product Labs",
        location: "San Francisco, CA",
        companyUrl: "https://example.com",
        logoText: "PL",
        desc: "Built scalable microservices and customer-facing dashboard with sub-second page loads across high traffic peaks.",
        tags: ["TypeScript", "Next.js", "Docker"],
      },
      {
        when: "2020 — 2023",
        title: "Software Engineer",
        org: "Studio Creative",
        location: "New York, NY",
        companyUrl: "https://example.com",
        logoText: "SC",
        desc: "Implemented real-time collaboration tools and internal analytics interfaces for distributed creative squads.",
        tags: ["JavaScript", "Express", "PostgreSQL"],
      },
    ],
    stack: [
      "Prisma",
      "React",
      "Next.js",
      "TypeScript",
      "Redis",
      "Docker",
      "Git",
      "Vercel",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    education: [
      {
        period: "2021 — 2025",
        title: "B.Tech, Computer Science",
        org: "University Name",
        note: "Focus on web technologies and human-computer interaction.",
      },
      {
        period: "2024",
        title: "Certification Name",
        org: "Issuer",
        note: "Replace with a real certificate or course.",
      },
    ],
    testimonials: [
      {
        quote:
          "Placeholder: one or two honest lines from a mentor or teammate about how you work.",
        name: "Name Surname",
        role: "Role",
        org: "Company",
      },
    ],
    availability: {
      open: true,
      text: "Available for selected roles & contracts",
    },
    resumeUrl: "#",
    archiveUrl: "https://github.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  */
  frontend: {
    label: "Frontend",
    name: "Your Name",
    role: "Frontend Engineer",
    hello: "Hi, I'm",
    pre: "I ship ",
    typed: ["fe", "fluid interactions", "design systems"],
    email: "you@email.com",
    cta: "Interested in crafting tactile user interfaces or design systems together? Let's connect.",
    about: [
      "I'm a frontend engineer dedicated to bridging interaction design with robust component architectures.",
      "My core toolbox is React, Next.js, Tailwind CSS and Framer Motion, with an obsessive focus on performance.",
      "Replace this text when your role changes, and add a new entry to VERSIONS.",
    ],
    stats: [
      { value: "10+", label: "Design systems shipped" },
      { value: "98", label: "Lighthouse performance" },
      { value: "8+", label: "Years experience" },
      { value: "60fps", label: "Sustained frame rates" },
    ],
    expertise: [
      {
        title: "Design Systems & Tokens",
        description:
          "Reusable component libraries with strict accessibility and dark mode.",
        skills: ["Tailwind CSS", "Radix UI"],
      },
      {
        title: "Interaction & Animation",
        description:
          "Physics-based micro-interactions, layout transitions and smooth scrolling.",
        skills: ["Framer Motion", "Lenis"],
      },
      {
        title: "Performance Optimization",
        description:
          "Profiling bundle graphs, eliminating jank and optimizing Core Web Vitals.",
        skills: ["Next.js", "Web Vitals"],
      },
    ],
    projects: [
      {
        title: "Prism Motion Suite",
        desc: "Heavy animation bundles dropped frames on low-end hardware. Built composable spring physics hooks using transform-only CSS interpolation. Sustained 60fps and 42% smaller bundle.",
        tags: ["React", "TypeScript", "Framer Motion"],
        link: "https://github.com",
        image: "/projects/prism.webp",
        meta: "60fps sustained · 42% smaller footprint",
      },
      {
        title: "Hyperion Design System",
        desc: "Component suites suffered accessibility and contrast violations. Re-architected with WCAG AAA token boundaries. Accelerated sprint delivery by 50%.",
        tags: ["Next.js", "Tailwind CSS", "Storybook"],
        link: "https://github.com",
        image: "/projects/hyperion.webp",
        meta: "WCAG 2.1 AAA · 12 product teams",
      },
      {
        title: "Lumina Telemetry Web",
        desc: "SVG graph re-renders pegged CPU on high-frequency data streams. Built canvas-accelerated rendering pipeline with fallback. Cut client CPU usage by 64%.",
        tags: ["React", "Canvas", "Performance"],
        link: "https://github.com",
        meta: "64% lower CPU · 100k points/sec",
      },
      {
        title: "CSS Complexity Analyzer",
        desc: "Style recalculations caused micro-stutters during page navigation. Built AST analyzer identifying non-composited CSS properties. Reduced layout recalculation time by 35%.",
        tags: ["Node.js", "TypeScript", "CLI"],
        link: "https://github.com",
        meta: "Zero dependencies · Sub-10ms scans",
      },
    ],
    experience: [
      {
        when: "2026 — Now",
        title: "Frontend Engineer",
        org: "Company Name",
        location: "Remote",
        companyUrl: "https://example.com",
        logoText: "C",
        desc: "Architected cross-platform design systems and high-frequency interaction surfaces.",
        tags: ["React", "Next.js", "TypeScript"],
      },
      {
        when: "2023 — 2026",
        title: "Senior UI Engineer",
        org: "Creative Lab",
        location: "San Francisco, CA",
        companyUrl: "https://example.com",
        logoText: "CL",
        desc: "Spearheaded design token modernization cutting component integration times by 50%.",
        tags: ["Tailwind CSS", "Framer Motion"],
      },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Git",
      "Vercel",
      "Radix UI",
      "Vitest",
    ],
    education: [
      {
        period: "2021 — 2025",
        title: "B.Tech, Computer Science",
        org: "University Name",
        note: "Focus on human-computer interaction and web standards.",
      },
    ],
    testimonials: [
      {
        quote:
          "Placeholder: one or two honest lines from a mentor or teammate about how you work.",
        name: "Name Surname",
        role: "Role",
        org: "Company",
      },
    ],
    availability: {
      open: true,
      text: "Available for selected frontend engineering projects",
    },
    resumeUrl: "#",
    archiveUrl: "https://github.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
};
