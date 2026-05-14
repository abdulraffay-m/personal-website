// src/pages/SecretPage.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { secret } from '../content';
import { people } from '../content';
import WaxSeal from '../components/WaxSeal';
import Layout from '../components/Layout';

const phColors = [
  'linear-gradient(135deg, #E8DFC8, #DCC5B8)',
  'linear-gradient(135deg, #DCCFB8, #C9A98F)',
  'linear-gradient(135deg, #EAD9C0, #DDD0B5)',
  'linear-gradient(135deg, #E2D4BC, #C9A961)',
  'linear-gradient(135deg, #DDD0B5, #E8C5B8)',
];

export default function SecretPage() {
  const [currentMoment, setCurrentMoment] = useState(0);
  const moments = secret.moments;
  const total = moments.length;

  function next() { setCurrentMoment(i => Math.min(i + 1, total - 1)); }
  function prev() { setCurrentMoment(i => Math.max(i - 1, 0)); }

  return (
    <Layout>
      {/* noindex for secret page */}
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>

      <div className="min-h-screen bg-paper flex flex-col items-center px-5 py-16">
        {/* back link */}
        <Link
          to="/"
          className="self-start font-hand text-[1rem] text-ink-faded hover:text-ink-soft transition-colors duration-200 mb-12"
          aria-label="back to the main site"
        >
          ← back to the rest
        </Link>

        <motion.div
          className="w-full max-w-[480px] flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* intro */}
          <p className="font-display italic text-deep-wine text-[1.5rem] leading-snug text-center">
            {secret.intro}
          </p>

          {/* moment carousel */}
          <div className="w-full">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMoment}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-4"
                >
                  <div
                    className="bg-ivory p-3 pb-10 w-[200px]"
                    style={{ boxShadow: '0 6px 14px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)' }}
                  >
                    {moments[currentMoment].src ? (
                      <img
                        src={moments[currentMoment].src}
                        alt={moments[currentMoment].caption}
                        loading="lazy"
                        className="w-full aspect-square object-cover"
                        style={{ filter: 'saturate(0.95) sepia(0.08) contrast(1.05)' }}
                      />
                    ) : (
                      <div
                        className="w-full aspect-square"
                        style={{ background: phColors[currentMoment % phColors.length] }}
                        aria-hidden="true"
                      />
                    )}
                    <p className="font-hand text-[1rem] text-ink-soft text-center mt-2 -rotate-1 px-1">
                      {moments[currentMoment].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* carousel controls */}
            <div className="flex items-center justify-center gap-8 mt-6">
              <button
                onClick={prev}
                disabled={currentMoment === 0}
                className="font-hand text-[1.1rem] text-ink-faded hover:text-ink-soft transition-colors disabled:opacity-30"
                aria-label="previous moment"
              >
                ←
              </button>
              <span className="font-mono text-[0.85rem] text-ink-faded tabular-nums">
                {currentMoment + 1} / {total}
              </span>
              <button
                onClick={next}
                disabled={currentMoment === total - 1}
                className="font-hand text-[1.1rem] text-ink-faded hover:text-ink-soft transition-colors disabled:opacity-30"
                aria-label="next moment"
              >
                →
              </button>
            </div>
          </div>

          {/* closing paragraph */}
          <div className="bg-ivory rounded-sm p-6 md:p-8 relative" style={{ boxShadow: '0 4px 12px rgba(74,24,34,0.08)' }}>
            {['-top-0.5 -left-0.5', '-top-0.5 -right-0.5 rotate-90', '-bottom-0.5 -right-0.5 rotate-180', '-bottom-0.5 -left-0.5 -rotate-90'].map((pos, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`absolute ${pos}`}>
                <path d="M2 18 L2 2 L18 2" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            ))}
            <p className="font-editorial text-ink text-[1.05rem] leading-[1.85]">
              {secret.closing}
            </p>
          </div>

          {/* her-initial wax seal */}
          <WaxSeal initial={people.her.initial} size={72} />
        </motion.div>
      </div>
    </Layout>
  );
}
