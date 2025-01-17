import Image from "next/image"

const CanceledBookings = () => {
  return (
     <div className="bg-white  rounded-[20px]">
          <div className="lg:mx-[37px] md:mx-5 max-sm:mx-5 py-4">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="flex gap-[24px] max-sm:flex-col">
            <Image
              src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1731494766/booking-image_iwj5nj.png"
              alt="booking-image"
              className="object-cover rounded-[5px]"
              width={146}
              height={100}
            />
            <div className="flex flex-col gap-[3px]">
            <span className="lg:text-headlineFour font-medium font-dm-sans md:text-lg">Baan Wanglang Riverside</span>
            <span className="lg:text-xl font-normal font-dm-sans text-[#84878B] md:text-lg">342 Soi Wat Rakang, Prannok Rd, Siriral, Bankoknoi, Bangkok,<br />
            Thailand</span>
            </div>
              </div>
              <span className="lg:text-lg md:text-md font-medium font-dm-sans">Canceled on April 11,2024</span>
            </div>
          </div>
        </div>
  )
}

export default CanceledBookings