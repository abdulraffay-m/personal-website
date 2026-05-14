// src/sections/Counter.tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { timeTogether } from '../lib/daysTogether';
import { people } from '../content';

const fmt = (n: number) => new Intl.NumberFormat().format(n);

export default function Counter() {
  const [time, setTime] = useState(() => timeTogether(people.togetherSince));
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(timeTogether(people.togetherSince));
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="counter" aria-labelledby="counter-heading" className="relative z-10 bg-cream py-24 px-5 md:px-8">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ivory rounded-2xl p-10 md:p-14 shadow-[0_4px_12px_rgba(74,24,34,0.08)] text-center"
        >
          <p className="font-hand text-[1.05rem] text-ink-faded mb-2">
            since the fourteenth of may, two thousand twenty-four
          </p>

          <motion.div
            animate={pulse ? { scale: 1.06, color: '#C99A8F' } : { scale: 1, color: '#6B2C39' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2
              id="counter-heading"
              className="font-display italic font-medium text-deep-wine leading-none mb-1"
              style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}
            >
              {fmt(time.days)}
            </h2>
          </motion.div>

          <p className="font-hand text-[1.4rem] text-ink-soft mb-10">days</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: fmt(time.hours),   label: 'hours'   },
              { value: fmt(time.minutes), label: 'minutes' },
              { value: fmt(time.seconds), label: 'seconds' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span
                  className="font-mono text-[1.5rem] text-deep-wine tabular-nums"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {value}
                </span>
                <span className="font-hand text-[1rem] text-ink-faded mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 font-editorial italic text-ink-soft text-[1.1rem]">
            {people.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
