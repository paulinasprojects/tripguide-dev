import ConfirmComponent from "@/components/confirm-component"
import SearchBreadcrumbs from "@/components/search-breadcrumbs"

const ConfirmYourBookingPage = () => {
  return (
    <div className="mb-[70px]">
      <div>
        <SearchBreadcrumbs
          bookingPage
          hotelDetails="Hotel Details"
          confirmAndPay="Confirm and pay"
          className="pb-[49px] xl:pl-[139px] flex max-sm:hidden md:pl-10"
        />
      </div>
      <ConfirmComponent/>
    </div>
  )
}

export default ConfirmYourBookingPage