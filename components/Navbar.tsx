import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ancres pointent vers /#anchor : marche depuis n'importe quelle page
  // (router envoie sur Home puis Home gère le scroll vers l'ancre via le hook useHashScroll)
  const navLinks = [
    { name: "Vision", href: "/#nis2", internal: true },
    { name: "The Outcome", href: "/#services", internal: true },
    { name: "Pricing", href: "/#tarifs", internal: true },
    { name: "Blog", href: "/blog", internal: true },
    { name: "Connect", href: "/#contact", internal: true },
  ];

  return (
    <>
      <nav className={cn(
        "w-full border-b-[1px] border-black py-6 px-6 md:px-8 flex justify-between items-center bg-white sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-8"
      )}>
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-bold tracking-tighter font-brand flex items-center gap-1">
            Agenzia<span className="text-[10px] align-top font-brand">©</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] font-mono tracking-[0.2em] uppercase">
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-brand-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="hover:text-brand-accent transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all group-hover:w-full" />
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Indicateur visuel statut système — purement informatif, non cliquable */}
          <div
            role="status"
            aria-label="Statut système opérationnel"
            className="hidden lg:flex items-center gap-2 border-[1px] border-black px-6 py-2 text-[10px] font-mono uppercase select-none cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            System Status: Active
          </div>
          
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2' } }))}
            className="hidden sm:block bg-black text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent border border-black transition-all shadow-tactile hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Audit Gratuit
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-zinc-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-8 flex flex-col gap-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) =>
                link.internal ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-serif font-bold uppercase tracking-tighter hover:italic hover:text-brand-accent transition-all block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif font-bold uppercase tracking-tighter hover:italic hover:text-brand-accent transition-all"
                  >
                    {link.name}
                  </motion.a>
                )
              )}
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2' } }));
                }}
                className="w-full bg-black text-white px-8 py-6 text-center text-xs font-mono uppercase tracking-widest border-2 border-black shadow-tactile"
              >
                Audit Gratuit
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                System Status: Active
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
