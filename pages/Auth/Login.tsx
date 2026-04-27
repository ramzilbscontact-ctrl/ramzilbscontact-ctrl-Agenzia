/**
 * Auth/Login — page de demande de lien magic-link.
 *
 * URL: /login
 * Form ultra-simple : email → submit → message "Email envoyé, regardez votre boîte"
 */
import React, { useState } from 'react';
import { Loader2, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import { requestMagicLink } from '../../lib/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await requestMagicLink(email);
    setLoading(false);
    setSent(true);
  };

  return (
    <PageLayout
      title={sent ? 'Email envoyé' : 'Connexion'}
      badge="Authentification"
      subtitle={
        sent
          ? `Si un compte existe pour ${email}, un lien de connexion vient d'être envoyé. Le lien expire dans 15 minutes.`
          : 'Entrez votre email professionnel. On vous envoie un lien sécurisé pour accéder à votre tableau de bord.'
      }
      maxWidth="prose"
    >
      {sent ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success-soft mb-6">
            <CheckCircle2 className="text-success" size={32} />
          </div>
          <p className="text-graphite leading-relaxed mb-6 max-w-sm mx-auto">
            Vérifiez votre boîte mail (et le dossier spam au cas où). Cliquez sur le bouton dans l'email pour vous connecter.
          </p>
          <button
            onClick={() => { setSent(false); setEmail(''); }}
            className="text-sm text-mist hover:text-ink underline-offset-4 hover:underline"
          >
            Utiliser un autre email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-8">
          <label className="block">
            <span className="block text-xs font-semibold text-graphite mb-2">Email professionnel</span>
            <input
              type="email"
              required
              autoFocus
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@entreprise.fr"
              className="w-full bg-pure border border-[--color-ghost-strong] rounded-2xl px-4 py-3 text-sm text-ink placeholder-fog focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition"
            />
          </label>

          <button
            type="submit"
            disabled={loading || !email}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Envoi…</>
            ) : (
              <><Mail size={16} /> Recevoir mon lien <ArrowRight size={14} /></>
            )}
          </button>

          <p className="mt-6 text-xs text-fog text-center leading-relaxed">
            Pas de mot de passe à retenir. Lien sécurisé valable 15 minutes, à usage unique.
          </p>
        </form>
      )}
    </PageLayout>
  );
};

export default Login;
