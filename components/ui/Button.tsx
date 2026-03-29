"use client";

import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

type Base = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkProps = Base & {
  href: string;
  external?: boolean;
};

type ButtonProps = Base & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_32px_-8px_rgba(255,90,31,0.55)]",
  secondary:
    "bg-surface-2 text-foreground border border-border hover:border-accent/40 hover:bg-surface",
  ghost: "text-foreground/90 hover:text-accent bg-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-45";

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  external,
}: LinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="inline-flex"
    >
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {children}
    </motion.button>
  );
}
