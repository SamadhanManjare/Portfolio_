import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Samadhan",
    },
    social: {
        github: "samadhanmanjare",
        discord: "#",
        linkedin: "https://www.linkedin.com/in/samadhan-manjare-889a29260/"
    },
    resume: "https://drive.google.com/file/d/1G_2j33BvxRbfradOM-CtM8TzFdBS2W84/view?usp=drive_link",
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Blogs Website",
            description: "Developed a dynamic blog platform featuring engaging content and user-friendly design for seamless browsing and interaction.",
            image: "/projects/project-1.png",
            technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", ],
            github: "https://samadhanmanjare.github.io/Blogs/",
            demo: "https://samadhanmanjare.github.io/Blogs/"
        },
        {
            id: 2,
            title: "Ecomzy E-commerce Website",
            description: "Developed Ecomzy, a React-based e-commerce website featuring interactive UI and basic functionality for product display and shopping cart management.",
            image: "/projects/project-2.png",
            technologies: [ "HTML", "CSS", "JavaScript", "React", "TailwindCSS","Node.js",],
            github: "https://samadhanmanjare.github.io/Shopex/",
            demo: "https://samadhanmanjare.github.io/Shopex/"
        },
        {
            id: 3,
            title: "Travel Recommender Pune",
            description: "Designed a travel recommender UI for Pune using HTML and CSS, featuring a clean and responsive layout to showcase popular destinations and personalized travel suggestions.",
            image: "/projects/project-3.png",
            technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
            github: "https://nikhiljagtap03.github.io/travelrecommender.pune.github.io/",
            demo: "https://nikhiljagtap03.github.io/travelrecommender.pune.github.io/"
        },
        {
            id: 4,
            title: "Razorpay Clone UI",
            description: "Developed a Razorpay clone UI using HTML, CSS, and Tailwind CSS to showcase design proficiency. The interface features a clean, responsive layout optimized for modern web applications.",
            image: "/projects/project-4.png",
            technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript", "React"],
            github: "",
            demo: ""
        },
        {
            id: 5,
            title: "Textutils Web Application",
            description: "Developed Textutils, a web application using HTML, CSS, and JavaScript that provides utilities to convert text to uppercase, lowercase, and clear text, showcasing a user-friendly and responsive interface",
            image: "/projects/project-5.png",
            technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS","TypeScript",],
            github: "https://samadhanmanjare.github.io/Textutils/",
            demo: "https://samadhanmanjare.github.io/Textutils/"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Frontend Developer Intern",
            company: "Next Class",
            period: "Jan 2025 - July 2025",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        // {
        //     position: "Full Stack Developer",
        //     company: "Tekisky",
        //     period: "2023 - 2024",
        //     location: "Remote",
        //     description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
        //     responsibilities: [
        //         "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        //         "Implemented RESTful APIs and integrated third-party services",
        //         "Built responsive user interfaces and optimized application performance",
        //         "Worked on database design and backend architecture"
        //     ],
        //     technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        // }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@samadhanmanjare",
            link: `https://github.com/samadhanmanjare`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "samadhanmanjare6789@gmail.com",
            link: "mailto:samadhanmanjare6789@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}