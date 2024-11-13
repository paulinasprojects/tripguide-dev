"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import profileImage from '/public/profile-image.png';
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";

const UserMenu = () => {
  const router = useRouter();

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
          <DropdownMenuItem className="p-4 font-bold font-dm-sans" onClick={() => router.push("/profile")}>Profile</DropdownMenuItem>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans" onClick={() => router.push("/account-settings")}>Account Settings</DropdownMenuItem>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans" onClick={() => router.push("/my-reservations")}>My Reservations</DropdownMenuItem>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans" onClick={() => router.push("/my-wallet")}>Wallet</DropdownMenuItem>
          <DropdownMenuItem className="p-4 font-bold font-dm-sans" onClick={() => router.push("/my-rewards")}>Rewards</DropdownMenuItem>
          <DropdownMenuItem>
            <Button size="sm" className="w-full font-bold font-dm-sans text-white bg-blue100">Log out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserMenu