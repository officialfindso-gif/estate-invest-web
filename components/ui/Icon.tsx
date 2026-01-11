import React from "react";

type Props = {
  name: string;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  weight?: number; // font wght axis (100..1000)
  fill?: 0 | 1; // Material Symbols FILL axis
};

export default function Icon({ name, size = "md", color = "var(--accent-color)", className = "", ariaLabel, ariaHidden = true, weight, fill }: Props) {
  const fontSize =
    typeof size === "number"
      ? `${size}px`
      : size === "sm"
      ? "18px"
      : size === "lg"
      ? "28px"
      : "22px";
  // Build font-variation-settings string if weight/fill provided
  const fontVariationSettings = [] as string[];
  if (typeof fill === "number") fontVariationSettings.push(`"FILL" ${fill}`);
  if (typeof weight === "number") fontVariationSettings.push(`"wght" ${weight}`);

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ color, fontSize, ...(fontVariationSettings.length ? { fontVariationSettings: fontVariationSettings.join(', ') } : {}) }}
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : ariaLabel}
    >
      {name}
    </span>
  );
}
