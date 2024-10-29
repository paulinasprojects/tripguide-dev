import Image from "next/image";
import hero from '/public/header-image.png';
import HeroTabs from "./hero-tabs";
import { ChevronDown } from "lucide-react";

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
            <div className="flex gap-5 max-sm:mt-3 mt-2">
              <span className="flex gap-2 text-[#3B3E44] text-lg font-medium font-dm-sans">
                Round trip
                <ChevronDown className="size-5 mt-1 cursor-pointer"/>
              </span>
              <span className="flex gap-2 text-[#3B3E44] text-lg font-medium font-dm-sans">
                1 passanger
                <ChevronDown className="size-5 mt-1 cursor-pointer"/>
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero