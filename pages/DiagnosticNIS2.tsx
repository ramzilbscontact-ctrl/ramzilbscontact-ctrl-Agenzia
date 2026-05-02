/**
 * DiagnosticNIS2 — Landing dédiée campagne organique LinkedIn (mai 2026).
 *
 * Hook validé par l'étude de marché :
 *   - 74% PME FR sous palier 1 ANSSI · 23% conscientes NIS2
 *   - 186k€ coût moyen incident · 466k€ pic
 *   - Deadline 17 oct 2026 · contrôles ANSSI dès nov 2026
 *
 * Différenciateur vs NIS2facile / MonScoreSecurite : score MESURÉ par agent,
 * pas déclaratif via questionnaire.
 *
 * Auto-open SmartForm si ?open=1 dans l'URL (utilisé pour les liens des posts).
 */
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Activity, FileText, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/posthog';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const URGENCY_STATS = [
  { value: '17 oct 2026', label: 'Deadline conformité', tone: 'danger' as const },
  { value: 'nov 2026', label: 'Contrôles ANSSI', tone: 'danger' as const },
  { value: '10 M€', label: 'Amende max EE', tone: 'danger' as const },
  { value: '74 %', label: 'PME FR sous palier 1 ANSSI', tone: 'graphite' as const },
];

const TEN_DOMAINS = [
  { id: '01', name: 'Politique de sécurité', weight: 10 },
  { id: '02', name: 'Gestion des risques', weight: 12 },
  { id: '03', name: 'Gestion des incidents', weight: 12 },
  { id: '04', name: 'Continuité d\'activité', weight: 10 },
  { id: '05', name: 'Sécurité chaîne d\'approvisionnement', weight: 10 },
  { id: '06', name: 'Sécurité réseau & SI', weight: 12 },
  { id: '07', name: 'Évaluation efficacité', weight: 8 },
  { id: '08', name: 'Hygiène & formation', weight: 8 },
  { id: '09', name: 'Cryptographie', weight: 10 },
  { id: '10', name: 'Contrôle d\'accès & MFA', weight: 8 },
];

const COMPARISON = [
  { feature: 'Méthode', declaratif: 'Questionnaire 30 questions', mesure: 'Agent qui scanne réellement vos machines' },
  { feature: 'Honnêteté', declaratif: 'Auto-déclaratif (biaisé)', mesure: 'Données système objectives' },
  { feature: 'Profondeur', declaratif: 'Score global flou', mesure: '10 domaines pondérés Article 21' },
  { feature: 'Preuve d\'audit', declaratif: 'Aucune', mesure: 'PDF signé Agenzia' },
  { feature: 'Délai', declaratif: '15 min de saisie', mesure: '10 min, install one-liner' },
  { feature: 'Prix', declaratif: 'Freemium puis 49 €/mo', mesure: 'Gratuit, sans CB' },
];

const HOW_IT_WORKS = [
  {
    icon: Shield,
    step: '01',
    title: 'Installez l\'agent',
    body: 'One-liner curl pour Linux/Mac, .exe pour Windows. 2 minutes, signé, désinstallable à tout moment.',
  },
  {
    icon: Activity,
    step: '02',
    title: 'Le scan tourne',
    body: '10 domaines Article 21 mesurés sur la machine : MFA, chiffrement, patches, EDR, backups, journalisation…',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Vous recevez votre rapport',
    body: 'Score /100, PDF signé, plan d\'action priorisé. Partageable avec votre direction et votre RSSI.',
  },
];

