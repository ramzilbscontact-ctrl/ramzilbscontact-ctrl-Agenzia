import React from 'react';
import { motion } from 'motion/react';

const LogoStrip = () => {
  const logos = [
    'Mistral AI', 'OVHcloud', 'Hetzner', 'Microsoft Azure', 'Scaleway', 'Orange Business'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-black">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400">
          Infrastructures de Confiance & Souveraineté
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-32 px-16">
              {logos.map((logo) => (
                <span
                  key={`${logo}-${i}`}
                  className="text-3xl md:text-5xl font-black text-zinc-200 hover:text-black transition-colors cursor-default select-none font-serif italic uppercase tracking-tighter"
                >
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
