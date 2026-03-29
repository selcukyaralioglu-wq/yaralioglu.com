"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function HeroSection() {
  const reduce = useReducedMotion();
  const t = useTranslations("Home.hero");

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[72px] lg:pt-[80px]">
      <div className="pointer-events-none absolute inset-0 bg-background" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-accent/14 blur-[120px] animate-[shimmer_14s_ease-in-out_infinite]"
        aria-hidden
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-20 h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[100px]"
        aria-hidden
        animate={
          reduce ? undefined : { y: [0, -20, 0], x: [0, 10, 0] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_12%,rgba(255,90,31,0.12),transparent_60%)]" />

      <Container className="relative flex min-h-[calc(100svh-72px)] flex-col justify-center py-16 lg:min-h-[calc(100svh-80px)] lg:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl"
        >
          {t("sub")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
        >
          {t("body")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <ButtonLink href="/contact">{t("ctaPrimary")}</ButtonLink>
          <ButtonLink href="/corporate" variant="secondary">
            {t("ctaSecondary")}
          </ButtonLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 hidden items-center gap-2 text-muted sm:flex"
          aria-hidden
        >
          <ChevronDown className="h-4 w-4 animate-[float-soft_4s_ease-in-out_infinite]" />
          <span className="text-xs font-medium uppercase tracking-[0.22em]">
            {t("scroll")}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
