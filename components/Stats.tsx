/**
 * Stats — Agenzia Pure (4 KPIs gros chiffres ExtraBold sur fond porcelaine).
 */
import React from 'react';
import { motion } from 'motion/react';

const STATS = [
  { number: '< 5min', label: 'Temps de résolution moyen' },
  { number: '80%', label: 'Gain d\'efficacité opérationnelle' },
  { number: '100% EU', label: 'Souveraineté des données' },
  { number: '12×', label: 'Optimisation des coûts IT' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const Stats: React.FC = () => (
  <section className="relative bg-porcelain section-ghost py-20 md:py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[--color-ghost] rounded-3xl overflow-hidden border border-[--color-ghost-strong]">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp(i * 0.1)}
            className="bg-pure p-8 md:p-12 text-center transition-colors hover:bg-glass-tint"
          >
            <div className="headline text-4xl md:text-5xl mb-3 tracking-tight">{s.number}</div>
            <p className="text-xs md:text-sm text-graphite font-medium leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
