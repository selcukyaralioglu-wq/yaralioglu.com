import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  accentTop?: boolean;
};

export function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
  accentTop = false,
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {accentTop ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          aria-hidden
        />
      ) : null}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
