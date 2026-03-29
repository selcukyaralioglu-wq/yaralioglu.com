import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { LogoGrid } from "@/components/ui/LogoGrid";
import { FadeUp } from "@/components/ui/FadeUp";
import { referenceLogos } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

const testimonialKeys = ["t1", "t2", "t3"] as const;
const sectorTagKeys = ["s1", "s2", "s3", "s4", "s5"] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Meta.pages.references",
  });
  return { title: t("title"), description: t("description") };
}

export default async function ReferencesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ReferencesPage" });

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
            {t("trustedTitle")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("trustedLead")}
          </p>
        </FadeUp>
      </SectionWrapper>
      <SectionWrapper className="bg-surface/25">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("gridTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t("gridLead")}
          </p>
        </FadeUp>
        <div className="mt-10">
          <LogoGrid names={referenceLogos} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("testimonialsTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t("testimonialsLead")}
          </p>
        </FadeUp>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <FadeUp key={key} delay={0.05 * i}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-surface-2/70 p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                  “{t(`${key}.quote`)}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <p className="font-medium text-foreground">{t(`${key}.name`)}</p>
                  <p className="mt-1 text-xs text-muted">{t(`${key}.org`)}</p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className="border-t border-border bg-surface/30">
        <FadeUp>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            {t("sectorsTitle")}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t("sectorsLead")}
          </p>
        </FadeUp>
        <div className="mt-8 flex flex-wrap gap-2">
          {sectorTagKeys.map((key) => (
            <span
              key={key}
              className="rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted"
            >
              {t(`sectorTags.${key}`)}
            </span>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
