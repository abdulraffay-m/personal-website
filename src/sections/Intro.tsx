// src/sections/Intro.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { introSeen, setIntroSeen } from '../lib/sessionFlags';
import { usePrefersReducedMotion } from '../lib/reducedMotion';
import { people } from '../content';
import EnvelopeSVG from '../components/svg/EnvelopeSVG';
import ArrowDownSVG from '../components/svg/ArrowDownSVG';
import Button from '../components/Button';

type Stage = 'envelope' | 'opening' | 'title';

export default function Intro() {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState<Stage>(introSeen() || reduced ? 'title' : 'envelope');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (stage === 'title') return;
    const timer = setTimeout(() => advance(), 4000);
    return () => clearTimeout(timer);
  }, [stage]);

  function advance() {
    if (stage === 'envelope') {
      setIsOpen(true);
      setStage('opening');
      setTimeout(() => {
        setStage('title');
        setIntroSeen();
      }, 800);
    }
  }

  function skip() {
    setIntroSeen();
    setStage('title');
  }

  return (
    <section
      id="intro"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-paper py-24 px-5"
      aria-label="introduction"
    >
      <AnimatePresence mode="wait">
        {stage !== 'title' ? (
          <motion.div
            key="envelope-stage"
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <button
                onClick={advance}
                aria-label="open the envelope"
                className="cursor-pointer"
              >
                <EnvelopeSVG initial={people.her.initial} isOpen={isOpen} />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="font-hand text-[1.3rem] text-ink-soft"
            >
              for you,
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="font-display italic text-ink-faded text-[1rem]"
            >
              tap to open
            </motion.p>

            <Button variant="ghost" size="sm" onClick={skip}
              className="fixed bottom-8 right-6 text-ink-faded border-ink-faded hover:bg-ink hover:text-ivory"
            >
              skip intro →
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="title-stage"
            className="flex flex-col items-center gap-6 text-center max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-hand text-[1.1rem] text-ink-faded tracking-wide">
              a small love letter, scrolled
            </p>
            <h1
              className="font-display italic font-medium text-deep-wine leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              Two years of you.
            </h1>
            <p className="font-editorial text-ink-soft text-[1.05rem]">
              — {people.her.name}, this is for you.
            </p>
            <motion.a
              href="#counter"
              className="mt-8 flex flex-col items-center gap-2 text-ink-faded font-hand text-[1rem] cursor-pointer hover:text-ink-soft transition-colors duration-200"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              aria-label="scroll to begin"
            >
              scroll to begin
              <ArrowDownSVG />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
