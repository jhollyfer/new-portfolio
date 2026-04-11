import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { getAdjacentProjects, getProjectBySlug, PROJECT_LIST } from "@/lib/data";
import { cn, focusRing } from "@/lib/utils";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return PROJECT_LIST.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Jhollyfer Rodrigues`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("portfolio.detail");
  const tCommon = await getTranslations("common");
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="pt-36 pb-24">
      <div className="section-container">
        <ScrollReveal>
          <Link
            href="/portfolio"
            className={cn(
              "mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
              focusRing,
            )}
          >
            <ArrowLeft aria-hidden className="size-4" />
            {t("backToList")}
          </Link>
        </ScrollReveal>

        <header className="mb-16 grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-8">
            <ScrollReveal>
              <p className="eyebrow">{t("eyebrow")}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 className="mt-4 text-display">{project.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.description}
              </p>
            </ScrollReveal>
          </div>
          <aside className="col-span-12 grid grid-cols-2 gap-6 md:col-span-4 md:grid-cols-1">
            <ScrollReveal delay={120}>
              <dl className="flex flex-col gap-1">
                <dt className="kbd">Year</dt>
                <dd className="font-mono text-sm text-foreground">
                  {project.year}
                </dd>
              </dl>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <dl className="flex flex-col gap-1">
                <dt className="kbd">Role</dt>
                <dd className="text-sm text-foreground">{project.role}</dd>
              </dl>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <dl className="flex flex-col gap-1">
                <dt className="kbd">Status</dt>
                <dd className="inline-flex items-center gap-1.5 text-sm text-primary">
                  <span className="relative inline-flex size-1.5">
                    <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  {tCommon("live")}
                </dd>
              </dl>
            </ScrollReveal>
          </aside>
        </header>

        <ScrollReveal>
          <div className="bezel-shell">
            <div className="bezel-core relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="flex flex-col gap-16">
              {project.problem ? (
                <ScrollReveal>
                  <section>
                    <p className="kbd mb-4">{t("problem")}</p>
                    <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                      {project.problem}
                    </p>
                  </section>
                </ScrollReveal>
              ) : null}

              {project.solution ? (
                <ScrollReveal delay={80}>
                  <section>
                    <p className="kbd mb-4">{t("solution")}</p>
                    <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                      {project.solution}
                    </p>
                  </section>
                </ScrollReveal>
              ) : null}

              {project.outcome ? (
                <ScrollReveal delay={160}>
                  <section>
                    <p className="kbd mb-4">{t("outcome")}</p>
                    <p className="text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                      {project.outcome}
                    </p>
                  </section>
                </ScrollReveal>
              ) : null}

              {project.highlights && project.highlights.length > 0 ? (
                <ScrollReveal delay={240}>
                  <section>
                    <p className="kbd mb-4">{t("highlights")}</p>
                    <ul className="flex flex-col gap-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-primary/60"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              ) : null}

              <ScrollReveal delay={320}>
                <section>
                  <p className="kbd mb-4">{t("stack")}</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <li key={tech} className="tech-badge">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <section>
                  <p className="kbd mb-4">{t("links")}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.links.website ? (
                      <Magnetic>
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn("cta-pill", focusRing)}
                        >
                          {project.links.website.replace(/^https?:\/\//, "")}
                          <span className="cta-pill__icon">
                            <ExternalLink aria-hidden className="size-4" />
                          </span>
                        </a>
                      </Magnetic>
                    ) : null}
                    {project.links.github ? (
                      <Magnetic>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn("cta-ghost", focusRing)}
                        >
                          <Github aria-hidden className="size-4" />
                          GitHub
                        </a>
                      </Magnetic>
                    ) : null}
                  </div>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {prev || next ? (
          <nav
            aria-label="Pagination"
            className="mt-24 grid grid-cols-1 gap-4 border-t border-border pt-10 md:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className={cn(
                  "bezel-shell group/nav flex items-center gap-4 transition-transform hover:-translate-y-0.5",
                  focusRing,
                )}
              >
                <div className="bezel-core flex items-center gap-4 p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover/nav:border-primary group-hover/nav:text-primary">
                    <ArrowLeft aria-hidden className="size-4" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="kbd">{t("prevProject")}</span>
                    <span className="truncate text-sm font-medium text-foreground">
                      {prev.title}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className={cn(
                  "bezel-shell group/nav flex items-center gap-4 transition-transform hover:-translate-y-0.5 md:justify-end",
                  focusRing,
                )}
              >
                <div className="bezel-core flex items-center gap-4 p-6 md:flex-row-reverse">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover/nav:border-primary group-hover/nav:text-primary">
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                  <div className="flex min-w-0 flex-col md:text-right">
                    <span className="kbd">{t("nextProject")}</span>
                    <span className="truncate text-sm font-medium text-foreground">
                      {next.title}
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
