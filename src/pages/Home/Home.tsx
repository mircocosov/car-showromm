import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain";
import HomeFilters from "./HomeFilters";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeMain />
      <HomeFilters />
    </div>
  );
}
