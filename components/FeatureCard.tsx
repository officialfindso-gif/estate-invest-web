import React from "react";
import Icon from "./ui/Icon";

type Variant = "auto" | "row" | "column";
type Size = "sm" | "md" | "lg";

type Props = {
  icon: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  accent?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  accent = "var(--accent-color)",
  variant = "auto",
  size = "md",
  className = "",
}: Props) {
  const variantClass =
    variant === "row" ? "flex-row" : variant === "column" ? "flex-col items-center text-center" : "flex-col sm:flex-row sm:items-start";

  const sizeClasses =
    size === "sm"
      ? { icon: "text-xl w-9 h-9", title: "text-sm" }
      : size === "lg"
      ? { icon: "text-3xl w-12 h-12", title: "text-lg" }
      : { icon: "text-2xl w-10 h-10", title: "text-base" };

  const ariaLabel = typeof title === "string" ? `Feature: ${title}` : undefined;

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      tabIndex={0}
      className={`flex ${variantClass} gap-3 text-sm text-[#b6b1a0] ${className} focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:rounded-lg`}
    >
      <div className={`rounded-lg bg-black/20 flex items-center justify-center border border-white/5 ${sizeClasses.icon}`} aria-hidden>
        <Icon name={icon} size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"} color={accent} ariaHidden={true} />
      </div>

      <div>
        <div className={`font-bold text-white ${sizeClasses.title}`}>{title}</div>
        {description ? <div className="text-xs text-[#b6b1a0] mt-1">{description}</div> : null}
      </div>
    </div>
  );
}
