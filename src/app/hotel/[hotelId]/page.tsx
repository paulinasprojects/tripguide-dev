import { propertyImages } from '@/lib/data'
import ImageSlider from '@/components/image-slider'
import SearchBreadcrumbs from '@/components/search-breadcrumbs'
import HotelDetails from '@/components/hotel-details'
import HotelCategories from '@/components/hotel-categories'
import HotelInformation from '@/components/hotel-information'
import SelectRoom from '@/components/select-room'
import HotelReviews from '@/components/hotel-reviews'

const HotelDetailsPage = () => {
  return (
    <div>
      <div>
        <SearchBreadcrumbs
          isNotSearchPage
          hotelDetails='Hotel Details'
          className='pb-0 xl:pl-[100px] lg:pl-[20px] md:pl-[20px] max-sm:pl-5'
        />
      </div>
      {/* Hotel Details */}
      <HotelDetails/>
      <div className='xl:mx-[100px] md:mx-[20px] mb-10 max-sm:mx-5'>
        <ImageSlider images={propertyImages}/>
      </div>
      <HotelCategories/>
      <HotelInformation/>
      {/* Select Room */}
      <div className='xl:ml-[237px] md:ml-10 max-sm:mx-5 md:mx-0'>
       <SelectRoom/>
        <HotelReviews/>
      </div>
    </div>
  )
}

export default HotelDetailsPage