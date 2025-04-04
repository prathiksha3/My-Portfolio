// constants.js

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import vol1 from "../assets/Volunteering/vol1.png"
import vol2 from "../assets/Volunteering/vol2.png"
import vol3 from "../assets/Volunteering/vol3.jpg"
import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";
import cert3 from "../assets/certificates/cert3.png";
import cert4 from "../assets/certificates/cert4.png";
import cert5 from "../assets/certificates/cert5.png";
import cert6 from "../assets/certificates/cert6.png";
import python from "../assets/techstacks/python.svg";
import css from "../assets/techstacks/css.svg";
import docker from "../assets/techstacks/docker.svg";
import git from "../assets/techstacks/git.svg";
import github from "../assets/techstacks/github.svg";
import html from "../assets/techstacks/html.svg";
import java from "../assets/techstacks/java.svg";
import jira from "../assets/techstacks/jira.svg";
import js from "../assets/techstacks/js.svg";
import ms from "../assets/techstacks/ms.svg";
import mysql from "../assets/techstacks/mysql.svg";
import next from "../assets/techstacks/next.svg";
import node from "../assets/techstacks/node.svg";
import react from "../assets/techstacks/react.svg";
import flask from "../assets/techstacks/flask.svg";
import php from "../assets/techstacks/php.svg";
import opencv from "../assets/techstacks/opencv.svg";
import stream from "../assets/techstacks/stream.svg";

export const HERO_CONTENT = `
Data Science & Software Engineer | Python & Machine Learning Specialist
Passionate about transforming raw data into actionable insights and building intelligent, scalable applications. I combine expertise in full-stack development with advanced predictive modeling to deliver solutions that bridge technical innovation and real-world impact.`;

export const ABOUT_TEXT1 = `
I'm Prathiksha A, with a Bachelor's in Computer Science and Engineering specializing in Data Science. I have a solid foundation in programming languages and frameworks, focusing on transforming complex data into actionable insights and developing innovative solutions.`;

export const ABOUT_TEXT2 = `Currently, I'm enhancing my skills through practical projects and internships, working with datasets, implementing machine learning models, and developing meaningful applications. My experience includes developing the mobile application for real time automated beehive monitoring system and creating a web application using pyhton and firebase. I am focused on using technology to solve real-world problems and improve user experiences.`;

export const ABOUT_TEXT3 = `In addition to my technical work, I'm involved in the tech community, organizing events, workshops, and mentoring aspiring developers. I'm always eager to learn and embrace new challenges that drive innovation. Outside of work, I enjoy traveling and drawing. Feel free to connect with me on LinkedIn or GitHub to learn more about my projects and achievements!`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Intern",
    company: "Coding Key LLP, Sahyadri Mangalore",
    description: "Contributed to the development of a search engine for organization. Integrated advanced web scraping features to improve user interaction with educational institutions online.Enhanced information retrieval efficiency within the organization.",
    technologies: ["Python", "HTML", "CSS", "Javascript", "Flask"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Automated Beehive Monitoring System",
    image: project1,
    description:
      "Developed an IoT and AI-powered solution for real-time hive health monitoring and anomaly detection.Enabled remote monitoring via a mobile app, reducing manual inspections and improving beekeeping efficiency through real-time alerts and data-driven insights.",
    technologies: ["Streamlit", "Raspberry Pi", "OpenCV", "YOLO"],
    features: [
      "Real-time IoT sensor data collection from beehives",
      "AI-powered anomaly detection using computer vision",
      "Mobile app integration for remote monitoring",
      "Automated alert system for critical hive conditions",
      "Data visualization dashboard for hive metrics"
    ],
    github: "https://github.com/yourusername/beehive-monitoring"
  },

  {
    title: "Coffee Leaf Disease Detection using CNN",
    image: project2,
    description:
      "Developed a machine learning model to detect coffee leaf disease using Convolutional Neural Network(CNN).Designed and trained a CNN model to classify 3 types coffee leaf diseases from images using Tensorflow.",
    technologies: ["Python", "Flask", "Machine Learning", "Tensorflow", "HTML", "CSS", "Javascript"],
    features: [
      "Image classification using custom CNN architecture",
      "Web interface for easy image upload and analysis",
      "Real-time disease prediction with confidence scores",
      "Mobile-responsive design for field use",
      "Disease prevention recommendations system"
    ],
    github: "https://github.com/prathiksha3/Coffee-Leaf-Disease.git"
  },
  {
    title: "Enterprise Resource Planning System",
    image: project5,
    description:
      " A unified platform to streamline Customer Relationship Management[CRM], Inventory, Expenses, Billings and Quatation etc.",
    technologies: ["Nextjs","MYSQL","API","Docker","React","Node.js","Jest","Git","Github"],
    features: [
      "Customer Relationship Management (CRM)",
      "Smart Inventory Control AND",
      
      "Automated alert system for critical hive conditions",
      "Role-based access controls (Admin/Staff/Client portals).",
        "Real-time stock level monitoring and Multi-location inventory tracking.",
        "Centralized customer database with interaction history and Reminder system."
    ],
    github: "https://github.com/yourusername/beehive-monitoring"
  },
  {
    title: "Flat Rental Management System",
    image: project3,
    description:
      "Application designed to management of flat rental properties. Created a web application to manage the details of flat rental properties.That contain the details of Flats, Tenant, payment. This is mainly helpful to owner of the flats",
    technologies: ["HTML","CSS","PHP","SQL,XAMPP"],
    features: [
      "Tenant and property management dashboard",
      "Automated rent payment tracking system",
      "Document management for lease agreements",
      "Maintenance request tracking system",
      "Financial reporting and analytics"
    ],
    github: "https://github.com/prathiksha3/prathiksha3-DBMS-Mini-Project.git" 
  },
  {
    title: "Prathiksha A - Interactive Portfolio",
    image: project4,
    description:
      "Explore a cosmic-themed portfolio blending 3D elements and fluid animations. Skills and projects unfold through stardust transitions, particle effects, and parallax scrolling, creating an immersive journey. Navigate via celestial mechanics—hover triggers supernova bursts, while a sleek contact form emerges like a wormhole. Dark matter aesthetics meet functional design.",
    technologies: ["Streamlit", "Raspberry Pi", "OpenCV", "YOLO"],
    features: [
      " Home & About Section – Introduction and background details",
      "Projects Showcase – List of projects with animations and details",
      "Animated Contact Form – Cosmic-themed UI with EmailJS integration",
      "Framer Motion Animations – Smooth transitions and effects"
    ],
    github: "https://github.com/yourusername/beehive-monitoring"
  },
];

