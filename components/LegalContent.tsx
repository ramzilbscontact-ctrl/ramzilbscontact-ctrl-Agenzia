/**
 * LegalContent — wrapper typographique cohérent pour les pages légales.
 *
 * Utilise le design system Agenzia Pure (Manrope + tokens couleurs) pour styler
 * automatiquement h2/h3/p/ul/a sans avoir à les re-classer dans chaque page.
 */
import React from 'react';

export const LegalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <article
    className="space-y-8 text-graphite leading-relaxed
      [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4
      [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3
      [&_p]:leading-relaxed
      [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
      [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
      [&_strong]:text-ink [&_strong]:font-semibold
      [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline
      [&_section]:space-y-3
      [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-porcelain [&_code]:text-xs [&_code]:font-mono"
  >
    {children}
  </article>
);

export default LegalContent;
