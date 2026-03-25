"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <Image src="/images/pais.png" alt="Família aplicando os cards" width={500} height={600}
            className="rounded-3xl shadow-xl w-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 leading-tight">
            O que a ciência descobriu sobre como crianças com TEA{" "}
            <span className="text-primary">aprendem mais rápido</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            O pareamento é uma das habilidades mais fundamentais no desenvolvimento de crianças com TEA.
            Quando uma criança aprende a associar imagens — primeiro idênticas, depois similares, finalmente
            por categoria — ela constrói a base para <strong>linguagem, comunicação e cognição.</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            O problema é que a maioria dos materiais não tem <strong>progressão pedagógica</strong>.
            Você aplica o nível errado e a criança frustra, regride ou perde o interesse.
          </p>
          <div className="bg-blue-50 border-l-4 border-primary rounded-r-2xl p-5">
            <p className="text-primary font-display font-bold text-lg">
              🧪 Desenvolvido com base na Análise do Comportamento Aplicada (ABA) — a abordagem com
              mais evidências científicas para o desenvolvimento de crianças com TEA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
