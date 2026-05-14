// src/content/placeholders.ts — all placeholder content in brand voice
import type { People, TimelineEvent, Photo, Letter, Song, Place, Question, Dream, SecretMoment } from '../types';

export const peoplePh: People = {
  her: { name: 'Zarpash', initial: 'Z' },
  me: { name: 'Raffay', initial: 'R' },
  tagline: "and we've not gotten bored once.",
  metAt: '2023-11-12T18:30:00',
  togetherSince: '2024-05-14T00:00:00',
  nextAnniversary: '2027-05-14T00:00:00',
};

export const timelinePh: TimelineEvent[] = [
  {
    date: 'November 2023',
    title: 'the first time',
    body: "we met and i noticed the way you laugh before the punchline lands. i thought about that for weeks.",
  },
  {
    date: 'December 2023',
    title: 'the long walk',
    body: "we walked for three hours and forgot to check the time. that was the first sign.",
  },
  {
    date: 'January 2024',
    title: 'the phone call that went until 3am',
    body: 'i had work at eight. i did not care.',
  },
  {
    date: 'March 2024',
    title: 'when i knew',
    body: "it was something small. you were reading and the light was falling across your face and i thought — yes. that's the one.",
  },
  {
    date: 'May 14, 2024',
    title: 'the fourteenth of may',
    body: "the day we made it official. you wore that thing you always wear when you want to look like you're not trying.",
  },
  {
    date: 'July 2024',
    title: 'the argument we never finished',
    body: "i don't even remember what it was about. i remember we laughed at the end of it.",
  },
  {
    date: 'September 2024',
    title: 'the trip',
    body: 'somewhere neither of us had been. we got a little lost and that was, somehow, the best part.',
  },
  {
    date: 'December 2024',
    title: "the first new year's",
    body: 'you fell asleep before midnight and i sat with you and thought this is exactly right.',
  },
  {
    date: 'February 2025',
    title: 'the ordinary tuesday',
    body: 'nothing happened. we just had chai and talked about nothing. i think about that day a lot.',
  },
  {
    date: 'May 14, 2026',
    title: 'two years',
    body: "here we are. still not bored. still finding new things. that's the whole thing, really.",
  },
];

export const galleryPh: Photo[] = [
  { src: '', caption: 'that morning', rotate: -4 },
  { src: '', caption: 'the light was good', rotate: 3 },
  { src: '', caption: 'somewhere in between', rotate: -6 },
  { src: '', caption: "you didn't know i took this", rotate: 5 },
  { src: '', caption: 'the drive back', rotate: -2 },
  { src: '', caption: 'when you laughed at something stupid i said', rotate: 7 },
  { src: '', caption: 'golden hour, obviously', rotate: -5 },
  { src: '', caption: 'that cafe', rotate: 3 },
  { src: '', caption: 'the quiet one', rotate: -3 },
  { src: '', caption: 'trying to be candid', rotate: 6 },
  { src: '', caption: 'we were running late here', rotate: -7 },
  { src: '', caption: "but we didn't care", rotate: 2 },
];

export const letterPh: Letter = {
  date: 'the fourteenth of may',
  greeting: 'my love,',
  paragraphs: [
    "two years is a strange thing to count. it sounds small said out loud. but then you do the math — the days, the hours, the thousand small moments that don't have names — and it stops being small. it becomes this enormous, quiet accumulation of you.",
    "i've been trying to write this for a while. i keep starting and then deleting because nothing sounds right. the right words are always the ones that happen accidentally, mid-sentence, when you're not trying. this is me trying, so forgive me if it doesn't land perfectly.",
    "what i know is this: i like who i am when i'm near you. not a better version of myself, not a corrected one — just more like myself. more at ease. less in a hurry. you did that without meaning to, which is the most impressive thing anyone has ever done for me.",
    "so. two years. and I'd choose them again, every single one of the days. even the ordinary tuesdays. especially the ordinary tuesdays.",
  ],
  signature: '— ibrahim',
};

export const reasonsPh: string[] = [
  'the way you laugh before the punchline',
  'that you remember the small things i mention once',
  'how you take your chai exactly the same way every time',
  'the face you make when something surprises you',
  'how you argue a point and then immediately see the other side',
  "that you don't need me to fill every silence",
  "the way you say my name when you're calling me from another room",
  'how seriously you take things that deserve to be taken seriously',
  'and how lightly you hold the rest',
  "that you always ask how i'm doing and actually wait for the answer",
  'the three-second delay before you laugh at something dark',
  "how you look when you're concentrating on something",
  'the fact that you know exactly when to say nothing',
  "that you're strange in exactly the ways i find endearing",
  "how you apologize first even when it wasn't your fault",
  "the version of me that exists when you're around",
  'how you notice things other people walk past',
  "that you're brave in the ways that actually count",
  'the morning version of you',
  'and the 2am version too',
  'that you chose this, every day, without making it feel like a choice',
  'the way you look when you think no one is watching',
  'how you find the funny in the worst possible timing',
  "that you have opinions about things and aren't shy about them",
  'this. all of this. just — you.',
];

