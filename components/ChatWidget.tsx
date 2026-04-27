/**
 * ChatWidget — Agenzia Pure (sticky bottom-right pill noir + popover glass-card).
 *
 * 3 actions au tap : parler à Clara (IA voix ElevenLabs) / se faire rappeler (callback) / diagnostic NIS2.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowRight, Mic, PhoneCall, Sparkles } from 'lucide-react';
import { trackEvent } from '../lib/posthog';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id'?: string },
        HTMLElement
      >;
    }
  }
}

const CLARA_AGENT_ID = 'agent_3901kpr0qqrqfk28zdq6jy3j9dtm';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClara, setShowClara] = useState(false);

  const dispatchSmartForm = () => {
    trackEvent('chat_widget_cta_clicked', { cta: 'diagnostic_nis2' });
    window.dispatchEvent(
      new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'chat_widget' } })
    );
    setIsOpen(false);
  };

  const dispatchCallback = () => {
    trackEvent('chat_widget_cta_clicked', { cta: 'se_faire_rappeler' });
    window.dispatchEvent(new CustomEvent('open-lead-magnet', { detail: { intent: 'callback' } }));
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[340px] glass-card rounded-3xl overflow-hidden"
          >
            <div className="bg-ink text-pure px-6 py-5 flex items-start justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-pure/50 mb-1">
                  Une question ?
                </div>
                <h3 className="headline text-xl text-pure">Comment vous aider ?</h3>
              </div>
              <button
                onClick={() => { setIsOpen(false); trackEvent('chat_widget_closed'); }}
                aria-label="Fermer"
                className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-pure/10 transition"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {/* Clara IA */}
              <button
                onClick={() => {
                  setShowClara(true);
                  trackEvent('chat_widget_cta_clicked', { cta: 'parler_a_clara' });
                }}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-pure border border-[--color-ghost-strong] hover:border-ink hover:shadow-card transition-all text-left"
              >
                <div className="h-10 w-10 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-graphite">
                  <Mic size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fog">Assistante IA 24/7</div>
                  <div className="font-semibold text-ink">Parler à Clara</div>
                </div>
                <ArrowRight size={14} className="text-mist" />
              </button>

              {/* Callback */}
              <button
                onClick={dispatchCallback}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-pure border border-[--color-ghost-strong] hover:border-ink hover:shadow-card transition-all text-left"
              >
                <div className="h-10 w-10 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-graphite">
                  <PhoneCall size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-fog">Rappel express &lt; 2 min</div>
                  <div className="font-semibold text-ink">Se faire rappeler</div>
                </div>
                <ArrowRight size={14} className="text-mist" />
              </button>

              {/* Smart-form CTA principal */}
              <button
                onClick={dispatchSmartForm}
                className="w-full inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-full bg-ink text-pure text-sm font-semibold hover:bg-ink-soft transition-all mt-3"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={14} />
                  Diagnostic NIS2 gratuit
                </span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clara widget */}
      <AnimatePresence>
        {showClara && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[110] w-[380px] glass-card rounded-3xl overflow-hidden"
          >
            <div className="bg-ink text-pure px-5 py-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-pure/10 flex items-center justify-center">
                  <Mic size={14} />
                </div>
                <span className="font-semibold">Clara · IA Agenzia</span>
              </div>
              <button
                onClick={() => { setShowClara(false); trackEvent('clara_widget_closed'); }}
                aria-label="Fermer Clara"
                className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-pure/10 transition"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-5 bg-pure">
              <p className="text-xs text-mist mb-3">
                Autorisez le micro quand votre navigateur le demande.
              </p>
              <elevenlabs-convai agent-id={CLARA_AGENT_ID} />
              <p className="text-[10px] text-fog mt-4 leading-relaxed">
                Clara est une IA. Conversations traitées selon le RGPD. Pour données sensibles, écrivez à{' '}
                <a href="mailto:hello@getagenzia.fr" className="text-accent hover:underline">notre email</a>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pill button principal */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          trackEvent(next ? 'chat_widget_opened' : 'chat_widget_closed');
        }}
        className="inline-flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-ink text-pure shadow-tactile font-medium text-sm"
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        <div className="relative">
          <MessageCircle size={18} />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-success ring-2 ring-ink animate-pulse-soft" />
        </div>
        <span className="hidden md:inline">Une question ?</span>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
