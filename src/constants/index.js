import {
  aweni,
  grafana,
  sonarqube,
  promotheus,
  nexus,
  jenkins,
  firebase,
  flask,
  hbase,
  java,
  mysql,
  oracle,
  postgresql,
  python,
  django,
  laravel,
  net,
  next,
  php,
  spring,
  symfony,
  VestaVerse,
  mobile,
  backend,
  bootstrap,
  creator,
  IAML,
  VFX,
  web,
  echofy,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  curly,
  threejs,
  ecommerce,
  angular,
  st2i,
  express,
  fastapi,
  kubernetes,
  aws,
  azure,
  powerbi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },

  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

 
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "DevOps & Cloud",
    icon: backend,
  },
  {
    title: "AI & Machine Learning",
    icon: IAML,
  },
  {
    title: "Data Analytics & BI",
    icon: mobile,
  },

];


const technologies = [
  // Frontend
  { name: "Angular", icon: angular },
  { name: "React.js", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Next.js", icon: next }, // à vérifier
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },

  // Backend
  { name: "Spring Boot", icon: spring },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "Java", icon: java },
  { name: "Django", icon: django },
  { name: "FastAPI", icon: fastapi },
  { name: "Flask", icon: flask },
  { name: "Python", icon: python },
  { name: "Laravel", icon: laravel },
  { name: "Symfony", icon: symfony },
  { name: "PHP", icon: php },
  { name: ".NET", icon: net }, // à vérifier

  // Data
  { name: "PostgreSQL", icon: postgresql },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Power BI", icon: powerbi },
  { name: "Oracle", icon: oracle }, // à vérifier

  // DevOps & Cloud
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Jenkins", icon: jenkins },
  { name: "SonarQube", icon: sonarqube },
  { name: "Nexus", icon: nexus },
  { name: "Prometheus", icon: promotheus },
  { name: "Grafana", icon: grafana },
  { name: "Microsoft Azure", icon: azure },
  { name: "AWS", icon: aws }, // à vérifier
  { name: "Git", icon: git },
];
const technologyGroups = [
  {
    title: "Frontend & Design",
    names: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Angular",
      "Next.js", "Tailwind CSS", "Bootstrap", "Three.js", "Figma",
    ],
  },
  {
    title: "Backend",
    names: [
      "Node.js", "Express.js", "Spring Boot", "Laravel", "Symfony", "Django",
      "Flask", "FastAPI", ".NET", "PHP", "Java", "Python",
    ],
  },
  {
    title: "Data",
    names: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "HBase", "Firebase", "Power BI"],
  },
  {
    title: "DevOps & Cloud",
    names: [
      "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "SonarQube", "Nexus",
      "Prometheus", "Grafana", "AWS", "Microsoft Azure", "Git",
    ],
  },
].map((group) => ({
  title: group.title,
  items: group.names
    .map((name) => technologies.find((t) => t.name === name))
    .filter(Boolean),
}));

