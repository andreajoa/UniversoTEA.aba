"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTAButton from "@/components/ui/CTAButton";
import GuaranteeBadge from "@/components/ui/GuaranteeBadge";

const items = [
  { emoji: "🎴", label: "Pack Completo — 108 Cards de Pareamento (PDF)", value: "R$97" },
  { emoji: "🎁", label: "BÔNUS 1 — Guia Como Aplicar em Casa",           value: "R$47" },
  { emoji: "🎁", label: "BÔNUS 2 — Tabela de Registro de Progresso",     value: "R$27" },
];

export default function Offer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-center text-gray-900 px-4">
          Tudo que você recebe hoje 📦
        </motion.h2>

        <div className="w-full max-w-lg flex flex-col gap-3 md:gap-4 px-4">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 flex-1">
                <span className="text-xl md:text-2xl">✅</span>
                <div className="flex-1">
                  <span className="text-lg md:text-xl mr-1 md:mr-2">{item.emoji}</span>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{item.label}</span>
                </div>
              </div>
              <span className="text-gray-400 line-through text-xs md:text-sm font-semibold whitespace-nowrap">{item.value}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border-2 border-cta text-center w-full px-4">
          <p className="text-gray-400 line-through text-base md:text-lg mb-1">Valor total: R$171</p>
          <p className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-cta mb-1">R$ 37</p>
          <p className="text-gray-500 text-sm mb-6">Preço de lançamento — pode subir a qualquer momento</p>
          <CTAButton className="w-full justify-center" />
          <p className="text-gray-400 text-xs mt-3">🔒 Pagamento seguro via Kiwify</p>
        </motion.div>

        <GuaranteeBadge />
      </div>
    </section>
  );
}
