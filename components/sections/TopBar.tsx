"use client";
import { KIWIFY_URL } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        const total = prev.h * 3600 + prev.m * 60 + prev.s - 1;
        if (total <= 0) return { h: 0, m: 0, s: 0 };
        return { h: Math.floor(total / 3600), m: Math.floor((total % 3600) / 60), s: total % 60 };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-red-600 via-urgency to-red-700 text-white text-center py-3 md:py-4 px-2 md:px-4 sticky top-0 z-50 shadow-2xl border-b-4 border-yellow-400">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
        <p className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg animate-pulse">
          ⏰🔥 Oferta Exclusiva — Tempo Restante:
        </p>
        <div className={`flex items-center gap-1 md:gap-2 bg-gradient-to-br from-yellow-400 to-yellow-500 text-red-700 px-3 md:px-5 py-1.5 md:py-2 rounded-xl md:rounded-2xl font-black text-base sm:text-xl md:text-2xl lg:text-3xl shadow-xl border-4 border-white ${pulsing ? 'animate-bounce-playful' : ''}`}>
          <span className="flex items-center gap-0.5">
            <span className="animate-sparkle">⏱️</span>
            {pad(time.h)}
          </span>
          <span className="text-red-500 animate-pulse">:</span>
          <span>{pad(time.m)}</span>
          <span className="text-red-500 animate-pulse">:</span>
          <span>{pad(time.s)}</span>
        </div>
        <a href={KIWIFY_URL} target="_blank" rel="noopener noreferrer"
          className="bg-white text-urgency px-3 md:px-6 py-2 md:py-3 rounded-full font-black text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:bg-yellow-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap animate-wiggle">
          🛒 GARANTIR AGORA →
        </a>
      </div>
    </div>
  );
}
