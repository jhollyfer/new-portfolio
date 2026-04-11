import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Magnetic } from "@/components/magnetic/magnetic";
import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

const SOCIALS = [
  {
    key: "github",
    href: "https://github.com/jhollyfer",
    label: "GitHub",
    Icon: Github,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/jhollyferr",
    label: "LinkedIn",
    Icon: Linkedin,
  },
] as const;

export function Hero(): React.JSX.Element {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[100dvh] items-center pt-28 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden"
      >
        <div className="absolute -top-1/3 left-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_70%)] opacity-70 blur-3xl animate-[spotlight-drift_30s_ease-in-out_infinite]" />
      </div>

      <div className="section-container relative z-[1]">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 flex flex-col justify-between md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex size-2">
                <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="kbd">{t("eyebrow")}</span>
              <span className="mx-2 hidden h-px w-10 bg-border sm:block" />
              <span className="kbd hidden sm:inline">{t("lastUpdate")}</span>
            </div>

            <h1 className="text-hero mt-10 font-semibold">
              <span className="block text-foreground">{t("nameFirst")}</span>
              <span className="relative block text-primary">
                <span className="relative inline-block">
                  {t("nameLast")}
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[hairline-sweep_2.6s_var(--ease-cinematic)_both]"
                    style={{ mixBlendMode: "overlay" }}
                  />
                </span>
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-balance text-lg text-foreground/90 md:text-xl">
              {t("role")}
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("description")}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link href="/contact" className={cn("cta-pill", focusRing)}>
                  {t("letsChat")}
                  <span className="cta-pill__icon">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="/jhollyfer.pdf"
                  download
                  className={cn("cta-ghost", focusRing)}
                >
                  <Download aria-hidden className="size-4" />
                  {t("downloadCV")}
                </a>
              </Magnetic>
            </div>
          </div>

          <aside className="col-span-12 flex flex-col justify-between gap-12 md:col-span-4 md:items-end md:text-right">
            <div className="flex flex-col gap-2">
              <p className="kbd">{t("basedIn")}</p>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              {SOCIALS.map(({ key, href, label, Icon }) => (
                <Magnetic key={key} strength={8}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "bezel-shell inline-flex size-12 items-center justify-center transition-colors hover:text-primary",
                      focusRing,
                    )}
                  >
                    <span className="bezel-core inline-flex size-full items-center justify-center">
                      <Icon aria-hidden className="size-4" />
                    </span>
                  </a>
                </Magnetic>
              ))}
            </div>

            <div className="flex items-center gap-2 md:justify-end">
              <span className="kbd">{t("scrollHint")}</span>
              <span
                aria-hidden
                className="inline-block h-6 w-px bg-border-strong"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
