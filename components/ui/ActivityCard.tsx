"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cardHover } from "@/lib/motion";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ActivityCard({ icon: Icon, title, description }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial="rest"
      whileHover={reduce ? "rest" : "hover"}
      animate="rest"
      variants={cardHover}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-surface-2/90 p-6 transition-colors hover:border-accent/30 sm:p-7"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/60 text-accent transition-colors group-hover:border-accent/35">
        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </motion.article>
  );
}
