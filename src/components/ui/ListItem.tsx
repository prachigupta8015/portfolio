import React from "react";
import { cn } from "@/lib/cn";
import { TagList } from "./TagList";

export interface ListItemProps {
  leftLabel: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  href?: string;
  className?: string;
}

/**
 * Universal list row component rendering both Experience and Project items.
 * Renders an anchor tag if `href` is supplied, or a structured div otherwise.
 * Interacts with parent `.list-hover-group` to achieve CSS row dimming.
 */
export function ListItem({
  leftLabel,
  title,
  subtitle,
  description,
  tags,
  href,
  className,
}: ListItemProps) {
  const content = (
    <div
      className={cn(
        "relative -mx-[1.25rem] list-item rounded-[14px] px-[1.25rem] py-[1.6rem] transition-colors duration-350",
        "grid grid-cols-1 items-baseline gap-2 min-[861px]:grid-cols-[7.5rem_1fr] min-[861px]:gap-6",
        href && "group/item",
        className
      )}
    >
      {/* Left label: Date or 'Project' */}
      <span className="text-muted text-[0.9rem] tracking-normal uppercase min-[861px]:capitalize">
        {leftLabel}
      </span>

      {/* Main details */}
      <div>
        <h4 className="item-title text-fg text-[1.15rem] font-semibold tracking-tight">
          {title}
          {subtitle && (
            <span className="text-muted text-[1.05rem] font-normal">
              {" "}
              at {subtitle}
            </span>
          )}
        </h4>
        <p className="text-muted mt-2 text-[0.98rem] leading-relaxed">
          {description}
        </p>
        <TagList tags={tags} className="mt-2" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none"
      >
        {content}
      </a>
    );
  }

  return content;
}
