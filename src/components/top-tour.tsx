import TopTourCard from "./top-tour-card"

const TopTour = () => {
  return (
    <div className="bg-white100 pt-[80px]">
      <div className="pt-10 flex flex-col items-center gap-3">
        <h2 className="text-headlineOne max-sm:text-[30px] font-bold font-dm-sans text-[#141416]">Top Tour</h2>
        <span className="text-md font-normal font-dm-sans text-[#84878B]">Keep calm & Travel on</span>
      </div>
      <TopTourCard/>
    </div>
  )
}

export default TopTour