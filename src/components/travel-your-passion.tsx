import TravelYourPassionCard from './travel-your-passion-card'

const TravelYourPassion = () => {
  return (
    <div className='bg-[#FAFAFA] pt-[80px] pb-[80px]'>
       <div className="pt-10 flex flex-col items-center gap-3">
          <h2 className="text-headlineOne max-sm:text-[30px] font-bold font-dm-sans text-[#141416]">Travel Your Passion</h2>
          <span className="text-md font-normal font-dm-sans text-[#84878B]">Most Brilliant reasons Entrada should be <br className='max-sm:block md:hidden' /> your one-stop-shop!</span>
        </div>
        <div className='flex md:flex-row max-sm:flex-col gap-[30px] items-center justify-center mt-[50px] lg:px-5 md:px-5 xl:px-0'>
          <TravelYourPassionCard/>
        </div>
    </div>
  )
}

export default TravelYourPassion