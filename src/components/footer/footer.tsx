import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 mt-20">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Jhollyfer Rodrigues
          </p>

          <nav aria-label="Redes sociais" className="flex items-center gap-1">
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
        </div>
      </div>
    </footer>
  );
}
