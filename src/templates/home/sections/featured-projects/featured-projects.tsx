import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { PROJECT_LIST } from "@/lib/data";
import { cn, focusRing } from "@/lib/utils";
import { ProjectCard } from "@/templates/portfolio/components/project-card/project-card";

export function FeaturedProjects(): React.JSX.Element {
  const t = useTranslations("home.featuredProjects");
  const featured = PROJECT_LIST.filter((project) => project.featured).slice(
    0,
    3,
  );

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <ScrollReveal>
              <p className="kbd mb-4">{t("eyebrow")}</p>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 className="text-display">{t("title")}</h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="mt-4 max-w-lg text-pretty text-base text-muted-foreground">
                {t("description")}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={180}>
            <Magnetic>
              <Link
                href="/portfolio"
                className={cn("cta-ghost", focusRing)}
              >
                {t("viewAll")}
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {featured.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 100}
              className={cn(
                "col-span-1",
                index === 0 ? "md:col-span-12" : "md:col-span-6",
              )}
            >
              <ProjectCard project={project} featured={index === 0} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
