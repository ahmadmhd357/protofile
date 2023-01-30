import { GrReactjs } from "react-icons/gr";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiAdobephotoshop,
  SiFigma,
  SiMicrosoftoffice,
  SiAdobeillustrator,
  SiPostman,
} from "react-icons/si";
import { ILevels, ISkills, Projects } from "./type";

export const skills: ISkills[] = [
  {
    title: "React.Js",
    about:
      "Experience building and maintaining React-based applications. Knowledge of React libraries and tools such as Redux, React Router, and Axios.",
    Icon: GrReactjs,
  },
  {
    title: "Firebase",
    about:
      "Experience with Firebase's Real-Time Database, Cloud Firestore, Cloud Functions, and other Firebase services. Implementing authentication, authorization, and security rules for Firebase",
    Icon: SiFirebase,
  },
  {
    title: "TypeScript",
    about:
      "Experience using TypeScript for building scalable and maintainable applications. Knowledge of TypeScript features like interfaces, type inference, generics, and decorators.",
    Icon: SiTypescript,
  },
  {
    title: "JavaScript ES6/ES5",
    about:
      "Proficient in JavaScript, with experience in creating dynamic and interactive web applications. Strong understanding of fundamental concepts such as functions, variables, arrays, and objects. Familiar with popular libraries and frameworks",
    Icon: SiJavascript,
  },
  {
    title: "Html5",
    about:
      "Demonstrated ability to create accessible and semantic HTML5 markup. Ability to implement cross-browser compatibility issues and troubleshoot HTML5 coding problems.",
    Icon: SiHtml5,
  },
  {
    title: "CSS3",
    about:
      "Proficient in CSS, with a strong understanding of its concepts and best practices. creating responsive web pages, and styling HTML elements. Comfortable with CSS pre-processors like SASS and LESS.",
    Icon: SiCss3,
  },
];
export const languages: ILevels[] = [
  { name: "JavaScript", level: "80%", Icon: SiJavascript },
  { name: "React", level: "80%", Icon: GrReactjs },
  { name: "Redux,Router", level: "70%", Icon: SiRedux },
  { name: "Next.js", level: "70%", Icon: SiNextdotjs },
  { name: "TypeSript", level: "50%", Icon: SiTypescript },
  { name: "Jest", level: "60%", Icon: SiJest },
  { name: "CSS3", level: "90%", Icon: SiCss3 },
  { name: "Tailwind", level: "80%", Icon: SiTailwindcss },
  { name: "BootStrap", level: "60%", Icon: SiBootstrap },
  { name: "Html5", level: "90%", Icon: SiHtml5 },
];
export const tools: ILevels[] = [
  { name: "Git,Github", level: "80%", Icon: SiGit },
  { name: "Photoshop", level: "70%", Icon: SiAdobephotoshop },
  { name: "Figma", level: "60%", Icon: SiFigma },
  { name: "Office 365", level: "70%", Icon: SiMicrosoftoffice },
  { name: "Illustrator", level: "50%", Icon: SiAdobeillustrator },
  { name: "Postman", level: "60%", Icon: SiPostman },
];
export const projects: Projects[] = [
  {
    name: "Refubook",
    description:
      "This website will be able to help refugees wherever they are. Information will be separated by country and users will be able to create their own account and share their own personal experiences and knowledge on how to find a job, rent a house, buy or sell things you might need, or how to join events happening in the community.",
    image_path: "/images/refubook.png",
    deploy_url: "https://the-incredibles-refubook.netlify.app/",
    github_url: "https://github.com/Recoded-Spark-Turkey-2022/The-Incredibles",
    stack: ["React.js", "Router/Redux/Redux-toolkit", "Firebase", "Tailwind"],
  },
];
