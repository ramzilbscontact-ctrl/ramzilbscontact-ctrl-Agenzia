import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cloud, Award, Globe } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      icon: Cloud,
      name: "OVHcloud",
      role: "Partenaire MSP",
      color: "text-blue-400"
    },
    {
      icon: Globe,
      name: "Microsoft",
      role: "Cloud Solution Provider",
      color: "text-brand-accent"
    },
    {
      icon: Award,
      name: "Atera",
      role: "Certified Partner",
      color: "text-cyan-400"
    },
    {
      icon: ShieldCheck,
      name: "Mistral AI",
      role: "Partenaire souverain",
      color: "text-emerald-400"
    }
  ];

  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-8">
            Partenaires certifiés
          </h2>
          <p className="text-lg text-zinc-500">
            Nous travaillons avec les meilleures infrastructures souveraines européennes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-200 p-8 rounded-[32px] flex flex-col items-center text-center group hover:border-brand-accent/30 transition-all shadow-tactile"
            >
              <div className={`w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 ${partner.color} group-hover:scale-110 transition-transform`}>
                <partner.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{partner.name}</h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{partner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
