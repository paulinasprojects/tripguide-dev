import { Search } from "lucide-react"
import PopularFilter from "./filters/popular-filter"
import PriceRangeFilter from "./filters/price-range-filter"
import PropertyTypeFilter from "./filters/property-type-filter"
import YourBudgetFilter from "./filters/your-budget-filter"
import FacilitiesFilter from "./filters/facilities-filter"

const Filters = () => {
  return (
    <div className="bg-[#fafafb] pl-[70px]">
      <div className="flex flex-col gap-[14px] pb-[30px]">
        <span className="text-lg font-medium font-dm-sans">Search location or property</span>
        <div className="relative">
          <input type="text" placeholder="Search location or property" className="w-[290px] h-[53px] rounded-[10px] bg-white p-5" />
          <Search className="absolute top-5 right-4 size-4 text-[#B1B5C3]"/>
        </div>
      </div>
      <div>
        {/* Popular Filter */}
        <PopularFilter/>
        {/* Price Range Filter */}
          <PriceRangeFilter/>
          {/* Property Type Filter */}
          <PropertyTypeFilter/>
          {/* Your Budget Filter */}
          <YourBudgetFilter/>
          {/* Facilities Filter */}
          <FacilitiesFilter/>
      </div>
    </div>
  )
}

export default Filters