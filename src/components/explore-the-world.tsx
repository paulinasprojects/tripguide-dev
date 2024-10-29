import ExploreTheWorldCard from "./explore-the-world-card"

const ExploreTheWorld = () => {
  return (
    <div className="bg-white100 pb-5 pt-[80px]">
      <div className="pt-10 flex flex-col items-center gap-3">
        <h2 className="text-headlineOne max-sm:text-[30px] font-bold font-dm-sans text-[#141416]">Explore The World</h2>
        <span className="text-md font-normal font-dm-sans text-[#84878B]">10,788 beautiful places to go</span>
      </div>
      <div className="lg:flex max-sm:flex lg:flex-row md:grid md:grid-cols-2 max-sm:flex-col md:gap-[30px] max-sm:gap-[30px] items-center justify-center mt-[50px] md:ml-[50px] lg:ml-0">
      <ExploreTheWorldCard/>
      </div>
    </div>
  )
}

export default ExploreTheWorld