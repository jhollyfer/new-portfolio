import { Project } from "@/lib/model";
import { ProjectCard } from "../project-card/project-card";
import { Empty } from "./empty";

interface Props {
  projects: Project[];
}

export function ProjectListGrid({ projects }: Props) {
  if (projects.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
