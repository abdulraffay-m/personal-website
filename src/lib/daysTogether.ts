// src/lib/daysTogether.ts
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

export function timeTogether(since: Date | string) {
  const start = typeof since === 'string' ? new Date(since) : since;
  const now = new Date();
  return {
    days:    differenceInDays(now, start),
    hours:   differenceInHours(now, start),
    minutes: differenceInMinutes(now, start),
    seconds: differenceInSeconds(now, start),
  };
}

export function timeUntil(target: Date | string) {
  const end = typeof target === 'string' ? new Date(target) : target;
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const totalSeconds = Math.floor(diff / 1000);
  const s = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const m = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const h = totalHours % 24;
  const d = Math.floor(totalHours / 24);
  return { d, h, m, s };
}
