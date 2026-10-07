"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListItem } from "@/components/ui/ListItem";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Experience section rendering work history rows.
 * Wrapped in .list-hover-group for CSS peer dimming.
 * Each row is wrapped in a Reveal motion component that animates on scroll.
 */
export function Experience() {
  const { version } = useVersion();

  return (
    <Section id={SECTION_IDS.EXPERIENCE} aria-label="Experience">
      <SectionHeading>Experience</SectionHeading>

      <div className="list-hover-group flex flex-col">
        {version.experience.map((item, index) => (
          <Reveal key={`${item.org}-${index}`}>
            <ListItem
              leftLabel={item.when}
              title={item.title}
              subtitle={item.org}
              description={item.desc}
              tags={item.tags}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
