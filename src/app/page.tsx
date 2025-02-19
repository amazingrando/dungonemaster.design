'use client';

import TestimonialsGrid from '@/components/sections/testimonials';
import HomeHero from '@/components/sections/homehero';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
      <main className="">
        <HomeHero />
        <TestimonialsGrid />
        <Skills />
        Foo
      </main>
  );
}