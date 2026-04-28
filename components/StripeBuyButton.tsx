/**
 * StripeBuyButton — Wrapper React pour le Web Component Stripe Buy Button.
 *
 * 2 modes :
 * 1. Mode "visible" (défaut) : affiche le BB Stripe natif tel quel
 * 2. Mode "trigger" : le BB Stripe est rendu mais MASQUÉ — on déclenche son click
 *    via un bouton custom Agenzia Pure pour conserver l'identité visuelle.
 *
 * Pour le mode trigger, on expose un imperative handle qui permet à un parent
 * de déclencher le click programmatique du Buy Button.
 */
import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';

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

export interface StripeBuyButtonHandle {
  /** Trouve le button interne du BB Stripe et déclenche son click. */
  trigger: () => boolean;
}

interface Props {
  buyButtonId: string;
  publishableKey: string;
  customerEmail?: string;
  clientReferenceId?: string;
  className?: string;
  hidden?: boolean;
}

export const StripeBuyButton = forwardRef<StripeBuyButtonHandle, Props>(({
  buyButtonId,
  publishableKey,
  customerEmail,
  clientReferenceId,
  className,
  hidden = false,
}, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Imperative handle: le parent peut appeler trigger() pour cliquer programmatiquement
  useImperativeHandle(ref, () => ({
    trigger: () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return false;
      const buyBtn = wrapper.querySelector('stripe-buy-button') as HTMLElement | null;
      if (!buyBtn) return false;
      // Le BB Stripe utilise un open shadow root → on peut accéder au button interne
      const shadow = (buyBtn as HTMLElement & { shadowRoot?: ShadowRoot | null }).shadowRoot;
      const innerBtn = shadow?.querySelector('button') as HTMLButtonElement | null;
      if (innerBtn) {
        innerBtn.click();
        return true;
      }
      // Fallback : click sur l'élément lui-même (si shadow root closed)
      try {
        buyBtn.click();
        return true;
      } catch {
        return false;
      }
    },
  }), []);

  // Style hidden : élément dans le DOM (le BB doit s'initialiser pour que les clicks marchent)
  // - "absolute" mode : couvre 100% du parent positionné, opacity 0, mais pointer-events AUTO
  //   → l'user clique sur le bouton custom visible, le click traverse jusqu'au BB invisible au-dessus
  const wrapperStyle: React.CSSProperties = hidden
    ? {
        position: 'absolute',
        inset: 0,
        opacity: 0,
        zIndex: 1,
        cursor: 'pointer',
        // Le BB est rendu mais invisible. Les clicks landent dessus via stacking context parent.
      }
    : {};

  // Style le BB lui-même pour qu'il s'étende à 100% (sinon il a sa taille intrinsèque)
  const innerStyle: React.CSSProperties = hidden
    ? { width: '100%', height: '100%', display: 'block' }
    : {};

  return (
    <div ref={wrapperRef} style={wrapperStyle} className={className}>
      {React.createElement('stripe-buy-button', {
        'buy-button-id': buyButtonId,
        'publishable-key': publishableKey,
        style: innerStyle,
        ...(customerEmail ? { 'customer-email': customerEmail } : {}),
        ...(clientReferenceId ? { 'client-reference-id': clientReferenceId } : {}),
      })}
    </div>
  );
});

StripeBuyButton.displayName = 'StripeBuyButton';

export default StripeBuyButton;
