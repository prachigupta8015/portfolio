import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and merges overlapping Tailwind utility classes.
 * @param inputs - Class names, expressions, or class arrays.
 * @returns Clean, resolved class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
