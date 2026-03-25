"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  "Passa horas no Google procurando material e não encontra nada com sequência lógica",
  "Compra materiais sem progressão de nível — a criança trava sempre no mesmo ponto",
  "A terapeuta pede atividade para casa e você não sabe por onde começar",
  "Sente que poderia estar ajudando mais, mas falta a ferramenta certa",
  "Já tentou fazer material no Canva às 23h e o resultado não ficou bom",
  "Sente culpa por achar que não está fazendo o suficiente pelo seu filho",
];

export default function Pain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-pain py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 mb-10">
          Você já passou por alguma dessas situações? 😔
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-red-100">
              <span className="text-2xl mt-0.5">❌</span>
              <p className="text-gray-700 text-base leading-relaxed">{pain}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-primary font-display font-black text-xl mt-10">
          Você não está falhando. Você só não tem a ferramenta certa ainda. Isso tem solução. ⬇️
        </motion.p>
      </div>
    </section>
  );
}
