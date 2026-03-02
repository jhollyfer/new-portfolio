import { ProjectCategory } from "@/lib/model";
import { FilterButton } from "@/templates/portfolio/components/filter-button/filter-button";
import {
  GridSkeleton,
  ProjectListGrid,
} from "@/templates/portfolio/components/project-list-grid";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { getFilteredProjects } from "./action";

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.portfolio" });

  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://jhollyfer.com.br/og-image.png",
      siteName: "jhollyfer.com.br",
      locale,
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: t("title"),
        },
      ],
    },
  };
}

export default async function Portfolio({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");

  const sp = await searchParams;
  const category = (sp.category ?? "all") as ProjectCategory;
  const filteredProjects = await getFilteredProjects(category);
  const filters: ProjectCategory[] = ["all", "frontend", "backend", "mobile"];

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="page-header">
          <h1>{t("pageTitle")}</h1>
          <p>{t("pageDescription")}</p>
        </div>

        <Suspense
          fallback={
            <div className="h-10 bg-white/[0.04] rounded-lg animate-pulse mb-8" />
          }
        >
          <div className="flex items-center justify-start gap-2 pb-8">
            {filters.map((filter) => (
              <FilterButton key={filter} category={filter} />
            ))}
          </div>
        </Suspense>

        <Suspense fallback={<GridSkeleton />}>
          <ProjectListGrid projects={filteredProjects} />
        </Suspense>
      </div>
    </div>
  );
}
