import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';

import Capability from '@/components/sections/Capability';
import Others from '@/components/sections/Others';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Capability />
      <Others />
      <Projects />
    </main>
  );
}
