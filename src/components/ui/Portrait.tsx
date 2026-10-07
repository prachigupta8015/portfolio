"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useVersion } from "@/hooks/useVersion";
import { cn } from "@/lib/cn";

export interface PortraitProps {
  photo?: string;
  name?: string;
  className?: string;
}

const BLOB_KEYFRAMES = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 70% 70% 30% / 30% 30% 70% 70%",
  "50% 50% 33% 67% / 55% 27% 73% 45%",
  "40% 60% 60% 40% / 60% 40% 60% 40%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
];

const CIRCLE_RADIUS = "50% 50% 50% 50% / 50% 50% 50% 50%";

/**
 * Portrait component rendering an organic morphing blob photo
 * with Framer Motion idle loop and circle morph on hover/focus.
 */
export function Portrait({
  photo: photoProp,
  name: nameProp,
  className,
}: PortraitProps) {
  const { version } = useVersion();
  const photo = photoProp ?? version.photo;
  const name = nameProp ?? version.name;

  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const initials = name
    ? name
        .split(" ")
        .map((w) => w[0])
        .filter(Boolean)
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "YN";

  const handleMouseEnter = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches &&
      !shouldReduceMotion
    ) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches &&
      !shouldReduceMotion
    ) {
      setIsHovered(false);
    }
  };

  const handleFocus = () => {
    if (!shouldReduceMotion) {
      setIsHovered(true);
    }
  };

  const handleBlur = () => {
    if (!shouldReduceMotion) {
      setIsHovered(false);
    }
  };

  return (
    <div
      tabIndex={0}
      role="img"
      aria-label={`Portrait of ${name}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(
        "group relative aspect-[1/1.05] w-[14rem] shrink-0 cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-accent sm:w-[17rem] md:w-[19rem] min-[861px]:w-[21.5rem] lg:w-[23.5rem]",
        className
      )}
    >
      {/* (1) Outline element with 1px accent border, 0.7 opacity, offset translate */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 border border-accent opacity-75 translate-x-[10px] translate-y-[10px] sm:translate-x-[12px] sm:translate-y-[12px] min-[861px]:translate-x-[16px] min-[861px]:translate-y-[16px]"
        animate={{
          borderRadius: shouldReduceMotion
            ? BLOB_KEYFRAMES[0]
            : isHovered
              ? CIRCLE_RADIUS
              : BLOB_KEYFRAMES,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : isHovered
              ? {
                  type: "spring",
                  stiffness: 110,
                  damping: 13,
                  mass: 0.9,
                  duration: 0.9,
                }
              : {
                  duration: 16,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.35,
                }
        }
      />

      {/* (2) Photo element with overflow hidden and next/image */}
      <motion.div
        className="relative z-10 h-full w-full overflow-hidden shadow-sm"
        animate={{
          borderRadius: shouldReduceMotion
            ? BLOB_KEYFRAMES[0]
            : isHovered
              ? CIRCLE_RADIUS
              : BLOB_KEYFRAMES,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : isHovered
              ? {
                  type: "spring",
                  stiffness: 110,
                  damping: 13,
                  mass: 0.9,
                  duration: 0.9,
                }
              : {
                  duration: 16,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }
        }
      >
        {photo ? (
          <Image
            src={photo}
            alt={`Portrait of ${name}`}
            priority
            fill
            sizes="(max-width: 640px) 14rem, (max-width: 860px) 19rem, 23.5rem"
            className="object-cover object-top grayscale-[0.35] transition-[filter,transform] duration-500 group-hover:scale-[1.04] group-hover:grayscale-0 group-focus:scale-[1.04] group-focus:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#a5b4fc] via-[#c7d2fe] to-[#dbe4ff] text-[#14152a] select-none dark:from-[#353c6e] dark:via-[#222749] dark:to-[#14162b] dark:text-[#ecebf3]">
            <span className="text-5xl font-extrabold tracking-tight sm:text-6xl min-[861px]:text-7xl">
              {initials}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
