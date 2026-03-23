"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-white py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto animate-float">
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
          className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold animate-wiggle">
          ⭐⭐⭐⭐⭐ Mais de 500 famílias e terapeutas já utilizam
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight max-w-3xl px-2">
          🧩 Seu filho ainda não pareia?{" "}
          <span className="text-primary">Esse material pode mudar isso ainda essa semana.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed px-2">
          108 cards terapêuticos baseados em ABA, prontos para imprimir —
          <strong> 6 temas, 3 níveis de dificuldade</strong>, do mais simples ao mais complexo.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-md px-4">
          <CTAButton className="w-full text-sm md:text-base px-6 md:px-10 py-4 md:py-5" />
          <p className="text-gray-400 text-xs md:text-sm mt-3 px-2">🔒 Compra segura • ✅ 7 dias de garantia • 📲 Acesso imediato</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }}
          className="w-full max-w-2xl px-4 animate-float">
          <Image src="/images/cards.png" alt="Cards de Pareamento UniversoTEA" width={700} height={400}
            className="rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl w-full object-cover" />
        </motion.div>

      </div>
    </section>
  );
}
