"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { mediaCategories } from "@/data/site";

type Item = { id: string; category: string; index: number };

function buildItems(): Item[] {
  const out: Item[] = [];
  for (const cat of mediaCategories) {
    for (let i = 0; i < cat.count; i++) {
      out.push({
        id: `${cat.id}-${i}`,
        category: cat.id,
        index: i + 1,
      });
    }
  }
  return out;
}

export function MediaGrid() {
  const t = useTranslations("MediaPage");
  const items = useMemo(buildItems, []);
  const [filter, setFilter] = useState<string | "all">("all");
  const [open, setOpen] = useState<Item | null>(null);

  const filtered =
    filter === "all"
      ? items
      : items.filter((i) => i.category === filter);

  function categoryLabel(id: string) {
    return t(`categories.${id as "facilities" | "operations" | "corporate" | "projects"}`);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={t("categories.all")}
        />
        {mediaCategories.map((c) => (
          <FilterChip
            key={c.id}
            active={filter === c.id}
            onClick={() => setFilter(c.id)}
            label={categoryLabel(c.id)}
          />
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((item, index) => {
          const label = t("itemLabel", {
            category: categoryLabel(item.category),
            n: item.index,
          });
          return (
            <motion.button
              layout
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.02,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setOpen(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface-2 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div
                className="absolute inset-0 bg-[linear-gradient(145deg,rgba(26,26,26,1)_0%,rgba(10,10,10,0.96)_45%,rgba(18,18,18,0.92)_100%)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,90,31,0.22), transparent 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.06), transparent 50%)`,
                }}
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {categoryLabel(item.category)}
                </span>
                <span className="mt-2 font-heading text-lg font-medium text-foreground">
                  {t("cardEditorial")}
                </span>
                <span className="mt-1 text-xs text-muted">{label}</span>
              </div>
              <div className="absolute inset-0 bg-background/72 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="translate-y-2 text-xs font-medium uppercase tracking-widest text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {t("view")}
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 px-4 py-10 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={t("lightboxAria")}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_120px_-48px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-lg border border-border bg-background/90 p-2 text-foreground transition-colors hover:border-accent/40"
                onClick={() => setOpen(null)}
                aria-label={t("lightboxClose")}
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-[16/10] w-full bg-[linear-gradient(125deg,#121212_0%,#0a0a0a_50%,#1a1a1a_100%)]" />
              <div className="space-y-2 border-t border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {categoryLabel(open.category)}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {t("lightboxTitle")}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t("lightboxBody")}
                </p>
                <p className="text-xs text-muted/90">
                  {t("itemLabel", {
                    category: categoryLabel(open.category),
                    n: open.index,
                  })}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
        active
          ? "border-accent/45 bg-accent/12 text-foreground"
          : "border-border bg-surface text-muted hover:border-white/14 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
