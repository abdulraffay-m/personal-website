// src/types.ts — canonical type shapes

export type TimelineEvent = {
  date: string;
  title: string;
  body: string;
  photo?: string;
  emoji?: string;
};

export type Photo = {
  src: string;
  caption: string;
  rotate?: number;
  tapeColor?: 'cream' | 'rose' | 'gold';
};

export type Song = {
  title: string;
  artist: string;
  url: string;
  note?: string;
};

export type Place = {
  name: string;
  memory: string;
  xPct: number;
  yPct: number;
  lat?: number;
  lng?: number;
};

export type Question = {
  question: string;
  options: string[];
  answerIndex: number;
  note?: string;
};

export type Dream = {
  id: string;
  text: string;
  done?: boolean;
};

export type SecretMoment = {
  src?: string;
  caption: string;
};

export type People = {
  her:  { name: string; initial: string };
  me:   { name: string; initial: string };
  tagline: string;
  metAt:           string;
  togetherSince:   string;
  nextAnniversary: string;
};

export type Letter = {
  date: string;
  greeting: string;
  paragraphs: string[];
  signature: string;
};
