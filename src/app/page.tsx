'use client';

import Sparkles from '@/lib/sparkle';
import Squiggle from '@/components/graphics/squiggle';
import Link from 'next/link';
import Framed from '@/assets/images/framed.png';
import Image from 'next/image';
import SkillsCard from '@/components/ui/SkillsCard';
import TestimonialsGrid from '@/components/layout/testimonials';

export default function Home() {
  return (
      <main className="">
        <div className='px-16 py-8 flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-6xl relative'>
          <Squiggle 
            className="absolute -top-[0rem] -left-4 -z-10 text-white"
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

          <h2 className="text-3xl font-medium text-balance max-w-4xl inline-block">
            I set the vision, create the structure, and adapt as the story unfolds—whether that&apos;s a <Link href="/design-systems" className='underline text-blue-600 whitespace-nowrap'>design system</Link>, a <Link href="/websites" className='underline text-blue-600 whitespace-nowrap'>website</Link>, or an <Link href="/awards" className='underline text-blue-600 no-wrap'>award-winning project</Link>.
          </h2>
        </div>

        <TestimonialsGrid />

        <div className="mt-16 ps-16 pb-32 bg-blue-700 min-h-[700px] text-blue-100">
          <Image src={Framed} alt="Framed" className="w-full h-auto max-w-[800px] float-end" />
          <h2 className="text-4xl font-medium text-balance max-w-4xl leading-normal pt-64">
            <span className="text-6xl">Lead.<br/> Design.<br/> Storytell.<br/></span> Elevate Your Digital Experience.
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pe-16 max-w-6xl">
            <SkillsCard
              title="Expert leadership to transform your creative team"
              description="I transform creative teams into well-balanced groups that collaborate effectively and play to their strengths. With the right leadership and strategy, I help teams level up in efficiency, teamwork, and job satisfaction."
            />
            <SkillsCard
              className="mt-32"
              title="Content design that drives action"
              description="Storytelling is strategy. I design content that guides users seamlessly, keeping them engaged and informed. Whether refining messaging, structuring information, or crafting compelling content, I help make every word count."
            />
            <SkillsCard
              className="mt-16"
              title="Design systems for scalable, cohesive experiences"
              description="Great design systems give teams confidence and clarity. I build flexible, accessible systems that bridge design and development for a seamless workflow. Whether you need a new system, a refresh, or better adoption, I'll help you create a system that works—so you can focus on creating, not reinventing."
            />
          </ul>
        </div>
      </main>
  );
}