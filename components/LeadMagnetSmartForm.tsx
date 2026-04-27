/**
 * LeadMagnetSmartForm.tsx — V2.0 3-step smart form with prefill + score live.
 * Multi-roles: Architecte ✅ | Product ✅ | Growth ✅ | Sécurité ✅ | Data ✅
 *
 * Trigger via custom event (compatible existing LeadMagnetModal pattern):
 *   window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'P12' } }))
 */
import React, { useState, useEffect, useCallback } from 'react';
import { X, Loader2, CheckCircle2, ArrowRight, ArrowLeft, Shield } from 'lucide-react';

const API_BASE = (typeof window !== 'undefined' && (window as any).__BRIDGE_URL__) || 'https://api.getagenzia.fr';

type Step = 'A' | 'B' | 'C';

interface EnrichResponse {
  email: string;
  sirene: any;
  breach_signal: boolean;
  breach_risk_score: number;
  breach_sources: string[];
  persona: { persona_id: string; confidence: number; cluster: string };
  sources_resolved: { sirene: boolean; xposedornot: boolean; emailrep: boolean };
  elapsed_ms: number;
}

const PERSONA_COPY: Record<string, { headline: string; cta: string; subheadline: string }> = {
  P1: {
    headline: 'Calculez votre exposition NIS2 en 2 minutes',
    cta: 'Voir mon exposition',
    subheadline: 'Diagnostic chiffré de votre amende max + plan de remédiation 6-12 mois.',
  },
  P12: {
    headline: 'Préparez votre prochain rendez-vous assureur cyber',
    cta: 'Générer mon dossier',
    subheadline: 'Dossier d\'assurabilité pré-rempli, prêt à envoyer.',
  },
  default: {
    headline: 'Diagnostic NIS2 gratuit en 7 minutes',
    cta: 'Démarrer le diagnostic',
    subheadline: 'Score, exposition financière, plan d\'action — 100% gratuit.',
  },
};

