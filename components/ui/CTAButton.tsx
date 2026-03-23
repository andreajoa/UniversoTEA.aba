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
        inline-block bg-cta text-white font-display font-black text-lg md:text-xl
        px-10 py-5 rounded-full shadow-lg animate-pulse-cta
        hover:bg-green-500 transition-all duration-300 text-center
        ${className}
      `}
    >
      {label}
    </a>
  );
}
