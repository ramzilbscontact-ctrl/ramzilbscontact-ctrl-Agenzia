/**
 * LeadMagnetModal — Agenzia Pure (modal callback OR diagnostic, déclenché via custom event).
 *
 * Trigger:
 *   window.dispatchEvent(new CustomEvent('open-lead-magnet', { detail: { intent: 'callback' } }))
 *   ou intent: 'diagnostic'
 *
 * 2 modes :
 * - callback : Clara fait un outbound call via FastAPI bridge
 * - diagnostic : email confirmation immediate
 */
import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import CalEmbed from './CalEmbed';

type Intent = 'diagnostic' | 'callback';

const BRIDGE_URL =
  (typeof window !== 'undefined' && (window as any).__BRIDGE_URL__) ||
  'https://api.getagenzia.fr';

const LEAD_MAGNET_WEBHOOK = `${BRIDGE_URL}/webhook/lead-magnet`;
const CALLBACK_ENDPOINT = `${BRIDGE_URL}/webhook/callback-request`;

const inputClass =
  'w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition';
const labelClass = 'block text-xs font-semibold text-graphite mb-2';

const LeadMagnetModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [intent, setIntent] = useState<Intent>('diagnostic');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setError(null);
      setIntent('diagnostic');
    }, 300);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.intent === 'callback' || detail?.intent === 'diagnostic') {
        setIntent(detail.intent);
      }
      setIsOpen(true);
    };
    window.addEventListener('open-lead-magnet', handler);
    return () => window.removeEventListener('open-lead-magnet', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const endpoint = intent === 'callback' ? CALLBACK_ENDPOINT : LEAD_MAGNET_WEBHOOK;
      const body = intent === 'callback'
        ? {
            email: data.email,
            phone: data.phone,
            company_name: data.company_name || null,
            first_name: data.first_name || null,
            preferred_window: data.preferred_window || 'asap',
            consent_rgpd: true,
          }
        : { ...data, intent: 'diagnostic' };

      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur ${response.status} : ${errorText.slice(0, 200)}`);
      }

      if (intent === 'callback') {
        const res = await response.json();
        setSuccessMessage(res.message || `On vous rappelle dans moins de 2 minutes au ${data.phone}.`);
      } else {
        setSuccessMessage('Merci ! Votre diagnostic arrive par email dans les prochaines minutes.');
      }
      setIsSubmitted(true);
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        setError("Délai d'attente dépassé. Vérifiez votre connexion et réessayez.");
      } else {
        setError(err.message || 'Une erreur est survenue. Réessayez ou contactez hello@getagenzia.fr');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/30 backdrop-blur-sm p-4"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-pure rounded-3xl shadow-tactile border border-[--color-ghost-strong]">
        <button
          onClick={closeModal}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 h-9 w-9 inline-flex items-center justify-center rounded-full bg-pure border border-[--color-ghost-strong] hover:bg-porcelain transition"
        >
          <X size={16} />
        </button>

        <div className="p-7 md:p-9">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success-soft mb-5">
                <CheckCircle2 size={32} className="text-success" />
              </div>
              <h2 className="headline text-2xl mb-3">
                {intent === 'callback' ? 'On vous rappelle !' : 'Vérifiez votre boîte mail'}
              </h2>
              <p className="text-sm text-graphite leading-relaxed max-w-sm mx-auto">{successMessage}</p>

              <div className="mt-6 pt-6 border-t border-[--color-ghost]">
                <p className="text-xs text-mist mb-3">Préférez choisir un créneau précis ?</p>
                <CalEmbed compact />
              </div>
            </div>
          ) : (
            <>
              <h2 className="headline text-2xl">Diagnostic NIS2 gratuit</h2>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Compatible PME 50–250 salariés · Diagnostic offert en 7 minutes
              </p>

              {/* Intent toggle */}
              <div className="mt-6 grid grid-cols-2 gap-2 p-1 rounded-2xl bg-porcelain border border-[--color-ghost-strong]">
                <button
                  type="button"
                  onClick={() => setIntent('diagnostic')}
                  className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition ${
                    intent === 'diagnostic' ? 'bg-pure text-ink shadow-soft' : 'text-graphite hover:text-ink'
                  }`}
                >
                  <Mail size={14} />
                  Recevoir par email
                </button>
                <button
                  type="button"
                  onClick={() => setIntent('callback')}
                  className={`relative inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition ${
                    intent === 'callback' ? 'bg-pure text-ink shadow-soft' : 'text-graphite hover:text-ink'
                  }`}
                >
                  <Phone size={14} />
                  Être rappelé
                  <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-success-soft text-success font-bold">
                    &lt; 2 min
                  </span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <label className="block">
                  <span className={labelClass}>Email professionnel *</span>
                  <input type="email" name="email" required autoComplete="email" placeholder="vous@entreprise.fr" className={inputClass} />
                </label>

                {intent === 'callback' && (
                  <>
                    <label className="block">
                      <span className={labelClass}>Téléphone *</span>
                      <input
                        type="tel" name="phone" required pattern="^\+?[0-9\s\-]{8,}$"
                        autoComplete="tel" placeholder="+33 6 12 34 56 78" className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Prénom (facultatif)</span>
                      <input type="text" name="first_name" autoComplete="given-name" placeholder="Marie" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Quand vous rappeler ?</span>
                      <select name="preferred_window" defaultValue="asap" className={inputClass}>
                        <option value="asap">Maintenant (&lt; 2 min)</option>
                        <option value="morning">Ce matin (9h-12h)</option>
                        <option value="afternoon">Cet après-midi (14h-18h)</option>
                        <option value="tomorrow">Demain</option>
                      </select>
                    </label>
                  </>
                )}

                <label className="block">
                  <span className={labelClass}>Entreprise (facultatif)</span>
                  <input type="text" name="company_name" autoComplete="organization" placeholder="Nom de votre société" className={inputClass} />
                </label>

                {intent === 'diagnostic' && (
                  <label className="block">
                    <span className={labelClass}>URL de l'entreprise (facultatif)</span>
                    <input type="url" name="company_url" autoComplete="url" placeholder="https://votre-site.fr" className={inputClass} />
                  </label>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {isLoading ? (
                    <><Loader2 className="animate-spin" size={16} /> Envoi…</>
                  ) : intent === 'callback' ? (
                    <>Me rappeler maintenant</>
                  ) : (
                    <>Recevoir mon diagnostic</>
                  )}
                </button>

                <p className="text-[11px] text-fog text-center leading-relaxed">
                  {intent === 'callback'
                    ? 'Clara, notre assistante IA, vous rappellera pour qualifier votre besoin.'
                    : 'Vos données sont sécurisées. Conforme RGPD.'}
                </p>

                {error && (
                  <div className="rounded-2xl bg-danger-soft border border-danger/20 p-3 text-xs text-danger">
                    <strong>Erreur :</strong> {error}
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetModal;