const experiences = [

  {
    title: "Full-Stack Developer Intern",
    company_name: "ST2i International",
    icon: st2i,
    iconBg: "#FFFFFF",
    date: "February 2026 – July 2026",
    points: [
      "Developed TalentHub, an HR management platform based on microservices architecture.",
      "Built responsive interfaces and backend services with Angular and Spring Boot.",
      "Implemented authentication and access control using Keycloak and Redis.",
      "Configured CI/CD pipelines and deployed the application on Azure AKS.",
      "Technologies: Angular, Tailwind CSS, Java, Spring Boot, PostgreSQL, Keycloak, Redis, Docker, Kubernetes, Azure, Jenkins, SonarQube."
      ],
  },

  {
    title: "Full-Stack Web Developer Intern",
    company_name: "Vision Age VFX",
    icon: VFX,
    iconBg: "#000000",
    date: "June 2025 – August 2025",
    points: [
      "Developed a web platform for VFX project management.",
      "Integrated AI-powered video analysis and automatic shot detection.",
      "Contributed to MLOps workflows and CI/CD automation.",
      "Implemented user authentication and role-based access control.",
      "Technologies: MongoDB, Express.js, React.js, Node.js, Python, FastAPI, Docker, Kubernetes, Jenkins, Nexus, Prometheus, Grafana, Git, Ftrack."
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "Leadiya",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "June 2024 – August 2024",
    points: [
      "Developed web solutions for training platforms and automotive repair applications.",
      "Integrated analytics and tracking tools to monitor website traffic and user behavior.",
      "Optimized responsive interfaces and user experience across devices.",
      "Technologies: WordPress, JavaScript, PHP, Google Analytics 4, Google Tag Manager, Power BI."
    ],
  },
  {
    title: "Data Analyst & Full-Stack Web Developer Intern",
    company_name: "Québec Training Center",
    icon: starbucks,
    iconBg: "#FFFFFF",
    date: "February 2023 – April 2023",
    points: [
      "Developed Teco.tn, a web application for monitoring Tunisia's economic, financial, and social indicators.",
      "Built interactive interfaces using Angular to visualize key indicators.",
      "Processed and integrated data using Talend Open Studio.",
      "Implemented recommendation and prediction features using Python.",
      "Created interactive dashboards and reports using Power BI.",
      "Technologies: Angular, Python, Talend Open Studio, Power BI."
    ],
  }
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];




const projects = [
  {
    name: "MindSpark",
    description:
"A web-based skill exchange platform for learning, sharing, and collaborating, featuring gamification, real-time chat, a virtual assistant, internship matching, smart CV filtering, and a CI/CD pipeline",
    date: "2024", 

      tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      { name: "Machine Learning", color: "purple-text-gradient", },

      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },

      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "green-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DahmaniInes/Skill-Exchange-full-stack-JS",
  },
 
  {
    name: "Echofy",
    description:
"A responsive platform called Echofy featuring events, awareness campaigns, and communities on various topics, with sponsorship opportunities to support environmental initiatives. Includes a CI/CD pipeline.",    
  date: "2025", // Ajoutez la date ici
      tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },

      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      { name: "Machine Learning", color: "purple-text-gradient", },

      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
    ],
    image: echofy,
    source_code_link: "https://github.com/Taha-Yassine-Hadded/EcoEvents-Laravel",
  },
  {
    name: "VestaVerse",
    description:
"A social travel network enabling users to join groups and communities, match and meet fellow travelers, share multimedia content, with built-in security and content moderation features. Includes a CI/CD pipeline.",
    date: "2025", // Ajoutez la date ici

      tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo",
        color: "green-text-gradient",
      },
      { name: "Machine Learning", color: "pink-text-gradient", },
      
       {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "Jenkins",
        color: "orange-text-gradient",
      },
      {
        name: "Nexus",
        color: "red-text-gradient",
      },
      {
        name: "SonarQube",
        color: "yellow-text-gradient",
      },
      {
        name: "Prometheus",
        color: "cyan-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
            
      
    ],
    image: VestaVerse,
    source_code_link: "https://github.com/Taha-Yassine-Hadded/Socialite",
  },
  {
    name: "SmartBiblio",
    description:
    "A responsive e-commerce platform for selling books, featuring real-time chat for customer support, built using a microservices architecture to ensure scalability and modularity",   
      date: "2024", 
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "yellow-text-gradient",
        },
        {
          name: "Keycloak",
          color: "orange-text-gradient",
        },
        {
          name: "Config Server",
          color: "red-text-gradient",
        },
        {
          name: "Server Discovery",
          color: "cyan-text-gradient",
        },
        {
          name: "Eureka",
          color: "purple-text-gradient",
        },
        {
          name: "API Gateway",
          color: "green-text-gradient",
        },
    ],
    image: jobit,
    source_code_link: "https://github.com/DahmaniInes/gestion-bibliotheque-Back-MicroService-",
  },
  {
    name: "SmartCom",
    description:
     "E-commerce application for home appliances based on semantic web architecture, featuring an intelligent recommendation system, product management, shopping cart, secure payment, and user behavior analysis.",   
       date: "2025", // Ajoutez la date ici
      tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "red-text-gradient",
      },
      {
        name: "bcrypt",
        color: "yellow-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
      { name: "NLP",
       color: "purple-text-gradient"
       },
      
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },

 
  {
    name: "CurlyHair",
    description:
   "Front-end development of a responsive web platform selling organic hair care products, allowing users to scan and analyze their hair type and receive personalized product recommendations for optimal care.",
        date: "2024", 

    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "yellow-text-gradient",
      },
    ],
    image: curly,
    source_code_link: "https://github.com/DahmaniInes/Curly-Hair",
  },
 
  {
    name: "FemHeath",
    description:
    "A web platform dedicated to women, featuring events, awareness blogs on various topics, sponsorship opportunities, and an online store for related products.",      date: "2023", // Ajoutez la date ici

      tags: [
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Twig",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ChaimaTlili24/FemHealthFinal",
  },
 

  {
    name: "Aweni",
    description:
    "A web application dedicated to social assistance, enabling users to donate furniture and clothing to be redistributed to underprivileged individuals.",
    date: "2022", // Ajoutez la date ici

      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
      
    ],

    image: aweni,
    source_code_link: "https://github.com/",
  },
 

];

export { services, technologies, technologyGroups, experiences, testimonials, projects };
