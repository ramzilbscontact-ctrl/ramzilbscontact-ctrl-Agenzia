/**
 * ServicesSection — Agenzia Pure (cards porcelaine bento avec hover ink, lien "Voir détail").
 *
 * Pitch services NIS2/Infogérance/Cloud conservé. 4 cards en grid 2x2 / bento (1 large + 3 petits)
 * sur desktop, stack vertical mobile.
 */
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ServerCog, ShieldCheck, Cloud, BarChart3 } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    tag: 'Continuité',
    title: 'Flux opérationnel',
    description:
      'Élimination des interruptions de service. Votre infrastructure s\'auto-répare avant que l\'impact ne soit visible.',
    href: '/services/infogerance-ia',
    Icon: ServerCog,
    span: 'md:col-span-2',
  },
  {
    id: '02',
    tag: 'Immunité',
    title: 'Cybersécurité NIS2',
    description: 'Protection active et conformité directive. Nous transformons votre sécurité en actif opposable.',
    href: '/services/cybersecurite-nis2',
    Icon: ShieldCheck,
    span: 'md:col-span-1',
  },
  {
    id: '03',
    tag: 'Souveraineté',
    title: 'Cloud souverain',
    description: 'Migration et gestion de vos données sur infrastructures européennes (OVH SecNumCloud, Scaleway).',
    href: '/services/migration-cloud',
    Icon: Cloud,
    span: 'md:col-span-1',
  },
  {
    id: '04',
    tag: 'Performance',
    title: 'Audit de valeur',
    description: 'Diagnostic complet de votre efficacité IT et identification des leviers de croissance.',
    href: '/simulateur-roi',
    Icon: BarChart3,
    span: 'md:col-span-2',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ServicesSection: React.FC = () => (
  <section id="services" className="relative bg-porcelain section-ghost py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-6">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
        <motion.div {...fadeUp(0)} className="md:col-span-7">
          <span className="badge-pill">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            The Outcome
          </span>
          <h2 className="headline mt-6 text-[clamp(2rem,5vw,3.75rem)]">
            Des résultats.{' '}
            <span className="italic font-medium text-graphite">Pas des promesses.</span>
          </h2>
        </motion.div>
        <motion.p
          {...fadeUp(0.1)}
          className="md:col-span-5 self-end text-lg text-graphite leading-relaxed"
        >
          Nous transformons votre infrastructure technique en moteur de croissance stable,
          sécurisé et souverain.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={s.id} {...fadeUp(0.2 + i * 0.08)} className={s.span}>
            <Link
              to={s.href}
              className="group block h-full card-porcelain p-8 md:p-10 hover:border-[--color-ghost-strong] transition-all"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="h-12 w-12 rounded-2xl bg-porcelain border border-[--color-ghost-strong] flex items-center justify-center text-graphite group-hover:bg-ink group-hover:text-pure group-hover:border-ink transition-all">
                  <s.Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-fog">
                  {s.id} · {s.tag}
                </span>
              </div>
              <h3 className="headline text-2xl md:text-3xl mb-4">{s.title}</h3>
              <p className="text-graphite leading-relaxed mb-10">{s.description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                Voir le détail
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
