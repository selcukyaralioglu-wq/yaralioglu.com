import { getTranslations } from "next-intl/server";
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

export default async function HomePage() {
  const t = await getTranslations("Home.cta");

  return (
    <>
      <HeroSection />
      <CorporateIntro />
      <ActivitiesOverview />
      <GroupPreview />
      <WhyUs />
      <StatsSection />
      <ReferencesPreview />
      <CTASection
        title={t("title")}
        body={t("body")}
        primaryLabel={t("primary")}
        secondaryLabel={t("secondary")}
      />
    </>
  );
}
