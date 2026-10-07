"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { StatItem } from "@/data/types";
import { cn } from "@/lib/cn";
import { EASINGS } from "@/lib/motion";

interface StatCounterProps {
  value: string;
}

/**
 * Counts up numeric stat values when entering the viewport.
 * Preserves suffixes (%, +, ms) and decimals, bypassing animation under reduced motion.
 */
function StatCounter({ value }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (shouldReduceMotion || !inView) return;

    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const numericStr = match[2] || "";
    const suffix = match[3] || "";
    const target = parseFloat(numericStr);

    if (isNaN(target)) return;

    const isDecimal = numericStr.includes(".");
    const decimalPlaces = isDecimal ? numericStr.split(".")[1]?.length || 0 : 0;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASINGS.expoOut,
      onUpdate: (latest) => {
        const formatted = isDecimal
          ? latest.toFixed(decimalPlaces)
          : Math.round(latest).toString();
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, value, shouldReduceMotion]);

  return <span ref={ref}>{displayValue}</span>;
}

export interface StatsStripProps {
  stats: StatItem[];
  className?: string;
}

/**
 * StatsStrip component rendering key performance metrics.
 * Large text-h3 values with muted labels, matching the clean minimalist layout.
 */
export function StatsStrip({ stats, className }: StatsStripProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-8 pt-8 min-[861px]:grid-cols-4 min-[861px]:gap-12",
        className
      )}
    >
      {stats.map((stat, idx) => (
        <div key={`${stat.label}-${idx}`} className="flex flex-col">
          <span className="text-h3 text-fg leading-none font-[650] tracking-[-0.035em]">
            <StatCounter value={stat.value} />
          </span>
          <span className="text-muted mt-2.5 text-[0.88rem] leading-snug">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
