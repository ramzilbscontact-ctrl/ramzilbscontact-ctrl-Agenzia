/**
 * ContactSection — Agenzia Pure (form glass-card avec inputs porcelaine et bouton pill ink).
 *
 * Webhook n8n inchangé, validation HTML5, états loading/success/error gérés.
 */
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { identifyLead, trackEvent } from '../lib/posthog';

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  postes: string;
  message: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

// Endpoint backend Agenzia ai_bridge — env-configurable, fallback prod
const API_BASE = (import.meta.env.VITE_BRIDGE_URL as string) || 'https://api.getagenzia.fr';
const WEBHOOK_URL = `${API_BASE}/api/leads/contact`;

const inputBase =
  'w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition';
const labelBase = 'block text-xs font-semibold text-graphite mb-2';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '', email: '', telephone: '', entreprise: '', postes: '', message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage(null);
    trackEvent('contact_form_submitted', { postes: formData.postes || 'unknown' });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText.slice(0, 200)}`);
      }
      identifyLead(formData.email, { email: formData.email, company: formData.entreprise || 'unknown' });
      trackEvent('lead_created', { source: 'contact_form' });
      setFormState('success');
      setFormData({ nom: '', email: '', telephone: '', entreprise: '', postes: '', message: '' });
    } catch (err: any) {
      clearTimeout(timeoutId);
      trackEvent('contact_form_failed', { source: 'contact_form' });
      setErrorMessage(err?.name === 'AbortError' ? "Délai d'attente dépassé. Réessayez." : err?.message || 'Erreur inconnue');
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="relative bg-porcelain section-ghost py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="badge-pill inline-flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            Contact
          </span>
          <h2 className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
            Parlons de{' '}
            <span className="italic font-medium text-graphite">votre projet.</span>
          </h2>
          <p className="mt-6 text-lg text-graphite leading-relaxed">
            Notre équipe vous répond sous 24h. Décrivez vos besoins, nous proposons une solution sur-mesure.
          </p>
        </div>

        {/* Success */}
        {formState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-porcelain p-8 md:p-10 mb-8 flex items-center gap-6"
          >
            <CheckCircle2 className="w-12 h-12 text-success shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-success mb-1">Message envoyé</div>
              <h3 className="headline text-2xl mb-1">Demande bien reçue</h3>
              <p className="text-graphite">Un expert Agenzia vous contactera sous 24h.</p>
            </div>
          </motion.div>
        )}

        {/* Error */}
        {formState === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-danger-soft border border-danger/20 p-6 mb-8 flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-danger shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-xs font-mono uppercase tracking-widest text-danger mb-1">Erreur</div>
              <p className="text-graphite mb-2">Une erreur est survenue. Réessayez ou contactez-nous directement.</p>
              {errorMessage && (
                <pre className="text-xs text-danger font-mono mt-2 p-2 bg-pure/50 rounded-lg overflow-x-auto whitespace-pre-wrap">
                  {errorMessage}
                </pre>
              )}
              <button
                onClick={() => { setFormState('idle'); setErrorMessage(null); }}
                className="mt-3 text-xs font-medium text-ink underline underline-offset-4 hover:text-graphite"
              >
                Réessayer
              </button>
            </div>
          </motion.div>
        )}

        {/* Form */}
        {formState !== 'success' && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nom" className={labelBase}>Nom complet *</label>
                <input id="nom" name="nom" type="text" required value={formData.nom} onChange={handleChange}
                  placeholder="Jean Dupont" className={inputBase} />
              </div>
              <div>
                <label htmlFor="email" className={labelBase}>Email pro *</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                  placeholder="jean@entreprise.fr" className={inputBase} />
              </div>
              <div>
                <label htmlFor="telephone" className={labelBase}>Téléphone</label>
                <input id="telephone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange}
                  placeholder="+33 6 00 00 00 00" className={inputBase} />
              </div>
              <div>
                <label htmlFor="entreprise" className={labelBase}>Entreprise *</label>
                <input id="entreprise" name="entreprise" type="text" required value={formData.entreprise} onChange={handleChange}
                  placeholder="Votre société" className={inputBase} />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="postes" className={labelBase}>Nombre de postes *</label>
                <select id="postes" name="postes" required value={formData.postes} onChange={handleChange} className={inputBase}>
                  <option value="" disabled>Sélectionnez une tranche</option>
                  <option value="1-10">1 – 10 postes</option>
                  <option value="11-50">11 – 50 postes</option>
                  <option value="51-200">51 – 200 postes</option>
                  <option value="200+">200+ postes</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className={labelBase}>Décrivez votre besoin *</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Infrastructure, enjeux NIS2, objectifs..." className={`${inputBase} resize-none`} />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[--color-ghost]">
              <p className="text-xs text-mist">Réponse garantie sous 24h · Aucun engagement</p>
              <motion.button
                type="submit"
                disabled={formState === 'loading'}
                whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                className="btn-tactile inline-flex items-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi…
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send size={14} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
