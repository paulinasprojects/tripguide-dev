import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface TabsProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
  icon: IconType;
}

const Tabs = ({label, isActive, onClick, icon: Icon}: TabsProps) => {
  return (
    <div 
      className={cn(isActive ? "flex items-center gap-1.5 outline-none border-b-blue100 border-b-2 p-2 text-black70 text-sm font-bold font-dm-sans" : "flex items-center gap-1.5 border-none outline-none text-gray10 text-sm font-bold font-dm-sans" )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      > 
      <Icon className={cn(isActive ? "size-6 text-[#3B3E44]" : "size-6 text-[#84878B]")}/>
      <span className={cn(isActive ? "text-[#3B3E44] text-sm font-bold font-dm-sans" : "text-sm font-bold font-dm-sans text-[#85878B]")}>{label}</span>
    </div>
  )
}

export default Tabs