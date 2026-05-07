"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="h-full bg-tri-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
