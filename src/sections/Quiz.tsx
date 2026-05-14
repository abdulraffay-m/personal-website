// src/sections/Quiz.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quiz } from '../content';
import { bigCelebration } from '../lib/confetti';
import { usePrefersReducedMotion } from '../lib/reducedMotion';
import Section from '../components/Section';
import Button from '../components/Button';

const SESSION_KEY = 'quiz-progress';

type QuizState = {
  questionIndex: number;
  score: number;
  selected: number | null;
  finished: boolean;
};

function loadState(): QuizState {
  try {
    const s = sessionStorage.getItem(SESSION_KEY);
    if (s) return JSON.parse(s);
  } catch {}
  return { questionIndex: 0, score: 0, selected: null, finished: false };
}

function saveState(s: QuizState) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(s));
}

export default function Quiz() {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<QuizState>(loadState);
  const [resumed, setResumed] = useState(() => {
    const s = sessionStorage.getItem(SESSION_KEY);
    return !!s && JSON.parse(s).questionIndex > 0;
  });

  const q = quiz[state.questionIndex];

  useEffect(() => {
    saveState(state);
  }, [state]);

  function select(optionIndex: number) {
    if (state.selected !== null) return;
    const correct = optionIndex === q.answerIndex;
    const newScore = state.score + (correct ? 1 : 0);
    setState(s => ({ ...s, selected: optionIndex, score: newScore }));

    if (correct && state.questionIndex === quiz.length - 1) {
      setTimeout(() => {
        setState(s => ({ ...s, finished: true }));
        if (!reduced) bigCelebration();
      }, 800);
    } else if (correct) {
      setTimeout(() => advance(newScore), 800);
    }
  }

  function advance(_currentScore = state.score) {
    const next = state.questionIndex + 1;
    if (next >= quiz.length) {
      setState(s => ({ ...s, finished: true }));
      if (!reduced) bigCelebration();
    } else {
      setState(s => ({ ...s, questionIndex: next, selected: null }));
    }
  }

  function reset() {
    const fresh: QuizState = { questionIndex: 0, score: 0, selected: null, finished: false };
    sessionStorage.removeItem(SESSION_KEY);
    setState(fresh);
    setResumed(false);
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <Section id="quiz" eyebrow="let's find out" title="How Well Do We Know Us" bg="paper">
      {resumed && !state.finished && (
        <p className="text-center font-hand text-[1rem] text-ink-faded mb-6">
          picking up where you left off.
        </p>
      )}

      <div className="max-w-[520px] mx-auto">
        <AnimatePresence mode="wait">
          {state.finished ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory rounded-xl p-8 text-center relative"
              style={{ boxShadow: '0 4px 12px rgba(74,24,34,0.08)' }}
            >
              {/* gold corners */}
              {['-top-0.5 -left-0.5', '-top-0.5 -right-0.5 rotate-90', '-bottom-0.5 -right-0.5 rotate-180', '-bottom-0.5 -left-0.5 -rotate-90'].map((pos, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`absolute ${pos}`}>
                  <path d="M2 18 L2 2 L18 2" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              ))}
              <p className="font-display italic text-deep-wine text-[1.8rem] mb-2">
                You got {state.score} out of {quiz.length}.
              </p>
              <p className="font-hand text-[1.2rem] text-ink-soft mb-8">
                Frankly, you got us either way.
              </p>
              <Button variant="ghost" size="sm" onClick={reset}>try again</Button>
            </motion.div>
          ) : (
            <motion.div
              key={state.questionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory rounded-xl p-6 md:p-8 relative"
              style={{ boxShadow: '0 4px 12px rgba(74,24,34,0.08)' }}
            >
              {/* progress */}
              <p className="font-mono text-[0.85rem] text-ink-faded tabular-nums text-right mb-4">
                {pad(state.questionIndex + 1)} / {pad(quiz.length)}
              </p>

              {/* question */}
              <p className="font-display italic text-deep-wine text-[1.2rem] leading-snug mb-6">
                {q.question}
              </p>

              {/* options */}
              <div className="flex flex-col gap-3">
                {q.options.map((opt, i) => {
                  const selected = state.selected === i;
                  const correct = i === q.answerIndex;
                  const revealed = state.selected !== null;
                  const showCorrect = revealed && correct;
                  const showWrong = revealed && selected && !correct;

                  return (
                    <button
                      key={i}
                      onClick={() => select(i)}
                      disabled={revealed}
                      className="w-full text-left rounded-lg px-4 py-3 font-body text-[0.95rem] border transition-all duration-200"
                      style={{
                        background:   showCorrect ? '#C9A961' : showWrong ? '#E8C5B8' : 'transparent',
                        borderColor:  showCorrect ? '#C9A961' : showWrong ? '#C99A8F' : '#A89B95',
                        color:        showCorrect ? '#FFFCF5' : showWrong ? '#6B2C39' : '#3D2E2A',
                        cursor:       revealed ? 'default' : 'pointer',
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* wrong answer reveal */}
              {state.selected !== null && state.selected !== q.answerIndex && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-4"
                >
                  {q.note && (
                    <p className="font-hand text-[1rem] text-ink-soft mt-2 mb-4">{q.note}</p>
                  )}
                  <Button variant="ghost" size="sm" onClick={() => advance()}>
                    next →
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
