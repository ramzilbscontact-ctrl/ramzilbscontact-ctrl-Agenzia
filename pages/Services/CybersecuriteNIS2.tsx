import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const CybersecuriteNIS2: React.FC = () => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest">02 // IMMUNITY</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 uppercase font-serif">
            Immunité Cyber
          </h1>
          <p className="text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Transformez votre sécurité en un actif stratégique. Nous garantissons votre conformité NIS2 et protégeons vos données critiques contre toute intrusion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black mb-24">
          <div className="bg-white p-12 border-r border-b border-black">
            <h2 className="text-3xl font-serif font-bold uppercase mb-8">L'Exigence NIS2</h2>
            <p className="text-zinc-600 leading-relaxed mb-10 font-serif text-lg">
              La conformité n'est pas une contrainte, c'est une barrière de protection. Nous implémentons les standards les plus élevés pour assurer l'intégrité de votre chaîne de valeur et la pérennité de vos opérations.
            </p>
            <ul className="space-y-6">
              {[
                "Audit de conformité opposable",
                "Gestion active des menaces",
                "Sécurisation des flux critiques",
                "Garantie de souveraineté numérique"
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
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">100%</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Conformité NIS2 Garantie</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">ZÉRO</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Fuite de données critique</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">EU</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Souveraineté Totale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecuriteNIS2;
