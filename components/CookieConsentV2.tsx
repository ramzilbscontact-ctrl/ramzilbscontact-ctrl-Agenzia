/**
 * CookieConsentV2.tsx — Granular RGPD consent (3 categories) + PostHog gating.
 * Multi-roles: Sécurité ✅ (RGPD-by-design) | Juridique ✅ (CNIL pattern) | Data ✅ (PostHog conditional)
 */
import React, { useState, useEffect } from 'react';
import { X, Settings, Check } from 'lucide-react';

const CONSENT_KEY = 'agenzia_consent_v2';

interface ConsentState {
  necessary: true; // always on
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
  // PostHog gating
  if (typeof window !== 'undefined' && (window as any).posthog) {
    if (consent.analytics) {
      (window as any).posthog.opt_in_capturing();
    } else {
      (window as any).posthog.opt_out_capturing();
    }
  }
  // Google Analytics gating (gtag consent mode v2)
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
      setTimeout(() => setOpen(true), 800);
    } else {
      applyConsent(consent);
    }
    const reopenHandler = () => setOpen(true);
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

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-[300]">
      <div className="glass-card rounded-3xl p-5 md:p-6">
        {!showDetails ? (
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-fog">Confidentialité</div>
                <h3 className="headline text-lg mt-1">Vos préférences cookies</h3>
              </div>
            </div>
            <p className="text-sm text-graphite leading-relaxed">
              Cookies <strong className="text-ink">nécessaires</strong> au fonctionnement, et avec votre accord
              mesure d'audience (PostHog) et marketing. Données hébergées en France (OVH SecNumCloud).{' '}
              <a href="/politique-confidentialite" className="text-accent underline-offset-4 hover:underline">En savoir plus</a>
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowDetails(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-[--color-ghost-strong] bg-pure hover:bg-porcelain transition"
              >
                <Settings size={12} /> Personnaliser
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-full text-xs font-medium border border-[--color-ghost-strong] bg-pure hover:bg-porcelain transition"
              >
                Refuser
              </button>
              <button
                onClick={acceptAll}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-pure text-xs font-semibold hover:bg-ink-soft transition"
              >
                <Check size={12} /> Tout accepter
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between mb-4">
              <h3 className="headline text-lg">Vos préférences</h3>
              <button
                onClick={() => setShowDetails(false)}
                aria-label="Fermer les détails"
                className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-porcelain"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2.5">
              <label className="flex items-start gap-3 p-3 rounded-2xl border border-[--color-ghost-strong] bg-porcelain cursor-not-allowed opacity-80">
                <input type="checkbox" checked disabled className="mt-1 accent-ink" />
                <div className="text-sm">
                  <p className="font-semibold text-ink">Nécessaires</p>
                  <p className="text-xs text-graphite">Sécurité, session, préférences. Toujours activés.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-2xl border border-[--color-ghost-strong] bg-pure cursor-pointer hover:bg-porcelain transition">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="mt-1 accent-ink"
                />
                <div className="text-sm">
                  <p className="font-semibold text-ink">Analytics (PostHog)</p>
                  <p className="text-xs text-graphite">Mesure d'audience anonyme, hébergement EU.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 rounded-2xl border border-[--color-ghost-strong] bg-pure cursor-pointer hover:bg-porcelain transition">
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="mt-1 accent-ink"
                />
                <div className="text-sm">
                  <p className="font-semibold text-ink">Marketing</p>
                  <p className="text-xs text-graphite">Mesure publicitaire (GA4 conversion). Optionnel.</p>
                </div>
              </label>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-full text-xs font-medium border border-[--color-ghost-strong] bg-pure hover:bg-porcelain"
              >
                Refuser tout
              </button>
              <button
                onClick={saveCustom}
                className="px-4 py-2 rounded-full bg-ink text-pure text-xs font-semibold hover:bg-ink-soft"
              >
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentV2;
