import { MapPin, Briefcase, FileText } from "lucide-react";
import { heroPills } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { Balloon } from "@/components/icons";

const pillIcons = { pin: MapPin, briefcase: Briefcase, file: FileText };

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28">
      <div className="mx-auto max-w-3xl px-6 flex flex-col items-center text-center">
        <Reveal delay={0.05}>
          <h1 className="font-display normal-case leading-[1.2] tracking-tight text-balance text-[7vw] sm:text-4xl md:text-5xl">
            <span className="font-light text-muted">
              Jauvis&nbsp;
              <Balloon />s&nbsp;a&nbsp;
            </span>
            <span className="font-black text-fg">product designer</span>
            <span className="font-light text-muted">
              &nbsp;honing his craft.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-4 max-w-md text-sm md:text-base text-muted-2">
            One typeface, two weights — thin for what&apos;s incidental, black
            for what isn&apos;t.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {heroPills.map((pill) => {
              const Icon = pillIcons[pill.icon];
              const content = (
                <>
                  <Icon size={14} className="text-muted-2" />
                  {pill.label}
                </>
              );
              const classes =
                "inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-[13px] font-light text-muted transition-colors hover:border-accent hover:text-fg";
              return "href" in pill && pill.href ? (
                <a
                  key={pill.label}
                  href={pill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {content}
                </a>
              ) : (
                <span key={pill.label} className={classes}>
                  {content}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
