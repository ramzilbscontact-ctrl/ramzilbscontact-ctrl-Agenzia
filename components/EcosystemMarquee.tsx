
import React, { useState } from 'react';
import type { Content } from '../types';

interface EcosystemMarqueeProps {
  content: Content['ecosystem'];
}

const companies = [
  'openai.com',
  'notion.so',
  'zapier.com',
  'slack.com',
  'google.com',
  'microsoft.com',
  'salesforce.com',
  'hubspot.com',
  'stripe.com',
  'airbnb.com',
];

const SafeLogo: React.FC<{ domain: string }> = ({ domain }) => {
    const [error, setError] = useState(false);
    if (error) return <span className="text-brand-secondary/40 font-black uppercase tracking-widest text-xs">{domain.split('.')[0]}</span>;
    return (
        <img 
            src={`https://logo.clearbit.com/${domain}`} 
            alt={domain} 
            onError={() => setError(true)}
            className="h-8 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" 
        />
    );
};

const LogoScroller: React.FC = () => {
    const extendedCompanies = [...companies, ...companies];
    return (
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] rtl:[animation-direction:reverse]">
            {extendedCompanies.map((domain, index) => (
                <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center mx-8">
                    <SafeLogo domain={domain} />
                </div>
            ))}
        </div>
    );
};

const EcosystemMarquee: React.FC<EcosystemMarqueeProps> = ({ content }) => {
  return (
    <section className="py-24 bg-transparent animate-unfold">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-base font-black text-brand-secondary tracking-[0.3em] uppercase">{content.title}</h3>
        <div className="relative mt-12 w-full overflow-hidden">
           <div className="group flex">
              <LogoScroller />
           </div>
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMarquee;
