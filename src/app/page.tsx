import { SettingsIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio de Jhollyfer Rodrigues",
  description:
    "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio de Jhollyfer Rodrigues",
    description:
      "Portfolio de Jhollyfer Rodrigues, o primeiro Engenheiro de Software Indígena Tikuna da Amazonia",
    url: "https://jhollyfer.com.br/og-image.png",
    siteName: "Portfolio de Jhollyfer Rodrigues",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://jhollyfer.com.br/og-image.png",
        width: 705,
        height: 248,
        alt: "Portfolio de Jhollyfer Rodrigues",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center text-2xl flex-col gap-2">
      <SettingsIcon className="animate-spin" />
      <h2>Home</h2>
    </main>
  );
}
