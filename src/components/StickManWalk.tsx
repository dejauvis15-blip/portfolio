export default function StickManWalk({ className = "" }: { className?: string }) {
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
      <circle cx="13" cy="4.5" r="2.25" />
      <line x1="13" y1="6.75" x2="12" y2="15" />
      <rect x="9.25" y="8" width="3.5" height="6" rx="1" fill="currentColor" stroke="none" />
      <line x1="10.5" y1="8.5" x2="12.5" y2="9.5" />
      <line
        x1="12.5"
        y1="9.5"
        x2="16"
        y2="8"
        className="stick-man-arm-walk"
      />
      <line
        x1="12"
        y1="15"
        x2="15.5"
        y2="19"
        className="stick-man-leg-a"
      />
      <line
        x1="12"
        y1="15"
        x2="8.5"
        y2="19"
        className="stick-man-leg-b"
      />
    </svg>
  );
}
