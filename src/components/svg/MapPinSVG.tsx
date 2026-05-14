// src/components/svg/MapPinSVG.tsx
export default function MapPinSVG({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C7.03 2 3 6.03 3 11C3 18 12 34 12 34C12 34 21 18 21 11C21 6.03 16.97 2 12 2Z"
        fill="#C9A961"
        stroke="#6B2C39"
        strokeWidth="1"
      />
      <circle cx="12" cy="11" r="3" fill="#FFFCF5" opacity="0.7" />
    </svg>
  );
}
