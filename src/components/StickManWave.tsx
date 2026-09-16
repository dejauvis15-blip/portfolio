export default function StickManWave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="4.5" r="2.25" />
      <line x1="12" y1="6.75" x2="12" y2="15" />
      <line x1="12" y1="10" x2="8" y2="13" />
      <line x1="12" y1="15" x2="9" y2="21" />
      <line x1="12" y1="15" x2="15" y2="21" />
      <line x1="12" y1="10" x2="16" y2="6" className="stick-man-arm" />
    </svg>
  );
}
