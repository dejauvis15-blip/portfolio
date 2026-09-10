import Reveal from "@/components/Reveal";

export default function SectionHeading({
  number,
  title,
  className = "",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={`flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12 ${className}`}>
      <span className="font-display text-lg md:text-xl text-muted-2">
        {number}
      </span>
      <h2 className="font-display uppercase leading-none text-3xl sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
