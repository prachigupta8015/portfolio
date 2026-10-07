"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

const emptySubscribe = () => () => {};

/**
 * Sun icon SVG for switching to light theme or showing daytime status
 */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

/**
 * Moon icon SVG for switching to dark theme or showing nighttime status
 */
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

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
        <SunIcon className="transition-transform duration-300 hover:rotate-45" />
      ) : (
        <MoonIcon className="transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
