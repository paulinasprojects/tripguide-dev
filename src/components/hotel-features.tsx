import { Wifi, Bath, Utensils,Bed, Grid2X2 } from "lucide-react"

const HotelFeatures = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-[30px]">
        <span className="font-bold font-dm-sans text-2xl">
          Hotel features
        </span>
        <div className="flex gap-[48px] items-center max-sm:gap-3">
          <span className="flex items-center gap-[9px] text-md font-font-roboto font-normal max-sm:text-sm">
            <Wifi/>
              Wi-fi
          </span>
          <span className="flex items-center gap-[9px] text-md font-font-roboto font-normal max-sm:text-sm">
            <Bath/>
              Bathtub
          </span>
          <span className="flex items-center gap-[9px] text-md font-font-roboto font-normal max-sm:text-sm">
            <Utensils/>
              Breakfast
          </span>
          <span className="flex items-center gap-[9px] text-md font-font-roboto font-normal max-sm:text-sm">
            <Bed/>
              Kids bed
          </span>
          <span className="flex items-center gap-[9px] text-md font-font-roboto font-normal max-sm:text-sm">
            <Grid2X2/>
            4m x 6m
          </span>
        </div>
      </div>
    </div>
  )
}

export default HotelFeatures