import { Project } from "./model";

export const PROJECT_LIST: Project[] = [
  {
    id: "1",
    title: "ADACAIBS",
    description:
      "Site da Associação de Desenvolvimento Artístico e Cultural da Aldeia Indígena de Belem do Solimões. Preservação da cultura Tikuna e conservação da biodiversidade.",
    image: "/images/adacaibs.webp",
    techs: [
      "React",
      "AdonisJS",
      "TanStack Query",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    category: "frontend",
    status: "online" as const,
    website: "https://adacaibs.com.br",
  },
  {
    id: "2",
    title: "MatisCraft",
    description:
      "Catalogo digital que preserva, documenta e valoriza o artesanato tradicional do povo Matis, conectando historia, identidade e saberes ancestrais.",
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
    status: "online" as const,
    website: "https://matis.maiyu.com.br",
  },
  {
    id: "3",
    title: "Manganga",
    description:
      "Site oficial do Boi Bumba Manganga, celebrando mais de 30 anos de tradição cultural amazônica em Benjamin Constant, o maior festival folclórico do Alto Solimões.",
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
    status: "online" as const,
    website: "https://www.manganga.maiyu.com.br",
  },
];
