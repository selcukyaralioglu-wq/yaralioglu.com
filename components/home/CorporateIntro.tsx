import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeUp } from "@/components/ui/FadeUp";

export async function CorporateIntro() {
  const t = await getTranslations("Home.intro");

  return (
    <SectionWrapper className="bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            {t("p1")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {t("p2")}
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2/80 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/10 blur-[80px]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {t("panelEyebrow")}
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
                <dt className="text-sm text-muted">{t("panelGov")}</dt>
                <dd className="font-heading text-right text-lg font-semibold text-foreground">
                  {t("panelGovVal")}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
                <dt className="text-sm text-muted">{t("panelArch")}</dt>
                <dd className="font-heading text-right text-lg font-semibold text-foreground">
                  {t("panelArchVal")}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-sm text-muted">{t("panelEng")}</dt>
                <dd className="font-heading max-w-[220px] text-right text-lg font-semibold leading-snug text-foreground">
                  {t("panelEngVal")}
                </dd>
              </div>
            </dl>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
