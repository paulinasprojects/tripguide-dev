import { FaStar, FaStarHalf } from "react-icons/fa"

const HotelCategories = () => {
  return (
    <div className="ml-[100px] mb-10  max-sm:ml-5">
     <div className="flex gap-[14px] items-center">
      <span className="text-[#38B245] text-sm bg-[#d6e1d6] rounded-[5px] p-1 font-dm-sans font-medium">5.0</span>
      <span className="text-[#FD9704] text-sm bg-[#e8decf] rounded-[5px] font-dm-sans font-medium p-1">Perfect</span>
      <span className="bg-[#EAEEFA] text-sm text-[#0B3BA7] rounded-[5px] font-medium font-dm-sans p-1">Hotels</span>
      <span className="bg-[#FCEBF1] text-sm text-[#E96594] rounded-[5px] font-medium font-dm-sans p-1">Building</span>
      <span className="bg-[#FBEEE8] text-sm text-[#DC6E3D] rounded-[5px] font-medium font-dm-sans p-1">Top Value</span>
     <div className="ml-[25px] flex gap-2.5 items-center max-sm:ml-2 max-sm:hidden">
      <FaStar className="text-yellow-500 size-6"/>
      <FaStar className="text-yellow-500 size-6"/>
      <FaStar className="text-yellow-500 size-6"/>
      <FaStar className="text-yellow-500 size-6"/>
      <FaStarHalf className="text-yellow-500 size-6"/>
     </div>
     </div>
    </div>
  )
}

export default HotelCategories