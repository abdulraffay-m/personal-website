// src/components/svg/EnvelopeSVG.tsx
type Props = { initial?: string; onOpen?: () => void; isOpen?: boolean };

export default function EnvelopeSVG({ initial = 'Z', isOpen = false }: Props) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 'clamp(180px, 40vw, 280px)', height: 'auto' }}
      aria-hidden="true"
    >
      {/* envelope body */}
      <rect x="4" y="30" width="192" height="106" rx="4" fill="#F4E9D4" stroke="#6B5852" strokeWidth="1" />
      {/* bottom fold lines */}
      <line x1="4" y1="136" x2="100" y2="80" stroke="#6B5852" strokeWidth="0.7" opacity="0.4" />
      <line x1="196" y1="136" x2="100" y2="80" stroke="#6B5852" strokeWidth="0.7" opacity="0.4" />
      <line x1="4" y1="30" x2="100" y2="80" stroke="#6B5852" strokeWidth="0.7" opacity="0.3" />
      <line x1="196" y1="30" x2="100" y2="80" stroke="#6B5852" strokeWidth="0.7" opacity="0.3" />
      {/* envelope flap */}
      <g
        style={{
          transformOrigin: '100px 30px',
          transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
          transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <path
          d="M4 30 L100 88 L196 30 Z"
          fill="#EAD9C0"
          stroke="#6B5852"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>
      {/* wax seal */}
      <g transform="translate(100, 80)">
        <circle cx="0" cy="0" r="18" fill="#6B2C39" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#C9A961" strokeWidth="1.5" />
        <text
          x="0" y="6"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="16"
          fontStyle="italic"
          fontWeight="500"
          fill="#FFFCF5"
        >
          {initial}
        </text>
      </g>
    </svg>
  );
}
