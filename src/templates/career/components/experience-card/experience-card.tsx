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
    <div
      className={cn(
        "border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 card-border p-5 transition-all duration-300 hover:border-opacity-30 h-full",
        variant === "accent" ? "border-green-400/30" : "border-white/10"
      )}
    >
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <h4 className="text-base text-white/70 mb-3">{company}</h4>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-white/50">{period}</span>
        {variant === "accent" && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/30 text-green-400">
            Atual
          </span>
        )}
      </div>

      <p className="text-sm text-white/80 mb-4">{description}</p>

      {techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-neutral-950 border border-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
