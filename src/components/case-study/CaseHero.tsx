import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { DiscordMark } from "@/components/icons";

const logoImages: Record<string, string> = {
  tesla: "/images/tesla/logo-icon.jpg",
  netflix: "/images/netflix/logo-icon.jpg",
};

function ProjectLogo({ slug }: { slug: string }) {
  const image = logoImages[slug];
  if (image) {
    return (
      <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/15">
        <Image
          src={image}
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </span>
    );
  }

  if (slug === "discord") {
    return (
      <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-white/15 bg-black/80">
        <DiscordMark className="h-7 w-7 md:h-8 md:w-8" />
      </span>
    );
  }

  return null;
}

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

        <Reveal delay={0.1}>
          <div
            className={`flex items-center gap-4 md:gap-5 ${centered ? "justify-center" : ""}`}
          >
            <ProjectLogo slug={project.slug} />
            <h1 className="font-display uppercase leading-none text-[11vw] sm:text-[8vw] lg:text-6xl xl:text-7xl">
              {project.name}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p
            className={`mt-5 text-lg text-muted ${centered ? "mx-auto" : ""}`}
          >
            {project.category}
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
