import { Separator } from '@/components/ui/separator'
import Cards from './cards'
import CardInformation from './card-information'
import BookingInformationCard from './booking-information-card'

const images = [
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1730885944/master_card_y5cpaf.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1730885815/visa_r4hwqx.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1730726287/american_qzhabg.png",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1730885807/american-express_rn7m5s.png",
]

const ConfirmComponent = () => {
  return (
    <div className='xl:mx-[139px] lg:ml-5 md:mx-5 lg:mx-0 max-sm:mx-5 max-sm:mt-[30px]'>
      {/* Flex Container */}
      <div className='flex gap-[35px] max-sm:flex-col md:flex-col lg:flex-row'>
        {/* Left */}
        <div>
          <div>
            <h3 className='text-headlineTwo font-bold font-dm-sans max-sm:text-headlineThree'>Confirm your Booking</h3>
            <Separator className='mt-[24px]'/>
          </div>
          <div className='flex flex-col mt-10'>
            <span className='text-headlineThree font-bold font-dm-sans'>Your Tour</span>
            <div className='flex flex-col gap-[16px] mt-[30px] mb-10'>
              <input type="text" placeholder='June 27 - 30, 2020' className='bg-[#F4F4F6] rounded-[15px] p-5 w-[470px] h-[63px] max-sm:w-[370px]' />
              <input type="text" placeholder='1 passanger' className='bg-[#F4F4F6] rounded-[15px] p-5 w-[470px] h-[63px] max-sm:w-[370px]' />
            </div>
            <div className='mb-[31px]'>
              <span className='text-headlineThree font-bold font-dm-sans'>Credit Cards</span>
              <div className='flex gap-[13px] items-center'>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Separator className='mb-10'/>
          <div className='flex gap-5 max-sm:flex-col'>
            {/* Cards */}
            <Cards image="https://res.cloudinary.com/dymlzmyuo/image/upload/v1730884407/visa_bq1zwi.svg"/>
            <Cards className='bg-[#CED9FD]' image='https://res.cloudinary.com/dymlzmyuo/image/upload/v1730884517/card_xas0mz.svg'/>
          </div>
          <div className='mt-10'>
          <CardInformation/>
          </div>
        </div>
        {/* Right */}
        <div className='bg-white rounded-[20px] w-[435px] h-[880px] max-sm:w-[335px] max-sm:h-[860px] lg:mt-20 md:mt-5 max-sm:mt-5'>
          <div className='my-[38px] mx-[37px]'>
            <BookingInformationCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmComponent