// src/sections/Outro.tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { timeUntil } from '../lib/daysTogether';
import { people } from '../content';
import WaxSeal from '../components/WaxSeal';

const fmt2 = (n: number) => String(n).padStart(2, '0');

export default function Outro() {
  const [countdown, setCountdown] = useState(() => timeUntil(people.nextAnniversary));

  useEffect(() => {
    const id = setInterval(() => setCountdown(timeUntil(people.nextAnniversary)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="outro" aria-labelledby="outro-heading" className="relative z-10 bg-paper py-24 px-5 md:px-8 text-center">
      <div className="mx-auto max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            id="outro-heading"
            className="font-display italic font-medium text-deep-wine leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            to the next year of you.
          </h2>

          <p className="font-hand text-[1.2rem] text-ink-soft mb-12">
            and the year after that. and the year after that.
          </p>

          {/* Countdown */}
          <div className="mb-16">
            <p className="font-hand text-[1rem] text-ink-faded mb-3">until the next one</p>
            <p
              className="font-mono text-deep-wine tabular-nums text-[1.6rem]"
              style={{ fontVariantNumeric: 'tabular-nums' }}
              aria-live="polite"
              aria-label="countdown to next anniversary"
            >
              {countdown.d}d {fmt2(countdown.h)}h {fmt2(countdown.m)}m {fmt2(countdown.s)}s
            </p>
          </div>

          {/* Signature */}
          <div className="flex flex-col items-center gap-4 mb-20">
            <p className="font-hand text-[2rem] text-ink-soft -rotate-2">
              {people.me.name}
            </p>
            <WaxSeal initial={people.me.initial} size={56} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
