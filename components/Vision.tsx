
import React from 'react';
import type { Content } from '../types';

interface VisionProps {
  content: Content['vision'];
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const Vision: React.FC<VisionProps> = ({ content }) => {
  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tighter !leading-tight">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-secondary">
            {content.description}
          </p>
           <div className="mt-10 flex justify-center items-center gap-4">
            <a href="#" className="group inline-flex items-center justify-center gap-2 bg-brand-primary text-white text-base font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-md">
              {content.cta}
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
