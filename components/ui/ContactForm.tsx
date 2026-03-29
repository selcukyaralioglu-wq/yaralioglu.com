"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { Button } from "./Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("ContactForm");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-border bg-surface/70 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span className="font-medium text-foreground">{t("name")}</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder={t("phName")}
            className="w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/50"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="font-medium text-foreground">{t("email")}</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("phEmail")}
            className="w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/50"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm">
        <span className="font-medium text-foreground">{t("subject")}</span>
        <input
          name="subject"
          required
          placeholder={t("phSubject")}
          className="w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/50"
        />
      </label>
      <label className="block space-y-2 text-sm">
        <span className="font-medium text-foreground">{t("message")}</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("phMessage")}
          className="w-full resize-y rounded-lg border border-border bg-background/80 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent/50"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-muted">{t("hint")}</p>
        <Button type="submit" className="min-w-[160px]">
          <Send className="h-4 w-4" aria-hidden />
          {t("submit")}
        </Button>
      </div>
      {sent ? (
        <p
          className="rounded-lg border border-accent/35 bg-accent/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {t("success")}
        </p>
      ) : null}
    </form>
  );
}
