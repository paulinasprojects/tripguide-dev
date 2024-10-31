import ImageSlider from '@/components/image-slider'
import SearchBreadcrumbs from '@/components/search-breadcrumbs'
import { Flag } from 'lucide-react'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { propertyImages } from '@/lib/data'

const HotelDetailsPage = () => {
  return (
    <div>
      <div>
        <SearchBreadcrumbs
          isNotSearchPage
          hotelDetails='Hotel Details'
          className='pb-0 pl-[100px] max-sm:pl-5'
        />
      </div>
      <div className='mt-[25px] flex flex-col gap-[25px] ml-[100px] mb-10 max-sm:ml-5'>
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
      <div className='mx-[100px] mb-10 max-sm:mx-5'>
      <ImageSlider images={propertyImages}/>
      </div>
    </div>
  )
}

export default HotelDetailsPage