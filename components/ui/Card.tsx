import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: string;
  role?: string;
};

export default function Card({ children, className = "", as = "div", role = "region" }: Props) {
  const Tag: any = as;
  return (
    <Tag className={`rounded-2xl bg-[#121212]/90 border border-white/5 p-6 shadow-2xl relative ${className}`} role={role}>
      {children}
    </Tag>
  );
}
