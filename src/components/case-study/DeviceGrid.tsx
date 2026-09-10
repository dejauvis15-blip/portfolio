import Image from "next/image";
import Reveal, { RevealItem } from "@/components/Reveal";

export type DeviceShot = {
  src: string;
  alt: string;
  label: string;
};

export default function DeviceGrid({
  shots,
  modeLabel,
}: {
  shots: DeviceShot[];
  /** e.g. "Light mode" / "Dark mode" — shown as a small tag above the row */
  modeLabel?: string;
}) {
  return (
    <div>
      {modeLabel && (
        <Reveal>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-2 mb-4">
            {modeLabel}
          </p>
        </Reveal>
      )}
      <Reveal
        stagger={0.06}
        className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-4"
      >
        {shots.map((shot) => (
          <RevealItem key={shot.src} className="flex flex-col">
            <div className="relative w-full aspect-[9/19] border border-border bg-bg-elevated-2 overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-muted-2 text-center">
              {shot.label}
            </p>
          </RevealItem>
        ))}
      </Reveal>
    </div>
  );
}
