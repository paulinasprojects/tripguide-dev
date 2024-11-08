import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  hotelDetails?: string;
  isNotSearchPage?: boolean;
  bookingPage?: boolean;
  confirmAndPay?: string;
  successPage?: boolean;
  className?: string;
  congratulation?: string
}

const SearchBreadcrumbs = ({hotelDetails, isNotSearchPage, className, bookingPage, confirmAndPay, successPage, congratulation}: Props) => {
 
  return (
    <div className={cn(
      "flex items-center gap-2 pt-10 pl-[70px] pb-[70px]",
      className
      )}>
      <Link href="/" className="text-sm font-normal font-dm-sans">Home</Link>
      <ChevronRight/>
      <Link href="/search" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Hotel list</Link>
      {isNotSearchPage && (
        <div className="flex items-center gap-2">
          <ChevronRight/>
          <Link href="/hotel/1" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">{hotelDetails}</Link>
        </div>
      )}
      {bookingPage && (
        <div className="flex items-center gap-2">
           <ChevronRight/>
           <Link href="/hotel/1" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">{hotelDetails}</Link>
          <ChevronRight/>
          <Link href="/confirm-your-booking" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">{confirmAndPay}</Link>
        </div>
      )}
      {successPage && (
        <div className="flex items-center gap-2">
          <ChevronRight/>
          <Link href="/confirm-your-booking/success" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">{congratulation}</Link>
        </div>
      )}
    </div>
  )
}

export default SearchBreadcrumbs