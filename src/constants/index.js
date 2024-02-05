import { meta, shopify, starbucks, tesla, thplogo, trox, sportner } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Apprentissage HTML, CSS et Javascript en autoditacte",
        company_name: "À domicile",
        icon: html,
        iconBg: "#fbc3bc",
        date: "À partir d'octobre 2018",
        points: [
            "Apprentissage des bases de HTML et CSS pour la réalisation de différents projets personnels.",
            "Utilisation de ces connaissances pour la réalisation de sites à destination d'artistes musicaux ",
            "Création de sites internet from scratch, en équipe et à but éducatif",
            "Participation en reviews de code lors de session à plusieurs",
        ],
    },
    {
        title: "Diplôme Développeur Web Fullstack",
        company_name: "The Hacking Project",
        icon: thplogo,
        iconBg: "#accbe1 ",
        date: "Octobre 2022 - Juillet 2023",
        points: [
            "Apprentissage en peer-learning du backend via le langage Ruby on Rails",
            "Travail en équipe sur l'approfondissement de React.js et Node.js",
            "Prise en main d'outils de travail collaboratif (Trello, Notion, Github)",
            "Correction et review de code de différents élèves lors des périodes d'examens",
        ],
    },
    {
        title: "Développeur Web",
        company_name: "Trox",
        icon: trox,
        iconBg: "#b7e4c7",
        date: "À partir d'octobre 2022",
        points: [
            "Création, from scratch, d'une plateforme de prêt d'outils entre particuliers",
            "Choix des différentes technologies utilisées pour la réalisation (Ruby on Rails en back, React.js en front",
            "Implémentation d'une map intéractive, répertoriant les différents outils à proximité",
            "Mise en place d'un planning de travail entre les différents développeurs et creation d'une D.A adaptée",
        ],
    },
    {
        title: "Développeur Web",
        company_name: "Sportner",
        icon: sportner,
        iconBg: "#a2d2ff",
        date: "À partir de Juin 2023",
        points: [
            "Création d'une plateforme de mise en relation entre sportifs amateurs, selon leur localisation",
            "Mise à profit des expériences passées pour la creation d'un back complet en Ruby, et d'une base de données solide ",
            "Création d'un design React.js adapté au responsive, correspondant aux valeurs de la marque",
            "Travail en continue sur le partage du code et résolution de bugs réguliers",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];