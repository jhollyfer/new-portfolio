import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutSnippet } from "@/templates/home/sections/about-snippet/about-snippet";
import { CtaFinal } from "@/templates/home/sections/cta-final/cta-final";
import { FeaturedProjects } from "@/templates/home/sections/featured-projects/featured-projects";
import { Hero } from "@/templates/home/sections/hero";
import { TechBento } from "@/templates/home/sections/tech-bento/tech-bento";
import { TimelineSnippet } from "@/templates/home/sections/timeline-snippet/timeline-snippet";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

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

export default async function HomePage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutSnippet />
      <TechBento />
      <FeaturedProjects />
      <TimelineSnippet />
      <CtaFinal />
    </>
  );
}
