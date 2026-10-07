import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-hero",
        "text-h1",
        "text-h3",
        "text-role",
        "text-cta",
      ],
      "text-color": [
        "text-bg",
        "text-fg",
        "text-muted",
        "text-accent",
        "text-line",
        "text-card",
      ],
    },
  },
});

/**
 * Combines conditional class names and merges overlapping Tailwind utility classes.
 * Preserves custom typography and color utility tokens.
 * @param inputs - Class names, expressions, or class arrays.
 * @returns Clean, resolved class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}

