export default function AfroSmileyFace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="10" r="7.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="3.5" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="6.4" cy="6.75" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="17.6" cy="6.75" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12.5" r="4.3" fill="var(--bg)" stroke="none" />
      <circle cx="10" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9.6 14.2c0.7 1.2 3.3 1.2 4.8 0" />
    </svg>
  );
}
