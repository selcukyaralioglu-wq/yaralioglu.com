import { getTranslations } from "next-intl/server";
import { strengthIcons, strengthOrder } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeUp } from "@/components/ui/FadeUp";

export async function WhyUs() {
  const t = await getTranslations("Home.why");
  const ti = await getTranslations("Home.why.items");

  return (
    <SectionWrapper className="border-t border-border">
      <FadeUp>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {t("eyebrow")}
        </p>
        <h2 className="font-heading mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
      </FadeUp>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strengthOrder.map((id, i) => {
          const Icon = strengthIcons[id];
          return (
            <FadeUp key={id} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-border bg-surface-2/70 p-6 transition-colors hover:border-accent/28">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
                <h3 className="font-heading mt-5 text-lg font-semibold">
                  {ti(`${id}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {ti(`${id}.body`)}
                </p>
              </article>
            </FadeUp>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
