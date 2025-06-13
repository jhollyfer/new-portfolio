import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/50 text-sm">
              © {currentYear} Jhollyfer Rodrigues • Todos os direitos reservados
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/jhollyfer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/jhollyferr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
