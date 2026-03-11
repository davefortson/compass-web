"use client";

export function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <span
      className="font-mono text-xs uppercase tracking-[1px]"
      style={{
        color: light ? "#4FB573" : "#4FB573",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </span>
  );
}
