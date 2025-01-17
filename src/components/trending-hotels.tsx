import { trendingHotels } from "@/lib/data";
import { FaStar } from "react-icons/fa";

const images = [
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737107025/1_hiroxg.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737107056/2_eka930.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737107080/3_rqlibq.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737107099/4_mqb6ih.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1737107131/5_osw5ze.png",
]

const TrendingHotels = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 cursor-pointer">
        <span className='text-headlineOne font-bold font-dm-sans  mb-[20px] max-sm:text-xl max-sm:ml-5'>Trending Hotels</span>
        <div className="lg:flex max-sm:flex items-center gap-[30px] max-sm:flex-col lg:flex-row md:grid md:grid-cols-2">
          {trendingHotels.map((hotel) => (
            <div className="bg-white md:w-[270px] md:h-[316px] max-sm:w-[350px] max-sm:h-[400px] rounded-[17px]" key={hotel.id}>
              <div className="my-[17px] mx-[17px] flex flex-col">
                <img src={hotel.image} alt="" className="rounded-[8px]" />
                <div className="flex flex-col mt-[12px] gap-2">
                  <span className="text-xl font-medium font-dm-sans">{hotel.name}</span>
                  <div className="flex gap-1.5 items-center">
                    <FaStar className="text-[#FFC542]"/>
                    <span className="text-sm text-[#84878B] font-medium font-dm-sans">{hotel.rating} ({hotel.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center xl:gap-[16px] max-sm:gap-[16px] md:gap-[16px] lg:gap-[25px] mt-[22px]">
                    <div className="flex">
                      {/* images */}
                      {images.map((image, index) => (
                        <img src={image} alt="" key={index} className="-m-1 size-6 object-cover rounded-full" />
                      ))}
                    </div>
                    <span className="text-[12px] font-font-roboto font-medium text-[#84878B]">50+ go in this hotel</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingHotels