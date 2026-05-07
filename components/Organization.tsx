type Accent = "red" | "yellow" | "green";

type Org = {
  name: string;
  role: string;
  period: string;
  highlights: string[];
  accent: Accent;
};

const orgs: Org[] = [
  {
    name: "Information Technology Student Association",
    role: "Head of Media and Technology Division",
    period: "Jul 2022 – Jun 2023",
    accent: "yellow",
    highlights: [
      "Managed the Media and Technology division and its members.",
      "Drove new ideas for organizational content and digital presence.",
      "Developed and maintained the official organization website.",
    ],
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

export function Organization() {
  return (
    <section
      id="organization"
      className="section overflow-hidden border-t border-zinc-100 bg-zinc-50"
    >
      {/* Ornaments */}
      <span
        aria-hidden
        className="ornament-dot bg-brand-yellow"
        style={{ width: 220, height: 220, top: 60, right: -80 }}
      />
      <span
        aria-hidden
        className="ornament-dot bg-brand-red"
        style={{ width: 200, height: 200, bottom: -60, left: -60 }}
      />
      <span
        aria-hidden
        className="absolute right-12 bottom-16 h-12 w-12 rotate-45 rounded-md border-[3px] border-brand-green/70"
        style={{ animation: "float 10s ease-in-out infinite 0.5s" }}
      />

      <div className="container-tight relative">
        <div className="tri-underline mb-4" />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Beyond work
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">
          Organization
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Volunteer leadership during my time at university — building
          community and shipping something with a team that wasn&apos;t a
          paycheck.
        </p>

        <ol className="mt-12 space-y-6">
          {orgs.map((org) => (
            <li
              key={org.name}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 ${accentBar[org.accent]}`}
              />
              <div className="flex flex-col gap-1 pl-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {org.name}
                  </h3>
                  <p className={`text-sm font-medium ${accentText[org.accent]}`}>
                    {org.role}
                  </p>
                </div>
                <p className="text-xs text-zinc-500 md:text-right">
                  {org.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 pl-2 text-sm text-zinc-600">
                {org.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentBar[org.accent]}`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
