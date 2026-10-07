"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PortfolioVersion, VersionContextType } from "@/data/types";
import { VERSIONS } from "@/data/versions";
import { DEFAULT_VERSION_KEY, STORAGE_KEY_VERSION } from "@/lib/constants";

export const VersionContext = createContext<VersionContextType | undefined>(
  undefined
);

/**
 * VersionProvider component manages the active portfolio version state.
 * Guarantees SSR / client hydration parity by mounting with DEFAULT_VERSION_KEY
 * and syncing with localStorage only after mount.
 */
export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [key, setKeyState] = useState<string>(DEFAULT_VERSION_KEY);
  const keys = Object.keys(VERSIONS);

  // Sync with localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY_VERSION);
      if (stored && VERSIONS[stored]) {
        setTimeout(() => {
          setKeyState(stored);
        }, 0);
      } else if (stored) {
        window.localStorage.removeItem(STORAGE_KEY_VERSION);
      }
    } catch {
      // Ignore localStorage access failures (e.g. private mode / security restrictions)
    }
  }, []);

  const setKey = (newKey: string) => {
    if (!VERSIONS[newKey]) return;
    setKeyState(newKey);
    try {
      window.localStorage.setItem(STORAGE_KEY_VERSION, newKey);
    } catch {
      // Ignore storage write failure
    }
    // Switching versions scrolls to the top smoothly
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeVersion: PortfolioVersion =
    VERSIONS[key] || VERSIONS[DEFAULT_VERSION_KEY];

  return (
    <VersionContext.Provider
      value={{
        key,
        version: activeVersion,
        setKey,
        keys,
      }}
    >
      {children}
    </VersionContext.Provider>
  );
}

/**
 * Hook to consume current portfolio version context.
 * @throws Error if used outside VersionProvider
 */
export function useVersion(): VersionContextType {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
}
