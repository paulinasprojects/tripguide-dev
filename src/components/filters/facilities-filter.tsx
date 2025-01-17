import { facilitiesFilters } from "@/lib/data"
import FilterName from "./filter-name"
import Filter from "../filter"

const FacilitiesFilter = () => {
  return (
    <div>
      <FilterName
        name="Facilities"
      />
      {facilitiesFilters.map((filter) => (
        <Filter
          key={filter.id}
          label={filter.facilityName}
          numberOfFacilities={filter.numberOfFacilities}
        />
      ))}
      <span className="text-[#145CE6] font-medium text-md font-dm-sans cursor-pointer">See More</span>
    </div>
  )
}

export default FacilitiesFilter