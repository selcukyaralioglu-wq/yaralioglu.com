import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
  // Statik export: sunucuda locale seçimi yok (middleware çalışmaz)
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
