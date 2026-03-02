import { SkillIcon } from "@/templates/skills/components/skill-icon/skill-icon";
import {
  CodeIcon,
  DatabaseIcon,
  GitBranchIcon,
  ServerIcon,
  SmartphoneIcon,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

const skillSections = [
  {
    id: "frontend",
    icon: <CodeIcon size={18} />,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
  },
  {
    id: "backend",
    icon: <ServerIcon size={18} />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    id: "database",
    icon: <DatabaseIcon size={18} />,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    id: "mobile",
    icon: <SmartphoneIcon size={18} />,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    skills: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    id: "devops",
    icon: <GitBranchIcon size={18} />,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.skills" });

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

export default async function Skills({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("skills");

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="page-header">
          <h1>{t("pageTitle")}</h1>
          <p>{t("pageDescription")}</p>
        </div>

        <div className="space-y-20">
          {skillSections.map((section) => (
            <section key={section.id} aria-labelledby={`heading-${section.id}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`section-badge ${section.bgColor} ${section.color}`}>
                  {section.icon}
                </div>
                <h2 id={`heading-${section.id}`} className="text-xl font-semibold">
                  {t(`sections.${section.id}`)}
                </h2>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
                {section.skills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
