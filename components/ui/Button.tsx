import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ariaLabel,
  ...rest
}: Props) {
  const sizeClasses =
    size === "sm"
      ? "text-sm font-bold h-10 px-6"
      : size === "lg"
      ? "text-base sm:text-lg font-extrabold h-20 sm:h-16 px-6 sm:px-10"
      : "text-sm font-semibold h-10 px-5";

  const radiusClasses = size === "sm" ? "rounded-md" : size === "lg" ? "rounded-xl sm:rounded-md" : "rounded-lg";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--accent-color)] text-[#050505] hover:bg-[#b59325] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transform transition-all duration-300"
      : variant === "outline"
      ? "bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors duration-200"
      : "bg-transparent text-white hover:bg-white/5 transition-colors duration-200";

  const classes = `group inline-flex items-center justify-center gap-3 ${sizeClasses} ${radiusClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel} {...rest}>
      {children}
    </button>
  );
}
