import FilterName from "./filter-name";
import PriceRange from "../price-range";
import { Separator } from "../ui/separator";

const PriceRangeFilter = () => {
  return (
    <> 
      <div className="mt-5">
      <FilterName
        name="Price Range"
      />
      <PriceRange/>
      </div>
      <Separator className="mt-[15px] mb-[15px]"/>
    </>
  )
}

export default PriceRangeFilter