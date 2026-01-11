"use client";

import React from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

interface CTAButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function CTAButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ariaLabel = "Открыть форму обратной связи",
}: CTAButtonProps) {
  const { openModal } = useContactModal();

  // Используем className напрямую если он предоставлен, иначе применяем дефолтные стили
  const getDefaultClasses = () => {
    if (className) return className;

    const sizeClasses =
      size === "sm"
        ? "h-10 px-6 text-sm"
        : size === "lg"
        ? "h-16 px-10 text-lg"
        : "h-12 px-8 text-base";

    const variantClasses =
      variant === "primary"
        ? "bg-[var(--accent-color)] text-black font-bold hover:bg-[var(--accent-color)]/90"
        : variant === "outline"
        ? "bg-transparent border border-white/20 text-white hover:bg-white/5"
        : "bg-transparent text-white hover:bg-white/5";

    return `inline-flex items-center justify-center gap-2 rounded-lg transition-all cursor-pointer ${sizeClasses} ${variantClasses}`;
  };

  return (
    <button
      type="button"
      onClick={openModal}
      aria-label={ariaLabel}
      className={getDefaultClasses()}
    >
      {children}
    </button>
  );
}
