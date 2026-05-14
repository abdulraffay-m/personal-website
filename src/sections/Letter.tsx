// src/sections/Letter.tsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { letter } from '../content';
import { letterTyped, setLetterTyped } from '../lib/sessionFlags';
import { usePrefersReducedMotion } from '../lib/reducedMotion';

const CHAR_DELAY_DATE    = 50;
const CHAR_DELAY_GREETING = 40;
const CHAR_DELAY_BODY    = 22;

function useTypewriter(text: string, delay: number, enabled: boolean, onDone?: () => void) {
  const [displayed, setDisplayed] = useState(enabled ? '' : text);
  const [done, setDone] = useState(!enabled);

  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
        onDone?.();
      }
    }, delay);
    return () => clearInterval(id);
  }, [enabled, text, delay, onDone]);

  return { displayed, done };
}

export default function Letter() {
  const reduced = usePrefersReducedMotion();
  const alreadyTyped = letterTyped();
  const shouldAnimate = !reduced && !alreadyTyped;

  const [inView, setInView] = useState(false);
  const [phase, setPhase] = useState(0); // 0=date, 1=greeting, 2=body, 3=sig, 4=done
  const [_replay, setReplay] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animate = shouldAnimate && inView;

  const dateText     = useTypewriter(letter.date,     CHAR_DELAY_DATE,     animate && phase === 0, () => setPhase(1));
  const greetText    = useTypewriter(letter.greeting, CHAR_DELAY_GREETING, animate && phase === 1, () => setPhase(2));
  const allBodyDone  = useRef(false);

  useEffect(() => {
    if (phase === 4) {
      setLetterTyped();
      allBodyDone.current = true;
    }
  }, [phase]);

  function doReplay() {
    setPhase(0);
    setReplay(r => !r);
    sessionStorage.removeItem('letter-typed');
  }

  const instant = !shouldAnimate || phase >= 4 || alreadyTyped;

  return (
    <section id="letter" aria-labelledby="letter-heading" ref={sectionRef} className="relative z-10 bg-cream py-24 px-5 md:px-8">
      <div className="mx-auto max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="font-hand text-[1.05rem] text-ink-faded tracking-wide mb-1">a private letter</div>
          <h2 id="letter-heading" className="font-display italic font-medium text-deep-wine" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
            The Letter
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative bg-paper rounded-sm p-8 md:p-12"
          style={{
            boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 6px 24px rgba(0,0,0,0.12), inset 0 0 60px rgba(74,24,34,0.04)',
          }}
        >
          {/* gold corner ornaments */}
          {['-top-0.5 -left-0.5', '-top-0.5 -right-0.5 rotate-90', '-bottom-0.5 -right-0.5 rotate-180', '-bottom-0.5 -left-0.5 -rotate-90'].map((pos, i) => (
            <svg key={i} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"
              className={`absolute ${pos}`}>
              <path d="M2 26 L2 2 L26 2" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          ))}

          {/* date */}
          <p className="font-hand text-[1.1rem] text-ink-faded text-right mb-6">
            {instant ? letter.date : dateText.displayed}
            {!instant && phase === 0 && <span className="caret" aria-hidden="true" />}
          </p>

          {/* greeting */}
          {(instant || phase >= 1) && (
            <p className="font-display italic text-deep-wine text-[1.2rem] mb-4">
              {instant ? letter.greeting : greetText.displayed}
              {!instant && phase === 1 && <span className="caret" aria-hidden="true" />}
            </p>
          )}

          {/* body paragraphs */}
          {(instant || phase >= 2) && (
            <BodyTypewriter
              paragraphs={letter.paragraphs}
              instant={instant}
              active={phase === 2}
              onDone={() => setPhase(3)}
            />
          )}

          {/* signature */}
          {(instant || phase >= 3) && (
            <motion.p
              initial={instant ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-hand text-[1.2rem] text-ink-soft text-right mt-6 -rotate-2"
              onAnimationComplete={() => setPhase(4)}
            >
              {letter.signature}
            </motion.p>
          )}
        </motion.div>

        <div className="text-center mt-6">
          <button
            onClick={doReplay}
            className="font-hand text-[1rem] text-ink-faded hover:text-ink-soft transition-colors duration-200 underline underline-offset-2"
          >
            replay
          </button>
        </div>
      </div>
    </section>
  );
}

function BodyTypewriter({
  paragraphs,
  instant,
  active,
  onDone,
}: {
  paragraphs: string[];
  instant: boolean;
  active: boolean;
  onDone: () => void;
}) {
  const full = paragraphs.join('\n\n');
  const [displayed, setDisplayed] = useState(instant ? full : '');
  const [done, setDone] = useState(instant);

  useEffect(() => {
    if (instant || !active) return;
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(full.slice(0, ++i));
      if (i >= full.length) {
        clearInterval(id);
        setDone(true);
        onDone();
      }
    }, CHAR_DELAY_BODY);
    const skip = () => { clearInterval(id); setDisplayed(full); setDone(true); onDone(); };
    window.addEventListener('keydown', skip, { once: true });
    return () => { clearInterval(id); window.removeEventListener('keydown', skip); };
  }, [active, instant, full, onDone]);

  return (
    <div className="space-y-4">
      {(instant ? paragraphs : displayed.split('\n\n')).map((para, i) => (
        <p key={i} className="font-editorial text-ink text-[1.1rem] leading-[1.85] max-w-[60ch]">
          {para}
          {!instant && !done && i === displayed.split('\n\n').length - 1 && (
            <span className="caret" aria-hidden="true" />
          )}
        </p>
      ))}
    </div>
  );
}
