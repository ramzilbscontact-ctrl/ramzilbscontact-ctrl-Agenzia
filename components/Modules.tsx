
import React from 'react';
import type { Content } from '../types';

interface ModulesProps {
  content: Content['modules'];
}

const Modules: React.FC<ModulesProps> = ({ content }) => {
  const cardClasses = "bg-white p-8 rounded-2xl shadow-tactile-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col";

  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter">
            {content.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.cards.map((card, index) => (
            <div key={index} className={`${cardClasses} ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="flex-grow">
                 <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                  {card.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-primary">{card.title}</h3>
                <p className="mt-2 text-brand-secondary">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
