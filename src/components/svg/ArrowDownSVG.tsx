// src/components/svg/ArrowDownSVG.tsx — hand-drawn style
export default function ArrowDownSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 C11.5 8 12.5 14 12 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18 C8 22 10 26 12 28 C14 26 16 22 18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
