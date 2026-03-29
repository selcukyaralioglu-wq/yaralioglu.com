import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { FadeUp } from "@/components/ui/FadeUp";
import { groupUnitOrder } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.group" });
  return { title: t("title"), description: t("description") };
}

export default async function GroupPage() {
  const t = await getTranslations("GroupPage");
  const tu = await getTranslations("GroupPage.units");

  const featured = groupUnitOrder.find((u) => u.flagship);
  const secondary = groupUnitOrder.filter((u) => !u.flagship);

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
            {t("overview.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("overview.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("overview.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
      <SectionWrapper className="bg-surface/25">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {t("featuredEyebrow")}
          </p>
        </FadeUp>
        {featured ? (
          <FadeUp delay={0.05}>
            <PremiumCard highlighted className="mt-8">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                    {tu(`${featured.id}.name`)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {tu(`${featured.id}.role`)}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {t("featuredHighlights")}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    <li>{t("featuredBullets.b1")}</li>
                    <li>{t("featuredBullets.b2")}</li>
                    <li>{t("featuredBullets.b3")}</li>
                  </ul>
                </div>
              </div>
            </PremiumCard>
          </FadeUp>
        ) : null}
      </SectionWrapper>
      <SectionWrapper>
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("secondaryTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t("secondaryLead")}
          </p>
        </FadeUp>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {secondary.map((u, i) => (
            <FadeUp key={u.id} delay={0.05 * i}>
              <PremiumCard className="h-full">
                <h3 className="font-heading text-lg font-semibold">
                  {tu(`${u.id}.name`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tu(`${u.id}.role`)}
                </p>
              </PremiumCard>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className="border-t border-border bg-surface/30">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("future.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("future.p1")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("future.p2")}
          </p>
        </FadeUp>
      </SectionWrapper>
    </>
  );
}
