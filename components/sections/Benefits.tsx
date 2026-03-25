"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MAIN_BENEFITS, WHAT_YOU_RECEIVE } from "@/lib/constants";

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Benefícios principais */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            E você NÃO precisa complicar 🎯
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Com os materiais certos, você consegue resultados incríveis
          </p>
        </motion.div>

        {/* Grid de benefícios */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {MAIN_BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-5 md:p-6 border-l-4 border-cta flex items-center gap-3 hover:shadow-lg transition-shadow">
              <span className="text-2xl md:text-3xl flex-shrink-0">✔️</span>
              <span className="text-gray-800 font-semibold text-base md:text-lg">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* O que você vai receber */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            🎁 O que você vai receber:
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {WHAT_YOU_RECEIVE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-5 md:p-6 text-center hover:shadow-xl hover:scale-105 transition-all cursor-default">
              <div className="text-4xl md:text-5xl mb-3">{item.icon}</div>
              <h3 className="font-display font-black text-gray-900 text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Por que funciona */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border border-blue-200">
          <h3 className="font-display font-black text-2xl md:text-3xl text-center text-gray-900 mb-6">
            🚀 Por que esse kit funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {["Simples e fácil de aplicar", "Pronto para usar", "Pensado para a realidade clínica", "Ideal para terapeutas e famílias"].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl">✔️</span>
                <span className="text-gray-800 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
