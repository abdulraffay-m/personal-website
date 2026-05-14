// src/lib/audio.ts
import { Howl } from 'howler';

let ambient: Howl | null = null;

export function getAmbient() {
  if (!ambient) {
    ambient = new Howl({
      src: ['/ambient.mp3'],
      loop: true,
      volume: 0.85,
    });
  }
  return ambient;
}

export const audioPrefKey = 'music:state';

export function getMusicState(): 'on' | 'off' {
  return (localStorage.getItem(audioPrefKey) as 'on' | 'off') || 'off';
}

export function setMusicState(s: 'on' | 'off') {
  localStorage.setItem(audioPrefKey, s);
}
