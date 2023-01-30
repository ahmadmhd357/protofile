import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import React from "react";

function resume() {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="my-3 text-2xl font-bold">Education</h1>
          <div>
            <h1 className="flex flex-col my-2 text-xl font-medium">
              Frontend web development - Recoded{" "}
            </h1>
            <p className="font-semibold">
              Recoded Immersive bootcamps are highly competitive, with a 5%
              acceptance rate.{" "}
            </p>
            <ol className="my-3">
              <li>
                • Completing a 4.5-month immersive design bootcamp, with 300+
                hours of curricula and project-based learning{" "}
              </li>
              <li>• Technologies: HTML, CSS, JavaScript, React </li>
              <li>
                • Working with various design teams to create products across
                industries.{" "}
              </li>
            </ol>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="my-3 text-2xl font-bold">Experiance</h1>
          <div>
            <h1 className="flex flex-col my-2 text-xl font-medium">
              Frontend Developer - Recoded{" "}
              <span className="text-sm font-normal text-gray-500">
                Feb 2020 - Jun 2023
              </span>
            </h1>
            <p className="font-semibold">Role:</p>
            <ol className="my-3">
              <li>
                • Completing a 4.5-month immersive design bootcamp, with 300+
                hours of curricula and project-based learning{" "}
              </li>
              <li>• Technologies: HTML, CSS, JavaScript, React </li>
              <li>
                • Working with various design teams to create products across
                industries.{" "}
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="my-3 text-2xl font-bold">Languages & Frameworks</h2>
          <div className="my-2">
            {languages.map((lan) => (
              <Bar key={lan.name} data={lan} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="my-3 text-2xl font-bold">Tools & other skills</h2>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar key={tool.name} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