export const playlistPh: Song[] = [
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    url: 'https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99',
    note: 'you know why',
  },
  {
    title: 'Die With A Smile',
    artist: 'Lady Gaga & Bruno Mars',
    url: 'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe',
    note: 'the one that came on at exactly the right moment',
  },
  {
    title: 'Cornfield Chase',
    artist: 'Hans Zimmer',
    url: 'https://open.spotify.com/track/1yCPGzSmNBsCWBQGgLCeLp',
    note: "for the drives when we didn't talk much",
  },
  {
    title: 'The Night Will Always Win',
    artist: 'Manchester Orchestra',
    url: 'https://open.spotify.com/track/4wbDP3zYVp0K2mSBZSo3g4',
  },
  {
    title: 'Bloom',
    artist: 'The Paper Kites',
    url: 'https://open.spotify.com/track/78eWnqeuaB2bpGsK3ISGOH',
    note: 'this one made you quiet for a moment',
  },
  {
    title: 'A Thousand Years',
    artist: 'Christina Perri',
    url: 'https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl',
  },
];

export const placesPh: Place[] = [
  { name: 'Lahore', memory: 'where this started, technically', xPct: 55, yPct: 28 },
  { name: 'Islamabad', memory: 'the long drive to get there was better', xPct: 50, yPct: 22 },
  { name: 'Murree', memory: "you were cold the whole time and pretended not to be", xPct: 51, yPct: 19 },
  { name: 'Karachi', memory: "the one trip we almost didn't take", xPct: 38, yPct: 62 },
  { name: 'Faisalabad', memory: 'neither of us expected to like it', xPct: 48, yPct: 35 },
  { name: 'Nathiagali', memory: 'the fog rolled in and we stayed longer than planned', xPct: 51, yPct: 18 },
];

export const quizPh: Question[] = [
  {
    question: 'what did i order the first time we got food together?',
    options: ['whatever you were having', 'something embarrassingly safe', 'the spiciest thing on the menu', "i said i wasn't hungry"],
    answerIndex: 1,
    note: 'i was trying to seem low-maintenance.',
  },
  {
    question: 'where did we go on our first real outing?',
    options: ['a cafe downtown', 'a walk by the canal', 'a bookshop', 'nowhere — we just drove'],
    answerIndex: 3,
    note: "the destination wasn't really the point.",
  },
  {
    question: 'what do i always notice first when i walk into a room?',
    options: ['where the exits are', 'where you are', "who's the loudest person", 'whether the lighting is good'],
    answerIndex: 1,
  },
  {
    question: 'which of these describes the way i take my chai?',
    options: ['very sweet, a little milky', 'no sugar, just black', 'however you make it', 'i actually prefer coffee'],
    answerIndex: 2,
    note: 'true and not even a little embarrassing.',
  },
  {
    question: "what's the thing i'm most likely to be doing at 11pm?",
    options: ['asleep already', 'texting you', 'reading something', "watching something i've seen before"],
    answerIndex: 1,
  },
  {
    question: 'when you said something that made me laugh unexpectedly — what was it about?',
    options: ['something serious delivered perfectly deadpan', "a pun i didn't see coming", 'a story from your day', 'you were making fun of me, gently'],
    answerIndex: 0,
    note: 'you do this often and it never gets old.',
  },
  {
    question: 'which of these words would i use to describe the best version of us?',
    options: ['easy', 'electric', 'surprising', 'inevitable'],
    answerIndex: 0,
  },
  {
    question: "what's the thing i'm worst at admitting?",
    options: ['being wrong', 'being tired', 'being worried', 'being glad'],
    answerIndex: 2,
  },
  {
    question: 'which of these moments would i replay if i could?',
    options: ['the first conversation', 'the first time we were just quiet together', 'any ordinary tuesday', "something i haven't told you yet"],
    answerIndex: 2,
    note: 'the ordinary tuesdays are the whole thing.',
  },
  {
    question: 'what does the next year look like?',
    options: ["i'm not sure, and that's fine", "better, because you'll be in it", 'the same, because same is good', "we'll figure it out when we get there"],
    answerIndex: 1,
  },
];

export const futurePh: Dream[] = [
  { id: 'trip-north', text: 'road trip to the northern areas, no itinerary', done: false },
  { id: 'cook-proper', text: 'cook an actual meal together, not just chai', done: true },
  { id: 'sunrise', text: 'watch a sunrise without having stayed up for it', done: false },
  { id: 'book-swap', text: 'finally finish the book-swap we started', done: false },
  { id: 'rain-walk', text: 'walk in the rain and not run for cover', done: true },
  { id: 'three-years', text: 'get to year three and build something like this again', done: false },
];

export const secretPh: { intro: string; moments: SecretMoment[]; closing: string } = {
  intro: 'you found the flower. of course you did.',
  moments: [
    { src: '', caption: "you were reading and didn't know i was looking" },
    { src: '', caption: 'the exact moment you decided to trust me' },
    { src: '', caption: 'when you laughed at something only we would understand' },
    { src: '', caption: 'the drive home, window down, you not saying anything' },
    { src: '', caption: 'this one. just — this one.' },
  ],
  closing: "there are things that happen between two people that don't have photographs. moments that existed only in the air between you and then were gone. i've been trying to collect them anyway. this is the closest i could get. you deserved to find them.",
};
