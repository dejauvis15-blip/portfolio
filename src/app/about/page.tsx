import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about, capabilities, tools, site } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Jauvis Dozier",
  description: about.bio,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/images/about-skyline.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-bg/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-10 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  About
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-display uppercase leading-[0.88] text-[13vw] sm:text-[9vw] lg:text-7xl xl:text-8xl">
                  {about.name}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-lg text-muted max-w-lg">
                  {about.program}
                  <br />
                  {about.school}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none border border-border-strong bg-bg-elevated overflow-hidden">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Jauvis Dozier"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-fg/90">
              {about.bio}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 max-w-3xl border-t border-border pt-8">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-2 mb-2">Currently</p>
            <p className="text-lg md:text-xl">
              {about.role}
              <br />
              <span className="text-muted">at {about.org}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What I Do
            </p>
          </Reveal>
          <Reveal stagger={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {capabilities.map((cap) => (
              <RevealItem key={cap.title} className="border-r border-b border-border p-6 md:p-8">
                <h3 className="font-display uppercase text-lg tracking-wide">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{cap.description}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Tools &amp; Technologies
            </p>
          </Reveal>
          <Reveal stagger={0.04} className="flex flex-wrap gap-x-8 gap-y-3">
            {tools.map((tool) => (
              <RevealItem key={tool} className="text-muted text-sm md:text-base">
                {tool}
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display uppercase leading-[0.9] text-[10vw] sm:text-[6vw] lg:text-5xl">
              Let&rsquo;s work
              <br />
              together.
            </h2>
            <div className="flex items-center gap-6 text-sm uppercase tracking-[0.1em] text-muted">
              <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
                LinkedIn
              </Link>
              <Link href={`mailto:${site.email}`} className="group inline-flex items-center gap-2 text-fg hover:text-accent transition-colors">
                {site.email}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
