import { propertyTypesFilters } from "@/lib/data";
import FilterName from "./filter-name";
import Filter from "../filter";
import { Separator } from "../ui/separator";

const PropertyTypeFilter = () => {
  return (
    <div>
      <FilterName
        name="Property Type"
      />
      {propertyTypesFilters.map((filter) => (
        <Filter
          key={filter.id}
          label={filter.type}
        />
      ))}
      <span className="text-[#145CE6] font-medium text-md font-dm-sans">See More</span>
        <Separator className="mt-[15px] mb-[15px]"/>
      </div>
  )
}

export default PropertyTypeFilter