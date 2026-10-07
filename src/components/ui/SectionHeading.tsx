import React from "react";
import { SplitText } from "@/components/motion/SplitText";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

/**
 * Shared section heading component styled with h1 typography token.
 * Renders cinematic SplitText with characters reveal mode.
 */
export function SectionHeading({
  children,
  className,
  as = "h1",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-9 sm:mb-11", className)}>
      <SplitText
        text={children}
        mode="chars"
        as={as}
        className="text-h1 text-[clamp(2.85rem,6.5vw,3.2rem)] text-fg leading-[1.02] font-bold tracking-[-0.04em]"
      />
    </div>
  );
}
