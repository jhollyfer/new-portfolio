import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jhollyfer | Sobre",
  description:
    "Conheca um pouco mais sobre minha trajetoria e experiencia, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Sobre",
    description:
      "Conheca um pouco mais sobre minha trajetoria e experiencia, o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "jhollyfer.com.br",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Jhollyfer | Sobre",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="page-header">
          <h1>Sobre</h1>
          <p>
            Conheca um pouco mais sobre minha trajetoria e experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/banner.png"
                  alt="Jhollyfer Rodrigues"
                  width={705}
                  height={248}
                />
              </div>
            </div>

            <div className="mt-6 max-w-sm mx-auto text-center lg:text-left">
              <h2 className="text-lg font-semibold mb-1">
                Marcos Jhollyfer Rodrigues
              </h2>
              <p className="text-green-400 text-sm">Engenheiro de Software</p>
            </div>
          </div>

          <article>
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Ola, eu sou o Marcos!
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-balance">
                Engenheiro de Software com mais de 5 anos de experiencia no
                desenvolvimento de aplicacoes web, mobile e backend. Minha
                paixao pela programacao comecou ainda na adolescencia e desde
                entao venho aprimorando meus conhecimentos e habilidades
                tecnicas.
              </p>

              <p className="text-balance">
                Atualmente, trabalho como desenvolvedor full-stack, criando
                solucoes completas desde o frontend ate o backend. Tenho
                experiencia com diversas tecnologias e frameworks, incluindo
                React, React Native, Node.js, TypeScript, e muito mais.
              </p>

              <p className="text-balance">
                Meu objetivo principal e criar solucoes escalaveis, bem
                documentadas e de alta qualidade. Gosto de trabalhar em equipe e
                estou sempre em busca de novos desafios e oportunidades para
                aprender e crescer profissionalmente.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
