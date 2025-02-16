import Sparkles from '@/lib/sparkle';
import Squiggle from '@/components/graphics/squiggle';

import Link from 'next/link';
export default function Home() {
  return (
      <main className="max-w-5xl">
        <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start  relative'>
          <Squiggle 
            color="#fff" 
            className="absolute -top-[2rem] -left-16 -z-10"
          />
          <h1 className="text-7xl font-medium text-balance">
            Crafting digital experiences{" "} 
            <Sparkles 
              maxSparkles={3} 
              pattern="random"
              animationDuration={1000}
              minSize={25}
              maxSize={50}
            >
            worthy of legend
            </Sparkles>
          </h1>

          <h2 className="text-2xl font-medium text-balance max-w-3xl inline-block">
            I set the vision, create the structure, and adapt as the story unfolds—whether that&apos;s a <Link href="/design-systems" className='underline text-blue-600 whitespace-nowrap'>design system</Link>, a <Link href="/websites" className='underline text-blue-600 whitespace-nowrap'>website</Link>, or an <Link href="/awards" className='underline text-blue-600 no-wrap'>award-winning project</Link>.
          </h2>
        </div>
      </main>
  );
}