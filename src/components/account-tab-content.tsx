"use client";

import { useState } from "react";
import TabContent from "./tab-content";
import AccountTabs from "./account-tabs";
import PersonalInfo from "./personal-info";

const AccountTabContent = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const getContent = () => {
    switch (toggleState) {
      case 1: 
      return <PersonalInfo/>;
      case 2: 
      return <PersonalInfo/>;
      case 3: 
      return <PersonalInfo/>;
      case 4: 
      return <PersonalInfo/>;
      case 5: 
      return <PersonalInfo/>;
      case 6: 
      return <PersonalInfo/>;
      default: 
      return null
    }
  };


  return (
    <div>
      <div className="lg:flex max-sm:flex gap-[65px] max-sm:flex-col md:grid md:grid-cols-2 md:gap-[30px]">
        <AccountTabs
          label="Personal Info"
          isActive={toggleState === 1}
          onClick={() => setToggleState(1)}
        />
        <AccountTabs
          label="Security"
          isActive={toggleState === 2}
          onClick={() => setToggleState(2)}
        />
        <AccountTabs
          label="Notifications"
          isActive={toggleState === 3}
          onClick={() => setToggleState(3)}
        />
        <AccountTabs
          label="Payment payouts"
          isActive={toggleState === 4}
          onClick={() => setToggleState(4)}
        />
        <AccountTabs
          label="Privacy & sharing"
          isActive={toggleState === 5}
          onClick={() => setToggleState(5)}
        />
        <AccountTabs
          label="Preference"
          isActive={toggleState === 6}
          onClick={() => setToggleState(6)}
        />
      </div>
      <div className="mt-[70px]">
        <TabContent content={getContent()}/>
      </div>
    </div>
  )
}

export default AccountTabContent