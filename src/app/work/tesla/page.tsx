import type { Metadata } from "next";
import Image from "next/image";
import { getProject, projects } from "@/lib/data";
import CaseHero from "@/components/case-study/CaseHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import ImageFrame from "@/components/case-study/ImageFrame";
import NextProject from "@/components/case-study/NextProject";
import Reveal, { RevealItem } from "@/components/Reveal";

const project = getProject("tesla")!;
const nextProject = projects.find((p) => p.slug !== "tesla")!;

export const metadata: Metadata = {
  title: `${project.title} — Jauvis Dozier`,
  description: project.summary,
};

const goals = [
  "Improve visual hierarchy to help users quickly identify important information and actions.",
  "Create a more engaging homepage experience through stronger imagery and a clearer layout.",
  "Simplify navigation to make exploring Tesla vehicles and services more intuitive.",
  'Increase the visibility of key call-to-action buttons such as "Order Now" and "Learn More".',
  "Maintain Tesla's clean and modern brand identity while improving overall usability.",
];

const lineup = [
  { src: "/images/tesla/model-3.jpg", alt: "Tesla Model 3" },
  { src: "/images/tesla/model-x.jpg", alt: "Tesla Model X" },
  { src: "/images/tesla/model-y.jpg", alt: "Tesla Model Y" },
  { src: "/images/tesla/cybertruck.jpg", alt: "Tesla Cybertruck" },
];

const swatches = [
  { name: "Signal Blue", hex: "#3B5EDB" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
];

export default function TeslaCaseStudy() {
  return (
    <>
      <CaseHero project={project} />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* 01 — Overview */}
          <div className="max-w-3xl">
            <SectionHeading number="01" title="Overview" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                The Tesla homepage redesign was a self-directed UX/UI project
                focused on enhancing the user experience of Tesla&rsquo;s
                landing page. The goal was to create a more engaging and
                visually impactful first impression that reflects
                Tesla&rsquo;s innovative brand identity.
              </p>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                During this redesign, I analyzed the existing homepage and
                identified opportunities to improve visual hierarchy,
                navigation, and call-to-action visibility by reconsidering
                content ordering, the layout, and updating key UI components.
                I aimed to make it easier for users to explore the vehicle
                lineup and take the next step in their purchase journey.
              </p>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                This project allowed me to strengthen my skills in
                user-centered design, visual design principles, and interface
                design while creating an interface experience that aligns
                with Tesla&rsquo;s innovative brand.
              </p>
            </Reveal>
          </div>

          {/* 02 — Problem */}
          <div className="max-w-3xl mt-24 md:mt-32">
            <SectionHeading number="02" title="Problem" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                Tesla&rsquo;s existing homepage effectively showcases its
                vehicles and brand identity, but the overall experience felt
                less engaging than it could be. While the site features
                strong, impactful information and imagery, the layout
                sometimes makes it difficult for visitors to quickly
                understand where to look next.
              </p>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Additionally, the navigation and content structure can feel
                overwhelming to first-time users who are unfamiliar with
                Tesla&rsquo;s products. Key information, such as pricing or
                call-to-action buttons, isn&rsquo;t always easy to locate,
                potentially causing users to miss important details or
                abandon the page before exploring further.
              </p>
            </Reveal>
          </div>

          {/* 03 — Goals */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="03" title="Goals" />
            <Reveal stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border max-w-4xl">
              {goals.map((goal, i) => (
                <RevealItem
                  key={goal}
                  className="border-r border-b border-border p-6 md:p-8"
                >
                  <span className="font-display text-sm text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm md:text-base text-fg/90 leading-relaxed">
                    {goal}
                  </p>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — Vehicle lineup: full-bleed imagery */}
      <section className="py-4">
        <Reveal>
          <p className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 text-xs uppercase tracking-[0.15em] text-muted-2 mb-4">
            Brand photography referenced during the redesign
          </p>
        </Reveal>
        <Reveal stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4">
          {lineup.map((v) => (
            <RevealItem key={v.src} className="relative aspect-[3/4]">
              <Image
                src={v.src}
                alt={v.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* 05 — Typography & Color */}
          <div className="mt-0">
            <SectionHeading number="04" title="Typography &amp; Color" />
            <Reveal delay={0.05} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
              <div>
                <p className="font-display text-8xl leading-none">Aa</p>
                <p className="mt-4 text-sm uppercase tracking-[0.1em] text-muted">
                  Inter
                </p>
                <p className="mt-4 text-muted leading-relaxed max-w-sm">
                  Tesla&rsquo;s redesign uses a clean and modern type system
                  to reinforce the brand&rsquo;s innovative and premium
                  identity while maintaining readability across all devices.
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-center">
                {swatches.map((s) => (
                  <div key={s.hex} className="flex items-center gap-4">
                    <span
                      className="h-14 w-14 border border-border-strong shrink-0"
                      style={{ backgroundColor: s.hex }}
                    />
                    <div>
                      <p className="text-sm">{s.name}</p>
                      <p className="text-xs text-muted-2 uppercase">{s.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 06 — Final design */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="05" title="Final Design" />
            <Reveal delay={0.05} className="max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                The finished redesign, from the full homepage layout down to
                individual sections and the vehicle mega-menu.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Full-page scroll capture, shown full-bleed */}
        <ImageFrame
          aspect="aspect-[1044/3200]"
          src="/images/tesla/full-homepage.jpg"
          alt="Full Tesla homepage redesign, scrolling from the hero through Cybertruck, Model Y, Model 3, and Model S sections"
        />

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ImageFrame
              rounded
              aspect="aspect-[1417/1062]"
              src="/images/tesla/street-poster.jpg"
              alt="Tesla homepage redesign presented as a street poster mockup"
            />
            <ImageFrame
              rounded
              aspect="aspect-[1728/1040]"
              src="/images/tesla/cybertruck-band.jpg"
              alt="Cybertruck section of the Tesla homepage redesign"
            />
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <ImageFrame
              rounded
              aspect="aspect-[867/650]"
              src="/images/tesla/final-desktop.jpg"
              alt="Tesla Model S page shown on a laptop mockup"
            />
            <ImageFrame
              rounded
              aspect="aspect-[730/458]"
              src="/images/tesla/final-tablet.jpg"
              alt="Tesla Model 3 page shown on a tablet mockup held in hand"
              delay={0.05}
            />
            <ImageFrame
              rounded
              aspect="aspect-[604/453]"
              src="/images/tesla/final-laptop.jpg"
              alt="Tesla vehicle mega-menu navigation shown on a laptop mockup"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      <NextProject project={nextProject} />
    </>
  );
}
