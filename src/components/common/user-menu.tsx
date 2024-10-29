import Image from "next/image";
import profileImage from '/public/profile-image.png';
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from "../ui/button";

const UserMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <Image
              src={profileImage}
              alt="image"
            />
            <span className="text-sm font-bold text-black80 font-dm-sans lg:block max-sm:hidden">Delowar</span>
            <ChevronDown className="block max-sm:hidden"/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans">Profile Settings</DropdownMenuItem>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans">My Reservations</DropdownMenuItem>
          <DropdownMenuItem>
            <Button size="sm" className="w-full">Log out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserMenu