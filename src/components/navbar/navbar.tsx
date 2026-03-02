"use client";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { GithubIcon, LinkedinIcon, MenuIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { ActiveLink } from "../active-link/active-link";

const LINK_PATHS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "portfolio", path: "/portfolio" },
  { key: "skills", path: "/skills" },
  { key: "career", path: "/career" },
  { key: "contact", path: "/contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("navigation");

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-background/80 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          <ActiveLink href="/" className="font-extrabold tracking-tight">
            <span className="text-green-400 text-xl">J</span>
            <span className="text-xl">R</span>
          </ActiveLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
            {LINK_PATHS.map((item) => (
              <ActiveLink
                key={item.path}
                href={item.path}
                className="px-4 py-2 rounded-md"
              >
                {t(item.key)}
              </ActiveLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <LanguageSwitcher />
            <Link
              href="https://github.com/jhollyfer"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/jhollyferr"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((state) => !state)}
            className="md:hidden size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Menu principal"
          className="md:hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-md animate-fade-in"
        >
          <div className="section-container py-3 space-y-1">
            {LINK_PATHS.map((item) => (
              <ActiveLink
                onClick={() => setIsOpen(false)}
                key={item.key}
                href={item.path}
                className="block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/[0.06]"
              >
                {t(item.key)}
              </ActiveLink>
            ))}
          </div>
          <div className="flex justify-center gap-4 py-4 border-t border-white/[0.06]">
            <LanguageSwitcher />
            <Link
              href="https://github.com/jhollyfer"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/jhollyferr"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
