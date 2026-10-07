import React from "react";
import { cn } from "@/lib/cn";

export interface AvailabilityBadgeProps {
  text: string;
  open?: boolean;
  className?: string;
}

/**
 * AvailabilityBadge renders an indicator pill with an animated pulsing status dot.
 * Uses accent token for the status indicator and border-line for the outer pill.
 */
export function AvailabilityBadge({
  text,
  open = true,
  className,
}: AvailabilityBadgeProps) {
  return (
    <div
      className={cn(
        "border-line text-muted inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[0.85rem] select-none",
        className
      )}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        {open && (
          <span
            className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            aria-hidden="true"
          />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            open ? "bg-accent" : "bg-muted"
          )}
          aria-hidden="true"
        />
      </span>
      <span>{text}</span>
    </div>
  );
}
