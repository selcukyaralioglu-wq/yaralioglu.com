"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
};

export function PremiumCard({
  children,
  className = "",
  highlighted = false,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial="rest"
      whileHover={reduce ? "rest" : "hover"}
      animate="rest"
      variants={cardHover}
      className={`relative overflow-hidden rounded-xl border bg-surface/80 p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] backdrop-blur-sm transition-colors sm:p-8 ${
        highlighted
          ? "border-accent/45 shadow-[0_0_0_1px_rgba(255,90,31,0.22),0_32px_120px_-52px_rgba(255,90,31,0.18)]"
          : "border-border hover:border-white/14"
      } ${className}`}
    >
      {highlighted ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,90,31,0.14),transparent_55%)]"
          aria-hidden
        />
      ) : null}
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  );
}
