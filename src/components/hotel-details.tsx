import { FaStar } from 'react-icons/fa';
import { Flag } from 'lucide-react';

const HotelDetails = () => {
  return (
    <div className='mt-[25px] flex flex-col gap-[25px] xl:ml-[100px] lg:ml-[20px] mb-10 max-sm:ml-5'>
        <h3 className='text-headlineOne max-sm:text-[28px] font-medium font-font-roboto'>Entire rental unit in Opfikon</h3>
        <div className='flex gap-5'>
          <div className='flex gap-1.5 items-center'>
          <FaStar className='text-yellow-400'/>
          <span className='font-font-roboto font-medium text-sm'>4.8</span>
          <span className='font-font-roboto font-medium text-sm text-[#84878B]'>(122 reviews)</span>
          </div>
          <div className='flex gap-1.5 items-center'>
            <Flag className='size-3.5 text-[#84878B]'/>
            <span className='text-[#84878B] font-font-roboto font-normal text-sm'>
              Zurich, Switzerland
            </span>
          </div>
        </div>
      </div>
  )
}

export default HotelDetails