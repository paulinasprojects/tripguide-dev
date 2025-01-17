import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface Props {
  setOpen: () => void;
}

const PreferredLanguageModal = ({ setOpen }: Props) => {
  return (
    <div>
        <div className="modal-background">
        <div className="modal-container | w-[578px] h-[259px]">
          <div className="mx-[30px] md:mt-[26px] max-sm:mt-5">
            <div className="flex items-center justify-between">
              <span className="text-xl font-dm-sans font-medium text-[#3B3E44]">Preferred language</span>
              <X className="size-4 cursor-pointer" onClick={setOpen}/>
            </div>
            <div className="mt-5">
              <span className="text-sm font-normal font-font-roboto text-[#84878B]">This updates what you read on Tripguide, and how we communicate with you.</span>
            </div>
            <div className="mt-[30px]">
              <Select>
                <SelectTrigger className="w-[356px] h-[48px] rounded-[10px] text-sm text-[#84878B] font-normal font-dm-sans">
                  <SelectValue placeholder="English"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bulgarian" className=" text-sm text-[#84878B] font-normal font-dm-sans">Bulgarian</SelectItem>
                  <SelectItem value="german" className=" text-sm text-[#84878B] font-normal font-dm-sans">German</SelectItem>
                  <SelectItem value="french" className=" text-sm text-[#84878B] font-normal font-dm-sans">French</SelectItem>
                  <SelectItem value="italian" className=" text-sm text-[#84878B] font-normal font-dm-sans">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-[17px]">
              <button className="rounded-[6px] text-white bg-[#2756cc] px-5 py-2 text-md font-bold font-dm-sans hover:bg-black" onClick={setOpen}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferredLanguageModal