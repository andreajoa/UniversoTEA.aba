"use client";
import { KIWIFY_URL } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

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
    <div className="bg-urgency text-white text-center py-3 px-4 sticky top-0 z-50 shadow-md">
      <p className="font-display font-black text-sm md:text-base">
        🔥 Oferta de Lançamento — 50% OFF por:{" "}
        <span className="bg-white text-urgency px-2 py-0.5 rounded font-black mx-1">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>{" "}
        <a href={KIWIFY_URL} target="_blank" rel="noopener noreferrer"
          className="underline font-black ml-2 hover:opacity-80">
          GARANTIR AGORA →
        </a>
      </p>
    </div>
  );
}
