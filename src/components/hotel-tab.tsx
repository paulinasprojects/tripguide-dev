import { DatePicker } from './ui/date-time-picker'
import { Button } from './ui/button'

const Hoteltab = () => {
  return (
    <div className='flex gap-3 mt-4 max-sm:flex-col'>
      <input className='lg:w-[332px] md:w-[165px] md:h-[70px] max-sm:w-[295px] max-sm:h-[60px] bg-[#f4f5f7] p-5 rounded-[8px] max-sm:mt-2.5' placeholder='Where are you going?'/>
      <div className='flex gap-2'>
      <div className='relative'>
        <label htmlFor="" className='absolute top-2 left-4 text-lg font-medium font-dm-sans'>Check in</label>
        <DatePicker/>
      </div>
      <div className='relative'>
        <label className="absolute top-2 left-4 text-lg font-medium font-dm-sans">Check out</label>
        <DatePicker/>
      </div>
      </div>
      <div className='lg:ml-[54px] md:mt-0 max-sm:ml-0 max-sm:mt-2.5'>
      <Button className='w-[150px] h-[70px] max-sm:w-[295px] max-sm:h-[48px] rounded-[10px] bg-[#316BFF] text-xl font-medium font-dm-sans cursor-pointer'>Search</Button>
      </div>
    </div>
  )
}

export default Hoteltab