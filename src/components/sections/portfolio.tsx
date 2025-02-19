import yalesites from '@/assets/images/portfolio/yalesites.jpg';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="px-16 py-8 pt-16 bg-blue-950 text-blue-100 min-h-[700px]">
      <h2 className="text-7xl font-medium text-balance mb-12">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">

        <article
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 max-w-xl group"
        >
          <Image 
            alt="Yale sites preview"
            src={yalesites}
            fill
            priority
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:via-gray-900/70 transition-all duration-300" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <h3 className="mt-3 mb-4 text-3xl font-semibold text-balance ">
            <a href="/">
              <span className="absolute inset-0" />
              All new Yale sites use the design system I established
            </a>
          </h3>
          <p className="text-xl text-balance">Yale has more than a thousand websites, and now, with its first digital design system, it can keep them all on brand.</p>
        </article>

        <article
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 max-w-xl"
        >
          <Image 
            alt="Yale sites preview"
            src={yalesites}
            fill
            priority
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <h3 className="mt-3 text-2xl font-semibold text-white">
            <a href="/">
              <span className="absolute inset-0" />
              All new Yale sites use the design system I established
            </a>
          </h3>
        </article>

      </div>
    </div>
  );
};

export default Portfolio;