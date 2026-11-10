import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProject, getNextProject } from "@/lib/data";
import CaseHero from "@/components/case-study/CaseHero";
import SectionHeading from "@/components/case-study/SectionHeading";
import Callout from "@/components/case-study/Callout";
import ImageFrame from "@/components/case-study/ImageFrame";
import NextProject from "@/components/case-study/NextProject";
import Reveal, { RevealItem } from "@/components/Reveal";

const project = getProject("ole-smoky")!;
const nextProject = getNextProject("ole-smoky");

export const metadata: Metadata = {
  title: `${project.title} · Jauvis Dozier`,
  description: project.summary,
};

const IMG = "/images/ole-smoky";

const quickLinks = [
  { href: "#features", label: "Key Features" },
  { href: "#research", label: "Research" },
  { href: "#process", label: "Design Process" },
];

const stats = [
  { value: "21", label: "category pills in one flat row, mixing product types, audiences, and occasions" },
  { value: "362", label: "products on one page at the time of the audit, with sort as the only real tool" },
  { value: "8×", label: "the same hat listed once per color; keychains appeared 31 times" },
  { value: "4", label: "things on a product page: photo, name, price, Add to Cart" },
];

const goals = [
  { title: "Discover", body: "Give merch visibility on the main site without taking the spotlight from spirits." },
  { title: "Browse", body: "Organize products so shoppers can find the right category in one or two taps." },
  { title: "Decide", body: "Give shoppers the details, options, and trust signals to buy with confidence." },
  { title: "Feel like Ole Smoky", body: "Make shopping feel like visiting the Holler: rustic, warm, and full of story." },
];

const research = [
  { brand: "MasterCraft", finding: "A separate apparel store with lifestyle photos per color and a seasonal story up front.", used: "Lifestyle-first landing page with a seasonal row" },
  { brand: "Gymshark", finding: "A slim side drawer with big photo tiles, “Back in Stock” as a menu item, and combined Hoodies & Sweatshirts.", used: "Merchandise drawer with swappable photo tiles" },
  { brand: "Dr. Martens", finding: "“Styled by our community”: customer photos that link straight to products.", used: "“Styled by the Holler” shoppable photo section" },
  { brand: "lululemon", finding: "Big moving banners, varied shapes, and reviews with a fit scale and brand replies.", used: "Parallax banners and reviews with a fit scale" },
  { brand: "Baymard Institute", finding: "Shoppers need both alternatives and add-ons; most sites only show alternatives.", used: "“Complete the Look” add-ons on product pages" },
];

const feedback = [
  { quote: "Remove the in-stock and out-of-stock filters.", decision: "Removed everywhere. Sold-out sizes are handled on the product page instead." },
  { quote: "A Notify Me feature would serve us better.", decision: "Added a back-in-stock email signup tied to sold-out sizes and colors." },
  { quote: "Consider a Back In Stock category.", decision: "Added a Featured page, a menu item, and a homepage and landing band." },
  { quote: "We may consolidate Crewnecks and Hoodies.", decision: "Built both options; the client chose one combined category." },
  { quote: "Where would lifestyle images live?", decision: "Planned photo spots on every page, later matched to a photo shoot." },
  { quote: "Integrate social, like Dr. Martens.", decision: "Designed “Styled by the Holler,” a shoppable customer photo section." },
];

const process = [
  { title: "Audit", body: "Mapped the live menu, products, and pages in FigJam." },
  { title: "Restructure", body: "Rebuilt the menu into four groups; advisor review." },
  { title: "Wireframe", body: "Low-fi FigJam frames, then gray wireframes in Figma." },
  { title: "Real data", body: "Filled pages with real products and combined variants." },
  { title: "Style", body: "Rustic Ole Smoky palette and type; a generic version too." },
  { title: "Feedback", body: "Client rounds: stock filters, Back In Stock, reviews, lifestyle photos." },
  { title: "Expand", body: "Navigation drawer, storytelling landing page, homepage." },
  { title: "Ship", body: "Quick checkout and the full mobile journey." },
];

type Solution = {
  id?: string;
  title: string;
  tagline: string;
  wide?: boolean;
  points: { label: string; text: string }[];
  image: { src: string; alt: string; aspect: string };
};

