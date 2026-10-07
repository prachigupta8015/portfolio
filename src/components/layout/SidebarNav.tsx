"use client";

import React from "react";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollTo } from "@/components/providers/SmoothScrollProvider";

const SECTION_ID_LIST = [
  SECTION_IDS.ABOUT,
  SECTION_IDS.EXPERIENCE,
  SECTION_IDS.PROJECTS,
  SECTION_IDS.CONTACT,
] as const;

/**
 * Sidebar navigation displaying section links with animated horizontal indicators.
 * Indicates active section via useActiveSection IntersectionObserver hook.
 */
export function SidebarNav() {
  const activeId = useActiveSection(SECTION_ID_LIST);
  const scrollTo = useScrollTo();

  return (
    <nav
      aria-label="Portfolio sections"
      className="mt-12 flex flex-col gap-[0.9rem]"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            data-active={isActive}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.href);
            }}
            className="nav-link-indicator py-1 text-[0.95rem] font-medium tracking-wide select-none"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
