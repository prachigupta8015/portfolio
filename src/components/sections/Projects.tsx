"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListItem } from "@/components/ui/ListItem";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Projects section displaying featured work entries.
 * Utilizes the identical ListItem component as Experience, rendered as outbound links.
 * Wrapped in Reveal motion components and .list-hover-group for CSS dimming.
 */
export function Projects() {
  const { version } = useVersion();

  return (
    <Section id={SECTION_IDS.PROJECTS} aria-label="Projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="list-hover-group flex flex-col">
        {version.projects.map((project, index) => (
          <Reveal key={`${project.title}-${index}`}>
            <ListItem
              leftLabel="Project"
              title={project.title}
              description={project.desc}
              tags={project.tags}
              href={project.link}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
