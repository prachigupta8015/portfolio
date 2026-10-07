"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/cn";

export interface ParallaxLayerProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
}

/**
 * ParallaxLayer maps target scroll progress onto vertical translation.
 * Uses hardware-accelerated transforms without triggering layout recalculations.
 * Bypasses transform under prefers-reduced-motion.
 */
export function ParallaxLayer({
  children,
  speed,
  className,
  targetRef,
}: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 4}%`]);

  if (shouldReduceMotion) {
    return (
      <div className={cn("pointer-events-none select-none", className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      style={{ y, willChange: "transform" }}
      className={cn("pointer-events-none select-none", className)}
    >
      {children}
    </motion.div>
  );
}
