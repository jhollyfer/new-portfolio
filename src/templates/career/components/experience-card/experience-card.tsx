import { cn } from "@/lib/utils";

interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
  techs?: string[];
  variant?: "default" | "accent";
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  techs,
  variant = "default",
}: Props) {
  return (
    <article
      className={cn(
        "card-border p-5",
        variant === "accent" && "border-green-400/20 bg-green-400/[0.02]"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold mb-0.5">{title}</h3>
          <h4 className="text-sm text-muted-foreground">{company}</h4>
        </div>
        {variant === "accent" && (
          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-400/15 text-green-400 font-medium">
            Atual
          </span>
        )}
      </div>

      <time className="inline-block text-xs text-muted-foreground mb-3">
        {period}
      </time>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
