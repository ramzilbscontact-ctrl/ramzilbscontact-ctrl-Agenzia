
import React from 'react';
import type { Content } from '../types';

interface ProblemProps {
  content: Content['problem'];
}

const Problem: React.FC<ProblemProps> = ({ content }) => {
  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-brand-secondary">
            {content.description}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.cards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-tactile-md transition-shadow duration-300">
              <h3 className="text-xl font-black text-brand-primary tracking-tighter">{card.title}</h3>
              <p className="mt-2 text-brand-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
