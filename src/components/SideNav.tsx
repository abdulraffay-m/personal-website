// src/components/SideNav.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sections } from '../sections';

export default function SideNav() {
  const [active, setActive] = useState('intro');
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      aria-label="section navigation"
      className="hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 z-30 flex-col gap-4"
    >
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className="relative flex items-center"
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === id && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-7 font-hand text-[1.05rem] text-ink-soft whitespace-nowrap"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={() => scrollTo(id)}
            aria-label={`jump to ${label}`}
            className="w-2.5 h-2.5 rounded-full border transition-all duration-200"
            style={{
              borderColor: active === id ? '#C9A961' : '#A89B95',
              background:  active === id ? '#C9A961' : 'transparent',
              transform:   active === id ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        </div>
      ))}
    </nav>
  );
}
