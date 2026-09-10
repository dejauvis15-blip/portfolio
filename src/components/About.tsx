import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10">
          <Reveal className="lg:col-span-4">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About
            </p>
            <h2 className="font-display uppercase leading-[0.9] text-[12vw] sm:text-[7vw] lg:text-5xl xl:text-6xl">
              {about.name}
            </h2>
            <p className="mt-4 text-muted">{about.program}</p>
            <p className="text-muted-2 text-sm">{about.school}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed text-fg/90 max-w-2xl">
              {about.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm uppercase tracking-[0.1em] text-muted border-t border-border pt-6">
              <span className="text-fg">Currently</span>
              <span>—</span>
              <span>{about.role}</span>
              <span className="text-muted-2">at {about.org}</span>
            </div>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] hover:text-accent transition-colors"
            >
              More about me
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
