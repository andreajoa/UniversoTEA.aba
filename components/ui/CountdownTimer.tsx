"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ seconds }: { seconds: number }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time <= 0) return;
    const t = setInterval(() => setTime(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(t);
  }, [time]);

  const m = Math.floor(time / 60);
  const s = time % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="bg-red-600 text-white rounded-xl px-5 py-3 text-center">
        <p className="font-display font-black text-4xl">{pad(m)}</p>
        <p className="text-xs uppercase tracking-wider">min</p>
      </div>
      <span className="font-display font-black text-4xl text-red-600">:</span>
      <div className="bg-red-600 text-white rounded-xl px-5 py-3 text-center">
        <p className="font-display font-black text-4xl">{pad(s)}</p>
        <p className="text-xs uppercase tracking-wider">seg</p>
      </div>
    </div>
  );
}
