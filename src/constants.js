// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
//import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
//import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Project Section Logo's
import acc from './assets/education_logo/acc.png';
import todoapp from './assets/todolist.png';
import crud from './assets/education_logo/crud.png';
import cal from './assets/calculator.png';
import resume from './assets/resume.png';
import news from './assets/news.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
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
     
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'Java', logo: javaLogo },
     // { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    
    ],
  },
];

  export const experiences = [
    {
      id: 0,
     
      role: "Full Stack Developer Trainee",
      company: "Apponix Technologies Banglore",
      date: "January 2025 - April 2025",
      desc: "I successfully completed Full Stack Development training at Apponix Technologies in Bangalore, where I specialized in both the MERN stack (MongoDB, Express.js, React.js, Node.js) and Java-based Full Stack technologies. I gained hands-on experience in creating dynamic web applications using HTML, CSS, JavaScript, and modern frameworks.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Bootstrap",
        "Node JS",
        "Express JS",
        "MongoDb",
        "Java",
        "Jdbc",
        "Servlet , Jsp",
        "Hibernate",
        "Spring Boot",
      ],
    },
    {
      id: 1,
     
      role: "Asp.Net Developer Trainee",
      company: "Hatkesh Infotech Anand",
      date: "December 2023 - April 2024",
      desc: " I created an application called Accounting System, which is designed in C# and ASP.NET. Efficient transaction management systems, such as those for sales, purchases, and item details, were its primary use.The transaction management system is user-friendly and simple to use. As an intern, I use Microsoft SQL Server 2019 Management Studio for databases and ASP.NET Windows Forms for development. ",
      skills: [
        "C#",
        "Asp.Net Framework",
        "Microsoft SQL Server",
        "Asp.Net Windows Forms",
        
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 1,
     
      school: "Charotar University of Science and Technology Changa",
      date: "July 2022 to April 2024",
      grade: "First Class",
    
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 2,
      
      school: "Sardar Patel University",
      date: "july 2018 to may 2021",
      grade: "First Class",
     
      degree: "Bachelor of Commerce(BCOM)",
    },
    {
      id: 3,
     
      school: "C.M.Patel High School",
      date: "July 2017 - March 2018",
      grade: "C",
    
      degree: "GSHSC(XII)",
    },
    {
      id: 4,
      
      school: "St.Mary's High School",
      date: "July 2015 - March 2016",
      grade: "C",
      
      degree: "GSEB(X)",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Accounting System",
      description:
        "  I created an application called Accounting System, which is designed in C# and ASP.NET. Efficient transaction management systems, such as those for sales, purchases, and item details, were its primary use.As an intern, I use Microsoft SQL Server 2019 Management Studio for databases and ASP.NET Windows Forms for development ",
      image: acc,
      tags: ["C#","Asp.Net Framework","Asp.Net Windows From","Microsoft Sql Server","SAP Crystal Report"],
      github: "https://github.com/chiragvaghela1008/Accounting_System.git",
      webapp: "https://drive.google.com/file/d/128C_OBRIJ89nQr8QhmEihzWjvec2vrQJ/view",
     
    },
    {
      id: 2,
      title: "To-Do List Application Using Spring MVC",
      description:
        "Developed a microservices-based To-Do App using Java Spring Boot,enabling users to create, update, delete, and manage tasks.Implemented REST APIs for communication between independently deployed services,showcasing modular architecture",
      image: todoapp,
      tags: ["HTML", "CSS", "BOOTSTRAP", "SPRING", "HIBERNATE", "MICROSERVICES", "MYSQL"],
      github: "https://github.com/chiragvaghela1008/To_Do_List_Application_Spring_Mysql.git",
      webapp: "https://drive.google.com/file/d/1poTvDSBTkxMeqvagBG0jE5zOUTMhqX-2/view",
    },
    {
      id: 3,
      title: "Asp.Net Crud Application",
      description:
        "An ASP.NET CRUD app with jQuery AJAX is a dynamic web application where Create, Read, Update, and Delete operations are performed asynchronously using jQuery's AJAX methods without reloading the page. It uses ASP.NET (like MVC or Web API) on the server-side to handle requests and return JSON responses.",
      image: crud,
      tags: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "ASP.NET FRAMEWORK","SQL-SERVER"],
      github: "https://github.com/chiragvaghela1008/Project_CRUD_Asp.Net_Project.git",
      webapp: "https://drive.google.com/file/d/1Prenji6uMY5xkdqYbPIlWzle3y4Oad5Z/view",
    },
    {
      id: 4,
      title: "Resume",
      description:
        "A resume made with HTML and CSS is a static web page that visually presents personal, educational, and professional details in a structured format. HTML is used to create the layout and content (like sections for skills, experience, and education), while CSS styles the resume with fonts, colors, spacing, and alignment.",
      image: resume,
      tags: ["HTML", "CSS",],
      github: "https://github.com/chiragvaghela1008/Resume_Chirag_WebApp.git",
      webapp: "https://drive.google.com/file/d/1f0Yp3JArJVydRE_0XIAhtWlBzfRfkG2r/view",
    },
    {
      id: 5,
      title: "News-Paper Pamplate",
      description:
        "A newspaper pamphlet using HTML and CSS is a web page designed to look like a real newspaper. HTML is used to add text and images, and CSS is used to style it with columns, headings, and layout like a printed pamphlet. It’s useful for making digital or printable news-style pages.",
      image: news,
      tags: ["HTML", "CSS", "BOOTSRAP",],
      github: "https://github.com/chiragvaghela1008/News_Paper_Pamplate_Html_Css.git",
      webapp: "https://drive.google.com/file/d/1D8BF1jSyJ0IIZ5aGRikIOOTNkhzGy91i/view",
    },
    {
      id: 6,
      title: "Calculator Web-Application",
      description:
        "A calculator web app using HTML, CSS, and JavaScript is a simple interactive tool built for performing basic math operations like addition, subtraction, multiplication, and division. HTML creates the structure (buttons and display), CSS styles the layout and look, and JavaScript adds the logic to handle user input and show results.",
      image: cal,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/chiragvaghela1008/Calculator_Web_App.git",
      webapp: "https://drive.google.com/file/d/1lR_ZAkjwHivSYK_xojYGZotIAbQwFxsD/view",
    },
    
    
    
  ];  