import { ContactButton } from "@/templates/contact/components/contact-button/contact-button";
import { MailIcon, MapPinIcon, SendIcon, SmartphoneIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Vamos conversar!
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Entre em contato para discutirmos seu projeto ou oportunidade de
            trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>

            <div className="space-y-6 mb-10 space-x-2">
              <ContactButton
                href="tel:+5511987654321"
                icon={<SmartphoneIcon size={18} />}
              >
                +55 97 9 8431-7149
              </ContactButton>

              <ContactButton
                href="mailto:jhollyfer.fr@gmail.com"
                icon={<MailIcon size={18} />}
              >
                jhollyfer.fr@gmail.com
              </ContactButton>

              <ContactButton
                href="https://maps.google.com"
                icon={<MapPinIcon size={18} />}
              >
                Benjamin Constant, AM - Brasil
              </ContactButton>
            </div>

            <h3 className="text-xl font-bold mb-4">Horário de trabalho</h3>
            <p className="text-white/70 mb-8">
              Segunda à Sexta: 9h às 18h
              <br />
              Fins de semana: Disponível para emergências
            </p>

            <div className="border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 p-6 ">
              <h3 className="text-lg font-bold mb-3">
                Pronto para iniciar um projeto?
              </h3>
              <p className="text-white/70 mb-4">
                Estou disponível para novos projetos e oportunidades. Vamos
                discutir como posso contribuir para o sucesso do seu negócio!
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5597984317149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-green-400 text-black font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                <SendIcon size={16} className="mr-2" />
                Vamos conversar!
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-border p-6">
              <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Qual o assunto?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                    placeholder="Escreva sua mensagem detalhada aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-green-400 text-black font-medium hover:bg-opacity-90 transition-all"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
