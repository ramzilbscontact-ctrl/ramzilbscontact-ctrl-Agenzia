/**
 * Billing/Success — page de retour après paiement Stripe réussi.
 *
 * URL: /billing/success?session_id=cs_live_xxx
 *
 * Affiche un message de confirmation + propose 2 actions :
 * - Magic-link login pour accéder au dashboard /account (si user pas déjà connecté)
 * - Direct redirect /account si JWT déjà présent
 *
 * V2 future: appellera /api/billing/session/{id} pour confirmer + populer user.
 */
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import PageLayout from '../../components/PageLayout';
import { requestMagicLink, authStorage } from '../../lib/auth';

const Success: React.FC = () => {
  const [params] = useSearchParams();
  const sessionId = params.get('session_id') || '';
  const [isAuth] = useState(() => !!authStorage.get());
  const [email, setEmail] = useState('');
  const [magicSent, setMagicSent] = useState(false);
  const [sending, setSending] = useState(false);

  // Tracking conversion
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('checkout_success', { session_id: sessionId });
    }
  }, [sessionId]);

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSending(true);
    await requestMagicLink(email);
    setSending(false);
    setMagicSent(true);
  };

  return (
    <PageLayout
      title="Bienvenue chez Agenzia"
      badge="Paiement confirmé"
      badgeVariant="accent"
      maxWidth="prose"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        {/* Icône de succès */}
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-success-soft mb-8">
          <CheckCircle2 className="text-success" size={40} strokeWidth={2.4} />
        </div>

        <h2 className="headline text-2xl md:text-3xl mb-4">
          Votre abonnement Pro est actif 🎉
        </h2>
        <p className="text-graphite leading-relaxed text-base md:text-lg mb-2">
          Un email de confirmation Stripe vous arrive dans quelques secondes avec votre facture
          et les détails de votre abonnement.
        </p>
        <p className="text-graphite leading-relaxed mb-10">
          <strong className="text-ink">Prochaine étape :</strong> télécharger l'agent Agenzia sur vos
          postes (vous avez 48h pour l'onboarding, ou remboursé).
        </p>

        {/* CTA selon état auth */}
        {isAuth ? (
          <Link
            to="/account"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-pure font-semibold text-sm hover:bg-ink-soft transition shadow-tactile"
          >
            <Sparkles size={16} />
            Accéder à mon tableau de bord
            <ArrowRight size={14} />
          </Link>
        ) : magicSent ? (
          <div className="card-porcelain p-6 md:p-8 text-left max-w-md mx-auto">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-success-soft mb-4">
              <Mail className="text-success" size={20} />
            </div>
            <h3 className="headline text-lg mb-2">Lien envoyé !</h3>
            <p className="text-sm text-graphite leading-relaxed">
              Un lien de connexion sécurisé vient d'être envoyé à <strong className="text-ink">{email}</strong>.
              Cliquez dessus pour activer votre compte (lien valable 15 minutes).
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSendMagicLink}
            className="card-porcelain p-6 md:p-8 max-w-md mx-auto text-left"
          >
            <h3 className="headline text-lg mb-2">Activer votre compte</h3>
            <p className="text-sm text-graphite leading-relaxed mb-5">
              Recevez un lien sécurisé par email pour accéder à votre tableau de bord et télécharger
              l'agent Agenzia.
            </p>
            <input
              type="email"
              required
              autoFocus
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@entreprise.fr"
              className="w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition mb-4"
            />
            <button
              type="submit"
              disabled={sending || !email}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {sending ? 'Envoi…' : <><Mail size={14} /> Recevoir mon lien d'accès</>}
            </button>
          </form>
        )}

        {/* Détails session pour support */}
        {sessionId && (
          <p className="mt-12 text-[11px] text-fog font-mono">
            Référence transaction : {sessionId.slice(0, 24)}…
          </p>
        )}
      </motion.div>
    </PageLayout>
  );
};

export default Success;
