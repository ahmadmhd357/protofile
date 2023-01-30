import React from "react";
import { skills } from "@/data";
import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";
function index() {
  const container = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="flex flex-col  h-screen  overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-400-green-300 dark:scrollbar-thumb-stone-500 dark:scrollbar-track-stone-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full  p-4 pt-1 ">
      <h5 className="my-5 font-bold">
        Frontend Web developer. A hard worker with a higher purpose. I have a
        great sense of insistence and achievement. I am a committed person who
        always seeks to prevail and gain both knowledge and experience in the
        field of Web development
      </h5>
      <div className="px-4 mt-6 flex-grow bg-gray-400 dark:bg-stone-800 mx-[-1.25rem]">
        <h2 className="py-3 my-3 text-xl font-bold tracking-wide">
          Part of the skills
        </h2>
        <motion.div
          className="grid gap-6 pb-6 lg:grid-cols-2 "
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 hover:bg-gray-300 dark:hover:bg-stone-700 rounded-lg dark:bg-stone-600 lg:col-span-1"
              variants={item}
            >
              <SkillCard data={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default index;
