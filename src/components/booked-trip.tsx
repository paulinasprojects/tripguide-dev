"use client";

import { useRouter } from 'next/navigation';
import { Wallet, CircleDollarSign, Calendar, SquareCode } from 'lucide-react';
import { FaStar, } from 'react-icons/fa';
import { Separator } from './ui/separator';

const BookedTrip = () => {
  const router = useRouter();

  return (
    <div>
      <div className='flex flex-col gap-[22px]'>
        <span className='font-dm-sans font-bold text-[25px]'>Congratulations!</span>
        <span className='text-headlineOne font-medium font-dm-sans'>Your trip has been booked!</span>
      </div>
      <Separator className='mt-[22px] mb-[37px] lg:w-[607px] md:w-[350px] max-sm:w-[350px]'/>
        <span className='text-headlineThree font-bold font-dm-sans'>Switzerland Hotels and Places to Stay </span>
      {/* Flex container */}
        <div className='flex gap-[58px] lg:flex-row md:flex-col max-sm:flex-col'>
          {/* Left */}
        <div className='max-sm:order-2'>
        <div className='flex gap-[37px] mt-[24px]'>
          <div className='flex items-center gap-1.5'>
          <FaStar className="text-[#FFC542] size-5"/>
          <div className="flex gap-0.5">
            <span className="text-sm font-medium font-dm-sans mr-1">4.8</span>
            <span className="text-sm font-medium font-dm-sans text-[#777E90]">(122 reviews)</span>
          </div>
          </div>
            <div>
            <span className="text-sm font-medium font-dm-sans">1 bedroom + 1 private room</span>
            </div>
        </div>
        <Separator className='mt-[22px] mb-[24px] w-[380px]'/>
        <div className='mt-[24px] flex gap-10'>
          <div className='flex flex-col bg-[#F4F4F6] rounded-[12px] px-4 py-2'>
            <span className='text-sm font-medium font-dm-sans'>Dates</span>
            <span className='text-[#84878B] text-md font-dm-sans font-medium'>May 15 - 22, 2021</span>
          </div>
          <div className='flex flex-col bg-[#F4F4F6] rounded-[12px] px-6 py-2'>
            <span className='text-sm font-medium font-dm-sans'>Travelers</span>
            <span className='text-[#84878B] text-md font-dm-sans font-medium'>1 passanger</span>
          </div>
        </div>
        <div className='mt-[30px] bg-[#F4F4F6]'>
          <div className='px-[25px] py-[19px]'>
            <span className='text-[26px] font-bold font-dm-sans'>Reserve Details</span>
            <div className='flex flex-col mt-[23px] gap-[23px]'>
              <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-[#84878B]'>
                  <SquareCode className='size-4'/>
                  Booking code
                </span>
                <span className='text-md font-medium font-dm-sans'>FD_158456</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-[#84878B]'>
                  <Calendar className='size-4'/>
                  Date
                </span>
                <span className='text-md font-medium font-dm-sans'>30 Apr, 2021</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-[#84878B]'>
                  <CircleDollarSign className='size-4'/>
                  Total
                </span>
                <span className='text-md font-medium font-dm-sans'>$833</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-[#84878B]'>
                  <Wallet className='size-4'/>
                  Payment method
                </span>
                <span className='text-md font-medium font-dm-sans'>Credit card</span>
              </div>
            </div>
          </div>
        </div>
          <div className='mt-[30px]'>
            <button className='bg-[#316BFF] text-white rounded-[30px] px-6 py-5 text-lg font-bold font-dm-sans' onClick={() => router.push("/")}>Go To Your Home</button>
          </div>
          </div>
          {/* Right */}
          <div className='mt-[52px] max-sm:order-1'>
              <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1730899666/image_rlotmb.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default BookedTrip