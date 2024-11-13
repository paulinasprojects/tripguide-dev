"use client";

import { useState } from "react";
import TabContent from "./tab-content";
import TotalBookings from "./bookings/total-bookings";
import UpcomingBookings from "./bookings/upcoming-bookings";
import CanceledBookings from "./bookings/canceled-bookings";
import BookingTabs from "./booking-tabs";

const BookingTabContent = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const getContent = () => {
    switch (toggleState) {
      case 1:
        return <TotalBookings/>;
      case 2:
        return <UpcomingBookings/>;
      case 3:
        return <CanceledBookings/>;
        default:
          return null;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-[116px] max-sm:gap-[24px]">
        <BookingTabs
          label="Total bookings (16)"
          isActive={toggleState === 1}
          onClick={() => setToggleState(1)}
        />
        <BookingTabs
          label="Upcoming (0)"
          isActive={toggleState === 2}
          onClick={() => setToggleState(2)}
        />
        <BookingTabs
          label="Canceled (1)"
          isActive={toggleState === 3}
          onClick={() => setToggleState(3)}
        />
      </div>
      <div className="mt-[48px]">
        <TabContent content={getContent()}/>
      </div>
    </div>
  )
}

export default BookingTabContent