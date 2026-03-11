"use client";

export function CompassLogo({
  size = 36,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  const color = light ? "#FFFFFF" : "#202020";
  const green = "#4FB573";

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={green}
          strokeWidth="2"
          fill="none"
        />
        {/* 8-point compass rose */}
        {/* Cardinal points */}
        <path d="M50 4 L55 40 L50 50 L45 40 Z" fill={green} />
        <path d="M50 96 L45 60 L50 50 L55 60 Z" fill={color} opacity="0.6" />
        <path d="M4 50 L40 45 L50 50 L40 55 Z" fill={color} opacity="0.6" />
        <path d="M96 50 L60 55 L50 50 L60 45 Z" fill={color} opacity="0.6" />
        {/* Intercardinal points */}
        <path d="M17 17 L43 43 L50 50 L40 43 Z" fill={green} opacity="0.7" />
        <path d="M83 17 L57 43 L50 50 L60 43 Z" fill={color} opacity="0.4" />
        <path d="M17 83 L43 57 L50 50 L40 57 Z" fill={color} opacity="0.4" />
        <path d="M83 83 L57 57 L50 50 L60 57 Z" fill={green} opacity="0.5" />
        {/* Center dot */}
        <circle cx="50" cy="50" r="4" fill={green} />
      </svg>
      <div className="flex flex-col">
        <span
          className="font-heading text-lg tracking-[2px]"
          style={{
            fontWeight: 900,
            color: light ? "#FFFFFF" : "#202020",
            lineHeight: 1.1,
          }}
        >
          COMPASS
        </span>
        <span
          className="font-body text-xs"
          style={{
            color: light ? "rgba(255,255,255,0.6)" : "#848484",
            letterSpacing: "0.5px",
          }}
        >
          by Regen
        </span>
      </div>
    </div>
  );
}
