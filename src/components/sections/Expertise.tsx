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
 * Expertise section displaying 3 core competence cards in a responsive grid.
 * Stacks to 1 column on mobile and 3 columns on desktop screens.
 * Animates siblings into view with Reveal wrappers.
 */
export function Expertise() {
  const { version } = useVersion();

  return (
    <Section id={SECTION_IDS.EXPERTISE} aria-label="Expertise">
      <SectionHeading>Expertise</SectionHeading>

      <div className="grid grid-cols-1 gap-5 min-[861px]:grid-cols-3">
        {version.expertise.map((item, index) => (
          <Reveal key={`${item.title}-${index}`} className="h-full">
            <Card className="flex h-full flex-col p-6">
              <h4 className="text-fg text-[1.15rem] font-semibold tracking-tight">
                {item.title}
              </h4>
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
