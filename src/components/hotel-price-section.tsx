import { Separator } from "./ui/separator";
import { DatePicker } from "./ui/date-time-picker";
import HotelGuests from "./hotel-guests";
import HotelExtraFeatures from "./hotel-extra-features";
import HotelPrice from "./hotel-price";

const HotelPriceSection = () => {
  return (
    <div className='bg-white w-[407px] h-[846px] max-sm:h-[838px] max-sm:w-[335px] rounded-[20px]'>
      <div className="py-[26px] px-[45px] max-sm:px-[12px]">
        <div className="flex gap-[63px] items-center">
          <div className="flex gap-1.5 items-center">
            <span className="text-headlineThree font-bold font-dm-sans max-sm:text-headlineFour">$102</span>
            <span className="text-xl font-normal font-dm-sans text-[#84878B]">/night $119</span>
          </div>
          <div>
            <span className="rounded-[30px] bg-[#316BFF] text-white px-3 py-2 text-sm font-medium font-dm-sans">20% off</span>
          </div>
        </div>
          <Separator className="my-[18px]"/>
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[11px]">
              <label htmlFor="" className="text-md text-[#84878B] font-medium font-dm-sans">Check-in</label>
              <DatePicker className="md:w-[160px] h-[46px] rounded-[10px]"/>
            </div>
            <div className="flex flex-col gap-[11px]">
              <label htmlFor="" className="text-md text-[#84878B] font-medium font-dm-sans">Check-out</label>
              <DatePicker  className="md:w-[160px] h-[46px] rounded-[10px]"/>
            </div>
          </div>
          <div className="mt-[18px]">
            <HotelGuests/>
          </div>
          <div className="mt-[18px]">
            <HotelExtraFeatures/>
          </div>
          <div className="mt-[21px]">
            <HotelPrice/>
          </div>
      </div>
    </div>
  )
}

export default HotelPriceSection