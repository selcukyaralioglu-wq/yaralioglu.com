import { getTranslations } from "next-intl/server";
import { statsDefs } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCounter } from "@/components/ui/StatCounter";
import { FadeUp } from "@/components/ui/FadeUp";

type Props = { locale: string };

export async function StatsSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "Home.stats" });

  return (
    <SectionWrapper className="bg-surface/30">
      <FadeUp>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {t("eyebrow")}
        </p>
        <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
          {t("note")}
        </p>
      </FadeUp>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsDefs.map((s, i) => (
          <FadeUp key={s.key} delay={i * 0.05}>
            <StatCounter
              value={s.value}
              label={t(s.key)}
              suffix={s.suffix}
            />
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
