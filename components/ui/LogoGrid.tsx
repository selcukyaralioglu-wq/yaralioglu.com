"use client";

import { motion } from "framer-motion";

type Props = {
  names: string[];
  className?: string;
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function LogoGrid({ names, className = "" }: Props) {
  return (
    <motion.div
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {names.map((name) => (
        <motion.div
          key={name}
          variants={item}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="group flex min-h-[88px] items-center justify-center rounded-lg border border-border bg-surface-2/70 px-4 py-5 transition-all hover:border-accent/35 hover:bg-surface"
        >
          <span className="text-center text-xs font-semibold uppercase tracking-wider text-muted transition-colors group-hover:text-foreground">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
