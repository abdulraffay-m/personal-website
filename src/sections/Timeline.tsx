import { motion, type Variants } from 'motion/react';
import { timeline } from '../content';
import Section from '../components/Section';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const phColors = ['#E8DFC8', '#DCCFB8', '#EAD9C0', '#E2D4BC', '#DDD0B5'];

export default function Timeline() {
  return (
    <Section id="timeline" eyebrow="our story · since the beginning" title="Two Years in Moments">
      <div className="relative max-w-[760px] mx-auto">
        {/* vertical spine */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, #C9A961 8%, #C9A961 92%, transparent)' }}
          aria-hidden="true"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {timeline.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={child}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* card */}
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                  <div className="bg-ivory rounded-xl p-5 shadow-[0_4px_12px_rgba(74,24,34,0.08)] inline-block w-full text-left">
                    <p className="font-hand text-[1.05rem] text-dusty-rose mb-1">{event.date}</p>
                    <h3 className="font-display italic font-medium text-deep-wine text-[1.2rem] mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-ink-soft text-[0.95rem] leading-relaxed">
                      {event.body}
                    </p>
                    {event.photo && (
                      <img
                        src={event.photo}
                        alt={event.title}
                        loading="lazy"
                        decoding="async"
                        className="mt-3 w-20 h-20 object-cover rounded-sm"
                        style={{ filter: 'saturate(0.95) sepia(0.08) contrast(1.05)' }}
                      />
                    )}
                    {!event.photo && (
                      <div
                        className="mt-3 w-16 h-16 rounded-sm flex items-center justify-center"
                        style={{ background: phColors[i % phColors.length] }}
                      >
                        <span className="font-hand text-[0.75rem] text-ink-faded">
                          memory
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* spine dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gold-soft items-center justify-center z-10"
                  style={{ background: '#C9A961' }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
