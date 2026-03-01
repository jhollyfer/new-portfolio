import { ContactButton } from "@/templates/contact/components/contact-button/contact-button";
import { MailIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jhollyfer | Contato",
  description:
    "Entre em contato com o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Jhollyfer | Contato",
    description:
      "Entre em contato com o primeiro Engenheiro de Software Indigena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "jhollyfer.com.br",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Jhollyfer | Contato",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div className="page-header">
          <h1>Vamos conversar!</h1>
          <p>
            Entre em contato para discutirmos seu projeto ou oportunidade de
            trabalho
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="mb-10">
            <ContactButton
              href="mailto:jhollyfer.fr@gmail.com"
              icon={<MailIcon size={16} />}
            >
              jhollyfer.fr@gmail.com
            </ContactButton>
          </div>

          <div className="card-border p-6">
            <h2 className="text-xl font-semibold mb-6">Envie uma mensagem</h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200"
                  placeholder="Seu nome..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:border-transparent transition-all duration-200 resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 rounded-lg bg-green-400 text-black font-medium text-sm hover:bg-green-300 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
