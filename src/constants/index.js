import { meta, sapama, kerra, moringa, queenspark } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
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
    typescript,
    python,
    influxdb,
    grafana
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
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
    },
    {
        imageUrl: influxdb,
        name: "Influx DB",
        type: "Database",
    },
    {
        imageUrl: grafana,
        name: "Grafana",
        type: "Visualization",
    }
];

export const experiences = [
    {
        title: "Operations Manager",
        company_name: "Queenspark Guest House",
        icon: queenspark,
        iconBg: "#f7d7d8",
        date: "May 2021 - Nov 2022",
        points: [
            "Managed the service department within the company, focusing on meeting customers' needs during their stay at the guest house, achieving a remarkable 200% improvement in customer satisfaction.",
            "Employed effective digital marketing initiatives and search engine optimizations, leading to a 2-times increase in walk-in traffic, enhancing the company’s online visibility.",
            "Spearheaded the development of the company's primary website, resulting in a minimum 80% conversion rate of online traffic to sales, contributing significantly to the company's 15% annual revenue growth in 2022.",
        ],
    },
    {
        title: "IT Support Specialist",
        company_name: "KeRRA",
        icon: kerra,
        iconBg: "#d2fcd5",
        date: "Dec 2022 - Nov 2023",
        points: [
            "Aggregated unstructured employee access log data from the building's 3 primary entry points.",
            "Performed data cleaning activities and transformed the data into a well-structured format, making it readily usable for the ICT Security Manager.",
            "Actively monitored access card log activities for all KeRRA employees, effectively detecting and reporting anomalous incidents, enhancing overall security by 60%.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Sapama Tech",
        icon: sapama,
        iconBg: "#9e9ef7",
        date: "Dec 2023 - Feb 2024",
        points: [
            "Helped clients integrate Mpesa payment solutions into their websites and applications.",
            "Provided technical support and troubleshooting to our clients and ensured compliance with Mpesa standards and regulations.",
            "Maintained and installed Sapama Technology's products, such as Sapama ERP and Sapama Property Management Software, for our clients. Involved in software lifecycle from development to deployment and support.",
            "Provided training and documentation to clients and ensure optimal performance and user satisfaction with Sapama Products.",
        ],
    },
    {
        title: "Moringa Student",
        company_name: "Moringa School",
        icon: moringa,
        iconBg: "#f7c89e",
        date: "Nov 2023 - June 2024",
        points: [
            "Creating and deploying web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other student developers.",
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