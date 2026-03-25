import type { Metadata } from "next";
import ConfirmHero    from "@/components/sections/thankyou/ConfirmHero";
import NextSteps      from "@/components/sections/thankyou/NextSteps";
import Community      from "@/components/sections/thankyou/Community";
import ThankYouFooter from "@/components/sections/thankyou/ThankYouFooter";

export const metadata: Metadata = {
  title: "Obrigado pela sua compra! | UniversoTEA.aba",
  description: "Seu Pack de Pareamento ABA foi confirmado. Verifique seu e-mail para acessar o material.",
  robots: { index: false, follow: false }, // não indexar no Google
};

export default function ThankYouPage() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      <ConfirmHero />
      <NextSteps />
      <Community />
      <ThankYouFooter />
    </main>
  );
}
