import {
  PenTool,
  Search,
  Workflow,
  Globe,
  Boxes,
  Palette,
} from "lucide-react";
import { capabilities } from "@/lib/data";
import Reveal, { RevealItem } from "@/components/Reveal";

const icons = [PenTool, Search, Workflow, Globe, Boxes, Palette];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10">
          <Reveal className="lg:col-span-4">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What I Do
            </p>
            <h2 className="font-display uppercase leading-[0.9] text-[12vw] sm:text-[7vw] lg:text-5xl xl:text-6xl">
              Core
              <br />
              Capabilities
            </h2>
          </Reveal>

          <Reveal stagger={0.08} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
            {capabilities.map((cap, i) => {
              const Icon = icons[i];
              return (
                <RevealItem
                  key={cap.title}
                  className="border-r border-b border-border bg-bg-elevated hover:bg-bg-elevated-2 transition-colors p-8 md:p-10 flex flex-col gap-5"
                >
                  <Icon size={26} strokeWidth={1.25} className="text-accent" />
                  <div>
                    <h3 className="font-display uppercase text-xl md:text-2xl tracking-wide">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
