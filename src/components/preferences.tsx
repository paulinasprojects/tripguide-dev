"use client";

import { useState } from "react";
import PreferredCurrencyModal from "./modals/preferred-currency-modal";
import PreferredLanguageModal from "./modals/preferred-language-modal";
import PreferredTimeZoneModal from "./modals/preferred-time-zone-modal";
import { Separator } from "@/components/ui/separator"

const Preferences = () => {
  const [openCurrencyModal, setOpenCurrencyModal] = useState<boolean>(false);
  const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);
  const [openTimeZoneModal, setOpenTimeZoneModal] = useState<boolean>(false);

  return (
    <> 
    <div className="max-sm:ml-2">
      <div className="flex mt-10 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className="text-md font-medium font-dm-sans">Preferred language</span>
          <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">English</span>
        </div>
        <div className="mx-auto">
          <button 
            className="font-font-roboto font-medium text-md text-blue100 hover:underline"
            onClick={() => setOpenLanguageModal(!openLanguageModal)}
          >
            Edit
          </button>
        </div>
    </div>
    <Separator className="my-[25px] lg:w-[680px] md:w-[500px] max-sm:w-[350px]"/>
      <div className="flex mt-10 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className="text-md font-medium font-dm-sans">Preferred currency</span>
          <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Dollar</span>
        </div>
        <div className="mx-auto">
          <button 
            className="font-font-roboto font-medium text-md text-blue100 hover:underline" 
            onClick={() => setOpenCurrencyModal(!openCurrencyModal)}
          >
            Edit
          </button>
        </div>
    </div>
    <Separator className="my-[25px] lg:w-[680px] md:w-[500px] max-sm:w-[350px]"/>
    <div className="flex mt-10 items-center">
          <span className="text-md font-medium font-dm-sans">Time zone</span>
        <div className="mx-auto">
          <button 
            className="font-font-roboto font-medium text-md text-blue100 hover:underline ml-14" 
            onClick={() => setOpenTimeZoneModal(!openTimeZoneModal)}
          >
            Edit
          </button>
        </div>
    </div>
    </div>
    <div>
      {openLanguageModal && (
        <PreferredLanguageModal setOpen={() => setOpenLanguageModal(!openLanguageModal)}/>
      )}
    </div>
    <div>
      {openCurrencyModal && (
        <PreferredCurrencyModal setOpen={() => setOpenCurrencyModal(!openCurrencyModal)}/>
      )}
    </div>
    <div>
      {openTimeZoneModal && (
        <PreferredTimeZoneModal setOpen={() => setOpenTimeZoneModal(!openTimeZoneModal)}/>
      )}
    </div>
    </>
  )
}

export default Preferences