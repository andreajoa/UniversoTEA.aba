"use client";
import { FOOTER_LICENSE_NOTICE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Aviso importante de licença */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-urgency">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
            <span className="font-bold text-urgency">⚠️ {FOOTER_LICENSE_NOTICE}</span>
          </p>
        </div>

        {/* Informações adicionais */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} UniversoTEA.aba — Todos os direitos reservados
          </p>
          <p className="text-gray-400 text-xs mt-2">
            <a href="https://www.instagram.com/universotea.aba" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              🌈 @universotea.aba
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
