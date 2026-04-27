import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const FEATURES = [
  'Audit de performance infrastructure',
  'Migration sans interruption de flux',
  'Optimisation des coûts cloud',
  'Garantie de souveraineté européenne (OVH SecNumCloud, Scaleway)',
];

const RESULTS = [
  { value: 'Zéro', label: 'Interruption de service' },
  { value: '−30%', label: 'Coûts d\'infrastructure' },
  { value: '100%', label: 'Indépendance technologique' },
];

const triggerSmartForm = () =>
  window.dispatchEvent(
    new CustomEvent('open-smart-form', {
      detail: { intent: 'audit_nis2', source: 'service_migration' },
    })
  );

const MigrationCloud: React.FC = () => (
  <PageLayout
    title="Souveraineté cloud"
    badge="03 · Souveraineté"
    badgeVariant="accent"
    subtitle="Migrez vos actifs vers des infrastructures cloud européennes protégées : performance et indépendance."
    maxWidth="wide"
  >
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="card-porcelain p-8 md:p-10"
      >
        <h2 className="headline text-2xl md:text-3xl mb-4">L'approche stratégique</h2>
        <p className="text-graphite leading-relaxed mb-8">
          La migration n'est pas une fin, c'est un nouveau départ. Architecture agile qui s'adapte à vos
          besoins réels, transition sans interruption de service.
        </p>
        <ul className="space-y-3">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-3 text-graphite">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-ink text-pure p-8 md:p-10 shadow-tactile"
      >
        <h2 className="headline text-2xl md:text-3xl text-pure mb-8">Résultats attendus</h2>
        <div className="space-y-8">
          {RESULTS.map((r) => (
            <div key={r.label}>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-pure">{r.value}</div>
              <p className="mt-2 text-xs font-mono uppercase tracking-widest text-pure/50">{r.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* CTA bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="card-porcelain p-10 md:p-14 text-center"
    >
      <h2 className="headline text-2xl md:text-3xl mb-4">Prêt pour la transition ?</h2>
      <p className="text-graphite max-w-2xl mx-auto mb-8 leading-relaxed">
        Nos experts vous accompagnent pour garantir une transition fluide vers une infrastructure souveraine et performante.
      </p>
      <button onClick={triggerSmartForm} className="btn-tactile group text-sm">
        Demander une étude de valeur
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  </PageLayout>
);

export default MigrationCloud;
