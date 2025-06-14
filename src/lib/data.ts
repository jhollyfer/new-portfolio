import { Project } from "./model";

export const PROJECT_LIST: Project[] = [
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
