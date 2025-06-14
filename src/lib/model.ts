export type ProjectCategory = "all" | "frontend" | "backend" | "mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techs: string[];
  category: ProjectCategory;
  status?: "online" | "offline";
  github?: string;
  website?: string;
}
