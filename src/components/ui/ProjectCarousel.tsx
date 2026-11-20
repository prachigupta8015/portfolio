"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";

export interface ProjectCarouselProps {
  images: string[];
  title: string;
  imagePosition?: "top" | "center";
  /** Hide prev/next/dot buttons, e.g. when the carousel sits inside an <a>. */
  interactive?: boolean;
  className?: string;
}

/** Time each slide stays on screen while autoplaying (ms). */
const AUTOPLAY_MS = 3500;

/**
 * Project screenshot carousel.
 *
 * - Native horizontal scroll-snap: swipe on touch, trackpad / shift-wheel on desktop.
 * - Prev / next arrows (shown on hover or focus on desktop, always on touch) and dot indicators.
 * - Autoplays only while visible, pauses on hover / focus, and never under prefers-reduced-motion.
 */
export function ProjectCarousel({
  images,
  title,
  imagePosition = "top",
  interactive = true,
  className,
}: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = images.length;

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const next = (index + count) % count;
      track.scrollTo({
        left: next * track.clientWidth,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [count, reduceMotion]
  );

  // Keep the active dot in sync with manual swipes / scrolls.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    if (index !== active) setActive(index);
  };

  // Only autoplay while the carousel is on screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count < 2 || paused || !inView || reduceMotion) return;
    const id = window.setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, count, paused, inView, reduceMotion, goTo]);

  if (count === 0) return null;

  const arrowClass =
    "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-[0.8rem] text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-black/65 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/carousel:opacity-100";

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      className={cn(
        "group/carousel border-line group-hover:border-accent hover:border-accent relative overflow-hidden rounded-[12px] border bg-[var(--card)] transition-colors duration-300",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        data-lenis-prevent-horizontal
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => {
          const img = (
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1} of ${count}`}
              fill
              sizes="(max-width: 860px) 20rem, 15rem"
              loading="lazy"
              draggable={false}
              className={cn(
                "object-cover transition-transform duration-500 ease-out",
                imagePosition === "center" ? "object-center" : "object-top"
              )}
            />
          );
          return (
            <div
              key={src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== active}
              className="relative h-full w-full shrink-0 snap-center"
            >
              {img}
            </div>
          );
        })}
      </div>

      {/* Bottom fade so the dots stay readable on light screenshots */}
      {count > 1 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/45 to-transparent"
        />
      )}

      {count > 1 && interactive && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous screenshot"
            className={cn(arrowClass, "left-2")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next screenshot"
            className={cn(arrowClass, "right-2")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-2.5 z-10 flex items-center justify-center gap-1.5">
          {images.map((src, i) =>
            interactive ? (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === active}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  i === active ? "w-5 bg-white" : "w-1.5 bg-white/55 hover:bg-white/80"
                )}
              />
            ) : (
              <span
                key={src}
                aria-hidden="true"
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-5 bg-white" : "w-1.5 bg-white/55"
                )}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
