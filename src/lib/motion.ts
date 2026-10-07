/**
 * @file motion.ts
 * Centralized motion presets, variants, easing curves, durations, and viewport settings.
 * Components must import presets from here and never inline magic animation numbers.
 */

import type { Transition, Variants } from "framer-motion";

/** Easing curves specified in design requirements */
export const EASINGS = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  customSmooth: [0.22, 1, 0.36, 1] as const,
  navBezier: [0.2, 0.8, 0.2, 1] as const,
};

/** Durations in seconds */
export const DURATIONS = {
  charReveal: 1.1,
  wordReveal: 0.9,
  heroFade: 1.0,
  rowReveal: 0.9,
  navTransition: 0.4,
  rowHover: 0.35,
};

/** Stagger values in seconds */
export const STAGGERS = {
  charHero: 0.045,
  charHeroDelay: 0.2,
  charDefault: 0.03,
  wordDefault: 0.018,
  heroEntrance: 0.15,
  heroEntranceDelay: 0.9,
};

/** Viewport triggers for scroll-based animations */
export const VIEWPORTS = {
  splitText: {
    once: false,
    margin: "0px 0px -12% 0px",
    amount: 0.6,
  } as const,
  reveal: {
    once: false,
    margin: "0px 0px -10% 0px",
    amount: 0.2,
  } as const,
};

/** Container variant for hero H1 character splitting */
export const splitCharHeroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGERS.charHero,
      delayChildren: STAGGERS.charHeroDelay,
    },
  },
};

/** Container variant for regular character splitting */
export const splitCharContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGERS.charDefault,
    },
  },
};

/** Single character motion variant with chromatic fringe and 3D rotation */
export const splitCharItemVariants: Variants = {
  hidden: {
    y: "115%",
    rotateX: -85,
    opacity: 0,
    filter: "blur(14px)",
    textShadow: "-7px 0 0 rgba(255,45,85,0.85), 7px 0 0 rgba(0,229,255,0.85)",
    transformOrigin: "50% 100% -30px",
  },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
    textShadow: "0px 0 0 rgba(255,45,85,0), 0px 0 0 rgba(0,229,255,0)",
    transition: {
      duration: DURATIONS.charReveal,
      ease: EASINGS.expoOut,
    } as Transition,
  },
};

/** Container variant for word splitting */
export const splitWordContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGERS.wordDefault,
    },
  },
};

/** Word item variant for headings (with blur reveal) */
export const splitWordHeadingVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: DURATIONS.wordReveal,
      ease: EASINGS.customSmooth,
    } as Transition,
  },
};

/** Word item variant for paragraphs (no blur or chromatic fringe on long body text) */
export const splitWordParagraphVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: DURATIONS.wordReveal,
      ease: EASINGS.customSmooth,
    } as Transition,
  },
};

/** Hero entrance container */
export const heroEntranceContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGERS.heroEntrance,
      delayChildren: STAGGERS.heroEntranceDelay,
    },
  },
};

/** Hero entrance child elements (greeting, role line, buttons) */
export const heroEntranceItemVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.heroFade,
      ease: EASINGS.customSmooth,
    } as Transition,
  },
};

/** Reveal component variants for list rows */
export const revealVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.rowReveal,
      ease: EASINGS.customSmooth,
    } as Transition,
  },
};

/** Typewriter timing configuration (milliseconds) */
export const TYPEWRITER_CONFIG = {
  minTypeSpeed: 60,
  maxTypeSpeed: 120,
  deleteSpeed: 28,
  holdDuration: 1800,
  pauseBeforeNext: 400,
} as const;

/** Lenis scroll configuration */
export const LENIS_CONFIG = {
  lerp: 0.085,
  wheelMultiplier: 0.9,
  navScrollDuration: 1.4,
} as const;
