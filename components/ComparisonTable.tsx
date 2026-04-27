/**
 * ComparisonTable — Agenzia Pure (table porcelaine, header noir, lignes alternées + check vert).
 *
 * Comparatif DSI interne vs Agenzia sur 5 critères concrets, CTA "Démarrer la transition" en bas.
 */
import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight } from 'lucide-react';

const ROWS = [
  { label: 'Coût annuel (50 postes)', dsi: '~50 000€', agenzia: '12 000€' },
  { label: 'Disponibilité', dsi: '9h–18h', agenzia: '24/7/365' },
  { label: 'Conformité NIS2', dsi: 'Réactive', agenzia: 'Native & active' },
  { label: 'Rapport de valeur', dsi: 'Ponctuel', agenzia: 'Temps réel' },
  { label: 'Mise en service', dsi: '3–6 mois', agenzia: '48 heures' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ComparisonTable: React.FC = () => (
  <section className="relative bg-pure section-ghost py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <motion.span {...fadeUp(0)} className="badge-pill inline-flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
          The Comparison
        </motion.span>
        <motion.h2 {...fadeUp(0.1)} className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
          L'efficacité{' '}
          <span className="italic font-medium text-graphite">mesurable.</span>
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-6 text-lg text-graphite leading-relaxed">
          Pourquoi recruter une DSI complète quand vous pouvez automatiser la performance ?
        </motion.p>
      </div>

      {/* Table porcelaine */}
      <motion.div
        {...fadeUp(0.3)}
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[--color-ghost-strong] shadow-card bg-pure"
      >
        {/* Header */}
        <div className="grid grid-cols-3 bg-ink text-pure">
          <div className="px-6 py-5 text-[10px] font-mono uppercase tracking-[0.25em] text-pure/50">
            Critère
          </div>
          <div className="px-6 py-5 text-[10px] font-mono uppercase tracking-[0.25em] text-pure/50 text-center">
            DSI Interne
          </div>
          <div className="px-6 py-5 text-[10px] font-mono uppercase tracking-[0.25em] text-center">
            Agenzia
          </div>
        </div>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            {...fadeUp(0.4 + i * 0.06)}
            className={`grid grid-cols-3 items-center transition-colors hover:bg-porcelain ${
              i !== ROWS.length - 1 ? 'border-b border-[--color-ghost]' : ''
            }`}
          >
            <div className="px-6 py-5 text-sm font-semibold text-ink">{row.label}</div>
            <div className="px-6 py-5 text-sm text-mist text-center inline-flex items-center justify-center gap-2">
              <X size={14} strokeWidth={2.4} className="text-fog" />
              {row.dsi}
            </div>
            <div className="px-6 py-5 text-sm font-semibold text-ink text-center inline-flex items-center justify-center gap-2">
              <Check size={14} strokeWidth={2.6} className="text-success" />
              {row.agenzia}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...fadeUp(0.6)} className="mt-12 text-center">
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent('open-smart-form', {
                detail: { intent: 'audit_nis2', source: 'comparison_table' },
              })
            )
          }
          className="btn-tactile group text-sm"
        >
          Démarrer la transition
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
