import { process, tools, capabilities } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

const cardClasses =
  "relative flex flex-col gap-3 rounded-2xl bg-bg-elevated p-6 md:p-7 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:z-10 hover:scale-[1.06] hover:bg-bg-elevated-2 hover:shadow-2xl hover:shadow-black/40";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal className="mb-16 md:mb-20">
          <h2 className="font-display uppercase leading-[0.9] text-[8vw] sm:text-4xl lg:text-4xl xl:text-5xl">
            My Design Process
          </h2>
        </Reveal>

        <Reveal
          stagger={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {process.map((step) => (
            <RevealItem key={step.number} className={cardClasses}>
              <span className="inline-flex w-fit items-center rounded-full bg-accent/15 px-2.5 py-1 font-display text-xs text-accent">
                {step.number}
              </span>
              <h3 className="font-display uppercase text-xl tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What I Do
            </p>
          </Reveal>
          <Reveal
            stagger={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {capabilities.map((cap) => (
              <RevealItem key={cap.title} className={cardClasses}>
                <h3 className="font-display uppercase text-lg tracking-wide">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {cap.description}
                </p>
              </RevealItem>
            ))}
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Tools
            </p>
          </Reveal>
          <Reveal stagger={0.04} className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <RevealItem key={tool}>
                <span className="inline-block rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-fg md:text-base">
                  {tool}
                </span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
