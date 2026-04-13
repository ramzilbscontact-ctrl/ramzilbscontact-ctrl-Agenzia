import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Database, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { trackEvent } from '../lib/posthog';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 border-b-[8px] border-black overflow-hidden bg-white">
      {/* Texture de fond subtile */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000_1px,#000_2px)] bg-[length:100%_4px]"></div>
      
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] -z-10 animate-float" />

      <div className="z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">01 // THE COMPLIANCE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] sm:text-[12vw] md:text-[13vw] leading-[0.8] font-black uppercase font-serif tracking-tighter"
        >
          Conformité &<br/>
          <span className="italic font-light text-brand-accent">Sécurisation.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-xl md:text-3xl font-serif text-neutral-600 leading-relaxed">
            Maîtrisez votre parc informatique. Nous assurons la mise en conformité totale et la sécurisation de vos actifs pour une sérénité opérationnelle absolue.
          </p>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <motion.a 
              href="https://www.cal.eu/getagenzia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_clicked', { location: 'hero', cta: 'garantir_ma_continuite' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-12 py-6 text-xs font-mono tracking-widest uppercase hover:bg-brand-accent border-2 border-black transition-all duration-300 shadow-tactile hover:shadow-tactile-accent inline-block"
            >
              Garantir ma continuité →
            </motion.a>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Operational Status</span>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-black">99.99% Uptime Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-black opacity-10 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
