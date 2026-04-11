"use client";

import { useTranslations } from "next-intl";
import type { Education } from "@/lib/types";

interface EducationCardProps {
  education: Education;
  descriptionKey: string;
}

export function EducationCard({
  education,
  descriptionKey,
}: EducationCardProps): React.JSX.Element {
  const td = useTranslations();

  return (
    <article className="bezel-shell">
      <div className="bezel-core grid grid-cols-12 gap-6 p-6 md:p-8">
        <div className="col-span-12 flex items-start justify-between gap-4 md:col-span-3 md:flex-col md:gap-3">
          <span className="kbd whitespace-nowrap">
            {education.start} — {education.end}
          </span>
          {education.location ? (
            <span className="hidden text-xs text-muted-foreground md:inline">
              {education.location}
            </span>
          ) : null}
        </div>
        <div className="col-span-12 flex flex-col gap-3 md:col-span-9">
          <header className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold tracking-tight">
              {education.degree}
            </h3>
            <p className="text-sm text-muted-foreground">
              {education.institution}
            </p>
          </header>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
            {td(descriptionKey)}
          </p>
        </div>
      </div>
    </article>
  );
}
