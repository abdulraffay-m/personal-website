// src/sections/MemoryMap.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { places } from '../content';
import MapPinSVG from '../components/svg/MapPinSVG';
import Section from '../components/Section';

export default function MemoryMap() {
  const [active, setActive] = useState<number | null>(null);

  function toggle(i: number) {
    setActive(a => a === i ? null : i);
  }

  return (
    <Section id="map" eyebrow="places we've been" title="The Map">
      <div className="max-w-[700px] mx-auto">
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{
            paddingBottom: '70%',
            background: 'linear-gradient(145deg, #EAD9C0 0%, #DDD0B5 40%, #C9B89A 100%)',
            boxShadow: '0 4px 12px rgba(74,24,34,0.08)',
          }}
        >
          {/* Simplified Pakistan outline as SVG paths */}
          <svg
            viewBox="0 0 400 280"
            className="absolute inset-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Pakistan rough outline */}
            <path
              d="M70 40 L120 20 L160 30 L200 15 L240 25 L280 20 L320 40 L340 70 L350 100 L340 130 L320 160 L300 180 L280 200 L260 210 L240 230 L220 240 L200 250 L180 245 L160 250 L140 240 L120 220 L100 200 L80 170 L60 140 L50 110 L55 80 Z"
              fill="#C9B89A"
              fillOpacity="0.4"
              stroke="#A89B95"
              strokeWidth="1.5"
            />
            {/* Interior terrain lines */}
            <path d="M80 80 Q160 60 240 80 Q300 95 330 130" stroke="#A89B95" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
            <path d="M70 120 Q140 110 200 120 Q260 130 310 150" stroke="#A89B95" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
          </svg>

          {/* Pins */}
          {places.map((place, i) => {
            const x = (place.xPct / 100) * 100;
            const y = (place.yPct / 100) * 100;
            return (
              <div
                key={i}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -100%)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-label={place.name}
                  aria-expanded={active === i}
                  className="relative hover:scale-125 transition-transform duration-200"
                >
                  <MapPinSVG size={18} />
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 bottom-full mb-2 left-1/2 -translate-x-1/2"
                      style={{ minWidth: '140px' }}
                      role="tooltip"
                    >
                      {/* gold tether line */}
                      <svg
                        width="2" height="12"
                        viewBox="0 0 2 12"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-3"
                        aria-hidden="true"
                      >
                        <line x1="1" y1="0" x2="1" y2="12" stroke="#C9A961" strokeWidth="1.5" />
                      </svg>
                      <div
                        className="bg-ivory rounded-lg p-3 text-center"
                        style={{ boxShadow: '0 4px 12px rgba(74,24,34,0.12)', border: '1px solid rgba(201,169,97,0.3)' }}
                      >
                        <p className="font-hand text-[1rem] text-deep-wine font-medium">{place.name}</p>
                        <p className="font-hand text-[0.85rem] text-ink-soft mt-0.5">{place.memory}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="font-hand text-[1rem] text-ink-faded text-center mt-4">
          tap a pin to remember
        </p>
      </div>
    </Section>
  );
}
