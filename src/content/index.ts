// src/content/index.ts — re-exports with placeholder fallbacks
import { people as real_people } from './people';
import { timeline as real_timeline } from './timeline';
import { gallery as real_gallery } from './gallery';
import { letter as real_letter } from './letter';
import { reasons as real_reasons } from './reasons';
import { playlist as real_playlist } from './playlist';
import { places as real_places } from './places';
import { quiz as real_quiz } from './quiz';
import { future as real_future } from './future';
import { secret as real_secret } from './secret';
import {
  peoplePh,
  timelinePh,
  galleryPh,
  letterPh,
  reasonsPh,
  playlistPh,
  placesPh,
  quizPh,
  futurePh,
  secretPh,
} from './placeholders';

export const people    = real_people   ?? peoplePh;
export const timeline  = real_timeline.length  ? real_timeline  : timelinePh;
export const gallery   = real_gallery.length   ? real_gallery   : galleryPh;
export const letter    = real_letter   ?? letterPh;
export const reasons   = real_reasons.length   ? real_reasons   : reasonsPh;
export const playlist  = real_playlist.length  ? real_playlist  : playlistPh;
export const places    = real_places.length    ? real_places    : placesPh;
export const quiz      = real_quiz.length      ? real_quiz      : quizPh;
export const future    = real_future.length    ? real_future    : futurePh;
export const secret    = real_secret   ?? secretPh;
