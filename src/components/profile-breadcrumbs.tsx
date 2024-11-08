import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  label: string;
  href: string;
}


const ProfileBreadcrumbs = ({label, href}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="text-sm font-normal font-dm-sans">Home</Link>
      <ChevronRight className="size-4"/>
      <Link href={href} className="text-sm font-normal font-dm-sans text-[#B1B5C3]">{label}</Link>
    </div>
  )
}

export default ProfileBreadcrumbs