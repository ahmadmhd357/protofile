import { IconType } from "react-icons";


export interface ISkills{
    title:string,
    about:string,
    Icon:IconType
}
export interface ILevels{
    name:string,
    level:string,
    Icon:IconType
}

export interface Projects{
    name:string,
    description:string,
    image_path:string,
    deploy_url:string,
    github_url:string,
    stack:string[],
}