"use client";

import { useState } from "react";
import TabContent from "./tab-content";
import RewardTabs from "./rewards-tabs";
import RewardsSummary from "./rewards-summary";

const RewardsTabContent = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const getContent = () => {
    switch (toggleState) {
      case 1:
        return <RewardsSummary/>;
      case 2:
        return <RewardsSummary/>;
      default: 
      return null
    };
  };

  return (
    <> 
    <div className="flex gap-[56px] items-center">
      <RewardTabs
        label="Summary"
        isActive={toggleState === 1}
        onClick={() => setToggleState(1)}
      />
      <RewardTabs
        label="About TripGuide Rewards"
        isActive={toggleState === 2}
        onClick={() => setToggleState(2)}
      />
    </div>
      <div className="mt-[70px]">
        <TabContent content={getContent()}/>
      </div>
    </>
  )
}

export default RewardsTabContent