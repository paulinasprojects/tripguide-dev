import React from 'react'
import { Progress } from './ui/progress'

const PriceRange = () => {
  return (
    <div className='py-5'>
      <div className='flex flex-col'>
      <div>
        <Progress value={68} className=''/>
      </div>
      <div className='flex justify-between mt-[24px] pr-5'>
        <span>$50</span>
        <span>$150</span>
      </div>
      </div>
    </div>
  )
}

export default PriceRange