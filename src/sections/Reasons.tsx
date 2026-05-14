// src/sections/Reasons.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reasons } from '../content';
import Section from '../components/Section';

const CARD_BACKGROUNDS = ['#F4E9D4', '#E8C5B8', '#FFFCF5'];

export default function Reasons() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function next() {
    setDirection(1);
    setIndex(i => (i + 1) % reasons.length);
  }

  function prev() {
    setDirection(-1);
    setIndex(i => (i - 1 + reasons.length) % reasons.length);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');
  const isLast = index === reasons.length - 1;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, rotate: dir > 0 ? 8 : -8 }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit:  (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, rotate: dir > 0 ? -12 : 12 }),
  };

  return (
    <Section id="reasons" eyebrow="a partial list" title="Reasons">
      <div className="flex flex-col items-center gap-8">
        <div
          className="relative"
          style={{ width: 280, height: 200 }}
          aria-live="polite"
          aria-label={`reason ${index + 1} of ${reasons.length}: ${reasons[index]}`}
        >
          {/* background stack cards */}
          {[2, 1].map(offset => (
            <div
              key={offset}
              aria-hidden="true"
              className="absolute inset-0 rounded-xl"
              style={{
                background: CARD_BACKGROUNDS[offset % CARD_BACKGROUNDS.length],
                rotate: `${offset === 1 ? -3 : -6}deg`,
                boxShadow: '0 4px 12px rgba(74,24,34,0.08)',
                top: offset * 4,
                zIndex: 3 - offset,
              }}
            />
          ))}

          {/* active card */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.7, 0, 1, 0.3] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100 || info.velocity.x > 500) next();
                else if (info.offset.x < -100 || info.velocity.x < -500) prev();
              }}
              className="absolute inset-0 rounded-xl p-6 flex flex-col justify-between cursor-grab active:cursor-grabbing z-10"
              style={{
                background: CARD_BACKGROUNDS[0],
                boxShadow: '0 6px 16px rgba(74,24,34,0.18)',
              }}
            >
              <p className="font-display italic text-ink text-[1.25rem] leading-snug">
                {reasons[index]}
              </p>
              <p className="font-mono text-ink-faded text-[0.85rem] self-end tabular-nums">
                {pad(index + 1)} / {pad(reasons.length)}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="flex items-center gap-6 mt-2">
          <button
            onClick={prev}
            aria-label="previous reason"
            className="font-hand text-[1.2rem] text-ink-faded hover:text-ink-soft transition-colors px-4 py-2"
          >
            ← prev
          </button>
          <button
            onClick={next}
            aria-label="next reason"
            className="font-hand text-[1.2rem] text-ink-faded hover:text-ink-soft transition-colors px-4 py-2"
          >
            next →
          </button>
        </div>

        {isLast && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-hand text-[1.1rem] text-ink-faded text-center mt-2 max-w-xs"
          >
            there are more than thirty. there always will be.
          </motion.p>
        )}
      </div>
    </Section>
  );
}
