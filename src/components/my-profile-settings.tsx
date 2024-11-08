import { Check } from "lucide-react"
import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"
import ProfileSettingsForm from "./profile-settings-form"

const MyProfileSettings = () => {
  return (
    <div>
      <div>
        <h2 className="lg:text-headlineOne md:text-headlineThree font-bold font-dm-sans max-sm:hidden md:block">My Profile</h2>
      </div>
      <Separator className="my-[30px] xl:w-[787px] lg:w-[350px] md:w-[350px]"/>
      <div className=" bg-white rounded-[20px] | card-box-shadow">
        <div className="py-[24px] px-10">
          <div className="flex items-center max-sm:items-start max-sm:flex-col gap-[23px]">
            <span className="lg:text-headlineFour font-medium font-dm-sans md:text-sm">Complete your Profile</span>
            <div className="flex gap-[27px] items-center">
              <Progress value={70} className="xl:w-[330px] lg:w-[250px] md:w-[150px] max-sm:w-[229px]"/>
              <span className="text-headlineFour font-medium font-dm-sans">70%</span>
            </div>
          </div>
          <div className="my-5">
          <span className="lg:text-md md:text-sm font-normal font-dm-sans">Get the best out of  TripGuide by adding the remaining details!</span>
          </div>
          <div className="flex md:items-center gap-[30px] max-sm:flex-col max-sm:items-start">
            <span className="lg:text-sm md:text-[12px] font-dm-sans flex items-center gap-[12px] rounded-[30px] bg-[#E7ECF3] px-3 py-1.5">
                <Check className="text-white bg-blue100 size-4  rounded-full "/>
              Verified Email ID
              </span>
            <span className="lg:text-sm md:text-[12px]  font-dm-sans flex items-center gap-[12px] rounded-[30px] bg-[#E7ECF3] px-3 py-1.5">
              <Check className="text-white bg-blue100 w-4 h-4 rounded-full"/>
              Verified Mobile Number
              </span>
            <span className="lg:text-sm md:text-[12px]  font-dm-sans flex items-center gap-[12px] rounded-[30px] bg-[#E7ECF3] px-3 py-1.5">
              <Check className="text-white bg-blue100 w-4 h-4 rounded-full"/> 
              Complete Basic Info
              </span>
          </div>
        </div>
      </div>
        <ProfileSettingsForm/>
    </div>
  )
}

export default MyProfileSettings