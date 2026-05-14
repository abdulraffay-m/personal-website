// src/sections/Future.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { future as futurePh } from '../content';
import Section from '../components/Section';

const LS_KEY = 'future-done';

function loadDone(): Record<string, boolean> {
  try {
    const s = localStorage.getItem(LS_KEY);
    return s ? JSON.parse(s) : {};
  } catch { return {}; }
}

export default function Future() {
  const [done, setDone] = useState<Record<string, boolean>>(() => {
    const saved = loadDone();
    const initial: Record<string, boolean> = {};
    futurePh.forEach(d => { initial[d.id] = saved[d.id] ?? d.done ?? false; });
    return initial;
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(done));
  }, [done]);

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <Section id="future" eyebrow="things we will do" title="Someday">
      <div
        className="max-w-[520px] mx-auto rounded-xl p-6 md:p-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(163,143,139,0.2) 31px, rgba(163,143,139,0.2) 32px)',
          backgroundSize: '100% 32px',
          backgroundColor: '#FFFCF5',
          boxShadow: '0 4px 12px rgba(74,24,34,0.08)',
        }}
      >
        <div className="flex flex-col gap-1">
          {futurePh.map((dream, i) => {
            const checked = done[dream.id];
            return (
              <motion.button
                key={dream.id}
                onClick={() => toggle(dream.id)}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 py-1.5 text-left group w-full"
                aria-label={`${checked ? 'uncheck' : 'check'}: ${dream.text}`}
              >
                {/* custom checkbox */}
                <div
                  className="shrink-0 w-5 h-5 rounded border transition-all duration-200"
                  style={{
                    borderColor:     checked ? '#C9A961' : '#A89B95',
                    background:      checked ? '#C9A961' : 'transparent',
                    boxShadow:       checked ? '0 0 6px rgba(201,169,97,0.3)' : 'none',
                  }}
                >
                  <AnimatePresence>
                    {checked && (
                      <motion.svg
                        key="check"
                        width="20" height="20" viewBox="0 0 20 20" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <motion.path
                          d="M4 10 L8 14 L16 6"
                          stroke="#FFFCF5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </div>

                <span
                  className="font-hand text-[1.15rem] leading-snug transition-all duration-300"
                  style={{
                    color:          checked ? '#A89B95' : '#3D2E2A',
                    textDecoration: checked ? 'line-through' : 'none',
                    textDecorationColor: '#C99A8F',
                  }}
                >
                  {dream.text}
                </span>
              </motion.button>
            );
          })}
        </div>

        <p className="font-hand text-[1rem] text-ink-faded mt-8 text-right">
          add yours when you find me.
        </p>
      </div>
    </Section>
  );
}
