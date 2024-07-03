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
            "Led digital marketing initiatives, doubling walk-in traffic and achieved a 200% improvement in customer satisfaction",
            "Developed the primary website, resulted in an 80% conversion rate and contributed to a 15% annual revenue growth",
            "Directed the strategic enhancement of the company’s online presence and resulted to 2x increase in online customer base"
        ],
    },
    {
        title: "Support Specialist",
        company_name: "KeRRA",
        icon: kerra,
        iconBg: "#d2fcd5",
        date: "Dec 2022 - Nov 2023",
        points: [
            "Implemented Microsoft Dynamics NAV ERP, improved project workflow and received 100% positive feedback, collaborated with cross-functional teams to improve project workflows and reduce downtime",
            "Configured and deployed VPNs using Fortinet across multiple remote regions within the country, reduced downtime by 50%",
            "Managed and troubleshot Active Directory accounts"
        ],
    },
    {
        title: "Software Developer",
        company_name: "Sapama Tech",
        icon: sapama,
        iconBg: "#9e9ef7",
        date: "Dec 2023 - Present",
        points: [
            "Integrate secure Mpesa payment solutions for clients, ensuring 100% compliance and increasing client satisfaction by 20%",
            "Provide training and documentation, resulting in a 30% improvement in user satisfaction",
            "Classify and resolve technical issues, explore root causes and maintain ownership until resolution, ensure timely updates and closure"
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
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Project Management System',
        description: 'Developed a County Project Management System that enables smooth tracking of projects, organized by county, budget and fiscal year',
        link: 'https://github.com/ekirira22/final_project.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Digress Appointments',
        description: 'Crafted ‘Digress Appointments’, a web application facilitating seemless doctor-patient scheduling and vice-versa.',
        link: 'https://github.com/ekirira22/digress-appointments.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI Summarizer - Upcoming',
        description: 'An app that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/ekirira22?tab=repositories',
    }
];