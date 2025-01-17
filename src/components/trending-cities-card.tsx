import { trendingCitiesData } from "@/lib/data"
import { FaStar } from "react-icons/fa";

const TrendingCitiesCard = () => {
  return (
    <>
      {trendingCitiesData.map((city) => (
        <div key={city.id} className="bg-white rounded-[16px] lg:w-[450px] md:w-[350px] md:h-[215px] max-sm:w-[370px] max-sm:h-[221px] cursor-pointer">
          <div className="flex  gap-[30px] mt-[23px] ml-[24px]">
            <img src={city.image} alt="" className="w-[160px] h-[168px] rounded-[20px] object-cover" />
            <div className="flex flex-col gap-2.5">
              <span className="font-bold lg:text-headlineFour max-sm:text-lg font-dm-sans md:text-md">{city.title}</span>
              <div className="mt-5 flex gap-2 items-center">
                <FaStar className="text-yellow-400"/>
                <span className="text-md text-[#3B3E44] font-normal font-dm-sans">{city.rating} ({city.votes})</span>
              </div>
              <span className="text-[25px] font-semibold font-font-poppins">${city.price}
                <span className="font-font-poppins text-md font-medium">/night</span>
              </span>
              <div className="">
                <button className="bg-blue80 rounded-[8px] text-white w-[99px] h-[33px] text-md font-bold font-dm-sans hover:bg-blue60">Book now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TrendingCitiesCard