import { Projects } from "@/type";
import React, { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{ data: Projects }> = ({
  data: { name, image_path, stack, description, deploy_url, github_url },
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer w-full max-w-[200px]  h-[175px]"
        onClick={() => setShow(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {show && (
        <div className="grid p-4 rounded-lg md:grid-cols-2 absolute opacity-100 top-0 left-0 z-50 h-auto w-full bg-gray-300 text-black dark:bg-black dark:text-white gap-x-12">
          <div>
            <img
              src={image_path}
              alt={name}
              className="cursor-pointer rounded-md"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                target="_blank"
                className="flex hover:scale-110 ease-in duration-500 rounded-xl items-center px-4 py-2 space-x-3 text-lg bg-gray-400 dark:bg-stone-900"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href={deploy_url}
                target="_blank"
                className="flex hover:scale-110 ease-in duration-500 rounded-xl items-center px-4 py-2 space-x-3 text-lg bg-gray-400 dark:bg-stone-900"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="mb-3 font-blod text-xl md:text-2xl">{name}</h1>
            <h1 className="mb-3 font-medium">{description}</h1>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {stack.map((el) => (
                <span
                  key={el}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-stone-900 rounded-sm"
                >
                  {el}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 focus:outline-none bg-gray-300 dark:bg-stone-900 rounded-full"
            >
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
