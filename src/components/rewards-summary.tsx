const RewardsSummary = () => {
  return (
    <>    
    <div className="flex items-center justify-center">
      {/* Flex container */}
      <div className="flex gap-[74px] items-center">
        {/* Left */}
        <div className="flex flex-col gap-2">
          <span className="text-headlineThree font-bold font-dm-sans max-sm:text-headlineFour">Elite status</span>
          <span className="text-md font-normal font-dm-sans max-sm:text-[12px]">Points Earned in 2024</span>
        </div>
        {/* Right */}
        <div className="flex flex-col items-center gap-2 bg-white rounded-[10px] py-3 px-8">
          <span className="text-lg font-dm-sans font-medium">18,592</span>
          <span className="text-sm font-normal font-dm-sans text-[#84878B]">(worth 37 USD)</span>
        </div>
      </div>
    </div>
    <div className="text-center mt-[50px]">
      <span className="text-[#84878B] text-md font-normal font-dm-sans max-sm:text-sm">25 USD is the minimum rewards claim at a time</span>
    </div>
    <div className="mt-[70px] md:flex gap-[94px] justify-center max-sm:gap-5 max-sm:grid max-sm:grid-cols-2">
      <div className="flex flex-col items-center px-8 py-2.5 text-white bg-blue100 rounded-[10px]">
        <span className="font-medium text-sm font-dm-sans">Total Points</span>
        <span className="font-medium text-md font-dm-sans">Pending</span>
        <span className="text-sm font-dm-sans font-medium">0</span>
      </div>
      <div className="flex flex-col items-center px-8 py-2.5 text-white bg-[#FA8F54] rounded-[10px]">
        <span className="text-[12px] font-normal font-dm-sans">Accoumulated and</span>
        <span className="font-medium text-sm font-dm-sans">Available Points</span>
        <span className="font-medium text-sm font-dm-sans">10.00</span>
      </div>
      <div className="flex flex-col items-center px-8 py-2.5 text-white bg-[#58C27D] rounded-[10px]">
        <span className="text-[12px] font-normal font-dm-sans">Expiring</span>
        <span className="font-medium text-sm font-dm-sans">Dec 31,2024</span>
        <span className="font-medium text-sm font-dm-sans">0</span>
      </div>
    </div>
    </>
  )
}

export default RewardsSummary