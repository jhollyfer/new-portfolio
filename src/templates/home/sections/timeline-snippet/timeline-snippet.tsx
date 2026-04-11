import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { EXPERIENCES } from "@/lib/career";
import { cn, focusRing, formatPeriod } from "@/lib/utils";

export function TimelineSnippet(): React.JSX.Element {
  const t = useTranslations("home.timelineSnippet");
  const tc = useTranslations("career");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const recent = EXPERIENCES.slice(0, 2);

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <ScrollReveal>
              <p className="kbd mb-4">{t("eyebrow")}</p>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-display">{t("title")}</h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="mt-4 max-w-lg text-pretty text-base text-muted-foreground">
                {t("description")}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={180}>
            <Magnetic>
              <Link
                href="/career"
                className={cn("cta-ghost", focusRing)}
              >
                {t("viewAll")}
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {recent.map((exp, index) => (
            <ScrollReveal as="li" key={exp.id} delay={index * 90}>
              <article className="bezel-shell h-full">
                <div className="bezel-core flex h-full flex-col gap-6 p-6 md:p-8">
                  <header className="flex items-center justify-between gap-4">
                    <span className="kbd">
                      {formatPeriod(
                        exp.start,
                        exp.end,
                        locale,
                        tc("presentLabel"),
                      )}
                    </span>
                    {exp.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-primary">
                        <span className="relative inline-flex size-1.5">
                          <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        {tCommon("currentBadge")}
                      </span>
                    ) : null}
                  </header>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tc(`experiences.${exp.id}.description`)}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5">
                    {exp.techs.slice(0, 5).map((tech) => (
                      <li key={tech} className="tech-badge">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
