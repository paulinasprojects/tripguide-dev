import { propertyImages } from '@/lib/data'
import ImageSlider from '@/components/image-slider'
import SearchBreadcrumbs from '@/components/search-breadcrumbs'
import HotelDetails from '@/components/hotel-details'
import HotelCategories from '@/components/hotel-categories'
import HotelInformation from '@/components/hotel-information'

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
      <HotelDetails/>
      <div className='mx-[100px] mb-10 max-sm:mx-5'>
        <ImageSlider images={propertyImages}/>
      </div>
      <HotelCategories/>
      <HotelInformation/>

    </div>
  )
}

export default HotelDetailsPage