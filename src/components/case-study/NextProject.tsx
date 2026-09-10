import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Next Project
          </p>
          <Link href={`/work/${project.slug}`} className="group flex items-end justify-between gap-6">
            <h2 className="font-display uppercase leading-[0.88] text-[13vw] sm:text-[9vw] lg:text-7xl xl:text-8xl transition-colors group-hover:text-accent">
              {project.name}
            </h2>
            <ArrowUpRight
              size={48}
              className="shrink-0 mb-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
