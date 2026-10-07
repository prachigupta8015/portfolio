import React from "react";
import { cn } from "@/lib/cn";

export interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

/**
 * Interactive Pill component used for toggles and selectors.
 * Supports active pressed state, focus rings, and accent hover transitions.
 */
export const Pill = React.forwardRef<HTMLButtonElement, PillProps>(
  ({ children, active = false, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={active}
        className={cn(
          "border-line inline-flex cursor-pointer items-center justify-center rounded-full border px-[0.9rem] py-[0.3rem] text-[0.9rem] leading-none transition-colors duration-300 select-none",
          active
            ? "bg-fg text-bg border-fg"
            : "text-fg hover:border-accent hover:text-accent bg-transparent",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Pill.displayName = "Pill";
