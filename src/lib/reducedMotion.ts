// src/lib/reducedMotion.ts
import { useSyncExternalStore } from 'react';

const get = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const subscribe = (cb: () => void) => {
  const m = window.matchMedia('(prefers-reduced-motion: reduce)');
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};

export const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribe, get, () => false);
