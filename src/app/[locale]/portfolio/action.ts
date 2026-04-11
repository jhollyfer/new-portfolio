"use server";

import { PROJECT_LIST } from "@/lib/data";
import type { Project, ProjectCategory } from "@/lib/types";

export async function getFilteredProjects(
  category: ProjectCategory,
): Promise<readonly Project[]> {
  if (category === "all") return PROJECT_LIST;
  return PROJECT_LIST.filter((project) => project.category === category);
}
