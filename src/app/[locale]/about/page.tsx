import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

interface Props {
  params: Promise<{ locale: string }>;
}

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

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

export default async function About({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="page-header">
          <h1>{t("pageTitle")}</h1>
          <p>{t("pageDescription")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/10 rounded-2xl blur-3xl" />
              <Image
                src="https://avatars.githubusercontent.com/u/67079657?v=4"
                alt="Jhollyfer Rodrigues"
                className="relative rounded-2xl object-cover ring-1 ring-white/[0.1]"
                width={280}
                height={280}
              />
            </div>

            <div className="mt-6 text-center lg:text-left">
              <h2 className="text-lg font-semibold mb-1">{t("name")}</h2>
              <p className="text-green-400 text-sm">{t("role")}</p>
            </div>
          </div>

          <article>
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              {t("greeting")}
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-pretty">{t("bio1")}</p>
              <p className="text-pretty">{t("bio2")}</p>
              <p className="text-pretty">{t("bio3")}</p>
              <p className="text-pretty">{t("bio4")}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-foreground mb-3">
                {t("mainTech")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
