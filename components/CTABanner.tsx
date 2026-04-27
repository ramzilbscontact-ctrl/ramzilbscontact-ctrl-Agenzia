/**
 * CTABanner — Agenzia Pure (bloc ink-on-white avec radius prononcé, tagline + 3 trust + CTA pill).
 */
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

const TRUST = ['Audit gratuit', 'Transition 48h', 'Zéro engagement'];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const CTABanner: React.FC = () => (
  <section className="bg-pure py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        {...fadeUp(0)}
        className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-ink text-pure px-8 py-16 md:px-16 md:py-24 text-center shadow-tactile"
      >
        {/* Glow subtil */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-accent/15 rounded-full blur-[120px]" />

        <div className="relative">
          <motion.h2 {...fadeUp(0.1)} className="headline text-[clamp(2rem,5vw,3.5rem)] text-pure max-w-3xl mx-auto">
            Votre IT mérite la{' '}
            <span className="italic font-medium text-pure/70">certitude opérationnelle.</span>
          </motion.h2>

          <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST.map((t) => (
              <div key={t} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-pure/70">
                <Check size={14} strokeWidth={2.4} className="text-success" />
                {t}
              </div>
            ))}
          </motion.div>

          <motion.button
            {...fadeUp(0.3)}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('open-smart-form', {
                  detail: { intent: 'audit_nis2', source: 'cta_banner' },
                })
              )
            }
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-pure text-ink font-semibold text-sm shadow-card hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Planifier mon diagnostic
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
