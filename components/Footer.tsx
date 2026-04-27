/**
 * Footer — Agenzia Pure (style screen 1: minimal, 3 colonnes propres + tagline gauche).
 *
 * Contenu inchangé (mêmes routes/services), nouveau look porcelaine.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Shield, Lock } from 'lucide-react';

type FooterLink = { name: string; href: string; action?: 'smart-form' };

const SECTIONS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Solutions',
    links: [
      { name: 'Infogérance IA', href: '/services/infogerance-ia' },
      { name: 'Cybersécurité NIS2', href: '/services/cybersecurite-nis2' },
      { name: 'Migration Cloud', href: '/services/migration-cloud' },
      { name: 'Audit Flash', href: '#smart-form', action: 'smart-form' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { name: 'Tarifs', href: '/#tarifs' },
      { name: 'Simulateur ROI', href: '/simulateur-roi' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Confidentialité', href: '/politique-confidentialite' },
      { name: 'RGPD', href: '/rgpd' },
      { name: 'CGU', href: '/cgu' },
    ],
  },
];

const SOCIALS = [
  { name: 'X', href: 'https://x.com/getagenzia' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/agenzia-zenocci' },
  { name: 'GitHub', href: 'https://github.com/ramzilbscontact-ctrl' },
];

const triggerSmartForm = () =>
  window.dispatchEvent(
    new CustomEvent('open-smart-form', { detail: { intent: 'audit_nis2', source: 'footer' } })
  );

const Footer: React.FC = () => (
  <footer className="bg-pure border-t border-[--color-ghost] pt-20 pb-10">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
        {/* Brand block */}
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="headline text-3xl tracking-tight">Agenzia</span>
          </Link>
          <p className="mt-6 max-w-sm text-graphite leading-relaxed">
            Agenzia. L'efficience opérationnelle par l'IA.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { icon: Globe, label: 'Données EU' },
              { icon: Shield, label: 'NIS2' },
              { icon: Lock, label: 'RGPD' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-porcelain border border-[--color-ghost-strong] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-graphite"
              >
                <Icon size={11} strokeWidth={2.2} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-fog mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((l) => (
                  <li key={l.name}>
                    {l.action === 'smart-form' ? (
                      <button
                        onClick={triggerSmartForm}
                        className="text-sm text-graphite hover:text-ink transition-colors text-left"
                      >
                        {l.name}
                      </button>
                    ) : l.href.startsWith('/#') ? (
                      <a
                        href={l.href}
                        className="text-sm text-graphite hover:text-ink transition-colors"
                      >
                        {l.name}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-sm text-graphite hover:text-ink transition-colors"
                      >
                        {l.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-[--color-ghost] flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-xs text-fog font-mono">
          © {new Date().getFullYear()} Agenzia · Entreprise Lebsaira · SIREN 928 689 819
        </div>
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-fog hover:text-ink transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
