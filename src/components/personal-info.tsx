import { Pencil } from "lucide-react"
import PersonalInfoForm from "./personal-info-form"

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex items-center lg:gap-[475px] md:gap-[50px] max-sm:gap-[50px]">
        <span className="text-headlineFour font-dm-sans font-medium">Account info</span>
        <button className="flex items-center gap-2 rounded-[30px] border-[1px] border-[#B1B5C3] text-sm font-medium font-dm-sans py-2 px-8">
          <Pencil className="size-3"/>
          Edit
        </button>
      </div>
      <div className="mt-10">
        <PersonalInfoForm/>
      </div>
    </div>
  )
}

export default PersonalInfo