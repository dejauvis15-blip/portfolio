import type { Metadata } from "next";
import { getProject, projects } from "@/lib/data";
import CaseHero from "@/components/case-study/CaseHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import Callout from "@/components/case-study/Callout";
import ImageFrame from "@/components/case-study/ImageFrame";
import DeviceGrid, { type DeviceShot } from "@/components/case-study/DeviceGrid";
import NextProject from "@/components/case-study/NextProject";
import Reveal, { RevealItem } from "@/components/Reveal";

const project = getProject("discord")!;
const nextProject = projects.find((p) => p.slug !== "discord")!;

export const metadata: Metadata = {
  title: `${project.title} — Jauvis Dozier`,
  description: project.summary,
};

const IMG = "/images/discord";

const notifDevices = ["Global", "Server", "Channel", "Forum"];
const searchDevicesWireframe = ["Recent", "Results", "Empty State", "Filter"];

function notifShots(stage: string, mode?: string): DeviceShot[] {
  return notifDevices.map((label) => {
    const slug = label.toLowerCase();
    const file = mode
      ? `${slug}-notifications-${stage}-${mode}.png`
      : `${slug}-notifications-${stage}.png`;
    return {
      src: `${IMG}/${file}`,
      alt: `${label} notifications ${stage.replace(/-/g, " ")}${mode ? `, ${mode.replace("-", " ")}` : ""}`,
      label,
    };
  });
}

function searchShots(kind: "wireframe" | "screen", mode?: string): DeviceShot[] {
  return searchDevicesWireframe.map((label) => {
    const slug = label.toLowerCase().replace(" ", "-");
    // The source export named the wireframe-stage filter shot "-dropdown-"
    // while every later stage drops that word — match the real filenames.
    const wireframeSlug = label === "Filter" ? "filter-dropdown" : slug;
    const file =
      kind === "wireframe"
        ? `search-${wireframeSlug}-wireframe-screen.png`
        : `search-${slug}-screen-${mode}.png`;
    return {
      src: `${IMG}/${file}`,
      alt: `Search ${label} ${kind === "wireframe" ? "wireframe" : `screen, ${mode?.replace("-", " ")}`}`,
      label,
    };
  });
}

const painPoints = [
  {
    severity: "Highest severity",
    hot: true,
    text: "Forum notification settings are fragmented and unclear. Users can't tell what they'll be notified about.",
  },
  {
    severity: "Highest severity",
    hot: true,
    text: "Mobile search broke after a recent update, with no feedback on why results are missing.",
  },
  {
    severity: "Noted",
    hot: false,
    text: "Features feel hidden: functions exist but require already knowing where to look.",
  },
  {
    severity: "Noted",
    hot: false,
    text: "Accessibility settings don't offer enough granular control.",
  },
];

const forumFeatures = [
  {
    title: "New post notifications",
    tag: null,
    text: "A separate toggle for when someone starts a post, distinct from replies within a post you're already following.",
  },
  {
    title: "Tag-based filtering",
    tag: null,
    text: "Subscribe to notifications for specific tags, like bug-report or help-wanted, rather than the entire forum.",
  },
  {
    title: "Digest mode",
    tag: "Proposed, not existing",
    text: "Batches forum activity into a daily summary instead of real-time pings for every reply. Discord doesn't actually offer this yet. It's my own proposal, backed by the fact that third-party bots already exist just to fill this gap, and people have been requesting it for years.",
  },
];

const notifTakeaways = [
  {
    label: "Visibility of system status",
    text: "the overrides summary on the Global screen surfaces which servers or channels have custom settings, instead of leaving that invisible until you happen to check.",
  },
  {
    label: "Recognition over recall",
    text: "Forum sits as a visible branch off Channel rather than a setting users have to already know exists.",
  },
  {
    label: "User control and freedom",
    text: "per-tag and per-post subscription replaces an all-or-nothing forum toggle.",
  },
];

const searchTakeaways = [
  {
    label: "Visibility of system status",
    text: "a persistent line reporting what's being searched and how many results came back, so a search that returns nothing looks different from a search that's silently broken.",
  },
  {
    label: "Recovery from empty states",
    text: "a specific reason plus a direct action, instead of a dead end.",
  },
];

const notifTasks = [
  {
    title: "Scoped mute",
    text: '"You want to stop getting notified about one specific forum, but keep everything else in that server the same. Show me how you\'d do that." This tells me whether the Channel → Forum branch is discoverable without any prompting.',
  },
  {
    title: "Explain an override",
    text: '"A friend says their notifications for this server look different from yours, even though you\'re in the same server. Find out why." This tells me whether the overrides summary on the Global screen actually gets noticed and understood.',
  },
];

