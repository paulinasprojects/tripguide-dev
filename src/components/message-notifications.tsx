import Switch from "./switch"
import { Separator } from "./ui/separator"

const MesssageNotifications = () => {
  return (
    <div>
    <span className="text-headlineFour font-medium font-dm-sans">Messages</span>
    <div className="flex mt-10 items-center">
      <div className="flex flex-col gap-[4px]">
        <span className="text-md font-medium font-dm-sans">Email</span>
        <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Receive notifications via email</span>
      </div>
      <div className="mx-auto">
      <Switch className="ml-[40px]"/>
      </div>
    </div>
    <Separator className="my-[24px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
    <div className="flex mt-10 items-center">
      <div className="flex flex-col gap-[4px]">
        <span className="text-md font-medium font-dm-sans">Text messages</span>
        <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Receive notifications via mobile phone</span>
      </div>
      <div className="mx-auto">
      <Switch className=""/>
      </div>
    </div>
    <Separator className="my-[24px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
    <div className="flex mt-10 items-center">
      <div className="flex flex-col gap-[4px]">
        <span className="text-md font-medium font-dm-sans">Browser notifications</span>
        <span className="text-[12px] text-[#84878B] font-dm-sans font-normal">Receive notifications on your browser</span>
      </div>
      <div className="mx-auto">
      <Switch className=""/>
      </div>
    </div>
    <Separator className="my-[24px] lg:w-[740px] md:w-[500px] max-sm:w-[350px]"/>
    </div>
  )
}

export default MesssageNotifications