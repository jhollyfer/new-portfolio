import { Hero } from "@/templates/home/sections/hero";
import { ProjectCard } from "@/templates/portfolio/components/project-card/project-card";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CodeIcon,
  ServerIcon,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jhollyfer | Inicio",
  description:
    "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Inicio",
    description:
      "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "jhollyfer.com.br",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Jhollyfer | Inicio",
      },
    ],
  },
};

const categories = [
  {
    icon: <CodeIcon size={20} />,
    title: "Front-end",
    description:
      "Interfaces modernas e responsivas com foco na experiencia do usuario.",
    href: "/skills",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: <ServerIcon size={20} />,
    title: "Back-end",
    description: "APIs e servicos robustos, escalaveis e com alta performance.",
    href: "/skills",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: <BriefcaseIcon size={20} />,
    title: "Trabalhos",
    description:
      "Projetos para clientes e empresas com foco em qualidade e resultados.",
    href: "/portfolio",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

const featuredProjects = [
  {
    title: "ADACAIBS",
    description:
      "Site da Associacao de Desenvolvimento Artistico e Cultural da Aldeia Indigena de Belem do Solimoes. Preservacao da cultura Tikuna e conservacao da biodiversidade.",
    image: "/images/adacaibs.webp",
    techs: [
      "React",
      "AdonisJS",
      "TanStack Query",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    status: "online" as const,
    website: "https://adacaibs.com.br",
  },
  {
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
    status: "online" as const,
    website: "https://matis.maiyu.com.br",
  },
  {
    title: "Manganga",
    description:
      "Site oficial do Boi Bumba Manganga, celebrando mais de 30 anos de tradicao cultural amazonica em Benjamin Constant, o maior festival folclorico do Alto Solimoes.",
    image: "/images/manganga.webp",
    techs: [
      "React",
      "TanStack Start",
      "Fastify",
      "TanStack Query",
      "Tailwind CSS",
      "Prisma",
    ],
    status: "online" as const,
    website: "https://www.manganga.maiyu.com.br",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Categories Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group card-border p-6 flex items-start gap-4 hover:border-white/20 cursor-pointer"
              >
                <div
                  className={`section-badge shrink-0 ${cat.bgColor} ${cat.color}`}
                >
                  {cat.icon}
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold mb-1 group-hover:text-green-400 transition-colors duration-200">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <ArrowRightIcon
                  size={16}
                  className="shrink-0 mt-1 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Projetos em destaque
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-green-400 transition-colors duration-200 cursor-pointer"
            >
              Ver todos
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="card-border p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-balance">
              Estou disponivel para novos projetos e oportunidades. Entre em
              contato para conversarmos sobre como posso ajudar.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-300 transition-colors duration-200 cursor-pointer"
            >
              Vamos conversar!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
