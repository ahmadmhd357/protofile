import { GrReactjs } from "react-icons/gr";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { ILevels, ISkills } from "./type";

export const skills: ISkills[] = [
  {
    title: "React.Js",
    about: "some explaining",
    Icon: GrReactjs,
  },
  {
    title: "Firebase",
    about: "some explaining",
    Icon: SiFirebase,
  },
  {
    title: "TypeScript",
    about: "some explaining",
    Icon: SiTypescript,
  },
  {
    title: "JavaScript ES6/ES5",
    about: "some explaining",
    Icon: SiJavascript,
  },
  {
    title: "Html5",
    about: "some explaining",
    Icon: SiHtml5,
  },
  {
    title: "CSS3",
    about: "some explaining",
    Icon: SiCss3,
  },
];
export const languages: ILevels[] = [
  { name: "JavaScript", level: "80%", Icon: SiJavascript },
  { name: "React", level: "80%", Icon: SiJavascript },
  { name: "Redux,Router", level: "70%", Icon: SiJavascript },
  { name: "Next.js", level: "70%", Icon: SiJavascript },
  { name: "TypeSript", level: "50%", Icon: SiJavascript },
  { name: "Jest", level: "60%", Icon: SiJavascript },
  { name: "CSS3", level: "90%", Icon: SiJavascript },
  { name: "Tailwind", level: "80%", Icon: SiJavascript },
  { name: "BootStrap", level: "60%", Icon: SiJavascript },
  { name: "Html5", level: "90%", Icon: SiJavascript },
];
export const tools: ILevels[] = [
  { name: "Git,Github", level: "80%", Icon: SiJavascript },
  { name: "Photoshop", level: "70%", Icon: SiJavascript },
  { name: "Figma", level: "60%", Icon: SiJavascript },
  { name: "Office 365", level: "70%", Icon: SiJavascript },
  { name: "Illustrator", level: "50%", Icon: SiJavascript },
  { name: "Postman", level: "60%", Icon: SiJavascript },
];
