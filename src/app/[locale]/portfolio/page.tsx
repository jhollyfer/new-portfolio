import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { countProjectsByCategory } from "@/lib/data";
import { projectCategorySchema } from "@/lib/schemas";
import { PROJECT_CATEGORIES } from "@/lib/types";
import { FilterButton } from "@/templates/portfolio/components/filter-button/filter-button";
import {
  GridSkeleton,
  ProjectListGrid,
} from "@/templates/portfolio/components/project-list-grid";

import { getFilteredProjects } from "./action";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string | string[] }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.portfolio" });
  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale,
    },
  };
}

export default async function PortfolioPage({
  params,
  searchParams,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");

  const sp = await searchParams;
  const rawCategory = Array.isArray(sp.category) ? sp.category[0] : sp.category;
  const category = projectCategorySchema.parse(rawCategory ?? "all");
  const projects = await getFilteredProjects(category);

  return (
    <div className="pt-36 pb-24">
      <div className="section-container">
        <header className="page-header">
          <ScrollReveal>
            <p className="eyebrow">{t("eyebrow")}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1>{t("pageTitle")}</h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p>{t("pageDescription")}</p>
          </ScrollReveal>
        </header>

        <ScrollReveal>
          <div className="mb-12">
            <Suspense
              fallback={
                <div className="h-10 animate-pulse rounded-full bg-[var(--bezel-shell-bg)]" />
              }
            >
              <div className="flex flex-wrap items-center gap-2">
                {PROJECT_CATEGORIES.map((filter) => (
                  <FilterButton
                    key={filter}
                    category={filter}
                    count={countProjectsByCategory(filter)}
                  />
                ))}
              </div>
            </Suspense>
          </div>
        </ScrollReveal>

        <Suspense fallback={<GridSkeleton />}>
          <ProjectListGrid projects={projects} />
        </Suspense>
      </div>
    </div>
  );
}
