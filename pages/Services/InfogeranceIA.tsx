import React from 'react';
import { motion } from 'motion/react';
import { Brain, Shield, Zap, CheckCircle } from 'lucide-react';

const InfogeranceIA: React.FC = () => {
  return (
    <section className="py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest">01 // CONTINUITY</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 uppercase font-serif">
            Flux Opérationnel
          </h1>
          <p className="text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Éliminez l'incertitude technique. Nous garantissons la continuité totale de vos opérations grâce à une infrastructure qui s'auto-répare en temps réel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black mb-24">
          <div className="bg-white p-12 border-r border-b border-black">
            <h2 className="text-3xl font-serif font-bold uppercase mb-8">L'Objectif : Zéro Friction</h2>
            <p className="text-zinc-600 leading-relaxed mb-10 font-serif text-lg">
              La maintenance traditionnelle est obsolète. Notre approche repose sur la prévention active : chaque anomalie est résolue avant qu'elle ne devienne un incident, garantissant une productivité ininterrompue pour vos équipes.
            </p>
            <ul className="space-y-6">
              {[
                "Élimination des interruptions de service",
                "Stabilisation proactive du parc",
                "Optimisation automatique des performances",
                "Résolution instantanée des anomalies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="font-serif text-zinc-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black p-12 border-r border-b border-black text-white">
            <h2 className="text-3xl font-serif font-bold uppercase mb-12">Résultats Attendus</h2>
            <div className="space-y-12">
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">99.99%</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Disponibilité Opérationnelle</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">-90%</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">D'incidents critiques</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">24/7</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Garantie de continuité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfogeranceIA;
