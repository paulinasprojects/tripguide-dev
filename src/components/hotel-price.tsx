"use client";
import { useRouter } from "next/navigation";

const HotelPrice = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[5px]">
      <div>
        <label htmlFor="" className='text-md text-[#84878B] font-medium font-dm-sans'>Price</label>
      </div>
      <div className="bg-[#F4F5F6] p-5 rounded-[10px]">
        <div className="flex flex-col  gap-[14px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal font-dm-sans">1 Nights</span>
          <span className="text-sm font-font-roboto font-normal text-[#353945]">$500</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal font-dm-sans">Discount 20%</span>
          <span className="text-sm font-font-roboto font-normal text-[#353945]">$200</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal font-dm-sans">Breakfast a day per person</span>
          <span className="text-sm font-font-roboto font-normal text-[#353945]">$10</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal font-dm-sans">Service fee</span>
          <span className="text-sm font-font-roboto font-normal text-[#353945]">$5</span>
        </div>
        </div>
      </div>
      <div className="mt-[19px] flex justify-between items-center">
        <span className="text-md font-medium text-[#777e90] font-dm-sans">Total payment</span>
        <span className="font-font-roboto font-medium text-md text-[#353945]">$300</span>
      </div>
      <div className="mt-5 text-center">
        <button className="text-white bg-[#2756cc] rounded-[10px] text-xl font-medium font-dm-sans px-[100px] py-3" onClick={() => router.push("/confirm-your-booking")}>Book Now</button>
      </div>
    </div>
  )
}

export default HotelPrice