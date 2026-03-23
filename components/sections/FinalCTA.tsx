"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import GuaranteeBadge from "@/components/ui/GuaranteeBadge";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-purple-50 to-blue-100 py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <Image src="/images/pais.png" alt="Família com os cards"
            width={500} height={600} className="rounded-3xl shadow-2xl w-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 leading-tight">
            A janela de desenvolvimento{" "}
            <span className="text-primary">do seu filho não espera.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cada semana com o estímulo certo faz diferença. Você já está aqui —
            isso já mostra o quanto você se importa.
            <strong> Agora dê a ele a ferramenta certa.</strong>
          </p>
          <CTAButton label="🧩 GARANTIR MEU PACK AGORA — R$37" />
          <p className="text-gray-400 text-sm">🔒 Pagamento seguro • ✅ 7 dias de garantia • 📲 Acesso imediato</p>
          <GuaranteeBadge />
          <p className="text-gray-400 text-xs text-center">
            🌈 <strong>@universoTEA.aba</strong> — Um universo de possibilidades no TEA
          </p>
        </motion.div>

      </div>
    </section>
  );
}
