import React from "react";
import { cn } from "@/lib/cn";

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * Shared section container providing consistent scroll margins and vertical rhythm.
 * @param id - Section DOM id for navigation anchors and IntersectionObserver.
 * @param children - Section inner contents.
 */
export function Section({
  id,
  children,
  className,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("mb-32 scroll-mt-12", className)}
    >
      {children}
    </section>
  );
}
