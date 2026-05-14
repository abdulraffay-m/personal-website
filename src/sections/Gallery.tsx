// src/sections/Gallery.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gallery } from '../content';
import { polaroidOpened, setPolaroidOpened } from '../lib/sessionFlags';
import { softGoldDust } from '../lib/confetti';
import Polaroid from '../components/Polaroid';
import Section from '../components/Section';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const opened = useRef(false);

  useEffect(() => {
    opened.current = polaroidOpened();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function openPhoto(i: number) {
    setLightbox(i);
    if (!opened.current) {
      opened.current = true;
      setPolaroidOpened();
      setTimeout(() => softGoldDust({ x: 0.5, y: 0.4 }), 200);
    }
  }

  const photo = lightbox !== null ? gallery[lightbox] : null;

  const phColors = [
    'linear-gradient(135deg, #E8DFC8, #DCC5B8)',
    'linear-gradient(135deg, #DCCFB8, #C9A98F)',
    'linear-gradient(135deg, #EAD9C0, #DDD0B5)',
    'linear-gradient(135deg, #E2D4BC, #C9A961)',
    'linear-gradient(135deg, #DDD0B5, #E8C5B8)',
  ];

  return (
    <>
      <Section
        id="gallery"
        eyebrow="the photos you pretend to hate"
        title="The Wall"
        bg="paper"
      >
        <div
          className="relative rounded-xl p-8 md:p-12 min-h-[400px]"
          style={{ background: 'linear-gradient(135deg, #E8DEC9, #DDD0B5)' }}
        >
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-start">
            {gallery.map((photo, i) => (
              <Polaroid
                key={i}
                src={photo.src}
                caption={photo.caption}
                rotate={photo.rotate ?? (i % 2 === 0 ? -(i % 7 + 1) : (i % 5 + 1))}
                tapeColor={photo.tapeColor}
                onOpen={() => openPhoto(i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && photo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(244,233,212,0.95)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={photo.caption}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory p-4 pb-12 max-w-sm w-full text-center"
              style={{ boxShadow: '0 16px 32px rgba(0,0,0,0.18)' }}
              onClick={e => e.stopPropagation()}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover"
                  style={{ filter: 'saturate(0.95) sepia(0.08) contrast(1.05)' }}
                />
              ) : (
                <div
                  className="w-full aspect-square"
                  style={{ background: phColors[lightbox % phColors.length] }}
                />
              )}
              <p className="font-hand text-ink-soft text-[1.3rem] mt-4 -rotate-1">
                {photo.caption}
              </p>
            </motion.div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 font-body text-ink-faded text-sm hover:text-ink transition-colors"
              aria-label="close lightbox"
            >
              ✕ close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
