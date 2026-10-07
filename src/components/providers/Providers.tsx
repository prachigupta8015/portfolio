"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { VersionProvider } from "./VersionProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Root providers composer:
 * - ThemeProvider (next-themes: data-theme attribute, system default)
 * - MotionConfig (framer-motion with reducedMotion="user")
 * - SmoothScrollProvider (Lenis with reduced-motion fallback)
 * - VersionProvider (multi-version portfolio state management)
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <MotionConfig reducedMotion="user">
        <SmoothScrollProvider>
          <VersionProvider>{children}</VersionProvider>
        </SmoothScrollProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
