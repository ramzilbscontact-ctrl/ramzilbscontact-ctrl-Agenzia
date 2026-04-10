import React from 'react';
import { motion } from 'motion/react';

const RGPD: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-12">
            Conformité RGPD
          </h1>
          
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Notre engagement</h2>
              <p>
                Agenzia s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du Parlement européen et du Conseil du 27 avril 2016.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données est : Ramzi Lebsaira — contact@agenzia.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Base légale du traitement</h2>
              <p>
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>L'exécution d'un contrat (pour nos clients)</li>
                <li>L'intérêt légitime (pour répondre aux demandes de contact)</li>
                <li>Le consentement (pour l'envoi de newsletters)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Destinataires des données</h2>
              <p>
                Vos données sont exclusivement destinées à Agenzia et à ses sous-traitants techniques (hébergement, outils de gestion). Aucun transfert de données hors de l'Union Européenne n'est effectué sans garanties appropriées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, conformément à l'article 32 du RGPD.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RGPD;
