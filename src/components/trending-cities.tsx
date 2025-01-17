import React from 'react'
import TrendingCitiesCard from './trending-cities-card'

const TrendingCities = () => {
  return (
    <div className='bg-[#F5F5F5] pt-[80px] pb-5'>
      <div className="pt-10 flex flex-col items-center gap-3">
        <h2 className="text-headlineOne max-sm:text-[30px] font-bold font-dm-sans text-[#141416]">Trending Cities</h2>
        <span className="text-md font-normal font-dm-sans text-[#3B3E44]">The most searched for cities on TripGuide</span>
      </div>
      <div className='mt-[50px] grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-x-0 gap-y-10 place-items-center'>
        <TrendingCitiesCard/>
      </div>
    </div>
  )
}

export default TrendingCities