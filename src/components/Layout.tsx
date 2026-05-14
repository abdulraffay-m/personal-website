// src/components/Layout.tsx
import PaperNoise from './PaperNoise';
import Petals from './Petals';
import ScrollProgressGold from './ScrollProgressGold';
import MusicToggle from './MusicToggle';
import SideNav from './SideNav';
import MobileNav from './MobileNav';

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="bg-cream text-ink min-h-screen relative overflow-x-hidden">
      <a href="#counter" className="skip-link">skip to content</a>
      <PaperNoise />
      <Petals />
      <ScrollProgressGold />
      <MusicToggle />
      <SideNav />
      <MobileNav />
      <main className="relative z-10 pb-16 lg:pb-0">
        {children}
      </main>
    </div>
  );
}
