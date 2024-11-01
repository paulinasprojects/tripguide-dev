import HotelAmenities from "./hotel-amenities"
import HotelFeatures from "./hotel-features"
import HotelPriceSection from "./hotel-price-section"

const HotelInformation = () => {
  return (
    <div className="mx-[100px] mb-[70px]  max-sm:mx-5">
      {/* Flex Container */}
      <div className="flex gap-[91px] max-sm:flex-col">
        {/* Left */}
        <div>
          <div className="flex flex-col gap-[22px]">
            <span className="font-font-roboto font-medium text-[40px] text-[#222529]">Exclusive room in house</span>
            <span className="font-font-roboto font-medium text-2xl text-[#84878B]">Zurich, Switzerland</span>
          </div>
          <div className="mt-[70px]">
            <span className="text-md font-font-roboto font-normal">
              Arabian Park Hotel is a great choice for travellers looking for a 3 star hotel in Dubai. It is located in Bur  <br /> Dubai. This Hotel stands out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai <br /> Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8 kms).
            </span>
          </div>
          <HotelFeatures/>
          <HotelAmenities/>
        </div>
        {/* Right */}
        <div>
          <HotelPriceSection/>
        </div>
      </div>
    </div>
  )
}

export default HotelInformation