import { exploreTheWorldData } from "@/lib/data";
import { Hotel, MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";


const ExploreTheWorldCard = () => {
  return (
  <>
    {exploreTheWorldData.map((data) => (
    <div className='bg-white rounded-[16px] w-[270px] h-[362px] cursor-pointer' key={data.id}>
      <div>
        <img src={data.image} alt="" className="rounded-[16px] xl:w-[242px] xl:h-[152px] lg:w-[200px] lg:h-[152px] m-3 object-cover" />
      </div>
      <div className="ml-[14px] mt-5 flex gap-2 items-center">
        <FaStar className="text-yellow-400"/>
        <span>{data.rating} ({data.votes})</span>
      </div>
      <div className="mt-4 flex justify-between mx-3">
        <div className="flex flex-col">
          <span className="text-lg font-medium font-dm-sans text-[#3B3E44]">{data.title}</span>
          <span className="text-sm font-dm-sans font-medium text-[#84878B]">{data.killomitters}{" "}km to Town Center</span>
        </div>
        <span className="w-[65px] h-[30px] text-white text-center pt-0.5 bg-blue80 text-md font-bold font-dm-sans rounded-[6px]">${data.price}</span>
      </div>
      <div className="mt-[14px] flex flex-col gap-[7px] mx-3">
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-1.5 text-[#84878B] text-sm font-dm-sans font-normal">
            <MapPin className="text-[#B1B5C3] size-6"/>
            {data.location}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-1.5 text-[#84878B] text-sm font-dm-sans font-normal">
          <Hotel className="text-[#B1B5C3] size-6"/>
          Rooms available: {data.roomsAvailable}
          </span>
        </div>  
      </div>
    </div>
    ))}
  </>
  )
}

export default ExploreTheWorldCard