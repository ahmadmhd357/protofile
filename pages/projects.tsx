import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";
import React from "react";
import { motion } from "framer-motion";

function Projects() {
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

  return (
    <motion.div
      className="grid grid-cols-12 max-sm:justify-items-center mx-5 h-screen gap-4 overflow-y-scroll my-3 relative scrollbar-thin scrollbar-thumb-stone-400 scrollbar-track-stone-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((proj) => (
        <motion.div
          key={proj.name}
          className="col-span-12 sm:col-span-6 dark:hover:bg-stone-800 w-fit h-fit hover:bg-gray-300  duration-500 lg:col-span-4 p-2 bg-gray-200 dark:bg-stone-600 rounded-lg"
        >
          <ProjectCard data={proj} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
