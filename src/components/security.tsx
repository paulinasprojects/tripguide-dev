import { TvMinimal } from "lucide-react"
import SecurityButton from "./security-button"
import { Separator } from "./ui/separator"

const Security = () => {
  return (
    <>
     <div>
        <span className="text-headlineFour font-medium font-dm-sans">Login</span>
        <div className="flex items-center mt-[17px]">
          <div className="flex flex-col gap-[7px]">
            <span className="text-sm font-medium font-dm-sans">Password</span>
            <span className="text-[12px] font-medium font-dm-sans text-[#84878B]">Last updated 1 month ago</span>
          </div>
          <button className="mx-auto rounded-[30px] border-[1px] border-[#B1B5C3] px-4 py-1.5 text-sm font-bold font-dm-sans">Update Password</button>
        </div>
        <Separator className="mt-[46px] mb-10 lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
          <span className="text-headlineFour font-medium font-dm-sans">Social accounts</span>
          <div className="flex gap-5 mt-[25px] max-sm:flex-col">
          <div className="flex gap-[134px] items-center">
            <div className="flex flex-col gap-[7px]">
              <span className="text-sm font-medium font-dm-sans">Facebook</span>
              <span className="text-[12px] font-normal font-dm-sans">Not connected</span>
            </div>
              <SecurityButton label="Connect" className="w-[110px] h-[30px] "/>
          </div>
          <Separator className="w-[1px] h-[60px] mx-[15px]"/>
          <div className="flex gap-[134px] items-center">
            <div className="flex flex-col gap-[7px]">
              <span className="text-sm font-medium font-dm-sans">Apple account</span>
              <span className="text-[12px] font-normal font-dm-sans">Not connected</span>
            </div>
              <SecurityButton label="Connect" className="w-[110px] h-[30px]"/>
          </div>
          </div>
          <Separator className="mt-[46px] mb-10 lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
          <span className="text-headlineFour font-medium font-dm-sans">Device history</span>
          <div className="mt-[34px]">
            <div className="flex">
              <div className="flex gap-5">
                <div className="w-[48px] h-[48px] border-[1px] border-[#E7ECF3] rounded-[10px] flex items-center justify-center">
                  <TvMinimal className="text-[#B1B5C3]"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-normal font-dm-sans text-[#84878B]">May 14, 2021 at 08:36pm</span>
                    <span className="text-sm font-bold font-dm-sans">Windows 10</span>
                    <span className="text-sm font-bold font-dm-sans">Chrome</span>
                  </div>
              </div>
              <SecurityButton label="Log out Device" className="mx-auto w-[140px] h-[38px]"/>
            </div>
          </div>
          <Separator className="my-[28px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
          <div className="">
            <div className="flex">
              <div className="flex gap-5">
                <div className="w-[48px] h-[48px] border-[1px] border-[#E7ECF3] rounded-[10px] flex items-center justify-center">
                  <TvMinimal className="text-[#B1B5C3]"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-normal font-dm-sans text-[#84878B]">May 14, 2021 at 08:36pm</span>
                    <span className="text-sm font-bold font-dm-sans">Windows 10</span>
                    <span className="text-sm font-bold font-dm-sans">Mozila Firefox</span>
                  </div>
              </div>
              <SecurityButton label="Log out Device" className="mx-auto w-[140px] h-[38px]"/>
            </div>
          </div>
          <Separator className="my-[28px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
          <div className="">
            <div className="flex">
              <div className="flex gap-5">
                <div className="w-[48px] h-[48px] border-[1px] border-[#E7ECF3] rounded-[10px] flex items-center justify-center">
                  <TvMinimal className="text-[#B1B5C3]"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-normal font-dm-sans text-[#84878B]">May 14, 2021 at 08:36pm</span>
                    <span className="text-sm font-bold font-dm-sans">iPhone 11</span>
                    <span className="text-sm font-bold font-dm-sans">Chrome</span>
                  </div>
              </div>
              <SecurityButton label="Log out Device" className="mx-auto w-[140px] h-[38px]"/>
            </div>
          </div>
      </div> 
    </>
  )
}

export default Security