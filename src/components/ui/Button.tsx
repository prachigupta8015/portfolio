"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { useScrollTo } from "@/components/providers/SmoothScrollProvider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  external?: boolean;
}

/**
 * Reusable Pill Button component.
 * Supports primary and outline variants, smooth scrolling for internal anchors,
 * and external hyperlinks.
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      href,
      external = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const scrollTo = useScrollTo();

    const baseStyles =
      "inline-flex items-center justify-center rounded-full text-[0.95rem] font-medium px-6 py-[0.8rem] transition-colors duration-300 cursor-pointer select-none leading-none";

    const variantStyles = {
      primary:
        "bg-fg text-bg border border-transparent hover:bg-accent hover:text-bg hover:border-accent",
      outline:
        "bg-transparent text-fg border border-line hover:border-accent hover:text-accent",
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href && href.startsWith("#")) {
        e.preventDefault();
        scrollTo(href);
      }
      if (onClick) {
        onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    };

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={handleClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(baseStyles, variantStyles[variant], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || "button"}
        onClick={onClick}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
