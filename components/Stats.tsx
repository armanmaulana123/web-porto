"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  color: "red" | "yellow" | "green";
};

const stats: Stat[] = [
  { value: 2, suffix: "+", label: "Years experience", color: "red" },
  { value: 4, suffix: "", label: "Companies", color: "yellow" },
  { value: 8, suffix: "+", label: "Projects shipped", color: "green" },
  { value: 3.7, suffix: "/4", label: "GPA", color: "red" },
];

const accentText = {
  red: "text-brand-red",
  yellow: "text-yellow-700",
  green: "text-brand-green",
};

const accentBar = {
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start);
  const isDecimal = stat.value % 1 !== 0;
  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md">
      <span
        className={`absolute inset-x-0 top-0 h-1 ${accentBar[stat.color]}`}
      />
      <p
        className={`text-4xl font-semibold tabular-nums md:text-5xl ${accentText[stat.color]}`}
      >
        {isDecimal ? value.toFixed(1) : Math.round(value)}
        <span className="text-2xl md:text-3xl">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-zinc-100 py-16">
      {/* Ornaments */}
      <span
        aria-hidden
        className="absolute left-8 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 rounded-md border-[2px] border-brand-red/70"
        style={{ animation: "float-soft 10s ease-in-out infinite" }}
      />
      <span
        aria-hidden
        className="absolute right-8 top-1/2 flex -translate-y-1/2 gap-1.5"
        style={{ animation: "float 9s ease-in-out infinite 0.5s" }}
      >
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        <span className="h-2 w-2 rounded-full bg-brand-yellow" />
        <span className="h-2 w-2 rounded-full bg-brand-green" />
      </span>

      <div
        ref={ref}
        className="container-tight relative grid gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} start={start} />
        ))}
      </div>
    </section>
  );
}
