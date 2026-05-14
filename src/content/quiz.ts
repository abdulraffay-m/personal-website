// src/content/quiz.ts — the real quiz
import type { Question } from '../types';

export const quiz: Question[] = [
  {
    question: "On a scale of 1–10, how obsessed am I with you?",
    options: [
      "7",
      "9",
      "10",
      "Can't be expressed in numbers",
    ],
    answerIndex: 3,
    note: "Numbers were invented by humans. My obsession with you is not a human thing.",
  },
  {
    question: "What's my most used emoji when texting you?",
    options: [
      "❤️",
      "😂",
      "😭",
      "😍",
    ],
    answerIndex: 2,
    note: "Yes, I am literally always crying over you. Emotionally. Constantly.",
  },
  {
    question: "What's my love language?",
    options: [
      "Acts of Service",
      "Quality Time",
      "Physical Touch",
      "Words of Affirmation",
    ],
    answerIndex: 3,
    note: "Say it out loud. Say it again. Once more. I need to hear it.",
  },
  {
    question: "Where was the first photo we ever took together?",
    options: [
      "On a random walk near myplace",
      "At a rooftop dinner",
      "Outside a coffee shop after our first outing",
      "At the Omar Mukhtar concert, Section C110",
    ],
    answerIndex: 3,
    note: "C110. I'd recognize that night anywhere.",
  },
  {
    question: "What was the first movie we watched together?",
    options: [
      "Interstellar",
      "The Notebook",
      "Shrek",
      "The Lion King",
    ],
    answerIndex: 3,
    note: "Hakuna Matata. Except we were fighting lol.",
  },
];
