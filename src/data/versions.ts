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
    watermark: "Web + Mobile",
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
        title: "Frontend Engineering",
        description:
          "Production React and Next.js apps with reusable UI systems, a shared form and validation engine, role-based components, and performance work that cut page load time by 35%.",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "React Native Mobile",
        description:
          "iOS and Android apps from one codebase: English/Arabic RTL, HealthKit and Health Connect sync, live GPS maps, Skia charts, push notifications, and secure token storage.",
        skills: ["React Native", "Reanimated", "Firebase", "i18next / RTL"],
      },
      {
        title: "Quality & Security",
        description:
          "SAST remediation across XSS, insecure URLs, unsafe file uploads, and data exposure, plus Jest tests and ESLint, Prettier, and Husky checks that keep releases stable.",
        skills: ["Jest", "ESLint & Husky", "SAST fixes", "Code review"],
      },
      {
        title: "AI-Powered Features",
        description:
          "AI features shipped in production: question generation by difficulty, teacher review and publishing workflows, and automated scoring of student answers against answer keys.",
        skills: ["AI Integration", "Content generation", "Automated scoring", "REST APIs"],
      },
    ],
    projects: [
      {
        title: "School Management Platform — Web + Mobile",
        desc: "One client platform on a shared backend: a React Native app for families and staff, and a React web portal for school administration, including an AI-powered assessment module.",
        highlights: [
          "AI assessments: teachers generate questions by difficulty with AI, review and publish them, and AI scores student answers against answer keys.",
          "Single-codebase iOS & Android app for 5 roles (Student, Parent, Teacher, Guard, Escort) with role-based navigation and access control.",
          "Live school-bus tracking with G10 GPS devices and Google Maps/Places, giving parents real-time pickup and drop-off visibility.",
          "Socket.IO community feed, polls, ID cards, and FullCalendar events, plus Firebase push notifications, Crashlytics, and force-update screens.",
        ],
        tags: [
          "React Native",
          "React",
          "TypeScript",
          "Redux Toolkit",
          "Tailwind CSS",
          "Socket.IO",
          "Firebase",
          "Google Maps API",
          "AI features",
        ],
        link: "",
        image: "/assets/projects/schoolManagement/school.webp",
        gallery: [
          "/assets/projects/schoolManagement/school2.webp",
          "/assets/projects/schoolManagement/school3.webp",
          // "/assets/projects/schoolManagement/school4.webp",
          // "/assets/projects/schoolManagement/school5.webp",
        ],
        meta: "Web + iOS + Android · 5 user roles · AI question generation & scoring",
      },
      {
        title: "Longevity Health App",
        desc: "Bilingual iOS & Android health and longevity app for a Saudi healthcare client, turning wearable and lab data into clear biomarker insights.",
        highlights: [
          "English/Arabic support with full RTL layout (i18next), type-checked translation keys, and platform-specific RTL fixes.",
          "Apple HealthKit and Google Health Connect sync for steps, heart rate, HRV, sleep, and weight.",
          "Biomarker trend charts (victory-native + Skia) with optimal-range bands, a bio-age trajectory, and a tappable SVG body map.",
          "18+ reusable components with light/dark theming and accessibility, plus Keychain/Keystore token storage with automatic refresh.",
        ],
        tags: [
          "React Native",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Firebase",
          "Skia",
          "i18next / RTL",
          "HealthKit",
        ],
        link: "",
        image: "/assets/projects/healthcare/healthcare.jpeg",
        imagePosition: "center",
        gallery: [
          "/assets/projects/healthcare/healthcare2.jpeg",
          "/assets/projects/healthcare/heathcare3.png",
        ],
        meta: "English + Arabic (RTL) · HealthKit & Health Connect · 18+ components",
      },
      {
        title: "Vehicle Tracking System — Performance & Modernization",
        desc: "Transportation management web platform for monitoring vehicles, trips, and routes in real time. My focus: making large operational dashboards fast and bringing a legacy React codebase up to date.",
        highlights: [
          "Cut page load time by 35% with lazy loading, route-level code splitting, and server-side pagination on large trip and vehicle tables.",
          "Upgraded React across major versions, resolving 20+ peer-dependency conflicts and replacing deprecated libraries without production regressions.",
          "Refactored legacy screens into reusable, typed components, with faster search and dynamic filtering over large datasets.",
          "Live vehicle tracking, location visualization, and route monitoring with the Google Maps API, plus trip reports and alerts.",
        ],
        tags: [
          "React",
          "TypeScript",
          "Performance",
          "Code splitting",
          "Tailwind CSS",
          "Google Maps API",
          "Jest",
        ],
        link: "",
        image: "/assets/projects/vehicleTracking/chalo.webp",
        gallery: [
          "/assets/projects/vehicleTracking/chalo2.webp",
          "/assets/projects/vehicleTracking/chalo3.webp",
          // "/assets/projects/vehicleTracking/chalo4.webp",
        ],
        meta: "35% faster page loads · 20+ dependency conflicts resolved · Legacy React upgrade",
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
        desc: "Frontend engineer on client delivery teams, owning web and mobile features from requirements to release.",
        highlights: [
          "Delivered 3 client applications (2 React Native mobile apps and 1 React web platform) for education, transportation, and healthcare clients.",
          "Reduced page load time by 35% with lazy loading, code splitting, server-side pagination, and optimized search/filtering on large tables.",
          "Upgraded legacy React codebases across major versions, resolving 20+ dependency conflicts and replacing deprecated libraries without production regressions.",
          "Remediated SAST findings across XSS, insecure URLs, unsafe file uploads, data exposure, and vulnerable dependencies.",
          "Built a shared form engine, validation layer, and role-based UI components reused across multiple projects, reducing duplicated frontend logic.",
          "Worked in Agile sprints with backend, QA, and design teams, debugging production issues to keep releases stable.",
        ],
        tags: [
          "React",
          "React Native",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Firebase",
          "Performance",
          "Security",
        ],
      },
    ],
    stack: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Firebase",
      "Socket.IO",
      "Reanimated",
      "Skia",
      "i18next",
      "Google Maps",
      "Jest",
    ],
    skillGroups: [
      {
        category: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      },
      {
        category: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "React Router",
          "Material UI",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        category: "Mobile",
        items: [
          "React Native",
          "React Navigation",
          "Reanimated",
          "iOS & Android setup",
          "i18n / RTL",
          "Firebase",
          "Google Maps",
        ],
      },
      {
        category: "State & Data",
        items: [
          "Redux Toolkit",
          "RTK Query",
          "redux-persist",
          "REST APIs",
          "Socket.IO",
          "JSON",
        ],
      },
      {
        category: "AI",
        items: [
          "AI feature integration",
          "Content generation",
          "Automated scoring",
          "AI-assisted development",
        ],
      },
      {
        category: "Quality & Security",
        items: [
          "Jest",
          "ESLint",
          "Prettier",
          "Husky",
          "Vulnerability fixes",
        ],
      },
      {
        category: "Tools & Process",
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "Bitbucket",
          "Postman",
          "Android Studio",
          "Xcode",
          "VS Code",
          "Agile / Scrum",
        ],
      },
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
