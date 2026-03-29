import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeUp } from "@/components/ui/FadeUp";
import { activitiesBlockOrder } from "@/data/site";
import { Building2, Dumbbell, LineChart, Package } from "lucide-react";
import type { ActivitiesBlockId } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

const blockIcons: Record<ActivitiesBlockId, typeof Dumbbell> = {
  fitness: Dumbbell,
  facility: Building2,
  trade: Package,
  investment: LineChart,
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta.pages.activities" });
  return { title: t("title"), description: t("description") };
}

export default async function ActivitiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ActivitiesPage" });

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.desc")}
      />
      {activitiesBlockOrder.map((id, i) => {
        const Icon = blockIcons[id];
        const isRight = i % 2 === 0;
        const b = (key: string) => t(`blocks.${id}.${key}`);
        return (
          <SectionWrapper
            key={id}
            className={i % 2 === 0 ? "" : "bg-surface/25"}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <FadeUp className={isRight ? "" : "order-1 lg:order-2"}>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </div>
                <h2 className="font-heading mt-6 text-2xl font-semibold sm:text-3xl">
                  {b("title")}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  {b("body")}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  <li className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted">
                    {b("m1")}
                  </li>
                  <li className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted">
                    {b("m2")}
                  </li>
                  <li className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted">
                    {b("m3")}
                  </li>
                </ul>
              </FadeUp>
              <FadeUp
                delay={0.08}
                className={isRight ? "" : "order-2 lg:order-1"}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-2">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,90,31,0.14)_0%,transparent_48%,rgba(255,255,255,0.04)_100%)]" />
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,rgba(255,90,31,0.35),transparent_45%)]" />
                  <div className="relative flex h-full flex-col justify-end p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      {b("panelEyebrow")}
                    </p>
                    <p className="mt-3 font-heading text-xl font-medium text-foreground">
                      {b("panelTitle")}
                    </p>
                    <p className="mt-2 text-sm text-muted">{b("panelNote")}</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </SectionWrapper>
        );
      })}
    </>
  );
}
