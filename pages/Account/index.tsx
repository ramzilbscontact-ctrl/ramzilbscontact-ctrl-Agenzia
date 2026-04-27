/**
 * Account/index — Dashboard utilisateur "Mon compte" (V1 minimal).
 *
 * Auth required: /api/me. Si pas de JWT → redirige /login.
 *
 * V1 affiche :
 * - Email + nom + société
 * - Plan actuel + status abonnement Stripe
 * - Bouton "Gérer mon abonnement" (Stripe Customer Portal — V2)
 * - Bouton "Déconnexion"
 *
 * V2 ajoutera : mes appareils, mes factures, chatbot Clara support actions.
 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { LogOut, ExternalLink, Crown, Loader2 } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import { useAuth, logout } from '../../lib/auth';

const PLAN_BADGE_CLASS: Record<string, string> = {
  free: 'badge-pill',
  pro: 'badge-pill badge-pill-accent',
  enterprise: 'badge-pill bg-ink text-pure border-ink',
};

const Account: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <PageLayout title="Mon compte" badge="Tableau de bord" maxWidth="wide">
        <div className="text-center py-16">
          <Loader2 className="animate-spin text-graphite mx-auto" size={28} />
        </div>
      </PageLayout>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageLayout title="Mon compte" badge="Tableau de bord" maxWidth="wide">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Card identité */}
        <div className="card-porcelain p-8 md:col-span-2">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-fog mb-5">
            Identité
          </div>
          <div className="space-y-4">
            <Field label="Email" value={user.email} />
            <Field label="Nom" value={user.full_name || '—'} />
            <Field label="Entreprise" value={user.company_name || '—'} />
            {user.last_login_at && (
              <Field
                label="Dernière connexion"
                value={new Date(user.last_login_at).toLocaleString('fr-FR')}
              />
            )}
          </div>
        </div>

        {/* Card abonnement */}
        <div className="rounded-3xl bg-ink text-pure p-8 shadow-tactile">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-pure/50 mb-5">
            Abonnement
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className={PLAN_BADGE_CLASS[user.plan] || 'badge-pill'}>
              <Crown size={11} strokeWidth={2.4} />
              Plan {user.plan}
            </span>
          </div>
          <div className="text-2xl font-extrabold tracking-tight">
            {user.plan === 'free' ? 'Gratuit' : user.plan === 'enterprise' ? 'Sur-mesure' : '49€/mois/poste'}
          </div>
          {user.subscription_status && (
            <p className="mt-2 text-xs text-pure/60">
              Statut : <span className="font-semibold text-pure">{user.subscription_status}</span>
            </p>
          )}
          {user.seats_count > 0 && (
            <p className="mt-1 text-xs text-pure/60">
              Postes actifs : <span className="font-semibold text-pure">{user.seats_count}</span>
            </p>
          )}

          <button
            disabled
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-pure/10 text-pure/50 text-sm font-medium cursor-not-allowed"
            title="Bientôt disponible"
          >
            Gérer mon abonnement
            <ExternalLink size={14} />
          </button>
          <p className="mt-2 text-[10px] text-pure/40 text-center">
            Stripe Customer Portal — disponible bientôt
          </p>
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-sm font-medium text-graphite hover:text-ink transition"
        >
          <LogOut size={14} />
          Se déconnecter
        </button>
      </div>
    </PageLayout>
  );
};

const Field: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-baseline gap-4 py-3 border-b border-[--color-ghost] last:border-0">
    <span className="text-xs text-mist font-medium shrink-0">{label}</span>
    <span className="text-sm text-ink font-medium text-right break-all">{value}</span>
  </div>
);

export default Account;
