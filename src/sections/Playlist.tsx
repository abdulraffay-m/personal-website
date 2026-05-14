// src/sections/Playlist.tsx
import { motion } from 'motion/react';
import { playlist } from '../content';
import Section from '../components/Section';

export default function Playlist() {
  return (
    <Section id="playlist" eyebrow="what was playing" title="Our Songs" bg="paper">
      <div
        className="rounded-xl p-6 md:p-10 max-w-[640px] mx-auto"
        style={{
          background: 'radial-gradient(ellipse at center, #F4E9D4 0%, #EAD9C0 100%)',
          boxShadow: '0 4px 12px rgba(74,24,34,0.08)',
        }}
      >
        <div className="flex flex-col divide-y divide-blush/40">
          {playlist.map((song, i) => (
            <PlaylistRow key={i} song={song} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function PlaylistRow({ song, index }: { song: (typeof playlist)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-start gap-4 py-4"
    >
      {/* spinning vinyl */}
      <div
        className="mt-1 shrink-0"
        aria-hidden="true"
        style={{
          animation: 'none',
        }}
      >
        <svg
          width="28" height="28" viewBox="0 0 28 28" fill="none"
          className="transition-all duration-300 group-hover:[animation:spin-vinyl_2s_linear_infinite]"
        >
          <circle cx="14" cy="14" r="13" fill="#3D2E2A" />
          <circle cx="14" cy="14" r="9"  fill="none" stroke="#6B5852" strokeWidth="2" opacity="0.4" />
          <circle cx="14" cy="14" r="5"  fill="none" stroke="#6B5852" strokeWidth="2" opacity="0.3" />
          <circle cx="14" cy="14" r="2.5" fill="#FFFCF5" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-display italic text-deep-wine text-[1.1rem] leading-snug">
          {song.title}
        </p>
        <p className="font-body text-ink-faded text-[0.9rem] mt-0.5">{song.artist}</p>
        {song.note && (
          <p className="font-hand text-[0.95rem] text-ink-soft mt-1 -rotate-1">{song.note}</p>
        )}
      </div>

      <a
        href={song.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 self-center font-body text-[0.8rem] text-ink-faded border border-ink-faded rounded-full px-3 py-1 hover:border-deep-wine hover:text-deep-wine transition-all duration-200"
        aria-label={`open ${song.title} by ${song.artist}`}
      >
        ↗ listen
      </a>
    </motion.div>
  );
}
