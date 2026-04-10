import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingDown, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const SimulateurROI: React.FC = () => {
  const [devices, setDevices] = useState(50);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(10);
  const [avgResolutionTime, setAvgResolutionTime] = useState(4); // hours

  // Simple ROI Logic
  const internalDsiCost = 50000; // Annual
  const agenziaCostPerDevice = 20; // Monthly
  const annualAgenziaCost = devices * agenziaCostPerDevice * 12;
  
  const productivityLossCostPerHour = 50; // Average cost of employee downtime per hour
  const annualProductivityLoss = incidentsPerMonth * avgResolutionTime * productivityLossCostPerHour * 12;
  
  // Agenzia reduces incidents by 80% and resolution time by 50%
  const reducedIncidents = incidentsPerMonth * 0.2;
  const reducedTime = avgResolutionTime * 0.5;
  const annualAgenziaProductivityLoss = reducedIncidents * reducedTime * productivityLossCostPerHour * 12;

  const totalInternalCost = internalDsiCost + annualProductivityLoss;
  const totalAgenziaCost = annualAgenziaCost + annualAgenziaProductivityLoss;
  const annualSavings = totalInternalCost - totalAgenziaCost;

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
            <span className="text-[10px] font-mono uppercase tracking-widest">04 // PERFORMANCE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 uppercase font-serif">
            Diagnostic de Valeur
          </h1>
          <p className="text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-serif italic">
            Mesurez l'impact de l'inefficacité technique sur votre rentabilité et découvrez le potentiel d'optimisation de votre infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-l border-black">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-12 bg-white p-12 border-r border-b border-black">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-6">
                Volume d'actifs (PC, Serveurs)
              </label>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="10"
                value={devices}
                onChange={(e) => setDevices(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-100 appearance-none cursor-pointer accent-black"
              />
              <div className="mt-4 text-3xl font-serif font-bold uppercase">{devices} Unités</div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-6">
                Fréquence des interruptions / mois
              </label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1"
                value={incidentsPerMonth}
                onChange={(e) => setIncidentsPerMonth(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-100 appearance-none cursor-pointer accent-black"
              />
              <div className="mt-4 text-3xl font-serif font-bold uppercase">{incidentsPerMonth} Interruptions</div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-6">
                Temps de résolution moyen (heures)
              </label>
              <input 
                type="range" 
                min="1" 
                max="24" 
                step="1"
                value={avgResolutionTime}
                onChange={(e) => setAvgResolutionTime(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-100 appearance-none cursor-pointer accent-black"
              />
              <div className="mt-4 text-3xl font-serif font-bold uppercase">{avgResolutionTime}h / Action</div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-black p-12 border-r border-b border-black text-white flex-grow">
              <h2 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-12">Gain Opérationnel Annuel Estimé</h2>
              <div className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 font-serif italic">
                {annualSavings.toLocaleString()}€
              </div>
              <p className="text-zinc-500 font-serif text-lg italic">
                Optimisation basée sur la réduction drastique des coûts directs et la récupération de productivité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r">
              {[
                { label: "Optimisation Coûts", value: `-${Math.round((internalDsiCost - annualAgenziaCost) / 1000)}k€` },
                { label: "Gain Productivité", value: `+${Math.round((annualProductivityLoss - annualAgenziaProductivityLoss) / 1000)}k€` },
                { label: "Risque Cyber", value: "Immunisé" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border-b border-black text-center">
                  <div className="text-2xl font-serif font-bold uppercase mb-2">{item.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-50 p-12 border-r border-b border-black flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-serif font-bold uppercase mb-2">Diagnostic réel requis ?</h3>
                <p className="text-zinc-500 font-serif italic">Nos experts analysent vos leviers de performance gratuitement.</p>
              </div>
              <a
                href="/#contact"
                className="bg-black text-white px-12 py-6 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
              >
                Audit Gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulateurROI;
