import type { Certification, Education, Experience } from "./types";

export const EXPERIENCES: readonly Experience[] = [
  {
    id: "exp1",
    role: "Full-stack Developer (Mid-level)",
    company: "Fundação RTVE / UFG",
    location: "Goiânia, GO, BR (remoto)",
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
    id: "expCetam",
    role: "Instrutor de Tecnologia",
    company: "CETAM",
    location: "Benjamin Constant, AM, BR",
    start: "2025-02",
    end: null,
    description:
      "Planejamento e condução de cursos de desenvolvimento web para turmas de até 30 alunos, com ementa em programação, arquitetura de software e boas práticas.",
    highlights: [
      "Turmas de até 30 alunos, +200 horas de instrução",
      "Conteúdo gamificado com taxa de conclusão >85%",
      "Mentoria prática em projetos de desenvolvimento web",
    ],
    techs: ["JavaScript", "TypeScript", "React", "Node.js"],
    current: true,
  },
  {
    id: "exp2",
    role: "Full-stack Developer (Tech Lead)",
    company: "Clicksoft",
    location: "Rio de Janeiro, RJ, BR",
    start: "2024-06",
    end: "2024-11",
    description:
      "Liderança técnica de 6 desenvolvedores em 3 projetos estratégicos nos setores de saúde, financeiro e governo.",
    highlights: [
      "Liderança de 6 devs em 3 projetos (saúde, financeiro, governo)",
      "100% das entregas dentro do prazo estabelecido",
      "Code review, Jest/Supertest e Clean Code reduzindo bugs em ~30%",
    ],
    techs: ["React", "Node.js", "AdonisJS", "PostgreSQL", "Jest"],
  },
  {
    id: "exp3",
    role: "Full-stack Developer (Pleno)",
    company: "Clicksoft",
    location: "Rio de Janeiro, RJ, BR",
    start: "2023-01",
    end: "2024-05",
    description:
      "Desenvolvimento e manutenção de aplicações web para clientes B2B nos setores de saúde, fintech e varejo, com integrações a meios de pagamento e autenticação robusta.",
    highlights: [
      "4 aplicações web em React, React Native e Node.js",
      "Integrações com 8+ APIs REST reduzindo falhas em 25%",
      "Otimização de queries PostgreSQL/MongoDB com ganho de até 50% no tempo de resposta",
      "Cobertura com Jest e Supertest em módulos críticos",
    ],
    techs: [
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Jest",
    ],
  },
  {
    id: "exp4",
    role: "Full-stack Developer (Júnior)",
    company: "Clicksoft",
    location: "Rio de Janeiro, RJ, BR",
    start: "2022-07",
    end: "2022-12",
    description:
      "Implementação de features front-end e back-end em 3 projetos simultâneos para gestão pública e e-commerce.",
    highlights: [
      "3 projetos simultâneos (gestão pública e e-commerce)",
      "Interfaces responsivas em React + TypeScript",
    ],
    techs: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "expInnovare",
    role: "Consultor Fluig (Júnior)",
    company: "Innovare TI",
    location: "Jundiaí, SP, BR",
    start: "2022-03",
    end: "2022-06",
    description:
      "Desenvolvimento de widgets customizados em WCM Fluig e integrações com sistemas ERP/CRM externos para clientes corporativos.",
    highlights: [
      "10+ widgets WCM Fluig para 3 clientes corporativos",
      "Integrações REST e Datasets com ERPs/CRMs externos",
    ],
    techs: ["Fluig", "JavaScript", "REST", "SOAP"],
  },
  {
    id: "exp5",
    role: "Consultor Fluig (Trainee)",
    company: "Grupo IV2",
    location: "Jundiaí, SP, BR",
    start: "2021-03",
    end: "2022-02",
    description:
      "Customização da plataforma Fluig com widgets e integrações, atendendo clientes em diferentes segmentos do ciclo completo de entrega.",
    highlights: [
      "15+ widgets customizados atendendo 5 clientes",
      "4 projetos de implementação end-to-end da plataforma Fluig",
      "Participação desde levantamento de requisitos até deploy",
    ],
    techs: ["Fluig", "JavaScript", "SOAP", "REST"],
  },
  {
    id: "exp6",
    role: "Researcher Programmer",
    company: "Instituto Federal do Amazonas",
    location: "Tabatinga, AM, BR",
    start: "2015-03",
    end: "2016-12",
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
    institution: "UFAM · Web Academy (parceria Motorola)",
    location: "Manaus, AM, BR",
    start: "2025",
    end: "2026",
    description:
      "Programa intensivo com ênfase em aplicações modernas, IA aplicada e cibersegurança.",
  },
  {
    id: "edu2",
    degree: "Bacharelado em Engenharia de Software",
    institution: "Universidade Federal do Amazonas",
    location: "Itacoatiara, AM, BR",
    start: "2017",
    end: "2022",
    description:
      "Formação com ênfase em engenharia de software, algoritmos e estruturas de dados.",
  },
  {
    id: "edu3",
    degree: "Técnico em Informática",
    institution: "Instituto Federal do Amazonas",
    location: "Tabatinga, AM, BR",
    start: "2014",
    end: "2016",
    description:
      "Formação técnica com ênfase em programação e redes de computadores.",
  },
];

export const CERTIFICATIONS: readonly Certification[] = [
  {
    id: "cert1",
    title: "Formação Node.js",
    institution: "Rocketseat",
  },
  {
    id: "cert2",
    title: "Formação React.js",
    institution: "Rocketseat",
  },
];
