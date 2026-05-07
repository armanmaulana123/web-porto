"use client";

import { useState } from "react";

const EMAIL = "armanmaulanasaputra15@gmail.com";
const PHONE = "+62 812-3483-5361";
const GITHUB = "https://github.com/armanmaulana123";
const LINKEDIN = "https://linkedin.com/in/armanmaulanasaputra/";

type Accent = "red" | "yellow" | "green";

type Link = {
  label: string;
  value: string;
  copyValue: string;
  href: string;
  accent: Accent;
  external: boolean;
};

const links: Link[] = [
  {
    label: "Email",
    value: EMAIL,
    copyValue: EMAIL,
    href: `mailto:${EMAIL}`,
    accent: "red",
    external: false,
  },
  {
    label: "Phone",
    value: PHONE,
    copyValue: PHONE,
    href: `tel:${PHONE.replace(/\s|-/g, "")}`,
    accent: "yellow",
    external: false,
  },
  {
    label: "GitHub",
    value: "armanmaulana123",
    copyValue: GITHUB,
    href: GITHUB,
    accent: "green",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "armanmaulanasaputra",
    copyValue: LINKEDIN,
    href: LINKEDIN,
    accent: "red",
    external: true,
  },
];

const accentBar: Record<Accent, string> = {
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};

const accentText: Record<Accent, string> = {
  red: "text-brand-red",
  yellow: "text-yellow-700",
  green: "text-brand-green",
};

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="section overflow-hidden border-t border-zinc-100"
    >
      <span
        className="ornament-dot bg-brand-red"
        style={{ width: 200, height: 200, top: 40, left: -40 }}
      />
      <span
        className="ornament-dot bg-brand-green"
        style={{ width: 220, height: 220, bottom: -40, right: -40 }}
      />
      <span
        className="ornament-dot bg-brand-yellow"
        style={{ width: 160, height: 160, top: "30%", left: "50%" }}
      />

      <div className="container-tight relative">
        <div className="text-center">
          <div className="tri-underline mx-auto mb-4" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-zinc-600">
            Open to backend roles, freelance, and collaboration. Click any item
            to open it, or use the copy button to grab the value.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="relative flex items-center gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 transition-all group-hover:-translate-y-0.5 group-hover:border-zinc-300 group-hover:shadow-md"
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 ${accentBar[link.accent]}`}
                />
                <div className="pl-2">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${accentText[link.accent]}`}
                  >
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-zinc-900">
                    {link.value}
                  </p>
                </div>
              </a>
              <button
                type="button"
                aria-label={`Copy ${link.label}`}
                onClick={(e) => {
                  e.preventDefault();
                  copy(link.label, link.copyValue);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-600 opacity-0 transition-all hover:bg-zinc-50 group-hover:opacity-100"
              >
                {copied === link.label ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Toast */}
      <div
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-lg transition-all duration-300 ${
          copied
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-green" />
          {copied} copied to clipboard
        </span>
      </div>
    </section>
  );
}
