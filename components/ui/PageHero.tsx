import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden border-b border-border bg-surface/60 ${className}`}
    >
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-accent/5 blur-[90px]" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </div>
  );
}
