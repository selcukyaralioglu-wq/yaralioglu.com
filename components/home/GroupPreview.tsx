import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { groupUnitOrder } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { FadeUp } from "@/components/ui/FadeUp";

export async function GroupPreview() {
  const t = await getTranslations("Home.group");
  const tu = await getTranslations("Home.group.units");

  const featured = groupUnitOrder.find((u) => u.flagship);
  const rest = groupUnitOrder.filter((u) => !u.flagship);

  return (
    <SectionWrapper className="bg-surface/25">
      <FadeUp>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {t("eyebrow")}
        </p>
        <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {t("lead")}
        </p>
      </FadeUp>
      <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-stretch">
        {featured ? (
          <FadeUp className="lg:w-1/2">
            <PremiumCard highlighted className="h-full min-h-[280px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t("flagship")}
              </p>
              <h3 className="font-heading mt-4 text-2xl font-semibold">
                {tu(`${featured.id}.name`)}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {tu(`${featured.id}.role`)}
              </p>
              <Link
                href="/group"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                {t("link")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumCard>
          </FadeUp>
        ) : null}
        <div className="flex flex-1 flex-col gap-5">
          {rest.map((u, i) => (
            <FadeUp key={u.id} delay={0.05 * (i + 1)}>
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
      </div>
    </SectionWrapper>
  );
}
