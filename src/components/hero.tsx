
import Image from "next/image";
import hero from '/public/header-image.png';
import HeroTabs from "./hero-tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Passangers from "./passangers";

const Hero = () => {


  return (
    <div className="flex flex-col gap-12 bg-white100">
      <div className="relative">
        <Image
          src={hero}
          alt="hero"
          className="w-full max-h-[600px] object-cover"
        />
        <div className="absolute lg:top-16 lg:left-16 md:top-7 md:left-5 max-sm:top-5 max-sm:left-5">
          <span className="md:text-[64px] font-bold font-dm-sans max-sm:text-[32px]">
          Book With Us <br />
          And Enjoy your <br />
          Journey !
          </span>
        </div>
      </div>
      <div className="hero-card">
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
    </div>
  )
}

export default Hero