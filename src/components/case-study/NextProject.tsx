import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Next Project
          </p>
          <Link href={`/work/${project.slug}`} className="group block">
            <h2 className="font-display uppercase leading-[0.88] text-[13vw] sm:text-[9vw] lg:text-7xl xl:text-8xl transition-colors group-hover:text-accent">
              {project.name}
            </h2>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm uppercase tracking-[0.1em] transition-colors group-hover:border-accent group-hover:text-accent">
              View Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
