/**
 * Navbar — Agenzia Pure (glassmorphism + pill button + Manrope).
 *
 * Sticky top, fond verre translucide qui s'opacifie au scroll, ancres router-friendly,
 * CTA principal pill noir tactile. Mobile menu en sheet plein écran.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, LogIn, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../lib/auth';

const NAV_LINKS = [
  { name: 'Solutions', href: '/#services' },
  { name: 'Tarifs', href: '/#tarifs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile au changement de route
  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  const triggerSmartForm = () =>
    window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'navbar' } }));

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'glass-nav py-3' : 'bg-pure/60 backdrop-blur-md py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="headline text-2xl tracking-tight">
              Agenzia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-graphite">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                className="relative hover:text-ink transition-colors duration-200 tracking-tight"
              >
                {l.name}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 hover:w-full group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side: Login/Account + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Login (anonyme) ou Mon compte (connecté) — desktop seulement */}
            {user ? (
              <Link
                to="/account"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-xs font-medium text-graphite hover:text-ink transition"
                aria-label="Mon compte"
              >
                <User size={14} />
                <span className="hidden md:inline">Mon compte</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-graphite hover:text-ink transition"
                aria-label="Se connecter"
              >
                <LogIn size={14} />
                Connexion
              </Link>
            )}

            <button
              onClick={triggerSmartForm}
              className="hidden sm:inline-flex btn-tactile text-xs"
              aria-label="Démarrer un diagnostic NIS2 gratuit"
            >
              <Sparkles size={14} />
              Diagnostic gratuit
            </button>

            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileOpen}
              className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-[--color-ghost-strong] hover:bg-porcelain transition"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-pure pt-24 px-8 flex flex-col"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={l.href}
                    className="block py-5 text-3xl headline tracking-tight border-b border-[--color-ghost]"
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-3">
              <button
                onClick={() => { setIsMobileOpen(false); triggerSmartForm(); }}
                className="btn-tactile w-full justify-center text-sm py-4"
              >
                <Sparkles size={16} />
                Diagnostic gratuit
              </button>
              <Link
                to={user ? '/account' : '/login'}
                onClick={() => setIsMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full border border-[--color-ghost-strong] bg-pure hover:bg-porcelain text-sm font-medium text-graphite hover:text-ink transition"
              >
                {user ? <><User size={16} /> Mon compte</> : <><LogIn size={16} /> Connexion</>}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
