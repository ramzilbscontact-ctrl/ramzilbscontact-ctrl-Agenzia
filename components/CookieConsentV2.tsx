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
    <div className="fixed bottom-0 left-0 right-0 z-[300] bg-white border-t-2 border-black shadow-[0_-8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-4xl mx-auto p-6">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-mono uppercase tracking-widest mb-1">Confidentialité</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Nous utilisons des cookies <strong>nécessaires</strong> au fonctionnement, et avec votre accord
                pour mesurer l'audience (PostHog) et améliorer votre expérience. Vos données restent en France (OVH SecNumCloud).{' '}
                <a href="/politique-confidentialite" className="underline">En savoir plus</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowDetails(true)}
                className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest border-2 border-black hover:bg-zinc-50 flex items-center gap-1"
              >
                <Settings size={12} /> Personnaliser
              </button>
              <button
                onClick={rejectAll}
                className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest border-2 border-black hover:bg-zinc-50"
              >
                Refuser tout
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-[10px] font-mono uppercase tracking-widest bg-black text-white hover:bg-zinc-800 flex items-center gap-1"
              >
                <Check size={12} /> Tout accepter
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-base font-bold">Vos préférences</h3>
              <button onClick={() => setShowDetails(false)} className="p-1 hover:bg-zinc-100">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <label className="flex items-start gap-3 p-3 border border-zinc-200 bg-zinc-50 cursor-not-allowed">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <p className="font-bold">Nécessaires</p>
                  <p className="text-zinc-600">Sécurité, session, préférences. Toujours activés.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 border-2 border-black cursor-pointer hover:bg-zinc-50">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="mt-1"
                />
                <div>
                  <p className="font-bold">Analytics (PostHog)</p>
                  <p className="text-zinc-600">Comprendre comment vous utilisez le site (anonyme, hébergé EU).</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-3 border-2 border-black cursor-pointer hover:bg-zinc-50">
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="mt-1"
                />
                <div>
                  <p className="font-bold">Marketing</p>
                  <p className="text-zinc-600">Mesure publicitaire (GA4 conversion). Optionnel.</p>
                </div>
              </label>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <button onClick={rejectAll} className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest border-2 border-black">
                Refuser tout
              </button>
              <button onClick={saveCustom} className="px-4 py-2 text-[10px] font-mono uppercase tracking-widest bg-black text-white">
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
