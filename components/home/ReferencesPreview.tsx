import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { referenceLogos } from "@/data/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { LogoGrid } from "@/components/ui/LogoGrid";
import { FadeUp } from "@/components/ui/FadeUp";

export async function ReferencesPreview() {
  const t = await getTranslations("Home.references");

  return (
    <SectionWrapper className="border-t border-border">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="font-heading mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {t("lead")}
          </p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <Link
            href="/references"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            {t("link")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeUp>
      </div>
      <div className="mt-10">
        <LogoGrid names={referenceLogos} />
      </div>
    </SectionWrapper>
  );
}
