import React from 'react';
import PageLayout from '../../components/PageLayout';
import LegalContent from '../../components/LegalContent';

const PrivacyPolicy: React.FC = () => (
  <PageLayout title="Politique de confidentialité" badge="Légal" maxWidth="prose">
    <LegalContent>
      <section>
        <h2>1. Introduction</h2>
        <p>
          La protection de vos données personnelles est une priorité pour Agenzia. Cette politique détaille
          comment nous collectons, utilisons et protégeons vos informations.
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>
        <p>Nous collectons les données suivantes lorsque vous utilisez nos services ou nous contactez :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email professionnelle</li>
          <li>Numéro de téléphone</li>
          <li>Nom de l'entreprise</li>
          <li>Données de navigation (via cookies, avec consentement explicite)</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalités du traitement</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de contact</li>
          <li>Gérer vos abonnements et services</li>
          <li>Améliorer l'expérience utilisateur sur notre site</li>
          <li>Envoyer des informations sur nos services (avec votre consentement)</li>
        </ul>
      </section>

      <section>
        <h2>4. Conservation des données</h2>
        <p>
          Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles
          elles ont été collectées, dans le respect du RGPD et de la réglementation en vigueur.
        </p>
      </section>

      <section>
        <h2>5. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression,
          d'opposition et de portabilité de vos données. Pour exercer ces droits, contactez-nous à{' '}
          <a href="mailto:hello@getagenzia.fr">hello@getagenzia.fr</a>.
        </p>
      </section>
    </LegalContent>
  </PageLayout>
);

export default PrivacyPolicy;
