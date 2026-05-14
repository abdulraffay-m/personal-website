// src/components/Section.tsx
import { motion } from 'motion/react';

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  bg?: 'cream' | 'paper';
  className?: string;
};

export default function Section({ id, eyebrow, title, children, bg = 'cream', className = '' }: Props) {
  const bgClass = bg === 'paper' ? 'bg-paper' : 'bg-cream';
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`relative z-10 ${bgClass} py-24 px-5 md:px-8 ${className}`}
    >
      <div className="mx-auto max-w-[1100px]">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            {eyebrow && (
              <div className="font-hand text-[1.05rem] text-ink-faded tracking-wide mb-1">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                className="font-display italic font-medium text-deep-wine"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
              >
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
