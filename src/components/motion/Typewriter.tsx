"use client";

import React from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/cn";

export interface TypewriterProps {
  phrases: string[];
  className?: string;
}

/**
 * Typewriter text component.
 * Uses useTypewriter hook to cycle phrases character-by-character
 * and attaches a custom CSS blinking caret.
 */
export function Typewriter({ phrases, className }: TypewriterProps) {
  const text = useTypewriter(phrases);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* Screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <b className="text-fg font-medium" aria-hidden="true">
        {text}
      </b>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
