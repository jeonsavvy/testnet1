import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import Career from '@/components/sections/Career';
import Certificate from '@/components/sections/Certificate';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Career />
      <Certificate />
      <Projects />
    </main>
  );
}
