"use client";

import React from "react";
import { useVersion } from "@/hooks/useVersion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

export interface StackMarqueeProps {
  className?: string;
}

/**
 * StackMarquee renders an ultra-smooth, slow infinite horizontal scrolling strip of technologies.
 *
 * Responsiveness & Device Adaptations:
 * - Responsive font scale (text-[1.05rem] on mobile, text-[1.2rem] on tablets, text-[1.35rem] on desktop).
 * - Responsive gaps (gap-6 pr-6 on mobile, gap-8 pr-8 on tablets, gap-12 pr-12 on desktop).
 * - Two matching tracks with identical padding-right to eliminate loop seam / jump.
 * - Pauses on hover (desktop cursor) and on active touch (mobile tap/hold).
 * - Responsive edge vignettes via CSS mask-image gradient.
 * - Graceful fallback to responsive flex-wrap grid under prefers-reduced-motion.
 * - Accessible: second duplicate track has aria-hidden="true" so screen readers only read items once.
 */
export function StackMarquee({ className }: StackMarqueeProps) {
  const { version } = useVersion();
  const stack = version.stack || [];
  const groups = version.skillGroups || [];

  if (stack.length === 0) return null;

  // Duplicate items if stack is short to ensure each track comfortably exceeds viewport width
  const trackItems = stack.length < 8 ? [...stack, ...stack] : stack;

  return (
    <Section
      id={SECTION_IDS.STACK}
      aria-label="Technologies"
      className={cn("overflow-hidden", className)}
    >
      <SectionHeading>Skills</SectionHeading>

      <div
        className={cn(
          "marquee-container group relative w-full overflow-hidden py-3 select-none sm:py-4",
          className
        )}
      >
        <div className="marquee-wrapper flex w-max items-center">
          {/* Primary Track (Announced by screen readers) */}
          <div className="marquee-track flex shrink-0 items-center gap-6 pr-6 min-[861px]:gap-12 min-[861px]:pr-12 sm:gap-8 sm:pr-8">
            {trackItems.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="text-muted hover:text-accent cursor-default text-[1.05rem] font-medium whitespace-nowrap transition-colors duration-300 min-[861px]:text-[1.35rem] sm:text-[1.2rem]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Duplicate Track for seamless infinite loop (Hidden from assistive tech) */}
          <div
            aria-hidden="true"
            className="marquee-track flex shrink-0 items-center gap-6 pr-6 min-[861px]:gap-12 min-[861px]:pr-12 sm:gap-8 sm:pr-8"
          >
            {trackItems.map((tech, index) => (
              <span
                key={`dup-${tech}-${index}`}
                className="text-muted hover:text-accent cursor-default text-[1.05rem] font-medium whitespace-nowrap transition-colors duration-300 min-[861px]:text-[1.35rem] sm:text-[1.2rem]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized skills (mirrors the résumé): one card per category,
          items as a clean dot-separated list instead of chips. */}
      {groups.length > 0 && (
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {groups.map((group) => (
            <li
              key={group.category}
              className="h-full sm:[&:last-child:nth-child(odd)]:col-span-2"
            >
              <Reveal className="h-full">
                <div className="border-line hover:border-accent h-full rounded-[14px] border bg-[var(--card)] p-5 transition-colors duration-300">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-fg text-[1rem] font-semibold tracking-tight">
                      {group.category}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-muted text-[0.78rem] tabular-nums"
                    >
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="bg-accent mt-2.5 mb-3.5 block h-[2px] w-8 rounded-full"
                  />
                  <ul className="text-muted flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.93rem] leading-snug">
                    {group.items.map((item, i) => (
                      <li key={item} className="flex items-center gap-2">
                        {i > 0 && (
                          <span
                            aria-hidden="true"
                            className="bg-accent h-1 w-1 rounded-full opacity-60"
                          />
                        )}
                        <span className="hover:text-fg transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
