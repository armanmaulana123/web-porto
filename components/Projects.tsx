type Accent = "red" | "yellow" | "green";

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  accent: Accent;
};

const accentBar: Record<Accent, string> = {
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
};

const accentHover: Record<Accent, string> = {
  red: "group-hover:text-brand-red",
  yellow: "group-hover:text-yellow-700",
  green: "group-hover:text-brand-green",
};

const projects: Project[] = [
  {
    title: "Authentication Service",
    role: "Backend Developer",
    period: "Aug 2025 – Present",
    description:
      "Designed and built the auth service for Brighton's platform — sessions, role-based access, and token management on a Node.js + Prisma stack.",
    tags: ["TypeScript", "Express.js", "Prisma", "PostgreSQL"],
    accent: "red",
  },
  {
    title: "Property Search Indexing",
    role: "Backend Developer",
    period: "Aug 2025 – Present",
    description:
      "Built the Elasticsearch indexing pipeline and query layer for property and listing search at scale, paired with Redis caching to improve relevance and response time.",
    tags: ["Elasticsearch", "Redis", "Node.js", "TypeScript"],
    accent: "yellow",
  },
  {
    title: "Legacy Backend Migration",
    role: "PIC / Backend Developer",
    period: "Aug 2025 – Present",
    description:
      "Led the migration of Brighton's internal web from SilverStripe (PHP) to a modern TypeScript backend as appointed PIC — owned schema redesign and high-integrity data migration across the cutover.",
    tags: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "SilverStripe"],
    accent: "green",
  },
  {
    title: "Smart Traffic AJK",
    role: "Sole Backend Developer",
    period: "Jan 2025 – Jul 2025",
    description:
      "Built the API connecting a Traffic Light Control System with client applications. Designed the database and implemented MQTT for real-time device messaging.",
    tags: ["Express.js", "MQTT", "PostgreSQL", "IoT"],
    accent: "red",
  },
  {
    title: "Warning Light System",
    role: "Backend Developer",
    period: "Jan 2025 – Jul 2025",
    description:
      "Built the web interface and API to connect warning-light devices with client applications. Used MQTT for real-time control signals and live status reporting from the field.",
    tags: ["Express.js", "MQTT", "PostgreSQL", "IoT"],
    accent: "green",
  },
  {
    title: "Sales Scanner",
    role: "Backend Leader",
    period: "Apr 2024 – Jan 2025",
    description:
      "Led backend development and database design for a web + mobile application. Built APIs and deployed/managed microservices on AWS.",
    tags: ["Express.js", "PostgreSQL", "MongoDB", "AWS"],
    accent: "yellow",
  },
  {
    title: "Pak RT",
    role: "Backend Developer",
    period: "Oct 2024 – Jan 2025",
    description:
      "Built APIs for web and mobile clients with Express and TypeScript. Designed PostgreSQL schemas and managed microservice deployment on AWS.",
    tags: ["Express.js", "TypeScript", "PostgreSQL", "AWS"],
    accent: "green",
  },
  {
    title: "Sepakat",
    role: "Backend Leader",
    period: "Jul 2023 – Apr 2024",
    description:
      "Led backend and database design for a multi-platform application. Delivered APIs for web and mobile and ran microservices on AWS.",
    tags: ["Express.js", "PostgreSQL", "MongoDB", "AWS"],
    accent: "red",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section overflow-hidden border-t border-zinc-100 bg-zinc-50"
    >
      {/* Ornaments */}
      <span
        aria-hidden
        className="ornament-dot bg-brand-green"
        style={{ width: 260, height: 260, top: 60, left: -100 }}
      />
      <span
        aria-hidden
        className="ornament-dot bg-brand-yellow"
        style={{ width: 240, height: 240, bottom: -60, right: -60 }}
      />
      <span
        aria-hidden
        className="absolute right-12 top-20 h-16 w-16 rounded-full border-[3px] border-brand-red/70"
        style={{ animation: "spin-slow 24s linear infinite" }}
      />
      <span
        aria-hidden
        className="absolute left-10 bottom-24 h-10 w-10 rotate-45 rounded-md bg-brand-yellow/70"
        style={{ animation: "float 9s ease-in-out infinite 0.6s" }}
      />

      <div className="container-tight relative">
        <div className="tri-underline mb-4" />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 ${accentBar[project.accent]}`}
              />
              <div className="flex items-baseline justify-between gap-3">
                <h3
                  className={`text-xl font-medium text-zinc-900 transition-colors ${accentHover[project.accent]}`}
                >
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs text-zinc-500">
                  {project.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-500">
                {project.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
