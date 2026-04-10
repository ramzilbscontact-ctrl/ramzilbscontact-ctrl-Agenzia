import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight } from 'lucide-react';

const ComparisonTable = () => {
  const data = [
    {
      label: "Coût annuel (50 dev.)",
      dsi: "~50 000€",
      agenzia: "12 000€",
    },
    {
      label: "Disponibilité",
      dsi: "9h–18h",
      agenzia: "24/7/365",
    },
    {
      label: "Immunité NIS2",
      dsi: "Réactive",
      agenzia: "Native & Active",
    },
    {
      label: "Rapport de Valeur",
      dsi: "Ponctuel",
      agenzia: "Temps Réel",
    },
    {
      label: "Mise en service",
      dsi: "3–6 mois",
      agenzia: "48 heures",
    }
  ];

  return (
    <section className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">06 // THE COMPARISON</div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              L'EFFICACITÉ<br />MESURABLE.
            </h2>
          </div>
          <p className="text-xl font-serif text-zinc-500 max-w-sm leading-relaxed">
            Pourquoi recruter quand vous pouvez automatiser la performance ?
          </p>
        </div>

        <div className="max-w-5xl mx-auto border-t border-l border-black">
          <div className="grid grid-cols-3 border-r border-b border-black bg-black text-white">
            <div className="p-8 text-[10px] font-mono uppercase tracking-widest opacity-50">Critère</div>
            <div className="p-8 text-[10px] font-mono uppercase tracking-widest opacity-50 text-center">DSI Interne</div>
            <div className="p-8 text-[10px] font-mono uppercase tracking-widest text-center">Agenzia</div>
          </div>

          <div className="divide-y divide-black border-r">
            {data.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 items-center hover:bg-zinc-50 transition-colors border-b border-black"
              >
                <div className="p-8 text-sm font-serif font-bold uppercase tracking-tight">{row.label}</div>
                <div className="p-8 text-sm font-serif text-zinc-500 text-center">{row.dsi}</div>
                <div className="p-8 text-sm font-mono font-black text-center flex items-center justify-center gap-4">
                  <Check className="w-4 h-4" />
                  {row.agenzia}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <a
            href="https://www.cal.eu/getagenzia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-6 bg-black text-white px-12 py-6 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
          >
            Démarrer la transition
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
