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

export function ProjectCard({
  title,
  description,
  image,
  techs,
  status,
  github,
  website,
}: Props) {
  return (
    <article className="card-border overflow-hidden">
      <div className="relative h-52 bg-muted/50">
        <Image
          src={image}
          alt={title}
          className="object-cover object-top"
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="font-semibold mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed text-balance">
          {description}
        </p>

        {(github || website) && (
          <div className="flex items-center gap-3 mb-4">
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

        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {status === "online" && (
            <span className="px-2.5 py-0.5 text-xs rounded-full bg-green-400/15 text-green-400 font-medium">
              Online
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
