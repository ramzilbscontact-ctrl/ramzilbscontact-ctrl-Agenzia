/**
 * PageLayout — Wrapper Agenzia Pure pour pages secondaires (legal, services, blog, tools).
 *
 * Usage:
 *   <PageLayout title="Mentions légales" badge="Legal" subtitle="Optionnel">
 *     ...contenu...
 *   </PageLayout>
 *
 * Garantit cohérence visuelle (header centré + headline + spacing porcelaine) sur toutes
 * les pages secondaires sans dupliquer le scaffolding.
 */
import React from 'react';
import { motion } from 'motion/react';

type PageLayoutProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'default' | 'accent' | 'danger';
  maxWidth?: 'prose' | 'wide' | 'full';
  children: React.ReactNode;
};

const widthClass = {
  prose: 'max-w-3xl',
  wide: 'max-w-6xl',
  full: 'max-w-7xl',
};

const badgeClass = {
  default: 'badge-pill',
  accent: 'badge-pill badge-pill-accent',
  danger: 'badge-pill badge-pill-danger',
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  badge,
  badgeVariant = 'default',
  maxWidth = 'prose',
  children,
}) => (
  <main className="bg-pure">
    {/* Header banner porcelaine */}
    <section className="relative bg-porcelain border-b border-[--color-ghost] py-20 md:py-28">
      <div className={`mx-auto px-6 text-center ${widthClass[maxWidth]}`}>
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${badgeClass[badgeVariant]} inline-flex`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="headline mt-6 text-[clamp(2.25rem,5vw,4rem)]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-graphite leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>

    {/* Content body */}
    <section className="py-16 md:py-20">
      <div className={`mx-auto px-6 ${widthClass[maxWidth]}`}>
        {children}
      </div>
    </section>
  </main>
);

export default PageLayout;