const DiagnosticNIS2: React.FC = () => {
  useEffect(() => {
    trackEvent('diagnostic_nis2_view');

    const params = new URLSearchParams(window.location.search);
    if (params.get('open') === '1') {
      setTimeout(() => {
        trackEvent('diagnostic_nis2_auto_open');
        window.dispatchEvent(
          new CustomEvent('open-lead-magnet', { detail: { intent: 'diagnostic', source: 'diagnostic_nis2_auto' } })
        );
      }, 600);
    }
  }, []);

  const startDiagnostic = (location: string) => {
    trackEvent('diagnostic_nis2_cta_click', { location, cta: 'start_diagnostic' });
    window.dispatchEvent(
      new CustomEvent('open-lead-magnet', { detail: { intent: 'diagnostic', source: `diagnostic_nis2_${location}` } })
    );
  };

  const openCal = (location: string) => {
    trackEvent('diagnostic_nis2_cta_click', { location, cta: 'book_call' });
    window.dispatchEvent(new CustomEvent('open-cal-popup', { detail: { source: `diagnostic_nis2_${location}` } }));
  };

  return (
    <main className="bg-pure">
      {/* Hero */}
      <section className="relative overflow-hidden bg-pure border-b border-[--color-ghost]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.04),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge-pill badge-pill-danger inline-flex"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
            Diagnostic NIS2 · Gratuit · 100 % mesuré
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="headline mt-6 text-[clamp(2.5rem,6vw,4.5rem)]"
          >
            Votre score NIS2 <span className="italic font-medium">réel.</span>{' '}
            <span className="text-graphite">Pas déclaratif.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-graphite leading-relaxed"
          >
            Notre agent mesure les 10 domaines de l'Article 21 directement sur vos machines.
            Rapport PDF signé en 10 minutes.{' '}
            <span className="text-ink font-semibold">Sans questionnaire. Sans CB.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button onClick={() => startDiagnostic('hero')} className="btn-tactile group text-sm px-8 py-4">
              Démarrer le diagnostic
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => openCal('hero')}
              className="text-sm text-graphite hover:text-ink transition inline-flex items-center gap-2"
            >
              ou parler à un humain (15 min) <ArrowRight size={12} />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-[10px] font-mono uppercase tracking-widest text-fog"
          >
            Souverain FR · RGPD-by-design · OVH SecNumCloud 3.2
          </motion.p>
        </div>
      </section>

      {/* Urgency strip */}
      <section className="bg-ink text-pure py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {URGENCY_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-center md:text-left"
              >
                <div
                  className={`text-2xl md:text-4xl font-extrabold tracking-tight ${
                    stat.tone === 'danger' ? 'text-danger' : 'text-pure'
                  }`}
                >
                  {stat.value}
                </div>
                <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-pure/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-pure/60 max-w-2xl mx-auto leading-relaxed">
            Sources : Panorama ANSSI mars 2026 · Baromètre CESIN 2026 · Loi de transposition NIS2 FR
          </p>
        </div>
      </section>

      {/* Comparison: déclaratif vs mesuré */}
      <section className="py-20 md:py-24 bg-porcelain">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="badge-pill inline-flex">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              Différence clé
            </span>
            <h2 className="headline mt-5 text-3xl md:text-4xl">Score déclaratif vs score mesuré</h2>
            <p className="mt-4 text-graphite max-w-2xl mx-auto">
              La plupart des outils NIS2 vous demandent de remplir un questionnaire. On scanne réellement.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="card-porcelain overflow-hidden border border-[--color-ghost-strong]"
          >
            <div className="grid grid-cols-12 bg-ink text-pure text-[10px] font-mono uppercase tracking-widest">
              <div className="col-span-4 px-5 py-4 border-r border-pure/10">Critère</div>
              <div className="col-span-4 px-5 py-4 border-r border-pure/10">Score déclaratif</div>
              <div className="col-span-4 px-5 py-4 text-accent">Score mesuré · Agenzia</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 text-sm ${
                  i % 2 === 0 ? 'bg-pure' : 'bg-porcelain'
                } border-t border-[--color-ghost]`}
              >
                <div className="col-span-4 px-5 py-4 font-semibold text-ink border-r border-[--color-ghost]">
                  {row.feature}
                </div>
                <div className="col-span-4 px-5 py-4 text-graphite border-r border-[--color-ghost] inline-flex items-start gap-2">
                  <X size={14} className="mt-1 shrink-0 text-fog" />
                  <span>{row.declaratif}</span>
                </div>
                <div className="col-span-4 px-5 py-4 text-ink inline-flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-1 shrink-0 text-accent" />
                  <span className="font-semibold">{row.mesure}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24 bg-pure">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="badge-pill badge-pill-accent inline-flex">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              10 minutes top chrono
            </span>
            <h2 className="headline mt-5 text-3xl md:text-4xl">Comment ça marche</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="card-porcelain p-7"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 inline-flex items-center justify-center rounded-2xl bg-ink text-pure">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-fog">{step.step}</span>
                  </div>
                  <h3 className="headline text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-graphite leading-relaxed">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 domaines NIS2 */}
      <section className="py-20 md:py-24 bg-porcelain">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="badge-pill inline-flex">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              Article 21 NIS2
            </span>
            <h2 className="headline mt-5 text-3xl md:text-4xl">Les 10 domaines mesurés</h2>
            <p className="mt-4 text-graphite max-w-2xl mx-auto">
              Notation pondérée /100 alignée sur le Référentiel Cyber France (ReCyF) publié par l'ANSSI.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {TEN_DOMAINS.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-pure border border-[--color-ghost-strong]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-fog">{d.id}</span>
                  <span className="text-sm font-semibold text-ink">{d.name}</span>
                </div>
                <span className="text-xs font-mono text-graphite">{d.weight} pts</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk reminder */}
      <section className="py-16 md:py-20 bg-pure">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fadeUp} className="card-porcelain p-8 md:p-10 border-l-4 border-danger">
            <div className="flex items-start gap-4">
              <AlertTriangle size={22} className="text-danger shrink-0 mt-1" />
              <div>
                <h3 className="headline text-2xl mb-3">Pourquoi maintenant</h3>
                <p className="text-graphite leading-relaxed mb-3">
                  Les premières sanctions ANSSI sont déjà tombées en 2026 :{' '}
                  <span className="text-ink font-semibold">3 entités, 425 000 € cumulés</span>. À partir de
                  novembre 2026, les contrôles deviennent systématiques pour les entités essentielles.
                </p>
                <p className="text-graphite leading-relaxed">
                  Au-delà de l'amende (jusqu'à 10 M€ ou 2 % du CA mondial), la directive prévoit la{' '}
                  <span className="text-ink font-semibold">responsabilité personnelle du dirigeant</span>{' '}
                  pour défaut de gouvernance cyber.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-ink text-pure">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2 {...fadeUp} className="headline text-pure text-3xl md:text-5xl">
            Lancez votre diagnostic.
          </motion.h2>
          <motion.p {...fadeUp} className="mt-5 text-pure/70 text-lg max-w-xl mx-auto leading-relaxed">
            10 minutes. Aucun engagement. Vous repartez avec un PDF signé que vous pouvez partager à
            votre direction.
          </motion.p>
          <motion.div
            {...fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button onClick={() => startDiagnostic('footer')} className="btn-tactile-ghost group text-sm px-8 py-4">
              Démarrer le diagnostic
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => openCal('footer')}
              className="text-sm text-pure/70 hover:text-pure transition inline-flex items-center gap-2"
            >
              Réserver un appel <ArrowRight size={12} />
            </button>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-widest text-pure/40">
            <span>Souverain FR</span>
            <span>·</span>
            <span>RGPD-by-design</span>
            <span>·</span>
            <span>OVH SecNumCloud</span>
            <span>·</span>
            <Link to="/cgu-outbound" className="hover:text-pure/70 transition">
              Politique de prospection
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DiagnosticNIS2;
