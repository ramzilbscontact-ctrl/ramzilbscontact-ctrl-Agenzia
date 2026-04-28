/**
 * StripeBuyButton — Wrapper React pour le Web Component Stripe Buy Button.
 *
 * Avantages vs notre /billing/checkout custom:
 * - Stripe héberge tout (collecte email/nom/adresse, paiement, customer creation)
 * - Marche direct en LIVE sans config backend complexe
 * - Pas de soucis "Accounts V2 testmode customer required"
 * - Design Stripe (cohérent avec le checkout après-clic)
 *
 * Limitations vs custom checkout :
 * - Pas de metadata custom au moment du clic (mais récupérable via webhook)
 * - Pas de pre-fill quantity dynamique côté frontend (config sur la price Stripe)
 *
 * Le script https://js.stripe.com/v3/buy-button.js est injecté une seule fois (idempotent).
 */
import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'buy-button-id': string;
          'publishable-key': string;
          'client-reference-id'?: string;
          'customer-email'?: string;
          'customer-session-client-secret'?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface Props {
  buyButtonId: string;
  publishableKey: string;
  customerEmail?: string;
  clientReferenceId?: string;
  className?: string;
}

export const StripeBuyButton: React.FC<Props> = ({
  buyButtonId,
  publishableKey,
  customerEmail,
  clientReferenceId,
  className,
}) => {
  // Inject le script buy-button.js une seule fois (idempotent — même si plusieurs StripeBuyButton)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.querySelector('script[data-stripe-buy-button]')) return;
    const s = document.createElement('script');
    s.src = 'https://js.stripe.com/v3/buy-button.js';
    s.async = true;
    s.dataset.stripeBuyButton = 'true';
    document.head.appendChild(s);
  }, []);

  // React rend le custom element (web component) avec les props kebab-case attendues par Stripe
  return React.createElement('stripe-buy-button', {
    'buy-button-id': buyButtonId,
    'publishable-key': publishableKey,
    ...(customerEmail ? { 'customer-email': customerEmail } : {}),
    ...(clientReferenceId ? { 'client-reference-id': clientReferenceId } : {}),
    className,
  });
};

export default StripeBuyButton;
