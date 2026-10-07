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
 * - Scroll reveal animation per row with <Reveal>.
 */
export function Projects() {
  const { version } = useVersion();
  const projects = version.projects || [];

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
    </Section>
  );
}
