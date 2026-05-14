// src/pages/Home.tsx
import Intro from '../sections/Intro';
import Counter from '../sections/Counter';
import Timeline from '../sections/Timeline';
import Gallery from '../sections/Gallery';
import Letter from '../sections/Letter';
import Reasons from '../sections/Reasons';
import Playlist from '../sections/Playlist';
import MemoryMap from '../sections/MemoryMap';
import Quiz from '../sections/Quiz';
import Future from '../sections/Future';
import Outro from '../sections/Outro';

export default function Home() {
  return (
    <>
      <Intro />
      <Counter />
      <Timeline />
      <Gallery />
      <Letter />
      <Reasons />
      <Playlist />
      <MemoryMap />
      <Quiz />
      <Future />
      <Outro />
    </>
  );
}
