import React from 'react';
import { motion } from 'motion/react';

const Stats = () => {
  const stats = [
    {
      id: "01",
      number: "< 5 MIN",
      label: "Temps de résolution moyen",
    },
    {
      id: "02",
      number: "80%",
      label: "Gain d'efficacité opérationnelle",
    },
    {
      id: "03",
      number: "100% EU",
      label: "Souveraineté des données",
    },
    {
      id: "04",
      number: "12X",
      label: "Optimisation des coûts IT",
    }
  ];

  return (
    <section className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black shadow-tactile">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 text-center border-r border-b border-black group hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Color Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <span className="font-mono text-[10px] text-zinc-400 group-hover:text-brand-accent mb-8 block tracking-[0.3em] transition-colors">{stat.id} // METRIC</span>
              <h3 className="text-6xl font-black text-zinc-900 group-hover:text-brand-accent mb-4 tracking-tighter font-serif italic transition-colors">
                {stat.number}
              </h3>
              <p className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-500 uppercase tracking-[0.2em] leading-relaxed transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
