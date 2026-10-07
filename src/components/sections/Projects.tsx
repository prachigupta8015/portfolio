"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListItem } from "@/components/ui/ListItem";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Projects section rendering a vertical list of project rows using the universal ListItem pattern.
 *
 * Features:
 * - List rows with 10rem 16:9 thumbnail and 1fr content on desktop (stacks below 860px).
 * - Full row links to project URLs with noopener noreferrer.
 * - CSS peer-dimming via .list-hover-group (unhovered rows dim to 0.45 opacity).
 * - "View full project archive" footer link with nudging right arrow.
 * - Scroll reveal animation per row with <Reveal>.
 */
export function Projects() {
  const { version } = useVersion();
  const projects = version.projects || [];
  const archiveUrl =
    version.archiveUrl || version.socials?.github || "https://github.com";

  return (
    <Section id={SECTION_IDS.PROJECTS} aria-label="Projects">
      <SectionHeading>Projects</SectionHeading>

      {/* Vertical list of rows with peer dimming on hover */}
      <div className="list-hover-group flex flex-col">
        {projects.map((project, index) => (
          <Reveal key={`${project.title}-${index}`}>
            <ListItem
              title={project.title}
              description={project.desc}
              tags={project.tags}
              href={project.link}
              image={project.image}
              meta={project.meta}
            />
          </Reveal>
        ))}
      </div>

      {/* Archive link under the list */}
      <div className="mt-8">
        <a
          href={archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-fg hover:text-accent inline-flex items-center gap-2 text-[0.98rem] font-medium transition-colors duration-300 focus-visible:outline-none"
        >
          <span>View full project archive</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-[4px]"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
