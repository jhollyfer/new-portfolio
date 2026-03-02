"use server";

import { PROJECT_LIST } from "@/lib/data";
import { ProjectCategory } from "@/lib/model";

export async function getFilteredProjects(category: ProjectCategory) {
  if (category === "all") return PROJECT_LIST;
  return PROJECT_LIST.filter((project) => project.category === category);
}
