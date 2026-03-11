"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "feature";
  accentBorder?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "light",
  accentBorder = false,
}: CardProps) {
  const variants = {
    light: "bg-white border border-brand-border",
    dark: "bg-white/5 border border-[rgba(79,181,115,0.2)]",
    feature: "bg-white border border-brand-border",
  };

  const accent = accentBorder ? "border-l-4 border-l-brand-green" : "";

  return (
    <div
      className={`rounded-[4px] p-8 ${variants[variant]} ${accent} ${className}`}
    >
      {children}
    </div>
  );
}
