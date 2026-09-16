import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Undo2, RotateCcw, TriangleAlert } from "lucide-react";
import { getProject, getNextProject } from "@/lib/data";
import CaseHero from "@/components/case-study/CaseHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import Callout from "@/components/case-study/Callout";
import ImageFrame from "@/components/case-study/ImageFrame";
import NextProject from "@/components/case-study/NextProject";
import Reveal, { RevealItem } from "@/components/Reveal";

const project = getProject("netflix")!;
const nextProject = getNextProject("netflix");

export const metadata: Metadata = {
  title: `${project.title} · Jauvis Dozier`,
  description: project.summary,
};

const IMG = "/images/netflix";

const WIREFRAME_URL =
  "https://www.figma.com/design/uxMQOWiWWpK2qAyY5xVA7n/Netflix-Homepage-Redesign-%E2%80%94-Wireframe?node-id=0-1";
const FLOW_URL =
  "https://www.figma.com/board/OUwXpiZ0cOgS4gNSF6VPZa/Row-Customization-User-Flow--Reorder---Pin---Hide-";

const quickLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Row Level Control" },
  { href: "#prototype", label: "Prototype" },
];

const problems = [
  {
    title: "Clutter & Information Density",
    body: "There's a well known idea in UX research called choice overload: give people more visible options, and they tend to decide slower, not better. Netflix's row based system was built partly as a guard against exactly that. The 2025 redesign's bigger cards meant fewer titles fit on screen at once, so the same catalog now takes more scrolling and more effort to parse. Netflix's own year long beta reportedly found no real engagement lift from the change, even though people said in surveys that they preferred it.",
    source: "Laws of UX, Choice Overload; Nielsen Norman Group",
  },
  {
    title: "Endless Horizontal Scrolling",
    body: "Nielsen Norman Group's guidance on horizontal scrolling is blunt: it's harder to scan than vertical scrolling, and it's tougher on anyone with limited motor precision or spatial reasoning. Bidirectional scrolling makes sense for a TV first, remote control interface, but the 2025 redesign made things worse by removing two features that used to help people cut through the row stack, the New & Popular hub and the standalone Categories menu, pushing genre browsing behind search instead.",
    source: "Nielsen Norman Group, Scrolling and Scrollbars",
  },
  {
    title: "No Reorder, Pin, or Hide",
    body: "“User control and freedom” is one of the oldest usability heuristics around, and it's exactly what's missing here. Netflix still has no native way to reorder, pin, or hide a row, and it quietly removed the “Not Interested” button that used to let people suppress recommendations they didn't want (a gap third party browser extensions now exist just to patch). Row and home screen customization is already the norm on Apple TV, Google TV, YouTube TV, and Disney+'s 2026 redesign.",
    source: "Apple Support; TechRadar, Disney+'s 2026 redesign",
  },
];

const guardrails = [
  {
    icon: TriangleAlert,
    title: "A minimum of three rows",
    body: "Once someone's down to three visible rows, the remaining hide toggles disable themselves with an inline explanation, instead of silently failing or letting the page go empty.",
  },
  {
    icon: Undo2,
    title: "An undo toast",
    body: "Hiding a row surfaces an immediate, dismissible confirmation with a one tap Undo, so the action never reads as silently permanent.",
  },
  {
    icon: RotateCcw,
    title: "A Hidden Rows list",
    body: "Once the toast disappears, the hidden row doesn't vanish without a trace. It moves into its own labeled section inside the same panel, with a Restore button, so undoing an earlier decision never takes guesswork.",
  },
];

const takeaways = [
  {
    label: "Recognition over recall",
    text: "a persistent “Customize Rows” entry point sits above the row stack at all times, instead of being a feature buried in settings that people have to already know exists.",
  },
  {
    label: "User control and freedom",
    text: "every row, not just a special “customizable” subset, carries the same reorder, pin, and hide controls, closing the exact gap third party extensions exist to patch.",
  },
  {
    label: "Error prevention over error messages",
    text: "the rule that keeps at least three rows visible disables the hide toggle before someone can empty their own homepage, rather than warning them after the fact.",
  },
  {
    label: "Visibility of system status",
    text: "the undo toast and Hidden Rows list mean a hide action is never silently permanent, and recovering from it never takes guesswork.",
  },
];

