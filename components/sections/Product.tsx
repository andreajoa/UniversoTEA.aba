"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { THEMES, LEVELS } from "@/lib/constants";

export default function Product() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center px-4">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 md:mb-6">
            Conheça o <span className="text-primary">Pack Completo de Pareamento</span> UniversoTEA
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-sm sm:text-base md:text-lg lg:text-2xl font-display font-black text-gray-700">
            <span className="bg-blue-100 text-primary px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base">📦 6 temas</span>
            <span className="text-gray-400">×</span>
            <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base">3 níveis</span>
            <span className="text-gray-400">×</span>
            <span className="bg-green-100 text-green-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base">6 imagens</span>
            <span className="text-gray-400">=</span>
            <span className="bg-urgency text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base">108 cards</span>
          </div>
        </motion.div>

        {/* Temas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
          {THEMES.map((theme, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${theme.color} rounded-xl md:rounded-2xl p-3 md:p-5 flex items-center gap-2 md:gap-3 font-display font-bold text-sm md:text-lg shadow-sm hover-playful cursor-pointer`}>
              <span className="text-2xl md:text-3xl">{theme.emoji}</span>
              <span className="truncate">{theme.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {LEVELS.map((level, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 text-center flex flex-col gap-1 md:gap-2 hover-playful cursor-pointer">
              <p className="text-2xl md:text-3xl">{level.stars}</p>
              <p className="font-display font-black text-primary text-base md:text-lg">{level.level}</p>
              <p className="font-bold text-gray-800 text-sm md:text-base">{level.desc}</p>
              <p className="text-gray-500 text-xs md:text-sm">{level.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
