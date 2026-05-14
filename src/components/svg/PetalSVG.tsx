// src/components/svg/PetalSVG.tsx — 5-petal flower for the easter egg
type Props = { size?: number; className?: string; glowing?: boolean };

export default function PetalSVG({ size = 32, className = '', glowing = false }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {glowing && (
        <circle cx="32" cy="32" r="28" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" />
      )}
      {/* 5 petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="20"
          rx="5"
          ry="10"
          fill="#C99A8F"
          opacity="0.85"
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      {/* center */}
      <circle cx="32" cy="32" r="5" fill="#C9A961" />
    </svg>
  );
}
