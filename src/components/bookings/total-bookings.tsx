import Image from "next/image";

const TotalBookings = () => {
  return (
   <div>
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
          <span className="lg:text-lg md:text-md font-medium font-dm-sans">Booked on April 8,2024</span>
        </div>
      </div>
    </div>
    <div className="mt-[32px] bg-white rounded-[20px]">
      <div className="lg:mx-[42px] md:mx-5 max-sm:mx-5 py-[24px]">
        {/* Flex container */}
        <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
          {/* Left */}
            <div className="flex flex-col items-start gap-[9px] max-sm:order-2">
              <div className="flex items-center gap-[9px]">
                <span className="font-font-roboto font-medium text-lg">Booking ID:</span>
                <span className="font-font-roboto font-medium text-lg">9246940</span>
              </div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-medium">Check-in:</span>
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-normal">April 8, 2024</span>
              </div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-medium">Check-out:</span>
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-normal">April 9, 2024</span>
              </div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-medium">Room type:</span>
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-normal">Superior Double or Twin Room Only</span>
              </div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-medium">Number of Rooms</span>
                <span className="text-[#84878B] lg:text-xl md:text-lg font-dm-sans font-normal">1</span>
              </div>
            </div>
          {/* Right */}
            <div className="flex flex-col items-center gap-[12px] max-sm:items-start max-sm:order-1">
              <span className="text-headlineFour font-medium font-dm-sans">USD 1,950.00</span>
              <span className="text-md font-font-roboto font-normal text-[#6c94fe]">Booking Conditions</span>
              <button className="bg-[#F4F5F6] rounded-[10px] text-[#3B3E44] text-xl font-normal font-dm-sans px-11 py-2">Manage booking</button>
              <button className="rounded-[10px] text-white text-xl font-bold font-dm-sans px-16 py-2 bg-[#316BFF]">Book again</button>
            </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default TotalBookings