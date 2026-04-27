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
      {/* Sticky floating button — Agenzia Pure pill ink */}
      {stickyVisible && !open && (
        <button
          onClick={openPopup}
          className="fixed bottom-6 right-24 z-[150] inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-ink text-pure shadow-tactile font-semibold text-sm hover:scale-[1.04] active:scale-[0.97] transition-transform"
          aria-label="Réserver un appel"
        >
          <Calendar size={16} />
          <span className="hidden md:inline">Réserver un appel</span>
        </button>
      )}

      {/* Popup — Agenzia Pure */}
      {open && (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center bg-ink/30 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-pure rounded-3xl shadow-tactile border border-[--color-ghost-strong] overflow-hidden flex flex-col"
            style={{ height: mode === 'menu' ? 'auto' : '80vh', maxHeight: '700px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[--color-ghost] bg-porcelain/60">
              {mode !== 'menu' ? (
                <button
                  onClick={() => setMode('menu')}
                  className="inline-flex items-center gap-2 text-xs font-medium text-graphite hover:text-ink transition"
                  aria-label="Retour au menu"
                >
                  <ArrowLeft size={14} /> Retour
                </button>
              ) : (
                <span className="badge-pill inline-flex">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
                  Choisis ton créneau · 15 min
                </span>
              )}
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-pure border border-[--color-ghost-strong] hover:bg-porcelain transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            {mode === 'menu' ? (
              <div className="p-6 md:p-10">
                <h3 className="headline text-2xl md:text-3xl mb-2">
                  Réserver un appel découverte
                </h3>
                <p className="text-sm md:text-base text-graphite mb-8 leading-relaxed">
                  15 min pour comprendre tes besoins infogérance / NIS2. Aucun engagement.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Card "Au plus tôt" */}
                  <button
                    onClick={() => setMode('now')}
                    className="group text-left p-6 rounded-2xl bg-pure border border-[--color-ghost-strong] hover:border-ink hover:shadow-card transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-graphite group-hover:bg-ink group-hover:text-pure group-hover:border-ink transition-all">
                        <Zap size={16} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-fog">
                        Aujourd'hui
                      </span>
                    </div>
                    <div className="font-semibold text-ink mb-1">Au plus tôt</div>
                    <div className="text-xs text-mist">Premier créneau dispo (≥ 1h)</div>
                  </button>

                  {/* Card "Demain matin" */}
                  <button
                    onClick={() => setMode('tomorrow')}
                    className="group text-left p-6 rounded-2xl bg-pure border border-[--color-ghost-strong] hover:border-ink hover:shadow-card transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-graphite group-hover:bg-ink group-hover:text-pure group-hover:border-ink transition-all">
                        <Sunrise size={16} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-fog">
                        Demain
                      </span>
                    </div>
                    <div className="font-semibold text-ink mb-1">Demain matin</div>
                    <div className="text-xs text-mist">Créneaux 9h–12h</div>
                  </button>
                </div>

                {/* Lien secondaire */}
                <button
                  onClick={() => setMode('full')}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-medium text-graphite hover:text-ink transition"
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
