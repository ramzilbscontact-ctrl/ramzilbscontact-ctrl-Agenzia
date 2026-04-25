import React, { useState, useEffect } from 'react';
import './LeadMagnetModal.css';
import { X, Mail, Phone, CheckCircle2 } from 'lucide-react';

type Intent = 'diagnostic' | 'callback';

const BRIDGE_URL =
  (typeof window !== 'undefined' && (window as any).__BRIDGE_URL__) ||
  'https://api.getagenzia.fr';

const LEAD_MAGNET_WEBHOOK = `${BRIDGE_URL}/webhook/lead-magnet`;
const CALLBACK_ENDPOINT = `${BRIDGE_URL}/webhook/callback-request`;

const LeadMagnetModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [intent, setIntent] = useState<Intent>('diagnostic');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    // Reset state après fermeture
    setTimeout(() => {
      setIsSubmitted(false);
      setError(null);
      setIntent('diagnostic');
    }, 300);
  };

  useEffect(() => {
    const trigger = document.getElementById('open-lead-magnet');
    const handler = (e: Event) => {
      e.preventDefault();
      openModal();
    };
    if (trigger) {
      trigger.addEventListener('click', handler);
    }

    const customHandler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.intent === 'callback' || detail?.intent === 'diagnostic') {
        setIntent(detail.intent);
      }
      openModal();
    };
    window.addEventListener('open-lead-magnet', customHandler);

    return () => {
      if (trigger) trigger.removeEventListener('click', handler);
      window.removeEventListener('open-lead-magnet', customHandler);
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      let response: Response;

      if (intent === 'callback') {
        // 📞 Trigger outbound call via FastAPI AI Bridge
        response = await fetch(CALLBACK_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            phone: data.phone,
            company_name: data.company_name || null,
            first_name: data.first_name || null,
            preferred_window: data.preferred_window || 'asap',
            consent_rgpd: true,
          }),
          signal: controller.signal,
        });
        if (response.ok) {
          const res = await response.json();
          setSuccessMessage(res.message || `On vous rappelle dans moins de 2 minutes au ${data.phone}.`);
        }
      } else {
        // 📄 Diagnostic PDF → existing n8n lead magnet webhook
        response = await fetch(LEAD_MAGNET_WEBHOOK, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            intent: 'diagnostic',
          }),
          signal: controller.signal,
        });
        if (response.ok) {
          setSuccessMessage('Merci ! Votre diagnostic arrive par email dans les prochaines minutes.');
        }
      }

      clearTimeout(timeoutId);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorText = await response.text();
        throw new Error(`Erreur ${response.status} : ${errorText.slice(0, 200)}`);
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        setError("Délai d'attente dépassé. Vérifiez votre connexion et réessayez.");
      } else {
        console.error('Error submitting form:', err);
        setError(err.message || 'Une erreur est survenue. Réessayez ou contactez hello@getagenzia.fr');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-card">
        <button className="modal-close-btn" onClick={closeModal} aria-label="Fermer">
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-message">
            <CheckCircle2 size={48} color="#22c55e" style={{ marginBottom: 16 }} />
            <h2>{intent === 'callback' ? 'On vous rappelle !' : 'Merci, vérifiez votre boîte mail !'}</h2>
            <p>{successMessage}</p>
          </div>
        ) : (
          <>
            <h2>Accédez à votre diagnostic NIS2 gratuit</h2>
            <p className="modal-subtitle">
              Compatible PME 50-250 salariés — Diagnostic offert en 7 minutes
            </p>

            {/* Intent selector */}
            <div className="intent-selector">
              <button
                type="button"
                className={`intent-btn ${intent === 'diagnostic' ? 'active' : ''}`}
                onClick={() => setIntent('diagnostic')}
              >
                <Mail size={18} />
                <span>Recevoir par email</span>
              </button>
              <button
                type="button"
                className={`intent-btn ${intent === 'callback' ? 'active' : ''}`}
                onClick={() => setIntent('callback')}
              >
                <Phone size={18} />
                <span>Être rappelé·e</span>
                <span className="intent-badge">&lt; 2 min</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email professionnel *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="vous@entreprise.fr"
                  required
                  autoComplete="email"
                />
              </div>

              {intent === 'callback' && (
                <>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+33 6 12 34 56 78"
                      pattern="^\+?[0-9\s\-]{8,}$"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="first_name">Prénom (facultatif)</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Marie"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferred_window">Quand vous rappeler ?</label>
                    <select id="preferred_window" name="preferred_window" defaultValue="asap">
                      <option value="asap">Maintenant (&lt; 2 min)</option>
                      <option value="morning">Ce matin (9h-12h)</option>
                      <option value="afternoon">Cet après-midi (14h-18h)</option>
                      <option value="tomorrow">Demain</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="company_name">Entreprise (facultatif)</label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  placeholder="Nom de votre société"
                  autoComplete="organization"
                />
              </div>

              {intent === 'diagnostic' && (
                <div className="form-group">
                  <label htmlFor="company_url">URL de l'entreprise (facultatif)</label>
                  <input
                    type="url"
                    id="company_url"
                    name="company_url"
                    placeholder="https://votre-site.fr"
                    autoComplete="url"
                  />
                </div>
              )}

              <button type="submit" className="modal-submit-btn" disabled={isLoading}>
                {isLoading
                  ? 'Envoi en cours…'
                  : intent === 'callback'
                  ? '📞 Me rappeler maintenant'
                  : "📄 Recevoir mon diagnostic"}
              </button>

              <p className="modal-footer-text">
                {intent === 'callback'
                  ? '🔒 Clara, notre assistante IA, vous rappellera pour qualifier votre besoin.'
                  : '🔒 Vos données sont sécurisées. Conforme RGPD.'}
              </p>

              {error && (
                <div className="modal-error-box">
                  <strong>Erreur :</strong> {error}
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;
