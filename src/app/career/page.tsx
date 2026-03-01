import { ExperienceCard } from "@/templates/career/components/experience-card";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { Metadata } from "next";

const professionalExperience = [
  {
    title: "Desenvolvedor Full Stack - Pleno",
    company: "Fundacao RTVE/UFG",
    period: "Jan/2025 - Atualmente",
    description:
      "Desenvolvimento de aplicacao de gerenciamento de base de dados, capaz de criar multiplas tabelas e estabelecer relacoes entre os dados de forma dinamica e eficiente",
    techs: ["React JS", "TypeScript", "Node.js", "Fastify", "MongoDB"],
    variant: "accent" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Tech Lead",
    company: "Clicksoft",
    period: "Setembro/2024 - Dezembro/2024",
    description:
      "Coordenacao de equipes de desenvolvimento, garantindo entregas alinhadas as melhores praticas do mercado. Definicao de arquiteturas de sistemas escalaveis e resilientes para projetos estrategicos",
    techs: ["Node.js", "AdonisJS", "TypeScript", "RESTful API"],
    variant: "default" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Pleno",
    company: "Clicksoft",
    period: "Junho/2023 - Agosto/2024",
    description:
      "Desenvolvimento de sistemas completos para clientes, utilizando React, Node.js e MongoDB. Integracao com APIs de pagamento e implementacao de autenticacao JWT.",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    variant: "default" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Junior",
    company: "Clicksoft",
    period: "Marco/2022 - Maio/2023",
    description:
      "Desenvolvimento de sistemas completos para clientes, utilizando React, Node.js e MongoDB. Integracao com APIs de pagamento e implementacao de autenticacao JWT.",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    variant: "default" as const,
  },
  {
    title: "Consultor Fluig - Junior",
    company: "Grupo IV2",
    period: "Marco/2021 - Fevereiro/2022",
    description:
      "Customizacao e implementacao de solucoes na plataforma Fluig, otimizando processos de gestao empresarial. Automacao de fluxos de trabalho e integracoes entre sistemas ERP e Fluig",
    techs: ["Java", "Javascript"],
    variant: "default" as const,
  },
  {
    title: "Programador - Pesquisador",
    company: "Instituto Federal do Amazonas",
    period: "Marco/2021 - Fevereiro/2022",
    description:
      "Pesquisas de solucoes tecnologicas para projetos academicos e pesquisas voltadas para inovacao e impacto social na regiao amazonica.",
    techs: ["Java", "Javascript", "Pascal", "Lazarus", "Delphi"],
    variant: "default" as const,
  },
];

const academicExperience = [
  {
    title: "Especialista em Desenvolvimento Full Stack",
    company: "Universidade Federal do Amazonas - Web Academy",
    period: "2025 - 2026",
    description:
      "Especializacao em desenvolvimento web full stack pelo programa Web Academy (parceria UFAM/Motorola), com enfase em aplicacoes modernas, inteligencia artificial e ciberseguranca.",
  },
  {
    title: "Bacharelado em Engenharia de Software",
    company: "Universidade Federal do Amazonas",
    period: "2017 - 2022",
    description:
      "Formacao academica em engenharia de software com enfase em desenvolvimento de software, algoritmos e estrutura de dados.",
  },
  {
    title: "Tecnico em Informatica",
    company: "Instituto Federal do Amazonas",
    period: "2014 - 2016",
    description:
      "Formacao tecnica em informatica com enfase em programacao e redes de computadores.",
  },
];

export const metadata: Metadata = {
  title: "Jhollyfer | Carreira",
  description:
    "Conheca um pouco mais sobre minhas experiencias e formacoes, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Carreira",
    description:
      "Conheca um pouco mais sobre minhas experiencias e formacoes, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "jhollyfer.com.br",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Jhollyfer | Carreira",
      },
    ],
  },
};

export default function Career() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="page-header">
          <h1>Trajetoria ate aqui</h1>
          <p>Minha experiencia profissional e formacao academica</p>
        </div>

        {/* Professional Experience */}
        <section className="mb-20" aria-labelledby="heading-professional">
          <div className="flex items-center gap-3 mb-8">
            <div className="section-badge bg-green-400/10 text-green-400">
              <BriefcaseIcon size={18} />
            </div>
            <h2 id="heading-professional" className="text-xl font-semibold">Area Profissional</h2>
          </div>

          <div className="space-y-4">
            {professionalExperience.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </section>

        {/* Academic Experience */}
        <section aria-labelledby="heading-academic">
          <div className="flex items-center gap-3 mb-8">
            <div className="section-badge bg-blue-400/10 text-blue-400">
              <GraduationCapIcon size={18} />
            </div>
            <h2 id="heading-academic" className="text-xl font-semibold">Academica</h2>
          </div>

          <div className="space-y-4">
            {academicExperience.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
