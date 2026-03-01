import { ProjectCategory } from "@/lib/model";
import { FilterButton } from "@/templates/portfolio/components/filter-button/filter-button";
import {
  GridSkeleton,
  ProjectListGrid,
} from "@/templates/portfolio/components/project-list-grid";
import { Suspense } from "react";
import { getFilteredProjects } from "./action";

interface Props {
  searchParams: Promise<{ category: string }>;
}

export default async function Portfolio({ searchParams }: Props) {
  const params = await searchParams;
  const category = (params.category ?? "all") as ProjectCategory;

  const filteredProjects = await getFilteredProjects(category);

  const filters: ProjectCategory[] = ["all", "frontend", "backend", "mobile"];

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="page-header">
          <h1>Portfolio</h1>
          <p>
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
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

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category ?? "all";

  const titles = {
    all: "Jhollyfer | Portfolio",
    frontend: "Jhollyfer | Portfolio Front-end",
    backend: "Jhollyfer | Portfolio Back-end",
    mobile: "Jhollyfer | Portfolio Mobile",
  };

  const descriptions = {
    all: "Conheca alguns dos projetos que desenvolvi ao longo da minha carreira",
    frontend:
      "Projetos de Front-end desenvolvidos com React, Next.js e outras tecnologias modernas",
    backend:
      "APIs e sistemas backend desenvolvidos com Node.js, databases e arquiteturas escalaveis",
    mobile:
      "Aplicativos mobile desenvolvidos com React Native, Flutter e tecnologias hibridas",
  };

  const title = titles[category as keyof typeof titles] || titles.all;
  const description =
    descriptions[category as keyof typeof descriptions] || descriptions.all;

  return {
    title,
    description,
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://jhollyfer.com.br/og-image.png",
      siteName: "jhollyfer.com.br",
      locale: "pt-BR",
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: "Jhollyfer | Portfolio",
        },
      ],
    },
  };
}
