import { ISkills } from "@/type";
import React, { FunctionComponent } from "react";

const SkillCard: FunctionComponent<{ data: ISkills }> = ({
  data: { about, Icon, title },
}) => {
  return (
    <div className="flex flex-col items-center p-2 space-x-4">
      <div className="flex items-center gap-2 pb-2">
        <Icon className="w-8 h-8  text-green" />

        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="text-center">
        <p>{about}</p>
      </div>
    </div>
  );
};

export default SkillCard;
