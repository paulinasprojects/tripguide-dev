/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { searchHotelsData, accomodationsData } from "@/lib/data";
import { TbPlane } from "react-icons/tb";
import { Calendar, Flag, MapPin } from "lucide-react";

const SearchHotelCard = () => {
  return (
    <div className="flex flex-col gap-10 ">
      {searchHotelsData.map((data) => (
      <div key={data.id} className="border-[1px] border-slate-200 rounded-[20px] pr-10">
        <div className="flex gap-[30px] xl:flex-row max-sm:flex-col lg:flex-col">
          <img src={data.image} alt="" />
          <div className="flex flex-col  pt-10 ">
          <h3 className="text-headlineTwo font-bold font-dm-sans">{data.name}</h3>
          <div className="mt-5 flex gap-2 items-center">
            <FaStar className="text-yellow-400"/>
            <span className="text-sm font-medium font-dm-sans">{data.rating}</span>
            <span className="text-sm text-[#84878B] font-medium font-dm-sans">({data.reviews} reviews)</span>
            <span className="flex items-center gap-2 text-[#84878B] text-sm font-normal font-dm-sans">
              <Flag className="size-4 ml-5"/>
              {data.location}
            </span>
          </div>
          <div className="flex gap-5 mt-10">
            <span className="flex items-center gap-2 text-md font-dm-sans font-normal">
              <MapPin className="text-[#84878B] size-6"/>
              {data.hotelName}
            </span>
            <span className="flex items-center gap-2 text-md font-dm-sans font-normal">
              <Calendar className="text-[#84878B] size-6"/>
              {data.dates}
            </span>
          </div>
          <div className="mt-[16px]">
            <span className="flex items-center gap-2 text-md font-dm-sans font-normal">
              <TbPlane className="size-6 text-[#84878B]"/>
              Departure from {data.departure}
            </span>
          </div> 
          <div className="flex items-center justify-between mt-[41px]">
            <div className="flex flex-col gap-1.5">
            {accomodationsData.map((data, index) => (
              <div key={index} className="">
                <span className="flex items-center gap-2.5 text-sm font-dm-sans font-normal">
                  <Image src={data.icon} alt="icon" className="size-3.5"/>
                  {data.name}
                </span>
              </div>
            ))}
            </div>
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center gap-1.5">
                <span className="text-[28px] font-bold font-dm-sans">${data.price}</span> 
                <span className="text-md font-dm-sans text-[#84878B]">For Two</span>
              </div>
              <button className="bg-blue100 text-white rounded-[30px] px-7 py-3 text-xl font-medium font-dm-sans">Book now</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      ))}
      <div className="my-14 text-center">
        <button className="border-[1px] border-[#B1B5C3] rounded-[47px] px-14 py-2 text-md font-medium font-dm-sans">View All</button>
      </div>
    </div>
  )
}

export default SearchHotelCard