/**
 * Auth/Verify — page d'atterrissage du lien magic-link reçu par email.
 *
 * URL: /auth/verify?token=xxx
 * Comportement:
 * 1. Récupère le token depuis le query string
 * 2. POST /api/auth/verify → JWT stocké en localStorage
 * 3. Redirige vers /account
 * 4. Si erreur (token invalide/expiré) → affiche message + lien "Demander un nouveau lien"
 */
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import { verifyMagicLink } from '../../lib/auth';

const Verify: React.FC = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [state, setState] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const token = params.get('token');
    if (!token) {
      setState('error');
      setError('Lien invalide : token manquant.');
      return;
    }
    (async () => {
      const r = await verifyMagicLink(token);
      if (r.ok) {
        setState('success');
        setTimeout(() => navigate('/account', { replace: true }), 800);
      } else {
        setState('error');
        setError(r.error || 'Lien invalide ou expiré');
      }
    })();
  }, [params, navigate]);

  return (
    <PageLayout
      title={state === 'success' ? 'Connexion réussie' : state === 'error' ? 'Lien invalide' : 'Connexion en cours…'}
      badge="Authentification"
      maxWidth="prose"
    >
      <div className="text-center py-8">
        {state === 'loading' && (
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-porcelain border border-[--color-ghost-strong] mb-6">
            <Loader2 className="animate-spin text-graphite" size={28} />
          </div>
        )}
        {state === 'success' && (
          <>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success-soft mb-6">
              <CheckCircle2 className="text-success" size={32} />
            </div>
            <p className="text-graphite leading-relaxed">
              Redirection vers votre tableau de bord…
            </p>
          </>
        )}
        {state === 'error' && (
          <>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-danger-soft mb-6">
              <AlertCircle className="text-danger" size={32} />
            </div>
            <p className="text-graphite leading-relaxed mb-8 max-w-sm mx-auto">
              {error}. Les liens de connexion expirent au bout de 15 minutes et ne sont valables qu'une seule fois.
            </p>
            <Link to="/login" className="btn-tactile group text-sm">
              Demander un nouveau lien
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Verify;
