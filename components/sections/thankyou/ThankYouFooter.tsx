"use client";
import { motion, useInView } from "framer-motion";
import { useRef }            from "react";
import Image                 from "next/image";
import { INSTAGRAM_URL }     from "@/lib/constants";

export default function ThankYouFooter() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 to-purple-100 py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}>
          <Image src="/images/logo.png" alt="UniversoTEA" width={120} height={120} className="mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-black text-2xl text-gray-900">
          Bem-vinda ao UniversoTEA! 🌈
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-base leading-relaxed max-w-md italic">
          "Cada pequena conquista do seu filho começa com uma ferramenta certa e um coração cheio de amor.
          Você já tem os dois."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-1">
          <p className="text-gray-400 text-sm">Com carinho,</p>
          <p className="font-display font-black text-primary text-lg">Equipe UniversoTEA 💙</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="text-purple-500 text-sm hover:underline">@universo.tea.aba</a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-xs">
          © 2026 UniversoTEA.aba — Todos os direitos reservados
        </motion.p>
      </div>
    </section>
  );
}
