"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { ButtonLink } from "./Button";

type Props = {
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  body,
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
  secondaryLabel = "Explore activities",
  secondaryHref = "/activities",
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-border py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,90,31,0.07)_0%,transparent_40%,transparent_60%,rgba(255,90,31,0.05)_100%)]" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 rounded-2xl border border-border bg-surface/80 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-12"
        >
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
