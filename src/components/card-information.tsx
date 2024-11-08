"use client";

import { useRouter } from "next/navigation";

const CardInformation = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col gap-[12px]">
        <label htmlFor="card-number">Card Number</label>
        <input id="card-number" type="number" placeholder="6666" className="p-5 w-[470px] h-[46px] rounded-[10px] max-sm:w-[300px] border-[1px] border-[#878CFF] bg-[#F4F5F6]" />
      </div>
      <div className="flex gap-[30px] items-center">
        <div className="flex flex-col gap-3">
          <label htmlFor="expiry">Expiry Date</label>
          <input id="expiry" type="text" placeholder="MM/YY" className="rounded-[10px] w-[220px] max-sm:w-[150px] h-[50px] bg-[#F4F5F6] p-5" />
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <label htmlFor="cvv">CVC/CVV</label>
          <input id="cvv" type="number" placeholder="CVV" className="rounded-[10px] w-[220px] max-sm:w-[150px] h-[50px] bg-[#F4F5F6] p-5" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="checkbox" className="size-6 rounded-[5px] accent-blue80"  />
          <label htmlFor="checkbox" className="text-md font-medium font-font-roboto">Save Card</label>
        </div>
      </div>
      <button className="mt-[36px] bg-[#316BFF] text-white rounded-[30px] py-1.5 px-8 text-lg font-medium font-dm-sans" onClick={() => router.push("/confirm-your-booking/success")}>Confirm and Reserve</button>
    </div>
  )
}

export default CardInformation