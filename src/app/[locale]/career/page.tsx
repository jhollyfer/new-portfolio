import { ExperienceCard } from "@/templates/career/components/experience-card";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

const experienceKeys = ["exp1", "exp2", "exp3", "exp4", "exp5", "exp6"] as const;
const experienceTechs: Record<string, string[]> = {
  exp1: ["React JS", "TypeScript", "Node.js", "Fastify", "MongoDB"],
  exp2: ["Node.js", "AdonisJS", "TypeScript", "RESTful API"],
  exp3: ["React", "Node.js", "MongoDB", "Express"],
  exp4: ["React", "Node.js", "MongoDB", "Express"],
  exp5: ["Java", "Javascript"],
  exp6: ["Java", "Javascript", "Pascal", "Lazarus", "Delphi"],
};

const educationKeys = ["edu1", "edu2", "edu3"] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.career" });

  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://jhollyfer.com.br/og-image.png",
      siteName: "jhollyfer.com.br",
      locale,
      type: "website",
      images: [
        {
          url: "https://jhollyfer.com.br/og-image.png",
          width: 705,
          height: 248,
          alt: t("title"),
        },
      ],
    },
  };
}

export default async function Career({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("career");

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="page-header">
          <h1>{t("pageTitle")}</h1>
          <p>{t("pageDescription")}</p>
        </div>

        {/* Professional Experience */}
        <section className="mb-20" aria-labelledby="heading-professional">
          <div className="flex items-center gap-3 mb-8">
            <div className="section-badge bg-green-400/10 text-green-400">
              <BriefcaseIcon size={18} />
            </div>
            <h2 id="heading-professional" className="text-xl font-semibold">
              {t("professional")}
            </h2>
          </div>

          <div className="relative pl-6 border-l border-white/[0.08]">
            <div className="space-y-6">
              {experienceKeys.map((key, index) => {
                const variant = index === 0 ? "accent" : "default";
                return (
                  <div key={key} className="relative">
                    <div
                      className={`absolute -left-[calc(1.5rem+4.5px)] top-5 size-2.5 rounded-full ${
                        variant === "accent"
                          ? "bg-green-400"
                          : "border border-white/[0.2] bg-background"
                      }`}
                    />
                    <ExperienceCard
                      title={t(`experiences.${key}.title`)}
                      company={t(`experiences.${key}.company`)}
                      period={t(`experiences.${key}.period`)}
                      description={t(`experiences.${key}.description`)}
                      techs={experienceTechs[key]}
                      variant={variant}
                      currentLabel={t("current")}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Academic Experience */}
        <section aria-labelledby="heading-academic">
          <div className="flex items-center gap-3 mb-8">
            <div className="section-badge bg-blue-400/10 text-blue-400">
              <GraduationCapIcon size={18} />
            </div>
            <h2 id="heading-academic" className="text-xl font-semibold">
              {t("academic")}
            </h2>
          </div>

          <div className="relative pl-6 border-l border-white/[0.08]">
            <div className="space-y-6">
              {educationKeys.map((key) => (
                <div key={key} className="relative">
                  <div className="absolute -left-[calc(1.5rem+4.5px)] top-5 size-2.5 rounded-full border border-white/[0.2] bg-background" />
                  <ExperienceCard
                    title={t(`education.${key}.title`)}
                    company={t(`education.${key}.company`)}
                    period={t(`education.${key}.period`)}
                    description={t(`education.${key}.description`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
