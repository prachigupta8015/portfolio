"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const emptySubscribe = () => () => {};

export interface ThemeToggleProps {
  className?: string;
}

/**
 * ThemeToggle button fixed at the top-right corner with Sun and Moon icons.
 * Switches between dark and light themes smoothly with zero hydration mismatch.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div
        className={cn(
          "border-line fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--card)] opacity-0 sm:top-6 sm:right-6",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "border-line text-fg hover:border-accent hover:text-accent focus-visible:ring-accent fixed top-5 right-5 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-[var(--card)]/80 shadow-sm backdrop-blur-md transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none sm:top-6 sm:right-6",
        className
      )}
    >
      {isDark ? (
        <FontAwesomeIcon icon={faSun} className={`transition-transform duration-300 ${isDark ? "rotate-180" : ""}`} />
      ) : (
        <FontAwesomeIcon icon={faMoon}  className={`transition-transform duration-300 ${isDark ? "rotate-180" : ""}`} />
      )}
    </button>
  );
}
