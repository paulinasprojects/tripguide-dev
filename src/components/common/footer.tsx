import Image from "next/image"
import logo from '/public/logo-horizontal.svg';
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA]">
      <div>
      {/* CTA */}
      <div className="bg-blue80 md:mx-20 max-sm:mx-5 md:py-16 max-sm:py-6 px-12  rounded-[16px]">
        <div className="flex xl:flex-row items-center justify-evenly max-sm:flex-col md:flex-col md:gap-5 max-sm:gap-5 xl:gap-0">
          <div className="flex flex-col">
            <span className="text-white md:text-[44px] max-sm:text-xl font-extrabold font-font-roboto">Get our pro offers</span>
            <span className="text-white font-font-roboto font-normal md:text-md max-sm:text-[12px]">Create a visual identity for your company, and an <br /> overall brand</span>
          </div>
          <div className="relative">
            <input type="text" className="bg-white md:w-[468px] p-4 h-[65px] max-sm:w-[294px] rounded-[4px]" placeholder="Type your email here" />
            <button className="absolute right-2 top-1.5 md:w-[130px] max-sm:w-[120px] h-[55px] bg-[#353945] text-white rounded-[4px] text-md font-bold font-dm-sans">Subscribe</button>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="mt-[97px] bg-[#FAFAFA] mb-10">
        {/* Flex container */}
        <div className="flex md:flex-row max-sm:flex-col md:items-center xl:mx-32 lg:mx-20 md:mx-5 max-sm:ml-[30px] justify-between">
          {/* Logo container */}
          <div className="flex flex-col gap-[28px] max-sm:order-2">
            <div>
              <Image
                src={logo}
                alt="logo"
                className="lg:w-[148px] lg:h-[38px] max-sm:w-[96px] max-sm:h-[28px]"
              />
            </div>
            <span className="text-md text-[#84878B] font-normal font-dm-sans hidden lg:block">
              This is the team that specializes in <br />
              making sure in the find it a <br />
              your interior looks cool
            </span>
          </div>
          {/* Links */}
          <div className="flex md:flex-row max-sm:flex-col md:items-center gap-20 max-sm:order-1">
            <div className="flex flex-col gap-[14px]">
              <span className="text-headlineFour font-dm-sans font-medium text-[#222529]">Services</span>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Flight Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Car Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Fivestart Hotel</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel</Link>
            </div>
            <div className="flex flex-col gap-[14px]">
              <span className="text-headlineFour font-dm-sans font-medium text-[#222529]">Support</span>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Flight Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Car Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Fivestart Hotel</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel</Link>
            </div>
            <div className="flex flex-col gap-[14px] max-sm:mb-10 md:mb-0">
              <span className="text-headlineFour font-dm-sans font-medium text-[#222529]">Business</span>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Flight Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Car Booking</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Fivestart Hotel</Link>
              <Link href="/" className="text-md text-[#84878B] font-medium font-dm-sans">Travel</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer