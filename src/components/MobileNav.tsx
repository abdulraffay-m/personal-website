// src/components/MobileNav.tsx
import { useState, useEffect } from 'react';
import { sections } from '../sections';

export default function MobileNav() {
  const [active, setActive] = useState('intro');

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

  const activeIndex = sections.findIndex(s => s.id === active);
  const visible = sections.filter((_, i) => Math.abs(i - activeIndex) <= 2);

  return (
    <nav
      aria-label="section navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30"
      style={{
        background: 'rgba(255,252,245,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px dashed #A89B95',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center justify-center gap-1 py-2 px-4 overflow-x-auto">
        {visible.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`jump to ${label}`}
            className="px-3 py-1.5 rounded-full font-hand text-[0.95rem] whitespace-nowrap transition-all duration-200"
            style={{
              background:  active === id ? '#6B2C39' : 'transparent',
              color:       active === id ? '#FFFCF5' : '#6B5852',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
