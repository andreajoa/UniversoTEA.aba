"use client";
import { useEffect, useState } from "react";
import { motion }  from "framer-motion";
import Image       from "next/image";
import ConfettiEffect from "@/components/ui/ConfettiEffect";
import { OBRIGADO_IMG } from "@/lib/constants";

export default function ConfirmHero() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-purple-50 py-16 px-4 text-center overflow-hidden">
      {showConfetti && <ConfettiEffect />}

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
        <Image src="/images/logo.png" alt="UniversoTEA.aba" width={140} height={140} className="mx-auto mb-4" />
      </motion.div>

      {/* Check animado */}
      <motion.div
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="w-24 h-24 bg-cta rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <span className="text-white text-5xl font-black">✓</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-display font-black text-4xl md:text-5xl text-gray-900 mb-4">
        🎉 Parabéns! Sua compra foi confirmada!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-6">
        Seu <strong>Pack de Pareamento ABA</strong> está chegando! Verifique sua caixa de entrada —
        o link de acesso foi enviado para o seu e-mail agora.
      </motion.p>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-3">
        {["📧 E-mail enviado", "📲 Acesso imediato", "🖨️ Pronto para imprimir"].map((b, i) => (
          <span key={i} className="bg-white border border-green-200 text-green-700 font-bold px-4 py-2 rounded-full text-sm shadow-sm">
            {b}
          </span>
        ))}
      </motion.div>

      {/* Imagem obrigado horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-10 max-w-3xl mx-auto w-full">
        <Image
          src={OBRIGADO_IMG}
          alt="Obrigado pela compra"
          width={900}
          height={500}
          priority
          className="rounded-3xl shadow-xl w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
