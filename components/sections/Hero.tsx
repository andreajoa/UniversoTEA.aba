"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-white py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4 md:gap-6">

        {/* Banner principal - responsivo */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="w-full max-w-4xl mx-auto">
            <Image 
              src="/images/banner website3.png" 
              alt="Pack de Pareamento ABA UniversoTEA - Banner Principal" 
              width={1200}
              height={600}
              priority
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-tight max-w-3xl px-2">
          🧩 Seu filho ainda não pareia?{" "}
          <span className="text-primary">Esse material pode mudar isso ainda essa semana.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed px-2">
          108 cards terapêuticos baseados em ABA, prontos para imprimir —
          <strong> 6 temas, 3 níveis de dificuldade</strong>, do mais simples ao mais complexo.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md px-4">
          <CTAButton className="w-full text-sm md:text-base px-4 md:px-8 py-3 md:py-4" />
          <p className="text-gray-400 text-[10px] md:text-xs mt-2 px-2">🔒 Compra segura • ✅ 7 dias de garantia • 📲 Acesso imediato</p>
          <p className="text-gray-400 text-[9px] md:text-[10px] mt-1.5 px-2 leading-relaxed">
            Material digital protegido por direitos autorais. Uso pessoal e intransferível. Proibido compartilhar, revender, copiar ou redistribuir sem autorização.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
