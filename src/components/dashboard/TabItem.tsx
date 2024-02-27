import React from "react";

type TTabItem = {
  label: string;
  isActive: Boolean;
  clickHandler: () => void;
};

import editIcon from "../../assets/editIcon.svg";
import lowTredingIcon from "../../assets/lowTredingIcon.svg";
import highTredingIcon from "../../assets/highTredingIcon.svg";

export const TabItem = ({ label, isActive, clickHandler }: TTabItem) => {
  return (
    <div
      className={`border-2 w-[100%] bg-white ${isActive && "bg-[#E3E3E3]"} p-4 rounded-lg cursor-pointer`}
      onClick={clickHandler}
    >
      <div className="flex items-center gap-6">
        <p>{label}</p>
        <span className={`hover:bg-[#a9a5a5] p-1 rounded-sm`}>
          <img className="w-[15px] font-bold" src={editIcon} alt="EditIcon" />
        </span>
      </div>
      <div className="flex items-center">
        <p className="mr-2 text-2xl font-bold inter">255,581</p>
        <span>
          <img
            className="w-3 font-bold"
            src={lowTredingIcon}
            alt="TredingIcon"
          />
        </span>
        <span className="text-[10px]">{"9%"}</span>
      </div>
    </div>
  );
};
