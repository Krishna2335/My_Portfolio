// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import intellijideaLogo from './assets/tech_logo/intellij_idea_logo.png';
import flaskLogo from './assets/tech_logo/flask_logo.png';

// Experience Section Logo's
import nielitLogo from './assets/company_logo/nielit_logo.jpeg';
import logorkyLogo from './assets/company_logo/logoRKY.jpg';

// Education Section Logo's
import srmuLogo from './assets/education_logo/srmu_logo.jpeg';
import kvsLogo from './assets/education_logo/kvs_logo.png';

// Project Section Logo's
import jarvisLogo from './assets/work_logo/jarvis.png';
import rkyLogo from './assets/work_logo/RKY.png';
import fileappLogo from './assets/work_logo/file_app.png';
import packageLogo from './assets/work_logo/package.png';
import weatherAppLogo from './assets/work_logo/weatherApp.png';
import amazonLogo from './assets/work_logo/amazon.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Flask', logo: flaskLogo},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Intellij Idea', logo: intellijideaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: logorkyLogo,
      role: "Fullstack Developer",
      company: "RKY EDGE DISTRIBUTION PVT. LTD",
      date: "September 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "SCSS",
        "JavaScript",
        "Node JS",
        "Angular",
        "Tailwind CSS",
        "MySQL",
        "Python",
        "Flask"
      ],
    },
    {
      id: 2,
      img: nielitLogo,
      role: "Internship",
      company: "NIELIT",
      date: "June 2024 - July 2024",
      desc: "Worked as a Artificial Intelligence using python Intern, During the training, he worked on Artificial Intelligence projects using Python, gaining practical experience in implementing AI concepts and applications.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Artificial Intelligence",
        "Python",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: srmuLogo,
      school: "Shri Ramswaroop Memorial University",
      date: "Sept 2022 - Aug 2025",
      grade: "6.08 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (BCA.) from SRMU University, Lucknow. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at SRMU University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Applications - BCA (Computer Science)",
    },
    {
      id: 2,
      img: kvsLogo,
      school: "Kendriya Vidyalaya Sitapur, Uttar Pradesh",
      date: "Apr 2021 - March 2022",
      grade: "60.17%",
      desc: "I completed my class 12 education from Kendriya Vidyalaya Sitapur, under the CBSE board, where I studied Commerce.",
      degree: "CBSE(XII) - Commerce",
    },
    {
      id: 3,
      img: kvsLogo,
      school: "Kendriya Vidyalaya Sitapur, Uttar Pradesh",
      date: "Apr 2019 - March 2020",
      grade: "63.80%",
      desc: "I completed my class 10 education from Kendriya Vidyalaya Sitapur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Jarvis AI Desktop Assistant",
      description:
        "An AI-powered virtual assistant built with Python and Flask that listens, speaks, and automates daily system tasks — inspired by Iron Man’s J.A.R.V.I.S.",
      image: jarvisLogo,
      tags: ["HTML", "CSS", "JavaScript", "Flask", "API", "Python"],
      github: "https://github.com/Krishna2335/J.A.R.V.I.S.0.2",
      webapp: "#",
    },
    {
      id: 1,
      title: "RKY EDGE DISTRIBUTION PVT. LTD",
      description:
        "A full-stack web application built to streamline mutual fund investment services.The frontend is developed using Angular, providing a responsive and user-friendly interface.The backend is powered by Flask, handling secure APIs and business logic, while MySQL Workbench is used for efficient database management.This project showcases seamless integration across the stack, focusing on performance, clarity, and real-time financial interactions.",
      image: rkyLogo,
      tags: [ "Node.js", "HTML", "SCSS", "JavaScript", "Angular", "Flask", "Python", "MySQL" ],
      github: "https://github.com/RKY261001/RKY-EDGE",
      webapp: "#",
    },
    {
      id: 2,
      title: "File-Sharing-App",
      description:
        "A web-based File Sharing Application built with Java, Spring Boot, and MySQL. It lets users securely upload, store, and share files via share-links or file IDs. Features include user authentication, role-based access control, and safe file upload/download for privacy and security.",
      image: fileappLogo,
      tags: ["Springboot", "Spring initializer", "API", "HTML", "CSS", "JavaScript", "MySQL", "Java" ],
      github: "https://github.com/Krishna2335/File-Sharing-App",
      webapp: "#",
    },
    {
      id: 3,
      title: "SpeechToText Package",
      description:
        "A lightweight and fast Speech-to-Text Python library that converts recorded or live audio into accurate text with minimal setup. Designed for developers who want quick and reliable voice-to-text integration in their applications.",
      image: packageLogo,
      tags: ["Python","Pip", "twine"],
      github: "https://github.com/Krishna2335/Package",
      webapp: "https://pypi.org/project/NetHyTech-SpeechToText/",
    },
    {
      id: 7,
      title: "Weather_App",
      description:
        "AI-based build website Bolt.ai The Weather App is a simple, user-friendly web application that lets users check the current weather (and optionally forecast) for any city worldwide. It uses a public weather API to fetch real-time data.",
      image: weatherAppLogo,
      tags: ["Node.js","tailwind.css", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Krishna2335/weather_App?tab=readme-ov-file",
      webapp: "#",
    },
    {
      id: 8,
      title: "Amazon Clone",
      description:
        "The Amazon Clone is a static web project that recreates the homepage design of the Amazon shopping website using pure HTML and CSS. It focuses on UI layout, styling, and design structure — without functionality like login, cart system, or payments. This is a front-end practice project aimed at improving layout building skills.",
      image: amazonLogo,
      tags: ["HTML", "CSS", "Images"],
      github: "https://github.com/Krishna2335/Local-Repo",
      webapp: "#",
    },
  ];  