"use client";

import { useState } from "react";
import TabContent from "./tab-content";
import AccountTabs from "./account-tabs";
import PersonalInfo from "./personal-info";
import Security from "./security";
import Notifications from "./notifications";
import PaymentPayout from "./payment-payout";
import PrivacyAndSharing from "./privacy-and-sharing";
import Preferences from "./preferences";

const AccountTabContent = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const getContent = () => {
    switch (toggleState) {
      case 1: 
      return <PersonalInfo/>;
      case 2: 
      return <Security/>;
      case 3: 
      return <Notifications/>;
      case 4: 
      return <PaymentPayout/>;
      case 5: 
      return <PrivacyAndSharing/>;
      case 6: 
      return <Preferences/>;
      default: 
      return null
    }
  };


  return (
    <div>
      <div className="lg:flex max-sm:flex gap-[65px] max-sm:flex-col md:grid md:grid-cols-2 md:gap-[30px] max-sm:gap-10">
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
          label="Preferences"
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