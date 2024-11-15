import Image from "next/image"
import { DollarSign } from "lucide-react";
import OrangeCurrency from '/public/orange-currency.svg';
import { Separator } from "../ui/separator";

const Bookings = () => {
  return (
    <div>
      <span className="uppercase text-[13px] font-font-roboto font-normal text-[#84878B]">22 Jan 2024</span>
      <div className="flex justify-between items-center mt-[17px]">
        <div className="flex gap-[19px] items-center">
          <div className="w-[66px] h-[66px] max-sm:w-[50px] max-sm:h-[50px] rounded-full bg-[#ebf1ff] flex items-center justify-center">
            <DollarSign className="text-blue100"/>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-lg font-medium font-dm-sans">Booking</span>
            <span className="text-[#84878B] text-lg font-dm-sans font-normal">Booking ID
              <span className="ml-1.5 text-[#353945]">NR710746375497578453</span>
            </span>
            <span className="flex gap-2 mt-[12px] text-[#84878B] text-md font-normal font-dm-sans">
              <Image src={OrangeCurrency} alt="currency" width={24} height={24}/>
              My Cash Debited
            </span>
          </div>
        </div>
          <span className="text-lg font-medium font-dm-sans">$526</span>
      </div>
      <Separator className="mt-[31px] mb-[28px]"/>
      <div className="flex justify-between items-center mt-[17px]">
        <div className="flex gap-[19px] items-center">
          <div className="w-[66px] h-[66px] max-sm:w-[50px] max-sm:h-[50px] rounded-full bg-[#ebf1ff] flex items-center justify-center">
            <DollarSign className="text-blue100"/>
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-lg font-medium font-dm-sans">Booking</span>
            <span className="text-[#84878B] text-lg font-dm-sans font-normal">Booking ID
              <span className="ml-1.5 text-[#353945]">NR710746375497578453</span>
            </span>
            <span className="flex gap-2 mt-[12px] text-[#84878B] text-md font-normal font-dm-sans">
              <Image src={OrangeCurrency} alt="currency" width={24} height={24}/>
              My Cash Debited
            </span>
          </div>
        </div>
          <span className="text-lg font-medium font-dm-sans">$40</span>
      </div>
    </div>
  )
}

export default Bookings