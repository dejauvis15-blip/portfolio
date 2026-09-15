import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ImageFrame({
  src,
  alt,
  caption,
  aspect = "aspect-[16/9]",
  delay = 0,
  priority = false,
  rounded = false,
  card = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  delay?: number;
  priority?: boolean;
  /** Softer, fully-rounded corners instead of the default square frame. */
  rounded?: boolean;
  /** Sit the image inset on a padded card, like Clayton's case studies,
   * instead of filling the frame edge-to-edge. */
  card?: boolean;
  /** Extra classes on the outer wrapper — e.g. a grid col-span. */
  className?: string;
}) {
  const radius = rounded || card ? "rounded-xl" : "";

  return (
    <Reveal delay={delay} className={className}>
      <div
        className={
          card
            ? `${radius} bg-bg-elevated border border-border p-6 md:p-10`
            : ""
        }
      >
        <div
          className={`relative w-full ${aspect} ${radius} ${card ? "" : "border border-border bg-bg-elevated"} overflow-hidden`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-sm text-muted-2 max-w-2xl">{caption}</p>
      )}
    </Reveal>
  );
}
