import { topTourCardData } from "@/lib/data"

const TopTourCard = () => {
  return (
    <div className='flex md:flex-row xl:gap-[30px] lg:gap-5 md:gap-5 items-center justify-center mt-[50px] max-sm:flex-col max-sm:gap-5 md:px-5 lg:px-0'>
      {topTourCardData.map((data) => (
      <div className="relative" key={data.id}>
        <img src={data.image} alt="" className="xl:w-[370px] md:w-[300px] xl:h-[495px] md:h-[408px] max-sm:h-[495px] max-sm:w-[335px] rounded-[20px] object-cover cursor-pointer" />
        <span className="absolute top-5 left-5 px-6 py-2 bg-[#141416]/40 text-white100 rounded-[20px] text-xl font-medium font-dm-sans">{data.country}</span>
        <span className="absolute bottom-10 left-5 text-white100 text-headlineThree font-bold font-dm-sans">{data.city}</span>
        <span className="absolute bottom-5 left-5 text-white100 font-normal text-md">10 Popular Places</span>
      </div>
      ))}
    </div>
  )
}

export default TopTourCard