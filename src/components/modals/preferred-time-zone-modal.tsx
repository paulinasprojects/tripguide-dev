"use client";
import { useState } from "react";
import { X } from "lucide-react";
import TimezoneSelect, { type ITimezone } from "react-timezone-select"

interface Props {
  setOpen: () => void;
}

const PreferredTimeZoneModal = ({setOpen}: Props) => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

  return (
    <div>
      <div className="modal-background">
        <div className="modal-container | w-[578px] h-[259px]">
          <div className="mx-[30px] md:mt-[26px] max-sm:mt-5">
            <div className="flex items-center justify-between">
              <span className="text-xl font-dm-sans font-medium text-[#3B3E44]">Time Zone</span>
              <X className="size-4 cursor-pointer" onClick={setOpen}/>
            </div>
            <div className="mt-5">
              <span className="text-sm font-normal font-font-roboto text-[#84878B]">This updates what your timezone on Tripguide.</span>
            </div>
            <div className="mt-[30px]">
              <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} className="w-[356px] h-[48px] rounded-[10px]  !text-[#84878B] !font-normal !font-dm-sans" placeholder="Time zone" />
            </div>
            <div className="mt-[17px]">
              <button className="rounded-[6px] text-white bg-[#2756cc] px-5 py-2 text-md font-bold font-dm-sans hover:bg-black" onClick={setOpen}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferredTimeZoneModal