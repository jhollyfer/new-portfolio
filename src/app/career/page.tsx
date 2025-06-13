import { ExperienceCard } from "@/templates/career/components/experience-card";
import { Metadata } from "next";

// Professional experience data
const professionalExperience = [
  {
    title: "Desenvolvedor Full Stack - Pleno",
    company: "Fundação RTVE/UFG",
    period: "Jan/2025 - Atualmente",
    description:
      "Desenvolvimento de aplicação de gerenciamento de base de dados, capaz de criar múltiplas tabelas e estabelecer relações entre os dados de forma dinâmica e eficiente",
    techs: ["React JS", "TypeScript", "Node.js", "Fastify", "MongoDB"],
    variant: "accent" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Tech Lead",
    company: "Clicksoft",
    period: "Setembro/2024 - Dezembro/2024",
    description:
      "Coordenação de equipes de desenvolvimento, garantindo entregas e alinhadas às melhores práticas do mercado. Definição de arquiteturas de sistemas escaláveis e resilientes para projetos estratégicos de múltiplos projetos",
    techs: ["Node.js", "AdonisJS", "TypeScript", "RESTful API"],
    variant: "default" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Pleno",
    company: "Clicksoft",
    period: "Junho/2023 - Agosto/2024",
    description:
      "Desenvolvimento de sistemas completos para clientes, utilizando React, Node.js e MongoDB. Integração com APIs de pagamento e implementação de autenticação JWT.",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    variant: "default" as const,
  },
  {
    title: "Desenvolvedor Full Stack - Júnior",
    company: "Clicksoft",
    period: "Março/2022 - Maio/2023",
    description:
      "Desenvolvimento de sistemas completos para clientes, utilizando React, Node.js e MongoDB. Integração com APIs de pagamento e implementação de autenticação JWT.",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    variant: "default" as const,
  },
  {
    title: "Consultor Fluig - Júnior",
    company: "Grupo IV2",
    period: "Março/2021 - Fevereiro/2022",
    description:
      "Customização e implementação de soluções na plataforma Fluig, otimizando processos de gestão empresarial. Automação de fluxos de trabalho e integrações entre sistemas ERP e Fluig",
    techs: ["Java", "Javascript"],
    variant: "default" as const,
  },
  {
    title: "Programador - Pesquisador",
    company: "Instituto Federal do Amazonas",
    period: "Março/2021 - Fevereiro/2022",
    description:
      "Pesquisas de soluções tecnológicas para projetos acadêmicos e pesquisas voltadas para inovação e impacto social. Estudos sobre tecnologias emergentes aplicadas a educação e inclusão digital na região amazônica.",
    techs: ["Java", "Javascript", "Pascal", "Lazarus", "Delphi"],
    variant: "default" as const,
  },
];

// Academic experience data
const academicExperience = [
  {
    title: "Bacharelado em Engenheiro de Software",
    company: "Universidade Federal do Amazonas",
    period: "2017 - 2022",
    description:
      "Formação acadêmica em engenharia de software com enfase em desenvolvimento de software, algoritmos e estrutura de dados.",
  },
  {
    title: "Técnico Informática",
    company: "Instituto Federal do Amazonas",
    period: "2014 - 2016",
    description:
      "Formação técnica em informática com ênfase em programação e redes de computadores.",
  },
];

export const metadata: Metadata = {
  title: "Carreira",
  description:
    "Conheça um pouco mais sobre minhas experiências e formações, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Carreira",
    description:
      "Conheça um pouco mais sobre minhas experiências e formações, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
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

export default function Career() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Trajetória até aqui
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Minha experiência profissional e formação acadêmica
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 mr-4">
              <div className="text-green-500">💼</div>
            </div>
            <h2 className="text-2xl font-bold">Área profissional</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {professionalExperience.map((experience, index) => (
              <div key={index}>
                <ExperienceCard {...experience} />
              </div>
            ))}
          </div>
        </div>

        {/* Academic Experience */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
              <div className="text-blue-500">🎓</div>
            </div>
            <h2 className="text-2xl font-bold">Acadêmica</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {academicExperience.map((experience, index) => (
              <div key={index}>
                <ExperienceCard {...experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
