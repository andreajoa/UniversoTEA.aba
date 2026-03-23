"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-48 h-48 mx-auto">
            <Image 
              src="/images/logo.png" 
              alt="UniversoTEA Logo" 
              width={200} 
              height={200}
              priority
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
          ⭐⭐⭐⭐⭐ Mais de 500 famílias e terapeutas já utilizam
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-black text-4xl md:text-6xl text-gray-900 leading-tight max-w-3xl">
          🧩 Seu filho ainda não pareia?{" "}
          <span className="text-primary">Esse material pode mudar isso ainda essa semana.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          108 cards terapêuticos baseados em ABA, prontos para imprimir —
          <strong> 6 temas, 3 níveis de dificuldade</strong>, do mais simples ao mais complexo.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
          <CTAButton />
          <p className="text-gray-400 text-sm mt-3">🔒 Compra segura • ✅ 7 dias de garantia • 📲 Acesso imediato</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
          className="w-full max-w-2xl animate-float">
          <Image src="/images/cards.png" alt="Cards de Pareamento UniversoTEA" width={700} height={400}
            className="rounded-3xl shadow-2xl w-full object-cover" />
        </motion.div>

      </div>
    </section>
  );
}
