// src/sections/index.ts — sections manifest
export const sections = [
  { id: 'intro',    label: 'the envelope',  icon: 'mail' },
  { id: 'counter',  label: 'days together', icon: 'clock' },
  { id: 'timeline', label: 'our story',     icon: 'milestone' },
  { id: 'gallery',  label: 'the wall',      icon: 'image' },
  { id: 'letter',   label: 'the letter',    icon: 'feather' },
  { id: 'reasons',  label: 'reasons',       icon: 'heart' },
  { id: 'playlist', label: 'our songs',     icon: 'disc' },
  { id: 'map',      label: 'places',        icon: 'mapPin' },
  { id: 'quiz',     label: 'how well',      icon: 'help' },
  { id: 'future',   label: 'someday',       icon: 'sparkles' },
  { id: 'outro',    label: 'the close',     icon: 'leaf' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
