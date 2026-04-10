import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Server, ArrowRight, CheckCircle } from 'lucide-react';

const MigrationCloud: React.FC = () => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest">03 // SOVEREIGNTY</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 uppercase font-serif">
            Souveraineté Cloud
          </h1>
          <p className="text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Libérez votre potentiel. Nous migrons vos actifs vers des infrastructures cloud européennes protégées, garantissant performance et indépendance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black mb-24">
          <div className="bg-white p-12 border-r border-b border-black">
            <h2 className="text-3xl font-serif font-bold uppercase mb-8">L'Approche Stratégique</h2>
            <p className="text-zinc-600 leading-relaxed mb-10 font-serif text-lg">
              La migration n'est pas une fin, c'est un nouveau départ. Nous concevons une architecture agile qui s'adapte à vos besoins réels, tout en assurant une transition sans aucune interruption de service.
            </p>
            <ul className="space-y-6">
              {[
                "Audit de performance infrastructure",
                "Migration sans interruption de flux",
                "Optimisation des coûts cloud",
                "Garantie de souveraineté européenne"
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
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">ZÉRO</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Interruption de service</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">-30%</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Coûts d'infrastructure</p>
              </div>
              <div>
                <div className="text-6xl font-black text-white tracking-tighter mb-2 font-serif italic">100%</div>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Indépendance Technologique</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 border border-black p-12 text-center">
          <h2 className="text-3xl font-serif font-bold uppercase mb-6">Prêt pour la transition ?</h2>
          <p className="text-zinc-600 mb-10 max-w-2xl mx-auto font-serif text-lg italic">
            Nos experts vous accompagnent pour garantir une transition fluide vers une infrastructure souveraine et performante.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-6 bg-black text-white px-12 py-6 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
          >
            Demander une étude de valeur
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MigrationCloud;
