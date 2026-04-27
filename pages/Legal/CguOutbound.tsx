import React from 'react';
import PageLayout from '../../components/PageLayout';
import LegalContent from '../../components/LegalContent';

const CguOutbound: React.FC = () => (
  <PageLayout
    title="Politique de prospection commerciale"
    badge="Légal · Outbound"
    subtitle="Mise à jour : 26 avril 2026"
    maxWidth="prose"
  >
    <LegalContent>
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">1. Qui vous contacte ?</h2>
        <p>
          <strong>Agenzia</strong> est la marque commerciale de l'<strong>Entreprise individuelle Lebsaira</strong> (SIREN 928 689 819,
          siege social : 13 rue des Petits Champs, 67300 Schiltigheim, France).
          Nous proposons aux PME francaises de 50 a 250 salaries des services d'infogerance IA-first
          et de mise en conformite NIS2.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">2. Pourquoi recevez-vous cet email ?</h2>
        <p>
          Vous recevez un message de notre part car votre entreprise figure dans le registre public Sirene/INSEE
          et correspond a notre cible : PME francaise de 50 a 250 salaries dans un secteur soumis a la directive NIS2
          (industrie, energie, transport, sante, technologies, finance).
        </p>
        <p className="mt-2">
          Aucun donnee personnelle sensible n'est collectee. Les informations professionnelles utilisees
          (nom de l'entreprise, secteur d'activite, dirigeant, adresse postale) sont issues de bases publiques
          accessibles sur <a href="https://annuaire-entreprises.data.gouv.fr" target="_blank" rel="noopener noreferrer" className="underline">annuaire-entreprises.data.gouv.fr</a>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">3. Base legale</h2>
        <p>
          Notre prospection s'appuie sur l'article 6.1.f du RGPD (<strong>interet legitime</strong>) :
          identification de prospects professionnels susceptibles d'etre interesses par nos services
          de conformite reglementaire (NIS2).
        </p>
        <p className="mt-2">
          La <a href="https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" target="_blank" rel="noopener noreferrer" className="underline">CNIL</a>
          considere ce traitement comme licite en B2B sous reserve que :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>l'objet du courrier ait un rapport avec votre activite professionnelle</li>
          <li>vous puissiez vous opposer a tout moment</li>
          <li>l'identification du responsable du traitement soit claire</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">4. Comment vous desinscrire ?</h2>
        <p>
          Tous nos emails contiennent un lien <strong>"se desinscrire"</strong> en pied de message.
          Un seul clic suffit : votre adresse est immediatement et definitivement retiree de notre liste.
        </p>
        <p className="mt-2">
          Vous pouvez egalement nous ecrire directement a <a href="mailto:contact@getagenzia.fr" className="underline">contact@getagenzia.fr</a>
          ou utiliser le bouton "Se desinscrire" natif de votre client mail (Gmail, Outlook),
          notre infrastructure respecte le standard RFC 8058 (one-click unsubscribe).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">5. Vos droits RGPD</h2>
        <p>
          Conformement aux articles 15 a 22 du RGPD, vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>droit d'acces a vos donnees</li>
          <li>droit de rectification</li>
          <li>droit a l'effacement</li>
          <li>droit d'opposition au traitement</li>
          <li>droit a la portabilite</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits : <a href="mailto:contact@getagenzia.fr" className="underline">contact@getagenzia.fr</a>.
          En cas de litige, vous pouvez saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">cnil.fr</a>).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">6. Conservation des donnees</h2>
        <p>
          Les emails desinscrits sont conserves dans notre liste de suppression pendant 3 ans
          afin de garantir que nous ne vous recontacterons pas par erreur.
          Aucun autre traitement n'est applique a ces donnees.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-zinc-900">7. Sous-traitants</h2>
        <p>
          L'envoi de nos emails passe par <strong>Amazon SES</strong> (region Stockholm, eu-north-1) :
          aucune donnee n'est transferee hors UE/EEE pour cette finalite.
          Les serveurs hebergeant notre infrastructure sont situes en France (OVH, region Strasbourg).
        </p>
      </div>
    </section>

    <div className="mt-16 pt-8 border-t border-[--color-ghost] text-sm text-mist">
      <p>Une question ? <a href="mailto:contact@getagenzia.fr">contact@getagenzia.fr</a></p>
    </div>
    </LegalContent>
  </PageLayout>
);

export default CguOutbound;
