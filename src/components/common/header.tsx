import Image from "next/image"
import { Bell } from "lucide-react"
import logo from '/public/logo-horizontal.svg';
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex items-center justify-between">
      <Image
        src={logo}
        alt="logo"
        className="lg:w-[148px] lg:h-[38px] max-sm:w-[96px] max-sm:h-[28px]"
      />
      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell width={24} height={24} className="cursor-pointer"/>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red100 text-white text-[8px] flex items-center justify-center font-medium">1</span>
        </div>
        <UserMenu/>
      </div>
      </div>
    </div>
  )
}

export default Header