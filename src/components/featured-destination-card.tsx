const FeaturedDestinationCard = () => {
  return (
    <div>
      <div className="flex md:flex-row xl:gap-[30px] lg:gap-0 items-center justify-center mt-[50px] max-sm:flex-col max-sm:gap-5">
        {/* Left */}
        <div className="flex flex-col gap-[29px] lg:p-5 md:p-5">
          <div className="relative">
            <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1730103093/barelona-two_qycxxz.jpg" alt="" className="large-card" />
            <span className="absolute top-5 left-5 text-red100 text-lg font-bold font-dm-sans px-4 rounded-[20px] bg-white100">3.5</span>
            <span className="absolute bottom-10 left-5 text-headlineTwo max-sm:text-headlineFour font-bold font-dm-sans text-white100">Barcelona Tour</span>
            <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-lg">
                <img src="/user-image.png" alt="" className="rounded-full" />
                196 Activities
              </span>
            </div>
          </div>
          <div className="flex md:flex-row max-sm:flex-col lg:gap-[54px] md:gap-5 max-sm:gap-5">
            <div className="relative">
              <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1729963616/london_iu56qo.jpg" alt="" className="medium-card" />
              <span className="absolute top-5 left-5 text-red100 text-lg font-bold font-dm-sans px-4 rounded-[20px] bg-white100">3.5</span>
              <span className="absolute bottom-10 left-5 text-headlineFour font-bold font-dm-sans text-white100">London, United Kingdom</span>
              <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-sm">
                  <img src="/user-image.png" alt="" className="rounded-full size-5" />
                  196 Activities
                </span>
              </div>
            </div>
              <div className="relative">
                <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1729963616/australia-two_lwvl70.jpg" alt="" className="medium-card" />
                <span className="absolute top-5 left-5 text-red100 text-lg font-bold font-dm-sans px-4 rounded-[20px] bg-white100">3.5</span>
                <span className="absolute bottom-10 left-5 text-headlineFour font-bold font-dm-sans text-white100">Melbourne Tour</span>
              <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-sm">
                  <img src="/user-image.png" alt="" className="rounded-full size-5" />
                  196 Activities
                </span>
              </div>
              </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-[27px] md:p-5 lg:p-5 xl:p-0">
          <div className="relative">
            <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1729963616/australia_fg2rdv.jpg" alt="" className="small-card" />
            <span className="absolute top-5 left-5 text-red100 text-[13.36px] font-bold font-dm-sans px-3 rounded-[20px] bg-white100">3.5</span>
            <span className="absolute bottom-10 left-5 text-lg font-bold font-dm-sans text-white100">Australia Tour</span>
              <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-[10px]">
                  <img src="/user-image.png" alt="" className="rounded-full size-5" />
                  196 Activities
                </span>
              </div>
          </div>
          <div className="relative">
           <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1729963617/japan_hume9d.jpg" alt="" className="small-card" />
           <span className="absolute top-5 left-5 text-red100 text-[13.36px] font-bold font-dm-sans px-3 rounded-[20px] bg-white100">3.5</span>
           <span className="absolute bottom-10 left-5 text-lg font-bold font-dm-sans text-white100">Japan Tour</span>
              <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-[10px]">
                  <img src="/user-image.png" alt="" className="rounded-full size-5" />
                  196 Activities
                </span>
              </div>
          </div>
          <div className="relative">  
            <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1729963616/tokyo_so1nui.jpg" alt="" className="small-card"  />
            <span className="absolute top-5 left-5 text-red100 text-[13.36px] font-bold font-dm-sans px-3 rounded-[20px] bg-white100">3.5</span>
            <span className="absolute bottom-10 left-5 text-lg font-bold font-dm-sans text-white100">Tokyo Tour</span>
              <div className="absolute bottom-3 left-5">
              <span className="flex gap-2 text-white font-bold font-dm-sans text-[10px]">
                  <img src="/user-image.png" alt="" className="rounded-full size-5" />
                  196 Activities
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestinationCard