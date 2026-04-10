import React from 'react';
import { motion } from 'motion/react';
import { Search, Settings, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Diagnostic",
      description: "Analyse complète de vos vulnérabilités et de vos goulots d'étranglement opérationnels.",
    },
    {
      id: "02",
      title: "Stabilisation",
      description: "Déploiement de l'infrastructure autonome. Vos systèmes deviennent résilients et auto-réparateurs.",
    },
    {
      id: "03",
      title: "Expansion",
      description: "Optimisation continue de vos performances pour soutenir votre croissance sans friction technique.",
    }
  ];

  return (
    <section className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase mb-4">05 // THE PROCESS</div>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase font-serif">
              UNE MÉTHODE.<br />ZÉRO FRICTION.
            </h2>
          </div>
          <p className="text-xl font-serif text-zinc-500 max-w-sm leading-relaxed">
            Une approche structurée pour transformer votre IT d'un centre de coût en un levier de performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b border-black group hover:bg-black hover:text-white transition-colors duration-100 flex flex-col justify-between min-h-[300px]"
            >
              <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-500 mb-12 tracking-[0.3em]">{step.id} // STEP</span>
              <div>
                <h3 className="text-3xl font-serif font-bold uppercase mb-6 tracking-tight">{step.title}</h3>
                <p className="font-serif text-lg leading-relaxed text-zinc-500 group-hover:text-zinc-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
