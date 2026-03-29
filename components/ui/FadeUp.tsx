"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeUp({ children, className = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
