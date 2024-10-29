"use client";

import { useState } from "react";
import { FaBed, FaPlaneDeparture, FaCarAlt } from "react-icons/fa";
import Tabs from './tabs';
import TabContent from "./tab-content";
import Hoteltab from "./hotel-tab";

const HeroTabs = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const getContent = () => {
    switch (toggleState) {
      case 1:
        return <Hoteltab/>;
      case 2:
        return <Hoteltab/>;
      case 3:
        return <Hoteltab/>;
      default:
        return null;
    }
  };

  return (
    <div className=""> 
      <div className="flex gap-[30px]">
        <Tabs
          icon={FaBed}
          label="Hotel"
          isActive={toggleState === 1}
          onClick={() => setToggleState(1)}
        />
        <Tabs
          icon={FaPlaneDeparture}
          label="Flight"
          isActive={toggleState === 2}
          onClick={() => setToggleState(2)}
        />
        <Tabs
          icon={FaCarAlt}
          label="Car Rental"
          isActive={toggleState === 3}
          onClick={() => setToggleState(3)}
        />
      </div>
      <div>
        <TabContent content={getContent()}/>
      </div>
    </div>

  )
}

export default HeroTabs