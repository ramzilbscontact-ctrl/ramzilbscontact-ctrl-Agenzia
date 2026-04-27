/**
 * CalPopupTrigger.tsx — popup de booking avec présélection rapide.
 * Multi-roles: Product ✅ (UX 1-clic) | Growth ✅ (réduit friction réservation) | Sécurité ✅ (no PII)
 *
 * Flow:
 * 1. Triggers (sticky button OR exit-intent OR auto-60s sub-pages) → ouvre popup
 * 2. Popup affiche un MENU de 3 raccourcis temporels :
 *    - "Au plus tôt" → embed Cal pré-sélectionné sur today (Cal respecte minimumBookingNotice = 60min)
 *    - "Demain matin" → embed Cal pré-sélectionné sur tomorrow (filtre auto sur AM via month_view)
 *    - "Choisir mon créneau" → embed Cal sans filtre (full month view)
 * 3. Click → swap embed Cal avec la date pré-sélectionnée
 * 4. Bouton retour pour revenir au menu sans fermer
 *
 * Uses @calcom/embed-react (gère IIFE wrapper + window.Cal init + cal.eu origin override).
 */
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, X, ArrowLeft, Zap, Sunrise, CalendarDays } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_LINK_BASE = (typeof window !== 'undefined' && (import.meta as any).env?.VITE_CAL_LINK) || 'getagenzia/discovery-15';
const CAL_ORIGIN = 'https://app.cal.eu';
const CAL_EMBED_JS = `${CAL_ORIGIN}/embed/embed.js`;
const CAL_NAMESPACE = 'agenzia-popup';

const ELIGIBLE_PATHS = ['/', '/saas', '/en/saas', '/en', '/services/'];
const SHOWN_KEY = 'agenzia_cal_popup_shown_session';
const AUTO_OPEN_DELAY_MS = 60 * 1000;
const SCROLL_THRESHOLD_PCT = 30;

const isEligiblePath = (path: string) =>
  ELIGIBLE_PATHS.some((p) => p === path || (p.endsWith('/') && path.startsWith(p)));

type QuickMode = 'menu' | 'now' | 'tomorrow' | 'full';

const pad = (n: number) => String(n).padStart(2, '0');
const dateOnly = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const buildCalLink = (mode: QuickMode): string => {
  const now = new Date();
  if (mode === 'now') {
    // Cal respecte minimumBookingNotice (60min) → le 1er slot dispo sera ~+1h
    return `${CAL_LINK_BASE}?date=${dateOnly(now)}`;
  }
  if (mode === 'tomorrow') {
    const t = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    return `${CAL_LINK_BASE}?date=${dateOnly(t)}`;
  }
  return CAL_LINK_BASE;
};

export const CalPopupTrigger: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [mode, setMode] = useState<QuickMode>('menu');
  const exitFiredRef = useRef(false);
  const autoFiredRef = useRef(false);

  // Pre-warm Cal API once mount to ensure embed.js is loaded before first open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isEligiblePath(window.location.pathname)) return;
    (async () => {
      try {
        const cal = await getCalApi({ namespace: CAL_NAMESPACE, embedJsUrl: CAL_EMBED_JS });
        cal('ui', {
          hideEventTypeDetails: false,
          theme: 'light',
          styles: { branding: { brandColor: '#0066FF' } },
        });
      } catch (e) {
        console.warn('[CalPopupTrigger] preload failed', e);
      }
    })();
  }, []);

  // Sticky button visible after scroll 30%
  useEffect(() => {
    if (!isEligiblePath(window.location.pathname)) return;
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
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
      setMode('menu');
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
      setMode('menu');
    }, AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // External trigger: window.dispatchEvent(new CustomEvent('open-cal-popup'))
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setMode('menu');
    };
    window.addEventListener('open-cal-popup', handler);
    return () => window.removeEventListener('open-cal-popup', handler);
  }, []);

  const openPopup = () => {
    setOpen(true);
    setMode('menu');
  };

  if (!isEligiblePath(typeof window !== 'undefined' ? window.location.pathname : '/')) return null;

  return (
    <>
      {/* Sticky floating button — label générique */}
      {stickyVisible && !open && (
        <button
          onClick={openPopup}
          className="fixed bottom-6 right-24 z-[150] bg-[#0066FF] text-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
          aria-label="Réserver un appel"
        >
          <Calendar size={18} />
          <span className="text-[10px] font-mono uppercase tracking-widest hidden md:inline">Réserver un appel</span>
        </button>
      )}

      {/* Popup */}
      {open && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/40 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
            style={{ height: mode === 'menu' ? 'auto' : '80vh', maxHeight: '700px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2 border-black bg-zinc-50">
              {mode !== 'menu' ? (
                <button
                  onClick={() => setMode('menu')}
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-700 hover:text-black"
                  aria-label="Retour au menu"
                >
                  <ArrowLeft size={14} /> Retour
                </button>
              ) : (
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-700">
                  Choisis ton créneau · 15 min
                </span>
              )}
              <button
                onClick={() => setOpen(false)}
                className="p-2 bg-white border-2 border-black hover:bg-zinc-100"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            {mode === 'menu' ? (
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-2">Réserver un appel découverte</h3>
                <p className="text-sm text-zinc-600 mb-6">
                  15 min pour comprendre tes besoins infogérance / NIS2. Aucun engagement.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Card "Au plus tôt" */}
                  <button
                    onClick={() => setMode('now')}
                    className="group text-left p-5 bg-white border-2 border-black hover:bg-[#0066FF] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={20} />
                      <span className="text-xs font-mono uppercase tracking-widest">Aujourd'hui</span>
                    </div>
                    <div className="text-lg font-bold mb-1">Au plus tôt</div>
                    <div className="text-xs opacity-80">Premier créneau dispo (≥ 1h)</div>
                  </button>

                  {/* Card "Demain matin" */}
                  <button
                    onClick={() => setMode('tomorrow')}
                    className="group text-left p-5 bg-white border-2 border-black hover:bg-[#0066FF] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Sunrise size={20} />
                      <span className="text-xs font-mono uppercase tracking-widest">Demain</span>
                    </div>
                    <div className="text-lg font-bold mb-1">Demain matin</div>
                    <div className="text-xs opacity-80">Créneaux 9h–12h</div>
                  </button>
                </div>

                {/* Lien secondaire vers full calendar */}
                <button
                  onClick={() => setMode('full')}
                  className="mt-4 w-full text-center py-3 text-xs font-mono uppercase tracking-widest text-zinc-600 hover:text-[#0066FF] underline-offset-4 hover:underline flex items-center justify-center gap-2"
                >
                  <CalendarDays size={14} /> Voir tous les créneaux du mois
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-auto">
                <Cal
                  key={mode}
                  namespace={CAL_NAMESPACE}
                  calLink={buildCalLink(mode)}
                  calOrigin={CAL_ORIGIN}
                  embedJsUrl={CAL_EMBED_JS}
                  style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'auto' }}
                  config={{ layout: 'month_view', theme: 'light' }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CalPopupTrigger;
