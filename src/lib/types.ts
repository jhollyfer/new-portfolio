export type Theme = "light" | "dark" | "system";

export type Locale = "pt-BR" | "en-US" | "es";

/* ---------------- Portfolio ---------------- */
export const PROJECT_CATEGORIES = [
  "all",
  "frontend",
  "backend",
  "mobile",
] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export function isProjectCategory(value: string): value is ProjectCategory {
  return (PROJECT_CATEGORIES as readonly string[]).includes(value);
}

export type ProjectStatus = "online" | "offline" | "archived";

export interface ProjectLinks {
  github?: string;
  website?: string;
  case?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  role: string;
  description: string;
  summary: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  highlights?: readonly string[];
  image: string;
  gallery?: readonly string[];
  techs: readonly string[];
  category: Exclude<ProjectCategory, "all">;
  status?: ProjectStatus;
  featured?: boolean;
  links: ProjectLinks;
}

/* ---------------- Career ---------------- */
export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string | null;
  description: string;
  highlights?: readonly string[];
  techs: readonly string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  start: string;
  end: string;
  description: string;
}

/* ---------------- Skills ---------------- */
export const SKILL_CATEGORIES = [
  "frontend",
  "backend",
  "database",
  "mobile",
  "devops",
] as const;
export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export type SkillLevel = 1 | 2 | 3;

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level?: SkillLevel;
  description?: string;
}

/* ---------------- Contact action ---------------- */
export type ContactStatus = "idle" | "pending" | "success" | "error";

export interface ContactState {
  status: ContactStatus;
  errors?: Partial<Record<"name" | "email" | "message" | "form", string>>;
  values?: {
    name?: string;
    email?: string;
    message?: string;
  };
}
