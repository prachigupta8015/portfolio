"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { SidebarNav } from "./SidebarNav";
import { VersionSwitcher } from "./VersionSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-accent -m-1 p-1 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </aside>
  );
}
