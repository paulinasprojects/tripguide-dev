import { FaStar, FaRegStar } from "react-icons/fa"

const HotelReviews = () => {
  return (
    <div className="xl:mr-[250px] mb-[62px] lg:mr-5 md:mr-5 max-sm:mr-0">
      <div className="flex flex-col"> 
        <div className="flex items-center justify-between">
          <span className='text-headlineThree font-bold font-dm-sans  mb-[20px] max-sm:text-xl'>Attach your Review</span>
          <div className="flex gap-[12px]">
            <FaStar className="text-[#FFC542] size-5"/>
            <FaStar className="text-[#FFC542] size-5"/>
            <FaStar className="text-[#FFC542] size-5"/>
            <FaStar className="text-[#FFC542] size-5"/>
            <FaRegStar className="text-[#FFC542] size-5"/>
          </div>
        </div>
        <div>
          <textarea className="lg:w-[970px] h-[134px] md:w-[720px] max-sm:w-[400px] rounded-[12px] resize-none pt-5 pl-5 bg-[#F4F5F6]" placeholder="Write your detailed review here..."/>
        </div>
        <div className="ml-auto flex items-center gap-5 mt-5">
          <button className="bg-[#F4F5F6] py-1.5 px-4 rounded-[10px] font-bold text-md text-[#84878B] font-dm-sans">Cancel</button>
          <button className="py-1.5 px-4 rounded-[10px] bg-[#316BFF] text-white font-bold text-md font-dm-sans">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default HotelReviews