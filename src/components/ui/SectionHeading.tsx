import React from "react";
import { SplitText } from "@/components/motion/SplitText";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  children: string;
  className?: string;
}

/**
 * Shared section heading component styled with h3 typography token.
 * Renders cinematic SplitText with characters reveal mode.
 */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-9 sm:mb-10", className)}>
      <SplitText
        text={children}
        mode="chars"
        as="h3"
        className="text-h3 text-fg leading-[1.02] font-[650] tracking-[-0.04em]"
      />
    </div>
  );
}
