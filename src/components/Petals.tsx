// src/components/Petals.tsx
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../lib/reducedMotion';

const GOLD = '#C9A961';
const ROSE = '#C99A8F';

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Petals() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      div.className = 'particle';
      const size = randomBetween(4, 8);
      const left = randomBetween(8, 92);
      const delay = randomBetween(0, 14);
      const dur = randomBetween(12, 18);
      const color = Math.random() < 0.75 ? GOLD : ROSE;

      div.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        --delay: ${delay}s;
        --dur: ${dur}s;
        animation-delay: ${delay}s;
        animation-duration: ${dur}s;
        bottom: -10px;
        opacity: 0;
      `;
      container.appendChild(div);
    }
  }, [reduced]);

  if (reduced) return null;
  return <div ref={containerRef} aria-hidden="true" />;
}
