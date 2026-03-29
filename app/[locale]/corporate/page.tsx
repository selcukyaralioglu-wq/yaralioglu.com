import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeUp } from "@/components/ui/FadeUp";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.corporate" });
  return { title: t("title"), description: t("description") };
}

export default async function CorporatePage() {
  const t = await getTranslations("Corporate");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.desc")}
      />
      <SectionWrapper>
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("profile.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("profile.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("profile.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
      <SectionWrapper className="bg-surface/25">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("vision.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("vision.body")}
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t("mission.title")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {t("mission.body")}
            </p>
          </FadeUp>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("valuesTitle")}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {(["integrity", "capital", "excel", "stakeholder"] as const).map(
              (key) => (
                <li
                  key={key}
                  className="rounded-xl border border-border bg-surface-2/60 p-6"
                >
                  <h3 className="font-heading font-semibold text-foreground">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`values.${key}.body`)}
                  </p>
                </li>
              ),
            )}
          </ul>
        </FadeUp>
      </SectionWrapper>
      <SectionWrapper className="border-t border-border bg-surface/30">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("management.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("management.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("management.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
      <SectionWrapper>
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("strategy.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("strategy.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("strategy.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
    </>
  );
}
