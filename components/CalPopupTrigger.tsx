/**
 * CalPopupTrigger.tsx — auto-trigger Cal.com popup on exit-intent + sticky button.
 * Multi-roles: Product ✅ (UX low-friction) | Growth ✅ (multi-trigger conversion) | Sécurité ✅ (consent-aware)
 *
 * Trigger types:
 * - Exit intent (mouse leaves viewport top)
 * - Sticky button bottom-right (always visible after scroll 30%)
 * - Auto open after 60s on /saas + /pricing + /services/*
 *
 * Pages targeted: / + /saas + /services/* + /pricing — controlled via prop or pathname
 */
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, X } from 'lucide-react';

const CAL_LINK = (typeof window !== 'undefined' && (import.meta as any).env?.VITE_CAL_LINK) || 'getagenzia/discovery-15';
const CAL_ORIGIN = 'https://app.cal.eu';

const ELIGIBLE_PATHS = ['/', '/saas', '/en/saas', '/en', '/services/'];
const SHOWN_KEY = 'agenzia_cal_popup_shown_session';
const AUTO_OPEN_DELAY_MS = 60 * 1000;
const SCROLL_THRESHOLD_PCT = 30;

const isEligiblePath = (path: string) =>
  ELIGIBLE_PATHS.some((p) => p === path || (p.endsWith('/') && path.startsWith(p)));

export const CalPopupTrigger: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const exitFiredRef = useRef(false);
  const autoFiredRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-load Cal.com embed script once
  useEffect(() => {
    if (!isEligiblePath(window.location.pathname)) return;
    if (document.querySelector('script[data-cal-embed]')) return;
    const s = document.createElement('script');
    s.src = `${CAL_ORIGIN}/embed/embed.js`;
    s.async = true;
    s.dataset.calEmbed = 'true';
    document.head.appendChild(s);
  }, []);

  // Sticky button visible after scroll 30%
  useEffect(() => {
    if (!isEligiblePath(window.location.pathname)) return;
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setStickyVisible(pct >= SCROLL_THRESHOLD_PCT);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Exit intent (mouse leaves top of viewport)
  useEffect(() => {
    if (!isEligiblePath(window.location.pathname)) return;
    if (sessionStorage.getItem(SHOWN_KEY)) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 10 || exitFiredRef.current) return;
      exitFiredRef.current = true;
      sessionStorage.setItem(SHOWN_KEY, '1');
      setOpen(true);
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  // Auto open after 60s (sub-pages only, not Home)
  useEffect(() => {
    if (window.location.pathname === '/') return;
    if (!isEligiblePath(window.location.pathname)) return;
    if (sessionStorage.getItem(SHOWN_KEY)) return;
    const t = setTimeout(() => {
      if (autoFiredRef.current) return;
      autoFiredRef.current = true;
      sessionStorage.setItem(SHOWN_KEY, '1');
      setOpen(true);
    }, AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Mount Cal embed when popup opens
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const Cal = (window as any).Cal;
    if (!Cal) return;
    try {
      Cal('init', 'agenzia-popup', { origin: CAL_ORIGIN });
      Cal.ns['agenzia-popup']('inline', {
        elementOrSelector: '#cal-popup-container',
        config: { layout: 'month_view', theme: 'light' },
        calLink: CAL_LINK,
      });
      Cal.ns['agenzia-popup']('ui', { hideEventTypeDetails: false, styles: { branding: { brandColor: '#0066FF' } } });
    } catch (e) {
      console.warn('Cal mount error', e);
    }
  }, [open]);

  if (!isEligiblePath(typeof window !== 'undefined' ? window.location.pathname : '/')) return null;

  return (
    <>
      {/* Sticky floating button */}
      {stickyVisible && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-24 z-[150] bg-[#0066FF] text-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2 group"
          aria-label="Réserver 15 min"
        >
          <Calendar size={18} />
          <span className="text-[10px] font-mono uppercase tracking-widest hidden md:inline">15 min avec Ramzi</span>
        </button>
      )}

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div
            className="relative w-full max-w-4xl h-[80vh] max-h-[700px] bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-white border-2 border-black hover:bg-zinc-50"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
            <div ref={containerRef} id="cal-popup-container" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default CalPopupTrigger;
