import { cn } from "@/lib/utils";

interface Props {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const BookingTabs = ({ label, isActive, onClick }: Props) => {
  return (
    <div
    className={cn(isActive ? "flex items-center gap-1.5 outline-none border-b-blue100 border-b-2 p-2 text-black70 text-lg font-bold font-dm-sans": "flex items-center gap-1.5 border-none outline-none text-gray10 text-lg font-bold font-dm-sans")}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <span className="text-lg font-medium font-dm-sans text-[#3B3E44] max-sm:text-[12px]">{label}</span>
  </div>
  )
}

export default BookingTabs