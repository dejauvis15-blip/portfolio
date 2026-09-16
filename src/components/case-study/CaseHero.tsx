import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CaseHero({
  project,
  align = "left",
}: {
  project: Project;
  /** "center" mirrors a fully centered reference layout; default keeps the existing left-aligned look. */
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <section className="pt-28 md:pt-36">
      <div
        className={`mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 ${centered ? "text-center" : ""}`}
      >
        <Reveal className={centered ? "flex justify-center" : undefined}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg mb-10"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p
            className={`flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-6 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.category}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className={`font-display uppercase leading-[0.88] text-[11vw] sm:text-[8vw] lg:text-6xl xl:text-7xl max-w-5xl ${centered ? "mx-auto" : ""}`}
          >
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p
            className={`mt-8 max-w-2xl text-lg text-muted leading-relaxed ${centered ? "mx-auto" : ""}`}
          >
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className={`mt-14 flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
            <Meta label="Category" value={project.discipline.join(" · ")} />
            <Meta label="Year" value={project.year} />
            <Meta label="Role" value={project.role} />
            <Meta label="Tools" value={project.tools.join(", ")} />
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-4 py-2">
      <dt className="text-xs uppercase tracking-[0.1em] text-muted-2">
        {label}
      </dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}
