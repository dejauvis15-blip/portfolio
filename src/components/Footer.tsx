import Link from "next/link";
import { AISummaryFooter } from "ai-summary-footer";
import { site } from "@/lib/data";

const aiSummaryPrompt =
  "I'm looking at the portfolio of {companyName} ({companyUrl}). Who is {companyName}? Summarize his background, education, experience, UX design skills, and the case studies in his portfolio. Keep it concise.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 pt-12">
        <AISummaryFooter
          companyName={site.name}
          companyUrl={site.url}
          prompt={aiSummaryPrompt}
          className="border-t pt-10"
        />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-2">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.1em] text-muted">
          <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            LinkedIn
          </Link>
          <Link href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            GitHub
          </Link>
          <Link href={`mailto:${site.email}`} className="hover:text-fg transition-colors">
            Email
          </Link>
          <a href={site.resumeHref} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
