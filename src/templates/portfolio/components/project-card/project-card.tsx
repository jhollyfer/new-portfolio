import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  techs: string[];
  status?: "online" | "offline";
  github?: string;
  website?: string;
}

const MAX_VISIBLE_TECHS = 4;

export function ProjectCard({
  title,
  description,
  image,
  techs,
  status,
  github,
  website,
}: Props) {
  const visibleTechs = techs.slice(0, MAX_VISIBLE_TECHS);
  const remainingCount = techs.length - MAX_VISIBLE_TECHS;

  return (
    <article className="group card-border overflow-hidden flex flex-col">
      <div className="relative h-56 bg-muted/50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {status === "online" && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 text-xs rounded-full bg-black/60 backdrop-blur-sm text-green-400 font-medium">
            Online
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold tracking-tight mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed text-balance">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTechs.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="tech-badge">
              +{remainingCount}
            </span>
          )}
        </div>

        {(github || website) && (
          <div className="flex items-center gap-3 mt-auto border-t border-white/[0.06] pt-4">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                aria-label={`Ver codigo de ${title} no GitHub`}
              >
                <GithubIcon size={14} />
                GitHub
              </Link>
            )}
            {website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                aria-label={`Visitar site ${title}`}
              >
                <ExternalLinkIcon size={14} />
                Website
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
