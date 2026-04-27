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

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4" onClick={close}>
      <div
        className="relative w-full max-w-lg bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 p-2 hover:bg-zinc-100"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Progress bar */}
        <div className="h-1 bg-zinc-100">
          <div
            className="h-full bg-[#0066FF] transition-all"
            style={{ width: step === 'A' ? '33%' : step === 'B' ? '66%' : '100%' }}
          />
        </div>

        <div className="p-8">
          {/* Step A */}
          {step === 'A' && (
            <form onSubmit={handleEnrich}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                01 / 03 — Identification
              </p>
              <h2 className="text-2xl font-serif font-bold mb-2">{copy.headline}</h2>
              <p className="text-sm text-zinc-600 mb-6">{copy.subheadline}</p>

              <label className="block mb-4">
                <span className="text-xs font-mono uppercase tracking-widest mb-1 block">
                  Email professionnel
                </span>
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="vous@entreprise.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-black px-4 py-3 text-base focus:outline-none focus:bg-zinc-50"
                />
              </label>

              {(personaId === 'P12' || intent === 'assurance') && (
                <label className="flex items-start gap-2 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={insuranceRefused}
                    onChange={(e) => setInsuranceRefused(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-sm">
                    Mon assureur cyber a refusé ma couverture / non-renouvelé récemment
                  </span>
                </label>
              )}

              <button
                type="submit"
                disabled={enriching || !email}
                className="w-full bg-black text-white px-6 py-4 text-sm font-mono uppercase tracking-widest hover:bg-zinc-800 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {enriching ? <><Loader2 className="animate-spin" size={16} /> Analyse en cours…</> : <>{copy.cta} <ArrowRight size={16} /></>}
              </button>

              {submitError && (
                <p className="text-xs text-red-600 mt-3">Erreur : {submitError}</p>
              )}

              <p className="text-[10px] text-zinc-400 mt-6 leading-relaxed">
                <Shield size={10} className="inline mr-1" />
                RGPD-by-design · Aucune donnée vendue · <a href="/cgu-outbound" className="underline">Politique de prospection</a>
              </p>
            </form>
          )}

          {/* Step B */}
          {step === 'B' && enrichData && (
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                02 / 03 — Validation
              </p>
              <h2 className="text-2xl font-serif font-bold mb-4">Confirmez vos informations</h2>

              {enrichData.sirene && (
                <div className="bg-zinc-50 border border-zinc-200 p-4 mb-4 text-xs">
                  <p className="font-mono text-zinc-500 mb-1">Détecté automatiquement</p>
                  <p>
                    <strong>{enrichData.sirene.nom_complet}</strong>
                    {enrichData.sirene.naf_label && <> · {enrichData.sirene.naf_label}</>}
                  </p>
                  {enrichData.sirene.nis2_classification !== 'hors_scope' && (
                    <p className="mt-1 text-[#0066FF]">
                      ⚠️ Classification NIS2 : <strong>
                        {enrichData.sirene.nis2_classification === 'essentielle' ? 'Entité essentielle' : 'Entité importante'}
                      </strong>
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-3">
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest mb-1 block">Société</span>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full border-2 border-black px-3 py-2 text-sm"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label>
                    <span className="text-xs font-mono uppercase tracking-widest mb-1 block">Prénom</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border-2 border-black px-3 py-2 text-sm"
                    />
                  </label>
                  <label>
                    <span className="text-xs font-mono uppercase tracking-widest mb-1 block">Nom</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border-2 border-black px-3 py-2 text-sm"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest mb-1 block">Fonction</span>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Dirigeant / DSI / RSSI / DPO"
                    className="w-full border-2 border-black px-3 py-2 text-sm"
                  />
                </label>

                {personaId === 'P12' && (
                  <label className="block">
                    <span className="text-xs font-mono uppercase tracking-widest mb-1 block">Assureur cyber actuel/sollicité</span>
                    <select
                      value={insuranceCompany}
                      onChange={(e) => setInsuranceCompany(e.target.value)}
                      className="w-full border-2 border-black px-3 py-2 text-sm bg-white"
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
              <div className="mt-6 bg-black text-white p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                  Score d'exposition estimé
                </p>
                <p className="text-3xl font-bold">
                  {enrichData.breach_risk_score}/100
                </p>
                {enrichData.breach_signal && (
                  <p className="text-[10px] text-red-400 mt-1">⚠️ Signal breach détecté</p>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep('A')} className="px-4 py-3 border-2 border-black text-sm font-mono uppercase tracking-widest">
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 bg-[#0066FF] text-white px-6 py-3 text-sm font-mono uppercase tracking-widest hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? <><Loader2 className="animate-spin" size={16} /> Génération…</> : <>Recevoir mon rapport <ArrowRight size={16} /></>}
                </button>
              </div>
            </div>
          )}

          {/* Step C */}
          {step === 'C' && submitted && (
            <div className="text-center py-8">
              <CheckCircle2 size={56} className="mx-auto text-green-600 mb-4" />
              <h2 className="text-2xl font-serif font-bold mb-3">Reçu</h2>
              <p className="text-sm text-zinc-600 mb-6 max-w-sm mx-auto">{resultMessage}</p>
              <a
                href="https://cal.eu/getagenzia/discovery-15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-zinc-800"
              >
                Réserver 15 min avec Ramzi →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetSmartForm;
