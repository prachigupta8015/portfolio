"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListItem } from "@/components/ui/ListItem";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Education section displaying academic degrees and industry certifications.
 * Reuses the universal ListItem component with Reveal motion.
 */
export function Education() {
  const { version } = useVersion();
  const education = version.education || [];

  if (education.length === 0) return null;

  return (
    <Section id={SECTION_IDS.EDUCATION} aria-label="Education">
      <SectionHeading>Education</SectionHeading>

      <div className="list-hover-group flex flex-col">
        {education.map((item, index) => (
          <Reveal key={`${item.title}-${index}`}>
            <ListItem
              leftLabel={item.period}
              title={item.title}
              subtitle={item.org}
              description={item.note || ""}
              tags={[]}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
