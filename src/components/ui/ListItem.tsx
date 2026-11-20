"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { TagList } from "./TagList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export interface ListItemProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  href?: string;
  className?: string;
  leftLabel?: string;
  location?: string;
  companyUrl?: string;
  logoText?: string;
  image?: string;
  imagePosition?: "top" | "center";
  gallery?: string[];
  meta?: string;
  status?: string;
  isProject?: boolean;
}

/**
 * Universal list row component rendering Experience, Projects, and Education items.
 *
 * For Project rows (when image is provided or intended as a project):
 * - 10rem 16:9 thumbnail column on desktop (max 16rem on mobile)
 * - Title followed by inline SVG arrow moving translate(3px, -3px) on row hover
 * - Optional meta line in fg color at 0.92rem
 * - Description (.98rem muted) and TagList
 *
 * For Experience / Education rows:
 * - Date / Period left label with optional location
 * - Logo circle badge, title at company, description, and TagList
 *
 * Interacts with parent `.list-hover-group` to achieve CSS row dimming and var(--card) hover background.
 */
export function ListItem({
  title,
  subtitle,
  description,
  highlights = [],
  tags = [],
  href,
  className,
  leftLabel,
  location,
  companyUrl,
  logoText,
  image,
  imagePosition = "top",
  gallery = [],
  meta,
  status,
  isProject,
}: ListItemProps) {
  const [imageError, setImageError] = useState(false);
  const isProjectRow = isProject ?? !leftLabel;
  const hasImage = Boolean(image) && !imageError;
  const isExternal = href?.startsWith("http") || href?.startsWith("//");

  const rowContent = (
    <>
      {/* Left Column: Project Thumbnail or Experience Date */}
      {isProjectRow ? (
        <div className="w-full max-w-[16rem] shrink-0 min-[861px]:max-w-none">
          <div className="border-line group-hover:border-accent relative aspect-[16/9] w-full overflow-hidden rounded-[8px] border bg-[var(--card)] transition-colors duration-300">
            {hasImage && image ? (
              <Image
                src={image}
                alt={title}
                width={320}
                height={180}
                loading="lazy"
                onError={() => setImageError(true)}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
                  imagePosition === "center" ? "object-center" : "object-top"
                )}
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center p-3 text-center select-none"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--card)) 0%, color-mix(in srgb, var(--line) 40%, transparent) 100%)",
                }}
              >
                <span className="text-accent text-[1.05rem] font-bold tracking-tight opacity-90">
                  {title
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-muted flex flex-col text-[0.9rem] tracking-normal">
          <span>{leftLabel}</span>
          {location && (
            <span className="mt-0.5 text-[0.82rem]">{location}</span>
          )}
        </div>
      )}

      {/* Right Column: Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-3">
          {logoText && (
            <div
              aria-hidden="true"
              className="border-line text-accent mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-[var(--card)] text-[0.75rem] font-semibold select-none"
            >
              {logoText}
            </div>
          )}

          <div>
            <h4 className="item-title text-fg group-hover:text-accent flex flex-wrap items-baseline gap-x-1.5 text-[1.15rem] font-semibold tracking-tight transition-colors duration-300">
              <span>{title}</span>
              {subtitle && (
                <span className="text-muted text-[1.05rem] font-normal">
                  at{" "}
                  {companyUrl ? (
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent underline-offset-4 transition-colors hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {subtitle}
                    </a>
                  ) : (
                    subtitle
                  )}
                </span>
              )}
              {href && (
                <FontAwesomeIcon icon={faLink} className="w-2 h-2" />
              )}
              {status && (
                <span className="border-accent text-accent self-center rounded-full border px-2 py-0.5 text-[0.7rem] font-medium tracking-wide whitespace-nowrap uppercase">
                  {status}
                </span>
              )}
            </h4>
          </div>
        </div>

        {/* Muted description stating problem, decision and result */}
        {description && (
          <p className="text-muted mt-2 text-[0.98rem] leading-relaxed">
            {description}
          </p>
        )}

        {/* Optional result-first bullet points */}
        {highlights.length > 0 && (
          <ul className="text-muted mt-3 flex flex-col gap-2 text-[0.96rem] leading-relaxed">
            {highlights.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bg-accent mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Optional phone-shaped screenshot strip */}
        {gallery.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="border-line relative aspect-[9/16] w-[4.5rem] overflow-hidden rounded-[10px] border bg-[var(--card)] sm:w-[5rem]"
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="5rem"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}

        {/* Optional Meta Line in fg colour at .92rem */}
        {meta && (
          <p className="text-fg mt-2 text-[0.92rem] font-medium">{meta}</p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && <TagList tags={tags} className="mt-3" />}
      </div>
    </>
  );

  const sharedClasses = cn(
    "list-row list-item relative -mx-[1.25rem] rounded-[14px] px-[1.25rem] py-[1.6rem] transition-all duration-350",
    isProjectRow
      ? "grid grid-cols-1 items-start gap-6 min-[861px]:grid-cols-[10rem_1fr]"
      : "grid grid-cols-1 items-baseline gap-2 min-[861px]:grid-cols-[8.5rem_1fr] min-[861px]:gap-6",
    href &&
      "group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={sharedClasses}
      >
        {rowContent}
      </a>
    );
  }

  return <div className={sharedClasses}>{rowContent}</div>;
}
