type Accent = "red" | "yellow" | "green";

type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  accent: Accent;
};

const jobs: Job[] = [
  {
    company: "Brighton Real Estate",
    role: "Backend Developer",
    location: "Surabaya, East Java",
    period: "Aug 2025 – Present",
    accent: "red",
    highlights: [
      "Led backend system migration as PIC, moving a legacy SilverStripe (PHP) system to a modern TypeScript backend.",
      "Designed RESTful APIs with Node.js, Express.js, TypeScript, and Prisma ORM.",
      "Integrated Elasticsearch for property and listing search with optimized indexing and queries.",
      "Improved search performance and relevance for large-scale property data using Redis caching.",
    ],
  },
  {
    company: "PT. Dawuan Slamet Mulyo",
    role: "Backend Developer",
    location: "Lumajang, East Java",
    period: "Jan 2025 – Jul 2025",
    accent: "yellow",
    highlights: [
      "Sole backend developer responsible for end-to-end backend system development.",
      "Built backend systems for IoT projects: APILL traffic light control, road CCTV, and environmental sensors.",
      "Implemented MQTT for real-time data communication and device messaging.",
    ],
  },
  {
    company: "PT. Andalan Solusi Cemerlang",
    role: "Backend Developer",
    location: "Jember, East Java",
    period: "Jul 2023 – Jan 2025",
    accent: "green",
    highlights: [
      "Built APIs for 4 web and mobile applications.",
      "Main backend developer on multiple projects; managed microservices.",
    ],
  },
  {
    company: "PT. Arkatama Multi Solusindo",
    role: "Fullstack Web Developer Intern",
    location: "Malang, East Java",
    period: "Jan 2023 – Jun 2023",
    accent: "red",
    highlights: [
      "Shipped features in real client projects and completed all internship assignments.",
      "Collaborated with fellow interns in a team setting.",
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

export function Experience() {
  return (
    <section
      id="experience"
      className="section overflow-hidden border-t border-zinc-100"
    >
      {/* Ornaments */}
      <span
        aria-hidden
        className="ornament-dot bg-brand-yellow"
        style={{ width: 220, height: 220, top: 40, left: -80 }}
      />
      <span
        aria-hidden
        className="ornament-dot bg-brand-red"
        style={{ width: 240, height: 240, bottom: 40, right: -80 }}
      />
      <span
        aria-hidden
        className="absolute left-12 bottom-32"
        style={{ animation: "float-soft 11s ease-in-out infinite 0.3s" }}
      >
        <svg width="26" height="26" viewBox="0 0 20 20" className="text-brand-green/80">
          <line
            x1="10"
            y1="2"
            x2="10"
            y2="18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="10"
            x2="18"
            y2="10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        aria-hidden
        className="absolute right-16 top-24 flex flex-col gap-1.5"
        style={{ animation: "float 9s ease-in-out infinite 0.7s" }}
      >
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        <span className="h-2 w-2 rounded-full bg-brand-yellow" />
        <span className="h-2 w-2 rounded-full bg-brand-green" />
      </span>

      <div className="container-tight relative">
        <div className="tri-underline mb-4" />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Where I&apos;ve worked
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">
          Experience
        </h2>

        <ol className="mt-12 space-y-6">
          {jobs.map((job) => (
            <li
              key={job.company}
              className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 ${accentBar[job.accent]}`}
              />
              <div className="flex flex-col gap-1 pl-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {job.company}
                  </h3>
                  <p className={`text-sm font-medium ${accentText[job.accent]}`}>
                    {job.role}
                  </p>
                </div>
                <div className="text-xs text-zinc-500 md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 pl-2 text-sm text-zinc-600">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentBar[job.accent]}`}
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
