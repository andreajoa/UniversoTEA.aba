"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-3xl md:text-4xl text-center text-gray-900">
          O que dizem as famílias e terapeutas 💬
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {["🧪 Baseado em ABA", "🖨️ Pronto para imprimir", "📲 Acesso imediato", "🎓 Aprovado por terapeutas"].map((badge, i) => (
            <div key={i} className="bg-blue-50 text-primary font-display font-bold text-sm text-center px-4 py-3 rounded-2xl">
              {badge}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-2xl">
          <Image src="/images/educadora.png" alt="Terapeuta aplicando os cards"
            width={700} height={450} className="rounded-3xl shadow-xl w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
