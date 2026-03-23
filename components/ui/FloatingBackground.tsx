"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const floatingItems = [
  { emoji: "🧩", size: "text-4xl md:text-6xl", delay: 0 },
  { emoji: "🦖", size: "text-3xl md:text-5xl", delay: 0.5 },
  { emoji: "🧩", size: "text-2xl md:text-4xl", delay: 1 },
  { emoji: "🦕", size: "text-3xl md:text-5xl", delay: 1.5 },
  { emoji: "🧩", size: "text-4xl md:text-6xl", delay: 2 },
  { emoji: "🦎", size: "text-2xl md:text-4xl", delay: 2.5 },
  { emoji: "🧩", size: "text-3xl md:text-5xl", delay: 3 },
  { emoji: "🦕", size: "text-4xl md:text-6xl", delay: 3.5 },
  { emoji: "🧩", size: "text-2xl md:text-3xl", delay: 4 },
  { emoji: "🦖", size: "text-3xl md:text-4xl", delay: 4.5 },
  { emoji: "🧩", size: "text-4xl md:text-5xl", delay: 5 },
  { emoji: "🦕", size: "text-2xl md:text-4xl", delay: 5.5 },
];

export default function FloatingBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${item.size}`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
