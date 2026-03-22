
import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-24 text-brand-primary"
    >
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          La présente Politique de Confidentialité a pour but d'informer les utilisateurs du site getagenzia.fr sur la manière dont leurs données personnelles sont collectées, traitées et protégées par l'Entreprise Lebsaira.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Responsable du traitement</h2>
        <p className="mb-4">
          L'Entreprise Lebsaira, SIREN 928 689 819, située au 13 RUE des Petits Champs, 67300 Schiltigheim, est responsable du traitement des données collectées sur ce site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Collecte des données</h2>
        <p className="mb-4">
          Nous collectons les données suivantes via nos formulaires en ligne :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nom</li>
          <li>Numéro de téléphone</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Finalité du traitement</h2>
        <p className="mb-4">
          Les données collectées sont utilisées exclusivement pour les finalités suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Envoi de notifications générées par intelligence artificielle (IA).</li>
          <li>Support client et assistance technique via SMS ou appels téléphoniques.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Partage des données</h2>
        <p className="mb-4 font-medium">
          Nous attachons une importance capitale à la confidentialité de vos données de télécommunication. Les numéros de téléphone collectés pour les services SMS ne sont jamais partagés avec des tiers ou des affiliés à des fins de marketing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Droit d'opposition (Opt-out)</h2>
        <p className="mb-4">
          Vous disposez d'un droit d'opposition permanent à la réception de nos communications. Vous pouvez envoyer le mot-clé <strong>"STOP"</strong> à tout moment en réponse à l'un de nos SMS pour ne plus recevoir de messages de notre part.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Conservation des données</h2>
        <p className="mb-4">
          Vos données personnelles sont conservées tant que le service est actif et que vous n'avez pas exercé votre droit de suppression ou d'opposition.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
        <p className="mb-4">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter à l'adresse du siège social mentionnée ci-dessus.
        </p>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
