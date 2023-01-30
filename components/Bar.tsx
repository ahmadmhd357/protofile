import { ILevels } from "@/type";
import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: ILevels;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-stone-700">
      
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
        style={{ width: level }}
        initial={{ width:0 }}
        animate={{ width:level }}
        transition={{type: "spring", stiffness: 100,damping:10, duration: 0.5 }}
        
      >
        <Icon className="mx-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
