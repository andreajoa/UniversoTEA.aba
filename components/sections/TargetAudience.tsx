"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TARGET_AUDIENCE } from "@/lib/constants";

export default function TargetAudience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            👶 Para quem é esse material?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Desenvolvido para profissionais e famílias que querem fazer a diferença
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all cursor-default border-t-4 border-primary">
              <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
              <h3 className="font-display font-black text-gray-900 text-lg md:text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Não importa sua experiência — o Pack de Pareamento ABA UniversoTEA foi desenvolvido para ser{" "}
            <span className="font-bold text-primary">fácil de usar</span> e{" "}
            <span className="font-bold text-primary">adaptável</span> à sua realidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