export const LeadMagnetSmartForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<string | null>(null);
  const [step, setStep] = useState<Step>('A');

  // Step A
  const [email, setEmail] = useState('');
  const [insuranceRefused, setInsuranceRefused] = useState(false);
  const [enriching, setEnriching] = useState(false);
  const [enrichData, setEnrichData] = useState<EnrichResponse | null>(null);

  // Step B (validated/edited)
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('generic');

  // Step C (submitting + result)
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.intent) setIntent(detail.intent);
      setIsOpen(true);
    };
    window.addEventListener('open-smart-form', handler);
    return () => window.removeEventListener('open-smart-form', handler);
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('A');
      setEmail('');
      setEnrichData(null);
      setSubmitted(false);
      setSubmitError(null);
    }, 300);
  };

  const personaId = enrichData?.persona?.persona_id || intent || 'default';
  const copy = PERSONA_COPY[personaId] || PERSONA_COPY.default;

  // Step A → B
  const handleEnrich = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnriching(true);
    setSubmitError(null);
    try {
      const res = await fetch(`${API_BASE}/api/leads/enrich`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          insurance_refused: insuranceRefused,
          declared_intent: intent,
        }),
      });
      if (!res.ok) throw new Error(`Enrich failed (${res.status})`);
      const data: EnrichResponse = await res.json();
      setEnrichData(data);
      // Pre-fill from sirene
      if (data.sirene) {
        setCompanyName(data.sirene.nom_complet || '');
        const dirig = data.sirene.dirigeants?.[0];
        if (dirig) {
          setFirstName(dirig.prenoms?.split(' ')?.[0] || '');
          setLastName(dirig.nom || '');
          setJobTitle(dirig.qualite || '');
        }
      }
      setStep('B');
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setEnriching(false);
    }
  };

  // Step B → C (submit final)
  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const utm = new URLSearchParams(window.location.search);
      const res = await fetch(`${API_BASE}/api/leads/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
          job_title: jobTitle,
          company_name: companyName,
          insurance_refused: insuranceRefused,
          insurance_company: personaId === 'P12' ? insuranceCompany : null,
          declared_intent: intent,
          consent_rgpd: true,
          consent_marketing: false,
          utm_source: utm.get('utm_source'),
          utm_medium: utm.get('utm_medium'),
          utm_campaign: utm.get('utm_campaign'),
        }),
      });
      if (!res.ok) throw new Error(`Submit failed (${res.status})`);
      const data = await res.json();
      setResultMessage(data.message);
      setSubmitted(true);
      setStep('C');
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const inputBase =
    'w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition';
  const labelBase = 'block text-xs font-semibold text-graphite mb-2';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/30 backdrop-blur-sm p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-pure rounded-3xl shadow-tactile border border-[--color-ghost-strong]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={close}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-pure border border-[--color-ghost-strong] hover:bg-porcelain transition"
        >
          <X size={16} />
        </button>

        {/* Progress bar */}
        <div className="h-1 bg-porcelain">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: step === 'A' ? '33%' : step === 'B' ? '66%' : '100%' }}
          />
        </div>

        <div className="p-7 md:p-9">
          {/* Step A */}
          {step === 'A' && (
            <form onSubmit={handleEnrich}>
              <span className="badge-pill inline-flex">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                01 / 03 · Identification
              </span>
              <h2 className="headline mt-5 text-2xl">{copy.headline}</h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">{copy.subheadline}</p>

              <label className="block mt-6">
                <span className={labelBase}>Email professionnel</span>
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="vous@entreprise.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputBase}
                />
              </label>

              {(personaId === 'P12' || intent === 'assurance') && (
                <label className="mt-4 flex items-start gap-3 p-3 rounded-2xl border border-[--color-ghost-strong] bg-porcelain cursor-pointer">
                  <input
                    type="checkbox"
                    checked={insuranceRefused}
                    onChange={(e) => setInsuranceRefused(e.target.checked)}
                    className="mt-0.5 accent-ink"
                  />
                  <span className="text-sm text-graphite">
                    Mon assureur cyber a refusé / non-renouvelé récemment
                  </span>
                </label>
              )}

              <button
                type="submit"
                disabled={enriching || !email}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {enriching ? (
                  <><Loader2 className="animate-spin" size={16} /> Analyse en cours…</>
                ) : (
                  <>{copy.cta} <ArrowRight size={16} /></>
                )}
              </button>

              {submitError && (
                <p className="mt-3 text-xs text-danger">Erreur : {submitError}</p>
              )}

              <p className="mt-6 text-[10px] text-fog leading-relaxed inline-flex items-start gap-1.5">
                <Shield size={11} className="mt-0.5 shrink-0" />
                <span>
                  RGPD-by-design · Aucune donnée vendue ·{' '}
                  <a href="/cgu-outbound" className="text-accent underline-offset-4 hover:underline">
                    Politique de prospection
                  </a>
                </span>
              </p>
            </form>
          )}

          {/* Step B */}
          {step === 'B' && enrichData && (
            <div>
              <span className="badge-pill inline-flex">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                02 / 03 · Validation
              </span>
              <h2 className="headline mt-5 text-2xl">Confirmez vos informations</h2>

              {enrichData.sirene && (
                <div className="mt-5 rounded-2xl bg-porcelain border border-[--color-ghost-strong] p-4 text-sm">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fog mb-1">
                    Détecté automatiquement (Sirene)
                  </div>
                  <p className="text-ink">
                    <strong>{enrichData.sirene.nom_complet}</strong>
                    {enrichData.sirene.naf_label && (
                      <span className="text-graphite"> · {enrichData.sirene.naf_label}</span>
                    )}
                  </p>
                  {enrichData.sirene.nis2_classification &&
                    enrichData.sirene.nis2_classification !== 'hors_scope' && (
                      <p className="mt-2 text-accent text-xs inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Classification NIS2 :{' '}
                        <strong>
                          {enrichData.sirene.nis2_classification === 'essentielle'
                            ? 'Entité essentielle'
                            : 'Entité importante'}
                        </strong>
                      </p>
                    )}
                </div>
              )}

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className={labelBase}>Société</span>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={inputBase}
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label>
                    <span className={labelBase}>Prénom</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputBase}
                    />
                  </label>
                  <label>
                    <span className={labelBase}>Nom</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={inputBase}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={labelBase}>Fonction</span>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Dirigeant / DSI / RSSI / DPO"
                    className={inputBase}
                  />
                </label>

                {personaId === 'P12' && (
                  <label className="block">
                    <span className={labelBase}>Assureur cyber actuel/sollicité</span>
                    <select
                      value={insuranceCompany}
                      onChange={(e) => setInsuranceCompany(e.target.value)}
                      className={inputBase}
                    >
                      <option value="generic">Autre / Plusieurs assureurs</option>
                      <option value="axa">AXA Cyber</option>
                      <option value="hiscox">Hiscox CyberClear</option>
                      <option value="generali">Generali Cyber</option>
                      <option value="allianz">Allianz Cyber Protect</option>
                    </select>
                  </label>
                )}
              </div>

              {/* Score live */}
              <div className="mt-6 rounded-2xl bg-ink text-pure p-5">
                <p className="text-[10px] font-mono uppercase tracking-widest text-pure/50 mb-1">
                  Score d'exposition estimé
                </p>
                <p className="text-4xl font-extrabold tracking-tight">
                  {enrichData.breach_risk_score}<span className="text-pure/40 text-2xl">/100</span>
                </p>
                {enrichData.breach_signal && (
                  <p className="mt-2 text-xs text-danger inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-danger" />
                    Signal breach détecté
                  </p>
                )}
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => setStep('A')}
                  className="inline-flex items-center justify-center px-4 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain transition"
                  aria-label="Retour"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {submitting ? (
                    <><Loader2 className="animate-spin" size={16} /> Génération…</>
                  ) : (
                    <>Recevoir mon rapport <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step C */}
          {step === 'C' && submitted && (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success-soft mb-5">
                <CheckCircle2 size={32} className="text-success" />
              </div>
              <h2 className="headline text-2xl mb-3">Bien reçu</h2>
              <p className="text-sm text-graphite max-w-sm mx-auto leading-relaxed">{resultMessage}</p>
              <a
                href="https://cal.eu/getagenzia/discovery-15"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft transition"
              >
                Réserver un appel
                <ArrowRight size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetSmartForm;
