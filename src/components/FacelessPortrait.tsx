export default function FacelessPortrait({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 27.5c-3.6 0-6.7-.55-9-1.35 .35-3.55 2.15-6.55 5.3-7.85"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M12 27.5c3.6 0 6.7-.55 9-1.35-.35-3.55-2.15-6.55-5.3-7.85"
        fill="currentColor"
        stroke="none"
      />
      <path d="M9.6 15.3v2.35c0 1 .95 1.85 2.4 1.85s2.4-.85 2.4-1.85V15.3" fill="var(--bg)" />
      <ellipse cx="12" cy="10.6" rx="4.3" ry="5.1" fill="var(--bg)" />
      <circle cx="7.55" cy="11.6" r="1.05" fill="var(--bg)" />
      <circle cx="16.45" cy="11.6" r="1.05" fill="var(--bg)" />
      <path
        d="M7.6 8.3C7.2 5.6 9.4 4.4 12 4.4c2.6 0 4.8 1.2 4.4 3.9
           Q15 7.1 13.6 7.6 Q12.6 8 12 7.4 Q11.4 8 10.4 7.6 Q9 7.1 7.6 8.3 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
