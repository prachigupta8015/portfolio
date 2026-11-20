"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Expertise section displaying core competence cards in a responsive grid.
 * Stacks to 1 column on mobile and a 2-column grid (2x2 for four cards) from 768px.
 * Animates siblings into view with Reveal wrappers.
 */
export function Expertise() {
  const { version } = useVersion();

  return (
    <Section id={SECTION_IDS.EXPERTISE} aria-label="Expertise">
      <SectionHeading>Expertise</SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {version.expertise.map((item, index) => (
          <Reveal key={`${item.title}-${index}`} className="h-full">
            <Card className="flex h-full flex-col p-6 sm:p-7">
              <h3 className="text-fg text-[1.15rem] font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted mt-2.5 mb-6 text-[0.95rem] leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto">
                <TagList tags={item.skills} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
