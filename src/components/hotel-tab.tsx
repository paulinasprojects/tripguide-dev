"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { DatePicker } from '@/components/ui/date-time-picker'
import {  
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button'

const Hoteltab = () => {
  const [selectedItem, setSelectedItem] = useState("Where are you going?");
  const router = useRouter();

  const handleSelect = (location: string) => {
    setSelectedItem(location);
  };

  return (
    <>
    <div className='flex gap-3 mt-4 max-sm:flex-col'>
      <DropdownMenu>
        <DropdownMenuTrigger className=''>
          <input className='lg:w-[250px] md:w-[165px] md:h-[70px] max-sm:w-[305px] max-sm:h-[60px] bg-[#f4f5f7] p-5 rounded-[8px] max-sm:mt-2.5' placeholder={selectedItem} readOnly/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='center'>
          <DropdownMenuItem onClick={() => handleSelect("Dubai")} >
            <div className='flex items-center gap-2'>
              <MapPin className="size-6 text-[#B1B5C3]"/>
              <div className='flex flex-col'>
                <span className="text-md text-[#777E90] font-medium font-dm-sans">Dubai</span>
                <span className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Dubai Emirates, United Arab Emirates</span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem  onClick={() => handleSelect("Doha")}>
            <div className='flex items-center gap-2'>
              <MapPin className="size-6 text-[#B1B5C3]"/>
              <div className='flex flex-col'>
                <span className="text-md text-[#777E90] font-medium font-dm-sans">Doha</span>
                <span className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Qatar</span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem  onClick={() => handleSelect("Darling Harbour")}>
            <div className='flex items-center gap-2'>
              <MapPin className="size-6 text-[#B1B5C3]"/>
              <div className='flex flex-col'>
                <span className="text-md text-[#777E90] font-medium font-dm-sans">Darling Harbour</span>
                <span className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Sydney, New South Wales, Australia</span>
              </div>
            </div>
          </DropdownMenuItem >
          <DropdownMenuItem onClick={() => handleSelect("Dubai International Airport")}>
            <div className='flex items-center gap-2'>
              <MapPin className="size-6 text-[#B1B5C3]"/>
              <div className='flex flex-col'>
                <span className="text-md text-[#777E90] font-medium font-dm-sans">Dubai International Airport</span>
                <span className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Dubai Emirates, United Arab Emirates</span>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='flex md:gap-2 max-sm:gap-7'>
      <div className='relative'>
        <label htmlFor="" className='absolute top-1 left-4 text-md  font-medium font-dm-sans'>Check in</label>
        <DatePicker/>
      </div>
      <div className='relative'>
        <label className="absolute top-1 left-4 text-md font-medium font-dm-sans">Check out</label>
        <DatePicker/>
      </div>
      </div>
      <div className='lg:ml-[54px] md:mt-0 max-sm:ml-0 max-sm:mt-2.5 relative '>
      <Button className='w-[150px] h-[70px] max-sm:w-[295px] max-sm:h-[48px] rounded-[10px] bg-[#316BFF] text-xl font-medium font-dm-sans cursor-pointer' onClick={() => router.push("/search")}>Search</Button>
      </div>
    </div>
    </>
  )
}

export default Hoteltab