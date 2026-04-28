/**
 * PricingSection — Agenzia Pure v2 (Sprint pricing optimization).
 *
 * 4 améliorations vs v1:
 * 1. Starter renommé "Diagnostic NIS2 offert · Résultat en 48h" (urgence + tangibilité)
 * 2. Pro: bullets reformulés en bénéfices mesurables (panne <4h, mises à jour sans maintenance, etc.)
 * 3. Enterprise: "Devis en 24h" + bouton Cal.com (au lieu de "Sur devis" qui fait fuir)
 * 4. Simulateur de prix: slider postes interactif → prix total live (réduit hésitation)
 *
 * Toggle mensuel/annuel pill, plan Pro inversé (ink-on-pure scale), checkout Stripe avec quantity.
 */
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Loader2, Calendar, Zap, X, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { trackEvent } from '../lib/posthog';

const API_BASE = (import.meta.env.VITE_BRIDGE_URL as string) || 'https://api.getagenzia.fr';

// Pricing per-poste (par mois) selon cycle
const PRICE_PER_SEAT = {
  monthly: 49,
  yearly: 39,  // -20%
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type PlanId = 'starter' | 'pro' | 'enterprise';

async function startCheckout(
  plan: PlanId,
  cycle: 'monthly' | 'yearly',
  quantity: number,
  email?: string
): Promise<{ url?: string; error?: string }> {
  const jwt = typeof window !== 'undefined' ? localStorage.getItem('agenzia_jwt') : null;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (jwt) headers['Authorization'] = `Bearer ${jwt}`;

  // URLs Stripe basées sur l'origin courant (getagenzia.fr) — pas le dashboard backend.
  // success: redirige vers /billing/success avec session_id (page créée landing)
  // cancel:  retour à la section #tarifs de la landing (pas dashboard.getagenzia.fr)
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://getagenzia.fr';

  const r = await fetch(`${API_BASE}/billing/checkout`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      plan, cycle, quantity,
      customer_email: email,
      success_url: `${origin}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#tarifs`,
    }),
  });
  if (!r.ok) {
    const err = await r.text();
    return { error: err.slice(0, 200) };
  }
  const data = await r.json();
  return { url: data.checkout_url };
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [seats, setSeats] = useState(20);
  const [loadingPlan, setLoadingPlan] = useState<PlanId | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [pendingCheckoutEmail, setPendingCheckoutEmail] = useState('');
  const [checkoutError, setCheckoutError] = useState<string | null>(null);


  const launchCheckout = async (email: string) => {
    setLoadingPlan('pro');
    setCheckoutError(null);
    trackEvent('pricing_checkout_start', {
      plan: 'pro', cycle: isAnnual ? 'yearly' : 'monthly', seats, total_monthly: totalMonthly,
    });
    try {
      const r = await startCheckout('pro', isAnnual ? 'yearly' : 'monthly', seats, email || undefined);
      if (r.url) {
        window.location.href = r.url;
      } else {
        setCheckoutError(r.error || 'Erreur Stripe inconnue');
      }
    } finally {
      setLoadingPlan(null);
    }
  };

  // Prix calculés en temps réel selon cycle + nombre de postes
  const seatPrice = isAnnual ? PRICE_PER_SEAT.yearly : PRICE_PER_SEAT.monthly;
  const totalMonthly = useMemo(() => seats * seatPrice, [seats, seatPrice]);
  const totalYearly = useMemo(() => totalMonthly * 12, [totalMonthly]);
  const savings = useMemo(
    () => isAnnual ? Math.round(seats * (PRICE_PER_SEAT.monthly - PRICE_PER_SEAT.yearly) * 12) : 0,
    [seats, isAnnual]
  );

  const handleCta = async (plan: PlanId) => {
    if (plan === 'starter') {
      trackEvent('pricing_starter_clicked', { source: 'pricing_section' });
      window.dispatchEvent(
        new CustomEvent('open-smart-form', {
          detail: { intent: 'audit_nis2', source: 'pricing_starter' },
        })
      );
      return;
    }
    if (plan === 'enterprise') {
      // Enterprise = devis → ouvre Cal.com pour appel rapide
      trackEvent('pricing_enterprise_clicked', { source: 'pricing_section', seats });
      window.dispatchEvent(new CustomEvent('open-cal-popup', { detail: { source: 'pricing_enterprise' } }));
      return;
    }
    // Pro = checkout via backend /billing/checkout (test+live, marche tjrs)
    // Si user authentifié → email lu auto via JWT → pas de modal
    // Sinon → modal email Agenzia Pure
    const jwt = typeof window !== 'undefined' ? localStorage.getItem('agenzia_jwt') : null;
    if (jwt) {
      await launchCheckout('');
    } else {
      setEmailModalOpen(true);
    }
  };

  // 3 plans avec data structurée (titres + bullets reformulés)
  const plans = [
    {
      id: '01',
      slug: 'starter' as PlanId,
      name: 'Starter',
      price: 'Gratuit',
      suffix: '',
      description: 'Diagnostic NIS2 offert',
      tagline: 'Résultat en 48h · sans engagement',
      features: [
        'Scan complet de vos vulnérabilités',
        'Score d\'exposition NIS2 chiffré sur 100',
        'Plan de remédiation priorisé (quick wins)',
        'Rapport PDF exportable signé Agenzia',
      ],
      cta: 'Recevoir mon diagnostic',
      popular: false,
    },
    {
      id: '02',
      slug: 'pro' as PlanId,
      name: 'Pro',
      price: `${seatPrice}€`,
      suffix: '/mois / poste',
      description: 'Continuité totale + Immunité NIS2',
      tagline: '30 jours satisfait ou remboursé',
      features: [
        'Première intervention en moins de 15 min, résolution <4h sur 80% des cas',
        'Mises à jour planifiées hors heures ouvrées · zéro impact business',
        'Support N1/N2 résolu par IA, sans ticket manuel',
        'Score NIS2 calculé en continu + rapport Article 21 trimestriel',
        'Dashboard temps réel + rapport mensuel exportable',
        'Onboarding en 48h ou remboursé',
      ],
      cta: 'Garantir mon IT',
      popular: true,
    },
    {
      id: '03',
      slug: 'enterprise' as PlanId,
      name: 'Enterprise',
      price: 'Sur-mesure',
      suffix: '',
      description: 'Souveraineté + SLA critique',
      tagline: 'Devis en 24h',
      features: [
        'Account manager dédié + revue trimestrielle CISO',
        'Hébergement OVH SecNumCloud 3.2 (qualifié ANSSI)',
        'SLA 99.9% avec pénalités contractuelles',
        'Audit NIS2 trimestriel + rapport pour DPO',
        'Cellule de crise (réponse <30 min, 8h-20h 7j/7)',
      ],
      cta: 'Réserver un appel',
      popular: false,
    },
  ];

  return (
    <section id="tarifs" className="relative bg-porcelain section-ghost py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span {...fadeUp(0)} className="badge-pill inline-flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            Investissement
          </motion.span>
          <motion.h2 {...fadeUp(0.1)} className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
            Transparent.{' '}
            <span className="italic font-medium text-graphite">Sans surprise.</span>
          </motion.h2>

          {/* Toggle billing */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-10 inline-flex items-center gap-1 p-1 rounded-full bg-pure border border-[--color-ghost-strong] shadow-soft"
          >
            <button
              onClick={() => {
                setIsAnnual(false);
                trackEvent('pricing_billing_changed', { cadence: 'monthly' });
              }}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-medium transition-all',
                !isAnnual ? 'bg-ink text-pure' : 'text-graphite hover:text-ink'
              )}
            >
              Mensuel
            </button>
            <button
              onClick={() => {
                setIsAnnual(true);
                trackEvent('pricing_billing_changed', { cadence: 'annual' });
              }}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-medium transition-all inline-flex items-center gap-2',
                isAnnual ? 'bg-ink text-pure' : 'text-graphite hover:text-ink'
              )}
            >
              Annuel
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-success-soft text-success font-bold">
                -20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Simulateur de prix interactif */}
        <motion.div
          {...fadeUp(0.3)}
          className="card-porcelain max-w-3xl mx-auto p-6 md:p-8 mb-12 md:mb-16"
        >
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-fog mb-1">
                Simulateur Pro
              </div>
              <h3 className="headline text-lg md:text-xl">
                Combien de postes à gérer ?
              </h3>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono uppercase tracking-widest text-fog">
                {isAnnual ? 'Total annuel' : 'Total mensuel'}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
                {(isAnnual ? totalYearly : totalMonthly).toLocaleString('fr-FR')} €
              </div>
              {isAnnual && savings > 0 && (
                <div className="text-xs text-success font-semibold">
                  Vous économisez {savings.toLocaleString('fr-FR')} €/an
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={500}
              step={1}
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              className="flex-1 h-1.5 bg-cloud rounded-full appearance-none cursor-pointer accent-ink"
              aria-label="Nombre de postes"
            />
            <div className="min-w-[88px] text-right">
              <div className="text-2xl font-extrabold tracking-tight">{seats}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-fog">
                {seats <= 1 ? 'poste' : 'postes'}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-mist">
            <span>{seatPrice} €/mois × {seats}</span>
            <button
              onClick={() => setSeats(seats >= 250 ? 500 : seats >= 50 ? 250 : seats >= 20 ? 50 : 20)}
              className="text-accent hover:underline underline-offset-4 font-medium"
            >
              + de postes →
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.id}
              {...fadeUp(0.4 + i * 0.1)}
              className={cn(
                'rounded-3xl p-8 md:p-10 transition-all duration-300 flex flex-col',
                plan.popular
                  ? 'bg-ink text-pure shadow-tactile border border-ink-soft scale-[1.02] md:scale-[1.04]'
                  : 'card-porcelain'
              )}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="inline-flex self-start mb-4 items-center gap-1.5 px-3 py-1 rounded-full bg-pure/10 border border-pure/20 text-[10px] font-semibold uppercase tracking-widest">
                  <Zap size={10} />
                  Le plus choisi
                </div>
              )}

              <div className="mb-8">
                <div
                  className={cn(
                    'text-[10px] font-mono uppercase tracking-[0.25em] mb-3',
                    plan.popular ? 'text-pure/60' : 'text-fog'
                  )}
                >
                  {plan.id} · {plan.name}
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      'text-5xl md:text-6xl font-extrabold tracking-tight',
                      plan.popular ? 'text-pure' : 'text-ink'
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span
                      className={cn(
                        'text-sm font-medium',
                        plan.popular ? 'text-pure/60' : 'text-mist'
                      )}
                    >
                      {plan.suffix}
                    </span>
                  )}
                </div>

                {/* Total live pour Pro (calculé depuis le slider) */}
                {plan.popular && (
                  <div className="mt-3 pt-3 border-t border-pure/10">
                    <div className="text-xs text-pure/60">
                      Pour {seats} postes : <strong className="text-pure">{totalMonthly.toLocaleString('fr-FR')} €/mois</strong>
                      {isAnnual && (
                        <span className="text-pure/50"> · facturé {totalYearly.toLocaleString('fr-FR')} €/an</span>
                      )}
                    </div>
                  </div>
                )}

                <p
                  className={cn(
                    'mt-3 text-base',
                    plan.popular ? 'text-pure/80' : 'text-graphite'
                  )}
                >
                  {plan.description}
                </p>

                {/* Tagline urgence (Starter / Enterprise) */}
                {plan.tagline && (
                  <div className={cn(
                    'mt-3 inline-flex items-center gap-1.5 text-xs font-semibold',
                    plan.popular ? 'text-pure' : 'text-accent'
                  )}>
                    <Calendar size={12} />
                    {plan.tagline}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      strokeWidth={2.4}
                      className={cn(
                        'shrink-0 mt-0.5',
                        plan.popular ? 'text-pure' : 'text-success'
                      )}
                    />
                    <span className={plan.popular ? 'text-pure/90' : 'text-graphite'}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Tous les plans utilisent le même bouton custom Agenzia Pure → handleCta */}
              <button
                onClick={() => {
                  trackEvent('pricing_cta_clicked', {
                    plan: plan.slug,
                    cta: plan.cta.toLowerCase(),
                    cycle: isAnnual ? 'yearly' : 'monthly',
                    seats,
                  });
                  handleCta(plan.slug);
                }}
                disabled={loadingPlan === plan.slug}
                className={cn(
                  'w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed',
                  plan.popular
                    ? 'bg-pure text-ink hover:bg-porcelain'
                    : 'bg-ink text-pure hover:bg-ink-soft'
                )}
              >
                {loadingPlan === plan.slug ? (
                  <><Loader2 size={16} className="animate-spin" /> Redirection Stripe…</>
                ) : (
                  <>{plan.cta}<ArrowRight size={16} /></>
                )}
              </button>
            </motion.article>
          ))}
        </div>

        {/* CTA mid-funnel */}
        <motion.div {...fadeUp(0.7)} className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-graphite mb-6">
            Pas sûr du plan adapté à votre PME ?{' '}
            <span className="font-semibold text-ink">
              Audit gratuit + recommandation perso en 5 min.
            </span>
          </p>
          <button
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('open-smart-form', {
                  detail: { intent: 'audit_nis2', source: 'pricing_section' },
                })
              )
            }
            className="btn-tactile-ghost group text-sm"
          >
            Mon plan en 5 minutes
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Email modal — Agenzia Pure (remplace window.prompt browser) */}
      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setEmailModalOpen(false)}
            className="fixed inset-0 z-[200] bg-ink/30 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-pure rounded-3xl shadow-tactile border border-[--color-ghost-strong] overflow-hidden"
            >
              <button
                onClick={() => setEmailModalOpen(false)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-pure border border-[--color-ghost-strong] hover:bg-porcelain transition"
              >
                <X size={16} />
              </button>

              <div className="p-7 md:p-9">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-porcelain border border-[--color-ghost-strong] text-graphite mb-5">
                  <Mail size={20} />
                </div>
                <h3 className="headline text-2xl mb-2">Avant de continuer</h3>
                <p className="text-sm text-graphite leading-relaxed mb-6">
                  Votre email professionnel pour Stripe Checkout. Vous pourrez ajuster nom, adresse de
                  facturation et méthode de paiement directement sur la page Stripe sécurisée.
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = pendingCheckoutEmail.trim();
                    if (!email || !email.includes('@')) return;
                    setEmailModalOpen(false);
                    await launchCheckout(email);
                    setPendingCheckoutEmail('');
                  }}
                >
                  <input
                    type="email"
                    required
                    autoFocus
                    value={pendingCheckoutEmail}
                    onChange={(e) => setPendingCheckoutEmail(e.target.value)}
                    placeholder="vous@entreprise.fr"
                    className="w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition mb-5"
                  />

                  <button
                    type="submit"
                    disabled={loadingPlan === 'pro' || !pendingCheckoutEmail}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    {loadingPlan === 'pro' ? (
                      <><Loader2 size={16} className="animate-spin" /> Redirection Stripe…</>
                    ) : (
                      <>Continuer vers Stripe <ArrowRight size={14} /></>
                    )}
                  </button>
                </form>

                <p className="mt-5 text-[10px] text-fog text-center leading-relaxed">
                  🔒 Paiement sécurisé Stripe · Données protégées RGPD
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Erreur checkout (toast inline) */}
      {checkoutError && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] max-w-md w-full mx-auto px-4"
        >
          <div className="rounded-2xl bg-danger-soft border border-danger/20 p-4 flex items-start gap-3 shadow-card">
            <X size={16} className="shrink-0 mt-0.5 text-danger" />
            <div className="flex-1 text-sm text-danger">
              <strong>Erreur Stripe : </strong>
              {checkoutError}
            </div>
            <button
              onClick={() => setCheckoutError(null)}
              className="shrink-0 text-danger/60 hover:text-danger"
              aria-label="Fermer"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PricingSection;
