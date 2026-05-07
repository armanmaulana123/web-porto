"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#organization", label: "Organization", id: "organization" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const linkIds = links.map((l) => l.id);

    const handleScroll = () => {
      const offset = 150;
      let currentId = "";

      for (const id of linkIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) {
          currentId = id;
        } else {
          break;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom && linkIds.length > 0) {
        currentId = linkIds[linkIds.length - 1];
      }

      setActive(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur">
      <nav className="container-tight flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-brand-red transition-transform duration-300 hover:scale-150" />
            <span className="h-2 w-2 rounded-full bg-brand-yellow transition-transform duration-300 hover:scale-150" />
            <span className="h-2 w-2 rounded-full bg-brand-green transition-transform duration-300 hover:scale-150" />
          </span>
          Arman Maulana Saputra
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link relative ${
                  active === link.id ? "text-zinc-900" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-tri-gradient transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-zinc-900 transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-zinc-900 transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-zinc-900 transition-transform duration-300 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-zinc-200/60 bg-white transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="container-tight flex flex-col py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  active === link.id
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-600"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
