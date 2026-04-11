"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useState } from "react";

import { ActiveLink } from "@/components/active-link/active-link";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { Magnetic } from "@/components/magnetic/magnetic";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { useScrolled } from "@/hooks/use-scrolled";
import { Link, usePathname } from "@/i18n/navigation";
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

export function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const scrolled = useScrolled(8);
  const pathname = usePathname();
  const drawerId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Magnetic strength={6}>
            <Link
              href="/"
              aria-label={t("home")}
              className={cn(
                "group/logo inline-flex items-baseline font-semibold tracking-tight",
                focusRing,
              )}
            >
              <span className="text-xl text-primary">J</span>
              <span className="text-xl text-foreground">R</span>
              <span
                aria-hidden
                className="ml-2 hidden h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary/60 md:inline-block"
              />
            </Link>
          </Magnetic>

          <nav
            aria-label={t("home")}
            className="hidden items-center gap-2 md:flex"
          >
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <ActiveLink
                    href={item.path}
                    className="px-3 py-2 text-[0.8125rem]"
                  >
                    {t(item.key)}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            {SOCIALS.map(({ key, href, label, Icon }) => (
              <Magnetic key={key} strength={8}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 backdrop-blur transition-colors hover:border-border-strong hover:text-foreground",
                    focusRing,
                  )}
                >
                  <Icon aria-hidden className="size-4" />
                </a>
              </Magnetic>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((state) => !state)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls={drawerId}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-border-strong hover:text-foreground md:hidden",
              focusRing,
            )}
          >
            {open ? (
              <X aria-hidden className="size-5" />
            ) : (
              <Menu aria-hidden className="size-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={drawerId}
            aria-label={t("home")}
            aria-modal="true"
            role="dialog"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden"
          >
            <div className="border-t border-border bg-background/95 backdrop-blur-2xl">
              <div className="section-container py-6">
                <ul className="flex flex-col divide-y divide-border">
                  {NAV_LINKS.map((item) => (
                    <li key={item.path}>
                      <ActiveLink
                        href={item.path}
                        sharedLayoutId="mobile-nav-active"
                        className="flex w-full justify-between px-0 py-4 text-base"
                      >
                        <span className="flex items-center gap-3">
                          <span className="kbd">{item.key.slice(0, 2)}</span>
                          <span>{t(item.key)}</span>
                        </span>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center gap-2">
                    {SOCIALS.map(({ key, href, label, Icon }) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={cn(
                          "inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-border-strong hover:text-foreground",
                          focusRing,
                        )}
                      >
                        <Icon aria-hidden className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
