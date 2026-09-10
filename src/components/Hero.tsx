import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { infoStrip, site } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-44 overflow-hidden">
      {/* decorative elements — kept minimal and thin */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute top-[14%] left-[4%] h-24 w-px bg-border-strong" />
        <div className="absolute top-[38%] right-[38%] h-3 w-3 rounded-full border border-border-strong" />
        <span className="absolute top-[10%] right-[40%] text-accent text-lg">✦</span>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-end">
          {/* Headline column */}
          <div className="lg:col-span-7 relative z-10">
            <Reveal>
              <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                UX / Product Designer
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display uppercase leading-[0.85] tracking-tight">
                <span className="block text-[5vw] sm:text-[4vw] lg:text-[1.8vw] xl:text-2xl tracking-[0.08em] mb-1">
                  Undergraduate
                </span>
                <span className="block text-[16vw] sm:text-[13vw] lg:text-[7.2vw] xl:text-[7rem]">
                  UX
                  <br />
                  Designer
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-md text-base md:text-lg text-muted">
                Designing thoughtful digital experiences through research,
                interaction, and visual design.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/#work"
                  className="group inline-flex items-center gap-2 bg-fg text-bg px-6 py-3.5 text-sm uppercase tracking-[0.1em] font-medium transition-colors hover:bg-accent"
                >
                  View My Work
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={site.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-border-strong px-6 py-3.5 text-sm uppercase tracking-[0.1em] text-fg transition-colors hover:border-fg"
                >
                  Download Resume
                  <Download size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15} className="relative">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none border border-border-strong bg-bg-elevated overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt="Jauvis Dozier"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute -bottom-3 -left-3 h-full w-full border border-border -z-10" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Info strip */}
        <Reveal delay={0.1} className="mt-20 lg:mt-24 border-t border-border">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {infoStrip.map((item, i) => (
              <div
                key={item.label}
                className={`py-6 px-1 ${i > 0 ? "border-l border-border" : ""}`}
              >
                <dt className="font-display text-3xl md:text-4xl uppercase">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
