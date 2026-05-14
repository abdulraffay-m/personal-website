// src/components/MusicToggle.tsx
import { useState, useEffect, useRef } from 'react';
import { getAmbient, getMusicState, setMusicState } from '../lib/audio';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [wantsPlay, setWantsPlay] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const pref = getMusicState();
    if (pref === 'on') {
      setWantsPlay(true);
      const handler = () => {
        if (!startedRef.current) {
          startedRef.current = true;
          getAmbient().play();
          setPlaying(true);
        }
      };
      document.addEventListener('click', handler, { once: true });
      document.addEventListener('touchstart', handler, { once: true });
      return () => {
        document.removeEventListener('click', handler);
        document.removeEventListener('touchstart', handler);
      };
    }
  }, []);

  function toggle() {
    const ambient = getAmbient();
    if (playing) {
      ambient.pause();
      setPlaying(false);
      setWantsPlay(false);
      setMusicState('off');
    } else {
      ambient.play();
      setPlaying(true);
      setWantsPlay(true);
      startedRef.current = true;
      setMusicState('on');
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? 'pause music' : 'play music'}
      className="fixed top-5 right-5 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
      style={{
        background: '#6B2C39',
        boxShadow: '0 4px 12px rgba(74,24,34,0.25)',
      }}
      title={playing ? 'music on' : 'music off'}
    >
      {/* vinyl grooves */}
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true"
        style={{
          animation: playing ? 'spin-vinyl 4s linear infinite' : 'none',
        }}
      >
        <circle cx="28" cy="28" r="27" fill="#6B2C39" />
        <circle cx="28" cy="28" r="22" fill="none" stroke="#4A1822" strokeWidth="3" opacity="0.5" />
        <circle cx="28" cy="28" r="16" fill="none" stroke="#4A1822" strokeWidth="3" opacity="0.4" />
        <circle cx="28" cy="28" r="10" fill="none" stroke="#4A1822" strokeWidth="3" opacity="0.3" />
        <circle cx="28" cy="28" r="5" fill="#FFFCF5" />
        <circle cx="28" cy="28" r="2" fill="#3D2E2A" />
      </svg>
      {/* wants-to-play indicator */}
      {wantsPlay && !playing && (
        <span
          className="absolute top-1 right-1 w-2 h-2 rounded-full bg-dusty-rose"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
