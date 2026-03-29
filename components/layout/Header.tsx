"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navRoutes } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4 lg:h-[80px]">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-foreground"
          >
            Yaralıoğlu
          </Link>
          <nav
            className="hidden items-center gap-6 xl:gap-7 lg:flex"
            aria-label={t("primaryAria")}
          >
            {navRoutes.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {t(item.key)}
                  {active ? (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <LocaleSwitcher />
            <ButtonLink href="/contact">{t("cta")}</ButtonLink>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface/60 text-foreground"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {navRoutes.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                        pathname === item.href
                          ? "bg-surface text-foreground"
                          : "text-muted"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4">
                  <ButtonLink href="/contact" className="w-full">
                    {t("cta")}
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
