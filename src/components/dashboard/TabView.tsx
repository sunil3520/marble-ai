import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";
import TabLoader from "./TabLoader";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
type TTabViewProps = {
  tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
  console.log(tabs, "tabs");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-[90%] p-4 bg-slate-50 border-8 rounded-lg ">
      <Accordion allowToggle>
        <AccordionItem className="bg-[white]">
          <div className="w-[100%] flex justify-between items-center">
            <div className="w-[95%] flex gap-4 ">
              {tabs?.map((tab: TTab, index: number) => (
                <TabItem
                  key={tab?.id}
                  label={tab?.label}
                  isActive={index === activeTab}
                  clickHandler={() => setActiveTab(index)}
                />
              ))}
            </div>
           <div className="w-[5%]"> <AccordionButton className="">
              <AccordionIcon />
            </AccordionButton></div>
          </div>

          <AccordionPanel>
            <div className="mx-auto">
              {tabs?.map((tab: TTab, index: number) => (
                <TabPanel key={tab?.id} isActive={index === activeTab}>
                  {tab?.content}
                </TabPanel>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