const sources = [
  "Laws of UX, Choice Overload",
  "Nielsen Norman Group, “More Choices, More Trouble”",
  "Nielsen Norman Group, Scrolling and Scrollbars",
  "CreateBytes, Netflix Design: A Deep Dive into UX Strategy",
  "Netflix Tudum, How to Use Netflix's New Homepage's Features",
  "TechRadar, coverage of the 2025 Netflix UI redesign backlash",
  "Yahoo/AP, coverage of Netflix's engagement research on the redesign",
  "UX Planet, Understanding Bidirectional Scrolling in Streaming Apps for TV",
  "TheStreamable, user reactions to Netflix's new interface",
  "What's on Netflix, reporting on removed New & Popular and Categories features",
  "Trim (gettrim.cc), on the removed “Not Interested” button",
  "UNILAD Tech, on Netflix's hidden genre browsing",
  "Apple Support, customizing the Apple TV home screen",
  "TechRadar, Disney+'s 2026 personalization focused redesign",
];

export default function NetflixCaseStudy() {
  return (
    <>
      <CaseHero project={project} align="center" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Scope</p>
              <p className="mt-1.5 text-sm md:text-base">Homepage row browsing &amp; customization</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Platform</p>
              <p className="mt-1.5 text-sm md:text-base">Desktop web (1728px wide, MacBook Pro 16&Prime;)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Deliverables</p>
              <p className="mt-1.5 text-sm md:text-base">Research synthesis, wireframes, mockups, prototype</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowRight size={16} />
                {link.label}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* 01: Overview */}
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading number="01" title="Overview" className="justify-center" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                Netflix&rsquo;s homepage has always leaned on a simple idea:
                break a massive catalog into small, curated rows so no single
                screen feels overwhelming. That structure worked well for
                years. Then Netflix&rsquo;s own May 2025 &ldquo;elevated&rdquo;
                redesign came along, enlarging title cards and packing more
                information onto every tile, and undid a lot of that
                discipline. Real feedback in the months after launch was
                blunt: the page felt more cluttered, scrolling took longer,
                and nothing on the page let people fix it themselves.
              </p>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                I treated that backlash as a design brief. It comes down to
                three questions, grounded in existing usability research and
                in what Netflix&rsquo;s own users were actually saying. How do
                you reduce visual clutter without shrinking the catalog? How
                do you shorten the path to something worth watching? And how
                do you give people real control over their own homepage, the
                way Apple TV, Google TV, and YouTube TV already do?
              </p>
            </Reveal>
          </div>

          {/* 02: The Problem */}
          <div id="problem" className="mt-24 md:mt-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="02" title="The Problem" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  Three issues compound each other here, and each one is
                  backed by existing usability research, not just a hunch.
                </p>
              </Reveal>
            </div>
            <Reveal
              stagger={0.08}
              className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {problems.map((p) => (
                <RevealItem
                  key={p.title}
                  className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6 md:p-7 flex flex-col"
                >
                  <h3 className="font-display uppercase text-lg">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{p.body}</p>
                  <p className="mt-4 text-xs text-muted-2 italic">{p.source}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* 03: Problem, stated precisely */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="03" title="The Problem, Stated Precisely" className="justify-center" />
            <div className="mx-auto max-w-3xl flex justify-center">
              <Callout>
                Netflix&rsquo;s 2025 redesign reduced how much of the catalog
                fits on screen, which increased how much scrolling is needed
                to reach anything relevant. With no way to reorder, pin, or
                hide a row, people have no way to shortcut that scroll or make
                the homepage their own.
              </Callout>
            </div>
          </div>

          {/* 04: Design process */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="04" title="Design Process" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-2xl mb-8">
              <p className="text-lg text-muted leading-relaxed">
                The redesign moved through three fidelity stages, each one
                building on lessons from the last.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mb-14 flex justify-center">
              <a
                href={WIREFRAME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
              >
                View wireframes in Figma
                <ExternalLink size={14} />
              </a>
            </Reveal>

            <div className="space-y-16">
              <div>
                <StageHead
                  n={1}
                  title="Wireframe"
                  desc="A simple general layout established the core structure: a hero, a row stack, and a colored status dot in each row header marking where reorder, pin, and hide controls would eventually live. This stage was really just about proving the layout could hold the new controls without needing a whole new information architecture."
                />
                <ImageFrame
                  rounded
                  aspect="aspect-[1440/1601]"
                  src={`${IMG}/wireframe-general-layout.png`}
                  alt="Homepage general layout wireframe, showing a placeholder hero and a generic row stack with a status dot marking where row controls will live"
                  className="max-w-2xl mx-auto text-center"
                />
              </div>

              <div>
                <StageHead
                  n={2}
                  title="Low Fidelity"
                  desc="This pass filled in the hero with real content shape, metadata, and a mute control, plus the Customize Rows entry point above the row stack, while every row stayed a plain gray placeholder. It confirmed the layout could carry real content before I spent any time on artwork or color."
                />
                <ImageFrame
                  rounded
                  aspect="aspect-[1440/1429]"
                  src={`${IMG}/low-fidelity-homepage.png`}
                  alt="Low fidelity homepage pass with a working hero (title, metadata, Play and More Info buttons, mute control) and a Customize Rows entry point above the still placeholder row stack"
                  className="max-w-2xl mx-auto text-center"
                />
              </div>

              <div>
                <StageHead
                  n={3}
                  title="Polished"
                  desc="While comparing how other platforms like Apple TV present their homescreens, I noticed calmer, more contained layouts tend to feel less overwhelming than one giant banner. That research pointed me toward my own solution: a smaller inset hero card with rounded corners and real depth instead of a flat banner stretching edge to edge. Every row now uses the same consistent rounded title cards at a 14 pixel radius, and a unified badge system (New Season, Recently Added, Leaving Soon) uses the same wide red band everywhere it shows up. The hero also carries a short, muted video loop, echoing Netflix's own hover preview pattern, sitting behind the title, genre line, and synopsis on a gradient dark enough to stay legible no matter what's playing underneath."
                />
                <ImageFrame
                  rounded
                  aspect="aspect-[1728/1922]"
                  src={`${IMG}/polished-homepage.png`}
                  alt="Polished Netflix homepage redesign with an inset hero card, rounded title cards, and a unified badge system"
                  priority
                  className="mx-auto text-center"
                />
                <Reveal delay={0.1} className="mt-8 flex justify-center">
                  <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl text-center">
                    Every screen was designed at 1728 pixels wide, the native
                    logical resolution of a MacBook Pro 16&Prime;, so the
                    deliverable reads as a real screen on an actual device
                    rather than an arbitrary canvas size.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* 05: Core solution */}
          <div id="solution" className="mt-24 md:mt-32 scroll-mt-24 max-w-3xl mx-auto text-center">
            <SectionHeading number="05" title="The Core Solution: Row Level Control" className="justify-center" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                This is the heart of the whole project, the one feature every
                other decision supports. Every row, not just a special
                &ldquo;customizable&rdquo; subset, carries the same three
                controls: a drag handle to reorder, a pin toggle to promote a
                favorite to the top, and a hide toggle to remove it from the
                homepage entirely. A persistent &ldquo;Customize Rows&rdquo;
                entry point sits above the row stack at all times, so the
                feature is easy to find without hunting through settings.
                Reorder, pin, and hide controls live right in the row header
                itself, not a separate mode you have to switch into, as shown
                on the Continue Watching row of the polished homepage above.
              </p>
            </Reveal>
          </div>

          {/* 06: Customize Rows panel */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="06" title="The Customize Rows Panel" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                Opening the panel surfaces every row with its controls in one
                place. Continue Watching shows up pinned, with its badge
                visible, and the remaining rows can be reordered or hidden
                right from that same list. The panel also carries the
                guardrails below it: a note explaining the rule that keeps at
                least three rows visible, and a Hidden Rows section for
                anything already tucked away.
              </p>
            </Reveal>
            <ImageFrame
              rounded
              aspect="aspect-[1728/1922]"
              src={`${IMG}/customize-rows-open.png`}
              alt="Customize Rows panel open over the homepage, showing Continue Watching pinned, two reorderable rows, a guardrail note about keeping at least three rows visible, and a Hidden Rows section listing Family TV Favorites"
              className="max-w-2xl mx-auto text-center"
            />
          </div>

          {/* 07: Guardrails */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="07" title="Guardrails, Undo, and Recovery" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                Three safeguards keep this feature from letting someone
                accidentally empty their own homepage, a failure mode that&rsquo;s
                easy to miss when a feature only gets tested on its happy
                path.
              </p>
            </Reveal>
            <Reveal
              stagger={0.08}
              className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left"
            >
              {guardrails.map((g) => (
                <RevealItem
                  key={g.title}
                  className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6 md:p-7"
                >
                  <g.icon size={20} className="text-accent" />
                  <h3 className="mt-4 font-medium">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{g.body}</p>
                </RevealItem>
              ))}
            </Reveal>
            <ImageFrame
              rounded
              aspect="aspect-[1728/1922]"
              src={`${IMG}/customize-rows-restored.png`}
              alt="Customize Rows panel after tapping Restore: Family TV Favorites is back in the list with its toggle on, alongside the other three visible rows"
              caption="Restoring a row from the Hidden Rows list lands on the same result as hitting Undo before the toast disappears."
              className="max-w-2xl mx-auto text-center"
            />
          </div>

          {/* 08: Proving the loop */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="08" title="Proving the Loop: Before and After" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                To show that the feature actually does something, rather than
                just presenting controls that look functional, the redesign
                includes a resolved &ldquo;after&rdquo; state. Continue
                Watching carries a visible Pinned badge, the row someone hid
                is fully gone from the stack, and a new row, &ldquo;Popular on
                Netflix,&rdquo; backfills the space instead of leaving a
                shortened, mostly empty page. That backfill detail matters:
                hiding a row should make the homepage feel more relevant, not
                just smaller.
              </p>
            </Reveal>
            <ImageFrame
              rounded
              aspect="aspect-[1728/1999]"
              src={`${IMG}/after-customize-rows.png`}
              alt="Homepage after using Customize Rows: Continue Watching shows a Pinned badge, a hidden row is fully absent, and a new Popular on Netflix row backfills the space"
              className="max-w-2xl mx-auto text-center"
            />
          </div>

          {/* 09: Browse by genre */}
          <div className="mt-24 md:mt-32 text-center">
            <SectionHeading number="09" title="A Second Escape Hatch: Browse by Genre" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                My research synthesis specifically called for a real way to
                browse everything, or a grid view, as part of the fix for
                endless scrolling, and restoring New &amp; Popular in the
                navigation only solves part of that. A dedicated genre
                browsing screen gives people a second way out of the row
                stack entirely: a horizontal row of genre pills paired with a
                true wrapping grid, structurally distinct from every other
                screen in the product, so scrolling through rows becomes a
                choice instead of the only path to a decision.
              </p>
            </Reveal>
            <ImageFrame
              rounded
              aspect="aspect-[1728/1529]"
              src={`${IMG}/browse-by-genre.png`}
              alt="Browse by Genre screen with a horizontal row of genre pills and a wrapping title grid"
              className="max-w-2xl mx-auto text-center"
            />
          </div>

          {/* 10: Prototype */}
          <div id="prototype" className="mt-24 md:mt-32 scroll-mt-24 text-center">
            <SectionHeading number="10" title="Prototype" className="justify-center" />
            <Reveal delay={0.05} className="mx-auto max-w-3xl mb-8">
              <p className="text-lg text-muted leading-relaxed">
                The full flow is wired as an interactive Figma prototype, not
                just a set of static comps. From the homepage, Customize Rows
                opens the panel with a Smart Animate transition. Hitting Done
                resolves everything into the state you&rsquo;d see afterward,
                and that same screen&rsquo;s own Customize Rows control
                reopens the panel, closing the loop. A second branch covers
                the safety net path end to end: hiding a row triggers the
                undo toast, which either reverses the action or settles into
                the Hidden Rows list after a timeout, and Restore from that
                list arrives at the same restored state Undo does. Both
                recovery paths actually connect to each other, they aren&rsquo;t
                just illustrated once and left dangling.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mb-14">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-xl">
                <video
                  src={`/videos/netflix/prototype-demo.mp4`}
                  poster={`${IMG}/customize-rows-open.png`}
                  controls
                  playsInline
                  preload="metadata"
                  className="block w-full h-auto"
                />
              </div>
              <p className="mt-4 text-sm text-muted-2 text-center max-w-sm mx-auto">
                A real walkthrough of the prototype: opening Customize Rows,
                restoring a hidden row, then jumping into Browse by Genre.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mb-10 flex justify-center">
              <a
                href={FLOW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
              >
                View the full user flow in FigJam
                <ExternalLink size={14} />
              </a>
            </Reveal>

            <ImageFrame
              rounded
              aspect="aspect-[7960/2732]"
              src={`${IMG}/user-flow-diagram.png`}
              alt="FigJam flow diagram for the row customization system: browsing the homepage into row edit mode, branching into reorder, pin, and hide, with the hide branch running through the guardrail that keeps at least three rows visible, the undo toast, and the Hidden Rows list, both recovery paths converging on the same restored state"
              caption="Mapped in FigJam before any screen was built: three branches off row edit mode, and both recovery paths (Undo, Restore) converging on the same result."
              className="max-w-5xl mx-auto text-center"
            />
          </div>

          {/* 11: Reflection */}
          <div className="mt-24 md:mt-32 max-w-3xl mx-auto text-center">
            <SectionHeading number="11" title="Reflection" className="justify-center" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed mb-8">
                The three problems in my research doc ended up compounding
                each other in a single causal chain. Bigger cards reduced how
                much fit on screen, which increased how much scrolling was
                needed to reach anything relevant, and with no way to prune or
                reorder rows, people had no way to shortcut that scroll.
                Framed that way, this wasn&rsquo;t three unrelated features to
                design. It was one coherent fix: reduce how much someone has
                to look at once, shorten the path to relevant content, and
                hand people control at the row level to make their own
                homepage smaller and more relevant over time.
              </p>
            </Reveal>
            <Reveal stagger={0.06} className="space-y-5 border-t border-border pt-8 text-left">
              {takeaways.map((t) => (
                <RevealItem key={t.label} className="flex gap-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="text-muted leading-relaxed">
                    <strong className="text-fg">{t.label}</strong>: {t.text}
                  </p>
                </RevealItem>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-muted leading-relaxed">
                Given more time, the next thing worth exploring is a mobile
                version of the same system. Row control and undo patterns
                behave differently under touch than under a mouse, and
                Netflix&rsquo;s own real usage skews heavily mobile, so
                building and testing a touch based pass would really put
                these interactions, dragging to reorder especially, to the
                test outside a desktop pointer model.
              </p>
            </Reveal>
          </div>

          {/* Sources */}
          <Reveal delay={0.1} className="mt-20 pt-8 border-t border-border text-center">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-2 mb-4">
              Sources &amp; Research
            </p>
            <ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 max-w-4xl text-left">
              {sources.map((s) => (
                <li key={s} className="text-sm text-muted-2 italic leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <NextProject project={nextProject} />
    </>
  );
}

function StageHead({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <Reveal className="flex flex-col items-center text-center gap-1 mb-8 mx-auto max-w-2xl">
      <span className="font-display text-lg text-muted-2">
        {String(n).padStart(2, "0")}
      </span>
      <h3 className="font-display uppercase text-xl md:text-2xl">{title}</h3>
      <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">{desc}</p>
    </Reveal>
  );
}
