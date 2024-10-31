import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SearchBreadcrumbs = () => {
 
  return (
    <div className="flex items-center gap-2 pt-10 pl-[70px] pb-[70px]">
      <Link href="/" className="text-sm font-normal font-dm-sans">Home</Link>
      <ChevronRight/>
      <Link href="/search" className="text-sm font-normal font-dm-sans text-[#B1B5C3]">Hotel list</Link>
    </div>
  )
}

export default SearchBreadcrumbs