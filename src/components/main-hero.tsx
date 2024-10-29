import PlacesCard from "./places-card";
import { HeroPlaces } from "@/lib/data";

const MainHero = () => {
  return (
    <div
    className="bg-white100 pt-10"
    >
      <div className="flex flex-col items-center justify-center pt-[53px]">
        <h2 className="lg:text-headlineOne md:text-headlineTwo max-sm:text-headlineFour text-[#23262F] font-bold font-dm-sans">Search a best place in the world</h2>
        <span className="text-md font-normal font-dm-sans text-[#84878B] max-sm:ml-2.5 md:ml-0">
          Whether you’re looking for places for a vacation. We are here to Guide you <br />
          about the details you need to check in and ease your trips in advance
        </span>
        <div className="grid xl:grid-cols-4 gap-[30px] mt-[70px] lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
        {HeroPlaces.map((place) => (
        <PlacesCard
          key={place.id}
          destinations={place.destinations}
          image={place.image}
          title={place.title}
          isActive={place.isActive}
        />
        ))}
        </div>
      </div>
    </div>
  )
}

export default MainHero