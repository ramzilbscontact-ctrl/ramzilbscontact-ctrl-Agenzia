export interface Article {
  slug: string;
  titre: string;
  excerpt: string;
  date: string;
  auteur: string;
  tempsLecture: number;
  categorie: string;
  contenu: ArticleBlock[];
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export const articles: Article[] = [
  {
    slug: 'nis2-ce-que-chaque-pme-doit-savoir',
    titre: 'NIS2 : Ce que chaque PME doit savoir avant Octobre 2026',
    excerpt:
      `La directive NIS2 entre en vigueur et son périmètre s'est considérablement élargi. Voici ce que votre PME risque si elle n'agit pas maintenant.`,
    date: '2025-03-10',
    auteur: 'Équipe Agenzia',
    tempsLecture: 6,
    categorie: 'Conformité',
    contenu: [
      {
        type: 'p',
        text: `La directive NIS2 (Network and Information Security 2) est la mise à jour majeure du cadre européen de cybersécurité. Publiée en décembre 2022 et devant être transposée en droit national pour octobre 2024, elle impose désormais des obligations contraignantes à des milliers d'entreprises françaises qui se croyaient hors de son périmètre.`,
      },
      {
        type: 'h2',
        text: 'Qui est concerné par NIS2 ?',
      },
      {
        type: 'p',
        text: `Contrairement à NIS1 qui ciblait uniquement les opérateurs d'importance vitale, NIS2 s'étend à toute entreprise de plus de 50 salariés ou réalisant plus de 10 millions d'euros de chiffre d'affaires dans des secteurs critiques : santé, énergie, transport, eau, infrastructure numérique, mais aussi les fournisseurs de services IT, les services postaux, et bien d'autres.`,
      },
      {
        type: 'ul',
        items: [
          'Entités essentielles : secteurs à haute criticité (énergie, santé, transports)',
          'Entités importantes : secteurs à criticité intermédiaire (services IT, alimentaire, industrie)',
          `Chaîne d'approvisionnement : vos fournisseurs et prestataires peuvent vous imposer la conformité`,
        ],
      },
      {
        type: 'h2',
        text: 'Quelles sont les obligations concrètes ?',
      },
      {
        type: 'p',
        text: `NIS2 impose un ensemble de mesures techniques et organisationnelles. Parmi les plus importantes : la gestion des risques (avec une analyse documentée), la notification obligatoire des incidents en moins de 24h, la sécurité de la chaîne d'approvisionnement, et la formation des dirigeants à la cybersécurité. Les dirigeants peuvent être tenus personnellement responsables en cas de manquement.`,
      },
      {
        type: 'h2',
        text: 'Les sanctions en cas de non-conformité',
      },
      {
        type: 'p',
        text: `Pour les entités essentielles, les amendes peuvent atteindre 10 millions d'euros ou 2 % du chiffre d'affaires mondial. Pour les entités importantes, le plafond est de 7 millions d'euros ou 1,4 % du CA. Au-delà des amendes, une cyberattaque non maîtrisée peut paralyser votre activité pendant plusieurs semaines — un coût bien supérieur à celui de la mise en conformité.`,
      },
      {
        type: 'h2',
        text: 'Comment se préparer efficacement ?',
      },
      {
        type: 'ul',
        items: [
          'Réaliser un audit de maturité cybersécurité pour identifier les écarts',
          'Mettre en place une politique de gestion des incidents documentée',
          `Sécuriser la chaîne d'approvisionnement avec des clauses contractuelles adaptées`,
          'Former vos équipes et dirigeants aux bonnes pratiques',
          `Déployer des outils de surveillance et de détection d'intrusion (EDR/SIEM)`,
        ],
      },
      {
        type: 'p',
        text: `La mise en conformité NIS2 ne doit pas être vue comme une contrainte réglementaire de plus, mais comme une opportunité de renforcer structurellement votre résilience opérationnelle. Les PME qui agissent tôt bénéficient d'un avantage concurrentiel réel : leurs clients et partenaires leur font davantage confiance.`,
      },
    ],
  },
  {
    slug: 'ia-reduit-couts-it-40-pourcent',
    titre: `Comment l'IA réduit les coûts IT de 40% pour les PME françaises`,
    excerpt:
      `L'intelligence artificielle n'est plus réservée aux grandes entreprises. Voici comment les PME françaises utilisent déjà l'IA pour diviser leur facture IT par deux.`,
    date: '2025-02-20',
    auteur: 'Équipe Agenzia',
    tempsLecture: 5,
    categorie: 'Intelligence Artificielle',
    contenu: [
      {
        type: 'p',
        text: `Pendant des années, l'externalisation IT a reposé sur un modèle simple : un technicien se déplace, diagnostique, résout. Ce modèle est coûteux, lent et inadapté aux PME qui ne peuvent pas se permettre une équipe IT dédiée. L'IA change fondamentalement cette équation.`,
      },
      {
        type: 'h2',
        text: 'La maintenance prédictive : prévenir plutôt que guérir',
      },
      {
        type: 'p',
        text: `Les algorithmes de machine learning analysent en continu les métriques de vos équipements — température CPU, taux d'erreurs disque, latence réseau — et détectent les anomalies avant qu'elles ne causent une panne. Une PME de 80 postes peut ainsi économiser en moyenne 15 000 € par an en interventions d'urgence évitées.`,
      },
      {
        type: 'h2',
        text: `L'automatisation des tâches répétitives`,
      },
      {
        type: 'ul',
        items: [
          'Mises à jour automatiques planifiées en dehors des heures de bureau',
          'Redémarrage et réinitialisation des services sans intervention humaine',
          'Création et gestion automatique des tickets de support',
          'Onboarding et offboarding des utilisateurs en quelques clics',
        ],
      },
      {
        type: 'p',
        text: `Selon notre propre analyse sur 47 clients PME, l'automatisation des tâches répétitives réduit le temps d'intervention de 68 %. Un technicien qui consacrait 60 % de son temps à des tâches manuelles peut désormais se concentrer sur des projets à valeur ajoutée.`,
      },
      {
        type: 'h2',
        text: 'Le support IA de première ligne',
      },
      {
        type: 'p',
        text: `Les chatbots IT de nouvelle génération, entraînés sur la documentation de votre infrastructure, résolvent 40 à 60 % des tickets sans aucune intervention humaine. Mot de passe oublié, accès VPN, configuration d'imprimante — ces demandes banales ne mobilisent plus vos équipes.`,
      },
      {
        type: 'h2',
        text: 'Les chiffres concrets pour une PME de 50 postes',
      },
      {
        type: 'ul',
        items: [
          'Réduction des incidents majeurs : -72% sur 12 mois',
          'Temps moyen de résolution (MTTR) : de 4h à 23 minutes',
          'Économies annuelles estimées : entre 18 000 € et 35 000 €',
          'ROI moyen constaté : 340% sur 24 mois',
        ],
      },
      {
        type: 'p',
        text: `L'IA n'est pas une baguette magique — elle nécessite une configuration initiale soignée et une supervision continue. Mais pour une PME qui externalise son IT, c'est aujourd'hui le levier le plus puissant pour obtenir un service de qualité Enterprise à un coût PME.`,
      },
    ],
  },
  {
    slug: 'meshcentral-vs-nable-comparatif-msp',
    titre: 'MeshCentral vs N-able : Le comparatif honnête pour les MSP',
    excerpt:
      `Deux outils de gestion à distance radicalement différents. L'un est open-source et souverain, l'autre est enterprise et cloud américain. Lequel choisir pour vos clients ?`,
    date: '2025-01-15',
    auteur: 'Équipe Agenzia',
    tempsLecture: 7,
    categorie: 'Outils MSP',
    contenu: [
      {
        type: 'p',
        text: 'Pour un MSP, le choix de la plateforme de gestion à distance est stratégique. Il conditionne la rentabilité, la sécurité des données clients et la capacité à scaler. MeshCentral et N-able représentent deux philosophies radicalement opposées.',
      },
      {
        type: 'h2',
        text: 'MeshCentral : la souveraineté open-source',
      },
      {
        type: 'p',
        text: `MeshCentral est un outil open-source développé par Intel, auto-hébergeable sur votre propre infrastructure. C'est la solution que nous avons retenue chez Agenzia après 6 mois de tests comparatifs. Ses atouts sont considérables : hébergement 100% européen, coût marginal nul (hors infrastructure), et une liberté totale sur les données de vos clients.`,
      },
      {
        type: 'ul',
        items: [
          'Licence : MIT (open-source gratuit)',
          'Hébergement : on-premise ou cloud souverain',
          'Agents : Windows, Linux, macOS',
          'Fonctionnalités : accès distant, wake-on-LAN, tunneling, MFA',
          'Limitation : interface moins polished, support communautaire uniquement',
        ],
      },
      {
        type: 'h2',
        text: `N-able (anciennement SolarWinds MSP) : l'enterprise tout-en-un`,
      },
      {
        type: 'p',
        text: 'N-able est une suite enterprise qui intègre RMM, PSA, sauvegarde et sécurité dans une plateforme unifiée. Ses points forts sont indéniables pour un MSP qui veut aller vite : onboarding rapide, intégrations natives avec les principaux outils du marché, et un support 24/7. Mais son prix (entre 2 € et 6 € par device par mois selon les modules) peut rapidement peser sur les marges.',
      },
      {
        type: 'ul',
        items: [
          'Coût : 2 à 6 €/device/mois (variable selon les modules)',
          'Hébergement : cloud US (avec options EU limitées)',
          'Intégrations : ConnectWise, Autotask, Datto...',
          'Support : 24/7 avec SLA',
          'Limitation : coût élevé, dépendance vendor, données hors UE par défaut',
        ],
      },
      {
        type: 'h2',
        text: 'Le critère décisif : la conformité RGPD',
      },
      {
        type: 'p',
        text: `Dans un contexte post-Schrems II, héberger les données de vos clients PME sur des serveurs américains expose votre MSP à un risque juridique réel. MeshCentral déployé sur un VPS OVH ou Scaleway offre une garantie de souveraineté que N-able ne peut pas égaler nativement. Pour les PME soumises à NIS2, c'est souvent un critère éliminatoire.`,
      },
      {
        type: 'h2',
        text: 'Notre verdict',
      },
      {
        type: 'p',
        text: `Pour un MSP qui démarre ou qui gère moins de 500 devices, MeshCentral avec une infrastructure souveraine est notre recommandation claire. La courbe d'apprentissage est réelle mais surmontable, et les économies réalisées permettent d'investir dans la valeur ajoutée. Pour les MSP de taille importante avec des clients Enterprise exigeant un SLA fort et des intégrations PSA avancées, N-able justifie son coût. La vérité, c'est que les deux ne s'adressent pas aux mêmes marchés.`,
      },
    ],
  },
  {
    slug: 'ransomware-5-erreurs-fatales-pme',
    titre: 'Ransomware : Les 5 erreurs fatales des PME non équipées',
    excerpt:
      `Une PME sur deux victime d'un ransomware ne rouvre jamais ses portes. Ces 5 erreurs sont évitables. Votre entreprise en fait peut-être plusieurs sans le savoir.`,
    date: '2024-12-05',
    auteur: 'Équipe Agenzia',
    tempsLecture: 6,
    categorie: 'Cybersécurité',
    contenu: [
      {
        type: 'p',
        text: `En 2024, 74 % des ransomwares ont ciblé des PME. Pas parce qu'elles sont des cibles plus intéressantes que les grandes entreprises, mais parce qu'elles sont plus accessibles. Derrière chaque attaque réussie, on retrouve systématiquement les mêmes erreurs structurelles.`,
      },
      {
        type: 'h2',
        text: 'Erreur #1 : Confondre antivirus et protection endpoint',
      },
      {
        type: 'p',
        text: `Un antivirus classique détecte les signatures connues. Un ransomware moderne chiffre vos fichiers en moins de 4 minutes, bien avant qu'une signature soit disponible. La protection moderne repose sur des EDR (Endpoint Detection & Response) qui analysent les comportements suspects en temps réel, pas les signatures. Si vous utilisez encore Windows Defender seul, vous êtes exposé.`,
      },
      {
        type: 'h2',
        text: 'Erreur #2 : Des sauvegardes connectées au réseau principal',
      },
      {
        type: 'p',
        text: `C'est l'erreur la plus coûteuse. Les ransomwares modernes attendent jusqu'à 21 jours avant de chiffrer, le temps de coloniser les sauvegardes. Si votre NAS est connecté en permanence au réseau ou si vos sauvegardes cloud s'y trouvent dans le même tenant Azure/AWS, elles seront chiffrées avec le reste. La règle d'or : 3-2-1 (3 copies, 2 supports différents, 1 hors ligne).`,
      },
      {
        type: 'h2',
        text: 'Erreur #3 : Pas de segmentation réseau',
      },
      {
        type: 'ul',
        items: [
          'Poste comptabilité sur le même VLAN que le serveur de production',
          'Imprimantes et IoT sur le même réseau que les données sensibles',
          'Accès RDP ouvert sur internet sans VPN',
          'Partages réseau accessibles par tous les utilisateurs',
        ],
      },
      {
        type: 'p',
        text: `Sans segmentation, un ransomware qui entre par le poste d'un commercial peut atteindre votre serveur de base de données en quelques minutes. Une architecture zero-trust avec VLAN séparés réduit drastiquement le rayon d'impact.`,
      },
      {
        type: 'h2',
        text: 'Erreur #4 : MFA absent sur les accès critiques',
      },
      {
        type: 'p',
        text: `81 % des violations de données impliquent des mots de passe compromis (Verizon DBIR 2024). Le MFA (authentification à deux facteurs) bloque 99,9 % des attaques par credential stuffing. Pourtant, moins de 40 % des PME françaises l'ont déployé sur leurs outils critiques. Messagerie, VPN, accès cloud — le MFA est non négociable.`,
      },
      {
        type: 'h2',
        text: 'Erreur #5 : Aucun plan de réponse aux incidents',
      },
      {
        type: 'p',
        text: `Quand l'attaque survient, chaque minute compte. Les PME sans plan de réponse passent en moyenne 18 heures à comprendre ce qui se passe, pendant que le ransomware continue de chiffrer. Un plan minimal doit définir : qui contacter (ANSSI, assurance cyber, MSP), comment isoler les systèmes infectés, et dans quel ordre restaurer les services critiques.`,
      },
      {
        type: 'p',
        text: `La cybersécurité n'est pas une dépense — c'est une assurance. Une PME qui subit un ransomware majeur perd en moyenne 22 jours d'activité et 200 000 € entre rançon, reconstruction et perte de clients. Comparé au coût d'une protection MSP complète, le calcul est vite fait.`,
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
