export default {
  terminalBody: {
    welcomMessage: `Welcome to my portfolio.`,
    type1: `Type`,
    type2: `to see available commands. Note that all the commands from help are clickable.`
  },
  commands: {
    noArgs: `command doesn't accept arguments`,
    help: {
      description: `Show available commands`
    },
    about: {
      description: `Show information about me`,
      imgAlt: `Profile Picture`,
      summary: `Hello! I'm Mykola, Full-Stack Software Developer with 7 years of
                experience in the fintech industry, specializing in payment systems.
                Expertise in JavaScript, Node.js, Python and Java, with strong
                experience in front-end and back-end development, API integration,
                and optimization of transaction processing systems and banking APIs.`,
      firstBlock: `I enjoy designing scalable backend systems, building intuitive frontends
                  and improving developer experience.`,
      secondBlock: `Currently interested in:`,
      skills: {
        frontend: `React & Next.js for frontend development`,
        backend: `Node.js, Java, Python for backend development`,
        distributedSystems: `Distributed systems`,
        systemDesign: `System design`,
        tooling: `Developer tooling`,
      },
      hobby: `Outside of work I enjoy learning French, reading about software architecture, building side projects and playing chess.`
    },
    projects: {
      description: `Show my projects`,
      firstProject: {
        title: `Foree Remittance (Nanopay)`,
        description: `Foree Remittance is an international money transfer application for sending funds to Pakistan,
                      developed at Nanopay. I developed the core front-end and back-end components,
                      including user onboarding, transaction processing, and the email notification system.
                      The platform had over 2,000 active users, processed more than CAD 10 million in transfers per week,
                      and enabled the majority of transfers to be completed within 1–2 minutes.`
      },
      secondProject: {
        title: `Terminal Portfolio (Personal)`,
        description: `An interactive terminal-inspired portfolio built with React and Next.js.
                      Features a command-based interface, animated terminal input, dynamic React-powered output,
                      downloadable assets, and a modular command architecture.`
      },
      thirdProject: {
        title: `Bus Booking website (Personal)`,
        description: ` A web application for booking bus tickets, searching destinations,
          and viewing connected routes. Built with Django, PostgreSQL, vanilla JavaScript, HTML,
          and Tailwind CSS, with the database hosted on Neon.`
      }
    },
    experience: {
      description: `Show my experience`,
      firstExperience: {
        title: `Full-Stack Software Developer`,
        company: `Nanopay - P2P payment platform, Toronto, Canada`,
        period: `Dec 2019 – Jan 2026`,
        firstBullet: `Designed and implemented an automated reconciliation system for
                      100–500 daily transactions between the platform and partner banks,
                      reducing manual verification by over 90% and improving reliability
                      of reconciliation processes.`,
        secondBullet: `Developed and deployed a resilient real-time transaction limit
                       calculation engine accounting for bank availability, user-specific
                       constraints, and time-based windows.`,
        thirdBullet: `Automated identity verification by integrating KYC systems,
                      payment systems, and backend services, enabling real-time
                      validation under 1 second.`,
        fourthBullet: `Developed and deployed a resilient real-time transaction limit
                       calculation engine accounting for bank availability, user-specific
                       constraints, and time-based windows.`
      },
      secondExperience: {
        title: `Data Scientist / Student Researcher (Co-op)`,
        company: `Esentire and Conestoga College, Waterloo, ON`,
        period: `Apr 2019 – Aug 2019`,
        firstBullet: `Contributed to neural network development for classification and
                      recognition tasks using Python and TensorFlow.`,
        secondBullet: `Worked with designers to implement frontend visualization of
                       machine learning results.`,
        thirdBullet: `Participated in code reviews and technical discussions to improve
                      project quality and team collaboration.`
      }
    },
    skills: {
      description: `Show my skills`,
      backend: `Backend`,
      frontend: `Frontend`,
      databases: `Databases`,
      devTools: `Dev Tools`,
      practices: `Practices`,
      java: `Java`,
      nodeJs: `Node.js`,
      python: `Python`,
      restApis: `REST APIs`,
      webhooks: `Webhooks`,
      jwt: `JWT`,
      paymentSystems: `Payment Systems`,
      kycIntegration: `KYC Integration`,
      transactionProcessing: `Transaction Processing`,
      eventDrivenArchitecture: `Event-Driven Architecture`,
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
      codeReview: `Code Review`,
      apiDesign: `API Design`,
      systemIntegration: `System Integration`
    },
    contactCommands: {
      contacts: {
        description: `Show my contacts`,
        availableContacts: `Available contacts:`,
        commandExample: `Type "contacts [commandName]" to run command`
      },
      email: {
        description: `kolya.kolombet@gmail.com (Copy to clipboard and open mail agent)`
      },
      github: {
        description: `KolombetM`
      },
      linkedin: {
        description: `KolombetM`
      },
      cvFrance: {
        description: `Open my CV in French`
      },
      cvEnglish: {
        description: `Open my CV in English`
      }
    }
  }
} as const;