export const CONTACT = {
  phoneNo: "+91 8495024841",
  email: "aprathiksha36@gmail.com",
};


export const VOLUNTEER = [
  {
    role: 'Member, IEEE, Sahyadri Chapter Karnataka, India',
    description: 'Attended multiple workshops, conferences and events.',
    image: vol1
  },
  {
    role: 'Member, Sahyadri Open Source Community',
    description: 'Organized multiple workshops, hackathons, and events. Mentored students and taught Python. Organized DevHost ’24.',
    image: vol2
  },
  {
    role: 'Volunteer, National level Tech fest Synergia (2023)',
    description: 'Volunteered and organized an event named Idea Pitching with over 100 participants.',
    image:vol3
  },
  


];
export const CERTIFICATES = [
  {
    Img: cert1,
    title: "Google Cloud Computing Foundations and Generative AI Certificate",
    issuer: "GDSC"
  },
  {
    Img: cert2,
    title: "Intelligent document processing solution with Azure AI Document Intelligence",
    issuer: "Microsoft"
  },
  {
    Img: cert3,
    title: "TalentBattle Machine Learning Workshop",
    issuer: "TalentBattle"
  },
  {
    Img: cert4,
    title: "AWESOME DAY Online Conferrence",
    issuer: "Amazon"
  },
  {
    Img: cert5,
    title: "OPENCV Bootcamp",
    issuer: "OpenCV University"
  },
  {
    Img: cert6,
    title: "Explore Fundamentals of Large-Scale Analytics",
    issuer: "Microsoft"
  },
];

export const TECH_STACKS = [
  {
    icon: python,
    language: "Python",
  },
  {
    icon: react,
    language: "React.js",
  },
  {
    icon: next,
    language: "Next.js",
  },
  {
    icon: java,
    language: "Java",
  },
  {
    icon: css,
    language: "CSS",
  },
  {
    icon: docker,
    language: "Docker",
  },
  {
    icon: git,
    language: "Git",
  },
  {
    icon: github,
    language: "Github",
  },
  {
    icon: html,
    language: "Html",
  },
  {
    icon: jira,
    language: "Jira",
  },
  {
    icon: js,
    language: "Javascript",
  },
  {
    icon: ms,
    language: "MS Excel",
  },
  {
    icon: mysql,
    language: "MySQL",
  },
  {
    icon: node,
    language: "Node.js",
  },
  {
    icon: flask,
    language: "Flask",
  },
  {
    icon: php,
    language: "php",
  },
  {
    icon: opencv,
    language: "OpenCV",
  },
  {
    icon: stream,
    language: "Streamlit",
  },
 
];

