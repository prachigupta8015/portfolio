"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export interface ImageLightboxProps {
  images: string[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  title: string;
  onIndexChange: (index: number | null) => void;
}

/**
 * Full-screen screenshot viewer built on the native <dialog> element,
 * which provides focus trapping, Esc-to-close and an inert background.
 * Arrow keys / buttons move between images; clicking the backdrop closes it.
 */
export function ImageLightbox({
  images,
  index,
  title,
  onIndexChange,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;
  const count = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const step = useCallback(
    (delta: number) => {
      if (index === null || count < 2) return;
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const src = index !== null ? images[index] : undefined;

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${title} screenshots`}
      data-lenis-prevent
      onClose={() => onIndexChange(null)}
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        // Clicks on the dialog element itself (not its children) are backdrop clicks.
        if (e.target === e.currentTarget) onIndexChange(null);
      }}
      className="m-auto h-[100svh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      {src && (
        <div
          className="flex h-full w-full items-center justify-center gap-3 p-4 sm:gap-6 sm:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) onIndexChange(null);
          }}
        >
          {count > 1 && (
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous screenshot"
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}

          <figure className="relative flex h-full max-h-[88svh] w-full max-w-[min(92vw,900px)] flex-col items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                key={src}
                src={src}
                alt={`${title} screenshot ${index! + 1} of ${count}`}
                fill
                sizes="(max-width: 900px) 92vw, 900px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-[0.9rem] text-white/80">
              {title} · {index! + 1} / {count}
            </figcaption>
          </figure>

          {count > 1 && (
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next screenshot"
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}

          <button
            type="button"
            onClick={() => onIndexChange(null)}
            aria-label="Close screenshots"
            autoFocus
            className="absolute top-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </dialog>
  );
}
