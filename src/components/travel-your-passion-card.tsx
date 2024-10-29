import { travelYourPassionData } from "@/lib/data"
import { FaStar } from "react-icons/fa"

const TravelYourPassionCard = () => {
  return (
    <>
      {travelYourPassionData.map((data) => (
        <div key={data.id}>
          <div className="relative">
            <img src={data.image} alt="" className="xl:w-[270px] xl:h-[324px] md:w-[250px] md:h-[300px] max-sm:w-[270px] max-sm:h-[324px] rounded-[20px] object-cover" />
            <div className="">
              <span className="absolute bottom-10 left-5 text-white text-headlineFour font-dm-sans font-bold">{data.title}</span>
              <div className="absolute bottom-4 left-5">
                <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400"/>
              <span className="text-sm text-white font-dm-sans font-normal">{data.rating} {" "}
                 ({data.reviews}{" "}reviews)
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TravelYourPassionCard