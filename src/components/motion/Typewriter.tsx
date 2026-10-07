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
      <b className="text-fg font-medium">{text}</b>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
