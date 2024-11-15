import Image from "next/image"
import OrangeCurrency from '/public/orange-currency.svg';
import BlueCurrency from '/public/blue-currency.svg';
import { Separator } from "../ui/separator";

const WalletBalance = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center bg-blue100 rounded-tr-[12px] rounded-tl-[12px]">
        <span className="text-headlineTwo font-medium font-dm-sans text-white pt-2.5">$ 6,824</span>
        <span className="text-white text-headlineFour font-dm-sans font-medium">Wallet Balance</span>
      </div>
      <div className="bg-white rounded-br-[12px] rounded-bl-[12px] ">
        <div className="mx-[32px] pt-[47px] max-sm:mx-5 max-sm:pt-5">
          <div className="flex justify-between" >
            <div className="flex items-center gap-[22px]">
            <Image
              src={OrangeCurrency}
              alt="currency"
            />
            <div className="flex flex-col">
              <span className="text-headlineFour font-dm-sans font-medium max-sm:text-xl">My Cash</span>
              <span className="text-[12px] text-[#FA8F54] font-normal font-dm-sans bg-[#fff4ec] rounded-[20px] px-2 py-0.5">Use Unrestricted</span>
            </div>
            </div>
            <div className="flex flex-col">
              <span className="ml-auto text-xl font-bold font-dm-sans max-sm:text-lg">1,956</span>
              <span className="text-md text-[#145CE6] font-normal font-dm-sans max-sm:text-sm">How to use?</span>
            </div>
          </div>
          <div className="flex justify-between mt-[32px] max-sm:mt-5" >
            <div className="flex items-center gap-[22px]">
            <Image
              src={BlueCurrency}
              alt="currency"
            />
            <div className="">
              <span className="text-headlineFour font-dm-sans font-medium max-sm:text-xl">Reward Bonus</span>
            </div>
            </div>
            <div className="flex flex-col">
              <span className="ml-auto text-xl font-bold font-dm-sans max-sm:text-lg">4,871</span>
              <span className="text-md text-[#145CE6] font-normal font-dm-sans max-sm:text-sm">How to use?</span>
            </div>
          </div>
          <Separator className="my-[30px] max-sm:my-5"/>
          <div className="text-center pb-5">
          <button className="text-md font-medium font-dm-sans bg-[#F4F5F6] rounded-[10px] px-8 py-2 max-sm:text-[12px] max-sm:px-4">$ 60 Reward Bonus will expire on Jan 24, 2025</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletBalance