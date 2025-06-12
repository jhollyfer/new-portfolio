import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça um pouco mais sobre minha trajetória e experiência, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Sobre",
    description:
      "Conheça um pouco mais sobre minha trajetória e experiência, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "Portfolio de Jhollyfer Rodrigues",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Site.Set",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Sobre</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e experiência
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-green-500 opacity-60"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-green-500 opacity-60"></div>

              <div className="rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/banner.png"
                  alt="Marcos Jhollyfer"
                  // className="w-full h-auto"
                  width={705}
                  height={248}
                />
              </div>
            </div>

            <div className="mt-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-2">
                Marcos Jhollyfer Rodrigues
              </h2>
              <p className="text-portfolio-green mb-4">
                Engenheiro de Software
              </p>

              {/* <DownloadButton href="/jhollyfer.pdf" variant="primary">
                Baixar CV
              </DownloadButton> */}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Olá, eu sou o Marcos!</h2>

            <div className="space-y-4 text-white/80">
              <p>
                Engenheiro de Software com mais de 5 anos de experiência no
                desenvolvimento de aplicações web, mobile e backend. Minha
                paixão pela programação começou ainda na adolescência e desde
                então venho aprimorando meus conhecimentos e habilidades
                técnicas.
              </p>

              <p>
                Atualmente, trabalho como desenvolvedor full-stack, criando
                soluções completas desde o frontend até o backend. Tenho
                experiência com diversas tecnologias e frameworks, incluindo
                React, React Native, Node.js, TypeScript, e muito mais.
              </p>

              <p>
                Meu objetivo principal é criar soluções escaláveis, bem
                documentadas e de alta qualidade. Gosto de trabalhar em equipe e
                estou sempre em busca de novos desafios e oportunidades para
                aprender e crescer profissionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