const solutions: Solution[] = [
  {
    title: "Homepage: merch without losing the spirits",
    tagline: "Puts merch on the homepage while spirits stay the star.",
    points: [
      { label: "Spirits stay the star", text: "A tall moonshine hero, with a merch drop as one of its rotating slides." },
      { label: "Flavor-to-merch pairings", text: "Love Apple Pie? There is an Apple Pie candle. Merch also reaches fans who cannot buy spirits online." },
      { label: "One clear merch moment", text: "“Take the Holler Home” links into the shop, plus distilleries, a recipe with its glass, and real footer details." },
      { label: "Varied shapes", text: "Parallax banners, squares, circles, and staggered cards keep the page from feeling like a grid." },
    ],
    image: { src: `${IMG}/sol-homepage.jpg`, alt: "Redesigned Ole Smoky homepage on desktop and mobile, with a spirits hero, flavor rows, and a Take the Holler Home merch band", aspect: "aspect-[1624/1646]" },
  },
  {
    title: "A menu that gets out of the way",
    tagline: "A slim drawer that takes shoppers to any category in one or two taps.",
    points: [
      { label: "Hover to browse, click to explore", text: "Hovering Merchandise opens a slim side drawer; clicking goes to the landing page." },
      { label: "No dead zones", text: "Tabs moved left so the Merchandise tab sits right above the drawer." },
      { label: "One level at a time", text: "Rows with arrows drill in; Sale is red; Explore the Holler holds the storytelling pages." },
      { label: "Swappable photo tiles", text: "Two big promos the marketing team can change anytime." },
    ],
    image: { src: `${IMG}/sol-menu.jpg`, alt: "Merchandise side drawer open over the homepage, listing Featured, Men's, Women's, Drinkware & Home, Gifts & Accessories, Shop by Occasion, Sale, and Explore the Holler, with two photo promo tiles", aspect: "aspect-[2064/1646]" },
  },
  {
    title: "A landing page that tells a story",
    tagline: "Lifestyle first, grid second, with three ways in: category, occasion, or collection.",
    points: [
      { label: "Lifestyle first, grid second", text: "Hero, category tiles, a collaboration story, shop by occasion, a seasonal row, brand story, and customer photos." },
      { label: "Three ways in", text: "By category, by occasion, or by collection, depending on how someone shops." },
      { label: "Every section leads deeper", text: "Each block links into a category page, so nobody hits a dead end." },
    ],
    image: { src: `${IMG}/sol-landing.jpg`, alt: "Merchandise landing page with a Mountain Made, Holler Approved hero, Shop by Category tiles, an Ole Smoky x Tennessee Vols story, occasion circles, a seasonal row, and Styled by the Holler", aspect: "aspect-[1728/1646]" },
  },
  {
    title: "Category pages that help shoppers narrow down",
    tagline: "Filters built for each product type, and one card per product instead of one per color.",
    points: [
      { label: "Filters built per category", text: "Size for apparel, Scent and Candle Style for candles, Capacity for drinkware, Heat Level for pantry." },
      { label: "Variants combined", text: "One card per product with color swatches: keychains went from 31 listings to 14, candles from 24 to 4." },
      { label: "Easy to move around", text: "A parallax hero, round shortcuts to sibling pages, and a breadcrumb back up." },
      { label: "40 pages, real products", text: "Every menu link has a page, built with real names and prices." },
    ],
    image: { src: `${IMG}/sol-category.jpg`, alt: "Men's T-shirts and Candles category pages side by side, each with a photo hero, round shortcuts, category-specific filters, and a product grid", aspect: "aspect-[1808/1340]" },
  },
  {
    title: "Product pages that build confidence",
    tagline: "Everything needed to decide, plus add-ons that grow the order.",
    points: [
      { label: "Everything needed to decide", text: "Named color and size picks, a size guide, details, and reviews with a fit scale and brand replies." },
      { label: "Notify me", text: "Sold-out sizes link to a back-in-stock email signup, from client feedback." },
      { label: "Add-ons, not just alternatives", text: "Complete the Look adds matching items with one button and a free-shipping progress bar." },
      { label: "Lifestyle in context", text: "“See It in the Wild” shows the product from the photo shoot." },
    ],
    image: { src: `${IMG}/sol-product.jpg`, alt: "Moonshine Cocktails Tee product page with color and size pickers, a back-in-stock signup, See It in the Wild photo, reviews with a fit scale, and Complete the Look", aspect: "aspect-[1100/2058]" },
  },
  {
    id: "checkout",
    title: "Quick checkout: buy in seconds",
    tagline: "Two fast paths from client feedback: Quick Add from a category page, and Buy It Now with express wallets.",
    wide: true,
    points: [],
    image: { src: `${IMG}/quick-checkout-flow.jpg`, alt: "Five-step quick checkout flow: Quick Add on a category card, the Quick Add panel, Buy It Now with express pay on a product page, a one-screen checkout, and an order confirmation with an add-on", aspect: "aspect-[3360/1056]" },
  },
  {
    id: "mobile",
    title: "The full journey on mobile",
    tagline: "Eleven screens in shopping order. Rows become swipes, menus and filters open as sheets, and a sticky bar keeps Add to Cart in reach.",
    wide: true,
    points: [],
    image: { src: `${IMG}/mobile-journey.jpg`, alt: "Eleven mobile screens in order: home, menu, merch menu, Men's, landing, category, filters, product, Quick Add, checkout, and confirmation", aspect: "aspect-[5040/993]" },
  },
];

