// src/components/Polaroid.tsx
import { motion } from 'motion/react';

type Props = {
  src?: string;
  caption: string;
  rotate?: number;
  tapeColor?: 'cream' | 'rose' | 'gold';
  onOpen?: () => void;
  index?: number;
};

const phColors = [
  'linear-gradient(135deg, #E8DFC8, #DCC5B8)',
  'linear-gradient(135deg, #DCCFB8, #C9A98F)',
  'linear-gradient(135deg, #EAD9C0, #DDD0B5)',
  'linear-gradient(135deg, #E2D4BC, #C9A961)',
  'linear-gradient(135deg, #DDD0B5, #E8C5B8)',
];

const tapeColors: Record<string, string> = {
  cream: 'rgba(255,252,245,0.85)',
  rose:  'rgba(200,154,143,0.6)',
  gold:  'rgba(201,169,97,0.6)',
};

export default function Polaroid({ src, caption, rotate = 0, tapeColor = 'cream', onOpen, index = 0 }: Props) {
  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      style={{ rotate, transformOrigin: 'center center' }}
      whileHover={{ rotate: 0, scale: 1.05, translateY: -4, zIndex: 10 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.15}
      whileDrag={{ scale: 1.08, zIndex: 20 }}
      onClick={onOpen}
    >
      {/* tape */}
      <div
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 z-10"
        style={{ background: tapeColors[tapeColor], transform: 'translateX(-50%) rotate(-1deg)' }}
      />

      <div
        className="bg-ivory p-3 pb-10"
        style={{
          boxShadow: '0 6px 14px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        }}
      >
        {/* photo area */}
        <div className="w-[140px] h-[140px] overflow-hidden">
          {src ? (
            <img
              src={src}
              alt={caption}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.95) sepia(0.08) contrast(1.05)' }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{ background: phColors[index % phColors.length] }}
              aria-hidden="true"
            />
          )}
        </div>
        {/* caption */}
        <div className="font-hand text-ink-soft text-center mt-2 text-[1.05rem] -rotate-1 px-1">
          {caption}
        </div>
      </div>
    </motion.div>
  );
}
