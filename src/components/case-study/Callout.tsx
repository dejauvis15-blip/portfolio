import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <blockquote className="border-l-2 border-accent pl-6 md:pl-8 py-1 text-xl md:text-2xl leading-snug text-fg/95 max-w-3xl">
        {children}
      </blockquote>
    </Reveal>
  );
}
