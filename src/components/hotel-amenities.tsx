import { Wifi,Microwave, TvMinimal, Pizza, Vault, LampDesk, HandPlatter, PawPrint} from "lucide-react"

const HotelAmenities = () => {
  return (
    <div className="mt-[122px]">
       <span className="font-bold font-dm-sans text-2xl">
          Amenities
        </span>
        <div className="grid grid-cols-2 mt-[36px]">
          <div className="flex flex-col gap-[25px]">
            <span className="flex gap-[13px]">
              <Wifi/>
              Wi-fi
            </span>
            <span className="flex gap-[13px]">
              <Vault/>
              Safe
            </span>
            <span className="flex gap-[13px]">
              <LampDesk/>
              Computer Desk
            </span>
            <span className="flex gap-[13px]">
              <HandPlatter/>
              Room Service
            </span>
          </div>
          <div className="flex flex-col gap-[25px]">
            <span className="flex gap-[13px]">
              <TvMinimal/>
              Flat-screen TV
            </span>
            <span className="flex gap-[13px]">
              <Microwave/>
              Microwave
            </span>
            <span className="flex gap-[13px]">
              <Pizza/>
              Breakfast included
            </span>
            <span className="flex gap-[13px]">
              <PawPrint/>
              Pets Allowed
            </span>
          </div>
        </div>
        <div className="mt-[57px]">
          <button className="bg-[#316BFF] text-white rounded-[30px] px-4 py-2 text-md font-dm-sans font-medium">More details</button>
        </div>
    </div>
  )
}

export default HotelAmenities