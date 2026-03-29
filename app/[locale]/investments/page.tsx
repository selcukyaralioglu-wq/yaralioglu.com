import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { FadeUp } from "@/components/ui/FadeUp";

type Props = { params: Promise<{ locale: string }> };

const projectKeys = ["p1", "p2", "p3"] as const;
const sectorKeys = ["s1", "s2", "s3", "s4"] as const;
const modelKeys = ["m1", "m2", "m3", "m4"] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Meta.pages.investments",
  });
  return { title: t("title"), description: t("description") };
}

export default async function InvestmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "InvestmentsPage" });

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.desc")}
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("philosophy.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("philosophy.body")}
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("growth.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("growth.body")}
            </p>
          </FadeUp>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-surface/25">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("portfolioTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t("portfolioLead")}
          </p>
        </FadeUp>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projectKeys.map((key, i) => (
            <FadeUp key={key} delay={0.05 * i}>
              <PremiumCard className="h-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t(`projects.${key}.tag`)}
                </span>
                <h3 className="font-heading mt-4 text-lg font-semibold">
                  {t(`projects.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(`projects.${key}.body`)}
                </p>
              </PremiumCard>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeUp>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("sectorsTitle")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("sectorsLead")}
            </p>
            <ul className="mt-8 space-y-3">
              {sectorKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t(`sectors.${key}`)}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="rounded-2xl border border-border bg-surface-2/80 p-8">
              <h3 className="font-heading text-xl font-semibold">
                {t("modelTitle")}
              </h3>
              <ol className="mt-6 space-y-5 text-sm text-muted">
                {modelKeys.map((key, idx) => (
                  <li key={key} className="flex gap-4">
                    <span className="font-heading text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong className="text-foreground">
                        {t(`modelSteps.${key}.strong`)}
                      </strong>
                      {t(`modelSteps.${key}.text`)}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>
      </SectionWrapper>
      <SectionWrapper className="border-t border-border bg-surface/30">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("roadmap.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("roadmap.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("roadmap.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
    </>
  );
}
