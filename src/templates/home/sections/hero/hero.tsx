import { DownloadIcon, GithubIcon, LinkedinIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              <span className="text-sm text-white/80">👋 hello!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="block text-white">Jhollyfer</span>
              <span className="block text-green-400">Rodrigues</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-white/80 mb-8">
              Engenheiro de Software
            </p>

            <div className="flex space-x-3 mb-4">
              <Link
                href="https://github.com/jhollyfer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
              >
                <GithubIcon size={20} className="text-white" />
              </Link>
              <a
                href="https://www.linkedin.com/in/jhollyferr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
              >
                <LinkedinIcon size={20} className="text-white" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/jhollyfer.pdf"
                download
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                <DownloadIcon size={18} className="mr-2" />
                Baixar CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-green-400 text-black font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                <SendIcon size={18} className="mr-2" />
                Vamos conversar!
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Green circle background */}
              <div className="absolute inset-0 animate-float">
                <div className="absolute inset-0 rounded-full bg-green-400 opacity-90"></div>
              </div>

              {/* Avatar image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://avatars.githubusercontent.com/u/67079657?v=4"
                  alt="Marcos Jhollyfer"
                  className="w-[90%] h-[90%] object-contain z-10 rounded-full"
                  width={400}
                  height={400}
                />
              </div>

              {/* Technologies floating around */}
              <div className="absolute -top-5 left-10 p-2 rounded-full bg-neutral-900 border border-white/10 animate-float">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  width={32}
                  height={32}
                />
              </div>

              <div className="absolute top-20 -right-5 p-2 rounded-full bg-neutral-900 border border-white/10">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ScrollIndicator className="absolute bottom-10 left-1/2 transform -translate-x-1/2" /> */}
    </section>
  );
}
