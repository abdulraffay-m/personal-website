// src/components/ScrollProgressGold.tsx
import { useScroll, useTransform, motion } from 'motion/react';

export default function ScrollProgressGold() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px]"
      style={{ background: 'rgba(201,169,97,0.15)' }}
      aria-hidden="true"
    >
      <motion.div
        className="h-full"
        style={{
          width,
          background: 'linear-gradient(90deg, #C9A961, #DCC58A)',
        }}
      />
    </div>
  );
}
