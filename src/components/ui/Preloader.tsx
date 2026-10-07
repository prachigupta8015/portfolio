"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useVersion } from "@/hooks/useVersion";

const BLOB_KEYFRAMES = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 70% 70% 30% / 30% 30% 70% 70%",
  "50% 50% 33% 67% / 55% 27% 73% 45%",
  "40% 60% 60% 40% / 60% 40% 60% 40%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
];

export interface PreloaderProps {
  onComplete?: () => void;
}

interface TargetCoords {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Preloader: Blob that becomes your portrait.
 * A small organic blob pops in at screen center, morphs through shapes,
 * then glides across the viewport and seamlessly settles into the Hero portrait position.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const { version } = useVersion();
  const photo = version.photo;
  const name = version.name || "Prachi Gupta";
  const shouldReduceMotion = useReducedMotion();

  const [phase, setPhase] = useState<"center" | "travelling" | "settled">(
    "center"
  );
  const [coords, setCoords] = useState<TargetCoords | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initials = name
    ? name
        .split(" ")
        .map((w) => w[0])
        .filter(Boolean)
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "PG";

  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        setPhase("settled");
        onComplete?.();
      }, 0);
      return () => clearTimeout(timer);
    }

    // Lock body scrolling during the fluid intro
    document.body.style.overflow = "hidden";

    // Small blob size at the center scheduled on next frame
    const startFrame = requestAnimationFrame(() => {
      const smallW = Math.min(130, window.innerWidth * 0.3);
      const smallH = smallW * 1.05;
      const startX = window.innerWidth / 2 - smallW / 2;
      const startY = window.innerHeight / 2 - smallH / 2;

      setCoords({
        x: startX,
        y: startY,
        width: smallW,
        height: smallH,
      });
    });

    // Morph at center for 1.1s, then initiate travel across to the portrait spot
    const travelTimer = setTimeout(() => {
      const targetEl = document.getElementById("hero-portrait");
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setCoords({
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
          });
        }
      }
      setPhase("travelling");
    }, 1150);

    // After travel completes (900ms duration), settle and hand off
    const settleTimer = setTimeout(() => {
      setPhase("settled");
      document.body.style.overflow = "";
      onComplete?.();
    }, 2150);

    return () => {
      cancelAnimationFrame(startFrame);
      clearTimeout(travelTimer);
      clearTimeout(settleTimer);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === "settled") {
    return null;
  }

  const isTravelling = phase === "travelling";

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
      >
        {/* Fullscreen Backdrop: Fades to 0 as the blob travels to its destination */}
        <motion.div
          className="absolute inset-0 z-0 bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          animate={{ opacity: isTravelling ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Ambient luminous glow following the blob */}
        {coords && (
          <motion.div
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            animate={{
              left: coords.x + coords.width / 2,
              top: coords.y + coords.height / 2,
              width: coords.width * 2,
              height: coords.height * 2,
              opacity: isTravelling ? 0 : 0.45,
            }}
            transition={{
              duration: isTravelling ? 0.95 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 60%, transparent) 0%, transparent 70%)",
            }}
          />
        )}

        {/* The Morphing & Travelling Blob */}
        {coords && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              left: coords.x,
              top: coords.y,
              width: coords.width,
              height: coords.height,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              left: coords.x,
              top: coords.y,
              width: coords.width,
              height: coords.height,
            }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 220,
                damping: 18,
                duration: 0.4,
              },
              opacity: { duration: 0.25 },
              left: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              top: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              width: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              height: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute z-20 aspect-[1/1.05]"
          >
            {/* Outline element with 1px accent border, delayed morph */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 border border-accent opacity-75"
              style={{
                transform: isTravelling
                  ? "translate(14px, 14px)"
                  : "translate(8px, 8px)",
                transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              animate={{
                borderRadius: BLOB_KEYFRAMES,
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.35,
              }}
            />

            {/* Photo / Monogram core with continuous organic morph */}
            <motion.div
              className="relative z-10 h-full w-full overflow-hidden shadow-2xl"
              animate={{
                borderRadius: BLOB_KEYFRAMES,
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={`Portrait of ${name}`}
                  priority
                  fill
                  sizes="23.5rem"
                  className="object-cover object-top grayscale-[0.35] transition-[filter] duration-500"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#a5b4fc] via-[#c7d2fe] to-[#dbe4ff] text-[#14152a] dark:from-[#353c6e] dark:via-[#222749] dark:to-[#14162b] dark:text-[#ecebf3]">
                  <span className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                    {initials}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
