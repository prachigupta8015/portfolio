"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";

export interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

/**
 * ScrollToTop floating button fixed at the bottom-right corner.
 * - Dynamically appears when scrolling past the threshold (default 320px).
 * - Smoothly scrolls to the top of the page using Lenis smooth scroll or native window fallback.
 * - Styled with modern glassmorphism, accent hover highlight, and subtle upward micro-bounce.
 */
export function ScrollToTop({
  className,
  threshold = 320,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top of page"
          title="Scroll to top"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.75, y: 16 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.75, y: 16 }
          }
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "group fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full",
            "border border-line bg-[var(--card)]/80 text-fg shadow-lg shadow-black/10 backdrop-blur-md",
            "hover:border-accent hover:text-accent hover:shadow-accent/20",
            "focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
            "transition-colors duration-300 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12",
            className
          )}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-[1.05rem] sm:w-[1.05rem]"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
