"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 600);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="flex flex-col items-center gap-0.5">
        <span className="flex gap-0.5">
          <span className="h-1 w-1 rounded-full bg-brand-red" />
          <span className="h-1 w-1 rounded-full bg-brand-yellow" />
          <span className="h-1 w-1 rounded-full bg-brand-green" />
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-700"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </span>
    </button>
  );
}
