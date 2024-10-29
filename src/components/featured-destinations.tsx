import FeaturedDestinationCard from "./featured-destination-card";

const FeaturedDestinations = () => {
  return (
    <div className="bg-white100 pt-[80px]">
      <div className="pt-10 flex flex-col items-center gap-3">
        <h2 className="text-headlineOne max-sm:text-[30px] font-bold font-dm-sans text-[#141416]">Featured Destinations</h2>
        <span className="text-md font-normal font-dm-sans text-[#3B3E44]">Popular destinations open to visitors from Indonesia</span>
      </div>
      <FeaturedDestinationCard/>
    </div>
  )
}

export default FeaturedDestinations