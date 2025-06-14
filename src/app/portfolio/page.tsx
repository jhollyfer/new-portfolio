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
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Portfólio</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi ao longo da minha
            carreira
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-10 bg-white/5 rounded-lg animate-pulse mb-8" />
          }
        >
          <div className="inline-flex w-full items-center justify-center pb-8 gap-2">
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
    all: "Jhollyfer | Portfólio",
    frontend: "Jhollyfer | Portfólio Front-end",
    backend: "Jhollyfer | Portfólio Back-end",
    mobile: "Jhollyfer | Portfólio Mobile",
  };

  const descriptions = {
    all: "Conheça alguns dos projetos que desenvolvi ao longo da minha carreira",
    frontend:
      "Projetos de Front-end desenvolvidos com React, Next.js e outras tecnologias modernas",
    backend:
      "APIs e sistemas backend desenvolvidos com Node.js, databases e arquiteturas escaláveis",
    mobile:
      "Aplicativos mobile desenvolvidos com React Native, Flutter e tecnologias híbridas",
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
      siteName: "https://jhollyfer.com.br/portfolio",
      locale: "pt-BR",
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: "Jhollyfer | Portfólio",
        },
      ],
    },
  };
}
