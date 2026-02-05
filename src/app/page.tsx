import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';

import Skills from '@/components/sections/Skills';
import Others from '@/components/sections/Others';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Skills />
      <Others />
      <Projects />
    </main>
  );
}
