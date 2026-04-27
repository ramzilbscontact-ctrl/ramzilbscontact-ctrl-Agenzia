import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const FEATURES = [
  'Élimination des interruptions de service',
  'Stabilisation proactive du parc',
  'Optimisation automatique des performances',
  'Résolution instantanée des anomalies (L1/L2 par IA)',
];

const RESULTS = [
  { value: '99.99%', label: 'Disponibilité opérationnelle' },
  { value: '−90%', label: 'Incidents critiques' },
  { value: '24/7', label: 'Garantie de continuité' },
];

const triggerSmartForm = () =>
  window.dispatchEvent(
    new CustomEvent('open-smart-form', {
      detail: { intent: 'audit_nis2', source: 'service_infogerance' },
    })
  );

const InfogeranceIA: React.FC = () => (
  <PageLayout
    title="Flux opérationnel"
    badge="01 · Continuité"
    badgeVariant="accent"
    subtitle="Éliminez l'incertitude technique. Continuité totale de vos opérations grâce à une infrastructure qui s'auto-répare en temps réel."
    maxWidth="wide"
  >
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
      {/* Card gauche : objectif + features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="card-porcelain p-8 md:p-10"
      >
        <h2 className="headline text-2xl md:text-3xl mb-4">L'objectif : zéro friction</h2>
        <p className="text-graphite leading-relaxed mb-8">
          La maintenance traditionnelle est obsolète. Notre approche repose sur la prévention active :
          chaque anomalie est résolue avant qu'elle ne devienne un incident.
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

      {/* Card droite : KPIs ink */}
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

    {/* CTA */}
    <div className="text-center">
      <button onClick={triggerSmartForm} className="btn-tactile group text-sm">
        Démarrer mon diagnostic
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  </PageLayout>
);

export default InfogeranceIA;
