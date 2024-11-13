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

const PreferredCurrencyModal = ({setOpen}: Props) => {
  return (
    <div>
        <div className="modal-background">
        <div className="modal-container  | w-[566px] h-[224px]">
          <div className="mx-[30px] md:mt-[26px] max-sm:mt-5">
            <div className="flex items-center justify-between">
              <span className="text-xl font-dm-sans font-medium text-[#3B3E44]">Preferred Currency</span>
              <X className="size-4 cursor-pointer" onClick={setOpen}/>
            </div>
            <div className="mt-[24px]">
              <Select>
                <SelectTrigger className="w-[365px] h-[48px] rounded-[10px] text-sm text-[#84878b] font-normal font-dm-sans">
                  <SelectValue placeholder="US Dollar"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="euro" className="text-sm text-[#84878b] font-normal font-dm-sans">Euro</SelectItem>
                  <SelectItem value="pound" className="text-sm text-[#84878b] font-normal font-dm-sans">British Pound</SelectItem>
                  <SelectItem value="bulgarian-lev" className="text-sm text-[#84878b] font-normal font-dm-sans">Bulgarian Lev</SelectItem>
                  <SelectItem value="swiss-franc" className="text-sm text-[#84878b] font-normal font-dm-sans">Swiss Franc</SelectItem>
                  <SelectItem value="japanese-yen" className="text-sm text-[#84878b] font-normal font-dm-sans">Japanese Yen</SelectItem>
                  <SelectItem value="australian-dollar" className="text-sm text-[#84878b] font-normal font-dm-sans">Australian Dollar</SelectItem>
                  <SelectItem value="canadian-dollar" className="text-sm text-[#84878b] font-normal font-dm-sans">Canadian Dollar</SelectItem>
                  <SelectItem value="indian-rupee" className="text-sm text-[#84878b] font-normal font-dm-sans">Indian Rupee</SelectItem>
                </SelectContent>
              </Select> 
            </div>
            <div className="mt-5">
              <button className="rounded-[6px] text-white bg-[#2756cc] px-5 py-2 text-md font-bold font-dm-sans" onClick={setOpen}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferredCurrencyModal