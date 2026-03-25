
import React from 'react';
import type { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-unfold">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-primary tracking-tighter !leading-tight">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-secondary">
            {content.subtitle}
          </p>
          <div className="mt-10 flex justify-center items-center gap-4">
            <a 
              href="https://cal.eu/getagenzia/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-brand-primary text-white text-base font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              {content.cta}
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
