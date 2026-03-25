export default function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 5 7.5c0 2.32 1.74 4.48 4.2 5.95.93.5 1.67 1.15 2.6 1.94.93-.79 1.67-1.44 2.6-1.94 2.46-1.47 4.2-3.63 4.2-5.95 0-3.08-3.42-5.5-7.5-5.5z"
        fill="#76CEFC"
      />
    </svg>
  );
}
