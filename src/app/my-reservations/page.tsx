import BookingTabContent from "@/components/booking-tab-content"
import Breadcrumb from "@/components/breadcrumb"

const MyReservations = () => {
  return (
    <div className="my-[50px] xl:mx-[135px] lg:mx-5 max-sm:mx-5 md:mx-5 max-sm:my-5">
      <Breadcrumb
        label="Bookings"
        href="/my-reservations"
      />
      <div className="mt-[50px] block  max-sm:hidden">
      <span className="text-headlineOne font-bold font-dm-sans">Bookings</span>
      </div>
      <div className="mt-[36px]">
        <BookingTabContent/>
      </div>
    </div>
  )
}

export default MyReservations