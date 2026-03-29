import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { FadeUp } from "@/components/ui/FadeUp";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.media" });
  return { title: t("title"), description: t("description") };
}

export default async function MediaPage() {
  const t = await getTranslations("MediaPage");

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
            {t("galleryTitle")}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("galleryLead")}
          </p>
        </FadeUp>
        <div className="mt-10">
          <MediaGrid />
        </div>
      </SectionWrapper>
    </>
  );
}
