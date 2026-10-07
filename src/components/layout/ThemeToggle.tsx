"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Pill } from "@/components/ui/Pill";

const emptySubscribe = () => () => {};

/**
 * ThemeToggle component that switches between light and dark modes.
 * Uses useSyncExternalStore to avoid hydration mismatch and setState-in-effect.
 */
export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <Pill active={false} aria-label="Toggle theme" tabIndex={-1}>
        Theme
      </Pill>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Pill
      onClick={handleToggle}
      active={false}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      Theme
    </Pill>
  );
}
