import { useEffect, useState } from "react";
import { TYPEWRITER_CONFIG } from "@/lib/motion";

/**
 * Custom hook to execute a looped typewriter effect over a list of phrases.
 * Supports randomized typing speeds, fixed delete speeds, hold intervals,
 * and clean cancellation on phrases change or unmount.
 * Respects prefers-reduced-motion by returning the initial phrase statically.
 *
 * @param phrases - Array of string phrases to cycle through.
 * @returns Currently displayed substring.
 */
export function useTypewriter(phrases: string[]): string {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    if (!phrases || phrases.length === 0) {
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const id = setTimeout(() => {
        setDisplayedText(phrases[0] ?? "");
      }, 0);
      return () => clearTimeout(id);
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const step = () => {
      const currentPhrase = phrases[phraseIndex] || "";

      if (!isDeleting) {
        // Typing forward
        charIndex += 1;
        setDisplayedText(currentPhrase.slice(0, charIndex));

        if (charIndex >= currentPhrase.length) {
          // Reached end of current phrase, pause at full text
          isDeleting = true;
          timeoutId = setTimeout(step, TYPEWRITER_CONFIG.holdDuration);
        } else {
          // Randomized typing speed: 60ms to 120ms
          const randomSpeed =
            Math.floor(
              Math.random() *
                (TYPEWRITER_CONFIG.maxTypeSpeed -
                  TYPEWRITER_CONFIG.minTypeSpeed +
                  1)
            ) + TYPEWRITER_CONFIG.minTypeSpeed;
          timeoutId = setTimeout(step, randomSpeed);
        }
      } else {
        // Deleting backward
        charIndex -= 1;
        setDisplayedText(currentPhrase.slice(0, charIndex));

        if (charIndex <= 0) {
          // Entire phrase deleted, pause before next phrase
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(step, TYPEWRITER_CONFIG.pauseBeforeNext);
        } else {
          // Delete speed: 28ms per character
          timeoutId = setTimeout(step, TYPEWRITER_CONFIG.deleteSpeed);
        }
      }
    };

    // Initial timeout before typing starts
    timeoutId = setTimeout(step, TYPEWRITER_CONFIG.minTypeSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [phrases]);

  return displayedText;
}
