import type { Metadata } from "next";
import { Michroma, Manrope } from "next/font/google";
import "./globals.css";

// Michroma: letras largas e futuristas, como as do logo. Usada só na marca e em títulos curtos.
const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
// Manrope: texto corrido, limpo e legível.
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Lychnos Tech | Sites, sistemas web e automações",
  description:
    "Fernando Pablo, desenvolvedor full stack e fundador da Lychnos Tech. Sites, sistemas web e automações sob medida com React, Next.js e Node.js.",
  openGraph: {
    title: "Lychnos Tech | Tecnologia que ilumina ideias e transforma processos",
    description: "Sites, sistemas web e automações sob medida.",
    locale: "pt_BR",
    type: "website",
    images: ["/marca/lamparina-3d.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${michroma.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
