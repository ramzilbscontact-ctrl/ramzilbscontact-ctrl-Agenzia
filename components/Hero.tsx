/**
 * Hero — Agenzia Pure (style screen 2 du brief : centered + Manrope ExtraBold + pill CTA).
 *
 * Pitch conservé : NIS2/Infogérance pour PME (pas de pivot product, juste refresh visuel).
 * Disposition: badge pill "Conformité IA-first" → headline ExtraBold → sous-titre Medium →
 * 2 CTAs (pill noir tactile + lien secondaire) → trust strip souveraineté.
 */
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/posthog';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  const triggerSmartForm = () => {
    trackEvent('cta_clicked', { location: 'hero', cta: 'diagnostic_nis2' });
    window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'hero' } }));
  };

  const openCal = () => {
    trackEvent('cta_clicked', { location: 'hero', cta: 'book_call' });
    // CalPopupTrigger écoute cet event (geré dans CalPopupTrigger.tsx via openPopup public hook)
    window.dispatchEvent(new CustomEvent('open-cal-popup', { detail: { source: 'hero' } }));
  };

  return (
    <section className="relative overflow-hidden bg-pure">
      {/* Subtile aura porcelaine en fond — radial blur très diffus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[480px] w-[800px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-40 text-center">
        {/* Headline ExtraBold Manrope, scale fluide */}
        <h1
          {...fadeUp}
          className="headline text-[clamp(2.75rem,7vw,5.5rem)] mx-auto max-w-5xl">
          Votre IT,{' '}
          <span className="text-graphite">en version</span>{' '}
          <span className="italic font-medium">augmentée</span>{' '}
          <span className="text-graphite">par l'IA.</span>
        </h1>

        {/* Sous-titre Medium */}
        <p
          {...fadeUp}
          className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-graphite leading-relaxed">
          Supervision 24/7, mise en conformité NIS2 automatisée, résolution L1/L2 par IA.{' '}
          <span className="text-ink font-semibold">Souverain. Sécurisé. Mesurable.</span>
        </p>

        {/* CTAs */}
        <div
          {...fadeUp}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={triggerSmartForm}
            className="btn-tactile group text-sm px-8 py-4"
          >
            Diagnostic NIS2 gratuit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={openCal}
            className="btn-tactile-ghost text-sm px-8 py-4"
          >
            Réserver un appel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
