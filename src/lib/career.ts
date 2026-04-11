import type { Education, Experience } from "./types";

export const EXPERIENCES: readonly Experience[] = [
  {
    id: "exp1",
    role: "Full-stack Developer — Mid-level",
    company: "Fundação RTVE / UFG",
    location: "Remoto — Goiânia, BR",
    start: "2025-01",
    end: null,
    description:
      "Construção de aplicação para gerenciamento dinâmico de bases de dados, com criação de múltiplas tabelas e relações arbitrárias.",
    highlights: [
      "Modelagem dinâmica de schemas relacionais em runtime",
      "Interface de edição com validação por coluna",
      "Deploy contínuo em ambiente acadêmico",
    ],
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    current: true,
  },
  {
    id: "exp2",
    role: "Full-stack Developer — Tech Lead",
    company: "Clicksoft",
    location: "Manaus, BR",
    start: "2024-09",
    end: "2024-12",
    description:
      "Coordenação de times de produto definindo arquitetura, padrões e cadência de entrega para projetos estratégicos.",
    highlights: [
      "Desenho de arquitetura resiliente em 3 frentes simultâneas",
      "Mentoria técnica e code review sistemáticos",
      "Redução de lead-time de feature em ~30%",
    ],
    techs: ["React", "Node.js", "AdonisJS", "PostgreSQL", "AWS"],
  },
  {
    id: "exp3",
    role: "Full-stack Developer — Mid-level",
    company: "Clicksoft",
    location: "Manaus, BR",
    start: "2023-06",
    end: "2024-08",
    description:
      "Desenvolvimento de sistemas completos para clientes B2B com integração a meios de pagamento e autenticação robusta.",
    highlights: [
      "Integração com Pagar.me e Stripe",
      "Auth JWT com refresh rotacionado",
      "Painéis administrativos com RBAC granular",
    ],
    techs: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    id: "exp4",
    role: "Full-stack Developer — Junior",
    company: "Clicksoft",
    location: "Manaus, BR",
    start: "2022-03",
    end: "2023-05",
    description:
      "Implementação de features e correção de bugs em produtos web, com foco em qualidade e cobertura de testes.",
    highlights: [
      "Primeiras contribuições em CI/CD",
      "Cobertura de testes elevada em módulos críticos",
    ],
    techs: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "exp5",
    role: "Fluig Consultant — Junior",
    company: "Grupo IV2",
    location: "Manaus, BR",
    start: "2021-03",
    end: "2022-02",
    description:
      "Customização da plataforma Fluig automatizando fluxos de aprovação e integrações com ERPs corporativos.",
    highlights: [
      "Automação de processos de compra e RH",
      "Integrações REST/SOAP com sistemas legados",
    ],
    techs: ["Fluig", "JavaScript", "SOAP", "REST"],
  },
  {
    id: "exp6",
    role: "Researcher Programmer",
    company: "Instituto Federal do Amazonas",
    location: "Tabatinga, BR",
    start: "2019-03",
    end: "2020-12",
    description:
      "Pesquisa aplicada em soluções tecnológicas com foco em inovação e impacto social no Alto Solimões.",
    highlights: [
      "Protótipos de software para educação indígena",
      "Publicação interna e apresentação em congressos",
    ],
    techs: ["Python", "JavaScript", "Arduino"],
  },
];

export const EDUCATIONS: readonly Education[] = [
  {
    id: "edu1",
    degree: "Especialização em Desenvolvimento Full-stack",
    institution: "UFAM — Web Academy (parceria Motorola)",
    location: "Manaus, BR",
    start: "2025",
    end: "2026",
    description:
      "Programa intensivo com ênfase em aplicações modernas, IA aplicada e cibersegurança.",
  },
  {
    id: "edu2",
    degree: "Bacharelado em Engenharia de Software",
    institution: "Universidade Federal do Amazonas",
    location: "Manaus, BR",
    start: "2017",
    end: "2022",
    description:
      "Formação com ênfase em engenharia de software, algoritmos e estruturas de dados.",
  },
  {
    id: "edu3",
    degree: "Técnico em Informática",
    institution: "Instituto Federal do Amazonas",
    location: "Tabatinga, BR",
    start: "2014",
    end: "2016",
    description:
      "Formação técnica com ênfase em programação e redes de computadores.",
  },
];
