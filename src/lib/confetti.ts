// src/lib/confetti.ts
import confetti from 'canvas-confetti';

const gold  = '#C9A961';
const rose  = '#C99A8F';
const wine  = '#6B2C39';
const ivory = '#FFFCF5';

export function softGoldDust(origin = { x: 0.5, y: 0.55 }) {
  confetti({
    particleCount: 12,
    spread: 50,
    startVelocity: 18,
    gravity: 0.6,
    ticks: 90,
    colors: [gold, '#DCC58A'],
    origin,
    shapes: ['circle'],
    scalar: 0.6,
  });
}

export function bigCelebration() {
  confetti({
    particleCount: 80,
    spread: 90,
    startVelocity: 36,
    gravity: 0.7,
    colors: [gold, rose, wine, ivory],
    origin: { x: 0.5, y: 0.4 },
    scalar: 0.9,
  });
}

export function petalDrop(origin = { x: 0.5, y: 0.6 }) {
  confetti({
    particleCount: 24,
    angle: 270,
    spread: 60,
    startVelocity: 8,
    gravity: 0.4,
    drift: 0.4,
    ticks: 160,
    colors: [rose, '#E8C5B8', gold],
    origin,
    shapes: ['circle'],
    scalar: 0.7,
  });
}
