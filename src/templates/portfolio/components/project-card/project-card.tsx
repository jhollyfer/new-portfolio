import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

const MAX_VISIBLE_TECHS = 5;

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps): React.JSX.Element {
  const t = useTranslations("portfolio");
  const tc = useTranslations("common");

  const visibleTechs = project.techs.slice(0, MAX_VISIBLE_TECHS);
  const remaining = project.techs.length - visibleTechs.length;

  return (
    <article
      className={cn(
        "bezel-shell group/card relative flex h-full flex-col",
        className,
      )}
    >
      <div className="bezel-core flex h-full flex-col">
        <Link
          href={`/portfolio/${project.slug}`}
          className={cn(
            "relative block overflow-hidden rounded-t-[inherit]",
            focusRing,
          )}
          aria-label={`${project.title} — ${t("card.viewProject")}`}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden bg-muted/40",
              featured
                ? "aspect-[4/3] sm:aspect-[16/9]"
                : "aspect-[4/3] sm:aspect-[16/10]",
            )}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-[var(--ease-cinematic)] group-hover/card:scale-[1.04]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover/card:opacity-90"
            />

            <div className="absolute left-4 top-4 flex items-center gap-2">
              {project.status === "online" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/70 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-primary backdrop-blur">
                  <span className="relative inline-flex size-1.5">
                    <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  {tc("live")}
                </span>
              ) : null}
            </div>

            <div className="absolute right-4 top-4">
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/80 backdrop-blur transition-all duration-500 group-hover/card:-rotate-45 group-hover/card:text-primary">
                <ArrowUpRight aria-hidden className="size-4" />
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between gap-3 text-[0.6875rem]">
            <span className="kbd">
              {t("card.year")} · {project.year}
            </span>
            <span className="kbd truncate">{project.role}</span>
          </div>

          <Link
            href={`/portfolio/${project.slug}`}
            className={cn("rounded-md", focusRing)}
          >
            <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover/card:text-primary">
              {project.title}
            </h3>
          </Link>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <ul className="flex flex-wrap gap-1.5">
            {visibleTechs.map((tech) => (
              <li key={tech} className="tech-badge">
                {tech}
              </li>
            ))}
            {remaining > 0 ? (
              <li className="tech-badge">+{remaining}</li>
            ) : null}
          </ul>

          {project.links.github || project.links.website ? (
            <div className="mt-auto flex items-center gap-4 border-t border-border pt-4">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground",
                    focusRing,
                  )}
                  aria-label={`${project.title} — ${t("card.viewCode")}`}
                >
                  <Github aria-hidden className="size-3.5" />
                  {t("card.viewCode")}
                </a>
              ) : null}
              {project.links.website ? (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground",
                    focusRing,
                  )}
                  aria-label={`${project.title} — ${t("card.visit")}`}
                >
                  <ExternalLink aria-hidden className="size-3.5" />
                  {t("card.visit")}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
