import { SkillIcon } from "@/templates/skills/components/skill-icon/skill-icon";
import { Metadata } from "next";

const frontendSkills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

// Backend skills
const backendSkills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  // {
  //   name: "Django",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  // },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  // {
  //   name: "Firebase",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  // },
];

// Database skills
const databaseSkills = [
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
];

// Mobile skills
const mobileSkills = [
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  // {
  //   name: "Swift",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  // },
  // {
  //   name: "Kotlin",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  // },
];

// DevOps skills
const devopsSkills = [
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  // {
  //   name: "Kubernetes",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  // },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const metadata: Metadata = {
  title: "Jhollyfer | Habilidades e Tecnologias",
  description:
    "Conheça um pouco mais sobre minhas habilidades e tecnologias que utilizo, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Habilidades e Tecnologias",
    description:
      "Conheça um pouco mais sobre minhas habilidades e tecnologias que utilizo, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "https://jhollyfer.com.br/skills",
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
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Tecnologias e habilidades
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conheça as tecnologias e ferramentas que utilizo no meu dia a dia de
            desenvolvimento
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400/10 mr-4">
              <div className="text-green-400">&lt;/&gt;</div>
            </div>
            <h2 className="text-2xl font-bold">Front-end</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {frontendSkills.map((skill, index) => (
              <div key={index}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 mr-4">
              <div className="text-blue-500">{`{ }`}</div>
            </div>
            <h2 className="text-2xl font-bold">Back-end</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {backendSkills.map((skill, index) => (
              <div key={index}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 mr-4">
              <div className="text-purple-500">DB</div>
            </div>
            <h2 className="text-2xl font-bold">Banco de Dados</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {databaseSkills.map((skill, index) => (
              <div key={index}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/10 mr-4">
              <div className="text-pink-500">📱</div>
            </div>
            <h2 className="text-2xl font-bold">Mobile</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {mobileSkills.map((skill, index) => (
              <div key={index}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Skills */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400/10 mr-4">
              <div className="text-green-400">🔄</div>
            </div>
            <h2 className="text-2xl font-bold">DevOps</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {devopsSkills.map((skill, index) => (
              <div key={index}>
                <SkillIcon name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
