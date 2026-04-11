import type { Project, ProjectCategory } from "./types";

export const PROJECT_LIST = [
  {
    id: "1",
    slug: "adacaibs",
    title: "ADACAIBS",
    year: 2024,
    role: "Full-stack developer",
    description:
      "Site da Associação de Desenvolvimento Artístico e Cultural da Aldeia Indígena de Belém do Solimões. Preservação da cultura Tikuna e conservação da biodiversidade.",
    summary:
      "Plataforma institucional para associação cultural indígena no Alto Solimões.",
    problem:
      "A associação precisava de presença digital para divulgar projetos culturais, captar apoio e documentar a preservação da cultura Tikuna.",
    solution:
      "Site institucional com gestão de conteúdo, galeria multimídia e formulário de contato, otimizado para conexões de baixa largura de banda.",
    outcome:
      "Visibilidade nacional para a causa e aumento de parcerias institucionais com universidades e ONGs.",
    highlights: [
      "Arquitetura headless com AdonisJS + React",
      "Performance 95+ no Lighthouse em redes 3G",
      "i18n PT/EN para alcance internacional",
    ],
    image: "/images/adacaibs.webp",
    techs: [
      "React",
      "AdonisJS",
      "TanStack Query",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    category: "frontend",
    status: "online",
    featured: true,
    links: {
      website: "https://adacaibs.com.br",
    },
  },
  {
    id: "2",
    slug: "matiscraft",
    title: "MatisCraft",
    year: 2026,
    role: "Full-stack developer",
    description:
      "Catálogo digital que preserva, documenta e valoriza o artesanato tradicional do povo Matis, conectando história, identidade e saberes ancestrais.",
    summary:
      "Catálogo digital do artesanato tradicional Matis com camadas de curadoria.",
    problem:
      "O artesanato Matis corria risco de perder contexto e narrativa ao ser vendido em mercados externos sem atribuição cultural.",
    solution:
      "Catálogo com cada peça ligada à sua história, artesão e significado. Integração com painel administrativo para os líderes da aldeia curarem conteúdo.",
    outcome:
      "Documentação viva de mais de 80 peças com narrativa associada e trilha de origem.",
    highlights: [
      "TanStack Start SSR para SEO pleno",
      "CMS-lite sob medida em Fastify + Prisma",
      "Galeria com lazy-loading progressivo",
    ],
    image: "/images/matis.webp",
    techs: [
      "React",
      "TanStack Start",
      "Fastify",
      "TanStack Query",
      "Tailwind CSS",
      "Prisma",
    ],
    category: "frontend",
    status: "online",
    featured: true,
    links: {
      website: "https://matis.maiyu.com.br",
    },
  },
  {
    id: "3",
    slug: "manganga",
    title: "Manganga",
    year: 2024,
    role: "Full-stack developer",
    description:
      "Site oficial do Boi Bumbá Manganga, celebrando mais de 30 anos de tradição cultural amazônica em Benjamin Constant, o maior festival folclórico do Alto Solimões.",
    summary:
      "Presença digital para o maior festival folclórico do Alto Solimões.",
    problem:
      "O grupo folclórico não tinha presença digital proporcional ao alcance do festival, limitando captação de patrocínio e cobertura de mídia.",
    solution:
      "Site com história do grupo, agenda de apresentações, galeria de arte e canal direto com a imprensa.",
    outcome:
      "Mais de 10 mil visitas durante a temporada do festival e captação de novos patrocinadores locais.",
    highlights: [
      "SSR + CDN para picos de tráfego do festival",
      "Galeria editorial com alta densidade de mídia",
      "Integração com redes sociais institucionais",
    ],
    image: "/images/manganga.webp",
    techs: [
      "React",
      "TanStack Start",
      "Fastify",
      "TanStack Query",
      "Tailwind CSS",
      "Prisma",
    ],
    category: "frontend",
    status: "online",
    featured: true,
    links: {
      website: "https://www.manganga.maiyu.com.br",
    },
  },
] as const satisfies readonly Project[];

export function countProjectsByCategory(category: ProjectCategory): number {
  if (category === "all") return PROJECT_LIST.length;
  return PROJECT_LIST.filter((project) => project.category === category).length;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECT_LIST.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = PROJECT_LIST.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  const prev = index > 0 ? PROJECT_LIST[index - 1] : null;
  const next = index < PROJECT_LIST.length - 1 ? PROJECT_LIST[index + 1] : null;
  return { prev, next };
}
