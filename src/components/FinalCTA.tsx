import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[8%] h-2 w-2 rounded-full border border-border-strong hidden lg:block"
      />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get In Touch
          </p>
          <h2 className="font-display uppercase leading-[0.88] text-[13vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-8xl">
            Let&rsquo;s Create
            <br />
            Something
            <br />
            Meaningful.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-border pt-10">
          <Link
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl uppercase tracking-wide hover:text-accent transition-colors"
          >
            Get In Touch
            <ArrowUpRight
              size={26}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <div className="flex items-center gap-8 text-sm uppercase tracking-[0.12em] text-muted">
            <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
              LinkedIn
            </Link>
            <Link href={`mailto:${site.email}`} className="hover:text-fg transition-colors">
              Email
            </Link>
            <a href={site.resumeHref} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
