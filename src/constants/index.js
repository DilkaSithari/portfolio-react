import project1 from "../assets/projects/loan.png";
import project2 from "../assets/projects/stat.webp";
import project3 from "../assets/projects/eSlip.jpg";
import project4 from "../assets/projects/fleet.png";
import blog1 from "../assets/blogs/blog1.webp";
import blog2 from "../assets/blogs/blog2.webp";
import blog3 from "../assets/blogs/blog3.webp";
import blog4 from "../assets/blogs/blog4.webp";
import blog5 from "../assets/blogs/blog5.webp";
import blog6 from "../assets/blogs/blog6.webp";
import blog7 from "../assets/blogs/blog7.webp";
import { Link } from "react-router-dom";

export const HERO_CONTENT = `Enthusiastic undergraduate with a strong work ethic, passionate about learning and teamwork. Dedicated to achieving goals through hard work and collaboration, Committed to pursuing a career in Software Engineering`;

export const ABOUT_TEXT = `Enthusiastic undergraduate with a strong work ethic, passionate about learning and teamwork. Dedicated to achieving goals through hard work and collaboration, Committed to pursuing a career in Software Engineering`;

export const EDUCATION = [
  {
    year: "2020 (Present)",
    degree: "BSc (Hons) in Information Technology",
    school: "University of Moratuwa",
    description: `Currently pursuing a degree in Information Technology at the University of Moratuwa, with a focus on software engineering.`,
    results: "CGPA: 3.2 (Up to Level 4 Semester 1)",
  },
  {
    year: "2018 (August)",
    degree: "G.C.E. Advanced Level",
    school: "Mahanama Central College",
    description: `Completed Advanced Level examination in the Bio Science stream with a focus on Biology, Physics, and Chemistry.`,
    results: "Z-Score: 1.3946 , District Rank: 44th",
  },
  {
    year: "2013 (December)",
    degree: "G.C.E. Ordinary Level",
    school: "Mahanama Central College",
    description: `Completed Ordinary Level examination.`,
    results: "6A's, 2B, 1C",
  },

];

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: " SOFTWARE ENGINEER INTERN",
    company: "COMMERCIAL BANK IT, R & D",
    description: `Worked as a software engineer intern at
    commercial bank IT, R & D card center projects.`,
    technologies: ["Spring Boot", "Angular"],
  },
  {
    year: "2019 - 2020",
    role: "TRAINEE",
    company: "PEOPLES BANK",
    description: `Worked as a trainee at the Peoples' Bank
    Okkampitiya branch`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Forecasting Industry Growth for Tailored Cooperative Loan Products - Final Year Project(Ongoing)",
    image: project1,
    description:
      "Centers around the development of highly personalized cooperate loan features with the potential to revolutionize the way financial institutions operate. Financial institutions with a powerful tool to navigate the ever-changing economic landscape, optimize their resource allocation, and unlock sustainable growth. It has the potential to reshape the loan industry towards a future where financial services become proactive drivers of individual and economic success.",
    technologies: ["Phython", "Machine Learning", "Deep Learning"],
  },
  {
    title: " ATM-CRM-Stat-Ui project -  Commercial Bank Project(Intern Project)",
    image: project2,
    description:
      " Contributed to a web-based software project for managing commercial bank customer card details. Specialized in developing crucial frontend components, ensuring a user-friendly interface.Proficient in translating design concepts in to responsive solutions.",
    technologies: ["HTML", "CSS", "Angular"],
  },
  {
    title: " E-Slip project -  Commercial Bank Project(Intern Project)",
    image: project3,
    description:
      " Contributed to backend development for the E-Slip project, specializing in API development. Designed and implemented robust solutions, ensuring seamless functionality and efficient data management.",
    technologies: ["Java", "Spring boot", "mySQL"],
  },
  {
    title: " Fleet Management System -  Second-Year Software Project(Group Project)",
    image: project4,
    description:
      " A web-based software system built for construction sites to organize, manage, and coordinate the vehicles from the central information system to the desired location. My responsibilities include developing the backend and frontend components for the Reports Module and Configuration Module as well as the Allocated Vehicle page in the dashboard module. ",
    technologies: ["React.js", "Node.js", "MySQL"],
  },
];

export const CONTACT = {
  address: "Monaragala, Sri Lanka",
  phoneNo: "+94 71 255 99 01 ",
  email: "sitharidilka@gmail.com",
};
 export const BLOGS = [
  {
    title: "Installing Tailwind CSS with Angular for Streamlined Web Development",
    image: blog1,
    link: "https://medium.com/nerd-for-tech/installing-tailwind-css-with-angular-for-streamlined-web-development-c74a75eb7e1c"
  },
  {
    title: "How to Resolve Error: ng.ps1 cannot be loaded because running scripts is disabled on this system",
    image: blog2,
    link: "https://medium.com/nerd-for-tech/how-to-resolve-error-ng-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-8d346612c44a"
  },
  {
    title: "Creating and Initiating Your First Angular Project on GitHub",
    image: blog3,
    link: "https://medium.com/nerd-for-tech/creating-and-initiating-your-first-angular-project-on-github-8f7611dc1bc5"
  },
  {
    title: "Comprehensive Introduction to Cloud Computing",
    image: blog4,
    link: "https://medium.com/nerd-for-tech/comprehensive-introduction-to-cloud-computing-386792d3de1b"
  },
 { title: "Learn Java from the Beginning",
  image: blog5,
  link: "https://medium.com/linkit-intecs/learn-java-from-the-beginning-878469ce0366"
 },
 {
  title: "Windows Keyboard Shortcut Keys",
  image: blog6,
  link: "https://medium.com/linkit-intecs/windows-keyboard-shortcut-keys-b3088f67e3f5"
 },
 
  {
    title: "Applications of JavaScript Math Object",
    image: blog7,
    link: "https://medium.com/linkit-intecs/how-does-the-javascript-math-object-ease-the-mathematical-tasks-f5ebbe05abe3"
  },
 ]