
import React from 'react';
import type { Content } from '../types';

interface RoadmapProps {
  content: Content['roadmap'];
}

const Roadmap: React.FC<RoadmapProps> = ({ content }) => {
  return (
    <section id="roadmap" className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-brand-secondary">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {content.phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary border-4 border-white shadow-tactile z-10" />

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-tactile-md hover:shadow-tactile-lg transition-shadow duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <span className="text-xs font-black tracking-widest uppercase text-brand-accent bg-blue-50 px-3 py-1 rounded-full">
                        {phase.phase}
                      </span>
                      <span className="text-xs font-semibold text-brand-secondary">
                        {phase.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-brand-primary tracking-tighter mb-4">
                      {phase.title}
                    </h3>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                      {phase.items.map((item, iIndex) => (
                        <li key={iIndex} className={`flex items-center gap-2 text-sm text-brand-secondary ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex items-center gap-2 pt-4 border-t border-gray-100 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <span className="text-xs font-black uppercase tracking-wider text-brand-accent">KPI</span>
                      <span className="text-sm font-semibold text-brand-primary">{phase.kpi}</span>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
