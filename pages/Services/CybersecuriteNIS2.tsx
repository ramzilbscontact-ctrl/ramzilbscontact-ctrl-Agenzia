import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const FEATURES = [
  'Audit de conformité opposable',
  'Gestion active des menaces (SOC IA-first)',
  'Sécurisation des flux critiques',
  'Garantie de souveraineté numérique EU',
];

const RESULTS = [
  { value: '100%', label: 'Conformité NIS2 garantie' },
  { value: 'Zéro', label: 'Fuite de données critique' },
  { value: 'EU', label: 'Souveraineté totale' },
];

const triggerSmartForm = () =>
  window.dispatchEvent(
    new CustomEvent('open-smart-form', {
      detail: { intent: 'audit_nis2', source: 'service_cybersecurite' },
    })
  );

const CybersecuriteNIS2: React.FC = () => (
  <PageLayout
    title="Immunité cyber"
    badge="02 · Sécurité NIS2"
    badgeVariant="danger"
    subtitle="Transformez votre sécurité en actif stratégique. Conformité NIS2 garantie + protection active des données critiques."
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
        <h2 className="headline text-2xl md:text-3xl mb-4">L'exigence NIS2</h2>
        <p className="text-graphite leading-relaxed mb-8">
          La conformité n'est pas une contrainte, c'est une barrière de protection.
          Standards les plus élevés pour assurer l'intégrité de votre chaîne de valeur.
        </p>
        <ul className="space-y-3">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-3 text-graphite">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-danger shrink-0" />
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

    <div className="text-center">
      <button onClick={triggerSmartForm} className="btn-tactile group text-sm">
        Vérifier ma conformité NIS2
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  </PageLayout>
);

export default CybersecuriteNIS2;
