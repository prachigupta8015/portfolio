import React from "react";
import { cn } from "@/lib/cn";

export interface TagListProps {
  tags: string[];
  className?: string;
}

/**
 * TagList displays technology tags with accent background tints.
 * @param tags - Array of tag label strings.
 */
export function TagList({ tags, className }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2 pt-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-accent inline-flex items-center rounded-full px-[0.75rem] py-[0.15rem] text-[0.82rem] leading-tight [background:color-mix(in_srgb,var(--accent)_16%,transparent)]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
