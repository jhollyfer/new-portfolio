import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ProjectCard } from "../project-card/project-card";
import { Empty } from "./empty";

interface ProjectListGridProps {
  projects: readonly Project[];
}

export function ProjectListGrid({
  projects,
}: ProjectListGridProps): React.JSX.Element {
  if (projects.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {projects.map((project, index) => {
        const isFeatured = index === 0;
        return (
          <ScrollReveal
            key={project.id}
            delay={index * 70}
            className={cn(
              "col-span-1",
              isFeatured ? "md:col-span-12" : "md:col-span-6",
            )}
          >
            <ProjectCard project={project} featured={isFeatured} />
          </ScrollReveal>
        );
      })}
    </div>
  );
}
