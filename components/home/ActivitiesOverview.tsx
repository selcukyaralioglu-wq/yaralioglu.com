"use client";

import { useTranslations } from "next-intl";
import {
  homeActivityIcons,
  homeActivityOrder,
} from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { FadeUp } from "@/components/ui/FadeUp";

export function ActivitiesOverview() {
  const t = useTranslations("Home.activities");
  const tc = useTranslations("Home.activities.cards");

  return (
    <SectionWrapper accentTop className="border-t border-border">
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
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {homeActivityOrder.map((id, i) => (
          <FadeUp key={id} delay={i * 0.06}>
            <ActivityCard
              icon={homeActivityIcons[id]}
              title={tc(`${id}.title`)}
              description={tc(`${id}.description`)}
            />
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
