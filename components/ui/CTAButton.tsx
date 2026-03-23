import { KIWIFY_URL } from "@/lib/constants";

interface Props {
  label?: string;
  className?: string;
}

export default function CTAButton({ label = "🧩 QUERO OS CARDS AGORA — R$37", className = "" }: Props) {
  return (
    <a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block bg-gradient-to-r from-cta to-green-500 text-white font-display 
        font-black text-sm sm:text-base md:text-lg lg:text-xl
        px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full 
        shadow-lg hover:shadow-2xl animate-pulse-cta hover-playful
        transition-all duration-300 text-center max-w-full break-words
        ${className}
      `}
    >
      {label}
    </a>
  );
}
