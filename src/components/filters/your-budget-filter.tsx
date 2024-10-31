import { yourBudgetFilters } from "@/lib/data"
import FilterName from "./filter-name"
import Filter from "../filter"
import { Separator } from "../ui/separator"

const YourBudgetFilter = () => {
  return (
  <div>
    <FilterName
      name="Your budget"
    />
    {yourBudgetFilters.map((filter) => (
      <Filter
        key={filter.id}
        label={filter.budget}
      />
    ))}
    <Separator className="mt-[15px] mb-[15px]"/>
  </div>
  )
}

export default YourBudgetFilter