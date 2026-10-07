"use client";

import React, { useSyncExternalStore } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { LENIS_CONFIG } from "@/lib/motion";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => {
    mq.removeEventListener("change", callback);
  };
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getServerSnapshot = () => false;

/**
 * Provider wrapping the application in Lenis smooth scrolling.
 * Disables Lenis completely if the user prefers reduced motion.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: LENIS_CONFIG.lerp,
        wheelMultiplier: LENIS_CONFIG.wheelMultiplier,
      }}
    >
      {children}
    </ReactLenis>
  );
}

/**
 * Hook to scroll to target selector or element with duration 1.4s via Lenis,
 * or native smooth scroll if Lenis is unavailable.
 */
export function useScrollTo() {
  const lenis = useLenis();

  return (target: string | HTMLElement) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: LENIS_CONFIG.navScrollDuration });
    } else {
      const el =
        typeof target === "string" ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
}
