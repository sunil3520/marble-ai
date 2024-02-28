import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

type TTabItem = {
  label: string;
  isActive: Boolean;
  clickHandler: () => void;
};

import lowTredingIcon from "../../assets/lowTredingIcon.svg";
import highTredingIcon from "../../assets/highTredingIcon.svg";
import { FaPencil } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
export const TabItem = ({ label, isActive, clickHandler }: TTabItem) => {
  return (
    <div
      className={`border-2 w-[100%] bg-white ${isActive && "bg-[#E3E3E3]"} 
      hover:bg-[#E3E3E3]
       p-4 rounded-lg cursor-pointer`}
      onClick={clickHandler}
    >
      <div className="flex items-center justify-between">
        <p>{label}</p>

        <Menu>
          <MenuButton onClick={(e)=>e.stopPropagation()} className={`hover:bg-[#a9a5a5] p-1 rounded-sm`}>
            <span >
            <FaPencil />
            </span>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaChartLine />}>Average Order Value</MenuItem>
            <MenuItem icon={<FaChartLine />}>Conversion rate</MenuItem>
            <MenuItem icon={<FaChartLine />}>Gross Sales</MenuItem>
            <MenuItem icon={<FaChartLine />}>Net return value</MenuItem>
            <MenuItem icon={<FaChartLine />}>Store search conversion</MenuItem>
            <MenuItem icon={<FaChartLine />}>Return rate</MenuItem>
          </MenuList>
        </Menu>
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
