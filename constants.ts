
import type { Content } from './types';

export const translations: { [key: string]: Content } = {
  fr: {
    header: {
      nav: { solutions: 'Solutions', podcasts: 'Podcasts', videos: 'Vidéos', blog: 'Blog' },
      cta: 'Planifier un appel',
      language: 'Langue',
    },
    hero: {
      title: 'Votre entreprise, en version augmentée par l’IA.',
      subtitle: 'Nous concevons des systèmes d’automatisation sur-mesure pour décupler votre productivité et libérer le potentiel de vos équipes.',
      cta: 'Découvrir nos solutions',
    },
    ecosystem: {
      title: 'Intégré à votre écosystème technologique',
    },
    problem: {
      title: 'Les opérations manuelles freinent votre croissance.',
      description: 'Chaque tâche répétitive est une opportunité manquée. L\'inefficacité opérationnelle coûte cher, démotive vos équipes et vous laisse vulnérable face à la concurrence.',
      cards: [
        { title: 'Perte de temps', description: 'Des heures précieuses gaspillées dans des process manuels et redondants.' },
        { title: 'Risque d\'erreurs', description: 'Les interventions humaines augmentent la probabilité d\'erreurs coûteuses.' },
        { title: 'Manque de scalabilité', description: 'Vos systèmes actuels ne peuvent pas suivre la croissance de votre activité.' },
      ],
    },
    vision: {
      title: 'Passez à l’efficience opérationnelle absolue.',
      description: 'Agenzia transforme vos processus métier en un avantage compétitif. Grâce à l\'IA et l\'automatisation, nous créons un système nerveux central pour votre entreprise, où chaque action est optimisée, intelligente et instantanée.',
      cta: 'Discuter avec un expert',
    },
    promptBuilder: {
      title: 'Imaginez. Nous Architecturons. Votre Écosystème Idéal.',
      intro: 'Chez Agenzia, nous ne vendons pas des boîtes. Nous construisons des extensions de votre intelligence. Utilisez notre configurateur interactif pour définir votre besoin le plus pressant. Observez comment le "White Pure Look" se matérialise pour vous, en temps réel.',
      steps: {
        challenge: { title: 'Étape 1 : Quel est votre défi principal ?' },
        tools: { title: 'Étape 2 : Quels outils utilisez-vous déjà ?', available: 'Outils disponibles', selected: 'Votre espace de travail' },
        wish: { title: 'Étape 3 : Décrivez votre souhait', placeholder: 'Ex: "Je veux que mes leads qualifiés dans HubSpot reçoivent un email personnalisé 5 minutes après."', suggestions: ['...envoi automatique d\'email...', '...création de tâche...', '...synchronisation des données...'] },
      },
      challenges: [
        { id: 'leads', name: 'Acquisition & Conversion Leads', icon: 'magnet' },
        { id: 'admin', name: 'Gestion Administrative & Finance', icon: 'balance' },
        { id: 'hr', name: 'RH & Onboarding', icon: 'team' },
        { id: 'data', name: 'Analyse de Données & Reporting', icon: 'chart' },
        { id: 'ops', name: 'Processus Opérationnels', icon: 'gear' },
        { id: 'support', name: 'Support Client & FAQ', icon: 'chat' },
      ],
      tools: [
          { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
          { id: 'slack', name: 'Slack', iconUrl: 'slack.com' },
          { id: 'hubspot', name: 'HubSpot', iconUrl: 'hubspot.com' },
          { id: 'notion', name: 'Notion', iconUrl: 'notion.so' },
          { id: 'excel', name: 'Excel', iconUrl: 'office.com' },
          { id: 'salesforce', name: 'Salesforce', iconUrl: 'salesforce.com' },
          { id: 'zapier', name: 'Zapier', iconUrl: 'zapier.com' },
          { id: 'openai', name: 'OpenAI', iconUrl: 'openai.com' },
          { id: 'trello', name: 'Trello', iconUrl: 'trello.com' },
          { id: 'asana', name: 'Asana', iconUrl: 'asana.com' },
          { id: 'monday', name: 'Monday.com', iconUrl: 'monday.com' },
          { id: 'stripe', name: 'Stripe', iconUrl: 'stripe.com' },
          { id: 'airtable', name: 'Airtable', iconUrl: 'airtable.com' },
          { id: 'teams', name: 'MS Teams', iconUrl: 'microsoft.com' },
          { id: 'pipedrive', name: 'Pipedrive', iconUrl: 'pipedrive.com' },
          { id: 'typeform', name: 'Typeform', iconUrl: 'typeform.com' },
          { id: 'whatsapp', name: 'WhatsApp', iconUrl: 'whatsapp.com' },
          { id: 'github', name: 'GitHub', iconUrl: 'github.com' },
          { id: 'jira', name: 'Jira', iconUrl: 'atlassian.com' },
          { id: 'mailchimp', name: 'Mailchimp', iconUrl: 'mailchimp.com' },
          { id: 'discord', name: 'Discord', iconUrl: 'discord.com' },
          { id: 'zoom', name: 'Zoom', iconUrl: 'zoom.us' },
          { id: 'shopify', name: 'Shopify', iconUrl: 'shopify.com' },
          { id: 'webflow', name: 'Webflow', iconUrl: 'webflow.com' },
          { id: 'aws', name: 'AWS', iconUrl: 'aws.amazon.com' },
          { id: 'dropbox', name: 'Dropbox', iconUrl: 'dropbox.com' },
          { id: 'intercom', name: 'Intercom', iconUrl: 'intercom.com' },
          { id: 'calendly', name: 'Calendly', iconUrl: 'calendly.com' },
          { id: 'clickup', name: 'ClickUp', iconUrl: 'clickup.com' },
          { id: 'figma', name: 'Figma', iconUrl: 'figma.com' },
          { id: 'miro', name: 'Miro', iconUrl: 'miro.com' },
          { id: 'gitlab', name: 'GitLab', iconUrl: 'gitlab.com' },
          { id: 'quickbooks', name: 'QuickBooks', iconUrl: 'quickbooks.com' },
          { id: 'xero', name: 'Xero', iconUrl: 'xero.com' },
          { id: 'paypal', name: 'PayPal', iconUrl: 'paypal.com' },
          { id: 'docusign', name: 'DocuSign', iconUrl: 'docusign.com' },
          { id: 'zendesk', name: 'Zendesk', iconUrl: 'zendesk.com' },
          { id: 'google-ads', name: 'Google Ads', iconUrl: 'ads.google.com' },
          { id: 'meta', name: 'Meta', iconUrl: 'meta.com' },
          { id: 'linkedin', name: 'LinkedIn', iconUrl: 'linkedin.com' },
          { id: 'firebase', name: 'Firebase', iconUrl: 'firebase.com' },
          { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'postgresql.org' }
      ],
      preview: {
        title: 'Aperçu de la Solution',
        workflow: 'Flux de travail en temps réel',
      },
      cta: 'Générer ma solution personnalisée',
    },
    modules: {
      title: 'Nos modules d\'intervention.',
      cards: [
        { title: 'Audit & Stratégie IA', description: 'Analyse complète de vos processus pour identifier les gisements de productivité.', tag: 'Fondation' },
        { title: 'Automatisation des Ventes', description: 'Optimisez votre CRM, qualifiez les leads et automatisez le reporting commercial.', tag: 'Sales' },
        { title: 'Support Client Augmenté', description: 'Déployez des agents IA pour des réponses instantanées et un support 24/7.', tag: 'Support' },
        { title: 'Optimisation Financière', description: 'Automatisez la facturation, le suivi des paiements et la réconciliation comptable.', tag: 'Finance' },
      ],
    },
    podcasts: {
      title: 'Podcasts Stratégiques',
      subtitle: 'L\'IA racontée par ceux qui la construisent. Écoutez nos analyses approfondies en déplacement.',
      cta: 'Écouter maintenant',
    },
    videos: {
      title: 'Vidéos Éducatives',
      subtitle: 'Maîtrisez l\'automatisation avec nos tutoriels et démonstrations techniques.',
      cta: 'Regarder la vidéo',
    },
    useCases: {
      title: 'Des applications concrètes pour chaque département.',
      cases: [
        { title: 'Marketing', description: 'Génération de contenu, analyse de sentiment, personnalisation des campagnes à grande échelle.' },
        { title: 'Ressources Humaines', description: 'Automatisation du sourcing de candidats, onboarding des nouveaux employés, gestion des congés.' },
        { title: 'Opérations', description: 'Gestion de la chaîne logistique, optimisation des stocks, maintenance prédictive.' },
      ],
    },
    roi: {
      title: 'Calculez votre retour sur investissement.',
      description: 'Visualisez concrètement les économies et le gain de temps que l’automatisation peut apporter à votre entreprise.',
      employeesLabel: 'Nombre d\'employés',
      hoursLabel: 'Heures sauvées par employé/semaine',
      costLabel: 'Coût horaire moyen (€)',
      savingsTitle: 'Économies annuelles estimées',
      savingsPerYear: '/ an',
      cta: 'Obtenir un audit gratuit',
    },
    blog: {
      title: 'Intelligence & Perspectives.',
      subtitle: 'Décryptage des tendances IA et stratégies d\'automatisation pour les leaders de demain.',
      filters: ['Tous', 'Stratégie', 'Technologie'],
      posts: [
        { 
          category: 'Stratégie', 
          title: 'L’IA Générative : Architecturer l’Efficience Opérationnelle du Futur', 
          author: 'Jean Dupont', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jean_dupont',
          date: '12 Mars 2024', 
          readingTime: '8 min',
          excerpt: 'L’intégration des Large Language Models (LLM) ne se limite plus à la simple génération de texte. En 2025, elle devient le système nerveux central des organisations agiles.',
          content: `
            <p>L'ère de l'expérimentation avec l'IA est terminée. Nous sommes entrés dans l'ère de l'industrialisation. Pour les C-Levels, la question n'est plus "Qu'est-ce que l'IA peut faire ?" mais "Comment l'IA peut-elle transformer notre modèle opérationnel ?"</p>
            <h3>1. De l'outil à l'agent autonome</h3>
            <p>Contrairement aux logiciels traditionnels, les agents IA basés sur les LLMs ne se contentent pas d'exécuter des tâches ; ils prennent des decisions contextuelles. En connectant vos données propriétaires à ces modèles, vous créez des workflows qui apprennent de vos succès passés.</p>
            <h3>2. L'interopérabilité comme levier de ROI</h3>
            <p>Le véritable gain de productivité se trouve dans la glue entre vos outils. Gmail, Slack, HubSpot et Salesforce doivent communiquer de manière fluide. Nos architectures permettent une synchronisation en temps réel sans intervention humaine, réduisant les erreurs de saisie de 99%.</p>
            <h3>3. Conclusion</h3>
            <p>L'automatisation intelligente n'est pas un projet IT, c'est une stratégie business. En libérant vos talents des tâches répétitives, vous leur permettez de se concentrer sur la création de valeur et l'innovation stratégique.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true 
        },
        { 
          category: 'Technologie', 
          title: 'Automatisation 2.0 : Pourquoi l’IA Cognitive est le Nouveau Standard du Luxe Digital', 
          author: 'Marie Curie', 
          authorAvatar: 'https://i.pravatar.cc/150?u=marie_curie',
          date: '08 Mars 2024', 
          readingTime: '5 min',
          excerpt: 'Le "Pure White Look" de l’IA ne se voit pas, il se ressent dans la fluidité des opérations. Découvrez pourquoi l’expérience utilisateur interne est le levier de croissance le plus sous-estimé.',
          content: `
            <p>Le luxe digital ne réside plus dans l'ostentation technologique, mais dans l'invisibilité des processus. Une entreprise performante en 2024 est une entreprise où les frictions opérationnelles ont disparu au profit d'un flux de travail "liquide".</p>
            <h3>L'UX Interne : Le moteur caché de la croissance</h3>
            <p>Souvent négligée, l'expérience utilisateur des employés with their own business tools est corrélée directement à la rétention des talents et à la qualité du service client. L'IA cognitive permet d'anticiper les besoins des collaborateurs en leur fournissant la bonne information au bon moment, sans recherche active.</p>
            <blockquote>"L'intelligence la plus sophistiquée est celle qui simplifie la complexité jusqu'à la rendre imperceptible."</blockquote>
            <p>Chez Agenzia, nous appliquons les principes du design thinking à l'automatisation. Chaque workflow est conçu comme un produit de luxe : intuitif, robuste et esthétiquement pur.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        },
      ],
      cta: 'Voir tous les articles',
      newsletter: {
        title: 'Recevez nos analyses stratégiques.',
        placeholder: 'votre@email.com',
        button: 'S\'abonner'
      }
    },
    footer: {
      description: 'Agenzia. L\'efficience opérationnelle par l\'IA.',
      sections: [
        { title: 'Solutions', links: ['Automatisation Ventes', 'Support Client', 'Opérations RH', 'Finance'] },
        { title: 'Entreprise', links: ['À propos', 'Carrières', 'Presse', 'Contact'] },
        { title: 'Ressources', links: ['Blog', 'Podcasts', 'Vidéos', 'Documentation API'] },
      ],
      copyright: '© 2024 Agenzia. Tous droits réservés.',
    },
    aiAssistant: {
      greeting: 'Bonjour ! Comment puis-je vous aider à optimiser vos opérations aujourd\'hui ?',
      placeholder: 'Posez votre question...',
    },
  },
  en: {
    header: {
      nav: { solutions: 'Solutions', podcasts: 'Podcasts', videos: 'Videos', blog: 'Blog' },
      cta: 'Schedule a call',
      language: 'Language',
    },
    hero: {
      title: 'Your company, augmented by AI.',
      subtitle: 'We design custom automation systems to multiply your productivity and unlock your team\'s potential.',
      cta: 'Discover our solutions',
    },
    ecosystem: {
      title: 'Integrated into your technology ecosystem',
    },
    problem: {
      title: 'Manual operations are slowing your growth.',
      description: 'Every repetitive task is a missed opportunity. Operational inefficiency is costly, demotivates your teams, and leaves you vulnerable to competition.',
      cards: [
        { title: 'Wasted Time', description: 'Precious hours wasted on manual and redundant processes.' },
        { title: 'Risk of Errors', description: 'Human intervention increases the likelihood of costly mistakes.' },
        { title: 'Lack of Scalability', description: 'Your current systems cannot keep up with your business growth.' },
      ],
    },
    vision: {
      title: 'Switch to absolute operational efficiency.',
      description: 'Agenzia transforms your business processes into a competitive advantage. With AI and automation, we create a central nervous system for your company, where every action is optimized, intelligent, and instant.',
      cta: 'Talk to an expert',
    },
    promptBuilder: {
        title: 'Imagine. We Architect. Your Ideal Ecosystem.',
        intro: 'At Agenzia, we don\'t sell boxes. We build extensions of your intelligence. Use our interactive configurator to define your most pressing need. Watch how the "White Pure Look" materializes for you, in real time.',
        steps: {
            challenge: { title: 'Step 1: What is your main challenge?' },
            tools: { title: 'Step 2: Which tools do you already use?', available: 'Available tools', selected: 'Your workspace' },
            wish: { title: 'Step 3: Describe your wish', placeholder: 'e.g., "I want qualified leads in HubSpot to receive a personalized email 5 minutes later."', suggestions: ['...automatic email sending...', '...task creation...', '...data synchronization...'] },
        },
        challenges: [
            { id: 'leads', name: 'Lead Acquisition & Conversion', icon: 'magnet' },
            { id: 'admin', name: 'Admin & Finance Management', icon: 'balance' },
            { id: 'hr', name: 'HR & Onboarding', icon: 'team' },
            { id: 'data', name: 'Data Analysis & Reporting', icon: 'chart' },
            { id: 'ops', name: 'Operational Processes', icon: 'gear' },
            { id: 'support', name: 'Customer Support & FAQ', icon: 'chat' },
        ],
        tools: [
          { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
          { id: 'slack', name: 'Slack', iconUrl: 'slack.com' },
          { id: 'hubspot', name: 'HubSpot', iconUrl: 'hubspot.com' },
          { id: 'notion', name: 'Notion', iconUrl: 'notion.so' },
          { id: 'excel', name: 'Excel', iconUrl: 'office.com' },
          { id: 'salesforce', name: 'Salesforce', iconUrl: 'salesforce.com' },
          { id: 'zapier', name: 'Zapier', iconUrl: 'zapier.com' },
          { id: 'openai', name: 'OpenAI', iconUrl: 'openai.com' },
          { id: 'trello', name: 'Trello', iconUrl: 'trello.com' },
          { id: 'asana', name: 'Asana', iconUrl: 'asana.com' },
          { id: 'monday', name: 'Monday.com', iconUrl: 'monday.com' },
          { id: 'stripe', name: 'Stripe', iconUrl: 'stripe.com' },
          { id: 'airtable', name: 'Airtable', iconUrl: 'airtable.com' },
          { id: 'teams', name: 'MS Teams', iconUrl: 'microsoft.com' },
          { id: 'pipedrive', name: 'Pipedrive', iconUrl: 'pipedrive.com' },
          { id: 'typeform', name: 'Typeform', iconUrl: 'typeform.com' },
          { id: 'whatsapp', name: 'WhatsApp', iconUrl: 'whatsapp.com' },
          { id: 'github', name: 'GitHub', iconUrl: 'github.com' },
          { id: 'jira', name: 'Jira', iconUrl: 'atlassian.com' },
          { id: 'mailchimp', name: 'Mailchimp', iconUrl: 'mailchimp.com' },
          { id: 'discord', name: 'Discord', iconUrl: 'discord.com' },
          { id: 'zoom', name: 'Zoom', iconUrl: 'zoom.us' },
          { id: 'shopify', name: 'Shopify', iconUrl: 'shopify.com' },
          { id: 'webflow', name: 'Webflow', iconUrl: 'webflow.com' },
          { id: 'aws', name: 'AWS', iconUrl: 'aws.amazon.com' },
          { id: 'dropbox', name: 'Dropbox', iconUrl: 'dropbox.com' },
          { id: 'intercom', name: 'Intercom', iconUrl: 'intercom.com' },
          { id: 'calendly', name: 'Calendly', iconUrl: 'calendly.com' },
          { id: 'clickup', name: 'ClickUp', iconUrl: 'clickup.com' },
          { id: 'figma', name: 'Figma', iconUrl: 'figma.com' },
          { id: 'miro', name: 'Miro', iconUrl: 'miro.com' },
          { id: 'gitlab', name: 'GitLab', iconUrl: 'gitlab.com' },
          { id: 'quickbooks', name: 'QuickBooks', iconUrl: 'quickbooks.com' },
          { id: 'xero', name: 'Xero', iconUrl: 'xero.com' },
          { id: 'paypal', name: 'PayPal', iconUrl: 'paypal.com' },
          { id: 'docusign', name: 'DocuSign', iconUrl: 'docusign.com' },
          { id: 'zendesk', name: 'Zendesk', iconUrl: 'zendesk.com' },
          { id: 'google-ads', name: 'Google Ads', iconUrl: 'ads.google.com' },
          { id: 'meta', name: 'Meta', iconUrl: 'meta.com' },
          { id: 'linkedin', name: 'LinkedIn', iconUrl: 'linkedin.com' },
          { id: 'firebase', name: 'Firebase', iconUrl: 'firebase.com' },
          { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'postgresql.org' }
        ],
        preview: {
            title: 'Solution Preview',
            workflow: 'Real-time Workflow',
        },
        cta: 'Generate my custom solution',
    },
    modules: {
      title: 'Our intervention modules.',
      cards: [
        { title: 'AI Audit & Strategy', description: 'Comprehensive analysis of your processes to identify productivity gains.', tag: 'Foundation' },
        { title: 'Sales Automation', description: 'Optimize your CRM, qualify leads, and automate sales reporting.', tag: 'Sales' },
        { title: 'Augmented Customer Support', description: 'Deploy AI agents for instant responses and 24/7 support.', tag: 'Support' },
        { title: 'Financial Optimization', description: 'Automate invoicing, payment tracking, and accounting reconciliation.', tag: 'Finance' },
      ],
    },
    podcasts: {
      title: 'Strategic Podcasts.',
      subtitle: 'Listen to our experts decode the future of automation.',
      cta: 'Listen to all episodes',
    },
    videos: {
      title: 'Video Masterclasses.',
      subtitle: 'Technical demonstrations to take action.',
      cta: 'View all videos',
    },
    useCases: {
      title: 'Concrete applications for every department.',
      cases: [
        { title: 'Marketing', description: 'Content generation, sentiment analysis, large-scale campaign personalization.' },
        { title: 'Human Resources', description: 'Candidate sourcing automation, new employee onboarding, leave management.' },
        { title: 'Operations', description: 'Supply chain management, inventory optimization, predictive maintenance.' },
      ],
    },
    roi: {
      title: 'Calculate your return on investment.',
      description: 'Visualize the concrete savings and time gains that automation can bring to your company.',
      employeesLabel: 'Number of employees',
      hoursLabel: 'Hours saved per employee/week',
      costLabel: 'Average hourly cost ($)',
      savingsTitle: 'Estimated annual savings',
      savingsPerYear: '/ year',
      cta: 'Get a free audit',
    },
    blog: {
      title: 'Insights & Perspectives.',
      subtitle: 'Decoding AI trends and automation strategies for tomorrow\'s leaders.',
      filters: ['All', 'Strategy', 'Technology'],
      posts: [
        { 
          category: 'Strategy', 
          title: 'Generative AI: Architecting the Operational Efficiency of the Future', 
          author: 'John Doe', 
          authorAvatar: 'https://i.pravatar.cc/150?u=john_doe',
          date: 'March 12, 2024', 
          readingTime: '8 min',
          excerpt: 'Large Language Models (LLMs) integration is no longer just about text generation. In 2025, it becomes the central nervous system of agile organizations.',
          content: `
            <p>The era of AI experimentation is over. We have entered the era of industrialization. For C-Levels, the question is no longer "What can AI do?" but "How can AI transform our operational model?"</p>
            <h3>1. From Tool to Autonomous Agent</h3>
            <p>Unlike traditional software, AI agents based on LLMs don't just execute tasks; they make contextual decisions. By connecting your proprietary data to these models, you create workflows that learn from your past successes.</p>
            <h3>2. Interoperability as an ROI Lever</h3>
            <p>The real productivity gain lies in the glue between your tools. Gmail, Slack, HubSpot, and Salesforce must communicate seamlessly. Our architectures allow real-time synchronization without human intervention, reducing entry errors by 99%.</p>
            <h3>3. Conclusion</h3>
            <p>Intelligent automation is not an IT project; it's a business strategy. By freeing your talent from repetitive tasks, you allow them to focus on value creation and strategic innovation.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isFeatured: true 
        },
        { 
          category: 'Technology', 
          title: 'Automation 2.0: Why Cognitive AI is the New Standard of Digital Luxury', 
          author: 'Jane Smith', 
          authorAvatar: 'https://i.pravatar.cc/150?u=jane_smith',
          date: 'March 08, 2024', 
          readingTime: '5 min',
          excerpt: 'The "Pure White Look" of AI isn\'t seen; it\'s felt in the fluidity of operations. Learn why internal user experience is the most underestimated growth lever.',
          content: `
            <p>Digital luxury no longer resides in technological ostentation but in the invisibility of processes. A high-performing company in 2024 is one where operational frictions have disappeared in favor of a "liquid" workflow.</p>
            <h3>Internal UX: The Hidden Growth Engine</h3>
            <p>Often overlooked, the user experience of employees with their own business tools is directly correlated to talent retention and customer service quality. Cognitive AI anticipates employee needs by providing the right information at the right time, without active searching.</p>
            <blockquote>"The most sophisticated intelligence is the one that simplifies complexity until it becomes imperceptible."</blockquote>
            <p>At Agenzia, we apply design thinking principles to automation. Every workflow is designed like a luxury product: intuitive, robust, and aesthetically pure.</p>
          `,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        },
      ],
      cta: 'View all articles',
      newsletter: {
        title: 'Receive our strategic analysis.',
        placeholder: 'your@email.com',
        button: 'Subscribe'
      }
    },
    footer: {
      description: 'Agenzia. Operational efficiency through AI.',
      sections: [
        { title: 'Solutions', links: ['Sales Automation', 'Customer Support', 'HR Operations', 'Finance'] },
        { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact'] },
        { title: 'Resources', links: ['Blog', 'Podcasts', 'Videos', 'API Documentation'] },
      ],
      copyright: '© 2024 Agenzia. All rights reserved.',
    },
    aiAssistant: {
      greeting: 'Hello! How can I help you optimize your operations today?',
      placeholder: 'Ask your question...',
    },
  },
  de: {
    header: {
      nav: { solutions: 'Lösungen', expertises: 'Expertisen', 'cas-clients': 'Fallstudien', blog: 'Blog' },
      cta: 'Anruf vereinbaren',
      language: 'Sprache',
    },
    hero: {
      title: 'Ihr Unternehmen, durch KI erweitert.',
      subtitle: 'Wir entwerfen maßgeschneiderte Automatisierungssysteme, um Ihre Produktivität zu vervielfachen.',
      cta: 'Unsere Lösungen entdecken',
    },
    ecosystem: {
      title: 'Integriert in Ihr Technologie-Ökosystem',
    },
    problem: {
      title: 'Manuelle Abläufe bremsen Ihr Wachstum.',
      description: 'Jede sich wiederholende Aufgabe ist eine verpasste Gelegenheit.',
      cards: [
        { title: 'Zeitverlust', description: 'Wertvolle Stunden werden mit manuellen Prozessen verschwendet.' },
        { title: 'Fehlerrisiko', description: 'Menschliche Eingriffe erhöhen die Fehlerquote.' },
        { title: 'Skalierbarkeit', description: 'Aktuelle Systeme halten dem Wachstum nicht stand.' },
      ],
    },
    vision: {
      title: 'Absolute operative Effizienz.',
      description: 'Agenzia verwandelt Ihre Geschäftsprozesse in einen Wettbewerbsvorteil.',
      cta: 'Mit Experten sprechen',
    },
    promptBuilder: {
      title: 'Stellen Sie sich vor. Wir bauen.',
      intro: 'Wir bauen Erweiterungen Ihrer Intelligenz.',
      steps: {
        challenge: { title: 'Schritt 1: Herausforderung' },
        tools: { title: 'Schritt 2: Werkzeuge', available: 'Verfügbar', selected: 'Ausgewählt' },
        wish: { title: 'Schritt 3: Wunsch', placeholder: 'z.B. Automatische E-Mails...', suggestions: ['E-Mail', 'Daten', 'Aufgaben'] },
      },
      challenges: [
        { id: 'leads', name: 'Mails', icon: 'magnet' },
      ],
      tools: [
        { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
      ],
      preview: {
        title: 'Vorschau',
        workflow: 'Workflow',
      },
      cta: 'Lösung generieren',
    },
    modules: {
      title: 'Module',
      cards: [
        { title: 'Audit', description: 'Analyse Ihrer Prozesse.', tag: 'Basis' },
      ],
    },
    useCases: {
      title: 'Anwendungen',
      cases: [
        { title: 'Marketing', description: 'Inhaltsgenerierung.' },
      ],
    },
    roi: {
      title: 'ROI Berechnen',
      description: 'Visualisieren Sie Ihre Einsparungen.',
      employeesLabel: 'Mitarbeiter',
      hoursLabel: 'Gesparte Stunden',
      costLabel: 'Stundensatz',
      savingsTitle: 'Einsparungen',
      savingsPerYear: '/ Jahr',
      cta: 'Audit erhalten',
    },
    blog: {
      title: 'Insights',
      subtitle: 'KI-Trends.',
      filters: ['Alle'],
      posts: [],
      cta: 'Alle Artikel',
      newsletter: {
        title: 'Newsletter',
        placeholder: 'E-Mail',
        button: 'Abonnieren'
      }
    },
    podcasts: {
      title: 'Strategische Podcasts.',
      subtitle: 'Hören Sie unseren Experten zu, wie sie die Zukunft der Automatisierung entschlüsseln.',
      cta: 'Alle Episoden anhören',
    },
    videos: {
      title: 'Video-Masterclasses.',
      subtitle: 'Technische Demonstrationen, um ins Handeln zu kommen.',
      cta: 'Alle Videos ansehen',
    },
    footer: {
      description: 'Agenzia KI.',
      sections: [
        { title: 'Firma', links: ['Über uns'] },
      ],
      copyright: '© 2024 Agenzia.',
    },
    aiAssistant: {
      greeting: 'Hallo! Wie kann ich helfen?',
      placeholder: 'Frage stellen...',
    },
  },
  ar: {
    header: {
      nav: { solutions: 'حلول', podcasts: 'بودكاست', videos: 'فيديوهات', blog: 'مدونة' },
      cta: 'احجز مكالمة',
      language: 'اللغة',
    },
    hero: {
      title: 'شركتك، مطورة بالذكاء الاصطناعي.',
      subtitle: 'نحن نصمم أنظمة أتمتة مخصصة لمضاعفة إنتاجيتك.',
      cta: 'اكتشف حلولنا',
    },
    ecosystem: {
      title: 'متكامل مع نظامك التقني',
    },
    problem: {
      title: 'العمليات اليدوية تبطئ نموك.',
      description: 'كل مهمة متكررة هي فرصة ضائعة.',
      cards: [
        { title: 'إضاعة الوقت', description: 'ساعات ضائعة في عمليات يدوية.' },
        { title: 'خطر الأخطاء', description: 'التدخل البشري يزيد من الأخطاء.' },
        { title: 'نقص التوسع', description: 'الأنظمة لا تواكب النمو.' },
      ],
    },
    vision: {
      title: 'كفاءة تشغيلية مطلقة.',
      description: 'تحويل العمليات إلى ميزة تنافسية.',
      cta: 'تحدث مع خبير',
    },
    promptBuilder: {
      title: 'تخيل. نحن نهندس.',
      intro: 'بناء امتدادات لذكائك.',
      steps: {
        challenge: { title: 'تحدي' },
        tools: { title: 'أدوات', available: 'متاح', selected: 'مختار' },
        wish: { title: 'أمنية', placeholder: 'مثلاً أتمتة البريد...', suggestions: ['بريد', 'بيانات'] },
      },
      challenges: [
        { id: 'leads', name: 'بريد', icon: 'magnet' },
      ],
      tools: [
        { id: 'gmail', name: 'Gmail', iconUrl: 'google.com' },
      ],
      preview: {
        title: 'معاينة',
        workflow: 'سير العمل',
      },
      cta: 'إنشاء الحل',
    },
    modules: {
      title: 'وحداتنا',
      cards: [
        { title: 'تدقيق', description: 'تحليل العمليات.', tag: 'أساس' },
      ],
    },
    podcasts: {
      title: 'بودكاست استراتيجي.',
      subtitle: 'استمع إلى خبرائنا وهم يفككون رموز مستقبل الأتمتة.',
      cta: 'استمع إلى جميع الحلقات',
    },
    videos: {
      title: 'ماستر كلاس فيديو.',
      subtitle: 'عروض تقنية لبدء العمل.',
      cta: 'شاهد جميع الفيديوهات',
    },
    useCases: {
      title: 'حالات الاستخدام',
      cases: [
        { title: 'تسويق', description: 'توليد المحتوى.' },
      ],
    },
    roi: {
      title: 'حساب العائد',
      description: 'وفورات الأتمتة.',
      employeesLabel: 'موظفون',
      hoursLabel: 'ساعات موفرة',
      costLabel: 'تكلفة الساعة',
      savingsTitle: 'وفورات سنوية',
      savingsPerYear: '/ سنة',
      cta: 'تدقيق مجاني',
    },
    blog: {
      title: 'مدونة',
      subtitle: 'رؤى الذكاء الاصطناعي.',
      filters: ['الكل'],
      posts: [],
      cta: 'كل المقالات',
      newsletter: {
        title: 'النشرة',
        placeholder: 'بريد',
        button: 'اشتراك'
      }
    },
    footer: {
      description: 'أجينزيا.',
      sections: [
        { title: 'شركة', links: ['عننا'] },
      ],
      copyright: '© 2024 أجينزيا.',
    },
    aiAssistant: {
      greeting: 'مرحباً! كيف أساعدك؟',
      placeholder: 'اسأل سؤالاً...',
    },
  },
};
