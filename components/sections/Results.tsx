"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPECTED_RESULTS } from "@/lib/constants";

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            💙 Resultados que você pode esperar:
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transformações reais com uso consistente do material
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4">
          {EXPECTED_RESULTS.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="bg-white rounded-xl shadow-md p-5 md:p-6 flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all border-l-4 border-cta">
              <motion.span 
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                className="text-3xl md:text-4xl flex-shrink-0">
                ✨
              </motion.span>
              <span className="text-gray-800 font-semibold text-lg md:text-xl">{result}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-200 text-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            <span className="font-bold text-primary">🔑 Segredo:</span> A consistência é fundamental. 
            Com uso diário do material, você começará a ver melhoras nas{" "}
            <span className="font-bold">primeiras semanas</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
