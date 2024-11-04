import { FaStar } from "react-icons/fa";
import { reviews } from "@/lib/data";

const LatestReviews = () => {
  return (
    <div>
      <div className="flex flex-col">
      <span className='text-headlineFour font-bold font-dm-sans  mb-[20px] max-sm:text-xl'>Latest Reviews</span>
      <div className="flex flex-col gap-[30px] mb-[60px]">
      {reviews.map((review) => (
        <div className="bg-white lg:w-[943px] md:w-[710px] md:h-[250px]  lg:h-[211px] rounded-[16px] " key={review.id}>
          {/* Flex Container */}
          <div className="flex md:gap-[232px] max-sm:gap-5  mx-[30px] my-[28px] max-sm:flex-col md:flex-row">
            {/* Left */}
            <div className="flex items-center gap-[12px] md:mb-12 max-sm:mb-0">
              <img src={review.image} alt="" />
              <div className="flex flex-col">
                <span className="text-md font-dm-sans font-medium whitespace-nowrap">{review.name}</span>
                <span className="text-sm font-dm-sans font-normal text-[#84878B]">{review.location}</span>
                <div className="flex items-center gap-1.5 text-[12px] text-[#B1B5C3] whitespace-nowrap">
                  <span>45 Followers</span>
                  <span>68 Reviews </span>
                </div>
              </div>
            </div>
            {/* Right */}
            <div>
              <div className="flex items-center gap-[36px]">
                <div className="flex gap-1.5">
                  <FaStar className="text-[#FFC542]"/>
                  <FaStar className="text-[#FFC542]"/>
                  <FaStar className="text-[#FFC542]"/>
                  <FaStar className="text-[#FFC542]"/>
                  <FaStar className="text-[#FFC542]"/>
                </div>
                <div>
                  <span className="text-sm text-[#84878B] font-dm-sans font-normal">{review.date}</span>
                </div>
              </div>
              <div className="flex flex-col gap-[19px] mt-[20px]">
                <span className="text-md text-[#84878B] font-dm-sans font-normal">
                  {review.review}
                </span>
                <div className="flex lg:gap-[32px] md:gap-3 max-sm:gap-[32px]">
                  <button className="text-[#316BFF] text-md font-medium font-dm-sans rounded-[30px] bg-[#e8effc] px-4 py-1.5">Comment</button>
                  <button className="text-[#316BFF] text-md font-medium font-dm-sans rounded-[30px] bg-[#e8effc] lg:px-14 py-0.5 max-sm:px-5 md:px-5">Like</button>
                  <button className="text-[#316BFF] text-md font-medium font-dm-sans rounded-[30px] bg-[#e8effc] lg:px-14 py-1.5 max-sm:px-5 md:px-5">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="mb-14 text-center">
        <button className="border-[1px] border-[#B1B5C3] rounded-[47px] px-14 py-2 text-md font-medium font-dm-sans">View All</button>
      </div>
      </div>
    </div>
  )
}

export default LatestReviews