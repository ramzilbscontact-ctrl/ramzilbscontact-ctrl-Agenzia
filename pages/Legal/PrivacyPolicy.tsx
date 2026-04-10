import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-12">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                La protection de vos données personnelles est une priorité pour Agenzia. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Données collectées</h2>
              <p>
                Nous collectons les données suivantes lorsque vous utilisez nos services ou nous contactez :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email professionnelle</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Données de navigation (via cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Finalités du traitement</h2>
              <p>
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Gérer vos abonnements et services</li>
                <li>Améliorer l'expérience utilisateur sur notre site</li>
                <li>Envoyer des informations sur nos services (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, d'opposition et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <a href="mailto:dpo@agenzia.ai" className="text-brand-accent hover:underline">dpo@agenzia.ai</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
