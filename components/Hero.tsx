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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] -z-10 animate-float" />

      <div className="z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400">01 // THE COMPLIANCE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-[8vw] md:text-[6.5vw] leading-[0.95] font-black uppercase font-serif tracking-tight max-w-5xl mx-auto"
        >
          Conformité &{' '}
          <span className="italic font-light text-brand-accent">Sécurisation.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <p className="text-base md:text-xl font-serif text-neutral-600 leading-relaxed">
            Maîtrisez votre parc informatique. Mise en conformité NIS2 totale et sécurisation de vos actifs pour une sérénité opérationnelle absolue.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center">
            <motion.button
              onClick={() => {
                trackEvent('cta_clicked', { location: 'hero', cta: 'diagnostic_gratuit' });
                window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2' } }));
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-10 py-5 text-xs font-mono tracking-widest uppercase hover:bg-brand-accent border-2 border-black transition-all duration-300 shadow-tactile hover:shadow-tactile-accent"
            >
              Diagnostic NIS2 gratuit →
            </motion.button>
            <motion.a
              href="https://cal.eu/getagenzia/discovery-15"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_clicked', { location: 'hero', cta: 'reserver_15min' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs font-mono tracking-widest uppercase text-black hover:text-brand-accent transition-colors underline underline-offset-4"
            >
              Réserver 15 min avec Ramzi
            </motion.a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Souverain · OVH SecNumCloud 3.2 · 99.99% Uptime</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-black opacity-10 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
