import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
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

const WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL || 'https://n8nhook.zenocci.fr/webhook/contact';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    postes: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    trackEvent('contact_form_submitted', { postes: formData.postes || 'unknown' });

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      identifyLead(formData.email, {
        email: formData.email,
        company: formData.entreprise || 'unknown',
      });
      trackEvent('lead_created', { source: 'contact_form' });
      setFormState('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        postes: '',
        message: '',
      });
    } catch {
      trackEvent('contact_form_failed', { source: 'contact_form' });
      setFormState('error');
    }
  };

  const inputBase =
    'w-full bg-white border-[2px] border-black px-4 py-3 text-sm font-mono text-black placeholder-zinc-400 focus:outline-none focus:border-brand-accent transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(var(--color-brand-accent),1)]';

  const labelBase = 'block text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2';

  return (
    <section id="contact" className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">
              06 // CONTACT
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              PARLONS DE<br />
              <span className="italic font-light text-brand-accent">VOTRE PROJET.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-zinc-500 font-serif text-lg leading-relaxed">
              Notre équipe vous répond sous 24h. Décrivez vos besoins et nous vous proposerons
              une solution sur mesure.
            </p>
          </div>
        </div>

        {/* Success State */}
        {formState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-[3px] border-black bg-white p-12 shadow-tactile mb-12 flex flex-col md:flex-row items-center gap-8"
          >
            <CheckCircle className="w-16 h-16 text-brand-accent flex-shrink-0" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent mb-2">
                MESSAGE ENVOYÉ //
              </div>
              <h3 className="text-3xl font-black font-serif uppercase tracking-tighter mb-2">
                Nous avons bien reçu votre demande.
              </h3>
              <p className="font-serif text-zinc-500 text-lg">
                Un expert Agenzia vous contactera dans les 24 heures pour discuter de votre projet.
              </p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {formState === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-[3px] border-black bg-white p-8 shadow-tactile mb-12 flex items-center gap-6"
          >
            <AlertCircle className="w-10 h-10 text-red-600 flex-shrink-0" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-600 mb-1">
                ERREUR D'ENVOI //
              </div>
              <p className="font-serif text-zinc-700">
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement à{' '}
                <a href="mailto:contact@zenocci.fr" className="underline hover:text-brand-accent transition-colors">
                  contact@zenocci.fr
                </a>
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-3 text-[10px] font-mono uppercase tracking-widest underline hover:text-brand-accent transition-colors"
              >
                Réessayer
              </button>
            </div>
          </motion.div>
        )}

        {/* Form */}
        {formState !== 'success' && (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="border-[3px] border-black shadow-tactile bg-white"
          >
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className={labelBase}>
                  Nom complet <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelBase}>
                  Email professionnel <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.fr"
                  className={inputBase}
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className={labelBase}>
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+33 6 00 00 00 00"
                  className={inputBase}
                />
              </div>

              {/* Entreprise */}
              <div>
                <label htmlFor="entreprise" className={labelBase}>
                  Entreprise <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="entreprise"
                  name="entreprise"
                  type="text"
                  required
                  value={formData.entreprise}
                  onChange={handleChange}
                  placeholder="Votre société"
                  className={inputBase}
                />
              </div>

              {/* Nombre de postes */}
              <div className="md:col-span-2">
                <label htmlFor="postes" className={labelBase}>
                  Nombre de postes <span className="text-brand-accent">*</span>
                </label>
                <select
                  id="postes"
                  name="postes"
                  required
                  value={formData.postes}
                  onChange={handleChange}
                  className={inputBase}
                >
                  <option value="" disabled>
                    Sélectionnez une tranche
                  </option>
                  <option value="1-10">1 – 10 postes</option>
                  <option value="11-50">11 – 50 postes</option>
                  <option value="51-200">51 – 200 postes</option>
                  <option value="200+">200+ postes</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className={labelBase}>
                  Décrivez votre besoin <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre infrastructure, vos enjeux de conformité NIS2, vos objectifs..."
                  className={`${inputBase} resize-none`}
                />
              </div>
            </div>

            {/* Submit row */}
            <div className="border-t-[2px] border-black px-8 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-50">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Réponse garantie sous 24h — Aucun engagement
              </p>
              <motion.button
                type="submit"
                disabled={formState === 'loading'}
                whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                className="bg-black text-white px-12 py-5 text-[10px] font-mono uppercase tracking-widest border-[2px] border-black shadow-tactile hover:shadow-tactile-accent hover:bg-brand-accent transition-all duration-200 flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-4 h-4" />
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