const metrics = [
  { title: "More merch discovery", body: "Clicks into merch from the homepage, flavor pairings, and recipes." },
  { title: "Faster browsing", body: "Filter use, time to first product view, and fewer exits from category pages." },
  { title: "Bigger orders", body: "Average order value from Complete the Look and the free-shipping progress bar." },
  { title: "Faster checkout", body: "Buy It Now and express wallet usage, and checkout completion rate." },
  { title: "Return visits", body: "Back-in-stock signups, newsletter signups, and community photo tags." },
];

const learned = [
  { label: "Real data changes the design", text: "pulling actual products exposed duplicates, catch-all categories, and items with no home." },
  { label: "Present decisions as questions", text: "showing options (like combining crewnecks and hoodies) let the client choose with confidence." },
  { label: "Verify before you build", text: "a “Button-Ups” category I added was based on an outdated page, so I removed it and now check the live site first." },
  { label: "Storytelling and navigation work together", text: "a clear menu gets people in, and the story keeps them browsing." },
];

const nextSteps = [
  "Usability test the menu drawer and filters with real shoppers.",
  "Gather real reviews and run a post-launch check on merch clicks, filter use, and checkout completion.",
  "Prototype the full flow in Figma, including parallax and sheets.",
  "Finalize mobile states (sort sheet, Explore the Holler) and hand off to developers.",
];

