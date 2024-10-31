import { popularFilters } from "@/lib/data"
import FilterName from "./filter-name"
import Filter from "../filter"
import { Separator } from "@/components/ui/separator"

const PopularFilter = () => {
  return (
    <>
      <FilterName
        name="Popular Filter"
      />
      {popularFilters.map((filter) => (
        <Filter
          key={filter.id}
          label={filter.label}
        />
      ))}
        <span className="text-[#145CE6] font-medium text-md font-dm-sans">See More</span>
        <Separator className="mt-[15px]"/>
    </>
  )
}

export default PopularFilter