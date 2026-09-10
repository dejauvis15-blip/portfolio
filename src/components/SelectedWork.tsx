import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function SelectedWork() {
  const [tesla, discord] = projects;

  return (
    <section id="work" className="scroll-mt-20 py-28 md:py-36 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Featured Work
            </p>
            <h2 className="font-display uppercase leading-[0.9] text-[12vw] sm:text-[8vw] lg:text-6xl xl:text-7xl">
              Selected Work
            </h2>
          </div>
          <p className="hidden md:block font-display text-2xl text-muted-2">
            (02)
          </p>
        </Reveal>

        {/* 01 — Tesla: full-width landscape presentation */}
        <Reveal>
          <Link href="/work/tesla" className="group block">
            <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden border border-border bg-bg-elevated">
              <Image
                src={tesla.heroImage.src}
                alt={tesla.heroImage.alt}
                fill
                sizes="100vw"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 font-display text-lg text-fg/90 tracking-wide">
                {tesla.index}
              </span>
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-border pt-6 transition-colors group-hover:border-border-strong">
              <div>
                <h3 className="font-display uppercase leading-none text-4xl md:text-6xl">
                  {tesla.name}
                </h3>
                <p className="mt-2 text-muted">Homepage Redesign</p>
              </div>
              <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm uppercase tracking-[0.1em] text-muted">
                <span>{tesla.discipline.join(" · ")}</span>
                <span>{tesla.year}</span>
                <ArrowUpRight
                  size={22}
                  className="text-fg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>
        </Reveal>

        {/* 02 — Discord: asymmetric split presentation */}
        <Reveal delay={0.05} className="mt-24 md:mt-32">
          <Link href="/work/discord" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-border bg-bg-elevated order-2 lg:order-1">
              <Image
                src={discord.heroImage.src}
                alt={discord.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute top-6 left-6 font-display text-lg text-fg/90 tracking-wide">
                {discord.index}
              </span>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between border border-border bg-bg-panel p-8 md:p-12 transition-colors group-hover:border-border-strong">
              <div>
                <h3 className="font-display uppercase leading-none text-4xl md:text-6xl">
                  {discord.name}
                </h3>
                <p className="mt-2 text-muted">UX/UI Project</p>
                <p className="mt-6 max-w-md text-muted text-sm md:text-base leading-relaxed">
                  {discord.summary}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between gap-6 text-xs md:text-sm uppercase tracking-[0.1em] text-muted border-t border-border pt-6">
                <span>{discord.discipline.join(" · ")}</span>
                <span>{discord.year}</span>
                <span className="ml-auto flex items-center gap-2 text-fg">
                  View Case Study
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
