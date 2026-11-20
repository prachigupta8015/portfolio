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
    name: "Prachi Gupta",
    role: "Frontend & React Native Engineer",
    location: "Haryana, India",
    hello: "Hi, I'm",
    pre: "I build ",
    typed: [
      "production React web apps",
      "cross-platform React Native apps",
      "AI-powered product features",
    ],
    email: "prachigupta8015@gmail.com",
    cta: "Looking for a Frontend or React Native engineer to ship polished web and mobile products? Let's connect.",
    about: [
      "I'm a Frontend & React Native Engineer with 2+ years of experience delivering production web and mobile apps in React, React Native, and TypeScript.",
      "At Daffodil Software, I've delivered 3 client applications across education, healthcare, and transportation, owning features from requirements to release. I cut page load time by 35%, upgraded legacy React codebases, remediated SAST security findings, and built a shared form engine reused across projects.",
      "Lately I've been building AI-enabled workflows, such as AI-generated assessments and automated answer scoring, and bilingual English/Arabic mobile experiences with full RTL support.",
    ],
    stats: [
      { value: "2+", label: "Years in production engineering" },
      { value: "3", label: "Client apps delivered" },
      { value: "35%", label: "Faster page loads" },
      { value: "2", label: "Platforms from one codebase (iOS & Android)" },
    ],
    expertise: [
      {
        title: "Frontend Engineering & Systems",
        description:
          "Architecting component-driven web interfaces in React and Next.js with accessible interactions, dynamic validation systems, and Tailwind CSS design tokens.",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Cross-Platform Mobile Apps",
        description:
          "Developing production iOS and Android apps with React Native, offline-first caching, native device integrations, and live GPS route tracking.",
        skills: ["React Native", "iOS & Android", "RTK Query", "Firebase"],
      },
      {
        title: "Performance & Application Security",
        description:
          "Optimizing Core Web Vitals and load times by 35% through lazy loading, remediating SAST security vulnerabilities (XSS, RBAC), and enforcing clean API data layers.",
        skills: ["Performance Optimization", "SAST Security", "REST APIs", "Jest"],
      },
    ],
    projects: [
      {
        title: "School Management System — Mobile App",
        desc: "Built a cross-platform (iOS & Android) mobile app serving four user roles (Student, Parent, Teacher, Guard, Escort) with role-based navigation, offline caching, native device permissions (camera, QR scanning), and real-time transport GPS tracking via Google Maps & Places APIs.",
        tags: [
          "React Native",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Firebase",
          "Google Maps API",
        ],
        link: "https://play.google.com/store/search?q=oneSns&c=apps&hl=en_IN",
        image: "/assets/projects/sns-mobile/sns-mobile.webp",
        meta: "4 User Roles · Real-Time GPS Tracking · Offline Caching",
      },
      {
        title: "School Management System — Web Platform",
        desc: "Developed the frontend for a multi-tenant school management platform supporting admins, staff, parents, and guards with organization-aware routing. Built live data pipelines integrating third-party platforms (Skolaro, Veracross, Toddle), FullCalendar scheduling, Socket.IO live community feeds, and Zod form validation.",
        tags: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Socket.IO",
          "FullCalendar",
          "Zod",
          "MongoDB",
          "Node.js",
          "Express",
        ],
        link: "https://shivnadarschool.edu.in/faridabad",
        image: "/assets/projects/sns-mobile/sns-mobile2.webp",
        meta: "Multi-Tenant Architecture · Socket.IO Live Feed · Skolaro & Veracross Integrations",
      },
      {
        title: "Vehicle Tracking System",
        desc: "Engineered a transportation management platform with multiple interactive dashboards for fleet telemetry, live location visualization, and route monitoring using Google Maps. Implemented trip reports, route management, dynamic filtering/pagination, and refactored legacy code into reusable components.",
        tags: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Google Maps API",
          "Jest",
        ],
        link: "https://play.google.com/store/search?q=chalo&c=apps&hl=en_IN",
        image: "/assets/projects/chalo/chalo.webp",
        meta: "Real-Time Telemetry · Route Visualization · 35% Performance Boost",
      },
    ],
    photo: "/assets/profile/picture1.jpeg",
    experience: [
      {
        when: "Sep 2024 — Present",
        title: "Software Engineer, Frontend",
        org: "Daffodil Software Ltd.",
        location: "Haryana, India",
        companyUrl: "https://www.daffodilsw.com",
        logoText: "DS",
        desc: "Developed and maintained production applications using React, React Native, Angular, TypeScript, and REST APIs, supporting enterprise workflows and role-based access. Resolved 20+ production issues within a month, boosted application performance by 35% via lazy loading, pagination, and search optimizations, led major React version migrations, and remediated critical SAST security findings across web apps.",
        tags: [
          "React",
          "React Native",
          "TypeScript",
          "REST APIs",
          "RTK Query",
          "SAST Security",
          "Performance Optimization",
        ],
      },
    ],
    stack: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
      "Socket.IO",
      "Angular",
      "Node.js",
      "HTML5 & CSS3",
      "Android & iOS",
      "Google Maps API",
      "MongoDB",
      "MySQL",
      "Redis",
      "Material UI",
      "Zod",
      "Jest",
      "Git & GitHub",
      "Postman",
      "Android Studio",
      "Xcode",
    ],
    education: [
      {
        period: "2021 — 2025",
        title: "Bachelor of Computer Science and Engineering",
        org: "Kurukshetra University",
        note: "GPA: 8.07 · Panipat Institute of Engineering and Technology. Coursework in data structures & algorithms, database systems, and web development.",
      },
    ],
    testimonials: [],
    availability: {
      open: true,
      text: "Open to Frontend & React Native roles",
    },
    resumeUrl: "/resume.pdf",
    resumeFileName: "Prachi_Gupta_Resume.pdf",
    archiveUrl: "https://github.com/prachigupta8015",
    socials: {
      github: "https://github.com/prachigupta8015",
      linkedin: "https://www.linkedin.com/in/prachigupta8015",
    },
  },
};
