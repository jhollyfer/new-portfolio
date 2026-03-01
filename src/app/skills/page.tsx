import { SkillIcon } from "@/templates/skills/components/skill-icon/skill-icon";
import {
  CodeIcon,
  DatabaseIcon,
  GitBranchIcon,
  ServerIcon,
  SmartphoneIcon,
} from "lucide-react";
import { Metadata } from "next";

const skillSections = [
  {
    id: "frontend",
    title: "Front-end",
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
    title: "Back-end",
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
    title: "Banco de Dados",
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
    title: "Mobile",
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
    title: "DevOps",
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

export const metadata: Metadata = {
  title: "Jhollyfer | Habilidades e Tecnologias",
  description:
    "Conheca um pouco mais sobre minhas habilidades e tecnologias que utilizo, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Habilidades e Tecnologias",
    description:
      "Conheca um pouco mais sobre minhas habilidades e tecnologias que utilizo, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "jhollyfer.com.br",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Jhollyfer | Habilidades e Tecnologias",
      },
    ],
  },
};

export default function Skills() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="page-header">
          <h1>Tecnologias e Habilidades</h1>
          <p>
            Ferramentas e tecnologias que utilizo no dia a dia de
            desenvolvimento
          </p>
        </div>

        <div className="space-y-20">
          {skillSections.map((section) => (
            <section key={section.id} aria-labelledby={`heading-${section.id}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`section-badge ${section.bgColor} ${section.color}`}>
                  {section.icon}
                </div>
                <h2 id={`heading-${section.id}`} className="text-xl font-semibold">
                  {section.title}
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
