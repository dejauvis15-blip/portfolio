import { tools } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

export default function Tools() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Tools &amp; Technologies
          </p>
        </Reveal>

        <Reveal
          stagger={0.05}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-border"
        >
          {tools.map((tool) => (
            <RevealItem
              key={tool}
              className="border-r border-b border-border bg-bg-elevated hover:bg-bg-elevated-2 transition-colors px-6 py-6 md:px-10 md:py-8 min-w-0"
            >
              <span className="font-display uppercase text-xl sm:text-2xl md:text-3xl tracking-wide break-words">
                {tool}
              </span>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
