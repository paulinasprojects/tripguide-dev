import Image from "next/image";
import hero from '/public/header-image.png';
import HeroSearch from "./hero-search";

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
      <HeroSearch className="hero-card"/>
    </div>
  )
}

export default Hero