import React from "react";
import { skills } from "@/data";
import SkillCard from "@/components/SkillCard";

function index() {
  return (
    <div className="flex flex-col flex-grow p-4 pt-1 ">
      <h5 className="my-5 font-medium">about me blaa bla balbal balb albalblab </h5>
      <div className="p-4 mt-6 flex-grow bg-gray-400 dark:bg-stone-800 mx-[-1.25rem]">
        <h1 className="pb-3 my-3 text-xl font-bold tracking-wide" >Part of the skills</h1>
        <div className="grid gap-6 lg:grid-cols-2 ">
          {skills.map((skill,index) => (
            <div key={index} className="bg-gray-200 rounded-lg dark:bg-stone-600 lg:col-span-1">
              
              <SkillCard  data={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
