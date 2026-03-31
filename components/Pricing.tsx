
import React from 'react';
import type { Content } from '../types';

interface PricingProps {
  content: Content['pricing'];
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const Pricing: React.FC<PricingProps> = ({ content }) => {
  return (
    <section id="pricing" className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-brand-secondary">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                tier.highlighted
                  ? 'shadow-tactile-lg ring-2 ring-brand-primary scale-105'
                  : 'shadow-tactile-md hover:shadow-tactile-lg'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Populaire
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-sm font-black tracking-widest uppercase text-brand-secondary">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-brand-primary tracking-tighter">
                    {tier.price}
                  </span>
                  <span className="text-brand-secondary text-sm">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-brand-secondary">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.eu/getagenzia/15min"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all ${
                  tier.highlighted
                    ? 'bg-brand-primary text-white hover:opacity-90 shadow-md'
                    : 'bg-gray-100 text-brand-primary hover:bg-gray-200'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
