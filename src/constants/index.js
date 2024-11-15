import { meta, shopify, starbucks, tesla } from "../assets/images";
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
        name: "Express.js",
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
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
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
        title: "3D Developer Portfolio",
        technologies: "ThreeJS, React, TailwindCSS, Framer Motion",
        // iconUrl: threejs,  // Replace 'threejs' with the relevant icon variable
        iconBg: "#accbe1",
        date: "Completed: 2024",
        points: [
            "Seamlessly integrated ThreeJS with React using React Three Fiber and Vite for streamlined development.",
            "Implemented responsive design with TailwindCSS, ensuring an optimal user experience across devices.",
            "Incorporated Framer Motion for fluid animations, enhancing the website’s interactive elements.",
            "Provided a contact feature that allows visitors to easily reach out via email.",
        ],
    },
    {
        title: "ShopNest - E-Commerce App",
        technologies: "MongoDB, Express.js, React.js, Node.js",
    //   iconUrl: shopnest,  // Replace 'shopnest' with the relevant icon variable
        iconBg: "#fbc3bc",
        date: "Completed: 2023",
        points: [
            "Independently developed a dynamic eCommerce web application.",
            "Implemented Google Sign-In, JWT authentication, and a responsive shopping cart.",
            "Integrated Razorpay for secure payment processing.",
            "Designed an intuitive user interface for seamless navigation and product browsing.",
        ],
    },
    {
        title: "Chat Bot",
        technologies: "Gemini API, MongoDB, Node.js, Tailwind CSS, React",
        // iconUrl: chatbot,  // Replace 'chatbot' with the relevant icon variable
        iconBg: "#b7e4c7",
        date: "Completed: 2023",
        points: [
            "Developed a chat system with OTP authentication and secure login.",
            "Enabled users to create and manage multiple chats, with real-time fetching of chat history.",
            "Integrated email-based OTP authentication for enhanced security.",
            "Built a user-friendly interface for easy interaction with the chatbot.",
        ],
    },
    {
        title: "AutoResponder Pro - Vacation Email App",
        technologies: "Node.js, Google OAuth, Gmail API",
        // iconUrl: autoresponder,  // Replace 'autoresponder' with the relevant icon variable
        iconBg: "#a2d2ff",
        date: "Completed: 2023",
        points: [
            "Developed a Node.js application that automates email responses using the Gmail API.",
            "Enabled mail labeling and automated replies at scheduled intervals.",
            "Integrated Google OAuth for secure authentication.",
            "Provided customizable options for response timing and labeling preferences.",
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
        link: 'https://github.com/bhuvan-sbk',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/bhuvan-kumar-428525161',
    }
];

export const projects = [
    {
        iconUrl: "path/to/3d_developer_portfolio_icon",
        theme: "btn-back-blue",
        name: "3D Developer Portfolio",
        description: "Built a dynamic 3D developer portfolio with Three.js, React, TailwindCSS, and Framer Motion. Integrated Three.js with React using React Three Fiber and Vite, created a responsive design with TailwindCSS, and added fluid animations using Framer Motion for an engaging user experience. Features a contact form for easy outreach.",
        link: "https://yourportfolio-link.com",
    },
    {
        iconUrl: "path/to/shopnest_icon",
        theme: "btn-back-green",
        name: "ShopNest - E-Commerce App",
        description: "Developed a full-featured e-commerce application with MongoDB, Express.js, React, and Node.js. Integrated Google Sign-in, JWT authentication, and Razorpay for a seamless shopping experience, alongside a responsive shopping cart.",
        link: "https://github.com/bhuvan-sbk/Ecommerce",
    },
    {
        iconUrl: "path/to/chatbot_icon",
        theme: "btn-back-red",
        name: "Chat Bot",
        description: "Created a chatbot using Gemini API, MongoDB, Node.js, Tailwind CSS, and React. Implemented OTP-based authentication and chat creation features, allowing users to log in via email, verify with OTP, and access an interactive chatbot interface.",
        link: "https://github.com/bhuvan-sbk/ChatBot",
    },
    {
        iconUrl: "path/to/autoresponder_pro_icon",
        theme: "btn-back-yellow",
        name: "AutoResponder Pro - Vacation Email App",
        description: "Developed a Node.js application leveraging the Gmail API for automated email responses and label management. Key features include setting response intervals and handling mail labeling for efficient vacation email management.",
        link: "https://github.com/bhuvan-sbk/Gmail-Auto-Response-Project",
    }
];
