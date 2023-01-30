import { ISkills } from "@/type";
import React, { FunctionComponent } from "react";

const SkillCard: FunctionComponent<{ data: ISkills }> = ({
  data: { about, Icon, title },
}) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green"/>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default SkillCard;
