"use client";
import { useEffect, useState } from "react";

const COLORS = ["#4A90D9","#7B5EA7","#2ECC71","#FF6B35","#FFD700","#FF69B4"];
const TOTAL  = 80;

export default function ConfettiEffect() {
  const [pieces, setPieces] = useState<{ id: number; x: number; color: string; delay: number; size: number }[]>([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: TOTAL }, (_, i) => ({
        id:    i,
        x:     Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 3,
        size:  Math.random() * 8 + 6,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(p => (
        <div key={p.id}
          className="absolute top-0 rounded-sm opacity-80"
          style={{
            left:      `${p.x}%`,
            width:     p.size,
            height:    p.size,
            background: p.color,
            animation: `confetti-fall ${2 + p.delay}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0%   { transform: translateY(-20px) rotate(0deg);   opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
