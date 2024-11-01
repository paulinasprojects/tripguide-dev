import React from 'react'

const HotelExtraFeatures = () => {
  return (
    <div className='flex flex-col gap-[11px]'>
      <div>
        <label htmlFor="" className='text-md text-[#84878B] font-medium font-dm-sans'>Extra Features</label>
      </div>
      <div className='flex items-center gap-2.5'>
        <input type="checkbox" id="checkbox" className="size-[18px] rounded-[7px] accent-blue80" />
        <label htmlFor="checkbox" className="text-sm font-normal font-dm-sans">Allow to bring pet</label>
        <span className='ml-auto font-medium font-font-roboto text-sm text-[#B1B5C3]'>$13</span>
      </div>
      <div className='flex items-center gap-2.5'>
        <input type="checkbox" id="checkbox" className="size-[18px] rounded-[7px] accent-blue80" />
        <label htmlFor="checkbox" className="text-sm font-normal font-dm-sans">Breakfast a day per person</label>
        <span className='ml-auto font-medium font-font-roboto text-sm text-[#B1B5C3]'>$10</span>
      </div>
      <div className='flex items-center gap-2.5'>
        <input type="checkbox" id="checkbox" className="size-[18px] rounded-[7px] accent-blue80" />
        <label htmlFor="checkbox" className="text-sm font-normal font-dm-sans">Parking a day</label>
        <span className='ml-auto font-medium font-font-roboto text-sm text-[#B1B5C3]'>$6</span>
      </div>
      <div className='flex items-center gap-2.5'>
        <input type="checkbox" id="checkbox" className="size-[18px] rounded-[7px] accent-blue80" />
        <label htmlFor="checkbox" className="text-sm font-normal font-dm-sans">Extra pillow</label>
        <span className='ml-auto font-medium font-font-roboto text-sm text-[#B1B5C3]'>Free</span>
      </div>
    </div>
  )
}

export default HotelExtraFeatures