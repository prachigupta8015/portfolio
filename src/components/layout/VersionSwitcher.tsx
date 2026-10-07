"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { VERSIONS } from "@/data/versions";
import { Pill } from "@/components/ui/Pill";

/**
 * VersionSwitcher renders interactive pills for all available portfolio versions.
 * Switching versions re-renders all portfolio content and scrolls to top smoothly.
 */
export function VersionSwitcher() {
  const { key: activeKey, setKey, keys } = useVersion();

  return (
    <div
      role="group"
      aria-label="Portfolio version switcher"
      className="flex flex-wrap items-center gap-2"
    >
      {keys.map((k) => {
        const item = VERSIONS[k];
        if (!item) return null;
        const isActive = activeKey === k;

        return (
          <Pill
            key={k}
            active={isActive}
            onClick={() => setKey(k)}
            aria-pressed={isActive}
          >
            {item.label}
          </Pill>
        );
      })}
    </div>
  );
}