export default function OleSmokyCaseStudy() {
  return (
    <>
      <CaseHero project={project} align="center" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* Project overview */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Project Overview</p>
            <p className="mt-4 text-xl md:text-2xl leading-snug">
              A redesign of the Ole Smoky Distillery merchandise experience that
              makes shopping easier to discover, browse, and buy, on desktop and
              mobile.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["Project Type", "Client project"],
              ["Timeline", "Fall 2026"],
              ["Role", "UX Designer: research, IA, wireframes, visual design"],
              ["Client", "Ole Smoky Distillery"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-2">{k}</p>
                <p className="mt-1.5 text-sm md:text-base">{v}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.12} className="mt-10 flex flex-wrap justify-center gap-2">
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          {/* Problem & Goal */}
          <Reveal stagger={0.08} className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealItem className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.12em] text-accent">Problem</p>
              <p className="mt-3 text-xl md:text-2xl leading-snug">
                Merch was one flat list of 362 products behind a single menu tab,
                on a page built for spirits, with almost no way to narrow it down.
              </p>
            </RevealItem>
            <RevealItem className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.12em] text-accent">Goal</p>
              <p className="mt-3 text-xl md:text-2xl leading-snug">
                Help shoppers find, browse, and buy merch in a few taps, while it
                still feels like Ole Smoky and spirits stay the star.
              </p>
            </RevealItem>
          </Reveal>

          {/* 01: Key features */}
          <div id="features" className="mt-24 md:mt-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="01" title="Key Features" className="justify-center" />
              <Reveal delay={0.05}>
                <p className="text-lg text-muted leading-relaxed">
                  The final designs for each step of the shopping journey,
                  from the homepage to checkout, on desktop and mobile.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 space-y-24 md:space-y-32">
              {solutions.map((s, i) =>
                s.wide ? (
                  <div key={s.title} id={s.id} className="scroll-mt-24">
                    <Reveal className="mx-auto max-w-3xl text-center mb-10">
                      <span className="font-display text-muted-2">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-display uppercase text-2xl md:text-3xl leading-tight">{s.title}</h3>
                      <p className="mt-4 text-lg text-muted leading-relaxed">{s.tagline}</p>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-xl bg-bg-elevated border border-border p-6 md:p-10 overflow-x-auto">
                        <div className={`relative min-w-[900px] ${s.image.aspect}`}>
                          <Image src={s.image.src} alt={s.image.alt} fill sizes="100vw" className="object-contain" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-2 md:hidden">Swipe to see every screen.</p>
                    </Reveal>
                  </div>
                ) : (
                  <div
                    key={s.title}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
                  >
                    <Reveal className={`lg:col-span-5 lg:sticky lg:top-28 ${i % 2 ? "lg:order-2" : ""}`}>
                      <span className="font-display text-muted-2">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-display uppercase text-2xl md:text-3xl leading-tight">{s.title}</h3>
                      <p className="mt-4 text-lg leading-relaxed">{s.tagline}</p>
                      <ul className="mt-6 space-y-3">
                        {s.points.map((p) => (
                          <li key={p.label} className="flex gap-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                            <p className="text-sm md:text-base text-muted leading-relaxed">
                              <strong className="text-fg">{p.label}</strong>: {p.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                    <ImageFrame
                      card
                      aspect={s.image.aspect}
                      src={s.image.src}
                      alt={s.image.alt}
                      className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""} ${s.image.aspect.includes("2058") ? "max-w-xl mx-auto w-full" : ""}`}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* 02: Auditing the current site */}
          <div id="research" className="mt-24 md:mt-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="02" title="Auditing the Current Site" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  I started by mapping the live menu, products, and pages. The
                  Merchandise page made shoppers scan every product type at
                  once.
                </p>
              </Reveal>
            </div>
            <Reveal
              stagger={0.06}
              className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((st) => (
                <RevealItem key={st.value} className="text-center md:text-left">
                  <p className="font-display text-5xl md:text-6xl text-accent">{st.value}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{st.label}</p>
                </RevealItem>
              ))}
            </Reveal>
            <Reveal
              stagger={0.08}
              className="mt-12 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <RevealItem className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6 md:p-7">
                <h3 className="font-display uppercase text-lg">Catch-all categories</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  &ldquo;Gifts&rdquo; and &ldquo;Accessories&rdquo; mixed golf
                  gear, bar tools, sunglasses, socks, and bags. The food pantry
                  included a cookbook and a tea towel.
                </p>
              </RevealItem>
              <RevealItem className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6 md:p-7">
                <h3 className="font-display uppercase text-lg">A spirits template on merch</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  The merch page code still carried spirits filters like Proof
                  and Flavor Notes, a sign the shop was never designed on its
                  own.
                </p>
              </RevealItem>
            </Reveal>
            <ImageFrame
              card
              aspect="aspect-[3360/542]"
              src={`${IMG}/before-screens.jpg`}
              alt="Before: the live Ole Smoky merchandise page with 21 category pills and a long flat product grid, next to a sparse product page"
              caption="Before: the live merchandise page (21 pills, 354 items) and a product page with little more than a photo, price, and Add to Cart."
              className="mt-10 mx-auto max-w-6xl"
            />
          </div>

          {/* 03: Competitor analysis */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="03" title="Competitor Analysis" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  I studied lifestyle brands that sell merch well, plus UX
                  research on product pages. Each finding became an
                  opportunity for Ole Smoky.
                </p>
              </Reveal>
            </div>
            <Reveal stagger={0.06} className="mx-auto max-w-5xl">
              <div className="hidden md:grid grid-cols-[180px_1fr_1fr] gap-8 pb-3 text-xs uppercase tracking-[0.12em] text-muted-2">
                <span>Source</span>
                <span>What they do well</span>
                <span>Ole Smoky&rsquo;s opportunity</span>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {research.map((r) => (
                  <RevealItem key={r.brand} className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-2 md:gap-8 py-5">
                    <p className="font-display uppercase">{r.brand}</p>
                    <p className="text-sm text-muted leading-relaxed">{r.finding}</p>
                    <p className="text-sm leading-relaxed">
                      <span className="text-accent">→ </span>
                      {r.used}
                    </p>
                  </RevealItem>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 04: Design goals */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="04" title="Design Goals" className="justify-center" />
            </div>
            <Reveal
              stagger={0.06}
              className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {goals.map((g, i) => (
                <RevealItem
                  key={g.title}
                  className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6"
                >
                  <span className="font-display text-muted-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display uppercase text-lg">{g.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{g.body}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* 05: Information architecture */}
          <div id="process" className="mt-24 md:mt-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="05" title="From 21 Pills to 4 Clear Groups" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  Products are sorted by what they are, not by occasion.
                  Occasions and collections moved to Featured and a new
                  &ldquo;Shop by Occasion&rdquo; path, and products with no home
                  (golf, bar tools, bags, sunglasses) got their own pages.
                </p>
              </Reveal>
            </div>
            <ImageFrame
              card
              aspect="aspect-[3360/584]"
              src={`${IMG}/ia-before-after.png`}
              alt="Before: 21 flat category pills. After: four groups, Apparel, Drinkware & Home, Gifts & Accessories, and Featured, each with its own subcategories"
              className="mx-auto max-w-6xl"
            />
          </div>

          {/* 06: Wireframes to final */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="06" title="Wireframes to Final Design" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  I worked from low-fi FigJam frames to gray wireframes, filled
                  them with real products, then explored two visual styles
                  before landing on a rustic look built from Ole Smoky&rsquo;s
                  own brand.
                </p>
              </Reveal>
            </div>
            <ImageFrame
              card
              aspect="aspect-[3360/898]"
              src={`${IMG}/design-evolution.jpg`}
              alt="The Men's T-shirts category page in three stages: gray wireframe, a dark style exploration, and the final rustic design"
              caption="One page, three passes: gray wireframe, style exploration, final design."
              className="mx-auto max-w-6xl"
            />
            <Reveal
              stagger={0.05}
              className="mt-12 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {process.map((p, i) => (
                <RevealItem key={p.title} className="border-t border-border pt-4">
                  <span className="font-display text-muted-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-display uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.body}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* 07: Client feedback */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="07" title="Iterating with the Client" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  I presented each round to the Ole Smoky team. Every piece of
                  feedback became a design decision.
                </p>
              </Reveal>
            </div>
            <Reveal
              stagger={0.06}
              className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {feedback.map((f) => (
                <RevealItem
                  key={f.quote}
                  className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-6 flex flex-col"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-2">Feedback</p>
                  <p className="mt-2 text-fg leading-snug">&ldquo;{f.quote}&rdquo;</p>
                  <p className="mt-4 pt-4 border-t border-border text-xs uppercase tracking-[0.12em] text-accent">Change</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{f.decision}</p>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          {/* 08: Visual design */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="08" title="Visual Design" className="justify-center" />
              <Reveal delay={0.05} className="mb-10">
                <p className="text-lg text-muted leading-relaxed">
                  The Holler, on screen: a palette pulled from Ole
                  Smoky&rsquo;s brand, Zilla Slab for the rustic version and
                  Inter for mobile, dashed dividers borrowed from their product
                  pages, and shapes that change section to section.
                </p>
              </Reveal>
            </div>
            <ImageFrame
              card
              aspect="aspect-[3360/860]"
              src={`${IMG}/visual-system.png`}
              alt="Visual system: a six-color palette from black to moonshine tan and parchment, Zilla Slab and Inter type samples, and design details"
              className="mx-auto max-w-6xl"
            />
          </div>

          <div className="mt-24 md:mt-32 text-center">
            <div className="mx-auto max-w-3xl flex justify-center">
              <Callout>
                The Ole Smoky team gave positive feedback on the merchandise
                experience and asked us to continue into quick checkout and
                mobile.
              </Callout>
            </div>
          </div>

          {/* 09: Reflection */}
          <div className="mt-24 md:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading number="09" title="Reflection" className="justify-center" />
            </div>
            <div className="mx-auto max-w-5xl space-y-14">
              <Reveal>
                <h3 className="font-display uppercase text-lg">How I&rsquo;d Measure Impact</h3>
                <p className="mt-2 text-muted leading-relaxed">
                  This is a design proposal, so results are not measured yet.
                  These are the outcomes I designed for and the metrics I would
                  track after launch.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {metrics.map((m) => (
                    <div key={m.title} className="rounded-2xl border border-border/70 bg-bg-elevated/40 p-5">
                      <p className="font-display uppercase text-sm">{m.title}</p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{m.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal>
                <h3 className="font-display uppercase text-lg">What I Learned</h3>
                <ul className="mt-4 space-y-4">
                  {learned.map((t) => (
                    <li key={t.label} className="flex gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <p className="text-muted leading-relaxed">
                        <strong className="text-fg">{t.label}</strong>: {t.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h3 className="font-display uppercase text-lg">Next Steps</h3>
                <ul className="mt-4 space-y-3">
                  {nextSteps.map((n) => (
                    <li key={n} className="flex gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-2 mt-2.5 shrink-0" />
                      <p className="text-muted leading-relaxed">{n}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <NextProject project={nextProject} />
    </>
  );
}
