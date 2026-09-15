// Central content for the portfolio. Keeping copy here (rather than scattered
// through components) makes it easy to update project details, case-study
// text, and contact info in one place.

export const site = {
  name: "Jauvis Dozier",
  role: "Undergraduate UX Designer",
  email: "dejauvis15@gmail.com",
  linkedin: "https://linkedin.com/in/jauvisdozier",
  resumeHref: "/resume.pdf",
};

export const navLinks = [
  { label: "Work", href: "/" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export const heroPills = [
  { icon: "pin", label: "Located in Knoxville" },
  { icon: "briefcase", label: "Open to internship opportunities" },
  { icon: "file", label: "Resume", href: "/resume.pdf" },
] as const;

export const capabilities = [
  {
    title: "UX/UI Design",
    description: "Creating intuitive, user-centered digital experiences.",
  },
  {
    title: "UX Research",
    description: "Understanding user needs and identifying usability problems.",
  },
  {
    title: "Interaction Design",
    description: "Designing meaningful interactions and user flows.",
  },
  {
    title: "Web Design",
    description: "Creating responsive digital experiences.",
  },
  {
    title: "Prototyping",
    description: "Building interactive prototypes to test ideas and experiences.",
  },
  {
    title: "Visual Design",
    description:
      "Creating strong visual hierarchy, typography, and interface systems.",
  },
];

export const tools = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Creative Suite",
  "Webflow",
  "WordPress",
  "Python",
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the user, problem, and context.",
  },
  {
    number: "02",
    title: "Define",
    description: "Identify pain points and establish project goals.",
  },
  {
    number: "03",
    title: "Ideate",
    description: "Explore potential solutions and user flows.",
  },
  {
    number: "04",
    title: "Design",
    description: "Create wireframes, interfaces, and prototypes.",
  },
  {
    number: "05",
    title: "Test",
    description: "Evaluate usability and refine the experience.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Finalize the experience and document the solution.",
  },
];

export const about = {
  name: "Jauvis Dozier",
  program: "Information Science — User Experience Design",
  school: "University of Tennessee, Knoxville",
  role: "Undergraduate Media and Website Design Assistant",
  org: "Fibers and Composites Manufacturing Facility (FCMF)",
  bio: "I'm a UX/Product design student concentrating in User Experience Design within the Information Science program at the University of Tennessee, Knoxville. Alongside coursework, I work as an Undergraduate Media and Website Design Assistant at the Fibers and Composites Manufacturing Facility (FCMF), where I design and maintain digital media for the facility's web presence.",
};

export const education = [
  {
    school: "University of Tennessee",
    program: "B.S. Information Science, UX Design Concentration",
    location: "Knoxville, TN",
    period: "Aug 2025 – Present",
    logo: "/images/logos/ut.png",
  },
  {
    school: "University of Virginia's College at Wise",
    program: "Computer Science",
    location: "Wise, VA",
    period: "Aug 2024 – May 2025",
    logo: "/images/logos/uva-wise.png",
  },
] as const;

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  title: string;
  discipline: string[];
  category: string;
  year: string;
  role: string;
  tools: string[];
  duration?: string;
  summary: string;
  heroImage: CaseStudyImage;
};

export const projects: Project[] = [
  {
    slug: "tesla",
    index: "01",
    name: "TESLA",
    title: "Tesla Homepage Redesign",
    discipline: ["UX/UI Design", "Web Design"],
    category: "UX/UI Case Study",
    year: "2026",
    role: "Solo UX/UI Designer",
    tools: ["Figma"],
    duration: "1 week",
    summary:
      "A self-directed redesign of Tesla's homepage focused on visual hierarchy, navigation, and call-to-action clarity — reframing the first impression around Tesla's own brand identity.",
    heroImage: {
      src: "/images/tesla/hero-band.jpg",
      alt: "Tesla homepage redesign hero section, with the Model 3 and Model Y and a $299/mo leasing offer",
    },
  },
  {
    slug: "discord",
    index: "02",
    name: "DISCORD",
    title: "Fixing Discord's Fragmented Notifications & Search",
    discipline: ["UX/UI Design", "Product Design"],
    category: "UX Research · Product Design",
    year: "2026",
    role: "Solo UX Researcher & Designer",
    tools: ["Figma", "FigJam"],
    summary:
      "A heuristic audit of Discord's mobile app surfaced two high-severity problems — fragmented forum notification settings and an untrustworthy search experience. This case study follows both from research through final mockup.",
    heroImage: {
      src: "/images/discord/final-mockup-hero.jpg",
      alt: "Discord server notifications screen shown in a lifestyle phone mockup",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
