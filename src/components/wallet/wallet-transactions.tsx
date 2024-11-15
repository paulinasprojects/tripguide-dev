import Image from "next/image"
import OrangeCurrency from '/public/orange-currency.svg';
import BlueCurrency from '/public/blue-currency.svg';
import { Separator } from "../ui/separator";
import TransactionChips from "./transaction-chips";
import Bookings from "./bookings";

const WalletTransactions = () => {
  return (
    <div className="bg-white xl:w-[670px] rounded-[20px] max-sm:w-[380px]">
      <div className="my-[26px] mx-[32.5px] max-sm:my-[10px] max-sm:mx-[16px]">
        <div className="flex flex-col gap-[18px]">
        <span className="text-headlineThree font-bold font-dm-sans max-sm:text-[30px]">Wallet Transactions</span>
        <div className="flex items-center gap-[14px]">
          <button className="bg-blue100 text-white text-[17px] max-sm:text-[15px] font-font-roboto px-4 py-2 rounded-[5px] font-bold uppercase">All</button>
          <button className="flex items-center gap-2.5 rounded-[5px] bg-[#FEFEFE] border-[1px] border-[#E4E4E4] px-4 py-2 text-md max-sm:text-[12px] text-[#84878B] font-normal font-dm-sans">
            <Image
              src={BlueCurrency}
              alt="currency"
              width={22}
              height={22}
            />
            My Cash
          </button>
          <button className="flex items-center gap-2.5 rounded-[5px] bg-[#FEFEFE] border-[1px] border-[#E4E4E4] px-4 py-2 text-md max-sm:text-[12px] text-[#84878B] font-normal font-dm-sans">
            <Image
              src={OrangeCurrency}
              alt="currency"
              width={22}
              height={22}
            />
            Reward Bonus
          </button>
        </div>  
        </div>
        <Separator className="my-[26px]"/>
          <TransactionChips/>
          <div className="mt-[22px]">
            <Bookings/>
          </div>
      </div>
    </div>
  )
}

export default WalletTransactions