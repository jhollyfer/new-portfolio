import { Project } from "./model";

export const PROJECT_LIST: Project[] = [
  {
    id: "1",
    title: "ADACAIBS",
    description:
      "Site da Associacao de Desenvolvimento Artistico e Cultural da Aldeia Indigena de Belem do Solimoes. Preservacao da cultura Tikuna e conservacao da biodiversidade.",
    image: "/og-image.png",
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
    image: "/og-image.png",
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
      "Site oficial do Boi Bumba Manganga, celebrando mais de 30 anos de tradicao cultural amazonica em Benjamin Constant, o maior festival folclorico do Alto Solimoes.",
    image: "/og-image.png",
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
