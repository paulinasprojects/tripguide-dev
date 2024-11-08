import SearchBreadcrumbs from '@/components/search-breadcrumbs';
import BookedTrip from '@/components/booked-trip';

const Success = () => {

  return (
    <>
       <div>
        <SearchBreadcrumbs
          bookingPage
          successPage
          hotelDetails="Hotel Details"
          confirmAndPay="Confirm and pay"
          congratulation='Congratulations'
          className="pb-[49px] xl:pl-[139px] flex max-sm:hidden md:pl-10"
        />
      </div>
      <div className='xl:mx-[135px] mb-[70px] max-sm:mx-5 md:mx-5'>
        <BookedTrip/>
      </div>
    </>
  )
}

export default Success