export default {
  terminalBody: {
    welcomMessage: `Bienvenue dans mon portfolio.`,
    type1: `Tapez`,
    type2: `pour voir les commandes disponibles. Notez que toutes les commandes affichées par help sont cliquables.`
  },
  commands: {
    help: {
      description: `Afficher les commandes disponibles`
    },
    about: {
      description: `Afficher des informations sur moi`,
      imgAlt: `Photo de profil`,
      summary: `Bonjour ! Je suis Mykola, développeur logiciel Full-Stack avec 7 ans d'expérience dans le domaine de la fintech, spécialisé dans les systèmes de paiement. Expertise en JavaScript, Node.js, Python et Java, avec une solide expérience dans le développement front-end et back-end, l'intégration d'API et l'optimisation des systèmes de traitement des transactions et des API bancaires.`,
      firstBlock: `J'aime concevoir des systèmes backend évolutifs, créer des interfaces frontend intuitives et améliorer l'expérience des développeurs.`,
      secondBlock: `Actuellement intéressé par :`,
      skills: {
        frontend: `React et Next.js pour le développement frontend`,
        backend: `Node.js, Java et Python pour le développement backend`,
        distributedSystems: `Systèmes distribués`,
        systemDesign: `Conception de systèmes`,
        tooling: `Outils pour développeurs`,
      },
      hobby: `En dehors du travail, j'aime apprendre le français, lire sur l'architecture logicielle, créer des projets personnels et jouer aux échecs.`
    },
    projects: {
      description: `Afficher mes projets`,
      firstProject: {
        title: `Foree Remittance (Nanopay)`,
        description: `Foree Remittance est une application internationale de transfert d'argent permettant d'envoyer des fonds vers le Pakistan, développée chez Nanopay. J'ai développé les principaux composants front-end et back-end, notamment l'inscription des utilisateurs, le traitement des transactions et le système de notifications par e-mail. La plateforme comptait plus de 2 000 utilisateurs actifs, traitait plus de 10 millions de dollars canadiens de transferts par semaine et permettait de réaliser la majorité des transferts en 1 à 2 minutes.`
      },
      secondProject: {
        title: `Terminal Portfolio (Personnel)`,
        description: `Un portfolio interactif inspiré d'un terminal, développé avec React et Next.js. Il propose une interface basée sur des commandes, une saisie animée dans le terminal, un affichage dynamique basé sur React, des ressources téléchargeables et une architecture modulaire de commandes.`
      },
      thirdProject: {
        title: `Site de réservation de bus (Personnel)`,
        description: `Une application web permettant de réserver des billets de bus, de rechercher des destinations et de consulter les itinéraires disponibles. Développée avec Django, PostgreSQL, JavaScript vanilla, HTML et Tailwind CSS, avec une base de données hébergée sur Neon.`
      }
    },
    experience: {
      description: `Show my experience`,
      firstExperience: {
        title: `Developpeur logiciel Full-Stack`,
        company: `Nanopay — plateforme de paiements B2B, Toronto, Canada`,
        period: `decembre 2019 – janvier 2026`,
        firstBullet: `Conçu et mis en place un système de rapprochement automatique de 100 à 500 transactions
                      quotidiennes entre la plateforme et les banques partenaires, réduisant de plus de 90 % les 
                      contrôles manuels et renforçant la fiabilité du processus.`,
        secondBullet: `Développé et déployé un moteur résilient de calcul des plafonds transactionnels en temps réel,
                       prenant en compte la disponibilité des banques,
                       les contraintes utilisateur et les fenêtres temporelles.`,
        thirdBullet: `Automatisé le processus de vérification d'identité lors des transactions en intégrant des systèmes KYC,
                      de paiement et backend, permettant une validation automatisée en temps réel (< 1 s).`,
        fourthBullet: `Refondu le traitement des événements en remplaçant un mécanisme de polling API haute fréquence 
                      (1 requête/sec/transaction) par une architecture basée sur des webhooks, 
                      réduisant de 90 % les appels API redondants et optimisant la charge des services backend.`
      },
      secondExperience: {
        title: `Data Scientist / Student Researcher (Co-op)`,
        company: `Esentire et Conestoga College, Waterloo, ON`,
        period: `avril 2019 – aout 2019`,
        firstBullet: `Contribué au développement de réseaux de neurones pour des tâches
                      de classification et de reconnaissance en utilisant Python et TensorFlow.`,
        secondBullet: `Travaillé en étroite collaboration avec les designers afin
                       d'implémenter la représentation frontend des résultats obtenus.`,
        thirdBullet: `Participé aux revues de code et aux échanges techniques afin
                      d'améliorer la qualité du projet et de renforcer la collaboration au sein de l'équipe.`
      }
    },
    skills: {
      description: `Afficher mes compétences`,
      backend: `Back-end`,
      frontend: `Front-end`,
      databases: `Bases de données`,
      devTools: `Outils de développement`,
      practices: `Pratiques`,
      java: `Java`,
      nodeJs: `Node.js`,
      python: `Python`,
      restApis: `REST APIs`,
      webhooks: `Webhooks`,
      jwt: `JWT`,
      paymentSystems: `Systèmes de paiement`,
      kycIntegration: `Intégration KYC`,
      transactionProcessing: `Traitement des transactions`,
      eventDrivenArchitecture: `Architecture orientée événements`,
      react: `React`,
      nextJs: `Next.js`,
      javascript: `JavaScript`,
      typescript: `TypeScript`,
      html5: `HTML5`,
      css3: `CSS3`,
      sql: `SQL`,
      nosql: `NoSQL`,
      git: `Git`,
      github: `GitHub`,
      linux: `Linux`,
      postman: `Postman`,
      jira: `Jira`,
      agile: `Agile`,
      scrum: `Scrum`,
      codeReview: `Revue de code`,
      apiDesign: `Conception d'API`,
      systemIntegration: `Intégration de systèmes`
    },
    contactCommands: {
        contacts: {
          description: `Afficher mes contacts`,
          availableContacts: `Contacts disponibles:`,
          commandExample: `Tapez "contacts [nomDeLaCommande]" pour exécuter la commande`
        },
        email: {
          description: `kolya.kolombet@gmail.com (Copier dans le presse-papiers et ouvrir le client de messagerie)`,
          copyCommand: `Adresse e-mail copiée dans le presse-papiers`
        },
        github: {
          description: `KolombetM`
        },
        linkedin: {
          description: `KolombetM`
        },
        cvFrance: {
          description: `Ouvrir mon CV en français`
        },
        cvEnglish: {
          description: `Ouvrir mon CV en anglais`
        }
      }
    }
  } as const;