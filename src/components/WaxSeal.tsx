// src/components/WaxSeal.tsx
type Props = { initial: string; size?: number };

export default function WaxSeal({ initial, size = 64 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#6B2C39" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="#C9A961" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#C9A961" strokeWidth="0.5" opacity="0.5" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="500"
        fill="#FFFCF5"
      >
        {initial}
      </text>
    </svg>
  );
}
