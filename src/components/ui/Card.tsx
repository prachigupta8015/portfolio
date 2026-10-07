import React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

/**
 * Reusable Card container component.
 * Uses var(--card) background, 1px var(--line) border, 14px border radius,
 * and 1.5rem padding. Raises border color to var(--accent) on hover.
 */
export function Card({
  children,
  className,
  as: Component = "div",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "border-line hover:border-accent rounded-[14px] border bg-[var(--card)] p-6 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
