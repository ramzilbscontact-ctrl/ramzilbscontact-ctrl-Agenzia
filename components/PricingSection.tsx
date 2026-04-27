/**
 * PricingSection — Agenzia Pure (3 cards porcelaine, plan Pro mis en avant noir).
 *
 * Toggle mensuel/annuel pill, 3 plans (Starter gratuit / Pro 49€ / Enterprise devis),
 * card "popular" inversée (fond ink, texte pure). CTA mid-funnel conservé en bas.
 */
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { trackEvent } from '../lib/posthog';

const API_BASE = (import.meta.env.VITE_BRIDGE_URL as string) || 'https://api.getagenzia.fr';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

type PlanId = 'starter' | 'pro' | 'enterprise';

async function startCheckout(plan: PlanId, cycle: 'monthly' | 'yearly'): Promise<string | null> {
  // Demande email avant de lancer le checkout (Stripe accepte l'edit après)
  const email = window.prompt('Votre email professionnel pour le checkout :');
  if (!email || !email.includes('@')) return null;
  const company = window.prompt('Nom de votre entreprise (optionnel) :') || '';

  const r = await fetch(`${API_BASE}/billing/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan, cycle,
      customer_email: email,
      organisation: company || null,
    }),
  });
  if (!r.ok) {
    const err = await r.text();
    alert(`Erreur Stripe : ${err.slice(0, 200)}`);
    return null;
  }
  const data = await r.json();
  return data.checkout_url || null;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<PlanId | null>(null);

  const handleCta = async (plan: PlanId) => {
    if (plan === 'starter') {
      window.dispatchEvent(
        new CustomEvent('open-smart-form', {
          detail: { intent: 'audit_nis2', source: 'pricing_starter' },
        })
      );
      return;
    }
    if (plan === 'enterprise') {
      // Enterprise = sur devis → form contact (pas Stripe direct)
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // Pro = checkout Stripe
    setLoadingPlan('pro');
    trackEvent('pricing_checkout_start', { plan, cycle: isAnnual ? 'yearly' : 'monthly' });
    try {
      const url = await startCheckout('pro', isAnnual ? 'yearly' : 'monthly');
      if (url) window.location.href = url;
    } finally {
      setLoadingPlan(null);
    }
  };

  const plans = [
    {
      id: '01',
      slug: 'starter' as PlanId,
      name: 'Starter',
      price: 'Gratuit',
      suffix: '',
      description: 'Audit Flash NIS2',
      features: [
        'Scan de vulnérabilités',
        'Rapport initial PDF',
        'Conseils de remédiation',
        'Support email',
      ],
      cta: 'Commencer',
      popular: false,
    },
    {
      id: '02',
      slug: 'pro' as PlanId,
      name: 'Pro',
      price: isAnnual ? '39€' : '49€',
      suffix: '/mois',
      description: 'Continuité totale + Immunité NIS2',
      features: [
        'Zéro interruption garantie',
        'Mises à jour invisibles',
        'Résolution automatique L1/L2',
        'Conformité NIS2 permanente',
        'Rapport de valeur mensuel',
      ],
      cta: 'Garantir mon IT',
      popular: true,
    },
    {
      id: '03',
      slug: 'enterprise' as PlanId,
      name: 'Enterprise',
      price: 'Sur devis',
      suffix: '',
      description: 'Souveraineté + SLA critique',
      features: [
        'Accompagnement stratégique',
        'Infrastructure 100% européenne',
        'Disponibilité 99.99%',
        'Audit de performance annuel',
        'Gestion de crise prioritaire',
      ],
      cta: 'Nous contacter',
      href: '/#contact',
      popular: false,
    },
  ];

  return (
    <section id="tarifs" className="relative bg-porcelain section-ghost py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.id}
              {...fadeUp(0.3 + i * 0.1)}
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
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Recommandé
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
                      {plan.suffix} / poste
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    'mt-3 text-base',
                    plan.popular ? 'text-pure/80' : 'text-graphite'
                  )}
                >
                  {plan.description}
                </p>
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

              <button
                onClick={() => {
                  trackEvent('pricing_cta_clicked', {
                    plan: plan.slug,
                    cta: plan.cta.toLowerCase(),
                    cycle: isAnnual ? 'yearly' : 'monthly',
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
                  <><Loader2 size={16} className="animate-spin" /> Chargement…</>
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
    </section>
  );
};

export default PricingSection;
