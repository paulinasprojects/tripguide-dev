import ExploreTheWorld from "@/components/explore-the-world";
import FeaturedDestinations from "@/components/featured-destinations";
import Hero from "@/components/hero";
import MainHero from "@/components/main-hero";
import TopTour from "@/components/top-tour";
import TravelYourPassion from "@/components/travel-your-passion";
import TrendingCities from "@/components/trending-cities";

export default function Home() {
  return (
    <>  
    <div>
     <Hero/>
     <MainHero/>
     <FeaturedDestinations/>
     <TopTour/>
     <ExploreTheWorld/>
     <TrendingCities/>
     <TravelYourPassion/>
    </div>
    </>
  );
}
