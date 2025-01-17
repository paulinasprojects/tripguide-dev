/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Passangers = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

   // Calculate total count
   const totalCount = adults + children + infants;

   const increment = (setter: (arg0: any) => any, value: number) => setter(value + 1);
   const decrement = (setter: (arg0: number) => void, value: number) => {
     if (value > 0) setter(value - 1);
   };
   


  return (
    <div className='cursor-pointer'>
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className='text-[#3B3E44] flex items-center gap-2 text-lg font-medium font-dm-sans mt-1.5'>
              {totalCount} Passengers
              <ChevronDown/>
            </span>
          </div>
          {isDropdownOpen && (
          <div className='bg-white p-2 absolute rounded-[16px] md:right-0 max-sm:right-0'>
            <div>
              <div className='flex items-center'>
                <div className='flex flex-col xl:w-[295px] xl:h-[47px] my-[13px] mx-[29px]'> 
                  <span className=''>Adults</span>
                  <span>Age 13 or above</span>
                </div>
                  <div className='flex items-center gap-4'>
                    <button onClick={() => decrement(setAdults, adults)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      -
                    </button>
                    <span>{adults}</span>
                    <button onClick={() => increment(setAdults, adults)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      +
                    </button>
                  </div>
              </div>
            </div>
            <Separator/>
            <div>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col xl:w-[295px] xl:h-[47px]  my-[13px] mx-[29px]'> 
                  <span>Children</span>
                  <span>Age 2-12</span>
                </div>
                  <div className='flex items-center gap-4'>
                    <button onClick={() => decrement(setChildren, children)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      -
                    </button>
                    <span>{children}</span>
                    <button onClick={() => increment(setChildren, children)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      +
                    </button>
                  </div>
              </div>
            </div>
              <Separator/>
              <div>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col xl:w-[295px] xl:h-[47px]  my-[13px] mx-[29px]'> 
                  <span>Infants</span>
                  <span>under 2</span>
                </div>
                  <div className='flex items-center gap-4'>
                    <button onClick={() => decrement(setInfants, infants)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      -
                    </button>
                    <span>{infants}</span>
                    <button onClick={() => increment(setInfants, infants)} className='rounded-full border-[1px] size-8 border-[#E6E8EC]'>
                      +
                    </button>
                  </div>
              </div>
            </div>
          </div>
          )}
        </div>
  )
}

export default Passangers