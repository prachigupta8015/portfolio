"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Testimonials / Kind words section rendering peer recommendations.
 * Automatically hidden if the active portfolio version has an empty testimonials array.
 * Uses Cards with quotes in body size and reviewer metadata matching Picture 5.
 */
export function Testimonials() {
  const { version } = useVersion();
  const testimonials = version.testimonials || [];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section id={SECTION_IDS.TESTIMONIALS} aria-label="Kind words">
      <SectionHeading>Kind words</SectionHeading>

      <div className="flex flex-col gap-5">
        {testimonials.map((item, index) => (
          <Reveal key={`${item.name}-${index}`} className="w-full">
            <Card className="flex flex-col p-6">
              <p className="text-muted text-[1.02rem] leading-[1.7]">
                {item.quote}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-3 text-[0.92rem]">
                <span className="text-fg font-semibold">{item.name},</span>
                <span className="text-muted">
                  {item.role}, {item.org}
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
