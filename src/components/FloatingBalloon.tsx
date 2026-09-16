export default function FloatingBalloon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 28"
      fill="none"
      aria-hidden="true"
      className={`balloon-float ${className}`}
    >
      <path
        d="M12 1.5c-4.1 0-7.2 3.7-7.2 8.1 0 4.3 3.1 8.4 6.2 9.9.3.15.5.45.5.8v.6h1v-.6c0-.35.2-.65.5-.8 3.1-1.5 6.2-5.6 6.2-9.9 0-4.4-3.1-8.1-7.2-8.1Z"
        fill="#f2994a"
      />
      <ellipse cx="9.3" cy="7.2" rx="1.6" ry="2.3" fill="#ffffff" fillOpacity="0.35" />
      <path d="M11.3 20.9c-.4.5-.4 1.1 0 1.6.4.5.4 1.1 0 1.6" stroke="#f2994a" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M11 24.1h2l-.5 1.9h-1l-.5-1.9Z" fill="#f2994a" />
    </svg>
  );
}
