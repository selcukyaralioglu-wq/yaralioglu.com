import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/ui/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { CorporateIntro } from "@/components/home/CorporateIntro";
import { ActivitiesOverview } from "@/components/home/ActivitiesOverview";
import { GroupPreview } from "@/components/home/GroupPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { StatsSection } from "@/components/home/StatsSection";
import { ReferencesPreview } from "@/components/home/ReferencesPreview";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.home" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <>
      <HeroSection />
      <CorporateIntro locale={locale} />
      <ActivitiesOverview />
      <GroupPreview locale={locale} />
      <WhyUs locale={locale} />
      <StatsSection locale={locale} />
      <ReferencesPreview locale={locale} />
      <CTASection
        title={t("cta.title")}
        body={t("cta.body")}
        primaryLabel={t("cta.primary")}
        secondaryLabel={t("cta.secondary")}
      />
    </>
  );
}
