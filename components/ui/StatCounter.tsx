"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  label: string;
  suffix?: string;
};

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatCounter({ value, label, suffix = "" }: Props) {
  return (
    <div className="rounded-xl border border-border bg-surface/60 px-6 py-8 text-center sm:px-8">
      <div className="font-heading text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-5xl">
        <AnimatedNumber value={value} />
        {suffix ? (
          <span className="text-accent" aria-hidden>
            {suffix}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
    </div>
  );
}
