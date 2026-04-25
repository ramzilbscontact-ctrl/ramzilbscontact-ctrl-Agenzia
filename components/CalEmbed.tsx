import React, { useEffect } from 'react';

interface CalEmbedProps {
  /**
   * Cal.com link slug, format: "username/event-type"
   * Ex: "agenzia/15min" or "ramzi-lebsaira/discovery-call"
   * Configure it in env: VITE_CAL_LINK
   */
  calLink?: string;
  /** Optional pre-fill query params */
  prefill?: { name?: string; email?: string; notes?: string };
  /** Compact mode (no banner header) */
  compact?: boolean;
}

const CalEmbed: React.FC<CalEmbedProps> = ({ calLink, prefill, compact }) => {
  const link =
    calLink ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_CAL_LINK) ||
    '';

  useEffect(() => {
    if (!link) return;
    if ((window as any).Cal) return;

    const script = document.createElement('script');
    script.src = 'https://app.cal.eu/embed/embed.js';
    script.async = true;
    script.onload = () => {
      const Cal = (window as any).Cal;
      if (!Cal) return;
      Cal('init', 'agenzia-cal', { origin: 'https://app.cal.eu' });
      Cal.ns['agenzia-cal']('inline', {
        elementOrSelector: '#cal-embed-container',
        config: {
          layout: 'month_view',
          theme: 'light',
          ...(prefill?.name && { name: prefill.name }),
          ...(prefill?.email && { email: prefill.email }),
          ...(prefill?.notes && { notes: prefill.notes }),
        },
        calLink: link,
      });
      Cal.ns['agenzia-cal']('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
      });
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [link, prefill?.name, prefill?.email, prefill?.notes]);

  if (!link) {
    return (
      <div className="p-8 border-2 border-dashed border-zinc-300 text-center">
        <p className="text-sm font-mono text-zinc-500 mb-4">VITE_CAL_LINK non configuré</p>
        <p className="text-xs text-zinc-400">
          Defaults manquant — set <code className="px-1 bg-zinc-100">VITE_CAL_LINK=getagenzia/discovery-15</code>
        </p>
      </div>
    );
  }

  return (
    <div className="cal-embed-wrapper">
      {!compact && (
        <div className="mb-4 text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
            Choisissez votre créneau
          </p>
          <p className="text-xs text-zinc-400">Confirmation instantanée — annulation gratuite jusqu'à 1h avant</p>
        </div>
      )}
      <div id="cal-embed-container" style={{ width: '100%', minHeight: 600 }} />
    </div>
  );
};

export default CalEmbed;
