"use client";
import { useState } from "react";
import AddCardModal from "./add-card-modal";
import Cards from "./cards";

const PaymentPayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-10">
      <span className="text-headlineFour font-medium font-dm-sans">Debit cards</span>
        <div className="flex lg:gap-[229px] mt-[30px] md:gap-10 max-sm:flex-col max-sm:gap-10">
          {/* left */}
          <div className="flex flex-col gap-[30px] max-sm:order-2">
          <Cards image="https://res.cloudinary.com/dymlzmyuo/image/upload/v1730884407/visa_bq1zwi.svg"/>
          <Cards className='bg-[#CED9FD]' image='https://res.cloudinary.com/dymlzmyuo/image/upload/v1730884517/card_xas0mz.svg'/>
          </div>
          {/* right */}
          <div className="max-sm:order-1">
            <button onClick={toggleModal} className="bg-blue100 text-white p-3 rounded-[30px] text-sm font-bold font-dm-sans">Add payment method</button>
          </div>
        </div>


        <div>
          {open && (
            <AddCardModal setOpen={toggleModal}/>
          )}
        </div>
    </div>
  )
}

export default PaymentPayout