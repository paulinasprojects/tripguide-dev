import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Switch = ({className}: Props) => {
  return (
    <label className={cn("relative inline-flex items-center cursor-pointer", className)}>
    <input type="checkbox" className="sr-only peer" />
    <div className="group peer ring-0 bg-[#e7ecf3] rounded-full outline-none duration-300 after:duration-300 w-[48px] h-[24px] shadow-md peer-checked:bg-blue100 peer-focus:outline-none  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[16px] after:w-[16px] after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95">
    </div>
  </label>
  )
}

export default Switch