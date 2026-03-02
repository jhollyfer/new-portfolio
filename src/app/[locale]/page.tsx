import { Link } from "@/i18n/navigation";
import { Hero } from "@/templates/home/sections/hero";
import { ProjectCard } from "@/templates/portfolio/components/project-card/project-card";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CodeIcon,
  ServerIcon,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://jhollyfer.com.br/og-image.png",
      siteName: "jhollyfer.com.br",
      locale,
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: t("title"),
        },
      ],
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tp = await getTranslations("projects");

  const categories = [
    {
      icon: <CodeIcon size={20} />,
      titleKey: "categories.frontend.title" as const,
      descKey: "categories.frontend.description" as const,
      href: "/skills" as const,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: <ServerIcon size={20} />,
      titleKey: "categories.backend.title" as const,
      descKey: "categories.backend.description" as const,
      href: "/skills" as const,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: <BriefcaseIcon size={20} />,
      titleKey: "categories.works.title" as const,
      descKey: "categories.works.description" as const,
      href: "/portfolio" as const,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  const featuredProjects = [
    {
      title: "ADACAIBS",
      description: tp("adacaibs"),
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
      description: tp("matiscraft"),
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
      description: tp("manganga"),
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

  return (
    <div>
      <Hero />

      {/* Categories Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.titleKey}
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
                    {t(cat.titleKey)}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(cat.descKey)}
                  </p>
                </div>
                <ArrowRightIcon
                  size={16}
                  className="shrink-0 mt-1 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t("featuredProjects")}
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-green-400 transition-colors duration-200 cursor-pointer"
            >
              {t("viewAll")}
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
      <section className="py-24">
        <div className="section-container">
          <div className="card-border bg-gradient-to-b from-white/[0.04] to-transparent p-12 sm:p-20 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-balance">
              {t("cta.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-300 transition-colors duration-200 cursor-pointer"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
