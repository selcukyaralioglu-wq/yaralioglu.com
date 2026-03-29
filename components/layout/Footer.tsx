import { Share2, MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navRoutes, contactDetails } from "@/data/site";
import { Container } from "@/components/ui/Container";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tc = await getTranslations("Contact");
  const tNav = await getTranslations("Nav");
  const tMeta = await getTranslations("Meta");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              {t("company")}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {tMeta("siteDescription")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/35 hover:text-foreground"
                aria-label={t("socialCorporateAria")}
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/35 hover:text-foreground"
                aria-label={t("socialNewsAria")}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {t("navTitle")}
            </p>
            <ul className="mt-4 space-y-2">
              {navRoutes.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {t("contactTitle")}
            </p>
            <address className="mt-4 space-y-3 not-italic text-sm text-muted">
              <p>{tc("address")}</p>
              <p>
                <span className="text-foreground/80">{t("phoneLabel")} </span>
                {contactDetails.phone}
              </p>
              <p>
                <span className="text-foreground/80">{t("emailLabel")} </span>
                {contactDetails.email}
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t("company")} {t("rights")}
          </p>
          <p className="text-muted/80">{t("placeholderNote")}</p>
        </div>
      </Container>
    </footer>
  );
}
