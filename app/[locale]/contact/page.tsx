import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/ui/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { contactDetails } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.contact" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");
  const tc = await getTranslations("Contact");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.desc")}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <FadeUp>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("inquiryTitle")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("inquiryLead")}
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t("addressLabel")}
                  </p>
                  <p className="mt-1 text-muted">{tc("address")}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t("phoneLabel")}
                  </p>
                  <p className="mt-1 text-muted">{contactDetails.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t("emailLabel")}
                  </p>
                  <p className="mt-1 text-muted">{contactDetails.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                  <Clock className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {t("hoursLabel")}
                  </p>
                  <p className="mt-1 text-muted">{tc("hours")}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 rounded-xl border border-border bg-surface-2/60 p-6">
              <p className="text-sm font-medium text-foreground">
                {t("ctaBoxTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t("ctaBoxBody")}
              </p>
              <div className="mt-4">
                <ButtonLink href="/investments" variant="secondary">
                  {t("ctaBoxButton")}
                </ButtonLink>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <ContactForm />
          </FadeUp>
        </div>
      </SectionWrapper>
      <SectionWrapper className="border-t border-border bg-surface/25">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("mapTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t("mapLead")}
          </p>
          <div className="mt-8 flex aspect-[21/9] min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-surface-2/80">
            <p className="px-6 text-center text-sm text-muted">
              {t("mapPlaceholder")}
            </p>
          </div>
        </FadeUp>
      </SectionWrapper>
    </>
  );
}
