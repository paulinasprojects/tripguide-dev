import { cn } from "@/lib/utils";

interface Props {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const RewardTabs = ({label, isActive, onClick}: Props) => {
  return (
    <div
      className={cn(isActive ? "flex items-center gap-1.5 outline-none border-b-blue100 border-b-2 p-2 text-black70 text-lg font-bold font-dm-sans": "flex items-center gap-1.5 border-none outline-none text-gray10 text-lg font-bold font-dm-sans")}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <span className={cn(isActive ? "text-[#222529] xl:text-lg font-bold font-dm-sans lg:text-md " : "xl:text-lg lg:text-md font-bold font-dm-sans text-[#84878B]")}>{label}</span>
    </div>
  )
}

export default RewardTabs