import { selectRoomData } from "@/lib/data"
import { Check } from "lucide-react"

const SelectRoom = () => {
  return (
    <div>
      <div className='flex flex-col mb-[70px]'>
        <span className='text-headlineTwo font-bold font-dm-sans  mb-[20px]'>Select Room</span>
        <div className="flex flex-col gap-[30px]">
          {selectRoomData.map((room) => (
            <div className="bg-white lg:w-[964px] md:w-[700px] h-[209px] rounded-[10px] px-[26px] py-[22px]" key={room.id}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2.5">
                  <span className="text-headlineFour font-medium font-dm-sans">{room.name}</span>
                  <span className="text-sm font-dm-sans font-normal text-[#84878B]">Offer conditions:</span>
                  <div className="flex flex-col">
                  {room.offer.map((offer, index) => (
                    <div className="flex flex-col" key={index}>
                     <span className="flex gap-0.5 items-center text-sm font-dm-sans font-normal">
                     <Check className="text-[#03A782]"/>
                     {offer}
                     </span>
                    </div>
                  ))}
              
                </div>
                </div>
                <div>
                  <span className="text-headlineThree font-bold font-dm-sans">${room.price}</span>
                  <span className="text-xl font-normal font-dm-sans text-[#84878B]">/night</span>
                  <div className="flex flex-col items-center">
                    <span className="ml-auto text-[#FFAF4E] font-medium font-dm-sans">Save ${room.discount}</span>
                    <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">on TripGuide.com ${room.onSite}</span>
                    <button className="ml-auto mt-[19px] text-lg text-white font-medium font-dm-sans bg-[#316BFF] rounded-[10px] px-3 py-2">Select</button>
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

export default SelectRoom