import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      code: "01 // INTERRUPTION",
      title: "Inertie Opérationnelle",
      description: "Chaque minute d'arrêt technique paralyse votre croissance et dégrade votre rentabilité.",
      metric: "43k€",
      metricLabel: "Perte de valeur / heure"
    },
    {
      code: "02 // VULNERABILITY",
      title: "Exposition Critique",
      description: "Les failles de sécurité ne sont plus des risques théoriques, mais des menaces directes sur vos actifs.",
      metric: "43%",
      metricLabel: "Sinistres en Europe"
    },
    {
      code: "03 // OBSOLESCENCE",
      title: "Dette Technique",
      description: "Une infrastructure vieillissante freine l'innovation et multiplie les coûts de maintenance.",
      metric: "60%",
      metricLabel: "Budget gaspillé"
    }
  ];

  return (
    <section id="nis2" className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">03 // THE PROBLEM</div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              L'IT NON MAÎTRISÉ<br />EST UN FREIN.
            </h2>
          </div>
          <p className="text-xl font-serif text-zinc-500 max-w-sm leading-relaxed">
            L'instabilité technique et l'insécurité sont les premiers obstacles à la performance des entreprises modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-black shadow-tactile">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 group hover:bg-black hover:text-white transition-all duration-300 border-r border-b border-black flex flex-col justify-between min-h-[300px] md:min-h-[350px] relative overflow-hidden"
            >
              {/* Hover Color Accent */}
              <div className="absolute bottom-0 left-0 w-1 h-full bg-brand-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div>
                <div className="text-[10px] font-mono text-zinc-400 group-hover:text-brand-accent mb-12 tracking-[0.3em] transition-colors">{problem.code}</div>
                <h3 className="text-3xl font-serif font-bold text-zinc-900 group-hover:text-white mb-6 uppercase tracking-tight group-hover:italic transition-all">{problem.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-300 leading-relaxed font-serif text-lg transition-colors">{problem.description}</p>
              </div>
              
              <div className="pt-8 border-t border-black/10 group-hover:border-white/20 transition-colors">
                <div className="text-5xl font-black text-zinc-900 group-hover:text-brand-accent mb-2 tracking-tighter transition-colors">{problem.metric}</div>
                <div className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-500 uppercase tracking-widest transition-colors">{problem.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
