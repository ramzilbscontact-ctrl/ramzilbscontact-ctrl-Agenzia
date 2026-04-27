import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../../lib/posthog';
import PageLayout from '../../components/PageLayout';

const SimulateurROI: React.FC = () => {
  const [devices, setDevices] = useState(50);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(10);
  const [avgResolutionTime, setAvgResolutionTime] = useState(4);

  // ROI Logic (inchangée — c'est business)
  const internalDsiCost = 50000;
  const agenziaCostPerDevice = 20;
  const annualAgenziaCost = devices * agenziaCostPerDevice * 12;

  const productivityLossCostPerHour = 50;
  const annualProductivityLoss = incidentsPerMonth * avgResolutionTime * productivityLossCostPerHour * 12;

  const reducedIncidents = incidentsPerMonth * 0.2;
  const reducedTime = avgResolutionTime * 0.5;
  const annualAgenziaProductivityLoss = reducedIncidents * reducedTime * productivityLossCostPerHour * 12;

  const totalInternalCost = internalDsiCost + annualProductivityLoss;
  const totalAgenziaCost = annualAgenziaCost + annualAgenziaProductivityLoss;
  const annualSavings = totalInternalCost - totalAgenziaCost;

  const triggerSmartForm = () => {
    trackEvent('roi_audit_cta_clicked', {
      devices, incidents_per_month: incidentsPerMonth,
      avg_resolution_time: avgResolutionTime, annual_savings: Math.round(annualSavings),
    });
    window.dispatchEvent(
      new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'simulateur_roi' } })
    );
  };

  const sliderClass =
    'w-full h-1.5 bg-cloud rounded-full appearance-none cursor-pointer accent-ink';

  return (
    <PageLayout
      title="Simulateur ROI"
      badge="04 · Performance"
      badgeVariant="accent"
      subtitle="Mesurez l'impact de l'inefficacité technique sur votre rentabilité et découvrez le potentiel d'optimisation."
      maxWidth="wide"
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 card-porcelain p-8 md:p-10 space-y-10"
        >
          <h2 className="headline text-xl">Vos paramètres</h2>

          <div>
            <label className="block text-xs font-semibold text-graphite mb-3">
              Volume d'actifs (PC + serveurs)
            </label>
            <input
              type="range" min="10" max="500" step="10"
              value={devices}
              onChange={(e) => setDevices(parseInt(e.target.value))}
              className={sliderClass}
            />
            <div className="mt-2 text-2xl font-extrabold tracking-tight">{devices} <span className="text-mist text-base font-medium">unités</span></div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-graphite mb-3">
              Fréquence des interruptions / mois
            </label>
            <input
              type="range" min="1" max="50" step="1"
              value={incidentsPerMonth}
              onChange={(e) => setIncidentsPerMonth(parseInt(e.target.value))}
              className={sliderClass}
            />
            <div className="mt-2 text-2xl font-extrabold tracking-tight">{incidentsPerMonth} <span className="text-mist text-base font-medium">/ mois</span></div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-graphite mb-3">
              Temps de résolution moyen (heures)
            </label>
            <input
              type="range" min="1" max="24" step="1"
              value={avgResolutionTime}
              onChange={(e) => setAvgResolutionTime(parseInt(e.target.value))}
              className={sliderClass}
            />
            <div className="mt-2 text-2xl font-extrabold tracking-tight">{avgResolutionTime}h <span className="text-mist text-base font-medium">/ action</span></div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Big number ink */}
          <div className="rounded-3xl bg-ink text-pure p-8 md:p-10 shadow-tactile">
            <div className="text-xs font-mono uppercase tracking-widest text-pure/50 mb-6">
              Gain opérationnel annuel estimé
            </div>
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight text-pure">
              {annualSavings.toLocaleString('fr-FR')} €
            </div>
            <p className="mt-4 text-pure/70 leading-relaxed text-sm">
              Optimisation basée sur réduction des coûts directs (−80% incidents) + récupération de productivité (−50% temps de résolution).
            </p>
          </div>

          {/* 3 mini-KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Coûts directs', value: `−${Math.round((internalDsiCost - annualAgenziaCost) / 1000)}k€` },
              { label: 'Productivité', value: `+${Math.round((annualProductivityLoss - annualAgenziaProductivityLoss) / 1000)}k€` },
              { label: 'Risque cyber', value: 'Immunisé' },
            ].map((kpi) => (
              <div key={kpi.label} className="card-porcelain p-5 text-center">
                <div className="text-xl font-extrabold tracking-tight text-ink">{kpi.value}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-fog mt-1">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="card-porcelain p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="headline text-lg mb-1">Diagnostic réel requis ?</h3>
              <p className="text-graphite text-sm">Nos experts analysent vos leviers de performance gratuitement.</p>
            </div>
            <button onClick={triggerSmartForm} className="btn-tactile shrink-0 text-sm">
              Audit gratuit
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SimulateurROI;
