import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { CERTIFICATIONS, EDUCATIONS, EXPERIENCES } from "@/lib/career";
import { CareerTabs } from "@/templates/career/components/career-tabs/career-tabs";
import { CertificationCard } from "@/templates/career/components/certification-card/certification-card";
import { EducationCard } from "@/templates/career/components/education-card/education-card";
import { ExperienceCard } from "@/templates/career/components/experience-card/experience-card";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.career" });
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

export default async function CareerPage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("career");

  const professional = (
    <ol className="flex flex-col gap-6">
      {EXPERIENCES.map((experience, index) => (
        <ScrollReveal as="li" key={experience.id} delay={index * 70}>
          <ExperienceCard
            experience={experience}
            descriptionKey={`career.experiences.${experience.id}.description`}
          />
        </ScrollReveal>
      ))}
    </ol>
  );

  const academic = (
    <ol className="flex flex-col gap-6">
      {EDUCATIONS.map((education, index) => (
        <ScrollReveal as="li" key={education.id} delay={index * 70}>
          <EducationCard
            education={education}
            descriptionKey={`career.education.${education.id}.description`}
          />
        </ScrollReveal>
      ))}
    </ol>
  );

  const certifications = (
    <ol className="flex flex-col gap-6">
      {CERTIFICATIONS.map((certification, index) => (
        <ScrollReveal as="li" key={certification.id} delay={index * 70}>
          <CertificationCard
            certification={certification}
            descriptionKey={`career.certifications.${certification.id}.description`}
          />
        </ScrollReveal>
      ))}
    </ol>
  );

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

        <ScrollReveal delay={240}>
          <CareerTabs
            professional={professional}
            academic={academic}
            certifications={certifications}
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
