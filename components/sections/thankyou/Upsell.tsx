"use client";
import { motion, useInView } from "framer-motion";
import { useRef }            from "react";
import CountdownTimer        from "@/components/ui/CountdownTimer";
import { UPSELL_OFFER, UPSELL_URL } from "@/lib/constants";

export default function Upsell() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">

        {/* Badge oferta especial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-urgency text-white font-display font-black px-6 py-2 rounded-full text-sm uppercase tracking-wide shadow-md">
          🔥 Oferta exclusiva para quem acabou de comprar
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-3xl md:text-4xl text-center text-gray-900 leading-tight">
          Quer ir ainda mais longe no desenvolvimento do seu filho?
        </motion.h2>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center">
          <p className="text-gray-500 text-sm mb-3 font-semibold uppercase tracking-wide">
            ⏳ Essa oferta expira em:
          </p>
          <CountdownTimer seconds={UPSELL_OFFER.timer} />
        </motion.div>

        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8 w-full flex flex-col gap-6">

          <div className="text-center">
            <h3 className="font-display font-black text-2xl text-gray-900 mb-2">
              🗓️ {UPSELL_OFFER.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">{UPSELL_OFFER.description}</p>
          </div>

          {/* Bullets */}
          <div className="flex flex-col gap-3">
            {UPSELL_OFFER.bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-purple-50 rounded-xl px-4 py-3">
                <span className="text-lg">{b.split(" ")[0]}</span>
                <span className="text-gray-700 text-sm font-medium">{b.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
            <p className="text-gray-400 line-through text-lg">{UPSELL_OFFER.originalPrice}</p>
            <p className="font-display font-black text-5xl text-cta">{UPSELL_OFFER.salePrice}</p>
            <p className="text-gray-500 text-xs mt-1">Cobrado uma única vez • Acesso imediato</p>
          </div>

          {/* CTA */}
          <a href={UPSELL_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-cta text-white font-display font-black text-xl text-center py-5 rounded-full shadow-lg animate-pulse-cta hover:bg-green-500 transition-all">
            ✅ SIM! QUERO A ROTINA ABA — {UPSELL_OFFER.salePrice}
          </a>
          <p className="text-center text-gray-400 text-xs">🔒 Compra segura • Acesso imediato após pagamento</p>

          {/* Skip */}
          <p className="text-center text-gray-400 text-xs underline cursor-pointer hover:text-gray-600">
            Não, obrigada — já tenho o que preciso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
