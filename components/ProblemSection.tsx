/**
 * ProblemSection — Agenzia Pure (style screen 3 : badge "THE CHALLENGE" + 3 cards numérotées).
 *
 * Pitch NIS2/MSP conservé. Layout centré porcelaine, cards card-porcelain avec numéros 1/2/3
 * dans des badges rounded square gris. CTA mid-funnel conservé en bas.
 */
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const PROBLEMS = [
  {
    n: 1,
    title: 'Inertie opérationnelle',
    description: 'Chaque minute d\'arrêt technique paralyse votre croissance et dégrade votre rentabilité.',
    metric: '43k€',
    metricLabel: 'Perte de valeur / heure',
  },
  {
    n: 2,
    title: 'Exposition critique',
    description: 'Les failles de sécurité ne sont plus des risques théoriques mais des menaces directes sur vos actifs.',
    metric: '43%',
    metricLabel: 'PME sinistrées en Europe',
  },
  {
    n: 3,
    title: 'Dette technique',
    description: 'Une infrastructure vieillissante freine l\'innovation et multiplie les coûts de maintenance.',
    metric: '60%',
    metricLabel: 'Budget IT gaspillé',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ProblemSection: React.FC = () => (
  <section id="nis2" className="relative bg-pure section-ghost py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      {/* Header centré */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.div {...fadeUp(0)}>
          <span className="badge-pill badge-pill-danger">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-danger" />
            The Challenge
          </span>
        </motion.div>
        <motion.h2 {...fadeUp(0.1)} className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
          L'IT non maîtrisé{' '}
          <span className="text-graphite">freine</span> votre croissance.
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-6 text-lg text-graphite leading-relaxed">
          L'instabilité technique et la non-conformité NIS2 sont les premiers obstacles à
          la performance des PME modernes. Voici les 3 risques majeurs.
        </motion.p>
      </div>

      {/* Grid 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PROBLEMS.map((p, i) => (
          <motion.article
            key={p.n}
            {...fadeUp(0.3 + i * 0.1)}
            className="card-porcelain flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <div className="h-11 w-11 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-fog font-bold text-lg mb-8">
                {p.n}
              </div>
              <h3 className="headline text-2xl mb-3">{p.title}</h3>
              <p className="text-graphite leading-relaxed">{p.description}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[--color-ghost]">
              <div className="text-3xl font-extrabold text-ink tracking-tight">{p.metric}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-fog mt-1">
                {p.metricLabel}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA mid-funnel : capture l'utilisateur après l'effet "peur NIS2" */}
      <motion.div {...fadeUp(0.6)} className="mt-16 md:mt-20 text-center">
        <p className="text-base md:text-lg text-graphite max-w-xl mx-auto mb-6">
          Ces risques vous concernent ?{' '}
          <span className="font-semibold text-ink">Mesurez votre exposition en 90 secondes.</span>
        </p>
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent('open-smart-form', {
                detail: { intent: 'audit_nis2', source: 'problem_section' },
              })
            )
          }
          className="btn-tactile group text-sm"
        >
          <ShieldCheck size={16} />
          Vérifier mon score NIS2
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
