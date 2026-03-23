import type { Metadata } from "next";
import "./globals.css";
import FloatingBackground from "@/components/ui/FloatingBackground";

export const metadata: Metadata = {
  title: "Pack de Pareamento ABA | UniversoTEA — 108 Cards para Crianças com TEA",
  description: "108 cards terapêuticos baseados em ABA. 6 temas, 3 níveis, pronto para imprimir. Acesso imediato por R$37. Ideal para pais, terapeutas e professores.",
  openGraph: {
    title: "Pack de Pareamento ABA | UniversoTEA",
    description: "108 cards terapêuticos baseados em ABA para crianças com TEA. Acesso imediato.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack de Pareamento ABA | UniversoTEA",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <FloatingBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
