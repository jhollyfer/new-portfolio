import {
  FilterButton,
  ProjectCategory,
} from "@/templates/portfolio/filter-button/filter-button";
import { ProjectCard } from "@/templates/portfolio/project-card/project-card";
import { Suspense } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techs: string[];
  category: ProjectCategory;
  status?: "online" | "offline";
  github?: string;
  website?: string;
}
// Project data
const projects: Project[] = [
  {
    id: "1",
    title: "Move.it",
    description:
      "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["React JS", "TypeScript"],
    category: "frontend",
    status: "online" as const,
    github: "https://github.com/jhollyfer",
    website: "https://www.maiyu.com.br",
  },
  {
    id: "2",
    title: "API REST",
    description:
      "Backend para aplicação de e-commerce com autenticação JWT, upload de arquivos e integração com payment gateway.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["Node.js", "Express", "MongoDB"],
    category: "backend",
    github: "https://github.com/jhollyfer",
  },
  {
    id: "3",
    title: "App Mobile",
    description:
      "Aplicativo de delivery com geolocalização, push notifications e pagamentos in-app.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["React Native", "Expo", "Firebase"],
    category: "mobile",
    status: "online" as const,
    website: "https://www.maiyu.com.br",
  },
  {
    id: "4",
    title: "Dashboard Admin",
    description:
      "Painel administrativo para gerenciamento de conteúdo com gráficos, tabelas e relatórios.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["Next.js", "Material UI", "Chart.js"],
    category: "frontend",
    github: "https://github.com/jhollyfer",
    website: "https://www.maiyu.com.br",
  },
  {
    id: "5",
    title: "Microservices",
    description:
      "Arquitetura de microserviços para processamento de pagamentos com filas de mensagens.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["Docker", "Kubernetes", "RabbitMQ"],
    category: "backend",
  },
  {
    id: "6",
    title: "E-commerce",
    description:
      "Loja virtual completa com catálogo de produtos, carrinho de compras e checkout.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["React", "Redux", "Stripe"],
    category: "frontend",
    status: "online" as const,
    website: "https://www.maiyu.com.br",
  },
  {
    id: "7",
    title: "App de Fitness",
    description:
      "Aplicativo para tracking de exercícios, dieta e progressão corporal.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["Flutter", "SQLite", "BLoC"],
    category: "mobile",
    github: "https://github.com/jhollyfer",
  },
  {
    id: "8",
    title: "CMS Headless",
    description:
      "Sistema de gerenciamento de conteúdo com API GraphQL para múltiplas plataformas.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["GraphQL", "Apollo", "PostgreSQL"],
    category: "backend",
    status: "online" as const,
    github: "https://github.com/jhollyfer",
    website: "https://www.maiyu.com.br",
  },
];

function getFilteredProjects(category: ProjectCategory) {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

interface Props {
  searchParams: Promise<{ category: string }>;
}

interface ProjectsGridProps {
  projects: Project[];
}

function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-white/5 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 mx-auto mb-4 opacity-50">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-white mb-2">
        Nenhum projeto encontrado
      </h3>
      <p className="text-white/70 max-w-md mx-auto">
        Não encontramos projetos nesta categoria. Tente filtrar por uma
        categoria diferente.
      </p>
    </div>
  );
}

export default async function Portfolio({ searchParams }: Props) {
  const params = await searchParams;
  const category = (params.category ?? "all") as ProjectCategory;

  const filteredProjects = getFilteredProjects(category);

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
          <div className="inline-flex w-full items-center justify-center pb-8">
            {filters.map((filter) => (
              <FilterButton key={filter} category={filter} />
            ))}
          </div>
        </Suspense>

        <Suspense fallback={<ProjectsGridSkeleton />}>
          <ProjectsGrid projects={filteredProjects} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category ?? "all";

  const titles = {
    all: "Portfólio",
    frontend: "Portfólio - Front-end",
    backend: "Portfólio - Back-end",
    mobile: "Portfólio - Mobile",
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
      siteName: "Portfolio de Jhollyfer Rodrigues",
      locale: "pt-BR",
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: "Portfolio de Jhollyfer Rodrigues",
        },
      ],
    },
  };
}
