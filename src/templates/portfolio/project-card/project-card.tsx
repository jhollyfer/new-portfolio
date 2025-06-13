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
    <div className="border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="p-4 min-h-[80px]">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 px-4 mb-3">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-gray-900 border border-white/10 text-white/80"
          >
            {tech}
          </span>
        ))}

        {status === "online" && (
          <span className="bg-green-500 text-white font-medium px-3 py-1 text-xs rounded-full">
            Online
          </span>
        )}
      </div>

      <div className="relative h-48 bg-gray-900">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-3">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Ver código no GitHub"
            >
              <GithubIcon size={16} className="text-white" />
            </Link>
          )}
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Visitar site"
            >
              <ExternalLinkIcon size={16} className="text-white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