const searchTasks = [
  {
    title: "Recover from zero results",
    text: 'Given a search that intentionally returns nothing, ask: "What just happened? What would you try next?" This is the real test: if people still can\'t tell a broken search from an empty one, my status line and empty-state copy haven\'t done their job.',
  },
  {
    title: "Find the filter dropdown",
    text: '"You want to search only messages from one specific person. Can you narrow your search down to that?" This checks whether the existing sliders icon is discoverable at all, since "hidden features" was a complaint long before I started this redesign.',
  },
];

export default function DiscordCaseStudy() {
  return (
    <>
      <CaseHero project={project} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Scope</p>
              <p className="mt-1.5 text-sm md:text-base">Notification settings navigation</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Platform</p>
              <p className="mt-1.5 text-sm md:text-base">Mobile (iOS)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Deliverables</p>
              <p className="mt-1.5 text-sm md:text-base">Heuristic audit, IA, wireframes, mockups</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* Final solution cover */}
          <Reveal>
            <p className="text-xs uppercase tracking-[0.15em] text-accent mb-3">Final solution</p>
            <h2 className="font-display uppercase text-3xl md:text-4xl">Notifications + Search</h2>
            <p className="mt-3 text-muted max-w-xl">
              Representative final screens from both redesigns, shown in light and dark mode.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-muted mb-5">
                Notification settings <span className="text-muted-2">— Forum controls</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ImageFrame
                  aspect="aspect-[9/16]"
                  src={`${IMG}/final-forum-notification-settings-screen-light-mode.png`}
                  alt="Final forum notification settings screen, light mode"
                />
                <ImageFrame
                  aspect="aspect-[9/16]"
                  src={`${IMG}/final-forum-notification-settings-screen-dark-mode.png`}
                  alt="Final forum notification settings screen, dark mode"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-muted mb-5">
                Search <span className="text-muted-2">— Filter experience</span>
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ImageFrame
                  aspect="aspect-[9/16]"
                  src={`${IMG}/final-search-filter-screen-light-mode.png`}
                  alt="Final search filter screen, light mode"
                />
                <ImageFrame
                  aspect="aspect-[9/16]"
                  src={`${IMG}/final-search-filter-screen-dark-mode.png`}
                  alt="Final search filter screen, dark mode"
                />
              </div>
            </div>
          </div>

          {/* 01 — The problem */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <SectionHeading number="01" title="The Problem" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                I ran a heuristic audit of Discord&rsquo;s mobile app and kept
                hearing the same four complaints from new and experienced
                users alike. Two of them stood out as the most severe: easy
                to reproduce, high impact, and tied to a specific interaction
                rather than just a vague bad feeling.
              </p>
            </Reveal>
          </div>

          <Reveal stagger={0.06} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            {painPoints.map((p) => (
              <RevealItem key={p.text} className="border border-border p-6">
                <span
                  className={`inline-block text-xs uppercase tracking-[0.1em] px-2 py-1 ${
                    p.hot ? "text-accent border border-accent/40" : "text-muted-2 border border-border"
                  }`}
                >
                  {p.severity}
                </span>
                <p className="mt-4 text-sm md:text-base leading-relaxed">{p.text}</p>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 max-w-3xl">
            <p className="text-muted leading-relaxed">
              I&rsquo;m starting with the highest-severity one here:{" "}
              <strong className="text-fg">notification fragmentation</strong>,
              and specifically how it breaks down for forum channels, which
              behave nothing like a regular text channel but get none of the
              special treatment that difference calls for. A second section
              further down covers the search reliability problem.
            </p>
          </Reveal>

          {/* 02 — Research */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="02" title="What the Research Showed" />
            <Reveal delay={0.05} className="max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                To make the gap concrete, I compared Discord&rsquo;s
                notification screens against Slack&rsquo;s, side by side,
                pulling straight from real app screenshots instead of just
                going on assumption.
              </p>
            </Reveal>
            <Reveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              <RevealItem className="border border-border p-8">
                <h3 className="font-display uppercase text-xl">Discord Today</h3>
                <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                  Notification controls are split across three separate
                  menus: global settings, per-server defaults, and
                  per-channel overrides, reached by long-pressing a channel
                  and digging into a submenu. Forum channels inherit whatever
                  the parent channel settings say, with no distinct treatment
                  despite their threaded, tag-based structure.
                </p>
              </RevealItem>
              <RevealItem className="border border-accent/30 p-8">
                <h3 className="font-display uppercase text-xl">Slack, for Comparison</h3>
                <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                  Notification settings are centralized in one screen with
                  clear radio choices (all messages, mentions, or nothing),
                  plus a distinct control for thread notifications separate
                  from general channel activity.
                </p>
              </RevealItem>
            </Reveal>
          </div>

          {/* 03 — Problem stated precisely */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="03" title="The Problem, Stated Precisely" />
            <Reveal delay={0.05} className="max-w-3xl mb-8">
              <p className="text-muted leading-relaxed">
                Vague complaints don&rsquo;t design well, so I turned
                &ldquo;forum notifications suck&rdquo; into something
                specific and evidenced, a statement I could actually design
                against.
              </p>
            </Reveal>
            <Callout>
              Users can&rsquo;t reliably control forum notifications because
              settings are split across global, server, and per-channel
              menus, with no forum-specific option, despite forums behaving
              nothing like a regular channel.
            </Callout>
          </div>

          {/* 04 — Approach */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="04" title="Designing the Fix" />
            <Reveal delay={0.05} className="max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                Instead of patching the existing three menus, I treated
                notification settings as one single drill-down hierarchy:
                Global, then Server, then Channel, with Forum branching off
                Channel as its own distinct step instead of a separate,
                hard-to-find fourth place. A long-press shortcut jumps
                straight into the right level, so I didn&rsquo;t have to
                duplicate controls in a second system.
              </p>
            </Reveal>
            <ImageFrame
              aspect="aspect-[16/9]"
              src={`${IMG}/figjam-flow-diagram-showing-navigation-from-global-through-server-and-channel-settings-branching-to-forum-settings-if-the-channel-is-a-forum-with-a-long-press-shortcut.png`}
              alt="FigJam flow diagram showing navigation from Global through Server and Channel settings, branching to Forum settings"
              caption="The actual FigJam flow used to plan the screens: global settings cascade down, branch to forum-specific controls when relevant, and a long-press shortcut skips straight to the right level."
            />
          </div>

          {/* 05 — What forums need */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="05" title="What Forums Actually Need" />
            <Reveal delay={0.05} className="max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                Forums just generate a different shape of activity than a
                regular channel: parallel threads and tags instead of one
                linear conversation, so I wanted the controls to reflect that
                instead of inheriting generic channel settings.
              </p>
            </Reveal>
            <Reveal stagger={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {forumFeatures.map((f) => (
                <RevealItem key={f.title} className="border border-border p-6 md:p-8">
                  <h4 className="font-medium">
                    {f.title}
                    {f.tag && (
                      <span className="ml-2 inline-block text-[10px] uppercase tracking-[0.1em] text-accent border border-accent/40 px-1.5 py-0.5 align-middle">
                        {f.tag}
                      </span>
                    )}
                  </h4>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{f.text}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* 06 — From structure to screen */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="06" title="From Structure to Screen" />
            <Reveal delay={0.05} className="max-w-2xl mb-14">
              <p className="text-lg text-muted leading-relaxed">
                I built this out in three passes, each one adding more
                fidelity without changing the underlying structure.
              </p>
            </Reveal>

            <div className="space-y-16">
              <div>
                <StageHead n={1} title="Low-Fidelity Wireframes" desc="I started bare, with content and hierarchy only and no visual styling, so I could validate the information architecture before spending any time on polish." />
                <DeviceGrid shots={notifShots("low-fidelity", "wireframe")} />
              </div>

              <div>
                <StageHead n={2} title="Refined Wireframes" desc="Adding a device frame, a status bar, and a proper header made these feel like real mobile UI instead of boxes on a page. I kept it colorless on purpose, to stay focused on structure." />
                <div className="space-y-8">
                  <DeviceGrid shots={notifShots("refined-wireframe", "light-mode")} modeLabel="Light mode" />
                  <DeviceGrid shots={notifShots("refined-wireframe", "dark-mode")} modeLabel="Dark mode" />
                </div>
              </div>

              <div>
                <StageHead n={3} title="Final Mockups" desc="Then came category icons, a bottom nav bar for context, and Discord's actual blurple accent, plus the amber highlight I carried over from the flow diagram, used to flag every row that's new or overridden." />
                <div className="space-y-8">
                  <DeviceGrid shots={notifShots("screen", "light-mode")} modeLabel="Light mode" />
                  <DeviceGrid shots={notifShots("screen", "dark-mode")} modeLabel="Dark mode" />
                </div>
              </div>
            </div>
          </div>

          {/* 07 — Reflection */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <SectionHeading number="07" title="What This Actually Fixes" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Mapping this back against my original heuristic audit, the
                redesign answers the specific violations I set out to fix,
                not just a general sense of clutter.
              </p>
            </Reveal>
            <Reveal stagger={0.06} className="space-y-5 border-t border-border pt-8">
              {notifTakeaways.map((t) => (
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
                Next up: wiring these screens together in Figma into a
                clickable prototype, and usability testing the forum
                notification screen specifically, since digest mode is the
                idea I&rsquo;m least sure about.
              </p>
            </Reveal>
          </div>

          {/* Divider */}
          <Reveal className="mt-28 md:mt-36 pt-10 border-t border-border-strong">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
              Second Problem
            </p>
          </Reveal>

          {/* 08 — Search problem */}
          <div className="mt-10 max-w-3xl">
            <SectionHeading number="08" title="Search You Can't Trust" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                That same audit flagged a second issue at equal severity: a
                recent mobile update broke Discord&rsquo;s in-app search, and
                there&rsquo;s no feedback telling you why. A search might
                come back empty because the query was too narrow, because
                search itself is degraded, or because the content genuinely
                doesn&rsquo;t exist, and right now, all three look exactly
                the same.
              </p>
            </Reveal>
          </div>

          {/* 09 — Search research */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <SectionHeading number="09" title="Starting From What's Actually There" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                My first pass at this problem invented a search UI from
                scratch: content-type filter chips, a structured filter form.
                But comparing it against real screenshots of Discord&rsquo;s
                actual search screen showed I&rsquo;d gotten that wrong:
                Discord already has tabs for content type (Recent, People,
                Media, Pins, Links, Files) and a working filter system, just
                implemented as search-operator syntax (
                <Code>from:</Code> <Code>in:</Code> <Code>has:</Code>) behind
                a small sliders icon. The redesign below keeps every one of
                those existing patterns intact and is surgical about the one
                thing that&rsquo;s actually broken: silence where feedback
                should be.
              </p>
            </Reveal>
          </div>

          {/* 10 — Search problem stated precisely */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="10" title="The Problem, Stated Precisely" />
            <Callout>
              After a recent mobile update, Discord&rsquo;s in-app search
              became unreliable. Unlike comparable apps, which give users
              visible feedback about search scope and progress,
              Discord&rsquo;s search offers no indication of why results are
              missing, incomplete, or slow, leaving no way to tell a broken
              search from a genuinely empty one.
            </Callout>
          </div>

          {/* 11 — Search flow */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="11" title="A Decision, Not a Hierarchy" />
            <Reveal delay={0.05} className="max-w-3xl mb-10">
              <p className="text-lg text-muted leading-relaxed">
                Notifications turned out to be a drill-down tree. Search is a
                completely different shape: a linear task with a branch
                depending on whether results come back, plus an optional
                detour into the filter dropdown that loops back to the same
                spot instead of going deeper into anything.
              </p>
            </Reveal>
            <ImageFrame
              aspect="aspect-[16/9]"
              src={`${IMG}/search-flow-diagram-showing-the-branch-between-results-found-and-empty-state-with-the-filter-dropdown-as-an-optional-detour.png`}
              alt="Search flow diagram showing the branch between results found and empty state"
              caption="Query in, status feedback, then a branch: results or a specific empty-state reason. The filter dropdown loops back rather than advancing."
            />
          </div>

          {/* 12 — Search evolution */}
          <div className="mt-24 md:mt-32">
            <SectionHeading number="12" title="From Baseline to Polished Mockup" />
            <Reveal delay={0.05} className="max-w-2xl mb-14">
              <p className="text-lg text-muted leading-relaxed">
                Only two stages here instead of three, since these
                wireframes started from Discord&rsquo;s real screens, there
                was no separate &ldquo;invented&rdquo; version I needed to
                walk back from.
              </p>
            </Reveal>

            <div className="space-y-16">
              <div>
                <StageHead n={1} title="Wireframes, Grounded in the Real App" desc="I recreated this straight from actual Discord screenshots, with exactly one addition, highlighted in amber: a status line reporting what was searched and how many results came back." />
                <DeviceGrid shots={searchShots("wireframe")} />
              </div>

              <div>
                <StageHead n={2} title="Polished Mockup" desc="I swapped in personalized avatars and real media thumbnails in place of placeholders, and kept light and dark in exact parity, down to matching photos and per-user name-font styling." />
                <div className="space-y-8">
                  <DeviceGrid shots={searchShots("screen", "light-mode")} modeLabel="Light mode" />
                  <DeviceGrid shots={searchShots("screen", "dark-mode")} modeLabel="Dark mode" />
                </div>
              </div>
            </div>
          </div>

          {/* 13 — Search reflection */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <SectionHeading number="13" title="What This Fixes — and Doesn't" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Being honest, this redesign ended up narrower than my first
                draft. It doesn&rsquo;t touch content-type browsing or the
                operator-based filter system, because both already work
                reasonably well. What it does add:
              </p>
            </Reveal>
            <Reveal stagger={0.06} className="space-y-5 border-t border-border pt-8">
              {searchTakeaways.map((t) => (
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
                The bigger lesson here was about my own process: my first
                version of this section came entirely from competitive
                research and reasoning, without ever checking it against the
                real product, and it ended up inventing a solution to a
                problem Discord had already partly solved. Applying the same
                discipline I used for notifications from the start, actually
                checking the real app, caught that mistake before it shipped.
              </p>
            </Reveal>
          </div>

          {/* 14 — Validation plan */}
          <div className="mt-24 md:mt-32 max-w-3xl">
            <SectionHeading number="14" title="How This Would Be Validated" />
            <Reveal delay={0.05}>
              <p className="text-lg text-muted leading-relaxed">
                Everything above is grounded in heuristic evaluation,
                competitive research, and real screenshots of the current
                app, but none of it has actually been tested with real users
                yet. That&rsquo;s the honest gap here, and it&rsquo;s the
                next thing I&rsquo;d do before either redesign ships.
              </p>
            </Reveal>

            <SubHead>Method</SubHead>
            <Reveal>
              <p className="text-muted leading-relaxed">
                I&rsquo;d run a moderated usability test with 5–8
                participants, using a think-aloud protocol against the
                clickable Figma prototypes I built for each flow. A small
                moderated sample catches most usability problems without
                needing a huge panel, and think-aloud gets at why someone
                hesitates, not just where.
              </p>
            </Reveal>

            <SubHead>Tasks: Notifications</SubHead>
            <Reveal stagger={0.06} className="space-y-6">
              {notifTasks.map((t) => (
                <RevealItem key={t.title}>
                  <h4 className="font-medium">{t.title}</h4>
                  <p className="mt-1.5 text-sm md:text-base text-muted leading-relaxed">{t.text}</p>
                </RevealItem>
              ))}
            </Reveal>

            <SubHead>Tasks: Search</SubHead>
            <Reveal stagger={0.06} className="space-y-6">
              {searchTasks.map((t) => (
                <RevealItem key={t.title}>
                  <h4 className="font-medium">{t.title}</h4>
                  <p className="mt-1.5 text-sm md:text-base text-muted leading-relaxed">{t.text}</p>
                </RevealItem>
              ))}
            </Reveal>

            <SubHead>What Would Count as Success</SubHead>
            <Reveal>
              <p className="text-muted leading-relaxed">
                I&rsquo;d look at task completion without moderator help,
                plus a single post-task rating (&ldquo;I understood why I got
                these results,&rdquo; 1–5) for the search empty-state task
                specifically, since that number, more than completion rate,
                is what the whole redesign is trying to move. Anything below
                a 4 average on that question would mean the empty-state copy
                needs another pass before I can call the reliability problem
                actually solved.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-20 pt-8 border-t border-border">
            <p className="text-sm text-muted-2 italic max-w-2xl">
              Part of a broader mobile navigation study across three app
              interfaces. This case study covers just the notification
              settings and search reliability sections for Discord.
            </p>
          </Reveal>
        </div>
      </section>

      <NextProject project={nextProject} />
    </>
  );
}

function StageHead({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <Reveal className="flex items-start gap-4 mb-8">
      <span className="font-display text-lg text-muted-2 shrink-0">
        {String(n).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display uppercase text-xl md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-2xl">{desc}</p>
      </div>
    </Reveal>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-display uppercase text-base tracking-wide mt-10 mb-4 text-fg/90">
      {children}
    </h4>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="inline-block bg-bg-elevated-2 border border-border px-1.5 py-0.5 text-sm rounded-sm mx-0.5">
      {children}
    </code>
  );
}
