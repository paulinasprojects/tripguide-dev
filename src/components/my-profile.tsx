import Image from 'next/image'
import profileimage from '/public/profile.png'
import { Check, Pencil } from 'lucide-react'
import { Separator } from './ui/separator'

const MyProfile = () => {
  return (
    <div className="bg-white rounded-[10px]">
      <div className="px-[25px] py-[31px]">
        <div className='relative xl:pl-[62px] lg:pl-0 max-sm:pl-[62px]'>
          <Image
            src={profileimage}
            alt='image'
          />
          <div className='absolute bottom-0 right-16 max-sm:right-28 bg-[#F4F5F6] rounded-full size-10 border-[2px] border-[#E7ECF3] cursor-pointer'>
            <Pencil className='size-5 mt-2 ml-2'/>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[24px] mt-5'>
          <span className='xl:text-headlineThree lg:text-headlineFour font-bold font-dm-sans'>Jonathan Doe</span>
          <span className='flex items-center gap-2 text-[#777E90] text-sm font-normal font-dm-sans bg-[#F4F5F6] rounded-[32px] lg:whitespace-nowrap px-8 py-2.5'>
            <Check className='text-[#4A4E54]'/>
            Identity verified
          </span>
        </div>
        <Separator className='my-[24px]'/>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-medium font-dm-sans'>From</span>
            <span className='text-[#84878B] text-sm font-medium font-dm-sans'>United States</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-medium font-dm-sans'>Member Since</span>
            <span className='text-[#84878B] text-sm font-medium font-dm-sans'>05.06.2021</span>
          </div>
        </div>
        <div className='mt-[47px] ml-2'>
          <button className='flex items-center justify-center gap-[13px] bg-[#878CFF] rounded-[20px] xl:px-20 lg:px-5 md:px-5 max-sm:px-5 py-2 text-[12px] text-white font-medium font-font-roboto'>
            Edit My Data
            <Pencil className='size-[12px]'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile