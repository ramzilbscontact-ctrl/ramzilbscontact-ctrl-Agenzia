import React from 'react';
import PageLayout from '../../components/PageLayout';
import LegalContent from '../../components/LegalContent';

const RGPD: React.FC = () => (
  <PageLayout title="Conformité RGPD" badge="Légal" maxWidth="prose">
    <LegalContent>
      <section>
        <h2>1. Notre engagement</h2>
        <p>
          Agenzia s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) n° 2016/679
          du Parlement européen et du Conseil du 27 avril 2016.
        </p>
      </section>

      <section>
        <h2>2. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est Ramzi Lebsaira —{' '}
          <a href="mailto:hello@getagenzia.fr">hello@getagenzia.fr</a>.
        </p>
      </section>

      <section>
        <h2>3. Base légale du traitement</h2>
        <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
        <ul>
          <li>L'exécution d'un contrat (pour nos clients)</li>
          <li>L'intérêt légitime (pour répondre aux demandes de contact)</li>
          <li>Le consentement (pour l'envoi de newsletters et le marketing)</li>
        </ul>
      </section>

      <section>
        <h2>4. Destinataires des données</h2>
        <p>
          Vos données sont exclusivement destinées à Agenzia et à ses sous-traitants techniques (hébergement
          OVHcloud, email Brevo, CRM Twenty self-hosted). Aucun transfert hors UE sans garanties appropriées.
        </p>
      </section>

      <section>
        <h2>5. Sécurité des données</h2>
        <p>
          Mesures techniques et organisationnelles : chiffrement TLS 1.3, hébergement OVH SecNumCloud 3.2,
          authentification forte, journalisation des accès, sauvegardes chiffrées. Conformément à l'article 32
          du RGPD.
        </p>
      </section>
    </LegalContent>
  </PageLayout>
);

export default RGPD;
