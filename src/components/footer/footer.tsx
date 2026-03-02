import { Link } from "@/i18n/navigation";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const NAV_LINK_KEYS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "portfolio", path: "/portfolio" },
  { key: "skills", path: "/skills" },
  { key: "career", path: "/career" },
  { key: "contact", path: "/contact" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("navigation");
  const tf = useTranslations("footer");

  return (
    <footer className="py-16 mt-24">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="font-extrabold tracking-tight">
            <span className="text-green-400 text-xl">J</span>
            <span className="text-xl">R</span>
          </Link>

          <nav aria-label={tf("footerNav")} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINK_KEYS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <nav aria-label={tf("socialNav")} className="flex items-center gap-1">
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
          </nav>

          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {tf("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
