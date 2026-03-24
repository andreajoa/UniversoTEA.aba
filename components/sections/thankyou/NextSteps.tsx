"use client";
import { motion, useInView } from "framer-motion";
import { useRef }            from "react";

const steps = [
  {
    step: "01",
    icon: "📧",
    title: "Verifique seu e-mail",
    desc: "O link de acesso foi enviado para o e-mail usado na compra. Verifique também a pasta de spam.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-primary text-white",
  },
  {
    step: "02",
    icon: "📥",
    title: "Baixe o PDF",
    desc: "Clique no link do e-mail e faça o download do Pack completo com todos os 108 cards.",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-secondary text-white",
  },
  {
    step: "03",
    icon: "🖨️",
    title: "Imprima os cards",
    desc: "Imprima em papel A4 comum ou cartão. Recomendamos plastificar para maior durabilidade.",
    color: "bg-green-50 border-green-200",
    badge: "bg-cta text-white",
  },
  {
    step: "04",
    icon: "🎯",
    title: "Comece pelo Nível 1",
    desc: "Siga o Guia de Aplicação incluso. Comece sempre pelo Nível 1 — pareamento idêntico.",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-urgency text-white",
  },
];

export default function NextSteps() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl md:text-4xl text-center text-gray-900">
          Seus próximos passos 🗺️
        </motion.h2>

        <div className="flex flex-col gap-4">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${s.color} border rounded-2xl p-5 flex items-start gap-4`}>
              <div className={`${s.badge} font-display font-black text-sm px-3 py-1.5 rounded-full whitespace-nowrap mt-0.5`}>
                {s.step}
              </div>
              <div>
                <p className="font-display font-black text-gray-900 text-lg">
                  {s.icon} {s.title}
                </p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert e-mail */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <p className="text-yellow-800 text-sm leading-relaxed">
            <strong>Não recebeu o e-mail?</strong> Verifique a pasta de spam/lixo eletrônico.
            Se não encontrar em 10 minutos, entre em contato pelo Instagram{" "}
            <a href="https://instagram.com/universotea.aba" target="_blank"
              className="text-primary font-bold underline">@universotea.aba</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
