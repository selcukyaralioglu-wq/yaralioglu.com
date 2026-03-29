"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LangSwitcher");

  return (
    <div
      className="flex items-center gap-0.5 rounded-lg border border-border bg-surface/60 p-0.5"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
            locale === l
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l === "tr" ? t("tr") : t("en")}
        </button>
      ))}
    </div>
  );
}
