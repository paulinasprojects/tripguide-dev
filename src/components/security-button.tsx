import { cn } from "@/lib/utils";

interface Props {
  label: string;
  className?: string
}

const SecurityButton = ({label, className}: Props) => {
  return (
    <button className={cn("rounded-[30px] border-[1px] border-[#B1B5C3] px-4 py-1.5 text-sm font-bold font-dm-sans hover:bg-black hover:text-white", className)}>{label}</button>
  )
}

export default SecurityButton