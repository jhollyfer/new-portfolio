import { DownloadIcon, GithubIcon, LinkedinIcon, SendIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      <div className="section-container relative z-10">
        <div className="animate-slide-up flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-400/10 border border-green-400/20 px-3 py-1 mb-8">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-dot"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
              </span>
              <span className="text-sm text-green-400 font-medium">{t("available")}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
              Jhollyfer
              <br />
              <span className="text-green-400">Rodrigues</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-3 max-w-2xl text-balance">
              {t("role")}
            </p>

            <p className="text-muted-foreground mb-8 max-w-2xl text-balance">
              {t("description")}
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <a
                href="https://github.com/jhollyfer"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jhollyferr"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/jhollyfer.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm font-medium text-foreground hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <DownloadIcon size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                {t("downloadCV")}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-black text-sm font-medium hover:bg-green-300 transition-colors duration-200 cursor-pointer"
              >
                <SendIcon size={16} />
                {t("letsChat")}
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
