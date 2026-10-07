// Adding a new role/version must require ONLY adding a new key to VERSIONS in data/versions.ts.

import { PortfolioVersion } from "./types";

/**
 * All portfolio content lives in this dictionary.
 * Adding a new role or specialization requires only adding a new key to VERSIONS here.
 */
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
      "I am a frontend specialist dedicated to bridging the divide between meticulous interaction design and hard-nosed systems engineering.",
      "Over the past eight years, I have architected component libraries, optimized rendering pipelines, and eliminated layout thrashing across mission-critical web applications. I care deeply about millisecond-level responsiveness, sub-pixel typography, and accessible experiences for every user.",
      "When I am not profiling bundle graphs or fine-tuning spring physics, I contribute to open-source UI tooling and explore typography history.",
    ],
    experience: [
      {
        when: "2023 — Present",
        title: "Staff Frontend Architect",
        org: "Vanguard Systems",
        desc: "Spearheaded web core modernization, cutting initial bundle size by 38% and reducing Largest Contentful Paint from 2.8s to 0.9s across 1.4M daily active users.",
        tags: [
          "React 19",
          "Next.js",
          "TypeScript",
          "Performance",
          "Web Vitals",
        ],
      },
      {
        when: "2021 — 2023",
        title: "Senior UI Engineer",
        org: "Kinetic Labs",
        desc: "Designed and implemented a token-driven cross-platform design system utilized by 45+ product teams. Decreased component integration time by 52%.",
        tags: [
          "Design Systems",
          "Tailwind CSS",
          "Framer Motion",
          "Radix UI",
          "Accessibility",
        ],
      },
      {
        when: "2018 — 2021",
        title: "Frontend Developer",
        org: "Aura Creative Studio",
        desc: "Crafted interactive storytelling web apps and editorial experiences. Achieved 99+ Lighthouse performance and accessibility scores across all client deliverables.",
        tags: [
          "JavaScript",
          "CSS Architecture",
          "Canvas",
          "Responsive Web",
          "SVG Animation",
        ],
      },
    ],
    projects: [
      {
        title: "Prism Motion Engine",
        desc: "Engineered a headless spring physics animation orchestrator for reactive web layouts, achieving consistent 60fps renders with zero frame drops during heavy DOM churn.",
        tags: ["TypeScript", "Framer Motion", "Performance", "NPM"],
        link: "https://github.com",
      },
      {
        title: "Hyperion Design System",
        desc: "Unified fragmented component suites into a headless, WCAG 2.1 AAA accessible library that accelerated sprint velocities across 12 product squads by 40%.",
        tags: ["Next.js", "Tailwind CSS", "Storybook", "TypeScript"],
        link: "https://github.com",
      },
      {
        title: "Lumina Telemetry Dashboard",
        desc: "Created a real-time web metrics monitor handling 50k events/sec with canvas fallback, slicing CPU consumption by 64% compared to standard SVG graphs.",
        tags: ["Next.js", "React", "TypeScript", "Data Visualization"],
        link: "https://github.com",
      },
    ],
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  fullstack: {
    label: "Full Stack",
    name: "Alex Vance",
    role: "Staff Full Stack Engineer",
    hello: "Hi, I'm",
    pre: "I build ",
    typed: [
      "resilient distributed web platforms",
      "end-to-end typed applications at scale",
      "event-driven architectures with elegant UIs",
    ],
    email: "alex.vance@example.com",
    cta: "Looking for an engineer who moves effortlessly from low-latency databases to buttery frontends? Let's talk.",
    about: [
      "I am a full stack engineer obsessed with building cohesive, resilient software from edge runtime down to database schema.",
      "My work spans high-throughput serverless microservices, GraphQL federations, and fluid browser applications. I prioritize end-to-end type safety, automated verification, and clean architectural boundaries that let engineering teams move fast without regressions.",
      "Beyond production systems, I research distributed consensus protocols, experiment with local-first databases, and mentor junior engineers.",
    ],
    experience: [
      {
        when: "2023 — Present",
        title: "Principal Full Stack Architect",
        org: "Aether Cloud",
        desc: "Architected real-time synchronization engine processing 40M daily webhook events with 99.99% uptime, dropping API p99 latency from 420ms to 68ms.",
        tags: [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Distributed Systems",
        ],
      },
      {
        when: "2020 — 2023",
        title: "Senior Software Engineer",
        org: "Strata Data Platforms",
        desc: "Built full-stack data analytics pipeline with edge caching that cut operational cloud infrastructure expenditures by $180k annually.",
        tags: ["TypeScript", "GraphQL", "Prisma", "Docker", "Next.js"],
      },
      {
        when: "2017 — 2020",
        title: "Software Engineer",
        org: "Origin Softworks",
        desc: "Delivered REST and WebSocket APIs powering enterprise collaborative tooling, supporting 200,000 concurrent active browser sessions.",
        tags: ["React", "Express", "PostgreSQL", "WebSockets", "Jest"],
      },
    ],
    projects: [
      {
        title: "Chronos Distributed Sync",
        desc: "Created a conflict-free replicated data type (CRDT) engine for collaborative editing, eliminating synchronization conflicts for 100k+ concurrent documents.",
        tags: ["TypeScript", "Node.js", "CRDT", "WebSockets"],
        link: "https://github.com",
      },
      {
        title: "Pulse API Gateway",
        desc: "Implemented an edge-deployed authentication and rate-limiting proxy that reduced backend cold-start bottlenecks by 73%.",
        tags: ["Next.js", "Edge Computing", "Redis", "TypeScript"],
        link: "https://github.com",
      },
      {
        title: "Beacon Fleet Monitor",
        desc: "Engineered full-stack IoT telemetry suite streaming vehicle metrics to an interactive geospatial dashboard with sub-second latency.",
        tags: ["React", "PostgreSQL", "Docker", "Tailwind CSS"],
        link: "https://github.com",
      },
    ],
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
};
