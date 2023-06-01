// import React from 'react';
import { Header, Link, ArrowRight } from '../common/components';
import heroBg from '../common/images/hero-bg.jpeg';
import heroGrid from '../common/images/bg-grid.png';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            backgroundImage: `url(${heroGrid}), url(${heroBg})`,
          }}
          className="min-h-screen bg-blend-color-burn"
        >
          <div className="text-white lg:w-8/12 md:w-10/12 w-11/12 mx-auto pt-28 flex flex-col md:items-center md:text-center">
            <p className="font-kyiv font-light md:text-[32px] text-xl tracking-[-0.03em]">
              Join the Furrsible Family
            </p>
            <h1 className="font-kyiv md:font-bold font-medium md:text-[72px] text-4xl tracking-[-0.03em] md:leading-[86px] leading-[42px] my-4">
              Your Ultimate Pet Care Solution is{` `}
              <span className="block header-text">Coming Soon!</span>
            </h1>
            <h2 className="md:text-2xl text-2xl tracking-[-0.18px] lg:mx-[72px] md:mx-9 md:mb-10 mb-5">
              We&apos;re busy fetching balls, playing with feathers, and coding
              up a storm to bring you a tail-wagging pet care platform. Join our
              waitlist - it&apos;s gonna be paw-sitively amazing!
            </h2>
            <Link
              to="https://forms.gle/iVs3pJ8tSvxUgzoq8"
              className="flex items-center justify-center gap-x-2 border border-rose-600 bg-rose-600 shadow-sm py-3 px-10 rounded-full"
            >
              <span>Join Waitlist</span>
              <ArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-[#0A1718]"></footer>
    </>
  );
}
