"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface PlacesCardProps  {
  isActive?: boolean;
  image: string;
  title: string;
  destinations: number;
}


const PlacesCard = ({isActive, image, title, destinations }: PlacesCardProps) => {
  const router = useRouter();

  return (
    <div className={cn("flex flex-col gap-[18px] border-[1px] border-[#E7ECF3]  pb-4 lg:px-0 md:px-10 max-sm:px-10 rounded-[10px] cursor-pointer", isActive && "bg-white border-none cursor-pointer")} onClick={() => router.push("/search")}>
      <div className="mt-7 ml-7">
        <img
          src={image}
          alt="image"
          className="w-[70px] h-[70px] object-cover rounded-[10px]"
        />
      </div>
      <span className="ml-7 text-xl text-[#3B3E44] font-bold font-dm-sans">{title}</span>
      <span className="ml-7 text-sm font-medium font-dm-sans text-[#84878B]">{destinations} Destinations</span>
    </div>
  )
}

export default PlacesCard