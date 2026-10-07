"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitText } from "@/components/motion/SplitText";
import { SECTION_IDS } from "@/lib/constants";

/**
 * About section displaying narrative bio paragraphs.
 * Paragraphs animate using SplitText in words mode.
 * The introductory paragraph is emphasized at 1.25rem in foreground color.
 */
export function About() {
  const { version } = useVersion();
  const [lead, p2, p3] = version.about;

  return (
    <Section id={SECTION_IDS.ABOUT} aria-label="About">
      <SectionHeading>About</SectionHeading>

      <div className="flex max-w-[60ch] flex-col gap-6">
        {lead && (
          <SplitText
            text={lead}
            mode="words"
            as="p"
            className="text-fg text-[1.25rem] leading-[1.65] font-normal"
          />
        )}

        {p2 && (
          <SplitText
            text={p2}
            mode="words"
            as="p"
            className="text-muted text-[1.05rem] leading-[1.7]"
          />
        )}

        {p3 && (
          <SplitText
            text={p3}
            mode="words"
            as="p"
            className="text-muted text-[1.05rem] leading-[1.7]"
          />
        )}
      </div>
    </Section>
  );
}
