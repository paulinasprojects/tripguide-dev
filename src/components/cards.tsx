import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardsProps {
  className?: string;
  image?: string;
}

const Cards = ({ className, image }: CardsProps) => {
  return (
    <div className={cn("bg-[#BDDBA6] rounded-[20px] w-[336px] h-[161px]", className)}>
      <div className="my-[23px] mx-[18.5px]">
        <div className="flex justify-between items-center">
          <img src="/union.svg" alt="" />
          <EllipsisVertical className="cursor-pointer"/>
        </div>
        <div className="mt-[27px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-md font-medium font-dm-sans">8948   xxxx  xxxx  7894</span>
            <div className="flex justify-between">
            <span className="text-md font-medium font-dm-sans">Holder Name</span>
            <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards