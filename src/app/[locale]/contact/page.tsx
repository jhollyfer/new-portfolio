import { ContactButton } from "@/templates/contact/components/contact-button/contact-button";
import { MailIcon, MapPinIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

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

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="pt-32 pb-24">
      <div className="section-container">
        <div className="page-header">
          <h1>{t("pageTitle")}</h1>
          <p>{t("pageDescription")}</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="mb-10 space-y-3">
            <ContactButton
              href="mailto:jhollyfer.fr@gmail.com"
              icon={<MailIcon size={16} />}
            >
              jhollyfer.fr@gmail.com
            </ContactButton>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon size={16} />
              <span>{t("location")}</span>
            </div>
          </div>

          <div className="card-border p-6">
            <h2 className="text-xl font-semibold mb-6">{t("formTitle")}</h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200"
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200"
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200 resize-none"
                  placeholder={t("messagePlaceholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-green-400 text-black font-medium text-sm hover:bg-green-300 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
