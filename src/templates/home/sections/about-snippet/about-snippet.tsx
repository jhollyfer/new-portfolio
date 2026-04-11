import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

export function AboutSnippet(): React.JSX.Element {
  const t = useTranslations("home.aboutSnippet");

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <ScrollReveal>
              <p className="kbd">{t("eyebrow")}</p>
            </ScrollReveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal delay={80}>
              <h2 className="text-display">{t("title")}</h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("description")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="mt-8">
                <Magnetic>
                  <Link
                    href="/about"
                    className={cn("cta-ghost", focusRing)}
                  >
                    {t("cta")}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
