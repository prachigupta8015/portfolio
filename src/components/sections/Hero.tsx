"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useVersion } from "@/hooks/useVersion";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { SplitText } from "@/components/motion/SplitText";
import { Typewriter } from "@/components/motion/Typewriter";
import { Button } from "@/components/ui/Button";
import {
  heroEntranceContainerVariants,
  heroEntranceItemVariants,
} from "@/lib/motion";
import { Portrait } from "@/components/ui/Portrait";

/**
 * Hero section with layered decorative parallax, chromatic character reveal,
 * looped typewriter role line, responsive morphing blob Portrait, and smooth scroll CTA buttons.
 */
export function Hero() {
  const { version } = useVersion();
  const heroRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-[clamp(1.25rem,5vw,4rem)]"
    >
      {/* Decorative Layer 1: Background Grid (speed 12) */}
      <div aria-hidden="true" className="pointer-events-none">
        <ParallaxLayer
          speed={12}
          targetRef={heroRef}
          className="absolute inset-[-10%_0] z-0"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse at 60% 40%, #000 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 60% 40%, #000 0%, transparent 70%)",
            }}
          />
        </ParallaxLayer>

        {/* Decorative Layer 2: Orb 1 (speed -18) */}
        <ParallaxLayer
          speed={-18}
          targetRef={heroRef}
          className="absolute -top-[20vmax] -right-[15vmax] z-0"
        >
          <div
            className="h-[60vmax] w-[60vmax] rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 38%, transparent) 0%, transparent 62%)",
            }}
          />
        </ParallaxLayer>

        {/* Decorative Layer 3: Orb 2 (speed -30) */}
        <ParallaxLayer
          speed={-30}
          targetRef={heroRef}
          className="absolute -bottom-[18vmax] -left-[12vmax] z-0"
        >
          <div
            className="h-[40vmax] w-[40vmax] rounded-full blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 62%)",
            }}
          />
        </ParallaxLayer>

        {/* Decorative Layer 4: Watermark (speed -8) */}
        <ParallaxLayer
          speed={-8}
          targetRef={heroRef}
          className="absolute -right-[2vw] -bottom-[3vw] z-0"
        >
          <span
            className="block leading-none font-extrabold tracking-[-0.04em] whitespace-nowrap select-none"
            style={{
              fontSize: "24vw",
              color: "transparent",
              WebkitTextStroke: "1px var(--line)",
            }}
          >
            {version.label}
          </span>
        </ParallaxLayer>
      </div>

      {/* Hero interactive content block */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
                willChange: "transform, opacity",
              }
        }
        variants={heroEntranceContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col-reverse items-start justify-between gap-6 py-8 sm:gap-8 sm:py-12 min-[861px]:flex-row min-[861px]:items-center min-[861px]:gap-12 min-[861px]:py-16"
      >
        {/* Text column (Desktop left / Mobile below portrait) */}
        <div className="relative z-10 flex-1 min-w-0">
          {/* Greeting line */}
          <motion.p
            variants={heroEntranceItemVariants}
            className="text-muted mb-3 text-[1.15rem] font-medium select-none md:text-[1.35rem]"
          >
            {version.hello}
          </motion.p>

          {/* H1 Name with SplitText characters reveal */}
          <div>
            <SplitText
              text={version.name}
              mode="chars"
              as="h1"
              hero
              className="text-hero text-[clamp(3rem,10.5vw,9rem)] text-fg leading-[0.95] font-bold tracking-[-0.045em]"
            />
          </div>

          {/* Role line with dynamic typewriter and blinking caret */}
          <motion.div
            variants={heroEntranceItemVariants}
            className="text-muted text-role mt-7 flex min-h-[1.6em] flex-wrap items-center gap-1.5 leading-snug"
          >
            <span className="text-muted font-normal">{version.pre}</span>
            <Typewriter phrases={version.typed} />
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={heroEntranceItemVariants}
            className="mt-10 flex flex-wrap items-center gap-[0.9rem]"
          >
            <Button variant="primary" href="#projects">
              View work
            </Button>
            <Button variant="outline" href="#contact">
              Get in touch
            </Button>
          </motion.div>
        </div>

        {/* Portrait column (Desktop right beside Your Name / Mobile above Your Name) */}
        <motion.div
          variants={heroEntranceItemVariants}
          className="shrink-0 self-start min-[861px]:self-center"
        >
          <Portrait name={version.name} photo={version.photo} />
        </motion.div>
      </motion.div>
    </header>
  );
}
