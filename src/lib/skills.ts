import type { Skill, SkillCategory } from "./types";

const ICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function icon(slug: string, variant = "original"): string {
  return `${ICON_BASE}/${slug}/${slug}-${variant}.svg`;
}

export const SKILLS = [
  { name: "React", icon: icon("react"), category: "frontend", level: 3 },
  { name: "Next.js", icon: icon("nextjs", "original-wordmark"), category: "frontend", level: 3 },
  { name: "TypeScript", icon: icon("typescript"), category: "frontend", level: 3 },
  { name: "JavaScript", icon: icon("javascript"), category: "frontend", level: 3 },
  { name: "Vue", icon: icon("vuejs"), category: "frontend", level: 2 },
  { name: "HTML5", icon: icon("html5"), category: "frontend", level: 3 },
  { name: "CSS3", icon: icon("css3"), category: "frontend", level: 3 },
  { name: "Tailwind", icon: icon("tailwindcss", "original"), category: "frontend", level: 3 },

  { name: "Node.js", icon: icon("nodejs"), category: "backend", level: 3 },
  { name: "Express", icon: icon("express", "original"), category: "backend", level: 3 },
  { name: "GraphQL", icon: icon("graphql", "plain"), category: "backend", level: 2 },
  { name: "Python", icon: icon("python"), category: "backend", level: 2 },
  { name: "PHP", icon: icon("php"), category: "backend", level: 2 },
  { name: "Laravel", icon: icon("laravel", "original"), category: "backend", level: 2 },

  { name: "PostgreSQL", icon: icon("postgresql"), category: "database", level: 3 },
  { name: "MongoDB", icon: icon("mongodb"), category: "database", level: 3 },
  { name: "MySQL", icon: icon("mysql"), category: "database", level: 2 },
  { name: "Redis", icon: icon("redis"), category: "database", level: 2 },

  { name: "React Native", icon: icon("react"), category: "mobile", level: 3 },
  { name: "Flutter", icon: icon("flutter"), category: "mobile", level: 1 },

  { name: "Docker", icon: icon("docker"), category: "devops", level: 2 },
  { name: "Git", icon: icon("git"), category: "devops", level: 3 },
  { name: "AWS", icon: icon("amazonwebservices", "original-wordmark"), category: "devops", level: 2 },
  { name: "GitHub", icon: icon("github"), category: "devops", level: 3 },
] as const satisfies readonly Skill[];

export function getSkillsByCategory(
  category: SkillCategory,
): readonly Skill[] {
  return SKILLS.filter((skill) => skill.category === category);
}
