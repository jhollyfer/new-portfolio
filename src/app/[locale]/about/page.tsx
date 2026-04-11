import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Magnetic } from "@/components/magnetic/magnetic";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

interface Props {
  params: Promise<{ locale: string }>;
}

const TOOLING = {
  languages: ["TypeScript", "JavaScript"],
  frameworks: [
    "Next.js",
    "React",
    "React Native",
    "TanStack Start",
    "TanStack Router",
    "TanStack Query",
    "TanStack Form",
    "TanStack Table",
    "Node.js",
    "Fastify",
    "AdonisJS",
    "NestJS",
    "Express",
  ],
  infra: ["Docker", "PostgreSQL", "MongoDB", "Redis", "Prisma", "AWS", "Vercel"],
} as const;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
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

export default async function AboutPage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

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

        <section className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <ScrollReveal>
              <div className="bezel-shell sticky top-28">
                <div className="bezel-core relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://avatars.githubusercontent.com/u/67079657?v=4"
                    alt={t("name")}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="kbd mb-1">— {t("role")}</p>
                    <p className="text-lg font-semibold text-foreground">
                      {t("name")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <article className="col-span-12 md:col-span-7">
            <div className="space-y-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              <ScrollReveal>
                <p className="first-letter:mr-1 first-letter:float-left first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-foreground first-letter:leading-none">
                  {t("bio1")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <p>{t("bio2")}</p>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p>{t("bio3")}</p>
              </ScrollReveal>
            </div>

            <section className="mt-16 border-t border-border pt-10">
              <ScrollReveal>
                <p className="kbd mb-8">{t("tools.eyebrow")}</p>
              </ScrollReveal>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {(
                  [
                    ["languages", TOOLING.languages],
                    ["frameworks", TOOLING.frameworks],
                    ["infra", TOOLING.infra],
                  ] as const
                ).map(([key, list], groupIndex) => (
                  <ScrollReveal key={key} delay={groupIndex * 80}>
                    <dl className="flex flex-col gap-3">
                      <dt className="kbd">{t(`tools.${key}`)}</dt>
                      <dd>
                        <ul className="flex flex-col gap-1.5 text-sm text-foreground/90">
                          {list.map((tool) => (
                            <li
                              key={tool}
                              className="font-mono tracking-tight"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            <div className="mt-16">
              <ScrollReveal>
                <Magnetic>
                  <Link
                    href="/contact"
                    className={cn("cta-pill", focusRing)}
                  >
                    {t("cta")}
                    <span className="cta-pill__icon">
                      <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </Link>
                </Magnetic>
              </ScrollReveal>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
