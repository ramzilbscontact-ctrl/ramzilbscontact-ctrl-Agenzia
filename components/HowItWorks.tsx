/**
 * HowItWorks — Agenzia Pure (3 steps avec connecteur ligne pointillée + cards porcelaine).
 *
 * Méthode 3 étapes : Diagnostic → Stabilisation → Expansion. Chaque step a son propre
 * numéro 01/02/03 dans badge pill + titre + description.
 */
import React from 'react';
import { motion } from 'motion/react';
import { Search, Cog, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    title: 'Diagnostic',
    description: 'Analyse complète de vos vulnérabilités et de vos goulots d\'étranglement opérationnels.',
    Icon: Search,
  },
  {
    n: '02',
    title: 'Stabilisation',
    description: 'Déploiement de l\'infrastructure autonome. Vos systèmes deviennent résilients et auto-réparateurs.',
    Icon: Cog,
  },
  {
    n: '03',
    title: 'Expansion',
    description: 'Optimisation continue de vos performances pour soutenir votre croissance sans friction technique.',
    Icon: TrendingUp,
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const HowItWorks: React.FC = () => (
  <section className="relative bg-pure section-ghost py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.span {...fadeUp(0)} className="badge-pill inline-flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
          The Process
        </motion.span>
        <motion.h2 {...fadeUp(0.1)} className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
          Une méthode.{' '}
          <span className="italic font-medium text-graphite">Zéro friction.</span>
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-6 text-lg text-graphite leading-relaxed">
          3 étapes structurées pour transformer votre IT d'un centre de coût en levier de performance.
        </motion.p>
      </div>

      {/* Cards en ligne avec connecteur visuel pointillé */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Connecteur horizontal desktop seulement */}
        <div className="hidden md:block absolute top-[68px] left-[12%] right-[12%] h-px border-t border-dashed border-cloud pointer-events-none" />

        {STEPS.map((step, i) => (
          <motion.article
            key={step.n}
            {...fadeUp(0.3 + i * 0.12)}
            className="relative flex flex-col items-center text-center px-6 py-10 md:py-0"
          >
            {/* Cercle avec icône */}
            <div className="relative z-10 h-14 w-14 rounded-full bg-pure border border-[--color-ghost-strong] shadow-soft flex items-center justify-center text-graphite mb-6">
              <step.Icon size={20} strokeWidth={1.8} />
            </div>
            <span className="badge-pill mb-4">
              Étape {step.n}
            </span>
            <h3 className="headline text-2xl mb-3">{step.title}</h3>
            <p className="text-graphite leading-relaxed max-w-xs">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
