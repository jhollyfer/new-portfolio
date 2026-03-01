import { DownloadIcon, GithubIcon, LinkedinIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-400/10 border border-green-400/20 px-3 py-1 mb-8">
              <span className="relative flex size-2">
                <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
              </span>
              <span className="text-sm text-green-400 font-medium">Disponivel para projetos</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
              Jhollyfer
              <br />
              <span className="text-green-400">Rodrigues</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-md">
              Engenheiro de Software
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Link
                href="https://github.com/jhollyfer"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jhollyferr"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/jhollyfer.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm font-medium text-foreground hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <DownloadIcon size={16} />
                Baixar CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-400 text-black text-sm font-medium hover:bg-green-300 transition-colors duration-200 cursor-pointer"
              >
                <SendIcon size={16} />
                Vamos conversar!
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72">
              <Image
                src="https://avatars.githubusercontent.com/u/67079657?v=4"
                alt="Jhollyfer Rodrigues"
                className="rounded-full object-cover ring-2 ring-green-400/20 ring-offset-4 ring-offset-background"
                width={288}
                height={288}
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
