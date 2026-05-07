type SkillGroup = {
  title: string;
  color: "red" | "yellow" | "green";
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    color: "red",
    items: ["JavaScript (Node.js)", "TypeScript", "PHP", "Python"],
  },
  {
    title: "Backend & Architecture",
    color: "yellow",
    items: [
      "Express.js",
      "RESTful API",
      "Microservices",
      "Prisma ORM",
      "MVC & Modular",
    ],
  },
  {
    title: "Database & Caching",
    color: "green",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Search & Messaging",
    color: "red",
    items: ["Elasticsearch", "MQTT"],
  },
  {
    title: "Cloud & Tools",
    color: "yellow",
    items: ["AWS", "Git", "Postman", "Swagger"],
  },
];

const colorClasses = {
  red: "border-brand-red/30 bg-brand-red/10 text-brand-red",
  yellow: "border-brand-yellow/40 bg-brand-yellow/15 text-yellow-700",
  green: "border-brand-green/30 bg-brand-green/10 text-brand-green",
};

const dotColor = {
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};

export function About() {
  return (
    <section
      id="about"
      className="section overflow-hidden border-t border-zinc-100 bg-zinc-50"
    >
      {/* Ornaments */}
      <span
        aria-hidden
        className="ornament-dot bg-brand-red"
        style={{ width: 240, height: 240, top: 60, right: -80 }}
      />
      <span
        aria-hidden
        className="ornament-dot bg-brand-green"
        style={{ width: 280, height: 280, bottom: -100, left: -60 }}
      />
      <span
        aria-hidden
        className="absolute right-10 bottom-16 h-14 w-14 rotate-45 rounded-md border-[3px] border-brand-yellow/70"
        style={{ animation: "float-soft 10s ease-in-out infinite" }}
      />
      <span
        aria-hidden
        className="absolute left-1/2 top-12 h-3 w-3 rounded-full bg-brand-red/60"
        style={{ animation: "float 8s ease-in-out infinite 0.4s" }}
      />

      <div className="container-tight relative grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="tri-underline mb-4" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">
            A bit about me
          </h2>

          <div className="mt-8 space-y-4 rounded-xl border border-zinc-200 bg-white p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Education
              </p>
              <p className="mt-1 font-medium text-zinc-900">
                University of Jember
              </p>
              <p className="text-sm text-zinc-600">
                B.Sc. Computer Science — Web Development
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Graduated Jan 2025 · GPA 3.7 / 4.00
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-zinc-700">
          <p>
            I&apos;m a Backend Software Engineer with 2+ years of experience
            designing, developing, and maintaining scalable web and IoT-based
            systems. My core stack is Node.js and TypeScript, with PostgreSQL
            and MongoDB on the data side.
          </p>
          <p>
            I&apos;ve led legacy system migrations, designed microservices,
            built Elasticsearch-powered search, and implemented real-time
            messaging with MQTT. I&apos;ve taken ownership as PIC and as sole
            backend developer in production — comfortable working across
            Frontend, Mobile, DevOps, and QA teams.
          </p>

          <div className="space-y-5 pt-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotColor[group.color]}`}
                  />
                  {group.title}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${colorClasses[group.color]}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
