import { Hero } from "@/templates/home/sections/hero";
import { ProjectCard } from "@/templates/portfolio/components/project-card/project-card";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio de Jhollyfer Rodrigues",
  description:
    "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio de Jhollyfer Rodrigues",
    description:
      "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
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

const featuredProjects = [
  {
    title: "Move.it",
    description:
      "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["React JS", "TypeScript"],
    status: "online" as const,
    github: "https://github.com/jhollyfer",
    website: "https://jhollyfer.com.br",
  },
  {
    title: "Projeto B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam nunc eget.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/jhollyfer",
  },
  {
    title: "Projeto C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam nunc eget.",
    image: "https://jhollyfer.com.br/og-image.png",
    techs: ["React Native", "Expo", "Firebase"],
    status: "online" as const,
    website: "https://jhollyfer.com.br",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Categories Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Front-end Card */}
            <div className="card-border p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <div className="text-green-400 text-xl">&lt;/&gt;</div>
              </div>
              <h2 className="text-xl font-bold mb-2">Front-end</h2>
              <p className="text-white/70 text-sm mb-4">
                Desenvolvimento de interfaces modernas e responsivas com foco na
                experiência do usuário.
              </p>
              <Link
                href="/skills"
                className="text-green-400 flex items-center text-sm hover:underline mt-auto"
              >
                Saiba mais <ArrowRightIcon size={14} className="ml-1" />
              </Link>
            </div>

            {/* Back-end Card */}
            <div className="card-border p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <div className="text-blue-400 text-xl">{`{ }`}</div>
              </div>
              <h2 className="text-xl font-bold mb-2">Back-end</h2>
              <p className="text-white/70 text-sm mb-4">
                Construção de APIs e serviços robustos, escaláveis e com alta
                performance.
              </p>
              <Link
                href="/skills"
                className="text-blue-400 flex items-center text-sm hover:underline mt-auto"
              >
                Saiba mais <ArrowRightIcon size={14} className="ml-1" />
              </Link>
            </div>

            {/* Mobile Card */}
            <div className="card-border p-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <div className="text-purple-400 text-xl">&#8473;</div>
              </div>
              <h2 className="text-xl font-bold mb-2">Trabalhos</h2>
              <p className="text-white/70 text-sm mb-4">
                Projetos realizados para clientes e empresas com foco em
                qualidade e resultados.
              </p>
              <Link
                href="/portfolio"
                className="text-purple-400 flex items-center text-sm hover:underline mt-auto"
              >
                Saiba mais <ArrowRightIcon size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Projetos em destaque</h2>
            <Link
              href="/portfolio"
              className="text-green-400 flex items-center hover:underline"
            >
              Ver todos <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-border p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Vamos conversar?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Estou disponível para novos projetos e oportunidades. Entre em
              contato para conversarmos sobre como posso ajudar você ou sua
              empresa.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-opacity-90 transition-all"
            >
              Vamos conversar!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
