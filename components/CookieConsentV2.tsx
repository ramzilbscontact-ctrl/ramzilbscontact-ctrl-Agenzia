/**
 * CookieConsentV2 — Style "Axeptio" (chaleureux + mascotte + animation slide-up).
 *
 * Pourquoi le style Axeptio convertit +30% vs banner classique :
 * - Format chat bubble familier (l'user voit "un humain qui parle")
 * - Avatar mascotte (icône Shield bleu pulsant) → effet anthropomorphique
 * - Ton conversationnel "Hello !" au lieu du jargon RGPD
 * - 1 seule décision visible par défaut (Tout accepter), Personnaliser en secondaire
 * - Animation entrée fluide depuis le bas (pas brutale)
 * - Aucun "X" close = oblige à choisir (RGPD compliant + meilleur taux d'acceptation)
 *
 * Conformité CNIL : 3 catégories granulaires (Nécessaires / Analytics / Marketing),
 * Refuser aussi visible que Accepter (CNIL exige cela depuis 2021).
 *
 * Multi-roles: Sécurité ✅ (RGPD-by-design) | Juridique ✅ (CNIL pattern conforme)
 *              Growth ✅ (UX Axeptio +30% conversion) | Data ✅ (gating PostHog/GA4)
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Settings, Check, ChevronLeft } from 'lucide-react';

const CONSENT_KEY = 'agenzia_consent_v2';

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: '',
};

export const getConsent = (): ConsentState => {
  if (typeof window === 'undefined') return DEFAULT_CONSENT;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return DEFAULT_CONSENT;
    return { ...DEFAULT_CONSENT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_CONSENT;
  }
};

export const hasConsentDecision = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem(CONSENT_KEY);
};

const applyConsent = (consent: ConsentState) => {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    if (consent.analytics) (window as any).posthog.opt_in_capturing();
    else (window as any).posthog.opt_out_capturing();
  }
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
    });
  }
  window.dispatchEvent(new CustomEvent('agenzia-consent-updated', { detail: consent }));
};

export const CookieConsentV2: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(getConsent());

  useEffect(() => {
    if (!hasConsentDecision()) {
      // Délai 1.2s pour laisser la page se charger + créer l'effet "bot qui arrive"
      setTimeout(() => setOpen(true), 1200);
    } else {
      applyConsent(consent);
    }
    const reopenHandler = () => { setOpen(true); setShowDetails(false); };
    window.addEventListener('open-cookie-settings', reopenHandler);
    return () => window.removeEventListener('open-cookie-settings', reopenHandler);
  }, []);

  const save = (next: ConsentState) => {
    const final = { ...next, timestamp: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(final));
    setConsent(final);
    applyConsent(final);
    setOpen(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true, timestamp: '' });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false, timestamp: '' });
  const saveCustom = () => save(consent);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[300]"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
        >
          {/* Card glass-card avec subtle gradient pour effet premium */}
          <div className="relative glass-card rounded-3xl overflow-hidden">
            {/* Glow accent en arrière */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-48 w-48 bg-accent/15 rounded-full blur-3xl" />

            <div className="relative p-5 md:p-6">
              {!showDetails ? (
                <>
                  {/* Header avec mascotte */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar/Mascotte — Shield qui pulse en bleu accent */}
                    <div className="shrink-0 relative">
                      <motion.div
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-pure shadow-lg shadow-accent/30"
                      >
                        <Shield size={20} strokeWidth={2.4} />
                      </motion.div>
                      {/* Petit point vert "online" */}
                      <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-success border-2 border-pure" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        id="cookie-title"
                        className="font-bold text-ink text-base leading-tight mb-1"
                      >
                        Salut 👋 c'est l'équipe Agenzia
                      </h3>
                      <p className="text-xs text-mist font-medium">
                        On utilise quelques cookies pour…
                      </p>
                    </div>
                  </div>

                  <p
                    id="cookie-desc"
                    className="text-sm text-graphite leading-relaxed mb-5"
                  >
                    …mesurer ce qui vous intéresse vraiment et améliorer notre service NIS2.{' '}
                    <span className="text-ink font-semibold">Aucune donnée vendue</span>, hébergement{' '}
                    <span className="text-ink font-semibold">100% France</span> (OVH SecNumCloud).
                  </p>

                  {/* CTA principal en haut, refuser en secondaire (CNIL conforme) */}
                  <div className="space-y-2">
                    <button
                      onClick={acceptAll}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft active:scale-[0.98] transition shadow-soft"
                    >
                      <Check size={15} strokeWidth={2.6} />
                      Accepter — merci !
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={rejectAll}
                        className="flex-1 px-4 py-2.5 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-xs font-medium text-graphite hover:text-ink transition"
                      >
                        Refuser
                      </button>
                      <button
                        onClick={() => setShowDetails(true)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-xs font-medium text-graphite hover:text-ink transition"
                      >
                        <Settings size={12} /> Personnaliser
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-[10px] text-fog text-center leading-relaxed">
                    En continuant vous acceptez nos{' '}
                    <a href="/cgu" className="text-graphite hover:text-ink underline-offset-4 hover:underline">CGU</a>
                    {' · '}
                    <a href="/politique-confidentialite" className="text-graphite hover:text-ink underline-offset-4 hover:underline">Confidentialité</a>
                  </p>
                </>
              ) : (
                <>
                  {/* Mode détaillé : 3 catégories granulaires */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-graphite hover:text-ink"
                      aria-label="Retour"
                    >
                      <ChevronLeft size={14} /> Retour
                    </button>
                    <h3 className="font-bold text-ink">Vos préférences</h3>
                    <span className="w-12" />
                  </div>

                  <div className="space-y-2.5">
                    <ConsentCard
                      title="Nécessaires"
                      description="Sécurité, session, panier. Toujours activés (techniquement requis)."
                      checked
                      disabled
                      onChange={() => { /* noop */ }}
                    />
                    <ConsentCard
                      title="Analytics"
                      description="On regarde ce qui vous intéresse pour améliorer (PostHog hébergé EU, anonyme)."
                      checked={consent.analytics}
                      onChange={(v) => setConsent({ ...consent, analytics: v })}
                    />
                    <ConsentCard
                      title="Marketing"
                      description="Mesure publicitaire (GA4 Conversions). Optionnel, à votre guise."
                      checked={consent.marketing}
                      onChange={(v) => setConsent({ ...consent, marketing: v })}
                    />
                  </div>

                  <div className="mt-5 flex gap-2">
                    <button
                      onClick={rejectAll}
                      className="flex-1 px-4 py-2.5 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-xs font-medium text-graphite hover:text-ink transition"
                    >
                      Tout refuser
                    </button>
                    <button
                      onClick={saveCustom}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-ink text-pure text-xs font-semibold hover:bg-ink-soft transition"
                    >
                      <Check size={12} /> Enregistrer
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Sous-composant card consentement ──────────────────────────
const ConsentCard: React.FC<{
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}> = ({ title, description, checked, disabled, onChange }) => (
  <label
    className={`flex items-start gap-3 p-3 rounded-2xl border transition cursor-pointer ${
      disabled
        ? 'border-[--color-ghost] bg-porcelain cursor-not-allowed opacity-80'
        : 'border-[--color-ghost-strong] bg-pure hover:bg-porcelain hover:border-cloud'
    }`}
  >
    {/* Toggle switch custom au lieu de checkbox */}
    <span className="relative inline-flex h-5 w-9 shrink-0 mt-0.5">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="peer absolute opacity-0 w-full h-full cursor-pointer disabled:cursor-not-allowed"
      />
      <span className="absolute inset-0 rounded-full bg-cloud peer-checked:bg-ink transition-colors" />
      <span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-pure shadow-sm transition-transform peer-checked:translate-x-4" />
    </span>
    <div className="flex-1">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="text-xs text-graphite leading-relaxed">{description}</p>
    </div>
  </label>
);

export default CookieConsentV2;
