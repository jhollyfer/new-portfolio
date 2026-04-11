import { Clock, Mail, MapPin, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";
import { ContactChannel } from "@/templates/contact/components/contact-channel/contact-channel";
import { ContactForm } from "@/templates/contact/components/contact-form/contact-form";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
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

export default async function ContactPage({
  params,
}: Props): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

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

        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <ScrollReveal>
              <p className="kbd mb-6">{t("channels.eyebrow")}</p>
            </ScrollReveal>
            <div className="flex flex-col gap-4">
              <ScrollReveal delay={80}>
                <ContactChannel
                  label={t("channels.email")}
                  value="jhollyferr@gmail.com"
                  href="mailto:jhollyferr@gmail.com"
                  Icon={Mail}
                />
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <ContactChannel
                  label={t("channels.location")}
                  value={t("location")}
                  Icon={MapPin}
                />
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <ContactChannel
                  label={t("channels.availability")}
                  value={t("availability")}
                  Icon={Sparkles}
                />
              </ScrollReveal>
              <ScrollReveal delay={320}>
                <ContactChannel
                  label={t("channels.response")}
                  value={t("responseTime")}
                  Icon={Clock}
                />
              </ScrollReveal>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ScrollReveal delay={120}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
