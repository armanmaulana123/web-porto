import Image from "next/image";
import {
  ElasticIcon,
  MongoIcon,
  MqttIcon,
  MysqlIcon,
  NodeIcon,
  PhpIcon,
  PostgresIcon,
  PythonIcon,
  RedisIcon,
  TensorflowIcon,
  TypeScriptIcon,
} from "@/components/icons/TechLogos";

type BadgeProps = {
  icon: React.ReactNode;
  name: string;
  className: string;
  animation: string;
};

function TechBadge({ icon, name, className, animation }: BadgeProps) {
  return (
    <div
      aria-hidden
      className={`absolute flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-zinc-800 shadow-md backdrop-blur ${className}`}
      style={{ animation }}
    >
      {icon}
      {name}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden scroll-mt-24"
    >
      {/* ornament dots */}
      <span
        className="ornament-dot bg-brand-red"
        style={{ width: 220, height: 220, top: 80, left: -60 }}
      />
      <span
        className="ornament-dot bg-brand-yellow"
        style={{ width: 260, height: 260, top: 40, right: -80 }}
      />
      <span
        className="ornament-dot bg-brand-green"
        style={{ width: 180, height: 180, bottom: -40, left: "40%" }}
      />

      {/* Desktop portrait — absolute, bottom-aligned, 85% of section height */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[85%] aspect-[3/4] md:block lg:right-10 xl:right-16">
        {/* Geometric accents */}

        {/* Solid yellow diamond — top-right corner */}
        <span
          aria-hidden
          className="absolute -right-4 top-2 h-7 w-7 rotate-45 rounded-md bg-brand-yellow shadow-md"
          style={{ animation: "float 9s ease-in-out infinite 0.7s" }}
        />

        {/* Hollow red ring — top-center spin */}
        <span
          aria-hidden
          className="absolute left-1/2 -top-4 h-10 w-10 -translate-x-1/2 rounded-full border-[3px] border-brand-red/70"
          style={{ animation: "spin-slow 22s linear infinite" }}
        />

        {/* Tri-color dots cluster — bottom-center */}
        <div
          aria-hidden
          className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5"
          style={{ animation: "float-soft 10s ease-in-out infinite 0.4s" }}
        >
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          <span className="h-2 w-2 rounded-full bg-brand-yellow" />
          <span className="h-2 w-2 rounded-full bg-brand-green" />
        </div>

        {/* Curved dashed line — top-right flourish */}
        <svg
          aria-hidden
          className="absolute right-1 top-20"
          width="48"
          height="48"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M 6 50 Q 28 6 50 28"
            stroke="#2a9d4a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 5"
          />
        </svg>

        {/* Floating tech badges — languages/runtime on the left, databases & ML on the right */}
        <TechBadge
          icon={<TypeScriptIcon />}
          name="TypeScript"
          className="-left-12 top-4"
          animation="float 7s ease-in-out infinite 0.2s"
        />
        <TechBadge
          icon={<NodeIcon />}
          name="Node.js"
          className="-right-2 top-4 lg:-right-8"
          animation="float 8s ease-in-out infinite 0.5s"
        />
        <TechBadge
          icon={<PhpIcon />}
          name="PHP"
          className="-left-10 top-[26%]"
          animation="float-soft 9s ease-in-out infinite 0.8s"
        />
        <TechBadge
          icon={<TensorflowIcon />}
          name="TensorFlow"
          className="-right-4 top-[20%] lg:-right-12"
          animation="float-soft 9s ease-in-out infinite 0.3s"
        />
        <TechBadge
          icon={<PythonIcon />}
          name="Python"
          className="-left-14 top-[48%]"
          animation="float 10s ease-in-out infinite 1.1s"
        />
        <TechBadge
          icon={<PostgresIcon />}
          name="PostgreSQL"
          className="-right-4 top-[38%] lg:-right-10"
          animation="float 10s ease-in-out infinite 1.1s"
        />
        <TechBadge
          icon={<MongoIcon />}
          name="MongoDB"
          className="-right-2 top-[55%] lg:-right-6"
          animation="float-soft 8s ease-in-out infinite 1.0s"
        />
        <TechBadge
          icon={<MysqlIcon />}
          name="MySQL"
          className="-left-10 top-[70%]"
          animation="float 9s ease-in-out infinite 0.4s"
        />
        <TechBadge
          icon={<RedisIcon />}
          name="Redis"
          className="-right-4 top-[72%] lg:-right-10"
          animation="float 8s ease-in-out infinite 0.9s"
        />
        <TechBadge
          icon={<MqttIcon />}
          name="MQTT"
          className="-left-8 bottom-12"
          animation="float-soft 9s ease-in-out infinite 1.4s"
        />
        <TechBadge
          icon={<ElasticIcon />}
          name="Elastic"
          className="-right-2 bottom-8 lg:-right-6"
          animation="float-soft 8s ease-in-out infinite 0.6s"
        />

        <Image
          src="/profile.png"
          alt="Arman Maulana Saputra"
          fill
          priority
          sizes="(min-width: 1024px) 55vh, 65vh"
          className="object-contain object-bottom drop-shadow-[0_45px_35px_rgba(0,0,0,0.45)] drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]"
        />
      </div>

      <div className="container-tight relative pt-32 md:pt-40">
        {/* Text */}
        <div className="md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <div className="tri-underline mb-6" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Backend Software Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Arman</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-brand-yellow/60" />
            </span>
            .
            <br />
            <span className="text-zinc-500">
              I build scalable APIs and IoT systems.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-zinc-600">
            Backend engineer with 2+ years of experience designing and shipping
            web and IoT-based systems — Node.js, TypeScript, PostgreSQL,
            MongoDB, Elasticsearch, and MQTT. Proven as PIC and sole backend
            developer in production environments.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-red/90"
            >
              View work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-yellow-600/40 bg-white px-5 py-2.5 text-sm font-medium text-yellow-700 transition-colors hover:bg-brand-yellow/10"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-md border border-brand-green/40 bg-white px-5 py-2.5 text-sm font-medium text-brand-green transition-colors hover:bg-brand-green/5"
            >
              Get in touch
            </a>
            <span className="ml-1 inline-flex items-center gap-2 text-xs font-medium text-zinc-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              Open to work
            </span>
          </div>
        </div>

        {/* Mobile portrait — inline below text */}
        <div className="mt-12 md:hidden">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <Image
              src="/profile.png"
              alt="Arman Maulana Saputra"
              fill
              sizes="(max-width: 640px) 320px, 400px"
              className="object-contain object-bottom drop-shadow-[0_45px_35px_rgba(0,0,0,0.45)] drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
