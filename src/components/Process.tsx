import { ArrowRight, ArrowDown } from "lucide-react";
import { process } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal className="mb-16 md:mb-20">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            How I Work
          </p>
          <h2 className="font-display uppercase leading-[0.9] text-[12vw] sm:text-[7vw] lg:text-5xl xl:text-6xl">
            My Design Process
          </h2>
        </Reveal>

        {/* Desktop / tablet: horizontal row */}
        <Reveal stagger={0.06} className="hidden md:flex border-t border-l border-border">
          {process.map((step, i) => (
            <RevealItem
              key={step.number}
              className="relative flex-1 border-r border-border p-6 lg:p-8 min-w-0"
            >
              <span className="font-display text-sm text-muted-2">
                {step.number}
              </span>
              <h3 className="mt-5 font-display uppercase text-xl lg:text-2xl tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
              {i < process.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden lg:block absolute top-8 -right-2 text-muted-2 z-10 bg-bg-panel"
                />
              )}
            </RevealItem>
          ))}
        </Reveal>

        {/* Mobile: vertical timeline */}
        <Reveal stagger={0.06} className="md:hidden flex flex-col">
          {process.map((step, i) => (
            <RevealItem key={step.number} className="relative pl-8 pb-10 last:pb-0">
              {i < process.length - 1 && (
                <span className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
              )}
              <span className="absolute left-0 top-1 h-2.5 w-2.5 rounded-full border border-accent" />
              <span className="font-display text-xs text-muted-2">
                {step.number}
              </span>
              <h3 className="mt-2 font-display uppercase text-xl tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed max-w-sm">
                {step.description}
              </p>
              {i < process.length - 1 && (
                <ArrowDown size={14} className="mt-4 text-muted-2" />
              )}
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
