import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn, focusRing } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "portfolio", path: "/portfolio" },
  { key: "skills", path: "/skills" },
  { key: "career", path: "/career" },
  { key: "contact", path: "/contact" },
] as const;

const SOCIALS = [
  {
    key: "github",
    href: "https://github.com/jhollyfer",
    label: "GitHub",
    Icon: Github,
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/jhollyferr",
    label: "LinkedIn",
    Icon: Linkedin,
  },
] as const;

export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  const t = useTranslations("navigation");
  const tf = useTranslations("footer");
  const tc = useTranslations("contact");

  return (
    <footer className="relative z-[1] mt-32 border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
      >
        <div className="absolute inset-0 animate-[hairline-sweep_6s_var(--ease-cinematic)_infinite] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className={cn(
                "inline-flex items-baseline font-semibold tracking-tight",
                focusRing,
              )}
            >
              <span className="text-2xl text-primary">J</span>
              <span className="text-2xl text-foreground">R</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {tf("tagline")}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block size-2 animate-pulse-dot rounded-full bg-primary"
                />
                <span className="kbd">{tf("status")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin aria-hidden className="size-3.5 text-muted-foreground/70" />
                <span>{tc("location")}</span>
              </div>
            </div>
          </div>

          <nav
            aria-label={tf("footerNav")}
            className="md:col-span-4"
          >
            <p className="kbd mb-4">{tf("navigate")}</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={cn(
                      "text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="kbd mb-4">{tf("elsewhere")}</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:jhollyferr@gmail.com"
                  className={cn(
                    "inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
                    focusRing,
                  )}
                >
                  <Mail aria-hidden className="size-3.5" />
                  jhollyferr@gmail.com
                </a>
              </li>
              {SOCIALS.map(({ key, href, label, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    <Icon aria-hidden className="size-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            <span className="kbd mr-2">©</span>
            <span className="tabular-nums">{year}</span>{" "}
            <span>{tf("copyright")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
