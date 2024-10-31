import Filters from "@/components/filters"
import Search from "@/components/search"
import SearchHotels from "@/components/search-hotels"

const SearchPage = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Search/>
      </div>
      <div className="flex gap-[50px]">
        {/* Left */}
        <div className="hidden lg:block">
          <Filters/>
        </div>
        {/* Right */}
        <div>
          <SearchHotels/>
        </div>
      </div>
    </div>
  )
}

export default SearchPage