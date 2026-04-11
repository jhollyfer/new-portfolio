import {
  Code2,
  Database,
  GitBranch,
  Server,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { getSkillsByCategory } from "@/lib/skills";
import type { SkillCategory } from "@/lib/types";
import { SkillIcon } from "@/templates/skills/components/skill-icon/skill-icon";

interface Props {
  params: Promise<{ locale: string }>;
}

const CATEGORY_META: Record<
  SkillCategory,
  { Icon: LucideIcon; span: string }
> = {
  frontend: { Icon: Code2, span: "md:col-span-12" },
  backend: { Icon: Server, span: "md:col-span-7" },
  database: { Icon: Database, span: "md:col-span-5" },
  mobile: { Icon: Smartphone, span: "md:col-span-5" },
  devops: { Icon: GitBranch, span: "md:col-span-7" },
};

const CATEGORY_ORDER: readonly SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "mobile",
  "devops",
];

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.skills" });
  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale,
    },
  };
}

export default async function SkillsPage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("skills");

  return (
    <div className="pt-36 pb-24">
      <div className="section-container">
        <header className="page-header">
          <ScrollReveal>
            <p className="eyebrow">{t("eyebrow")}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1>{t("pageTitle")}</h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p>{t("pageDescription")}</p>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {CATEGORY_ORDER.map((category, categoryIndex) => {
            const meta = CATEGORY_META[category];
            const skills = getSkillsByCategory(category);
            const Icon = meta.Icon;
            return (
              <ScrollReveal
                key={category}
                delay={categoryIndex * 80}
                className={`col-span-1 ${meta.span}`}
              >
                <section
                  aria-labelledby={`heading-${category}`}
                  className="bezel-shell h-full"
                >
                  <div className="bezel-core flex h-full flex-col gap-6 p-6 md:p-8">
                    <header className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="section-badge">
                          <Icon aria-hidden className="size-4" />
                        </span>
                        <h2
                          id={`heading-${category}`}
                          className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
                        >
                          {t(`sections.${category}`)}
                        </h2>
                      </div>
                      <span className="kbd">
                        {skills.length.toString().padStart(2, "0")}
                      </span>
                    </header>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {skills.map((skill) => (
                        <SkillIcon key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
