"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Contact section providing communication channels, availability status badge,
 * direct email link, resume download button, and footer copyright.
 */
export function Contact() {
  const { version } = useVersion();
  const currentYear = 2026;

  return (
    <Section id={SECTION_IDS.CONTACT} aria-label="Contact" className="mb-16">
      <SectionHeading>Let&apos;s talk</SectionHeading>

      {/* Availability Status Badge */}
      {version.availability && (
        <div className="mb-6">
          <AvailabilityBadge
            text={version.availability.text}
            open={version.availability.open}
          />
        </div>
      )}

      <p className="text-muted mb-8 max-w-[55ch] text-[1.05rem] leading-relaxed">
        {version.cta}
      </p>

      {/* Prominent CTA email link */}
      <div className="mb-8">
        <a
          href={`mailto:${version.email}`}
          className="text-cta text-fg border-line hover:border-accent hover:text-accent inline-block border-b pb-1 font-semibold break-all transition-colors duration-300"
        >
          {version.email}
        </a>
      </div>

      {/* Resume CTA */}
      <div className="mb-20">
        <Button variant="outline" href={version.resumeUrl || "#"} external>
          Download résumé
        </Button>
      </div>

      {/* Semantic footer note */}
      <footer className="border-line text-muted flex flex-col items-baseline justify-between gap-4 border-t pt-12 text-[0.85rem] sm:flex-row">
        <span>
          Designed &amp; built with Next.js, Tailwind CSS &amp; Framer Motion.
        </span>
        <span>
          &copy; {currentYear} {version.name}.
        </span>
      </footer>
    </Section>
  );
}
