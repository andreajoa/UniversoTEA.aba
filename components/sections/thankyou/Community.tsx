"use client";
import { motion, useInView } from "framer-motion";
import { useRef }            from "react";
import { WHATSAPP_GROUP, INSTAGRAM_URL } from "@/lib/constants";

export default function Community() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl md:text-4xl text-gray-900">
          Você não está sozinha nessa jornada 🌈
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed max-w-lg">
          Junte-se a centenas de famílias e terapeutas que já fazem parte da comunidade UniversoTEA.
          Tire dúvidas, compartilhe resultados e receba apoio.
        </motion.p>

        {/* Cards de comunidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <motion.a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-green-100 transition-colors cursor-pointer">
            <span className="text-5xl">💬</span>
            <p className="font-display font-black text-green-800 text-lg">Grupo WhatsApp</p>
            <p className="text-green-700 text-sm">Comunidade de pais e terapeutas UniversoTEA</p>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              ENTRAR NO GRUPO →
            </span>
          </motion.a>

          <motion.a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-purple-100 transition-colors cursor-pointer">
            <span className="text-5xl">📸</span>
            <p className="font-display font-black text-purple-800 text-lg">Instagram</p>
            <p className="text-purple-700 text-sm">@universo.tea.aba — dicas diárias de ABA</p>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              SEGUIR AGORA →
            </span>
          </motion.a>
        </div>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-6 w-full">
          <p className="font-display font-bold text-primary text-lg mb-2">
            🤝 Conhece alguém que precisa disso?
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Compartilhe com outras mães, pais ou terapeutas. Cada criança merece a ferramenta certa.
          </p>
          <a href={`https://wa.me/?text=Encontrei esse material incrível de pareamento ABA para crianças com TEA! https://universotea.com.br`}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-green-600 transition-colors">
            💚 Compartilhar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
