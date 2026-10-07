"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { SidebarNav } from "./SidebarNav";
import { VersionSwitcher } from "./VersionSwitcher";

/**
 * GitHub vector icon
 */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * LinkedIn vector icon
 */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * Sidebar component rendered in the two-column layout.
 * Sticky on desktop screens with 100svh height, collapses to static auto-height on mobile (<= 860px).
 * Displays name, role, section navigation, version switcher, and social icon buttons.
 */
export function Sidebar() {
  const { version } = useVersion();
  const socials = version.socials || {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  };

  return (
    <aside className="static flex shrink-0 flex-col justify-between py-8 min-[861px]:sticky min-[861px]:top-0 min-[861px]:h-[100svh] min-[861px]:self-start min-[861px]:py-20 min-[861px]:pb-12">
      {/* Top area: Name, Role, Nav */}
      <div>
        <h2 className="text-fg text-[1.9rem] leading-tight font-bold tracking-[-0.03em]">
          {version.name}
        </h2>
        <p className="text-muted mt-1 text-[1.05rem] leading-normal font-normal">
          {version.role}
        </p>

        {/* Navigation hidden on screens <= 860px */}
        <div className="hidden min-[861px]:block">
          <SidebarNav />
        </div>
      </div>

      {/* Bottom area: Version switcher pills & Social icons */}
      <div className="mt-12 flex flex-col gap-6 min-[861px]:mt-0">
        <div>
          <span className="text-muted mb-2.5 block text-[0.8rem] tracking-wider uppercase">
            Specialization
          </span>
          <VersionSwitcher />
        </div>

        {/* Social Icons row (GitHub & LinkedIn) */}
        <div className="text-muted flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-accent -m-1 p-1 transition-colors duration-300"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-accent -m-1 p-1 transition-colors duration-300"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
