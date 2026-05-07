export function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="container-tight flex flex-col items-center justify-between gap-3 text-xs text-zinc-500 md:flex-row">
        <p className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
          </span>
          © {new Date().getFullYear()} Arman Maulana Saputra
        </p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
