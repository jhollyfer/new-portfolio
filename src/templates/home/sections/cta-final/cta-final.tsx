import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { SpotlightCard } from "@/components/spotlight-card/spotlight-card";
import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

export function CtaFinal(): React.JSX.Element {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <SpotlightCard className="p-0">
            <div className="relative flex flex-col items-start gap-10 p-10 md:p-20">
              <p className="kbd">{t("eyebrow")}</p>
              <h2 className="max-w-3xl text-display">{t("title")}</h2>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("description")}
              </p>
              <Magnetic>
                <Link
                  href="/contact"
                  className={cn("cta-pill", focusRing)}
                >
                  {t("button")}
                  <span className="cta-pill__icon">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </Link>
              </Magnetic>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
