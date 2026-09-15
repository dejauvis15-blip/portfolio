import { Fredoka } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about, experience, education, capabilities, site } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

const cartoon = Fredoka({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "About — Jauvis Dozier",
  description: about.bio,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 flex flex-col items-center text-center">
          <Reveal delay={0.08}>
            <p className="font-display font-normal leading-[1.15] text-[6vw] sm:text-3xl lg:text-4xl text-balance">
              People&rsquo;s{" "}
              <span
                className={`${cartoon.className} font-bold text-[7vw] sm:text-4xl lg:text-5xl`}
              >
                Dreams
              </span>{" "}
              never end
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-fg/90">
              {about.bio}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-14 w-full max-w-[240px] lg:max-w-[300px]">
            <div className="relative mx-auto aspect-[4/5] w-full">
              {/* Road photo — back card */}
              <div className="absolute left-0 top-0 z-0 aspect-[2/3] w-[58%] -rotate-6 overflow-hidden rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/10">
                <Image
                  src="/images/about-collage/road.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 55vw"
                  className="object-cover"
                />
              </div>

              {/* Desk setup — front-right card */}
              <div className="absolute bottom-0 right-0 z-10 w-[52%] rotate-6 drop-shadow-2xl">
                <Image
                  src="/images/about-collage/desk.png"
                  alt=""
                  width={296}
                  height={395}
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="h-auto w-full"
                />
              </div>

              {/* Portrait — top layer */}
              <div className="absolute left-[18%] top-[36%] z-20 w-[64%] -rotate-3 drop-shadow-2xl">
                <Image
                  src="/images/about-collage/portrait-circle.png"
                  alt="Jauvis Dozier"
                  width={339}
                  height={387}
                  priority
                  sizes="(min-width: 1024px) 26vw, 56vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-2 mb-8">
              Experience
            </p>
          </Reveal>
          <Reveal stagger={0.06} className="flex flex-col gap-8">
            {experience.map((job) => (
              <RevealItem
                key={job.org}
                className="flex items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                    <Image
                      src={job.logo}
                      alt={`${job.org} logo`}
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{job.org}</p>
                    <p className="text-sm text-muted">{job.role}</p>
                  </div>
                </div>
                <p className="shrink-0 text-sm text-muted-2 whitespace-nowrap">
                  {job.period}
                </p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-2 mb-8">
              Education
            </p>
          </Reveal>
          <Reveal stagger={0.06} className="flex flex-col gap-8">
            {education.map((edu) => {
              return (
                <RevealItem
                  key={edu.school}
                  className="flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        width={28}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{edu.school}</p>
                      <p className="text-sm text-muted">{edu.program}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-sm text-muted-2 whitespace-nowrap">
                    {edu.period}
                  </p>
                </RevealItem>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
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

      <section className="py-24 md:py-32">
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
