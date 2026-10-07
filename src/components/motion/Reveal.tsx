"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealVariants, VIEWPORTS } from "@/lib/motion";
import { cn } from "@/lib/cn";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reveal wrapper component for list items and cards.
 * Triggers on scroll down and reverses on scroll up using whileInView.
 * Under reduced motion preferences, motion transforms are bypassed.
 */
export function Reveal({ children, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORTS.reveal}
      className={cn("w-full", className)}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
