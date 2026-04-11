"use client";

import type { Experience } from "@/lib/types";
import { cn, formatPeriod } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

interface ExperienceCardProps {
  experience: Experience;
  descriptionKey: string;
}

export function ExperienceCard({
  experience,
  descriptionKey,
}: ExperienceCardProps): React.JSX.Element {
  const locale = useLocale();
  const tc = useTranslations("career");
  const tCommon = useTranslations("common");
  const td = useTranslations();

  return (
    <article className="bezel-shell">
      <div className="bezel-core flex flex-col gap-5 p-5 sm:p-6 md:grid md:grid-cols-12 md:gap-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 md:col-span-3 md:flex-col md:items-start md:gap-3">
          <span className="kbd whitespace-nowrap">
            {formatPeriod(
              experience.start,
              experience.end,
              locale,
              tc("presentLabel"),
            )}
          </span>
          {experience.current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-primary">
              <span className="relative inline-flex size-1.5">
                <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              {tCommon("currentBadge")}
            </span>
          ) : null}
          {experience.location ? (
            <span className="hidden text-xs text-muted-foreground md:inline">
              {experience.location}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 md:col-span-9">
          <header className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {experience.role}
            </h3>
            <p className="text-sm text-muted-foreground">
              {experience.company}
            </p>
          </header>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
            {td(descriptionKey)}
          </p>
          {experience.highlights && experience.highlights.length > 0 ? (
            <ul className="flex flex-col gap-1.5 text-sm text-foreground/90">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={cn(
                      "mt-2 inline-block h-px w-3 flex-shrink-0 bg-border-strong",
                    )}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
          {experience.techs.length > 0 ? (
            <ul className="flex flex-wrap gap-1.5">
              {experience.techs.map((tech) => (
                <li key={tech} className="tech-badge">
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
