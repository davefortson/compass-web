"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  href,
  children,
  fullWidth = false,
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-[800] text-sm uppercase tracking-[1px] transition-all duration-200 cursor-pointer";
  const radius = "rounded-[2px]";
  const padding = "px-6 py-3";
  const width = fullWidth ? "w-full" : "";

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-bl from-brand-teal via-brand-sage to-brand-cream text-white hover:shadow-[0_0_25px_rgba(79,181,115,0.5)]",
    secondary:
      "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    ghost:
      "border border-white/30 text-white hover:bg-white/10",
  };

  const cls = `${base} ${radius} ${padding} ${width} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} disabled={loading} {...props}>
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : null}
      {children}
    </button>
  );
}
