import HeroTabs from "./hero-tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Passangers from "./passangers";

interface HeroSearchPrps {
  className?: string;
}

const HeroSearch = ({className}: HeroSearchPrps) => {
  return (
    <div className={className}>
    <div className="grid grid-cols-2 max-sm:grid-cols-1">
      <HeroTabs/>
        <div className="flex gap-5 max-sm:mt-10">
          <Select>
            <SelectTrigger className="md:w-[180px] max-sm:w-[130px] outline-none border-none text-[#3B3E44] text-lg font-medium font-dm-sans">
              <SelectValue placeholder="Round trip"/>
              </SelectTrigger>  
              <SelectContent>
                <SelectItem value="round-trip" className="text-[#3B3E44] text-lg font-medium font-dm-sans">Round trip</SelectItem>
                <SelectItem value="one-way" className="text-[#3B3E44] text-lg font-medium font-dm-sans">One way</SelectItem>
              </SelectContent>
          </Select>      
          {/*  */}
          <Passangers/>
        </div>
    </div>
  </div>
  )
}

export default HeroSearch