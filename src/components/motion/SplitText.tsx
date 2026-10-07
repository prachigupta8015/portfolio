"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  splitCharContainerVariants,
  splitCharHeroContainerVariants,
  splitCharItemVariants,
  splitWordContainerVariants,
  splitWordHeadingVariants,
  splitWordParagraphVariants,
  VIEWPORTS,
} from "@/lib/motion";

export interface SplitTextProps {
  text: string;
  mode?: "chars" | "words";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  hero?: boolean;
}

/**
 * SplitText component for cinematic text reveals.
 * Splits text into words and characters with overflow-hidden mask spans
 * and 3D perspective to prevent descender clipping.
 * Plays on scroll down and reverses on scroll up (whileInView with once: false).
 * Falls back to plain text when reduced motion is preferred.
 */
export function SplitText({
  text,
  mode = "chars",
  as: Component = "span",
  className,
  hero = false,
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  // Split into words, preserving spaces
  const words = text.split(" ");

  if (mode === "chars") {
    const containerVariants = hero
      ? splitCharHeroContainerVariants
      : splitCharContainerVariants;

    // Headings use chromatic fringe and 3D perspective
    const charMotionProps = hero
      ? {
          animate: "visible",
          initial: "hidden",
        }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: VIEWPORTS.splitText,
        };

    return (
      <Component className={cn("inline-block", className)} aria-label={text}>
        <motion.span
          className="inline-block"
          variants={containerVariants}
          {...charMotionProps}
          aria-hidden="true"
        >
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="split-mask-span inline-block whitespace-nowrap"
            >
              {Array.from(word).map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  variants={splitCharItemVariants}
                  className="inline-block"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.span>
      </Component>
    );
  }

  // Words mode (paragraphs omit blur/fringe to preserve reading clarity)
  const isParagraph = Component === "p";
  const wordItemVariants = isParagraph
    ? splitWordParagraphVariants
    : splitWordHeadingVariants;

  return (
    <Component className={cn("inline-block", className)} aria-label={text}>
      <motion.span
        className="inline-block"
        variants={splitWordContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORTS.splitText}
        aria-hidden="true"
      >
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="split-mask-span inline-block whitespace-nowrap"
          >
            <motion.span
              variants={wordItemVariants}
              className="inline-block"
              style={{ willChange: "transform, opacity" }}
            >
              {word}
            </motion.span>
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
