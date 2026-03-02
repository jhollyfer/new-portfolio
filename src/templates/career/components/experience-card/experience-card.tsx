import { cn } from "@/lib/utils";

interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
  techs?: string[];
  variant?: "default" | "accent";
  currentLabel?: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  techs,
  variant = "default",
  currentLabel,
}: Props) {
  return (
    <article
      className={cn(
        "card-border p-5",
        variant === "accent" && "border-l-2 border-l-green-400 border-green-400/20 bg-green-400/[0.02]"
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold mb-0.5">{title}</h3>
          <h4 className="text-sm text-muted-foreground">{company}</h4>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <time className="text-xs text-muted-foreground">
            {period}
          </time>
          {variant === "accent" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/15 text-green-400 font-medium">
              {currentLabel ?? "Atual"}
            </span>
          )}
        </div>
      </div>

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
