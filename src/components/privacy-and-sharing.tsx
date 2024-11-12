import Switch from "./switch"
import { Separator } from "./ui/separator"

const PrivacyAndSharing = () => {
  return (
    <div>
      <span className="text-headlineFour font-medium font-dm-sans">Messages</span>
      <div className="flex mt-10 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className="text-md font-medium font-dm-sans">Share my activity on Facebook</span>
          <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Turning this on means your activity will be shared to Facebook, which could include your username,<br /> 
          profile photo, and locations you visited.</span>
        </div>
        <div className="mx-auto">
        <Switch className=""/>
        </div>
    </div>
    <Separator className="my-[24px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
      <div className="flex mt-10 items-center">
            <div className="flex flex-col gap-[4px]">
              <span className="text-md font-medium font-dm-sans">Include my profile and listing in search engines</span>
              <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Turning this on means search engines, like Google, will display your profile and listing pages in search results.</span>
            </div>
            <div className="mx-auto">
            <Switch className="-ml-10 max-sm:-ml-0"/>
            </div>
        </div>
    </div>
  )
}

export default PrivacyAndSharing