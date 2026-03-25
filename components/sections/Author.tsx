"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AUTHOR_INFO } from "@/lib/constants";

export default function Author() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Quem criou esse material? 👩‍⚕️
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça a profissional por trás do Pack de Pareamento ABA UniversoTEA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Foto da autora */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <Image
                  src="/images/pais.png"
                  alt="Edijane Aguiar"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Informações da autora */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-display font-black text-2xl md:text-3xl text-primary mb-2">
                {AUTHOR_INFO.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-700 font-semibold mb-4">
                {AUTHOR_INFO.credentials}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2 mb-4">
                {AUTHOR_INFO.specialties.map((specialty, index) => (
                  <p key={index} className="text-gray-600 text-sm md:text-base">
                    ✅ {specialty}
                  </p>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold">💜 {AUTHOR_INFO.isMother}</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-700 leading-relaxed italic border-l-4 border-purple-300 pl-4">
                "{AUTHOR_INFO.experience}"
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
