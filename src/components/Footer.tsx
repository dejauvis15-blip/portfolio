import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-2">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.1em] text-muted">
          <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            LinkedIn
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
