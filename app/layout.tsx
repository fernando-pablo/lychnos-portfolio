import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Lychnos Tech | Sites, sistemas web e automações",
  description:
    "Fernando Pablo, desenvolvedor full stack e fundador da Lychnos Tech. Sites, sistemas web e automações sob medida com React, Next.js e Node.js.",
  openGraph: {
    title: "Lychnos Tech | Sites, sistemas web e automações",
    description: "Tiro ideias do papel com sites, sistemas web e automações sob medida.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
