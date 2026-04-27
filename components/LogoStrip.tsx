/**
 * LogoStrip — bandeau partenaires & infrastructure de confiance Agenzia.
 *
 * Logos chargés depuis cdn.simpleicons.org (SVG haute résolution, couleur officielle de marque).
 * 8 partenaires/fournisseurs réellement utilisés ou planifiés par Agenzia, ordre = priorité souveraineté FR/EU.
 *
 * Animation marquee définie dans tailwind config inline (index.html) — 50s pour traversée complète,
 * vitesse confortable (lecture fluide sans agressivité).
 */
import React from 'react';

type Partner = {
  name: string;       // libellé alt + tooltip
  slug: string;       // slug SimpleIcons
  origin?: string;    // pays / type → affiché en tooltip
  color?: string;     // override hex couleur (sinon couleur officielle de marque)
};

const PARTNERS: Partner[] = [
  { name: 'Mistral AI',  slug: 'mistralai',   origin: 'France · LLM' },
  { name: 'OVHcloud',    slug: 'ovh',         origin: 'France · Cloud' },
  { name: 'Scaleway',    slug: 'scaleway',    origin: 'France · Cloud' },
  { name: 'Brevo',       slug: 'brevo',       origin: 'France · Email' },
  { name: 'PostgreSQL',  slug: 'postgresql',  origin: 'OSS · Base de données' },
  { name: 'n8n',         slug: 'n8n',         origin: 'EU · Automation' },
  { name: 'Cal.com',     slug: 'caldotcom',   origin: 'OSS · Booking' },
  { name: 'Anthropic',   slug: 'anthropic',   origin: 'US · LLM premium' },
];

// SimpleIcons CDN: par défaut couleur officielle de marque, override possible via /{hex}
const logoUrl = (slug: string, color?: string) =>
  color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`;

const LogoStrip: React.FC = () => {
  // On duplique la liste 2x pour permettre une boucle visuellement seamless
  // (translateX 0 → -50% → on revient à la position initiale sans saut perceptible)
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="bg-pure border-y border-[--color-ghost] py-16 md:py-20 overflow-hidden"
      aria-label="Partenaires technologiques et infrastructure"
    >
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-fog">
          Infrastructure de confiance & souveraineté
        </span>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Fades latéraux blanc → transparent (effet apparition/disparition pro) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-pure to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-pure to-transparent z-10" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="flex items-center justify-center px-10 md:px-14 shrink-0"
              title={`${p.name}${p.origin ? ` — ${p.origin}` : ''}`}
            >
              <img
                src={logoUrl(p.slug, p.color)}
                alt={p.name}
                width={140}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-9 md:h-10 w-auto max-w-[140px] object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
