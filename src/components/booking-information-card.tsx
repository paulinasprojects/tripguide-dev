import { FaStar } from "react-icons/fa"
import { Separator } from "./ui/separator"

const BookingInformationCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-[14px]">
        <span className="text-lg font-medium font-dm-sans">Switzerland Hotels and Places to Stay </span>
        <div className="flex items-center gap-1.5">
        <FaStar className="text-[#FFC542] size-5"/>
        <div className="flex gap-0.5">
          <span className="text-sm font-medium font-dm-sans mr-1">4.8</span>
          <span className="text-sm font-medium font-dm-sans text-[#84878B]">(122 reviews)</span>
        </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1730892184/image_jeuiyq.png" alt="" />
      </div>
      <div className="mt-[23px]">
        <span className="text-md font-medium font-dm-sans text-[#84878B]">1 bedroom - 1 private room</span>
      </div>
      <div className="mt-[15px] mb-5">
        <Separator className="w-[210px]"/>
      </div>
      <div className="flex items-center gap-[98px]">
        <div className="flex flex-col">
          <span className="text-[#B1B5C3] text-sm font-medium font-dm-sans">Check in</span>
          <span className="text-[#84878B] text-md font-medium font-dm-sans">June 27, 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#B1B5C3] text-sm font-dm-sans font-medium">Check out</span>
          <span className="text-[#84878B] text-md font-medium font-dm-sans">June 30, 2024</span>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <span className="text-[#B1B5C3] text-sm font-medium font-dm-sans">Guest</span>
        <span className="text-[#84878B] text-md font-medium font-dm-sans">2 guests</span>
      </div>
      <div className="mt-[30px]">
        <span className="text-[26px] font-medium font-font-roboto">Booked details</span>
        <div className="flex justify-between mt-5">
          <span className="text-md font-medium font-dm-sans text-[#84878B]">$119  +  5nights</span>
          <span className="text-md font-medium font-dm-sans">$833</span>
        </div>
        <div className="flex justify-between mt-5">
          <span className="text-md font-medium font-dm-sans text-[#84878B]">Ocupancy text and fee</span>
          <span className="text-md font-medium font-dm-sans">-$125</span>
        </div>
        <div className="flex justify-between mt-5">
          <span className="text-md font-medium font-dm-sans text-[#84878B]">Service fee</span>
          <span className="text-md font-medium font-dm-sans">$103</span>
        </div>
        <div className="flex justify-between mt-5 bg-[#F4F5F6] py-2 px-4 rounded-[6px]">
          <span className="text-md font-medium font-dm-sans">Total</span>
          <span className="text-md font-medium font-dm-sans">$833</span>
        </div>
        <div className="mt-[30px] text-center">
          <span className="text-[#B1B5C3] text-sm font-medium font-dm-sans">Report this property</span>
        </div>
      </div>
    </div>
  )
}

export default BookingInformationCard